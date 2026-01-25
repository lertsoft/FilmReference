<script lang="ts">
    import { browser } from "$app/environment";
    import { t } from "$lib/i18n";

    let dismissed = $state(false);

    // Check localStorage on mount
    $effect(() => {
        if (browser) {
            dismissed =
                localStorage.getItem("attribution-banner-dismissed") === "true";
        }
    });

    function dismissBanner() {
        dismissed = true;
        if (browser) {
            localStorage.setItem("attribution-banner-dismissed", "true");
        }
    }
</script>

{#if !dismissed}
    <div class="attribution-banner">
        <div class="banner-content">
            <span class="banner-icon">📽️</span>
            <p>
                {$t.attributionText}
                <a
                    href="https://www.youtube.com/watch?v=AVFTtE-8C94"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {$t.attributionLink}
                </a>
                — {$t.attributionAuthor}
            </p>
        </div>
        <button
            class="dismiss-btn"
            onclick={dismissBanner}
            aria-label={$t.a11yDismissBanner}
        >
            <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
            >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
        </button>
    </div>
{/if}

<style>
    .attribution-banner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding: 0.75rem 1.5rem;
        background: linear-gradient(
            135deg,
            rgba(139, 92, 246, 0.15) 0%,
            rgba(236, 72, 153, 0.1) 100%
        );
        border-bottom: 1px solid rgba(139, 92, 246, 0.3);
        animation: slideDown 0.3s ease-out;
    }

    @keyframes slideDown {
        from {
            transform: translateY(-100%);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    .banner-content {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        flex: 1;
    }

    .banner-icon {
        font-size: 1.25rem;
    }

    .banner-content p {
        font-size: 0.875rem;
        color: var(--text-secondary);
        margin: 0;
        line-height: 1.5;
    }

    .banner-content a {
        color: var(--accent-primary);
        text-decoration: none;
        font-weight: 500;
        transition: color 0.2s ease;
    }

    .banner-content a:hover {
        color: #a78bfa;
        text-decoration: underline;
    }

    .dismiss-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 8px;
        background: transparent;
        color: var(--text-muted);
        transition: all 0.2s ease;
        flex-shrink: 0;
    }

    .dismiss-btn:hover {
        background: rgba(255, 255, 255, 0.1);
        color: var(--text-primary);
    }

    @media (max-width: 768px) {
        .attribution-banner {
            padding: 0.625rem 1rem;
        }

        .banner-content p {
            font-size: 0.8rem;
        }

        .banner-icon {
            display: none;
        }
    }
</style>
