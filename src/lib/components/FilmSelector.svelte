<script lang="ts">
  import type { FilmStock } from "$lib/data/filmStocks";
  import { t } from "$lib/i18n";
  import { getLocalizedFilmContent } from "$lib/data/filmStocksTranslations";
  import { language } from "$lib/i18n";

  interface Props {
    films: FilmStock[];
    selectedFilms: FilmStock[];
    showReference: boolean;
    onToggleFilm: (film: FilmStock) => void;
    onToggleReference: () => void;
  }

  let {
    films,
    selectedFilms,
    showReference,
    onToggleFilm,
    onToggleReference,
  }: Props = $props();

  function isSelected(film: FilmStock): boolean {
    return selectedFilms.some((f) => f.id === film.id);
  }

  function canSelect(film: FilmStock): boolean {
    return isSelected(film) || selectedFilms.length < 3;
  }

  function getFilmColor(film: FilmStock): string {
    const index = selectedFilms.findIndex((f) => f.id === film.id);
    const colors = ["#ef4444", "#f59e0b", "#8b5cf6"];
    return index >= 0 ? colors[index] : "transparent";
  }

  function getFilmAriaLabel(film: FilmStock): string {
    const isFilmSelected = isSelected(film);
    const canSelectFilm = canSelect(film);
    const action = isFilmSelected ? $t.a11yDeselectFilm : $t.a11ySelectFilm;
    const status = isFilmSelected ? $t.a11yFilmSelected : "";
    const disabled = !canSelectFilm ? $t.a11yMaxFilmsSelected : "";
    return `${action}: ${film.name}, ISO ${film.iso}, ${film.manufacturer}. ${status} ${disabled}`.trim();
  }
</script>

<div class="selector-container">
  <div class="selector-header">
    <h3>{$t.selectFilms}</h3>
    <span class="film-count">{selectedFilms.length} / 3</span>
  </div>

  <div class="film-list" role="listbox" aria-label={$t.selectFilms}>
    <!-- Reference Toggle -->
    <button
      class="film-item reference"
      class:selected={showReference}
      onclick={onToggleReference}
      aria-label="{$t.a11yToggleReference}: {showReference
        ? $t.a11yReferenceEnabled
        : $t.a11yReferenceDisabled}"
      role="option"
      aria-selected={showReference}
    >
      <div
        class="film-indicator"
        style="background: {showReference
          ? '#6b7280'
          : 'transparent'}; border-color: #6b7280;"
        aria-hidden="true"
      ></div>
      <div class="film-info">
        <span class="film-name">{$t.reference}</span>
        <span class="film-meta">{$t.neutralBaseline}</span>
      </div>
      <div class="check-icon" class:visible={showReference} aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M13.5 4.5L6.5 11.5L3 8"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </button>

    <div class="divider"></div>

    <!-- Film List -->
    {#each films as film}
      <button
        class="film-item"
        class:selected={isSelected(film)}
        class:disabled={!canSelect(film)}
        onclick={() => onToggleFilm(film)}
        disabled={!canSelect(film)}
        aria-label={getFilmAriaLabel(film)}
        role="option"
        aria-selected={isSelected(film)}
      >
        <div
          class="film-image-wrapper"
          class:selected={isSelected(film)}
          style="--selection-color: {isSelected(film)
            ? getFilmColor(film)
            : 'var(--border-subtle)'};"
          aria-hidden="true"
        >
          <img src={film.image} alt="" class="film-image" loading="lazy" />
        </div>
        <div class="film-info">
          <span class="film-name">{film.name}</span>
          <span class="film-meta">ISO {film.iso} • {film.manufacturer}</span>
        </div>
        <div
          class="check-icon"
          class:visible={isSelected(film)}
          aria-hidden="true"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M13.5 4.5L6.5 11.5L3 8"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </button>
    {/each}
  </div>
</div>

<style>
  .selector-container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .selector-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid var(--border-subtle);
  }

  .selector-header h3 {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    color: var(--text-muted);
  }

  .film-count {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--accent-primary);
    background: rgba(139, 92, 246, 0.15);
    padding: 0.25rem 0.625rem;
    border-radius: 9999px;
  }

  .film-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    overflow-y: auto;
    flex: 1;
    padding-right: 0.25rem;
    -webkit-overflow-scrolling: touch;
  }

  .film-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.875rem 0.75rem;
    border-radius: 12px;
    background: var(--bg-secondary);
    border: 1px solid var(--border-subtle);
    cursor: pointer;
    transition: all 0.2s ease;
    text-align: left;
    width: 100%;
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
  }

  .film-item:hover:not(.disabled) {
    background: var(--bg-elevated);
    border-color: var(--border-medium);
  }

  .film-item:active:not(.disabled) {
    transform: scale(0.98);
  }

  .film-item.selected {
    background: var(--bg-elevated);
    border-color: var(--border-medium);
  }

  .film-item.disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .film-item.reference {
    background: transparent;
    border-style: dashed;
  }

  .film-item.reference.selected {
    background: rgba(107, 114, 128, 0.1);
  }

  .film-indicator {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid var(--border-medium);
    flex-shrink: 0;
    transition: all 0.2s ease;
  }

  .film-image-wrapper {
    width: 42px;
    height: 42px;
    border-radius: 8px;
    overflow: hidden;
    flex-shrink: 0;
    border: 2px solid var(--selection-color);
    transition: all 0.2s ease;
    background: var(--bg-elevated);
  }

  .film-image-wrapper.selected {
    box-shadow: 0 0 0 2px var(--selection-color);
  }

  .film-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.2s ease;
  }

  .film-item:hover .film-image {
    transform: scale(1.05);
  }

  .film-info {
    flex: 1;
    min-width: 0;
  }

  .film-name {
    display: block;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--text-primary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .film-meta {
    display: block;
    font-size: 0.75rem;
    color: var(--text-muted);
    margin-top: 0.125rem;
  }

  .check-icon {
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.2s ease;
    color: var(--accent-success);
  }

  .check-icon.visible {
    opacity: 1;
    transform: scale(1);
  }

  .divider {
    height: 1px;
    background: var(--border-subtle);
    margin: 0.5rem 0;
  }

  /* Mobile enhancements */
  @media (max-width: 768px) {
    .film-item {
      padding: 0.75rem;
      gap: 0.75rem;
      border-radius: 14px;
    }

    .film-indicator {
      width: 18px;
      height: 18px;
    }

    .film-image-wrapper {
      width: 48px;
      height: 48px;
      border-radius: 10px;
    }

    .film-name {
      font-size: 0.95rem;
    }

    .film-meta {
      font-size: 0.8rem;
    }

    .check-icon svg {
      width: 18px;
      height: 18px;
    }

    .film-list {
      gap: 0.625rem;
    }

    .selector-header h3 {
      font-size: 0.8rem;
    }

    .film-count {
      font-size: 0.8rem;
      padding: 0.375rem 0.75rem;
    }
  }
</style>
