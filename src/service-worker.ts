/// <reference types="@sveltejs/kit" />
import { build, files, version } from '$service-worker';

// Create a unique cache name for this deployment
const CACHE = `cache-${version}`;

const ASSETS = [
    ...build, // the app itself
    ...files  // everything in `static`
];

// Skip waiting to activate immediately on update
(self as any).addEventListener('install', (event: any) => {
    async function addFilesToCache() {
        const cache = await caches.open(CACHE);
        await cache.addAll(ASSETS);
    }

    event.waitUntil(
        addFilesToCache().then(() => (self as any).skipWaiting())
    );
});

(self as any).addEventListener('activate', (event: any) => {
    async function deleteOldCaches() {
        for (const key of await caches.keys()) {
            if (key !== CACHE) await caches.delete(key);
        }
    }

    event.waitUntil(
        deleteOldCaches().then(() => (self as any).clients.claim())
    );
});

(self as any).addEventListener('fetch', (event: any) => {
    // Ignore non-GET requests
    if (event.request.method !== 'GET') return;

    const url = new URL(event.request.url);

    // Only handle same-origin requests
    if (url.origin !== location.origin) return;

    async function respond() {
        const cache = await caches.open(CACHE);

        // For static assets (build/files), use cache-first strategy
        if (ASSETS.includes(url.pathname)) {
            const cachedResponse = await cache.match(event.request);
            if (cachedResponse) {
                return cachedResponse;
            }
        }

        // For navigation requests (HTML pages), try network first with cache fallback
        if (event.request.mode === 'navigate') {
            try {
                const response = await fetch(event.request);
                if (response.status === 200) {
                    cache.put(event.request, response.clone());
                }
                return response;
            } catch {
                // Offline: try to serve cached page
                const cachedResponse = await cache.match(event.request);
                if (cachedResponse) {
                    return cachedResponse;
                }
                // If no cached page, serve the root page as fallback (SPA)
                const fallback = await cache.match('/');
                if (fallback) {
                    return fallback;
                }
            }
        }

        // For other requests, try network first with cache fallback
        try {
            const response = await fetch(event.request);

            if (!(response instanceof Response)) {
                throw new Error('invalid response from fetch');
            }

            if (response.status === 200) {
                cache.put(event.request, response.clone());
            }

            return response;
        } catch {
            const cachedResponse = await cache.match(event.request);
            if (cachedResponse) {
                return cachedResponse;
            }

            // Return a basic offline response for failed requests
            return new Response('Offline', {
                status: 503,
                statusText: 'Service Unavailable',
                headers: new Headers({
                    'Content-Type': 'text/plain'
                })
            });
        }
    }

    event.respondWith(respond());
});
