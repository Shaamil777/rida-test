import fs from 'fs';
import path from 'path';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const logoDir = path.join(publicDir, 'images', 'logo');

const favPng = path.join(logoDir, 'favicon.png');
const ogPng = path.join(logoDir, 'opengraph.png');

console.log('1. Syncing master favicon.png to public root and logo folder...');
if (fs.existsSync(favPng) && path.resolve(favPng) !== path.resolve(path.join(publicDir, 'favicon.png'))) {
  fs.copyFileSync(favPng, path.join(publicDir, 'favicon.png'));
}

// Convert public/favicon.svg to reference the butterfly
const svgFav = path.join(publicDir, 'favicon.svg');
const favBase64 = fs.readFileSync(favPng).toString('base64');
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <image href="data:image/png;base64,${favBase64}" width="512" height="512"/>
</svg>\n`;
fs.writeFileSync(svgFav, svgContent, 'utf8');
console.log('Updated public/favicon.svg with butterfly emblem.');

console.log('2. Copying opengraph.png to root and optimized...');
fs.copyFileSync(ogPng, path.join(publicDir, 'opengraph.png'));
fs.copyFileSync(ogPng, path.join(logoDir, 'opengraph-optimized.png'));
fs.copyFileSync(ogPng, path.join(logoDir, 'opengraph.jpg'));
fs.copyFileSync(ogPng, path.join(publicDir, 'opengraph.jpg'));
console.log('Updated opengraph images in public/ and public/images/logo/');

console.log('3. Updating all HTML files with clean favicon and opengraph meta tags...');
function findHtmlFiles(dir) {
  let results = [];
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (item !== 'node_modules' && item !== '.git' && item !== 'dist') {
        results = results.concat(findHtmlFiles(full));
      }
    } else if (item.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

const htmlFiles = findHtmlFiles(publicDir);

for (const file of htmlFiles) {
  let html = fs.readFileSync(file, 'utf8');

  // Replace old favicon tags
  html = html.replace(/<link\s+rel="icon"[^>]*>/gi, '');
  html = html.replace(/<link\s+rel="shortcut icon"[^>]*>/gi, '');
  html = html.replace(/<link\s+rel="apple-touch-icon"[^>]*>/gi, '');

  const newFavTags = `<link rel="icon" href="/favicon.ico" sizes="48x48"><link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png"><link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"><link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png"><link rel="icon" type="image/png" sizes="512x512" href="/favicon.png"><link rel="shortcut icon" type="image/png" href="/favicon.png"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">`;

  if (html.includes('<link rel="manifest"')) {
    html = html.replace('<link rel="manifest"', `${newFavTags}<link rel="manifest"`);
  } else if (html.includes('<title>')) {
    html = html.replace('</title>', `</title>${newFavTags}`);
  }

  // Replace Open Graph and Twitter images
  html = html.replace(/<meta\s+property="og:image"\s+content="[^"]*opengraph\.(jpg|png)"[^>]*>/gi, '');
  html = html.replace(/<meta\s+property="og:image:secure_url"\s+content="[^"]*opengraph\.(jpg|png)"[^>]*>/gi, '');
  html = html.replace(/<meta\s+property="og:image:type"\s+content="image\/(jpeg|png)"[^>]*>/gi, '');
  html = html.replace(/<meta\s+property="og:image:width"\s+content="\d+"[^>]*>/gi, '');
  html = html.replace(/<meta\s+property="og:image:height"\s+content="\d+"[^>]*>/gi, '');
  html = html.replace(/<meta\s+property="og:image:alt"\s+content="[^"]*"[^>]*>/gi, '');
  html = html.replace(/<meta\s+name="twitter:image"\s+content="[^"]*opengraph\.(jpg|png)"[^>]*>/gi, '');

  const newOgTags = `<meta property="og:image" content="/images/logo/opengraph.png"><meta property="og:image:secure_url" content="/images/logo/opengraph.png"><meta property="og:image:type" content="image/png"><meta property="og:image:width" content="1734"><meta property="og:image:height" content="907"><meta property="og:image:alt" content="Riḍā by Rahma — Psychological Support & Therapy"><meta name="twitter:image" content="/images/logo/opengraph.png">`;

  if (html.includes('<meta name="twitter:card"')) {
    html = html.replace('<meta name="twitter:card"', `${newOgTags}<meta name="twitter:card"`);
  } else if (html.includes('</head>')) {
    html = html.replace('</head>', `${newOgTags}</head>`);
  }

  fs.writeFileSync(file, html, 'utf8');
  console.log(`Updated tags in ${path.relative(root, file)}`);
}

console.log('All HTML files updated successfully!');
