export interface VectorColor {
  saturation: number;
  hue_shift: string;
  note?: string;
}

export interface VectorscopeAnalysis {
  overall_bias: string;
  red: VectorColor;
  yellow: VectorColor;
  green: VectorColor;
  cyan: VectorColor;
  blue: VectorColor;
  magenta: VectorColor;
}

export interface FilmStock {
  id: string;
  name: string;
  iso: number;
  manufacturer: string;
  type: string;
  description: string;
  image: string;
  vectorscope_analysis: VectorscopeAnalysis;
  color_palette_notes: string;
  best_for: string[];
}

export const filmStocks: FilmStock[] = [
  {
    "id": "kodak_gold_200",
    "name": "Kodak Gold 200",
    "iso": 200,
    "manufacturer": "Kodak",
    "type": "Color Negative",
    "description": "The quintessential warm consumer film. Known for golden hour tones and nostalgic feel.",
    "image": "/films/kodak_gold_200.png",
    "vectorscope_analysis": {
      "overall_bias": "Strong Warm / Yellow-Red Bias",
      "red": { "saturation": 1.2, "hue_shift": "towards_yellow" },
      "yellow": { "saturation": 1.5, "hue_shift": "towards_red", "note": "Dominant vector, extremely saturated" },
      "green": { "saturation": 0.9, "hue_shift": "neutral" },
      "cyan": { "saturation": 0.7, "hue_shift": "towards_blue", "note": "Muted and desaturated" },
      "blue": { "saturation": 0.6, "hue_shift": "towards_magenta", "note": "Significantly desaturated" },
      "magenta": { "saturation": 0.8, "hue_shift": "towards_red" }
    },
    "color_palette_notes": "Blues are sacrificed to boost warm tones. Shadows often carry a brown/red tint.",
    "best_for": ["Golden Hour", "Vacation", "Nostalgic Scenes"]
  },
  {
    "id": "kodak_ultramax_400",
    "name": "Kodak Ultramax 400",
    "iso": 400,
    "manufacturer": "Kodak",
    "type": "Color Negative",
    "description": "A versatile, high-saturation consumer film. Punchier than Portra but with less golden bias than Gold 200.",
    "image": "/films/kodak_ultramax_400.png",
    "vectorscope_analysis": {
      "overall_bias": "Balanced High Saturation",
      "red": { "saturation": 1.3, "hue_shift": "neutral" },
      "yellow": { "saturation": 1.3, "hue_shift": "neutral" },
      "green": { "saturation": 1.1, "hue_shift": "towards_cyan" },
      "cyan": { "saturation": 1.0, "hue_shift": "neutral" },
      "blue": { "saturation": 1.2, "hue_shift": "neutral", "note": "Much stronger blues than Gold 200" },
      "magenta": { "saturation": 1.1, "hue_shift": "neutral" }
    },
    "color_palette_notes": "Excellent all-rounder. Primary colors (R, G, B) are all equally boosted, creating a 'pop' look without a heavy vintage cast.",
    "best_for": ["Street Photography", "Travel", "Sunny Days"]
  },
  {
    "id": "lomography_color_400",
    "name": "Lomography Color 400",
    "iso": 400,
    "manufacturer": "Lomography",
    "type": "Color Negative",
    "description": "High contrast and vibrant. Often rumored to be repooled Kodak stock, but shows distinct characteristics in the greens.",
    "image": "/films/lomography_color_400.png",
    "vectorscope_analysis": {
      "overall_bias": "Contrast Heavy / Green-Yellow Bias",
      "red": { "saturation": 1.2, "hue_shift": "neutral" },
      "yellow": { "saturation": 1.3, "hue_shift": "towards_green" },
      "green": { "saturation": 1.4, "hue_shift": "neutral", "note": "Very strong greens compared to Kodak consumer stocks" },
      "cyan": { "saturation": 0.9, "hue_shift": "neutral" },
      "blue": { "saturation": 1.1, "hue_shift": "towards_cyan" },
      "magenta": { "saturation": 1.0, "hue_shift": "towards_red" }
    },
    "color_palette_notes": "Greens are punchy. Shadows can be crushed due to high contrast.",
    "best_for": ["Nature", "High Contrast Scenes", "Lomo aesthetic"]
  },
  {
    "id": "harman_phoenix_200",
    "name": "Harman Phoenix 200",
    "iso": 200,
    "manufacturer": "Harman",
    "type": "Color Negative",
    "description": "An experimental stock with a unique, unmasked base. Extremely high contrast and quirky colors.",
    "image": "/films/harman_phoenix_200.png",
    "vectorscope_analysis": {
      "overall_bias": "Experimental / Strong Warm Cast",
      "red": { "saturation": 1.6, "hue_shift": "towards_orange", "note": "Explosive reds, halation prone" },
      "yellow": { "saturation": 1.4, "hue_shift": "towards_red" },
      "green": { "saturation": 0.6, "hue_shift": "towards_yellow", "note": "Weak and muddy greens" },
      "cyan": { "saturation": 0.5, "hue_shift": "towards_blue" },
      "blue": { "saturation": 0.8, "hue_shift": "towards_magenta" },
      "magenta": { "saturation": 1.2, "hue_shift": "towards_red" }
    },
    "color_palette_notes": "Not for color accuracy. Greens often render as dark olive or brown. Reds are neon-like.",
    "best_for": ["Abstract", "Experimental", "Moody Landscapes"]
  },
  {
    "id": "kodak_ektar_100",
    "name": "Kodak Ektar 100",
    "iso": 100,
    "manufacturer": "Kodak",
    "type": "Color Negative",
    "description": "The finest grain color negative film. Professional grade with slide-film-like saturation.",
    "image": "/films/kodak_ektar_100.png",
    "vectorscope_analysis": {
      "overall_bias": "Extreme Saturation / Cool Shadows",
      "red": { "saturation": 1.5, "hue_shift": "neutral", "note": "Very strong pure reds" },
      "yellow": { "saturation": 1.4, "hue_shift": "neutral" },
      "green": { "saturation": 1.3, "hue_shift": "towards_cyan" },
      "cyan": { "saturation": 1.3, "hue_shift": "neutral", "note": "Sky blues are deep and rich" },
      "blue": { "saturation": 1.4, "hue_shift": "neutral" },
      "magenta": { "saturation": 1.4, "hue_shift": "neutral" }
    },
    "color_palette_notes": "Can make skin tones look too red/sunburned. Shadows are cool (cyan/blue).",
    "best_for": ["Landscapes", "Architecture", "Product Photography", "NOT Portraits"]
  },
  {
    "id": "kodak_portra_400",
    "name": "Kodak Portra 400",
    "iso": 400,
    "manufacturer": "Kodak",
    "type": "Color Negative",
    "description": "The industry standard for professional portraiture. Exceptional latitude and natural skin tones.",
    "image": "/films/kodak_portra_400.png",
    "vectorscope_analysis": {
      "overall_bias": "Natural / Skin Tone Priority",
      "red": { "saturation": 1.1, "hue_shift": "towards_yellow", "note": "Controlled reds for skin" },
      "yellow": { "saturation": 1.2, "hue_shift": "towards_red", "note": "Warmth favored over pure yellow" },
      "green": { "saturation": 1.0, "hue_shift": "neutral" },
      "cyan": { "saturation": 1.0, "hue_shift": "neutral" },
      "blue": { "saturation": 1.0, "hue_shift": "neutral" },
      "magenta": { "saturation": 1.0, "hue_shift": "neutral" }
    },
    "color_palette_notes": "The vectorscope shows the tightest clustering around the neutral axis for cool colors, with extension only in the skin tone range (orange).",
    "best_for": ["Portraits", "Weddings", "Mixed Lighting", "Travel"]
  },
  {
    "id": "kodak_portra_160",
    "name": "Kodak Portra 160",
    "iso": 160,
    "manufacturer": "Kodak",
    "type": "Color Negative",
    "description": "Lower saturation and finer grain than Portra 400. Requires precise exposure.",
    "image": "/films/kodak_portra_160.png",
    "vectorscope_analysis": {
      "overall_bias": "Subtle / Muted / Natural",
      "red": { "saturation": 1.0, "hue_shift": "towards_yellow" },
      "yellow": { "saturation": 1.1, "hue_shift": "towards_red" },
      "green": { "saturation": 0.9, "hue_shift": "neutral" },
      "cyan": { "saturation": 0.9, "hue_shift": "neutral" },
      "blue": { "saturation": 0.9, "hue_shift": "neutral" },
      "magenta": { "saturation": 0.9, "hue_shift": "neutral" }
    },
    "color_palette_notes": "Slightly more muted than 400. Very soft transitions.",
    "best_for": ["Studio Portraits", "Bright Daylight", "Fashion"]
  },
  {
    "id": "kodak_colorplus_200",
    "name": "Kodak Color Plus 200",
    "iso": 200,
    "manufacturer": "Kodak",
    "type": "Color Negative",
    "description": "A budget stock with a distinct vintage, yellow character. Less orange than Gold 200.",
    "image": "/films/kodak_colorplus_200.png",
    "vectorscope_analysis": {
      "overall_bias": "Vintage / Yellow Bias",
      "red": { "saturation": 1.1, "hue_shift": "neutral" },
      "yellow": { "saturation": 1.4, "hue_shift": "neutral", "note": "Pure yellow dominance" },
      "green": { "saturation": 1.0, "hue_shift": "towards_yellow" },
      "cyan": { "saturation": 0.8, "hue_shift": "neutral" },
      "blue": { "saturation": 0.8, "hue_shift": "neutral" },
      "magenta": { "saturation": 0.9, "hue_shift": "neutral" }
    },
    "color_palette_notes": "Often described as looking like a photo from the 70s/80s. Grain is more apparent than Gold.",
    "best_for": ["Retro styling", "Bright Sun", "Street"]
  },
  {
    "id": "fujifilm_200",
    "name": "Fujifilm 200",
    "iso": 200,
    "manufacturer": "Fujifilm",
    "type": "Color Negative",
    "description": "In recent years, made in the US (likely Gold 200), but legacy Fuji stocks favor Magenta/Green.",
    "image": "/films/fujifilm_200.png",
    "vectorscope_analysis": {
      "overall_bias": "Magenta / Green",
      "red": { "saturation": 1.0, "hue_shift": "neutral" },
      "yellow": { "saturation": 1.1, "hue_shift": "neutral" },
      "green": { "saturation": 1.1, "hue_shift": "towards_cyan", "note": "Classic Fuji nature greens" },
      "cyan": { "saturation": 1.0, "hue_shift": "neutral" },
      "blue": { "saturation": 1.0, "hue_shift": "neutral" },
      "magenta": { "saturation": 1.1, "hue_shift": "towards_blue", "note": "Skin tones can be pinker" }
    },
    "color_palette_notes": "Cooler than Kodak Gold. Emphasis on greens and purples rather than yellow/orange.",
    "best_for": ["Nature", "Overcast Days", "Cityscapes"]
  },
  {
    "id": "cinestill_800t",
    "name": "CineStill 800T",
    "iso": 800,
    "manufacturer": "CineStill",
    "type": "Color Negative (Tungsten Balanced)",
    "description": "Motion picture film with Remjet removed. Balanced for artificial light (3200K).",
    "image": "/films/cinestill_800t.png",
    "vectorscope_analysis": {
      "overall_bias": "Cool / Blue Bias (in Daylight)",
      "red": { "saturation": 1.0, "hue_shift": "neutral", "note": "Halation creates red glow around highlights" },
      "yellow": { "saturation": 0.8, "hue_shift": "towards_green" },
      "green": { "saturation": 1.0, "hue_shift": "towards_cyan" },
      "cyan": { "saturation": 1.2, "hue_shift": "towards_blue" },
      "blue": { "saturation": 1.3, "hue_shift": "towards_cyan", "note": "Dominant cool cast unless filtered" },
      "magenta": { "saturation": 1.1, "hue_shift": "towards_blue" }
    },
    "color_palette_notes": "If shot in daylight without an 85B filter, images will be very blue. Under streetlights, it renders neutral whites.",
    "best_for": ["Night Photography", "Neon Signs", "Cinematic Portraits", "Low Light"]
  },
  {
    "id": "cinestill_50d",
    "name": "CineStill 50D",
    "iso": 50,
    "manufacturer": "CineStill",
    "type": "Color Negative (Motion Picture, Remjet Removed)",
    "description": "A daylight-balanced motion picture film. Famous for its fine grain and specific halation effect due to the removal of the Remjet layer.",
    "image": "/films/cinestill_50d.png",
    "vectorscope_analysis": {
      "overall_bias": "Dual Complementary / Blue-Gold & Cyan-Orange",
      "red": { "saturation": 0.9, "hue_shift": "towards_orange", "note": "Soft, pastel orange tones" },
      "yellow": { "saturation": 0.7, "hue_shift": "neutral", "note": "Desaturated, leading to muted skin tones" },
      "green": { "saturation": 0.8, "hue_shift": "neutral" },
      "cyan": { "saturation": 1.1, "hue_shift": "neutral" },
      "blue": { "saturation": 1.2, "hue_shift": "towards_cyan", "note": "Vibrant and saturated, excellent for skies" },
      "magenta": { "saturation": 0.8, "hue_shift": "neutral" }
    },
    "color_palette_notes": "Low color accuracy with a stylized 'cinema' look. Shadows are cool/teal while highlights carry a reddish glow (halation).",
    "best_for": ["Golden Hour", "Blue Hour", "Bright Daylight", "Cinematic Scenes"]
  },
  {
    "id": "film_onehundred_100",
    "name": "Film Onehundred 100 (Aerocolor IV)",
    "iso": 100,
    "manufacturer": "Various (Kodak Aerocolor IV Respool)",
    "type": "Color Negative (Aerial Surveillance Film)",
    "description": "A unique stock with a 'split complementary' personality. Likely Aerocolor IV, it offers high contrast and a very distinct color separation.",
    "image": "/films/film_onehundred_100.png",
    "vectorscope_analysis": {
      "overall_bias": "Red Dominant / Cyan-Green Split",
      "red": { "saturation": 1.3, "hue_shift": "towards_magenta", "note": "The protagonist of this film. High saturation." },
      "yellow": { "saturation": 0.8, "hue_shift": "neutral", "note": "Desaturated, can make skin look pink/red" },
      "green": { "saturation": 1.1, "hue_shift": "towards_cyan", "note": "Cool, watery greens. Distinct separation from yellow-greens." },
      "cyan": { "saturation": 1.0, "hue_shift": "neutral" },
      "blue": { "saturation": 1.0, "hue_shift": "towards_cyan" },
      "magenta": { "saturation": 1.2, "hue_shift": "neutral", "note": "Rich tonal rendering often lost in other films" }
    },
    "color_palette_notes": "Vegetation looks distinct with 'teal' greens. Sunsets often render with strong pink/magenta hues due to the red bias and lack of orange masking.",
    "best_for": ["Landscapes", "Vegetation", "Sunsets", "NOT Portraits"]
  },
  {
    "id": "kodak_pro_image_100",
    "name": "Kodak Pro Image 100",
    "iso": 100,
    "manufacturer": "Kodak",
    "type": "Color Negative",
    "description": "A budget professional film often targeted at South American and Asian markets. Known for good shelf stability.",
    "image": "/films/kodak_pro_image_100.png",
    "vectorscope_analysis": {
      "overall_bias": "Bright / Desaturated (In Video Test)",
      "red": { "saturation": 1.0, "hue_shift": "towards_orange" },
      "yellow": { "saturation": 0.9, "hue_shift": "neutral" },
      "green": { "saturation": 0.9, "hue_shift": "towards_yellow" },
      "cyan": { "saturation": 0.9, "hue_shift": "neutral" },
      "blue": { "saturation": 0.9, "hue_shift": "towards_cyan", "note": "Smooth blues" },
      "magenta": { "saturation": 0.9, "hue_shift": "neutral" }
    },
    "color_palette_notes": "The analysis showed washed-out colors and visible grain for an ISO 100 film, though this may vary by batch/development. Generally considered a 'gentle' film.",
    "best_for": ["Weddings (traditionally)", "Bright Sun", "Travel"]
  },
  {
    "id": "lomochrome_color_92",
    "name": "LomoChrome Color '92",
    "iso": 400,
    "manufacturer": "Lomography",
    "type": "Color Negative",
    "description": "A film designed to mimic the aesthetic of 90s snapshots. Unique crystal structure results in a retro, gritty look.",
    "image": "/films/lomochrome_color_92.png",
    "vectorscope_analysis": {
      "overall_bias": "Cool / Blue Dominant",
      "red": { "saturation": 0.9, "hue_shift": "towards_orange" },
      "yellow": { "saturation": 0.9, "hue_shift": "neutral" },
      "green": { "saturation": 1.0, "hue_shift": "neutral", "note": "Faithful greens" },
      "cyan": { "saturation": 0.9, "hue_shift": "neutral" },
      "blue": { "saturation": 1.4, "hue_shift": "neutral", "note": "The only strongly saturated color. Deep, uniform blues." },
      "magenta": { "saturation": 0.8, "hue_shift": "towards_blue" }
    },
    "color_palette_notes": "Muted and low saturation for everything except blue. Gives a distinct cool cast that feels like a 'faded memory'.",
    "best_for": ["Street Photography", "Retro Aesthetics", "Overcast Days"]
  }
];

// Reference baseline for comparison (neutral, all at 1.0)
export const referenceBaseline: VectorscopeAnalysis = {
  overall_bias: "Neutral Reference",
  red: { saturation: 1.0, hue_shift: "neutral" },
  yellow: { saturation: 1.0, hue_shift: "neutral" },
  green: { saturation: 1.0, hue_shift: "neutral" },
  cyan: { saturation: 1.0, hue_shift: "neutral" },
  blue: { saturation: 1.0, hue_shift: "neutral" },
  magenta: { saturation: 1.0, hue_shift: "neutral" }
};
