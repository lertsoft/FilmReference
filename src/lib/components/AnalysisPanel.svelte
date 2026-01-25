<script lang="ts">
  import type { FilmStock } from "$lib/data/filmStocks";
  import { getLocalizedFilmContent } from "$lib/data/filmStocksTranslations";
  import { t, language } from "$lib/i18n";

  interface Props {
    selectedFilms: FilmStock[];
  }

  let { selectedFilms }: Props = $props();

  const filmColors = ["#ef4444", "#f59e0b", "#8b5cf6"];

  function getBiasIcon(bias: string): string {
    if (
      bias.toLowerCase().includes("warm") ||
      bias.toLowerCase().includes("yellow") ||
      bias.toLowerCase().includes("red")
    ) {
      return "🔥";
    }
    if (
      bias.toLowerCase().includes("cool") ||
      bias.toLowerCase().includes("blue") ||
      bias.toLowerCase().includes("cyan")
    ) {
      return "❄️";
    }
    if (
      bias.toLowerCase().includes("neutral") ||
      bias.toLowerCase().includes("natural")
    ) {
      return "⚖️";
    }
    if (bias.toLowerCase().includes("green")) {
      return "🌿";
    }
    if (bias.toLowerCase().includes("experimental")) {
      return "🧪";
    }
    if (bias.toLowerCase().includes("saturation")) {
      return "🎨";
    }
    return "📊";
  }

  function getStrengthBars(film: FilmStock): { warm: number; cool: number } {
    const analysis = film.vectorscope_analysis;
    const warmAvg =
      (analysis.red.saturation +
        analysis.yellow.saturation +
        analysis.magenta.saturation) /
      3;
    const coolAvg =
      (analysis.green.saturation +
        analysis.cyan.saturation +
        analysis.blue.saturation) /
      3;
    return {
      warm: Math.min((warmAvg / 1.6) * 100, 100),
      cool: Math.min((coolAvg / 1.6) * 100, 100),
    };
  }

  // Get localized film content, with fallback to original data
  function getLocalizedBias(film: FilmStock): string {
    const localized = getLocalizedFilmContent(film.id, $language);
    return localized?.overall_bias || film.vectorscope_analysis.overall_bias;
  }

  function getLocalizedDescription(film: FilmStock): string {
    const localized = getLocalizedFilmContent(film.id, $language);
    return localized?.description || film.description;
  }

  function getLocalizedColorNotes(film: FilmStock): string {
    const localized = getLocalizedFilmContent(film.id, $language);
    return localized?.color_palette_notes || film.color_palette_notes;
  }

  function getLocalizedBestFor(film: FilmStock): string[] {
    const localized = getLocalizedFilmContent(film.id, $language);
    return localized?.best_for || film.best_for;
  }
</script>

<div class="analysis-container">
  <div class="analysis-header">
    <div class="header-icon" aria-hidden="true">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    </div>
    <div class="header-text">
      <h3>{$t.smartAnalysis}</h3>
      <span class="header-badge">{$t.colorScience}</span>
    </div>
  </div>

  {#if selectedFilms.length === 0}
    <div class="empty-state">
      <div class="empty-icon" aria-hidden="true">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4M12 16h.01" />
        </svg>
      </div>
      <p>{$t.selectFilmPrompt}</p>
    </div>
  {:else}
    <div class="films-analysis">
      {#each selectedFilms as film, i}
        <div class="film-analysis" style="--film-color: {filmColors[i]}">
          <div class="film-header">
            <span
              class="film-dot"
              style="background: {filmColors[i]}"
              aria-hidden="true"
            ></span>
            <h4>{film.name}</h4>
          </div>

          <div class="bias-badge">
            <span class="bias-icon" aria-hidden="true"
              >{getBiasIcon(film.vectorscope_analysis.overall_bias)}</span
            >
            <span class="bias-text">{getLocalizedBias(film)}</span>
          </div>

          <p class="film-description">{getLocalizedDescription(film)}</p>

          <div class="color-bars">
            <div class="bar-group">
              <div class="bar-label">
                <span>{$t.warmTones}</span>
                <span class="bar-value"
                  >{getStrengthBars(film).warm.toFixed(0)}%</span
                >
              </div>
              <div class="bar-track warm">
                <div
                  class="bar-fill"
                  style="width: {getStrengthBars(film).warm}%"
                ></div>
              </div>
            </div>
            <div class="bar-group">
              <div class="bar-label">
                <span>{$t.coolTones}</span>
                <span class="bar-value"
                  >{getStrengthBars(film).cool.toFixed(0)}%</span
                >
              </div>
              <div class="bar-track cool">
                <div
                  class="bar-fill"
                  style="width: {getStrengthBars(film).cool}%"
                ></div>
              </div>
            </div>
          </div>

          <div class="palette-notes">
            <h5>{$t.colorNotes}</h5>
            <p>{getLocalizedColorNotes(film)}</p>
          </div>

          <div class="best-for">
            <h5>{$t.bestFor}</h5>
            <div class="tags">
              {#each getLocalizedBestFor(film) as use}
                <span class="tag">{use}</span>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .analysis-container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .analysis-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1.25rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--border-subtle);
  }

  .header-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: linear-gradient(
      135deg,
      rgba(139, 92, 246, 0.2),
      rgba(6, 182, 212, 0.2)
    );
    border-radius: 10px;
    color: var(--accent-primary);
  }

  .header-text h3 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.125rem;
  }

  .header-badge {
    font-size: 0.7rem;
    color: var(--accent-primary);
    background: rgba(139, 92, 246, 0.15);
    padding: 0.125rem 0.5rem;
    border-radius: 9999px;
  }

  .empty-state {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: var(--text-muted);
    padding: 2rem;
  }

  .empty-icon {
    margin-bottom: 1rem;
    opacity: 0.5;
  }

  .empty-state p {
    font-size: 0.875rem;
    max-width: 200px;
    line-height: 1.5;
  }

  .films-analysis {
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .film-analysis {
    padding: 1rem;
    background: var(--bg-secondary);
    border-radius: 12px;
    border: 1px solid var(--border-subtle);
    border-left: 3px solid var(--film-color);
  }

  .film-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
  }

  .film-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

  .film-header h4 {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text-primary);
  }

  .bias-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.375rem 0.75rem;
    background: var(--bg-elevated);
    border-radius: 8px;
    margin-bottom: 0.75rem;
  }

  .bias-icon {
    font-size: 0.875rem;
  }

  .bias-text {
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--text-secondary);
  }

  .film-description {
    font-size: 0.8rem;
    color: var(--text-secondary);
    line-height: 1.5;
    margin-bottom: 1rem;
  }

  .color-bars {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    margin-bottom: 1rem;
  }

  .bar-group {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .bar-label {
    display: flex;
    justify-content: space-between;
    font-size: 0.7rem;
    color: var(--text-muted);
  }

  .bar-value {
    font-family: "JetBrains Mono", monospace;
    color: var(--text-secondary);
  }

  .bar-track {
    height: 6px;
    background: var(--bg-elevated);
    border-radius: 9999px;
    overflow: hidden;
  }

  .bar-track.warm .bar-fill {
    background: linear-gradient(90deg, #f59e0b, #ef4444);
  }

  .bar-track.cool .bar-fill {
    background: linear-gradient(90deg, #06b6d4, #3b82f6);
  }

  .bar-fill {
    height: 100%;
    border-radius: 9999px;
    transition: width 0.4s ease;
  }

  .palette-notes,
  .best-for {
    margin-top: 0.75rem;
  }

  .palette-notes h5,
  .best-for h5 {
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-muted);
    margin-bottom: 0.375rem;
  }

  .palette-notes p {
    font-size: 0.75rem;
    color: var(--text-secondary);
    line-height: 1.5;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.375rem;
  }

  .tag {
    font-size: 0.7rem;
    padding: 0.25rem 0.5rem;
    background: rgba(139, 92, 246, 0.1);
    color: var(--accent-primary);
    border-radius: 6px;
    font-weight: 500;
  }

  /* Mobile enhancements */
  @media (max-width: 768px) {
    .analysis-container {
      padding-bottom: 1rem;
    }

    .films-analysis {
      gap: 1rem;
      -webkit-overflow-scrolling: touch;
    }

    .film-analysis {
      padding: 1.25rem;
      border-radius: 14px;
    }

    .film-header h4 {
      font-size: 1rem;
    }

    .bias-badge {
      padding: 0.5rem 0.875rem;
    }

    .bias-icon {
      font-size: 1rem;
    }

    .bias-text {
      font-size: 0.8rem;
    }

    .film-description {
      font-size: 0.875rem;
    }

    .bar-track {
      height: 8px;
    }

    .bar-label {
      font-size: 0.75rem;
    }

    .palette-notes p {
      font-size: 0.8rem;
    }

    .tag {
      font-size: 0.75rem;
      padding: 0.375rem 0.625rem;
    }

    .empty-state p {
      font-size: 0.95rem;
      max-width: 260px;
    }

    .empty-icon svg {
      width: 40px;
      height: 40px;
    }
  }
</style>
