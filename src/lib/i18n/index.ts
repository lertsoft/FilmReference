import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';
import { translations, type Language, type Translations } from './translations';

export type { Language } from './translations';

// Get initial language from localStorage or browser preference
function getInitialLanguage(): Language {
    if (browser) {
        const stored = localStorage.getItem('language') as Language;
        if (stored && ['en', 'es', 'fr'].includes(stored)) {
            return stored;
        }

        // Check browser language
        const browserLang = navigator.language.slice(0, 2);
        if (browserLang === 'es') return 'es';
        if (browserLang === 'fr') return 'fr';
    }
    return 'en';
}

// Create the language store
export const language = writable<Language>(getInitialLanguage());

// Persist language changes to localStorage
if (browser) {
    language.subscribe((value) => {
        localStorage.setItem('language', value);
    });
}

// Derived store for translations
export const t = derived(language, ($language): Translations => {
    return translations[$language];
});

// Helper function to get language display name
export function getLanguageName(lang: Language): string {
    const names: Record<Language, string> = {
        en: 'English',
        es: 'Español',
        fr: 'Français'
    };
    return names[lang];
}

// Helper function to get language flag
export function getLanguageFlag(lang: Language): string {
    const flags: Record<Language, string> = {
        en: '🇺🇸',
        es: '🇪🇸',
        fr: '🇫🇷'
    };
    return flags[lang];
}

// Available languages
export const availableLanguages: Language[] = ['en', 'es', 'fr'];
