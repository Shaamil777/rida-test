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

for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  const headerMatch = content.match(/<header[\s\S]*?<img[^>]*src=["']([^"']+)["'][^>]*class=["']brand-logo["']/i);
  const footerMatch = content.match(/<footer[\s\S]*?<img[^>]*src=["']([^"']+)["'][^>]*class=["']brand-logo["']/i);
  const hasLangField = /name=["']language["']/i.test(content);
  const hasMalayalamText = /[\u0D00-\u0D7F]/.test(content);
  const has4Icons = content.includes('instagram') && content.includes('linkedin') && content.includes('github') && content.includes('portfolio');
  console.log(`${f}: header=${headerMatch ? headerMatch[1] : 'none'} footer=${footerMatch ? footerMatch[1] : 'none'} lang=${hasLangField} ml=${hasMalayalamText} 4icons=${has4Icons}`);
}
