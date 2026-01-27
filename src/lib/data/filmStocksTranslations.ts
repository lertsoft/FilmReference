import type { Language } from '$lib/i18n/translations';

// Film-specific content that needs translation
export interface FilmTranslation {
    description: string;
    overall_bias: string;
    color_palette_notes: string;
    best_for: string[];
}

// Map of film ID to translations for each language
export const filmTranslations: Record<string, Record<Language, FilmTranslation>> = {
    kodak_gold_200: {
        en: {
            description: "The quintessential warm consumer film. Known for golden hour tones and nostalgic feel.",
            overall_bias: "Strong Warm / Yellow-Red Bias",
            color_palette_notes: "Blues are sacrificed to boost warm tones. Shadows often carry a brown/red tint.",
            best_for: ["Golden Hour", "Vacation", "Nostalgic Scenes"]
        },
        es: {
            description: "El rollo esencial con un tono cálido. Conocido por sus tonos de hora dorada y sensación nostálgica.",
            overall_bias: "Sesgo Cálido Fuerte / Amarillo-Rojo",
            color_palette_notes: "Los azules se sacrifican para potenciar los tonos cálidos. Las sombras a menudo llevan un tinte marrón/rojo.",
            best_for: ["Hora Dorada", "Vacaciones", "Escenas Nostálgicas"]
        },
        fr: {
            description: "La pellicule grand public chaude par excellence. Connue pour ses tons d'heure dorée et son atmosphère nostalgique.",
            overall_bias: "Biais Chaud Fort / Jaune-Rouge",
            color_palette_notes: "Les bleus sont sacrifiés pour renforcer les tons chauds. Les ombres portent souvent une teinte brune/rouge.",
            best_for: ["Heure Dorée", "Vacances", "Scènes Nostalgiques"]
        }
    },
    kodak_ultramax_400: {
        en: {
            description: "Excellent all-rounder. A versatile, high-saturation consumer film. Punchier than Portra but with less golden bias than Gold 200.",
            overall_bias: "Balanced High Saturation",
            color_palette_notes: "Excellent all-rounder. Primary colors (R, G, B) are all equally boosted, creating a 'pop' look without a heavy vintage cast.",
            best_for: ["Street Photography", "Travel", "Sunny Days"]
        },
        es: {
            description: "Excelente todoterreno. Un rollo de consumo versátil y de alta saturación. Más vibrante que Portra pero con menos sesgo dorado que Gold 200.",
            overall_bias: "Alta Saturación Equilibrada",
            color_palette_notes: "Excelente todoterreno. Los colores primarios (R, G, B) están igualmente potenciados, creando un look 'pop' sin un fuerte tono vintage.",
            best_for: ["Fotografía Callejera", "Viajes", "Días Soleados"]
        },
        fr: {
            description: "Excellent polyvalent. Une pellicule grand public polyvalente à haute saturation. Plus punchy que Portra mais avec moins de biais doré que Gold 200.",
            overall_bias: "Haute Saturation Équilibrée",
            color_palette_notes: "Excellent polyvalent. Les couleurs primaires (R, V, B) sont toutes également renforcées, créant un look 'pop' sans dominante vintage prononcée.",
            best_for: ["Photographie de Rue", "Voyage", "Jours Ensoleillés"]
        }
    },
    lomography_color_400: {
        en: {
            description: "High contrast and vibrant. Often rumored to be repooled Kodak UltraMax stock, but shows distinct characteristics in the greens.",
            overall_bias: "Contrast Heavy / Green-Yellow Bias",
            color_palette_notes: "Greens are punchy. Shadows can be crushed due to high contrast.",
            best_for: ["Nature", "High Contrast Scenes", "Lomo aesthetic"]
        },
        es: {
            description: "Alto contraste y vibrante. A menudo se rumorea que es un rollo Kodak UltraMax reenvasada, pero muestra características distintas en los verdes.",
            overall_bias: "Alto Contraste / Sesgo Verde-Amarillo",
            color_palette_notes: "Los verdes son vibrantes. Las sombras pueden aplastarse debido al alto contraste.",
            best_for: ["Naturaleza", "Escenas de Alto Contraste", "Estética Lomo"]
        },
        fr: {
            description: "Contraste élevé et vibrant. Souvent rumeur d'être du stock Kodak UltraMax reconditionnée, mais montre des caractéristiques distinctes dans les verts.",
            overall_bias: "Fort Contraste / Biais Vert-Jaune",
            color_palette_notes: "Les verts sont punchy. Les ombres peuvent être écrasées en raison du contraste élevé.",
            best_for: ["Nature", "Scènes à Fort Contraste", "Esthétique Lomo"]
        }
    },
    harman_phoenix_200: {
        en: {
            description: "An experimental stock with a unique, unmasked base. Extremely high contrast and quirky colors.",
            overall_bias: "Experimental / Strong Warm Cast",
            color_palette_notes: "Not for color accuracy. Greens often render as dark olive or brown. Reds are neon-like.",
            best_for: ["Abstract", "Experimental", "Moody Landscapes"]
        },
        es: {
            description: "Un rollo experimental con base única sin máscara. Contraste extremadamente alto y colores peculiares.",
            overall_bias: "Experimental / Dominante Cálida Fuerte",
            color_palette_notes: "No apta para precisión de color. Los verdes a menudo se renderizan como oliva oscuro o marrón. Los rojos son tipo neón.",
            best_for: ["Abstracto", "Experimental", "Paisajes Melancólicos"]
        },
        fr: {
            description: "Une pellicule expérimentale avec une base unique non masquée. Contraste extrêmement élevé et couleurs originales.",
            overall_bias: "Expérimental / Dominante Chaude Forte",
            color_palette_notes: "Pas pour la précision des couleurs. Les verts sont souvent rendus en olive foncé ou brun. Les rouges sont de type néon.",
            best_for: ["Abstrait", "Expérimental", "Paysages Mélancoliques"]
        }
    },
    kodak_ektar_100: {
        en: {
            description: "The finest grain color negative film. Professional grade with slide-film-like saturation.",
            overall_bias: "Balanced Saturation / Cool Shadows",
            color_palette_notes: "Can make skin tones look too red/sunburned. Shadows are cool (cyan/blue).",
            best_for: ["Landscapes", "Architecture", "Product Photography", "NOT Portraits"]
        },
        es: {
            description: "El rollo negativo de color de grano más fino. Grado profesional con saturación similar a diapositivas.",
            overall_bias: "Saturación Equilibrada / Sombras Frías",
            color_palette_notes: "Puede hacer que los tonos de piel parezcan demasiado rojos/quemados por el sol. Las sombras son frías (cian/azul).",
            best_for: ["Paisajes", "Arquitectura", "Fotografía de Producto", "NO Retratos"]
        },
        fr: {
            description: "La pellicule négative couleur au grain le plus fin. Qualité professionnelle avec une saturation comparable aux diapositives.",
            overall_bias: "Saturation Équilibrée / Ombres Froides",
            color_palette_notes: "Peut donner aux tons de peau un aspect trop rouge/brûlé par le soleil. Les ombres sont froides (cyan/bleu).",
            best_for: ["Paysages", "Architecture", "Photo de Produit", "PAS Portraits"]
        }
    },
    kodak_portra_400: {
        en: {
            description: "The industry standard for professional portraiture and photography. Exceptional latitude and natural skin tones.",
            overall_bias: "Natural / Skin Tone Priority",
            color_palette_notes: "Portra 400 has the tightest clustering around the neutral axis for cool colors, with extension only in the skin tone range (orange).",
            best_for: ["Portraits", "Weddings", "Mixed Lighting", "Travel"]
        },
        es: {
            description: "El estándar de la industria para retrato profesional y fotografía. Latitud excepcional y tonos de piel naturales.",
            overall_bias: "Natural / Prioridad Tonos de Piel",
            color_palette_notes: "Portra 400 tiene la agrupación más ajustada alrededor del eje neutral para colores fríos, con extensión solo en el rango de tonos de piel (naranja).",
            best_for: ["Retratos", "Bodas", "Iluminación Mixta", "Viajes"]
        },
        fr: {
            description: "La référence de l'industrie pour le portrait professionnel et la photographie. Latitude exceptionnelle et tons de peau naturels.",
            overall_bias: "Naturel / Priorité Tons Chair",
            color_palette_notes: "Portra 400 a le regroupement le plus serré autour de l'axe neutre pour les couleurs froides, avec extension uniquement dans la plage des tons chair (orange).",
            best_for: ["Portraits", "Mariages", "Éclairage Mixte", "Voyage"]
        }
    },
    kodak_portra_160: {
        en: {
            description: "Lower saturation and finer grain than Portra 400. Requires precise exposure.",
            overall_bias: "Subtle / Muted / Natural",
            color_palette_notes: "Slightly more muted than 400. Very soft transitions.",
            best_for: ["Studio Portraits", "Bright Daylight", "Fashion"]
        },
        es: {
            description: "Menor saturación y grano más fino que Portra 400. Requiere exposición precisa.",
            overall_bias: "Sutil / Atenuado / Natural",
            color_palette_notes: "Ligeramente más atenuado que el 400. Transiciones muy suaves.",
            best_for: ["Retratos de Estudio", "Luz del Día Brillante", "Moda"]
        },
        fr: {
            description: "Saturation plus faible et grain plus fin que Portra 400. Nécessite une exposition précise.",
            overall_bias: "Subtil / Atténué / Naturel",
            color_palette_notes: "Légèrement plus atténué que le 400. Transitions très douces.",
            best_for: ["Portraits Studio", "Plein Soleil", "Mode"]
        }
    },
    kodak_colorplus_200: {
        en: {
            description: "A budget stock with a distinct vintage, yellow character. Less orange than Gold 200.",
            overall_bias: "Vintage / Yellow Bias",
            color_palette_notes: "Often described as looking like a photo from the 70s/80s. Grain is more apparent than Gold.",
            best_for: ["Vintage Characteristics", "Bright Sun", "Street"]
        },
        es: {
            description: "Una película económica con carácter vintage y amarillento distintivo. Menos naranja que Gold 200.",
            overall_bias: "Vintage / Sesgo Amarillo",
            color_palette_notes: "A menudo descrita como una foto de los años 70/80. El grano es más evidente que Gold.",
            best_for: ["Características Vintage", "Sol Brillante", "Calle"]
        },
        fr: {
            description: "Une pellicule économique avec un caractère vintage et jaune distinct. Moins orange que Gold 200.",
            overall_bias: "Vintage / Biais Jaune",
            color_palette_notes: "Souvent décrite comme ressemblant à une photo des années 70/80. Le grain est plus apparent que Gold.",
            best_for: ["Caractéristiques Vintage", "Plein Soleil", "Rue"]
        }
    },
    fujifilm_200: {
        en: {
            description: "In recent years, made in the US (Most likely Kodak, and Gold 200 stock), but legacy Fuji stocks favor Magenta/Green.",
            overall_bias: "Magenta / Green",
            color_palette_notes: "Cooler than Kodak Gold. Emphasis on greens and purples rather than yellow/orange.",
            best_for: ["Nature", "Overcast Days", "Cityscapes"]
        },
        es: {
            description: "En años recientes, fabricada en EE.UU. (probablemente Kodak, y Gold 200 stock), pero las películas Fuji originales favorecen Magenta/Verde.",
            overall_bias: "Magenta / Verde",
            color_palette_notes: "Más fría que Kodak Gold. Énfasis en verdes y púrpuras en lugar de amarillo/naranja.",
            best_for: ["Naturaleza", "Días Nublados", "Paisajes Urbanos"]
        },
        fr: {
            description: "Ces dernières années, fabriquée aux USA (probablement Kodak, et Gold 200 stock), mais les stocks Fuji historiques favorisent Magenta/Vert.",
            overall_bias: "Magenta / Vert",
            color_palette_notes: "Plus froide que Kodak Gold. Accent sur les verts et violets plutôt que jaune/orange.",
            best_for: ["Nature", "Jours Nuageux", "Paysages Urbains"]
        }
    },
    cinestill_800t: {
        en: {
            description: "Kodak Vision 500 Motion picture film with the Remjet layer removed. Balanced for artificial light (3200K). Known for its halation effect when shotting light sources.",
            overall_bias: "Cool / Blue Bias (in Daylight)",
            color_palette_notes: "If shot in daylight without an 85B filter, images will be very blue. Under streetlights, it renders neutral whites.",
            best_for: ["Night Photography", "Neon Signs", "Cinematic Portraits", "Low Light"]
        },
        es: {
            description: "Rollo de cine Kodak Vision 500 con el Remjet capa eliminada. Equilibrada para luz artificial (3200K). Conocida por su efecto de halación cuando se dispara a las fuentes de luz.",
            overall_bias: "Fría / Sesgo Azul (en Luz de Día)",
            color_palette_notes: "Si se dispara a la luz del día sin filtro 85B, las imágenes serán muy azules. Bajo farolas, renderiza blancos neutros.",
            best_for: ["Fotografía Nocturna", "Letreros de Neón", "Retratos Cinematográficos", "Poca Luz"]
        },
        fr: {
            description: "Pellicule cinéma Kodak Vision 500 avec le Remjet layer retiré. Équilibrée pour lumière artificielle (3200K). Connu pour son effet de halo lors de la prise de vue de sources lumineuses.",
            overall_bias: "Froide / Biais Bleu (en Lumière du Jour)",
            color_palette_notes: "Si prise en lumière du jour sans filtre 85B, les images seront très bleues. Sous les lampadaires, elle rend des blancs neutres.",
            best_for: ["Photo de Nuit", "Enseignes Néon", "Portraits Cinématiques", "Basse Lumière"]
        }
    },
    cinestill_50d: {
        en: {
            description: "A daylight-balanced motion picture film. Famous for its fine grain and specific halation effect due to the removal of the Remjet layer. Known for its subtle halation effect.",
            overall_bias: "Dual Complementary / Blue-Gold & Cyan-Orange",
            color_palette_notes: "Low color accuracy with a stylized 'cinema' look. Shadows are cool/teal while highlights carry a reddish glow (halation).",
            best_for: ["Golden Hour", "Blue Hour", "Bright Daylight", "Cinematic Scenes"]
        },
        es: {
            description: "Una película de cine equilibrada para luz de día. Famosa por su grano fino y efecto de halación específico debido a la eliminación de la capa Remjet. Conocida por su efecto de halación suave.",
            overall_bias: "Complementario Dual / Azul-Dorado y Cian-Naranja",
            color_palette_notes: "Baja precisión de color con look estilizado 'cine'. Las sombras son frías/verde azulado mientras los brillos llevan un resplandor rojizo (halación).",
            best_for: ["Hora Dorada", "Hora Azul", "Luz del Día Brillante", "Escenas Cinematográficas"]
        },
        fr: {
            description: "Une pellicule cinéma équilibrée lumière du jour. Célèbre pour son grain fin et son effet d'halation spécifique dû au retrait de la couche Remjet. Connu pour son effet de halation subtil.",
            overall_bias: "Double Complémentaire / Bleu-Or & Cyan-Orange",
            color_palette_notes: "Faible précision des couleurs avec un look 'cinéma' stylisé. Les ombres sont froides/sarcelle tandis que les hautes lumières portent une lueur rougeâtre (halation).",
            best_for: ["Heure Dorée", "Heure Bleue", "Plein Soleil", "Scènes Cinématiques"]
        }
    },
    film_onehundred_100: {
        en: {
            description: "A unique stock with a 'split complementary' personality. It offers high contrast and a very distinct color separation.",
            overall_bias: "Red Dominant / Cyan-Green Split",
            color_palette_notes: "Vegetation looks distinct with 'teal' greens. Sunsets often render with strong pink/magenta hues due to the red bias and lack of orange masking.",
            best_for: ["Landscapes", "Vegetation", "Sunsets", "NOT Portraits"]
        },
        es: {
            description: "Una película única con personalidad 'complementaria dividida'. Ofrece alto contraste y separación de colores muy distintiva.",
            overall_bias: "Rojo Dominante / División Cian-Verde",
            color_palette_notes: "La vegetación se ve distintiva con verdes 'verde azulado'. Los atardeceres a menudo se renderizan con fuertes tonos rosados/magenta debido al sesgo rojo y falta de máscara naranja.",
            best_for: ["Paisajes", "Vegetación", "Atardeceres", "NO Retratos"]
        },
        fr: {
            description: "Une pellicule unique avec une personnalité 'complémentaire divisée'. Elle offre un contraste élevé et une séparation des couleurs très distincte.",
            overall_bias: "Rouge Dominant / Division Cyan-Vert",
            color_palette_notes: "La végétation paraît distincte avec des verts 'sarcelle'. Les couchers de soleil sont souvent rendus avec de fortes teintes rose/magenta en raison du biais rouge et du manque de masquage orange.",
            best_for: ["Paysages", "Végétation", "Couchers de Soleil", "PAS Portraits"]
        }
    },
    kodak_pro_image_100: {
        en: {
            description: "A budget professional film often targeted at South American and Asian markets. Known for good shelf stability.",
            overall_bias: "Bright / Desaturated",
            color_palette_notes: "The analysis showed washed-out colors and visible grain for an ISO 100 film, though this may vary by batch/development. Generally considered a 'gentle' film.",
            best_for: ["Weddings (traditionally)", "Bright Sun", "Travel"]
        },
        es: {
            description: "Una película profesional económica a menudo dirigida a mercados sudamericanos y asiáticos. Conocida por su buena estabilidad de almacenamiento.",
            overall_bias: "Brillante / Desaturado",
            color_palette_notes: "El análisis mostró colores lavados y grano visible para una película ISO 100, aunque esto puede variar según lote/revelado. Generalmente considerada una película 'suave'.",
            best_for: ["Bodas (tradicionalmente)", "Sol Brillante", "Viajes"]
        },
        fr: {
            description: "Une pellicule professionnelle économique souvent destinée aux marchés sud-américains et asiatiques. Connue pour sa bonne stabilité de conservation.",
            overall_bias: "Lumineux / Désaturé",
            color_palette_notes: "L'analyse a montré des couleurs délavées et un grain visible pour une pellicule ISO 100, bien que cela puisse varier selon le lot/développement. Généralement considérée comme une pellicule 'douce'.",
            best_for: ["Mariages (traditionnellement)", "Plein Soleil", "Voyage"]
        }
    },
    lomochrome_color_92: {
        en: {
            description: "A film designed to mimic the aesthetic of 90s snapshots. Unique crystal structure results in a retro, gritty look.",
            overall_bias: "Cool / Blue Dominant",
            color_palette_notes: "Muted and low saturation for everything except blue. Gives a distinct cool cast that feels like a 'faded memory'.",
            best_for: ["Street Photography", "Retro Aesthetics", "Overcast Days"]
        },
        es: {
            description: "Un rollo diseñado para imitar la estética de las fotos instantáneas de los 90. Su estructura cristalina única resulta en un look retro y granulado.",
            overall_bias: "Fría / Azul Dominante",
            color_palette_notes: "Atenuada y baja saturación para todo excepto el azul. Da un distintivo tono frío que se siente como un 'recuerdo desvanecido'.",
            best_for: ["Fotografía Callejera", "Estética Retro", "Días Nublados"]
        },
        fr: {
            description: "Une pellicule conçue pour imiter l'esthétique des photos des années 90. Sa structure cristalline unique donne un look rétro et granuleux.",
            overall_bias: "Froide / Bleu Dominant",
            color_palette_notes: "Atténuée et faible saturation pour tout sauf le bleu. Donne une dominante froide distincte qui ressemble à un 'souvenir effacé'.",
            best_for: ["Photographie de Rue", "Esthétique Rétro", "Jours Nuageux"]
        }
    }
};

// Helper function to get localized film content
export function getLocalizedFilmContent(filmId: string, language: Language): FilmTranslation | null {
    const filmData = filmTranslations[filmId];
    if (!filmData) return null;
    return filmData[language] || filmData['en']; // Fallback to English
}
