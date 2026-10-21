import fs from 'node:fs';
import path from 'node:path';

function cleanDir(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.git') cleanDir(fullPath);
    } else if (entry.name.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const updated = content.replace(/<button class="page-motion"[\s\S]*?<\/button>/g, '');
      if (updated !== content) {
        fs.writeFileSync(fullPath, updated, 'utf8');
        console.log('Cleaned button from:', fullPath);
      }
    }
  }
}

cleanDir('public');
cleanDir('dist');
console.log('Done cleaning page-motion buttons.');
