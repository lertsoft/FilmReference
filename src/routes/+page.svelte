<script lang="ts">
  import { filmStocks, type FilmStock } from "$lib/data/filmStocks";
  import RadarChart from "$lib/components/RadarChart.svelte";
  import FilmSelector from "$lib/components/FilmSelector.svelte";
  import AnalysisPanel from "$lib/components/AnalysisPanel.svelte";
  import ThemeToggle from "$lib/components/ThemeToggle.svelte";
  import AttributionBanner from "$lib/components/AttributionBanner.svelte";
  import LanguageSwitcher from "$lib/components/LanguageSwitcher.svelte";
  import { t } from "$lib/i18n";

  let selectedFilms: FilmStock[] = $state([]);
  let showReference = $state(true);
  let searchQuery = $state("");

  // Mobile tab state
  let activeTab: "films" | "chart" | "analysis" = $state("chart");
  let mobileMenuOpen = $state(false);

  const filteredFilms = $derived(
    filmStocks.filter(
      (film) =>
        film.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        film.manufacturer.toLowerCase().includes(searchQuery.toLowerCase()),
    ),
  );

  function toggleFilm(film: FilmStock) {
    const index = selectedFilms.findIndex((f) => f.id === film.id);
    if (index >= 0) {
      selectedFilms = selectedFilms.filter((f) => f.id !== film.id);
    } else if (selectedFilms.length < 3) {
      selectedFilms = [...selectedFilms, film];
    }
  }

  function toggleReference() {
    showReference = !showReference;
  }
</script>

<svelte:head>
  <title>Film Color Reference | Quick Reference for Film Color Science</title>
  <meta
    name="description"
    content="Interactive references of analog film color science. Compare vectorscope analysis and color response of different film stocks."
  />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<div class="app-container">
  <!-- Skip Link for Keyboard Navigation -->
  <a href="#main-content" class="skip-link">{$t.a11ySkipToContent}</a>

  <!-- Header -->
  <header class="app-header">
    <nav class="header-left" aria-label={$t.a11yMainNavigation}>
      <div class="logo">
        <div class="logo-icon">
          <img src="/favicon.svg" alt="App Logo" width="24" height="24" />
        </div>
        <div class="logo-text">
          <h1>{$t.appTitle}</h1>
          <span class="subtitle desktop-only">{$t.appSubtitle}</span>
        </div>
      </div>
    </nav>
    <div class="header-actions">
      <div class="search-box desktop-only" role="search">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <label for="desktop-search" class="visually-hidden"
          >{$t.searchPlaceholder}</label
        >
        <input
          id="desktop-search"
          type="search"
          placeholder={$t.searchPlaceholder}
          bind:value={searchQuery}
          aria-label={$t.searchPlaceholder}
        />
      </div>
      <a href="/about" class="about-link desktop-only">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
        {$t.about}
      </a>
      <LanguageSwitcher />
      <ThemeToggle />
    </div>
  </header>

  <!-- Attribution Banner -->
  <AttributionBanner />

  <!-- Mobile Search Bar -->
  <div class="mobile-search mobile-only" role="search">
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
    <label for="mobile-search" class="visually-hidden"
      >{$t.searchPlaceholder}</label
    >
    <input
      id="mobile-search"
      type="search"
      placeholder={$t.searchPlaceholder}
      bind:value={searchQuery}
      aria-label={$t.searchPlaceholder}
    />
  </div>

  <!-- Mobile Tab Navigation -->
  <nav class="mobile-tabs mobile-only">
    <button
      class="tab-btn"
      class:active={activeTab === "films"}
      onclick={() => (activeTab = "films")}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
      <span>{$t.films}</span>
      {#if selectedFilms.length > 0}
        <span class="badge-count">{selectedFilms.length}</span>
      {/if}
    </button>
    <button
      class="tab-btn"
      class:active={activeTab === "chart"}
      onclick={() => (activeTab = "chart")}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
      <span>{$t.chart}</span>
    </button>
    <button
      class="tab-btn"
      class:active={activeTab === "analysis"}
      onclick={() => (activeTab = "analysis")}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
        />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
      <span>{$t.analysis}</span>
    </button>
  </nav>

  <!-- Main Content -->
  <main id="main-content" class="main-content">
    <!-- Screen reader announcements -->
    <div
      class="visually-hidden"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      {#if searchQuery && filteredFilms.length !== filmStocks.length}
        {filteredFilms.length} {$t.a11ySearchResults}
      {/if}
    </div>

    <!-- Left Panel - Film Selector -->
    <aside
      class="panel left-panel"
      class:mobile-hidden={activeTab !== "films"}
      aria-label={$t.a11yFilmSelection}
    >
      <FilmSelector
        films={filteredFilms}
        {selectedFilms}
        {showReference}
        onToggleFilm={toggleFilm}
        onToggleReference={toggleReference}
      />
    </aside>

    <!-- Center - Radar Chart -->
    <section
      class="panel center-panel"
      class:mobile-hidden={activeTab !== "chart"}
      aria-label={$t.a11yColorChart}
    >
      <div class="chart-wrapper">
        <RadarChart {selectedFilms} {showReference} />
      </div>
    </section>

    <!-- Right Panel - Analysis -->
    <aside
      class="panel right-panel"
      class:mobile-hidden={activeTab !== "analysis"}
      aria-label={$t.a11yAnalysisResults}
    >
      <AnalysisPanel {selectedFilms} />
    </aside>
  </main>

  <!-- Selected Films Floating Indicator (Mobile) -->
  {#if selectedFilms.length > 0}
    <div class="mobile-selection-bar mobile-only">
      <div class="selection-pills">
        {#each selectedFilms as film, i}
          <button
            class="selection-pill"
            style="--pill-color: {['#ef4444', '#f59e0b', '#8b5cf6'][i]}"
            onclick={() => toggleFilm(film)}
          >
            <span class="pill-name">{film.name}</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        {/each}
      </div>
    </div>
  {/if}

  <!-- Footer (Desktop Only) -->
  <footer class="app-footer desktop-only">
    <div class="footer-content">
      <span class="footer-text">{$t.footerTitle}</span>
      <span class="footer-divider">•</span>
      <span class="footer-text">
        {#each $t.madeWith.split("<RONNY>") as part, i}
          <span>{part}</span>
          {#if i < $t.madeWith.split("<RONNY>").length - 1}
            <a href="https://ron.nyc" target="_blank" rel="noopener noreferrer"
              >Ronny</a
            >
          {/if}
        {/each}
      </span>
    </div>
  </footer>
</div>

<style>
  /* Skip Link for Accessibility */
  .skip-link {
    position: absolute;
    top: -100%;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.75rem 1.5rem;
    background: var(--accent-primary);
    color: white;
    font-weight: 600;
    border-radius: 0 0 8px 8px;
    z-index: 10000;
    transition: top 0.2s ease;
    text-decoration: none;
  }

  .skip-link:focus {
    top: 0;
    outline: 2px solid white;
    outline-offset: 2px;
  }

  /* Visually Hidden - for screen readers only */
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .app-container {
    min-height: 100vh;
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
  }

  /* Utility classes for responsive display */
  .desktop-only {
    display: flex;
  }
  .mobile-only {
    display: none;
  }

  /* Header */
  .app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.875rem 1.5rem;
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border-subtle);
    position: sticky;
    top: 0;
    z-index: 100;
    transition: background-color var(--transition-base);
  }

  .header-left {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .header-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .logo-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #4c1d95 0%, #4338ca 100%);
    border-radius: 10px;
    color: white;
    flex-shrink: 0;
  }

  .logo-text h1 {
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: -0.02em;
  }

  .logo-text .subtitle {
    font-size: 0.7rem;
    color: var(--text-muted);
    display: block;
    margin-top: 0.125rem;
  }

  .search-box {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: var(--bg-secondary);
    border: 1px solid var(--border-subtle);
    border-radius: 9999px;
    color: var(--text-muted);
    transition: all 0.2s ease;
  }

  .search-box:focus-within {
    border-color: var(--accent-primary);
    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.15);
  }

  .search-box input {
    background: none;
    border: none;
    outline: none;
    color: var(--text-primary);
    font-size: 0.875rem;
    width: 160px;
  }

  .search-box input::placeholder {
    color: var(--text-muted);
  }

  .about-link {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.5rem 0.75rem;
    color: var(--text-muted);
    font-size: 0.875rem;
    font-weight: 500;
    text-decoration: none;
    border-radius: 8px;
    transition: all 0.2s ease;
  }

  .about-link:hover {
    color: var(--text-primary);
    background: var(--bg-secondary);
  }

  /* Mobile Search */
  .mobile-search {
    padding: 0.75rem 1rem;
    background: var(--bg-secondary);
    border-bottom: 1px solid var(--border-subtle);
    align-items: center;
    gap: 0.75rem;
    color: var(--text-muted);
  }

  .mobile-search input {
    flex: 1;
    background: none;
    border: none;
    outline: none;
    color: var(--text-primary);
    font-size: 1rem;
  }

  .mobile-search input::placeholder {
    color: var(--text-muted);
  }

  /* Mobile Tabs */
  .mobile-tabs {
    position: sticky;
    top: 60px;
    z-index: 99;
    flex-direction: row;
    background: var(--bg-card);
    border-bottom: 1px solid var(--border-subtle);
    padding: 0.5rem;
    gap: 0.25rem;
  }

  .tab-btn {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    padding: 0.625rem 0.5rem;
    border-radius: 12px;
    font-size: 0.7rem;
    font-weight: 500;
    color: var(--text-muted);
    background: transparent;
    transition: all 0.2s ease;
    position: relative;
  }

  .tab-btn.active {
    background: var(--accent-primary);
    color: white;
  }

  .tab-btn:not(.active):active {
    background: var(--bg-elevated);
  }

  .badge-count {
    position: absolute;
    top: 4px;
    right: 25%;
    width: 16px;
    height: 16px;
    background: var(--accent-danger);
    color: white;
    font-size: 0.65rem;
    font-weight: 600;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Main Content */
  .main-content {
    flex: 1;
    display: grid;
    grid-template-columns: 300px 1fr 360px;
    gap: 1.25rem;
    padding: 1.25rem 1.5rem;
    max-height: calc(100vh - 120px);
    overflow: hidden;
  }

  .panel {
    background: var(--bg-card);
    border: 1px solid var(--border-subtle);
    border-radius: 16px;
    padding: 1rem;
    overflow: hidden;
    transition:
      background-color var(--transition-base),
      border-color var(--transition-base);
  }

  .left-panel {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }

  .center-panel {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
      180deg,
      var(--bg-card) 0%,
      var(--chart-gradient-end) 100%
    );
    min-height: 450px;
  }

  .chart-wrapper {
    width: 100%;
    height: 100%;
    padding: 0.5rem;
  }

  .right-panel {
    overflow-y: auto;
  }

  /* Mobile Selection Bar */
  .mobile-selection-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.75rem 1rem;
    padding-bottom: calc(0.75rem + env(safe-area-inset-bottom));
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    border-top: 1px solid var(--border-subtle);
    z-index: 100;
  }

  .selection-pills {
    display: flex;
    gap: 0.5rem;
    overflow-x: auto;
    padding-bottom: 0.25rem;
  }

  .selection-pill {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    background: var(--bg-elevated);
    border: 2px solid var(--pill-color);
    border-radius: 9999px;
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--text-primary);
    white-space: nowrap;
    transition: all 0.2s ease;
  }

  .selection-pill svg {
    color: var(--text-muted);
  }

  .selection-pill:active {
    transform: scale(0.95);
  }

  /* Footer */
  .app-footer {
    padding: 1rem 2rem;
    border-top: 1px solid var(--border-subtle);
    background: var(--glass-bg);
    transition: background-color var(--transition-base);
    justify-content: center;
  }

  .footer-content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
  }

  .footer-text {
    font-size: 0.75rem;
    color: var(--text-muted);
  }

  .footer-divider {
    color: var(--text-muted);
    opacity: 0.5;
  }

  /* Tablet Responsive */
  @media (max-width: 1200px) {
    .main-content {
      grid-template-columns: 280px 1fr;
    }

    .right-panel {
      display: none;
    }
  }

  /* Mobile Responsive */
  @media (max-width: 768px) {
    .desktop-only {
      display: none !important;
    }
    .mobile-only {
      display: flex !important;
    }

    .app-header {
      padding: 0.75rem 1rem;
    }

    .logo-icon {
      width: 36px;
      height: 36px;
    }

    .logo-icon img {
      width: 18px;
      height: 18px;
    }

    .logo-text h1 {
      font-size: 1rem;
    }

    .main-content {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      gap: 1rem;
      max-height: none;
      padding-bottom: 80px;
    }

    .panel {
      border-radius: 14px;
      width: 100%;
    }

    .mobile-hidden {
      display: none !important;
    }

    .left-panel {
      max-height: calc(100vh - 220px);
      min-height: 300px;
    }

    .center-panel {
      min-height: 350px;
    }

    .right-panel {
      display: block;
      min-height: 300px;
    }
  }

  /* Small phones */
  @media (max-width: 380px) {
    .logo-text h1 {
      font-size: 0.9rem;
    }

    .tab-btn span {
      font-size: 0.65rem;
    }

    .selection-pill {
      font-size: 0.75rem;
      padding: 0.375rem 0.625rem;
    }
  }
</style>
