import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ROUTES_SEO, transformHtmlWithSeo } from "./seoData.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.resolve(rootDir, "dist");

if (!fs.existsSync(distDir)) {
  console.error("Error: dist/ directory does not exist. Run 'vite build' first.");
  process.exit(1);
}

const templatePath = path.resolve(distDir, "index.html");
if (!fs.existsSync(templatePath)) {
  console.error("Error: dist/index.html does not exist.");
  process.exit(1);
}

const templateHtml = fs.readFileSync(templatePath, "utf8");

console.log("Generating static SEO HTML files for all routes...");

for (const [routePath, seo] of Object.entries(ROUTES_SEO)) {
  const generatedHtml = transformHtmlWithSeo(templateHtml, seo);

  if (routePath === "/") {
    fs.writeFileSync(templatePath, generatedHtml, "utf8");
    console.log(`✓ / -> dist/index.html`);
  } else {
    const cleanPath = routePath.replace(/^\/+/, "");
    const routeDir = path.resolve(distDir, cleanPath);
    fs.mkdirSync(routeDir, { recursive: true });

    const routeIndexPath = path.resolve(routeDir, "index.html");
    fs.writeFileSync(routeIndexPath, generatedHtml, "utf8");

    const flatHtmlPath = path.resolve(distDir, `${cleanPath}.html`);
    fs.mkdirSync(path.dirname(flatHtmlPath), { recursive: true });
    fs.writeFileSync(flatHtmlPath, generatedHtml, "utf8");

    console.log(`✓ ${routePath} -> dist/${cleanPath}/index.html & dist/${cleanPath}.html`);
  }
}

console.log("Static SEO prerendering complete!");
