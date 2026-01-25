export type Language = 'en' | 'es' | 'fr';

export interface Translations {
    // Header
    appTitle: string;
    appSubtitle: string;
    searchPlaceholder: string;
    about: string;

    // Attribution Banner
    attributionText: string;
    attributionLink: string;
    attributionAuthor: string;

    // Film Selector
    selectFilms: string;
    reference: string;
    neutralBaseline: string;
    iso: string;

    // Radar Chart
    red: string;
    yellow: string;
    green: string;
    cyan: string;
    blue: string;
    magenta: string;

    // Analysis Panel
    smartAnalysis: string;
    colorScience: string;
    selectFilmPrompt: string;
    warmTones: string;
    coolTones: string;
    colorNotes: string;
    bestFor: string;

    // Mobile Tabs
    films: string;
    chart: string;
    analysis: string;

    // Footer
    footerTitle: string;
    footerSubtitle: string;

    // About Page
    backToApp: string;
    whyBuiltTitle: string;
    whyBuiltP1: string;
    whyBuiltP2: string;
    whyBuiltP3: string;
    howItWorksTitle: string;
    howItWorksIntro: string;
    howItWorksRedDesc: string;
    howItWorksYellowDesc: string;
    howItWorksGreenDesc: string;
    howItWorksCyanDesc: string;
    howItWorksBlueDesc: string;
    howItWorksMagentaDesc: string;
    howItWorksOutro: string;
    creditsTitle: string;
    researchData: string;
    researchDataDesc: string;
    development: string;
    developmentDesc: string;
    filmKnowledge: string;
    filmKnowledgeDesc: string;
    techStack: string;
    startComparing: string;
    madeWith: string;

    // Best For tags (common ones)
    goldenHour: string;
    vacation: string;
    nostalgicScenes: string;
    streetPhotography: string;
    travel: string;
    sunnyDays: string;
    nature: string;
    portraits: string;
    weddings: string;
    landscapes: string;
    nightPhotography: string;
    experimental: string;
    retroAesthetics: string;
    overcastDays: string;
    cinematicScenes: string;

    // Accessibility
    a11ySkipToContent: string;
    a11yMainNavigation: string;
    a11yFilmSelection: string;
    a11yColorChart: string;
    a11yAnalysisResults: string;
    a11yChangeLanguage: string;
    a11ySwitchToDarkMode: string;
    a11ySwitchToLightMode: string;
    a11yDismissBanner: string;
    a11yFilmSelected: string;
    a11yFilmDeselected: string;
    a11ySelectFilm: string;
    a11yDeselectFilm: string;
    a11yMaxFilmsSelected: string;
    a11yReferenceEnabled: string;
    a11yReferenceDisabled: string;
    a11yToggleReference: string;
    a11ySearchResults: string;
    a11yRadarChartDescription: string;
    a11yOpenExternalLink: string;
}

export const translations: Record<Language, Translations> = {
    en: {
        // Header
        appTitle: "Film Color Reference",
        appSubtitle: "Quickly compare color response of different film stocks",
        searchPlaceholder: "Search films...",
        about: "About",

        // Attribution Banner
        attributionText: "All the details and research displayed on this page are based on",
        attributionLink: "Parvec's YouTube video",
        attributionAuthor: "put together by me (Ronny) for ease of reference.",

        // Film Selector
        selectFilms: "SELECT FILMS",
        reference: "Reference",
        neutralBaseline: "Neutral Baseline",
        iso: "ISO",

        // Radar Chart
        red: "Red",
        yellow: "Yellow",
        green: "Green",
        cyan: "Cyan",
        blue: "Blue",
        magenta: "Magenta",

        // Analysis Panel
        smartAnalysis: "Film Description",
        colorScience: "Color Science",
        selectFilmPrompt: "Select a film stock to see detailed color science analysis.",
        warmTones: "Warm Tones",
        coolTones: "Cool Tones",
        colorNotes: "COLOR NOTES",
        bestFor: "BEST FOR",

        // Mobile Tabs
        films: "Films",
        chart: "Chart",
        analysis: "Analysis",

        // Footer
        footerTitle: "Film Color Reference",
        footerSubtitle: "Built with 🎞️ in mind by <RONNY> in NYC for the global film photography community.",

        // About Page
        backToApp: "Back to App",
        whyBuiltTitle: "Why I Built This Page",
        whyBuiltP1: "As an avid film photographer, I've always wanted a resource like this to help me make informed decisions about which film to shoot. I have always been fascinated by how different film stocks render colors and shape the feeling a photograph has. Each film has its own personality... Kodak Gold's warm tones, Portra's flattering skin tones, CineStill's halation. Understanding why each film looks the way it does without concrete data made me scratch my head.",
        whyBuiltP2: "Then the youtube gods served me <LINK> and from the moment I watched it I knew I needed to save his findings somewhere so that I can refer to them easily. It was a revelation — finally, a technical explanation for the \"magic\" of film color science.",
        whyBuiltP3: "I built this tool to have all that knowledge at my fingertips. When I'm deciding which film to shoot, I can now visualize exactly how each film will handle different colors and make informed choices based on actual data.",
        howItWorksTitle: "How It Works",
        howItWorksIntro: "The radar chart displays six primary color channels from vectorscope analysis:",
        howItWorksRedDesc: "How the film handles red tones",
        howItWorksYellowDesc: "Warmth and golden tones",
        howItWorksGreenDesc: "Vegetation and nature rendering",
        howItWorksCyanDesc: "Cool shadows and aquatic tones",
        howItWorksBlueDesc: "Sky and twilight rendering",
        howItWorksMagentaDesc: "Sunset and skin undertones",
        howItWorksOutro: "Values above 1.0 mean the film saturates that color more than neutral, while values below 1.0 mean the film desaturates that color.",
        creditsTitle: "Credits & Resources",
        researchData: "Research & Data",
        researchDataDesc: "All vectorscope analysis data is derived from Parvec's YouTube video Every 35mm Film Color Science Explained.",
        development: "Development",
        developmentDesc: "Built by Ronny as a personal reference tool and learning project.",
        filmKnowledge: "Film Knowledge",
        filmKnowledgeDesc: "I loved these smarter everyday videos about film photography:",
        // techStack: "Tech Stack",
        // startComparing: "Start Comparing Films",
        madeWith: "Built with 🎞️ in mind by <RONNY> in NYC for the global film photography community.",

        // Best For tags
        goldenHour: "Golden Hour",
        vacation: "Vacation",
        nostalgicScenes: "Nostalgic Scenes",
        streetPhotography: "Street Photography",
        travel: "Travel",
        sunnyDays: "Sunny Days",
        nature: "Nature",
        portraits: "Portraits",
        weddings: "Weddings",
        landscapes: "Landscapes",
        nightPhotography: "Night Photography",
        experimental: "Experimental",
        retroAesthetics: "Retro Aesthetics",
        overcastDays: "Overcast Days",
        cinematicScenes: "Cinematic Scenes",

        // Accessibility
        a11ySkipToContent: "Skip to main content",
        a11yMainNavigation: "Main navigation",
        a11yFilmSelection: "Film selection panel",
        a11yColorChart: "Color response radar chart",
        a11yAnalysisResults: "Film analysis results",
        a11yChangeLanguage: "Change language",
        a11ySwitchToDarkMode: "Switch to dark mode",
        a11ySwitchToLightMode: "Switch to light mode",
        a11yDismissBanner: "Dismiss attribution banner",
        a11yFilmSelected: "selected",
        a11yFilmDeselected: "deselected",
        a11ySelectFilm: "Select film",
        a11yDeselectFilm: "Deselect film",
        a11yMaxFilmsSelected: "Maximum of 3 films can be selected",
        a11yReferenceEnabled: "Reference baseline enabled",
        a11yReferenceDisabled: "Reference baseline disabled",
        a11yToggleReference: "Toggle reference baseline",
        a11ySearchResults: "films found",
        a11yRadarChartDescription: "Radar chart comparing color saturation levels across 6 color channels: Red, Yellow, Green, Cyan, Blue, and Magenta",
        a11yOpenExternalLink: "Opens in new tab",
        techStack: "",
        startComparing: ""
    },

    es: {
        // Header
        appTitle: "Rollos color de referencia",
        appSubtitle: "Rapidamente compara la respuesta de color de los diferentes rollos",
        searchPlaceholder: "Buscar rollos...",
        about: "Acerca de",

        // Attribution Banner
        attributionText: "Todos los detalles e investigación mostrados en esta página están basados en",
        attributionLink: "el video de YouTube de Parvec",
        attributionAuthor: "recopilado por mi (Ronny) para facilitar la referencia.",

        // Film Selector
        selectFilms: "SELECCIONAR ROLLOS",
        reference: "Referencia",
        neutralBaseline: "Base Neutral",
        iso: "ISO",

        // Radar Chart
        red: "Rojo",
        yellow: "Amarillo",
        green: "Verde",
        cyan: "Cian",
        blue: "Azul",
        magenta: "Magenta",

        // Analysis Panel
        smartAnalysis: "Descripción del Rollo",
        colorScience: "Ciencia del Color",
        selectFilmPrompt: "Selecciona un rollo para ver el análisis detallado de ciencia del color.",
        warmTones: "Tonos Cálidos",
        coolTones: "Tonos Fríos",
        colorNotes: "NOTAS DE COLOR",
        bestFor: "IDEAL PARA",

        // Mobile Tabs
        films: "Rollos",
        chart: "Gráfico",
        analysis: "Descripción",

        // Footer
        footerTitle: "Color de Referencia para Rollos",
        footerSubtitle: "Construido por Ronny en NYC para la comunidad global de fotografía analógica.",

        // About Page
        backToApp: "Volver a la App",
        whyBuiltTitle: "Por Qué Construí Esta página",
        whyBuiltP1: "Como ávido fotógrafo analógico, siempre he deseado contar con un recurso como este que me ayudara a tomar decisiones informadas sobre qué rollo utilizar. Siempre me ha fascinado cómo los diferentes tipos de rollos fotográficos reproducen los colores y dan forma al sentimiento que transmite una fotografía. Cada rollo tiene su propia personalidad... Los tonos cálidos de Kodak Gold, los tonos de piel favorecedores de Portra, el halo de CineStill. Entender por qué cada rollo tiene el aspecto que tiene sin datos concretos me hacía devanarme los sesos.",
        whyBuiltP2: "Entonces, los dioses de YouTube me regalaron <LINK> y, desde el momento en que lo vi, supe que tenía que guardar sus hallazgos en algún sitio para poder consultarlos fácilmente. Fue una revelación: por fin, una explicación técnica de la «magia» de la ciencia del color en los rollos.",
        whyBuiltP3: "Creé esta herramienta para tener todo ese conocimiento al alcance de la mano. Ahora, cuando tengo que decidir qué rollo utilizar, puedo visualizar exactamente cómo cada uno de ellos gestionará los diferentes colores y tomar decisiones informadas basadas en datos reales.",
        howItWorksTitle: "Cómo Funciona",
        howItWorksIntro: "El gráfico de radar muestra seis canales de color primarios del análisis de vectorscopio:",
        howItWorksRedDesc: "Cómo el rollo maneja los tonos rojos",
        howItWorksYellowDesc: "Calidez y tonos dorados",
        howItWorksGreenDesc: "Vegetación y renderizado de naturaleza",
        howItWorksCyanDesc: "Sombras frías y tonos acuáticos",
        howItWorksBlueDesc: "Cielo y renderizado de la penumbra",
        howItWorksMagentaDesc: "Atardeceres y subtonos de piel",
        howItWorksOutro: "Valores por encima de 1.0 significan que el rollo satura más ese color que lo neutral, mientras que valores por debajo de 1.0 significan que el rollo desatura ese color.",
        creditsTitle: "Créditos y Recursos",
        researchData: "Investigación y Datos",
        researchDataDesc: "Todos los datos de análisis de vectorscopio provienen del video de YouTube de Parvec El Color de Cada Película de 35 mm Explicado.",
        development: "Desarrollo",
        developmentDesc: "Construido por Ronny como herramienta de referencia personal.",
        filmKnowledge: "Aprendizaje",
        filmKnowledgeDesc: "Yo ame estos videos de Smarter Everyday sobre rollos y la fotografía analógica.",
        // techStack: "Stack Tecnológico",
        // startComparing: "Comenzar a Comparar rollos",
        madeWith: "Hecho con 🎞️ en la mente por <RONNY> en Nueva York para la comunidad global de fotografía analógica.",

        // Best For tags
        goldenHour: "Hora Dorada",
        vacation: "Vacaciones",
        nostalgicScenes: "Escenas Nostálgicas",
        streetPhotography: "Fotografía Callejera",
        travel: "Viajes",
        sunnyDays: "Días Soleados",
        nature: "Naturaleza",
        portraits: "Retratos",
        weddings: "Bodas",
        landscapes: "Paisajes",
        nightPhotography: "Fotografía Nocturna",
        experimental: "Experimental",
        retroAesthetics: "Estética Retro",
        overcastDays: "Días Nublados",
        cinematicScenes: "Escenas Cinematográficas",

        // Accessibility
        a11ySkipToContent: "Saltar al contenido principal",
        a11yMainNavigation: "Navegación principal",
        a11yFilmSelection: "Panel de selección de rollos",
        a11yColorChart: "Gráfico radar de respuesta de color",
        a11yAnalysisResults: "Resultados del análisis de rollo",
        a11yChangeLanguage: "Cambiar idioma",
        a11ySwitchToDarkMode: "Cambiar a modo oscuro",
        a11ySwitchToLightMode: "Cambiar a modo claro",
        a11yDismissBanner: "Cerrar banner de atribución",
        a11yFilmSelected: "seleccionada",
        a11yFilmDeselected: "deseleccionada",
        a11ySelectFilm: "Seleccionar rollo",
        a11yDeselectFilm: "Deseleccionar rollo",
        a11yMaxFilmsSelected: "Se pueden seleccionar máximo 3 rollos",
        a11yReferenceEnabled: "Línea base de referencia habilitada",
        a11yReferenceDisabled: "Línea base de referencia deshabilitada",
        a11yToggleReference: "Alternar línea base de referencia",
        a11ySearchResults: "Rollos encontrados",
        a11yRadarChartDescription: "Gráfico radar comparando niveles de saturación de color en 6 canales: Rojo, Amarillo, Verde, Cian, Azul y Magenta",
        a11yOpenExternalLink: "Abre en nueva pestaña",
        techStack: "",
        startComparing: ""
    },

    fr: {
        // Header
        appTitle: "Référence des couleurs des films",
        appSubtitle: "Comparez rapidement la réponse chromatique de différents types de pellicules",
        searchPlaceholder: "Rechercher des films...",
        about: "À propos",

        // Attribution Banner
        attributionText: "Toutes les informations et recherches présentées sur cette page sont basées sur",
        attributionLink: "la vidéo YouTube de Parvec",
        attributionAuthor: "que j'ai (Ronny) compilée pour faciliter la consultation.",

        // Film Selector
        selectFilms: "SÉLECTIONNER LES FILMS",
        reference: "Référence",
        neutralBaseline: "Neutre",
        iso: "ISO",

        // Radar Chart
        red: "Rouge",
        yellow: "Jaune",
        green: "Vert",
        cyan: "Cyan",
        blue: "Bleu",
        magenta: "Magenta",

        // Analysis Panel
        smartAnalysis: "Description du Film",
        colorScience: "Science des Couleurs",
        selectFilmPrompt: "Sélectionnez une pellicule pour voir l'analyse détaillée de la science des couleurs.",
        warmTones: "Tons Chauds",
        coolTones: "Tons Froids",
        colorNotes: "NOTES DE COULEUR",
        bestFor: "IDÉAL POUR",

        // Mobile Tabs
        films: "Films",
        chart: "Graphique",
        analysis: "Analyse",

        // Footer
        footerTitle: "Référence sur les couleurs des pellicules",
        footerSubtitle: "Conçu avec 🎞️ à l'esprit par Ronny à New York pour la communauté mondiale des photographes analogiques.",

        // About Page
        backToApp: "Retour à l'App",
        whyBuiltTitle: "Pourquoi j'ai créé cette page",
        whyBuiltP1: "En tant que passionné de photographie analogique, j'ai toujours rêvé d'avoir une ressource comme celle-ci pour m'aider à choisir le film le plus adapté à mes projets. J'ai toujours été fasciné par la façon dont les différents types de pellicule rendent les couleurs et façonnent l'atmosphère d'une photographie. Chaque film a sa propre personnalité... Les tons chauds du Kodak Gold, les teints flatteurs du Portra, les halos du CineStill. Sans données concrètes, je ne comprenais pas pourquoi chaque film avait un rendu différent, ce qui me laissait perplexe.",
        whyBuiltP2: "Puis les dieux de YouTube m'ont offert <LINK> et dès que je l'ai regardée, j'ai su que je devais enregistrer ses conclusions quelque part afin de pouvoir m'y référer facilement. Ce fut une révélation : enfin une explication technique de la « magie » de la science des couleurs des pellicules.",
        whyBuiltP3: "J'ai créé cet outil pour avoir toutes ces connaissances à portée de main. Lorsque je choisis le film à utiliser, je peux désormais visualiser exactement comment chaque film traitera les différentes couleurs et faire des choix éclairés basés sur des données réelles.",
        howItWorksTitle: "Comment Ça Marche",
        howItWorksIntro: "Le graphique radar affiche six canaux de couleurs primaires de l'analyse vectorscope:",
        howItWorksRedDesc: "Comment la pellicule gère les tons rouges",
        howItWorksYellowDesc: "Chaleur et tons dorés",
        howItWorksGreenDesc: "Végétation et rendu nature",
        howItWorksCyanDesc: "Ombres froides et tons aquatiques",
        howItWorksBlueDesc: "Ciel et rendu crépusculaire",
        howItWorksMagentaDesc: "Couchers de soleil et sous-tons de peau",
        howItWorksOutro: "Les valeurs supérieures à 1.0 signifient que la pellicule sature davantage cette couleur par rapport au neutre, tandis que les valeurs inférieures à 1.0 signifient qu'elle désature cette couleur.",
        creditsTitle: "Crédits et Ressources",
        researchData: "Recherche et Données",
        researchDataDesc: "Toutes les données d'analyse du vecteurscope sont tirées de la vidéo YouTube de Parvec intitulée « Every 35mm Film Color Science Explained » (Tout savoir sur la science des couleurs du film 35 mm).",
        development: "Développement",
        developmentDesc: "Créé par Ronny comme outil de référence personnel.",
        filmKnowledge: "Connaissances pellicules",
        filmKnowledgeDesc: "J'ai adoré ces vidéos Smarter Everyday sur la photographie argentique ",
        madeWith: "Conçu avec 🎞️ à l'esprit par <RONNY> à New York pour la communauté mondiale de la photographie analogique.",

        // Best For tags
        goldenHour: "Heure Dorée",
        vacation: "Vacances",
        nostalgicScenes: "Scènes Nostalgiques",
        streetPhotography: "Photographie de Rue",
        travel: "Voyage",
        sunnyDays: "Jours Ensoleillés",
        nature: "Nature",
        portraits: "Portraits",
        weddings: "Mariages",
        landscapes: "Paysages",
        nightPhotography: "Photographie de Nuit",
        experimental: "Expérimental",
        retroAesthetics: "Esthétique Rétro",
        overcastDays: "Jours Nuageux",
        cinematicScenes: "Scènes Cinématiques",

        // Accessibility
        a11ySkipToContent: "Aller au contenu principal",
        a11yMainNavigation: "Navigation principale",
        a11yFilmSelection: "Panneau de sélection des pellicules",
        a11yColorChart: "Graphique radar de réponse couleur",
        a11yAnalysisResults: "Résultats d'analyse de pellicule",
        a11yChangeLanguage: "Changer de langue",
        a11ySwitchToDarkMode: "Passer en mode sombre",
        a11ySwitchToLightMode: "Passer en mode clair",
        a11yDismissBanner: "Fermer la bannière d'attribution",
        a11yFilmSelected: "sélectionnée",
        a11yFilmDeselected: "désélectionnée",
        a11ySelectFilm: "Sélectionner la pellicule",
        a11yDeselectFilm: "Désélectionner la pellicule",
        a11yMaxFilmsSelected: "Maximum 3 pellicules peuvent être sélectionnées",
        a11yReferenceEnabled: "Référence de base activée",
        a11yReferenceDisabled: "Référence de base désactivée",
        a11yToggleReference: "Basculer la référence de base",
        a11ySearchResults: "pellicules trouvées",
        a11yRadarChartDescription: "Graphique radar comparant les niveaux de saturation des couleurs sur 6 canaux: Rouge, Jaune, Vert, Cyan, Bleu et Magenta",
        a11yOpenExternalLink: "Ouvre dans un nouvel onglet",
        techStack: "",
        startComparing: ""
    }
};
