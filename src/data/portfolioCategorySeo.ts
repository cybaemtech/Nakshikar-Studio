import { type Category } from "./worksData";

export interface CategorySeoData {
  title: string;
  metaDescription: string;
  h1: string;
  introParagraph: string;
  eyebrow: string;
}

export const PORTFOLIO_OVERVIEW_SEO: CategorySeoData = {
  title: "Portfolio of Custom Art, Murals & Design | Nakshikar's Studio",
  metaDescription:
    "Explore the portfolio of Nakshikar's Studio in Pune, PCMC & Mumbai. Handcrafted canvas paintings, custom murals, architectural wall art, designer nameplates, and graphics.",
  h1: "Art & Design Portfolio",
  eyebrow: "Our Portfolio",
  introParagraph:
    "Explore bespoke artistic creations by Nakshikar's Studio in Pune, PCMC & Mumbai. From original canvas paintings and architectural wall murals to designer nameplates and corporate branding, our work brings timeless craft to modern spaces.",
};

export const CATEGORY_SEO_MAP: Record<Category, CategorySeoData> = {
  "Graphics": {
    title: "Custom Graphics, Logo & Brand Identity Design | Nakshikar's Studio",
    metaDescription:
      "Discover bespoke graphic design, corporate brand identity, custom typography, emblems, and packaging created by Nakshikar's Studio in Pune, PCMC, and Mumbai.",
    h1: "Graphic Design & Branding Portfolio",
    eyebrow: "Graphics & Branding",
    introParagraph:
      "Bespoke visual branding, typography, logotypes, and packaging crafted by Nakshikar's Studio for businesses in Pune & Mumbai. We build authentic brand identities that bridge commercial strategy with emotional resonance.",
  },
  "Wall Design": {
    title: "Architectural Wall Design & Texture Finishes | Nakshikar's Studio",
    metaDescription:
      "Browse modern artistic wall designs, textured architectural finishes, 3D relief wall art, and accent treatments crafted for luxury homes and offices across Pune.",
    h1: "Wall Design & Finishes Portfolio",
    eyebrow: "Wall Design",
    introParagraph:
      "Sculptural wall treatments, modern plaster textures, and 3D architectural feature finishes crafted in Pune. Transforming ordinary vertical partitions into tactile, ambient focal points for luxury homes and executive offices.",
  },
  "Paintings": {
    title: "Handcrafted Canvas & Acrylic Art Paintings | Nakshikar's Studio",
    metaDescription:
      "Explore original handcrafted paintings, modern abstract canvas art, spiritual oil paintings, and heritage portraits crafted by artists at Nakshikar's Studio.",
    h1: "Canvas & Fine Art Paintings Portfolio",
    eyebrow: "Paintings & Canvas Art",
    introParagraph:
      "Original handcrafted paintings in acrylic, oil, and gold leaf on Belgian canvas by Nakshikar's Studio. Spanning contemporary abstracts, landscape studies, and revered spiritual compositions for discerning art collectors.",
  },
  "Murals": {
    title: "Custom Wall Murals & Architectural Art | Nakshikar's Studio",
    metaDescription:
      "View bespoke hand-painted wall murals, 3D relief installations, and large-scale architectural art created for villas, restaurants, and offices in Pune & Mumbai.",
    h1: "Custom Wall Murals Portfolio",
    eyebrow: "Murals & Installations",
    introParagraph:
      "Monumental site-specific wall murals and 3D relief art installations across Pune & Mumbai. Handcrafted using durable, weather-resistant pigments to redefine residential atriums, restaurant interiors, and corporate campuses.",
  },
  "Nameplates": {
    title: "Designer Nameplates & House Signage in Pune | Nakshikar's Studio",
    metaDescription:
      "Discover bespoke designer nameplates, luxury acrylic, brass, teakwood, and warm LED backlit entrance signage handcrafted in Pune by Nakshikar's Studio.",
    h1: "Designer Nameplates Portfolio",
    eyebrow: "Designer Nameplates",
    introParagraph:
      "Bespoke handcrafted entrance signage and designer nameplates in brass, acrylic, seasoned teakwood, and warm LED backlighting. Tailored in Pune to make every luxury apartment and bungalow entryway distinctively memorable.",
  },
  "Interior Support": {
    title: "Interior Art Support & Styling Solutions | Nakshikar's Studio",
    metaDescription:
      "Turnkey art consulting, custom sculptures, artifacts, decorative lighting, and spatial styling partnerships for architects & interior designers in Pune & Mumbai.",
    h1: "Interior Art Support Portfolio",
    eyebrow: "Interior Art Support",
    introParagraph:
      "Turnkey art consulting, custom artifacts, decorative lighting accents, and spatial styling partnerships for architects and interior designers in Pune & Mumbai, ensuring flawless execution from concept to final installation.",
  },
};
