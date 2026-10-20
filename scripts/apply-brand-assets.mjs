import fs from 'fs';
import path from 'path';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const logoDir = path.join(publicDir, 'images', 'logo');

const favPng = path.join(logoDir, 'favicon.png');
const ogPng = path.join(logoDir, 'opengraph.png');

console.log('1. Copying favicon.png across all standard locations...');
const faviconTargets = [
  path.join(publicDir, 'favicon.png'),
  path.join(publicDir, 'favicon.ico'),
  path.join(publicDir, 'favicon-32x32.png'),
  path.join(publicDir, 'favicon-16x16.png'),
  path.join(publicDir, 'apple-touch-icon.png'),
  path.join(publicDir, 'android-chrome-192x192.png'),
  path.join(publicDir, 'android-chrome-512x512.png'),
];

for (const target of faviconTargets) {
  fs.copyFileSync(favPng, target);
  console.log(`Copied favicon to: ${path.relative(root, target)}`);
}

// Convert public/favicon.svg to reference the butterfly or remove old 'R' Georgia SVG
const svgFav = path.join(publicDir, 'favicon.svg');
const favBase64 = fs.readFileSync(favPng).toString('base64');
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <image href="data:image/png;base64,${favBase64}" width="100" height="100" preserveAspectRatio="xMidYMid meet"/>
</svg>`;
fs.writeFileSync(svgFav, svgContent, 'utf8');
console.log('Updated public/favicon.svg with butterfly emblem.');

console.log('2. Copying opengraph.png to root and optimized...');
fs.copyFileSync(ogPng, path.join(publicDir, 'opengraph.png'));
fs.copyFileSync(ogPng, path.join(logoDir, 'opengraph-optimized.png'));
// Also replace opengraph.jpg with opengraph.png data or copy if allowed
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

  // Replace favicon tags
  // Replace <link rel="icon" ...> and <link rel="apple-touch-icon" ...>
  // Ensure primary favicon is /images/logo/favicon.png
  html = html.replace(/<link\s+rel="icon"\s+type="image\/x-icon"[^>]*>/gi, '');
  html = html.replace(/<link\s+rel="icon"\s+type="image\/png"\s+sizes="32x32"[^>]*>/gi, '');
  html = html.replace(/<link\s+rel="icon"\s+type="image\/png"\s+sizes="16x16"[^>]*>/gi, '');
  html = html.replace(/<link\s+rel="icon"\s+type="image\/png"\s+href="\/images\/logo\/favicon\.png"[^>]*>/gi, '');
  html = html.replace(/<link\s+rel="shortcut icon"[^>]*>/gi, '');
  html = html.replace(/<link\s+rel="apple-touch-icon"[^>]*>/gi, '');

  const newFavTags = `<link rel="icon" type="image/png" href="/images/logo/favicon.png"><link rel="shortcut icon" type="image/png" href="/images/logo/favicon.png"><link rel="apple-touch-icon" href="/images/logo/favicon.png">`;

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
