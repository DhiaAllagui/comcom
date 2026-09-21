import sharp from 'sharp';

const input = './src/images/COMCOM.png';
const output = './public/COMCOM.png';

// Read the image as raw RGBA pixel data
const { data, info } = await sharp(input)
  .ensureAlpha()       // Make sure there's an alpha channel
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;

// Walk every pixel — if near-white, set alpha to 0
for (let i = 0; i < data.length; i += channels) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  if (r > 230 && g > 230 && b > 230) {
    data[i + 3] = 0; // fully transparent
  }
}

// Write back as PNG with proper alpha
await sharp(data, { raw: { width, height, channels } })
  .png()
  .toFile(output);

console.log(`✅ Done — saved transparent PNG to ${output}`);
