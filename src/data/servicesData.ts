import { type Category } from "./worksData";
import graphicsImg from "@/assets/services/Ramalay2.webp";
import wallDesignImg from "@/assets/services/services/walldesign.webp";
import paintingImg from "@/assets/services/services/paintings.webp";
import muralImg from "@/assets/services/services/mrunal.webp";
import nameplateImg from "@/assets/services/services/nameplate.webp";
import interiorSupportImg from "@/assets/services/services/interior-support.webp";

export interface ServiceDetail {
  category: Category;
  slug: string;
  heroTitle: string;
  heroSubtitle: string;
  description: string;
  image: string;
  offerings: {
    title: string;
    description: string;
    tags: string[];
  }[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  highlights: string[];
  seoTitle: string;
  metaDescription: string;
}

export const SERVICES_DETAIL_MAP: Record<Category, ServiceDetail> = {
  "Graphics": {
    category: "Graphics",
    slug: "graphics",
    heroTitle: "Bespoke Graphic Design & Brand Identity Systems",
    heroSubtitle: "Design studio crafting memorable logos, lettering, and packaging that define your brand identity.",
    description: "At Nakshikar's Studio, graphic design is an art of intentional storytelling. We collaborate with ambitious startups, luxury developers, hospitality groups, and cultural entities to craft distinctive brand identities, bespoke typography, luxury packaging, and high-impact marketing collateral.",
    image: graphicsImg,
    offerings: [
      {
        title: "Logo & Visual Identity",
        description: "Distinctive brandmarks, typographic emblems, and comprehensive visual design systems engineered for memorability.",
        tags: ["Logo Design", "Brand Guidelines", "Visual Emblems", "Color Palettes"],
      },
      {
        title: "Brochures & Corporate Profiles",
        description: "Editorial layouts, luxury real estate prospectuses, and sales catalogs that present your brand with prestige.",
        tags: ["Corporate Brochures", "Real Estate Folios", "Annual Reports", "Company Profiles"],
      },
      {
        title: "Product Packaging Design",
        description: "Structural and surface packaging that commands retail shelf attention and creates memorable unboxing rituals.",
        tags: ["Box Packaging", "Label Systems", "Foil Stamping", "Eco-friendly Materials"],
      },
      {
        title: "Typography & Heritage Calligraphy",
        description: "Custom Devanagari, Marathi, and Latin calligraphy crafted for luxury signage, invitations, and identity marks.",
        tags: ["Devanagari Calligraphy", "Custom Letterforms", "Heraldic Monograms", "Display Type"],
      },
    ],
    process: [
      { step: "01", title: "Brand Discovery", description: "Deep dive into your market positioning, values, and architectural aesthetic." },
      { step: "02", title: "Conceptual Direction", description: "Crafting diverse creative routes with preliminary sketches and typographic mood boards." },
      { step: "03", title: "Artisan Refinement", description: "Polishing vector geometry, color calibration, and tactile print specifications." },
      { step: "04", title: "Asset Delivery", description: "Turnkey delivery of master vector files, brand guidelines, and print-ready deliverables." },
    ],
    highlights: ["Over 15 years crafting corporate identities", "Custom Marathi & Devanagari calligraphy specialists", "Full spectrum from digital screens to print finishing"],
    seoTitle: "Graphic Design & Brand Identity Services in Pune | Nakshikar's Studio",
    metaDescription: "Professional graphic design, corporate branding, custom typography, luxury packaging, and print media services in Pune by Nakshikar's Studio.",
  },

  "Wall Design": {
    category: "Wall Design",
    slug: "wall-design",
    heroTitle: "Architectural Wall Design & Sculptural Textures",
    heroSubtitle: "Transforming plain walls into standout features with textured finishes and bespoke 3D designs.",
    description: "Elevate your interior architecture with handcrafted wall treatments that respond to ambient lighting throughout the day. From calming organic stucco textures to bold geometric relief backdrops, our artisans create tailored spatial atmospheres for luxury homes, corporate boardrooms, and boutique hotels.",
    image: wallDesignImg,
    offerings: [
      {
        title: "Textured Decorative Plaster",
        description: "Venetian plaster, lime-wash, micro-cement, and earthy textured coatings crafted with natural mineral pigments.",
        tags: ["Venetian Plaster", "Lime Wash", "Raw Stucco", "Concrete Texture"],
      },
      {
        title: "3D Relief Feature Walls",
        description: "Three-dimensional sculptural panels and cast reliefs that introduce tactile depth and shadow play.",
        tags: ["Geometric Panels", "Organic Waves", "Cast Reliefs", "Architectural Accents"],
      },
      {
        title: "Metallic & Patina Accents",
        description: "Artisanal gilding, oxidised copper patinas, and brushed metallic leaf finishes for bespoke focal walls.",
        tags: ["Gold Leaf Gilding", "Verdigris Copper", "Bronze Sheen", "Distressed Textures"],
      },
      {
        title: "Custom Acoustic Wall Art",
        description: "Artistic wall surfaces integrated with sound-dampening backing materials for executive offices and media lounges.",
        tags: ["Acoustic Textures", "Media Rooms", "Boardroom Art", "Bespoke Paneling"],
      },
    ],
    process: [
      { step: "01", title: "Space Assessment", description: "Studying wall dimensions, lighting angles, and interior material palettes." },
      { step: "02", title: "Material Sampling", description: "Creating physical mockups on sample boards for client and architect sign-off." },
      { step: "03", title: "Surface Preparation", description: "Priming, masking, and base-coating substrates for flawless adhesion." },
      { step: "04", title: "Artisan Application", description: "Hand-troweling and multi-layer sealing with durable protective topcoats." },
    ],
    highlights: ["Durable, washable architectural finishes", "Physical custom sample boards created before execution", "Seamless collaboration with architects and contractors"],
    seoTitle: "Architectural Wall Design & Texture Services in Pune | Nakshikar's Studio",
    metaDescription: "Artistic wall designs, Venetian plaster, 3D textured feature walls, and architectural accent treatments in Pune & Mumbai by Nakshikar's Studio.",
  },

  "Paintings": {
    category: "Paintings",
    slug: "paintings",
    heroTitle: "Original Handcrafted Paintings & Canvas Art Commissions",
    heroSubtitle: "Original handmade paintings, from modern abstracts to peaceful landscapes, crafted with rich pigments and gold accents.",
    description: "Nakshikar's Studio crafts original fine art pieces tailored specifically to the proportions and spirit of your space. Whether commissioning a breathtaking contemporary abstract, an evocative landscape, or a sacred spiritual portrait, every piece is layered with archival pigments to endure for generations.",
    image: paintingImg,
    offerings: [
      {
        title: "Contemporary Abstract Canvas",
        description: "Expressive color harmonies, dimensional knife textures, and emotive compositions for modern luxury residences.",
        tags: ["Abstract Art", "Palette Knife Textures", "Color Field", "Belgian Canvas"],
      },
      {
        title: "Spiritual & Heritage Fine Art",
        description: "Revered devotional portrayals of Lord Vitthal, Ganesha, Buddha, and legendary Maratha historical icons.",
        tags: ["Vitthal Paintings", "Ganesha Art", "Buddha Canvas", "Historic Maratha Heritage"],
      },
      {
        title: "Realistic Portraiture",
        description: "Fine figurative studies and bespoke family portraits capturing life, soul, and personality in oil or acrylic.",
        tags: ["Custom Portraits", "Oil on Canvas", "Family Heirlooms", "Life Studies"],
      },
      {
        title: "Gold Leaf & Mixed Media",
        description: "Opulent mixed-media artworks incorporating gold leaf gilding, mica powders, and embedded mineral textures.",
        tags: ["24K Gold Leaf", "Mixed Media", "Textured Layering", "Archival Varnishing"],
      },
    ],
    process: [
      { step: "01", title: "Art Visioning", description: "Discussing subject, color palette, dimensions, and spatial lighting." },
      { step: "02", title: "Digital Concept", description: "Providing compositional sketches and color studies for your approval." },
      { step: "03", title: "Fine Art Painting", description: "Hand-painting in studio using archival-grade European pigments on stretched canvas." },
      { step: "04", title: "Varnishing & Delivery", description: "Applying UV-protective varnish coats and coordinating white-glove delivery." },
    ],
    highlights: ["100% hand-painted by master artists", "Archival pigments that resist fading for 50+ years", "Custom bespoke dimensions proportioned to your walls"],
    seoTitle: "Custom Canvas Painting & Fine Art Services in Pune | Nakshikar's Studio",
    metaDescription: "Commission original handcrafted paintings, abstract canvas art, spiritual portraits, and fine art in Pune & Mumbai with Nakshikar's Studio.",
  },

  "Murals": {
    category: "Murals",
    slug: "murals",
    heroTitle: "Large-Scale Wall Murals & Architectural Art Installations",
    heroSubtitle: "Handcrafted indoor and outdoor wall murals and 3D art engineered for bold, weather-resistant impact.",
    description: "Renowned across Maharashtra for ambitious scale and flawless technical execution, Nakshikar's Studio creates site-specific wall murals for villas, luxury restaurants, corporate campuses, and public cultural spaces. We blend trompe-l'œil realism, 3D sculptural elements, and weather-resistant polymer pigments.",
    image: muralImg,
    offerings: [
      {
        title: "Hand-Painted Indoor Murals",
        description: "Custom panoramic feature murals designed for high-ceiling living rooms, hotel atriums, and dining spaces.",
        tags: ["Panoramic Murals", "Trompe-l'œil", "Botanical Themes", "Atrium Art"],
      },
      {
        title: "Exterior Weatherproof Murals",
        description: "Monumental outdoor murals rendered with UV-stable and weather-sealed industrial acrylics built for sun and rain.",
        tags: ["Outdoor Facades", "UV-Resistant", "Weatherproof", "Campus Landmarks"],
      },
      {
        title: "3D Relief & Sculpted Murals",
        description: "Combining structural plaster, terracotta, and metallic alloys with paint to create three-dimensional wall narratives.",
        tags: ["Sculpted Relief", "Mixed Media", "Terracotta Accents", "Dimensional Art"],
      },
      {
        title: "Heritage & Cultural Narratives",
        description: "Expansive visual chronicles honoring regional Indian history, spiritual folklore, and local heritage.",
        tags: ["Historical Murals", "Maharashtrian Heritage", "Cultural Folios", "Temple Walls"],
      },
    ],
    process: [
      { step: "01", title: "Site Architecture Review", description: "Analyzing sight lines, scale, wall surface, and atmospheric conditions." },
      { step: "02", title: "Scaled Scale Renders", description: "Delivering scaled architectural visualizations showing the mural in context." },
      { step: "03", title: "Surface Scaffolding", description: "Establishing safety rigging, wall preparation, and grid mapping." },
      { step: "04", title: "Live Execution & Sealing", description: "Painting with master artists, followed by weatherproof protective sealing." },
    ],
    highlights: ["Proven execution on multi-story exterior facades", "Weather-resistant, UV-stable pigments", "Complete onsite scaffolding and safety management"],
    seoTitle: "Wall Mural & Architectural Art Installation Services in Pune | Nakshikar's Studio",
    metaDescription: "Commission custom hand-painted wall murals, 3D relief sculptures, and large-scale architectural art installations across Pune & Mumbai.",
  },

  "Nameplates": {
    category: "Nameplates",
    slug: "nameplates",
    heroTitle: "Bespoke Designer Nameplates & Luxury Entrance Signage",
    heroSubtitle: "Custom handcrafted nameplates and entrance signs designed in brass, acrylic, teakwood, and ambient lighting.",
    description: "The entryway is the defining introduction to your home or office. At Nakshikar's Studio, we engineer bespoke designer nameplates that harmonize rich natural materials with contemporary typographic precision, creating warm and unforgettable greetings.",
    image: nameplateImg,
    offerings: [
      {
        title: "Warm LED Backlit Nameplates",
        description: "Precision CNC cut letters with diffused waterproof warm LED illumination for stunning nocturnal radiance.",
        tags: ["Backlit 3D Letters", "Warm White LED", "Weather-Sealed", "Architectural Signage"],
      },
      {
        title: "Solid Brass & Cast Copper",
        description: "Heirloom metal plaques with brushed satin, mirror-polished, or antique patinated finishes.",
        tags: ["Pure Brass", "Cast Copper", "Etched Lettering", "Protective Clear Coat"],
      },
      {
        title: "Seasoned Teakwood & Stone",
        description: "Natural hardwood mounts paired with Italian marble, slate, or translucent onyx stone.",
        tags: ["Natural Teakwood", "Onyx Stone", "Italian Marble", "Earthy Textures"],
      },
      {
        title: "Devanagari & Cultural Scripts",
        description: "Handcrafted Marathi and Devanagari script nameplates tailored to family heritage and traditional architecture.",
        tags: ["Devanagari Scripts", "Bilingual Plaques", "Family Monograms", "Bespoke Calligraphy"],
      },
    ],
    process: [
      { step: "01", title: "Entrance Survey", description: "Checking door frame dimensions, viewing distance, and electrical wiring." },
      { step: "02", title: "3D Layout Proofs", description: "Presenting font choices, layout options, and material pairings in 3D." },
      { step: "03", title: "Artisan Fabrication", description: "Precision CNC cutting, hand-carving wood, and assembling electronics." },
      { step: "04", title: "Installation Support", description: "Providing hidden mounting hardware and full installation guidance." },
    ],
    highlights: ["Rust-proof, weather-resistant exterior finishes", "Integrated energy-efficient LED systems", "Custom Devanagari and English typographic styling"],
    seoTitle: "Designer Nameplates & Entrance Signage in Pune | Nakshikar's Studio",
    metaDescription: "Custom designer nameplates, brass plaques, wooden & stone plates, and LED backlit entrance signage handcrafted in Pune by Nakshikar's Studio.",
  },

  "Interior Support": {
    category: "Interior Support",
    slug: "interior-support",
    heroTitle: "Interior Art Consulting & Spatial Styling Partnerships",
    heroSubtitle: "End-to-end art consulting, decor curation, and installation support for architects and interior designers.",
    description: "We serve as the creative execution extension of your interior architecture firm. Beyond standalone pieces, our workshop produces bespoke decorative sculptures, custom lighting accents, artistic metal screens, and curated spatial styling elements that tie entire design concepts together.",
    image: interiorSupportImg,
    offerings: [
      {
        title: "Art Consultation & Curating",
        description: "Curating harmonious artwork collections that align perfectly with interior floor plans and color palettes.",
        tags: ["Art Advisory", "Curated Portfolios", "Space Planning", "Concept Mapping"],
      },
      {
        title: "Custom Sculptures & Artifacts",
        description: "Site-specific sculptures hand-carved in stone, wood, metal alloys, and fiberglass for foyer and landscape accents.",
        tags: ["Stone Sculptures", "Cast Metal", "Fiberglass Artifacts", "Foyer Centerpieces"],
      },
      {
        title: "Artistic Lighting & Accents",
        description: "Bespoke chandeliers, wall sconce art, and customized metal jaali screens with integrated ambient illumination.",
        tags: ["Custom Lighting", "Metal Jaali", "Backlit Art", "Architectural Grilles"],
      },
      {
        title: "Turnkey Project Execution",
        description: "Complete hands-on site management, custom framing, logistics, and professional installation across Pune & Mumbai.",
        tags: ["Onsite Coordination", "Custom Framing", "White-glove Logistics", "Turnkey Installation"],
      },
    ],
    process: [
      { step: "01", title: "Blueprint Review", description: "Reviewing architectural drawings, 3D renders, and finish schedules." },
      { step: "02", title: "Art Moodboard", description: "Curating a tailored artwork and artifact schedule tailored to each room." },
      { step: "03", title: "Studio Fabrication", description: "Parallel crafting of sculptures, paintings, and accents in our Pune atelier." },
      { step: "04", title: "Turnkey Installation", description: "Coordinated onsite installation timed seamlessly with project handover." },
    ],
    highlights: ["Dedicated single point of contact for architects", "Custom material sampling and prototyping", "Turnkey logistics and professional onsite installation"],
    seoTitle: "Interior Art Consulting & Styling Services in Pune | Nakshikar's Studio",
    metaDescription: "Turnkey art consulting, custom sculptures, spatial styling, and architectural art installation partnerships for interior designers in Pune.",
  },
};
