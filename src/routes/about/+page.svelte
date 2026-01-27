<script lang="ts">
    import ThemeToggle from "$lib/components/ThemeToggle.svelte";
    import LanguageSwitcher from "$lib/components/LanguageSwitcher.svelte";
    import { t } from "$lib/i18n";
</script>

<svelte:head>
    <title>About | Film Color Reference</title>
    <meta
        name="description"
        content="Learn about Film Color Reference - an interactive tool for comparing analog film color science."
    />
</svelte:head>

<div class="about-container">
    <!-- Header -->
    <header class="about-header">
        <a href="/" class="back-link">
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
            >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
            </svg>
            <span>{$t.backToApp}</span>
        </a>
        <div class="header-actions">
            <LanguageSwitcher />
            <ThemeToggle />
        </div>
    </header>

    <!-- Content -->
    <main class="about-content">
        <div class="hero-section">
            <div class="hero-icon">
                <!-- <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                >
                    <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="2.18"
                        ry="2.18"
                    />
                    <line x1="7" y1="2" x2="7" y2="22" />
                    <line x1="17" y1="2" x2="17" y2="22" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <line x1="2" y1="7" x2="7" y2="7" />
                    <line x1="2" y1="17" x2="7" y2="17" />
                    <line x1="17" y1="17" x2="22" y2="17" />
                    <line x1="17" y1="7" x2="22" y2="7" />
                </svg> -->
                <img src="/favicon.svg" alt="App Logo" width="48" height="48" />
            </div>
            <h1>{$t.appTitle}</h1>
            <p class="tagline">{$t.appSubtitle}</p>
        </div>

        <section class="content-section">
            <h2>{$t.whyBuiltTitle}</h2>
            <p>{$t.whyBuiltP1}</p>
            <p>
                {#each $t.whyBuiltP2.split("<LINK>") as part, i}
                    <span>{part}</span>
                    {#if i < $t.whyBuiltP2.split("<LINK>").length - 1}
                        <a
                            href="https://www.youtube.com/watch?v=AVFTtE-8C94"
                            target="_blank"
                            rel="noopener noreferrer">{$t.attributionLink}</a
                        >
                    {/if}
                {/each}
            </p>
            <p>{$t.whyBuiltP3}</p>
        </section>

        <section class="content-section">
            <h2>{$t.howItWorksTitle}</h2>
            <p>{$t.howItWorksIntro}</p>
            <ul class="feature-list">
                <li>
                    <span class="color-dot" style="background: #ef4444;"></span>
                    <strong>{$t.red}</strong> — {$t.howItWorksRedDesc}
                </li>
                <li>
                    <span class="color-dot" style="background: #eab308;"></span>
                    <strong>{$t.yellow}</strong> — {$t.howItWorksYellowDesc}
                </li>
                <li>
                    <span class="color-dot" style="background: #22c55e;"></span>
                    <strong>{$t.green}</strong> — {$t.howItWorksGreenDesc}
                </li>
                <li>
                    <span class="color-dot" style="background: #06b6d4;"></span>
                    <strong>{$t.cyan}</strong> — {$t.howItWorksCyanDesc}
                </li>
                <li>
                    <span class="color-dot" style="background: #3b82f6;"></span>
                    <strong>{$t.blue}</strong> — {$t.howItWorksBlueDesc}
                </li>
                <li>
                    <span class="color-dot" style="background: #d946ef;"></span>
                    <strong>{$t.magenta}</strong> — {$t.howItWorksMagentaDesc}
                </li>
            </ul>
            <p>{$t.howItWorksOutro}</p>
        </section>

        <section class="content-section">
            <h2>{$t.creditsTitle}</h2>
            <div class="credit-card">
                <div class="credit-icon">📽️</div>
                <div class="credit-content">
                    <h3>{$t.researchData}</h3>
                    <p>{$t.researchDataDesc}</p>
                </div>
            </div>
            <div class="credit-card">
                <div class="credit-icon">👨‍💻</div>
                <div class="credit-content">
                    <h3>{$t.development}</h3>
                    <p>{$t.developmentDesc}</p>
                </div>
            </div>
            <div class="credit-card">
                <div class="credit-icon">🎞️</div>
                <div class="credit-content">
                    <h3>{$t.filmKnowledge}</h3>
                    <p>{$t.filmKnowledgeDesc}</p>
                    <br />
                    <ul>
                        <li>
                            <a
                                href="https://www.youtube.com/watch?v=TCxoZlFqzwA"
                                target="_blank"
                                rel="noopener noreferrer"
                                >How Does Film ACTUALLY Work? (It's MAGIC)
                                [Photos and Development]</a
                            >
                        </li>
                        <li>
                            <a
                                href="https://www.youtube.com/watch?v=HQKy1KJpSVc"
                                target="_blank"
                                rel="noopener noreferrer"
                                >How Does Kodak Make Film? (Kodak Factory Tour
                                Part 1 of 3)</a
                            >
                        </li>
                        <li>
                            <a
                                href="https://www.youtube.com/watch?v=cAAJUHwh9F4"
                                target="_blank"
                                rel="noopener noreferrer"
                                >How Does Kodak Make Film? (Kodak Factory Tour
                                Part 2 of 3)</a
                            >
                        </li>
                        <li>
                            <a
                                href="https://www.youtube.com/watch?v=mrJP82ZZiag"
                                target="_blank"
                                rel="noopener noreferrer"
                                >This Thing is Crazy Fast - Kodak Part 3</a
                            >
                        </li>
                        <li>
                            <a
                                href="https://filmcolors.org"
                                target="_blank"
                                rel="noopener noreferrer"
                                >Timeline of Historical Colors in Photography
                                and Film in Chronological Order</a
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- <section class="content-section">
            <h2>{$t.techStack}</h2>
            <div class="tech-badges">
                <span class="tech-badge">SvelteKit</span>
                <span class="tech-badge">TypeScript</span>
                <span class="tech-badge">Vite</span>
                <span class="tech-badge">CSS</span>
            </div>
        </section> -->

        <!-- <div class="cta-section">
            <a href="/" class="cta-button">
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                </svg>
                {$t.startComparing}
            </a>
        </div> -->
    </main>

    <!-- Footer -->
    <footer class="about-footer">
        <p>
            {#each $t.madeWith.split("<RONNY>") as part, i}
                <span>{part}</span>
                {#if i < $t.madeWith.split("<RONNY>").length - 1}
                    <a
                        href="https://ron.nyc"
                        target="_blank"
                        rel="noopener noreferrer">Ronny</a
                    >
                {/if}
            {/each}
        </p>
    </footer>
</div>

<style>
    .about-container {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .about-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        background: var(--glass-bg);
        backdrop-filter: blur(20px);
        border-bottom: 1px solid var(--border-subtle);
        position: sticky;
        top: 0;
        z-index: 100;
    }

    .back-link {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--text-secondary);
        text-decoration: none;
        font-size: 0.9rem;
        font-weight: 500;
        transition: color 0.2s ease;
    }

    .back-link:hover {
        color: var(--accent-primary);
    }

    .header-actions {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .about-content {
        flex: 1;
        max-width: 720px;
        margin: 0 auto;
        padding: 3rem 2rem;
    }

    .hero-section {
        text-align: center;
        margin-bottom: 3rem;
    }

    .hero-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 80px;
        background: linear-gradient(135deg, #4c1d95 0%, #4338ca 100%);
        border-radius: 20px;
        color: white;
        margin-bottom: 1.5rem;
    }

    .hero-section h1 {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: 0.5rem;
        letter-spacing: -0.02em;
    }

    .tagline {
        font-size: 1.125rem;
        color: var(--text-muted);
    }

    .content-section {
        margin-bottom: 2.5rem;
    }

    .content-section h2 {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid var(--accent-primary);
        display: inline-block;
    }

    .content-section p {
        font-size: 1rem;
        color: var(--text-secondary);
        line-height: 1.75;
        margin-bottom: 1rem;
    }

    .content-section a {
        color: var(--accent-primary);
        text-decoration: none;
        font-weight: 500;
    }

    .content-section a:hover {
        text-decoration: underline;
    }

    .feature-list {
        list-style: none;
        padding: 0;
        margin: 1.5rem 0;
        display: grid;
        gap: 0.75rem;
    }

    .feature-list li {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem 1rem;
        background: var(--bg-secondary);
        border-radius: 10px;
        color: var(--text-secondary);
    }

    .color-dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        flex-shrink: 0;
    }

    .feature-list strong {
        color: var(--text-primary);
    }

    .credit-card {
        display: flex;
        gap: 1rem;
        padding: 1.25rem;
        background: var(--bg-card);
        border: 1px solid var(--border-subtle);
        border-radius: 14px;
        margin-bottom: 1rem;
    }

    .credit-icon {
        font-size: 1.5rem;
        flex-shrink: 0;
    }

    .credit-content h3 {
        font-size: 1rem;
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: 0.25rem;
    }

    .credit-content p {
        font-size: 0.9rem;
        color: var(--text-secondary);
        margin: 0;
        line-height: 1.5;
    }

    /* .tech-badges {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 1rem;
    }

    .tech-badge {
        padding: 0.5rem 1rem;
        background: rgba(139, 92, 246, 0.15);
        color: var(--accent-primary);
        border-radius: 9999px;
        font-size: 0.875rem;
        font-weight: 500;
    } */

    /* .cta-section {
        text-align: center;
        margin-top: 3rem;
        padding-top: 2rem;
        border-top: 1px solid var(--border-subtle);
    }

    .cta-button {
        display: inline-flex;
        align-items: center;
        gap: 0.75rem;
        padding: 1rem 2rem;
        background: linear-gradient(
            135deg,
            var(--accent-primary) 0%,
            #6366f1 100%
        );
        color: white;
        font-size: 1rem;
        font-weight: 600;
        border-radius: 12px;
        text-decoration: none;
        transition: all 0.2s ease;
        box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
    }

    .cta-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(139, 92, 246, 0.4);
    } */

    .about-footer {
        text-align: center;
        padding: 1.5rem 2rem;
        border-top: 1px solid var(--border-subtle);
        background: var(--glass-bg);
    }

    .about-footer p {
        font-size: 0.875rem;
        color: var(--text-muted);
        margin: 0;
    }

    @media (max-width: 768px) {
        .about-header {
            padding: 1rem;
        }

        .about-content {
            padding: 2rem 1rem;
        }

        .hero-section h1 {
            font-size: 1.75rem;
        }

        .tagline {
            font-size: 1rem;
        }

        .content-section h2 {
            font-size: 1.25rem;
        }

        .hero-icon {
            width: 64px;
            height: 64px;
        }

        /* .hero-icon svg {
            width: 32px;
            height: 32px;
        } */

        .credit-card {
            flex-direction: column;
            gap: 0.75rem;
        }
    }
</style>
