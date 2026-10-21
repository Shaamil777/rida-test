import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pubDir = path.join(__dirname, '..', 'public');

const sizes = [16, 32, 48];
const images = sizes.map(size => {
  const filePath = path.join(pubDir, `favicon-${size}x${size}.png`);
  const data = fs.readFileSync(filePath);
  return { width: size, height: size, data };
});

function createIco(images) {
  const count = images.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // icon type (1 = ICO)
  header.writeUInt16LE(count, 4); // number of images

  let offset = 6 + (16 * count);
  const entries = [];
  for (const img of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(img.width >= 256 ? 0 : img.width, 0); // width
    entry.writeUInt8(img.height >= 256 ? 0 : img.height, 1); // height
    entry.writeUInt8(0, 2); // color count (0 = >=8bpp)
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(img.data.length, 8); // size of image data in bytes
    entry.writeUInt32LE(offset, 12); // offset of image data
    entries.push(entry);
    offset += img.data.length;
  }

  return Buffer.concat([header, ...entries, ...images.map(img => img.data)]);
}

const icoBuffer = createIco(images);
const icoPath = path.join(pubDir, 'favicon.ico');
fs.writeFileSync(icoPath, icoBuffer);
console.log(`Successfully generated multi-resolution favicon.ico (${icoBuffer.length} bytes) containing sizes: ${sizes.join(', ')}`);
