import { getAltTagForImage } from "./imageAltTags";

export interface WorkItem {
  id: string;
  src: string;
  cat: "Graphics" | "Wall Design" | "Paintings" | "Murals" | "Nameplates" | "Interior Support";
  folder: string;
  title: string;
  place: string;
  alt: string;
  isNewFolder?: boolean;
}

export const CATEGORIES = [
  "Graphics",
  "Wall Design",
  "Paintings",
  "Murals",
  "Nameplates",
  "Interior Support",
] as const;

export type Category = (typeof CATEGORIES)[number];

// Dynamically import all images inside src/assets/NAKSHIKAR including New folder
const rawGlobImages = import.meta.glob<string>(
  "../assets/NAKSHIKAR/**/*.{jpg,jpeg,png,JPG,JPEG,PNG,webp,WEBP}",
  { eager: true, import: "default" }
);

// Keywords of promotional flyers, office tables, sports fixtures & low-res admin documents to filter out
const UNIMPRESSIVE_KEYWORDS = [
  "pashu",
  "aahar",
  "vetbond",
  "vetcharge",
  "dsgsg",
  "140119", // low light old snapshot
];

// Priority rank mapping for Page 1 showcase items requested by user
function getShowcasePriority(filePath: string): number {
  const normPath = filePath.replace(/\\/g, "/");
  const lowerPath = normPath.toLowerCase();

  // Target single logo image requested by user for bottom-left space on Page 1
  if (lowerPath.includes("12.44.39 pm (23)")) return 9;

  if (!normPath.includes("/New folder/")) return 100;

  // Exact Page 1 priority order requested by user
  if (lowerPath.includes("04d46bbf")) return 1;          // ONYX Nameplate (Col 0 top)
  if (lowerPath.includes("45a965c9")) return 2;          // Lady face painting (Col 1 top)
  if (lowerPath.includes("7a5e18f7")) return 3;          // Shivaji Maharaj circular art (Col 2 top)
  if (lowerPath.includes("bcda6387")) return 4;          // Ganesha painting frame (Col 3 top)
  if (lowerPath.includes("4.50.50") || lowerPath.includes("97bbb3c9")) return 5; // Aamhi Bhavsar nameplate (Col 0 middle)
  if (lowerPath.includes("116.jpg")) return 6;           // Architectural Signage 116 (Col 1 middle)
  if (lowerPath.includes("sanskruti")) return 7;         // Sanskriti Event star logo (Col 2 middle)
  if (lowerPath.includes("sahyadri")) return 8;          // Sahyadri art (Col 3 middle)
  if (lowerPath.includes("193321")) return 10;          // Bhalke's E-403 backlit nameplate (Col 1 bottom)
  if (lowerPath.includes("d473e4f3")) return 11;         // Colorful skyline painting (Col 2 bottom)
  if (lowerPath.includes("59.jpg")) return 12;           // Wall art 59 (Col 3 bottom)

  // Other New folder items
  return 20;
}

function determineCategoryAndDetails(filePath: string, index: number): {
  cat: WorkItem["cat"];
  folder: string;
  title: string;
  place: string;
  alt: string;
  isHighQuality: boolean;
  isNewFolder: boolean;
  priority: number;
} {
  const normPath = filePath.replace(/\\/g, "/");
  const lowerPath = normPath.toLowerCase();
  const isNewFolder = normPath.includes("/New folder/");
  const priority = getShowcasePriority(filePath);

  // Extract the direct parent folder name (e.g., from "../assets/NAKSHIKAR/Nameplates/img.jpg" -> "Nameplates")
  const pathParts = normPath.split("/");
  const parentFolder = pathParts.length >= 2 ? pathParts[pathParts.length - 2] : "NAKSHIKAR";
  const parentLower = parentFolder.toLowerCase();

  let cat: WorkItem["cat"] = "Murals";
  let folder = parentFolder;
  let titlePrefix = "Art Creation";
  let place = "Studio Collection";

  if (parentLower === "mural" || parentLower === "murals") {
    cat = "Murals";
    titlePrefix = "Mural Artwork";
    place = "Interior & Exterior Space";
  } else if (parentLower === "painting" || parentLower === "paintings") {
    cat = "Paintings";
    titlePrefix = "Original Painting";
    place = "Canvas Collection";
  } else if (parentLower === "nameplates" || parentLower === "nameplate") {
    cat = "Nameplates";
    titlePrefix = "Designer Nameplate";
    place = "Residential Project";
  } else if (parentLower === "wall design") {
    cat = "Wall Design";
    titlePrefix = "Textured Wall Art";
    place = "Living Space";
  } else if (parentLower === "interior support") {
    cat = "Interior Support";
    titlePrefix = "Interior Decor Accent";
    place = "Architectural Space";
  } else if (parentLower === "logo") {
    cat = "Graphics";
    titlePrefix = "Brand Identity";
    place = "Commercial Project";
  } else if (parentLower === "all graphics" || parentLower === "graphics" || parentLower === "signage") {
    cat = "Graphics";
    titlePrefix = "Graphic Art";
    place = "Print & Digital Media";
  } else {
    // Fallback for files directly in NAKSHIKAR or other folders
    cat = "Murals";
  }

  const isUnimpressive = !isNewFolder && UNIMPRESSIVE_KEYWORDS.some((kw) => lowerPath.includes(kw));

  const filename = normPath.split("/").pop() || "";
  const nameWithoutExt = filename.substring(0, filename.lastIndexOf(".")) || filename;

  let formattedTitle = titlePrefix;
  if (
    nameWithoutExt.length > 0 &&
    !nameWithoutExt.toLowerCase().startsWith("whatsapp") &&
    !nameWithoutExt.toLowerCase().startsWith("img") &&
    !nameWithoutExt.toLowerCase().startsWith("chatgpt")
  ) {
    const cleanName = nameWithoutExt.replace(/[-_]/g, " ").trim();
    formattedTitle = `${cleanName.charAt(0).toUpperCase()}${cleanName.slice(1)}`;
  } else {
    formattedTitle = `${titlePrefix} #${index + 1}`;
  }

  const alt = getAltTagForImage(filePath, formattedTitle);

  return { cat, folder, title: formattedTitle, place, alt, isHighQuality: !isUnimpressive, isNewFolder, priority };
}

// Process all works
const allProcessedWorks = Object.entries(rawGlobImages).map(([filePath, src], index) => {
  const { cat, folder, title, place, alt, isHighQuality, isNewFolder, priority } = determineCategoryAndDetails(filePath, index);
  return {
    item: {
      id: isNewFolder ? `new-${index + 1}` : `nak-${index + 1}`,
      src,
      cat,
      folder,
      title,
      place,
      alt,
      isNewFolder,
    },
    isHighQuality,
    isNewFolder,
    priority,
  };
});

// Strict Deduplication by Image Filename so NO duplicate images appear anywhere in portfolio
const seenBaseNames = new Set<string>();
const deduplicatedWorks = allProcessedWorks.filter((w) => {
  const fileName = w.item.src.split("/").pop()?.split("?")[0] || w.item.id;
  // Normalize filename by removing Vite hash if present
  const baseName = fileName.replace(/-\w+(\.[a-z0-9]+)$/i, "$1").toLowerCase();
  if (seenBaseNames.has(baseName)) {
    return false;
  }
  seenBaseNames.add(baseName);
  return true;
});

// Filter high quality works
const validWorks = deduplicatedWorks.filter((w) => w.isNewFolder || w.isHighQuality);

// Separate into Page 1 top priority items (priority <= 12), remaining New folder items (priority = 20), and regular items
const page1TopWorks = validWorks.filter((w) => w.priority <= 12).sort((a, b) => a.priority - b.priority).map((w) => w.item);
const otherNewFolderWorks = validWorks.filter((w) => w.isNewFolder && w.priority > 12).map((w) => w.item);
const regularWorks = validWorks.filter((w) => !w.isNewFolder).map((w) => w.item);

// Helper function to interleave an array of items across categories round-robin
function interleaveByCategory(items: WorkItem[]): WorkItem[] {
  const itemsByCat: Record<WorkItem["cat"], WorkItem[]> = {
    Graphics: [],
    "Wall Design": [],
    Paintings: [],
    Murals: [],
    Nameplates: [],
    "Interior Support": [],
  };

  items.forEach((item) => {
    if (itemsByCat[item.cat]) {
      itemsByCat[item.cat].push(item);
    }
  });

  const categoryKeys: WorkItem["cat"][] = [
    "Graphics",
    "Wall Design",
    "Paintings",
    "Murals",
    "Nameplates",
    "Interior Support",
  ];

  let maxLen = 0;
  categoryKeys.forEach((key) => {
    if (itemsByCat[key].length > maxLen) {
      maxLen = itemsByCat[key].length;
    }
  });

  const result: WorkItem[] = [];
  for (let i = 0; i < maxLen; i++) {
    for (const catKey of categoryKeys) {
      if (i < itemsByCat[catKey].length) {
        result.push(itemsByCat[catKey][i]);
      }
    }
  }
  return result;
}

const remainingNewFolderInterleaved = interleaveByCategory(otherNewFolderWorks);
const remainingRegularInterleaved = interleaveByCategory(regularWorks);

// Page 1 is populated with the requested showcase items, followed by remaining works
export const ALL_WORKS: WorkItem[] = [
  ...page1TopWorks,
  ...remainingNewFolderInterleaved,
  ...remainingRegularInterleaved,
];
