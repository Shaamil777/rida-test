import {DatabaseSync} from 'node:sqlite';
import {readFileSync,readdirSync} from 'node:fs';
export function localDatabase(path=':memory:'){
 const sqlite=new DatabaseSync(path);sqlite.exec('PRAGMA foreign_keys=ON');
 sqlite.exec('CREATE TABLE IF NOT EXISTS local_migrations(name TEXT PRIMARY KEY)');
 for(const name of readdirSync(new URL('../drizzle/',import.meta.url)).filter(n=>n.endsWith('.sql')).sort()){
  if(!sqlite.prepare('SELECT name FROM local_migrations WHERE name=?').get(name)){
   sqlite.exec('BEGIN');try{sqlite.exec(readFileSync(new URL('../drizzle/'+name,import.meta.url),'utf8'));sqlite.prepare('INSERT INTO local_migrations(name) VALUES(?)').run(name);sqlite.exec('COMMIT');}catch(e){sqlite.exec('ROLLBACK');throw e;}
  }
 }
 function statement(sql,args=[]){return {sql,args,bind(...bound){return statement(sql,bound);},async first(){return sqlite.prepare(sql).get(...args)||null;},async all(){return {results:sqlite.prepare(sql).all(...args)};},async run(){const result=sqlite.prepare(sql).run(...args);return {meta:{changes:Number(result.changes)}};}};}
 return {sqlite,prepare:statement,async batch(statements){sqlite.exec('BEGIN IMMEDIATE');try{const result=statements.map(s=>{const r=sqlite.prepare(s.sql).run(...s.args);return {meta:{changes:Number(r.changes)}};});sqlite.exec('COMMIT');return result;}catch(e){sqlite.exec('ROLLBACK');throw e;}}};
}
