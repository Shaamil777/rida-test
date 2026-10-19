import fs from 'fs';

const files = [
  'public/appointment/index.html',
  'public/index.html',
  'public/learn/index.html',
  'public/manage/index.html',
  'public/privacy/index.html',
  'public/resources/index.html',
  'public/resources/relationships/index.html',
  'public/resources/starting-therapy/index.html',
  'public/resources/stress/index.html',
  'public/resources/supporting-a-teen/index.html',
  'public/services/assessment/index.html',
  'public/services/burnout/index.html',
  'public/services/children/index.html',
  'public/services/couples/index.html',
  'public/services/group/index.html',
  'public/services/individual/index.html',
  'public/staff/index.html'
];

const creatorBadgeHtml = `<span class="creator-badge"><button type="button" class="creator-name-link" aria-label="Shaamil's social links">Shaamil</button><span class="creator-tooltip" role="tooltip"><span class="creator-tooltip-arrow" aria-hidden="true"></span><a href="https://www.instagram.com/_sh4mill/" target="_blank" rel="noopener noreferrer" class="creator-icon-btn instagram" aria-label="Instagram" title="Instagram"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a><a href="https://www.linkedin.com/in/muhammad-shamil-4b42a8329/" target="_blank" rel="noopener noreferrer" class="creator-icon-btn linkedin" aria-label="LinkedIn" title="LinkedIn"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a><a href="https://github.com/Shaamil777" target="_blank" rel="noopener noreferrer" class="creator-icon-btn github" aria-label="GitHub" title="GitHub"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a><a href="https://muhammadshamil.vercel.app" target="_blank" rel="noopener noreferrer" class="creator-icon-btn portfolio" aria-label="Portfolio" title="Portfolio"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></a></span></span>`;

for (const f of files) {
  let content = fs.readFileSync(f, 'utf8');
  const isHome = f === 'public/index.html';
  const homeHref = isHome ? '#' : '/#';

  const navLogo = `<a href="${homeHref}" class="brand" aria-label="Rida by Rahma home"><img src="/images/logo/logo1.png" alt="Riḍā by Rahma" class="brand-logo" width="140" height="52"></a>`;
  const footLogo = `<a href="${homeHref}" class="brand" aria-label="Rida by Rahma home"><img src="/images/logo/logo.png" alt="Riḍā by Rahma" class="brand-logo" width="160" height="108"></a>`;

  // 1. Replace header brand with navLogo
  // Matches <header class="header"><a ...class="brand"...>...</a>
  content = content.replace(/(<header\s+class="header">)\s*<a\s+[^>]*class="brand"[^>]*>[\s\S]*?<\/a>/i, `$1${navLogo}`);

  // 2. Replace footer brand with footLogo
  // Matches <footer>...<a ...class="brand"...>...</a>
  content = content.replace(/(<footer[^>]*>[\s\S]*?)<a\s+[^>]*class="brand"[^>]*>[\s\S]*?<\/a>/i, `$1${footLogo}`);

  // 3. Ensure 4-icon creator badge in footer
  if (content.includes('creator-badge')) {
    content = content.replace(/<span\s+class="creator-badge">[\s\S]*?<\/span>\s*<\/span>/i, creatorBadgeHtml);
  }

  // 4. Remove preferred language fieldset from enquiry form dialog
  content = content.replace(/<fieldset>\s*<legend>\s*My preferred language\s*<\/legend>[\s\S]*?<\/fieldset>/gi, '');

  // 5. In appointment page, remove the sleek-field for language
  if (f === 'public/appointment/index.html') {
    content = content.replace(/<div\s+class="sleek-field">\s*<label>\s*My preferred language\s*<\/label>[\s\S]*?<\/div>\s*<\/div>/gi, '');
  }

  // 6. Remove any leftover /ml/ link references in navigation or footer
  content = content.replace(/href="\/ml\/"/g, 'href="/"');

  fs.writeFileSync(f, content, 'utf8');
  console.log(`Updated ${f}`);
}
