import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pngPath = path.join(__dirname, '..', 'public', 'favicon.png');
const svgPath = path.join(__dirname, '..', 'public', 'favicon.svg');

const base64 = fs.readFileSync(pngPath).toString('base64');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <image href="data:image/png;base64,${base64}" width="512" height="512"/>
</svg>\n`;

fs.writeFileSync(svgPath, svg, 'utf8');
console.log(`Generated public/favicon.svg (${svg.length} bytes)`);
