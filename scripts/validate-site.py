from pathlib import Path
from urllib.parse import urlsplit,unquote
from html.parser import HTMLParser
from collections import Counter
root=Path('public');pages={};errors=[]
class Page(HTMLParser):
 def __init__(self):super().__init__();self.ids=[];self.refs=[];self.headings=0;self.lang=None
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if 'id' in a:self.ids.append(a['id'])
  if tag=='html':self.lang=a.get('lang')
  if tag=='h1':self.headings+=1
  for key in ('src','href'):
   if a.get(key):self.refs.append(a[key])
for f in root.rglob('*.html'):
 p=Page();p.feed(f.read_text());pages[f]=p
 if p.headings!=1:errors.append(f'{f}: {p.headings} H1s')
 if p.lang not in ('en','ml'):errors.append(f'{f}: missing language')
 if any(n>1 for n in Counter(p.ids).values()):errors.append(f'{f}: duplicate IDs')
for f,p in pages.items():
 for ref in p.refs:
  u=urlsplit(ref)
  if u.scheme or u.netloc:continue
  dest=root/unquote(u.path.lstrip('/')) if u.path.startswith('/') else f.parent/unquote(u.path) if u.path else f
  if dest.is_dir():dest=dest/'index.html'
  if u.path.startswith(('/signin-with-chatgpt','/signout-with-chatgpt')):continue
  if not dest.exists():errors.append(f'{f}: missing {ref}')
  elif u.fragment and dest in pages and u.fragment not in pages[dest].ids:errors.append(f'{f}: missing anchor {ref}')
if errors:raise SystemExit('\n'.join(errors))
print(f'Validated {len(pages)} pages: local destinations, assets, anchors, document language, headings and unique IDs.')
