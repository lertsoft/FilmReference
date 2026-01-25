<script lang="ts">
    import {
        language,
        availableLanguages,
        getLanguageName,
        getLanguageFlag,
        type Language,
        t,
    } from "$lib/i18n";

    let isOpen = $state(false);
    let currentLang = $state<Language>("en");

    // Subscribe to language store
    $effect(() => {
        const unsubscribe = language.subscribe((value) => {
            currentLang = value;
        });
        return unsubscribe;
    });

    function selectLanguage(lang: Language) {
        language.set(lang);
        isOpen = false;
    }

    function toggleDropdown() {
        isOpen = !isOpen;
    }

    function handleClickOutside(event: MouseEvent) {
        const target = event.target as HTMLElement;
        if (!target.closest(".language-switcher")) {
            isOpen = false;
        }
    }

    function handleKeyDown(event: KeyboardEvent) {
        if (event.key === "Escape" && isOpen) {
            isOpen = false;
            // Return focus to button
            const btn = document.querySelector(".lang-button") as HTMLElement;
            btn?.focus();
        }
    }
</script>

<svelte:window on:click={handleClickOutside} on:keydown={handleKeyDown} />

<div class="language-switcher">
    <button
        class="lang-button"
        onclick={toggleDropdown}
        aria-label={$t.a11yChangeLanguage}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
    >
        <span class="lang-flag" aria-hidden="true"
            >{getLanguageFlag(currentLang)}</span
        >
        <span class="lang-code">{currentLang.toUpperCase()}</span>
        <svg
            class="chevron"
            class:open={isOpen}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
        >
            <polyline points="6 9 12 15 18 9" />
        </svg>
    </button>

    {#if isOpen}
        <div class="dropdown" role="listbox" aria-label={$t.a11yChangeLanguage}>
            {#each availableLanguages as lang}
                <button
                    class="dropdown-item"
                    class:active={lang === currentLang}
                    onclick={() => selectLanguage(lang)}
                    role="option"
                    aria-selected={lang === currentLang}
                >
                    <span class="item-flag" aria-hidden="true"
                        >{getLanguageFlag(lang)}</span
                    >
                    <span class="item-name">{getLanguageName(lang)}</span>
                    {#if lang === currentLang}
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            aria-hidden="true"
                        >
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    {/if}
                </button>
            {/each}
        </div>
    {/if}
</div>

<style>
    .language-switcher {
        position: relative;
    }

    .lang-button {
        display: flex;
        align-items: center;
        gap: 0.375rem;
        padding: 0.5rem 0.75rem;
        background: var(--bg-secondary);
        border: 1px solid var(--border-subtle);
        border-radius: 8px;
        color: var(--text-secondary);
        font-size: 0.8rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .lang-button:hover {
        background: var(--bg-elevated);
        border-color: var(--border-medium);
    }

    .lang-flag {
        font-size: 1rem;
    }

    .lang-code {
        letter-spacing: 0.05em;
    }

    .chevron {
        transition: transform 0.2s ease;
    }

    .chevron.open {
        transform: rotate(180deg);
    }

    .dropdown {
        position: absolute;
        top: calc(100% + 0.5rem);
        right: 0;
        min-width: 160px;
        background: var(--bg-card);
        border: 1px solid var(--border-subtle);
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        overflow: hidden;
        z-index: 1000;
        animation: slideIn 0.15s ease-out;
    }

    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(-8px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .dropdown-item {
        display: flex;
        align-items: center;
        gap: 0.625rem;
        width: 100%;
        padding: 0.75rem 1rem;
        background: none;
        border: none;
        color: var(--text-secondary);
        font-size: 0.875rem;
        cursor: pointer;
        transition: all 0.15s ease;
        text-align: left;
    }

    .dropdown-item:hover {
        background: var(--bg-elevated);
        color: var(--text-primary);
    }

    .dropdown-item.active {
        color: var(--accent-primary);
        background: rgba(139, 92, 246, 0.1);
    }

    .item-flag {
        font-size: 1.125rem;
    }

    .item-name {
        flex: 1;
    }

    .dropdown-item svg {
        color: var(--accent-primary);
    }

    @media (max-width: 768px) {
        .lang-code {
            display: none;
        }

        .lang-button {
            padding: 0.5rem;
        }
    }
</style>
