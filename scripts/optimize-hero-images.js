import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const backupDir = "src/assets/backup_hero_images";
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

const imagesToOptimize = [
  {
    path: "src/assets/services/services/hero-mural.webp",
    name: "hero-mural.webp",
    width: 560,
    quality: 72,
  },
  {
    path: "src/assets/services/Fish.webp",
    name: "Fish.webp",
    width: 700,
    quality: 80,
  },
  {
    path: "src/assets/services/services/hero-painting.webp",
    name: "hero-painting.webp",
    width: 700,
    quality: 80,
  },
  {
    path: "src/assets/services/services/nameplate.webp",
    name: "nameplate.webp",
    width: 520,
    quality: 70,
  },
];

async function optimize() {
  console.log("Optimizing home page hero images to ~35 KB WebP...");

  for (const img of imagesToOptimize) {
    // 1. Backup original if not already backed up
    const backupPath = path.join(backupDir, img.name);
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(img.path, backupPath);
      console.log(`Backed up original: ${img.path} -> ${backupPath}`);
    }

    const beforeStat = fs.statSync(img.path);

    // 2. Compress with sharp
    const optimizedBuffer = await sharp(backupPath)
      .resize({ width: img.width, withoutEnlargement: true })
      .webp({ quality: img.quality, effort: 6 })
      .toBuffer();

    fs.writeFileSync(img.path, optimizedBuffer);
    const afterStat = fs.statSync(img.path);

    console.log(
      `✓ ${img.name}: ${(beforeStat.size / 1024).toFixed(1)} KB -> ${(afterStat.size / 1024).toFixed(1)} KB (${afterStat.size} bytes)`
    );
  }

  console.log("Image optimization complete!");
}

optimize().catch((err) => {
  console.error("Optimization failed:", err);
  process.exit(1);
});

