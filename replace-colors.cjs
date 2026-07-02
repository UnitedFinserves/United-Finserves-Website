const fs = require('fs');
const path = require('path');

function walk(dir) {
  let files = [];
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      files = files.concat(walk(full));
    } else if (f.endsWith('.jsx') || f.endsWith('.css')) {
      files.push(full);
    }
  }
  return files;
}

const files = walk('src');
let count = 0;

for (const file of files) {
  let c = fs.readFileSync(file, 'utf8');
  const orig = c;

  // Replace orange/gold color tokens with blue
  c = c.replace(/brand-gold/g, 'brand-royal');
  c = c.replace(/#F0A500/g, '#1A56DB');
  c = c.replace(/#FFD700/g, '#3B82F6');
  c = c.replace(/#e07b00/g, '#1d4ed8');
  c = c.replace(/from-amber-500/g, 'from-blue-500');
  c = c.replace(/to-amber-700/g, 'to-blue-700');
  c = c.replace(/from-amber-/g, 'from-blue-');
  c = c.replace(/to-amber-/g, 'to-blue-');
  c = c.replace(/bg-amber-500/g, 'bg-brand-royal');
  c = c.replace(/hover:bg-amber-500/g, 'hover:bg-blue-700');
  c = c.replace(/text-amber-/g, 'text-blue-');
  c = c.replace(/border-amber-/g, 'border-blue-');
  c = c.replace(/shadow-amber-/g, 'shadow-blue-');

  // Fix CTA button gradients – now pure blue
  c = c.replace(/linear-gradient\(135deg, #1A56DB 0%, #1d4ed8 100%\)/g, 'linear-gradient(135deg, #1A56DB 0%, #1d4ed8 100%)');
  c = c.replace(/linear-gradient\(135deg,#1A56DB 0%,#1d4ed8 100%\)/g, 'linear-gradient(135deg, #1A56DB 0%, #1d4ed8 100%)');

  if (c !== orig) {
    fs.writeFileSync(file, c, 'utf8');
    count++;
    console.log('Updated:', file);
  }
}

console.log(`\nDone. Updated ${count} files.`);
