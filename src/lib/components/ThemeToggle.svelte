<script lang="ts">
    import { onMount } from "svelte";
    import { t } from "$lib/i18n";

    let isDark = $state(true);

    onMount(() => {
        // Check for saved preference or system preference
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            isDark = savedTheme === "dark";
        } else {
            isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        }
        applyTheme();

        // Listen for system theme changes
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", (e) => {
                if (!localStorage.getItem("theme")) {
                    isDark = e.matches;
                    applyTheme();
                }
            });
    });

    function applyTheme() {
        if (isDark) {
            document.documentElement.classList.remove("light");
        } else {
            document.documentElement.classList.add("light");
        }
    }

    function toggleTheme() {
        isDark = !isDark;
        localStorage.setItem("theme", isDark ? "dark" : "light");
        applyTheme();
    }
</script>

<button
    class="theme-toggle"
    onclick={toggleTheme}
    aria-label={isDark ? $t.a11ySwitchToLightMode : $t.a11ySwitchToDarkMode}
    title={isDark ? $t.a11ySwitchToLightMode : $t.a11ySwitchToDarkMode}
>
    <div class="toggle-track" class:light={!isDark}>
        <div class="toggle-thumb">
            {#if isDark}
                <svg
                    class="icon moon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
            {:else}
                <svg
                    class="icon sun"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
            {/if}
        </div>
    </div>
</button>

<style>
    .theme-toggle {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        background: none;
        border: none;
        cursor: pointer;
    }

    .toggle-track {
        position: relative;
        width: 56px;
        height: 30px;
        background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
        border-radius: 9999px;
        padding: 3px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow:
            inset 0 2px 4px rgba(0, 0, 0, 0.3),
            0 1px 2px rgba(0, 0, 0, 0.2);
    }

    .toggle-track.light {
        background: linear-gradient(135deg, #7dd3fc 0%, #38bdf8 100%);
    }

    .toggle-thumb {
        position: absolute;
        top: 3px;
        left: 3px;
        width: 24px;
        height: 24px;
        background: linear-gradient(180deg, #fefefe 0%, #e5e5e5 100%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow:
            0 2px 4px rgba(0, 0, 0, 0.2),
            0 1px 2px rgba(0, 0, 0, 0.1);
    }

    .toggle-track.light .toggle-thumb {
        left: calc(100% - 27px);
        background: linear-gradient(180deg, #fffbeb 0%, #fef3c7 100%);
    }

    .icon {
        width: 14px;
        height: 14px;
        transition: all 0.3s ease;
    }

    .icon.moon {
        color: #6366f1;
    }

    .icon.sun {
        color: #f59e0b;
    }

    /* Hover effects */
    .theme-toggle:hover .toggle-track {
        box-shadow:
            inset 0 2px 4px rgba(0, 0, 0, 0.3),
            0 1px 2px rgba(0, 0, 0, 0.2),
            0 0 12px rgba(139, 92, 246, 0.3);
    }

    .theme-toggle:hover .toggle-track.light {
        box-shadow:
            inset 0 2px 4px rgba(0, 0, 0, 0.1),
            0 1px 2px rgba(0, 0, 0, 0.1),
            0 0 12px rgba(56, 189, 248, 0.4);
    }

    .theme-toggle:active .toggle-thumb {
        width: 28px;
    }

    .theme-toggle:active .toggle-track.light .toggle-thumb {
        left: calc(100% - 31px);
    }
</style>
