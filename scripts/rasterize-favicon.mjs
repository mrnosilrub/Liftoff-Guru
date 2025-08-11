import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve("/workspace");
const inputSvg = path.join(root, "public", "favicon.svg");
const outputPng = path.join(root, "public", "favicon.png");

try {
  const svgBuffer = await fs.readFile(inputSvg);
  // Render at a reasonable size; browsers downscale as needed
  const pngBuffer = await sharp(svgBuffer, { density: 384 })
    .resize(256, 256, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toBuffer();
  await fs.writeFile(outputPng, pngBuffer);
  console.log(`Wrote ${outputPng}`);
} catch (err) {
  console.error("Failed to rasterize favicon:", err);
  process.exitCode = 1;
}