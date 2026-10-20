import fs from "fs";
import path from "path";

export interface ProofScreenshotItem {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
}

/**
 * Reads proof screenshots from public/proof/{slug}/ on the server.
 * Returns an empty array if folder does not exist or has no images.
 */
export function getProofScreenshots(slug: string): ProofScreenshotItem[] {
  const dirPath = path.join(process.cwd(), "public", "proof", slug);
  if (!fs.existsSync(dirPath)) {
    return [];
  }

  const validExtensions = [".png", ".jpg", ".jpeg", ".webp", ".avif"];
  try {
    const files = fs.readdirSync(dirPath);
    const imageFiles = files.filter((f) =>
      validExtensions.includes(path.extname(f).toLowerCase())
    );

    const clientNameMap: Record<string, string> = {
      cutekaari: "CuteKaari",
      "relax-call": "Relax Call",
      "premium-real-estate": "₹55 Cr Premium Real Estate",
      "rs-water-solutions": "RS Water Solutions",
    };
    const clientLabel = clientNameMap[slug] || slug;

    return imageFiles.map((file, idx) => ({
      src: `/proof/${slug}/${file}`,
      alt: `Meta Ads Manager dashboard proof screenshot for ${clientLabel} (screenshot ${idx + 1})`,
      caption: `Meta Ads Manager verified proof screenshot (${file})`,
      width: 1600,
      height: 900,
    }));
  } catch (error) {
    console.error(`Error reading proof screenshots for ${slug}:`, error);
    return [];
  }
}
