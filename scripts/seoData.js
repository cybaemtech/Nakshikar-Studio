export const DEFAULT_OG_IMAGE = "https://nakshikarsstudio.com/og-image.jpg";

export const ROUTES_SEO = {
  "/": {
    title: "Custom Art & Painting Studio in Pune | Nakshikars Studio",
    description:
      "We create custom paintings, wall murals, sculptures, signage and interior art for homes, hotels, offices and brands across Pune, Pimpri Chinchwad and Mumbai",
    canonical: "https://nakshikarsstudio.com/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/about": {
    title: "About Nakshikar's Studio",
    description:
      "We are a Pune, Pimpri Chinchwad based artists, designers and craftspeople since 2011 crafting murals, sculptures & wall art. Discover our story, vision and creative process.",
    canonical: "https://nakshikarsstudio.com/about",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/services": {
    title: "Murals, Paintings, Wall Art & Design Services | Nakshikar's Studio",
    description:
      "We design custom murals, sculptures, wall art, paintings & nameplates for homes, offices, and cultural spaces in Pune, Pimpri Chinchwad, and Mumbai.",
    canonical: "https://nakshikarsstudio.com/services",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/portfolio": {
    title: "Portfolio of Custom Art, Murals & Design | Nakshikar's Studio",
    description:
      "Explore the portfolio of Nakshikar's Studio in Pune, PCMC & Mumbai. Handcrafted canvas paintings, custom murals, architectural wall art, designer nameplates, and graphics.",
    canonical: "https://nakshikarsstudio.com/portfolio",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/contact": {
    title: "Get custom artworks and murals created | Nakshikar's Studio",
    description:
      "Planning a mural, painting, wall art or custom design project? Contact Nakshikars Studio to discuss your residential, commercial or hospitality space in Pune, PCMC & Mumbai.",
    canonical: "https://nakshikarsstudio.com/contact",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/services/graphics": {
    title: "Nakshikar's Graphic Design & Brand Identity Services",
    description:
      "Build a distinctive brand with custom logo design, packaging, lettering and visual identity solutions crafted for businesses and brands in Pune, PCMC and Mumbai.",
    canonical: "https://nakshikarsstudio.com/services/graphics",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/services/wall-design": {
    title: "Nakshikar's Wall Design and 3D Feature Walls",
    description:
      "Transform plain walls with custom 3D feature walls, textured finishes and artistic wall designs created for homes, offices and commercial spaces.",
    canonical: "https://nakshikarsstudio.com/services/wall-design",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/services/paintings": {
    title: "Nakshikar's Paintings and Canvas Art Commissions",
    description:
      "Commission handcrafted paintings and custom canvas art, from modern abstracts to elegant statement pieces designed to complement your space.",
    canonical: "https://nakshikarsstudio.com/services/paintings",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/services/murals": {
    title: "Nakshikar's Wall Murals and Mural Art",
    description:
      "Transform interiors and exteriors with custom wall murals, 3D mural art and architectural installations crafted for homes, hotels and commercial spaces.",
    canonical: "https://nakshikarsstudio.com/services/murals",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/services/nameplates": {
    title: "Nakshikar's Luxury Custom Nameplates & Entrance Signs",
    description:
      "Elevate your entrance with custom nameplates in brass, acrylic, teakwood and illuminated finishes, handcrafted to suit your style and space.",
    canonical: "https://nakshikarsstudio.com/services/nameplates",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/services/interior-support": {
    title: "Nakshikar's Interior Art Consulting and Styling",
    description:
      "Expert art consulting, decor curation, spatial styling and installation support for architects, interior designers and premium interior projects.",
    canonical: "https://nakshikarsstudio.com/services/interior-support",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/art-studio-in-pune": {
    title: "Art Studio in Pune | Nakshikars Studio",
    description:
      "Visit Nakshikars Studio, your custom art and painting studio in Pune. Discover mural wall painting, 3D wall painting designs, and customized name plates.",
    canonical: "https://nakshikarsstudio.com/art-studio-in-pune",
    ogImage: "https://nakshikarsstudio.com/assets/logo-37ICZ1Uk.png",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Nakshikar's Studio",
    description:
      "Read the Privacy Policy of Nakshikar's Studio. Learn how we handle client consultations, protect personal information, and safeguard custom design inquiries across Pune, PCMC, and Mumbai.",
    canonical: "https://nakshikarsstudio.com/privacy-policy",
    ogImage: "https://nakshikarsstudio.com/logo.png",
  },
};

export function escapeAttr(text) {
  return String(text)
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function escapeTitle(text) {
  return String(text)
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function transformHtmlWithSeo(html, seo) {
  let res = html;

  // 1. Replace <title>
  res = res.replace(
    /<title[\s\S]*?<\/title>/i,
    `<title data-prerender="true">${escapeTitle(seo.title)}</title>`
  );

  // 2. Replace <meta name="description" ...>
  res = res.replace(
    /<meta\s+[^>]*name=["']description["'][^>]*\/?>/i,
    `<meta data-prerender="true" name="description" content="${escapeAttr(seo.description)}" />`
  );

  // 3. Replace <link rel="canonical" ...>
  res = res.replace(
    /<link\s+[^>]*rel=["']canonical["'][^>]*\/?>/i,
    `<link data-prerender="true" rel="canonical" href="${escapeAttr(seo.canonical)}" />`
  );

  // 4. Open Graph replacements
  res = res.replace(
    /<meta\s+[^>]*property=["']og:site_name["'][^>]*\/?>/i,
    `<meta data-prerender="true" property="og:site_name" content="Nakshikar's Studio" />`
  );
  res = res.replace(
    /<meta\s+[^>]*property=["']og:title["'][^>]*\/?>/i,
    `<meta data-prerender="true" property="og:title" content="${escapeAttr(seo.title)}" />`
  );
  res = res.replace(
    /<meta\s+[^>]*property=["']og:description["'][^>]*\/?>/i,
    `<meta data-prerender="true" property="og:description" content="${escapeAttr(seo.description)}" />`
  );
  res = res.replace(
    /<meta\s+[^>]*property=["']og:url["'][^>]*\/?>/i,
    `<meta data-prerender="true" property="og:url" content="${escapeAttr(seo.canonical)}" />`
  );
  res = res.replace(
    /<meta\s+[^>]*property=["']og:image["'][^>]*\/?>/i,
    `<meta data-prerender="true" property="og:image" content="${escapeAttr(seo.ogImage)}" />`
  );

  // 5. Twitter Card replacements
  res = res.replace(
    /<meta\s+[^>]*name=["']twitter:card["'][^>]*\/?>/i,
    `<meta data-prerender="true" name="twitter:card" content="summary_large_image" />`
  );
  res = res.replace(
    /<meta\s+[^>]*name=["']twitter:title["'][^>]*\/?>/i,
    `<meta data-prerender="true" name="twitter:title" content="${escapeAttr(seo.title)}" />`
  );
  res = res.replace(
    /<meta\s+[^>]*name=["']twitter:description["'][^>]*\/?>/i,
    `<meta data-prerender="true" name="twitter:description" content="${escapeAttr(seo.description)}" />`
  );
  res = res.replace(
    /<meta\s+[^>]*name=["']twitter:image["'][^>]*\/?>/i,
    `<meta data-prerender="true" name="twitter:image" content="${escapeAttr(seo.ogImage)}" />`
  );
  res = res.replace(
    /<meta\s+[^>]*name=["']twitter:image:alt["'][^>]*\/?>/i,
    `<meta data-prerender="true" name="twitter:image:alt" content="${escapeAttr(seo.title)}" />`
  );

  return res;
}

