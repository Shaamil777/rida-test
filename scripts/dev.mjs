import {createServer} from 'node:http';
import {readFileSync,statSync} from 'node:fs';
import {resolve,extname,sep} from 'node:path';

const root = resolve('public');
const types = {'.html':'text/html; charset=utf-8','.js':'text/javascript','.mjs':'text/javascript','.css':'text/css','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.svg':'image/svg+xml','.json':'application/json','.ttf':'font/ttf'};

createServer((incoming, outgoing) => {
 try {
  const url = new URL(incoming.url, 'http://127.0.0.1:5173');
  let path = resolve(root, '.' + decodeURIComponent(url.pathname));
  if (!path.startsWith(root + sep) && path !== root) {
   outgoing.writeHead(404);
   outgoing.end('Not found');
   return;
  }
  
  if (statSync(path).isDirectory()) {
   path = resolve(path, 'index.html');
  }
  
  const file = readFileSync(path);
  outgoing.writeHead(200, {
   'Content-Type': types[extname(path)] || 'application/octet-stream',
   'Cache-Control': 'no-store'
  });
  outgoing.end(file);
 } catch {
  outgoing.writeHead(404);
  outgoing.end('Not found');
 }
}).listen(5173, '127.0.0.1', () => console.log('Static preview: http://127.0.0.1:5173/'));
