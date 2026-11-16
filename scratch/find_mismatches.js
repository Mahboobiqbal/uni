const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(full));
    } else if (/\.(tsx?|jsx?)$/.test(file)) {
      results.push(full);
    }
  });
  return results;
}

const files = walk('src');
const imageRegex = /['"](\/[^'"]+\.(?:png|jpe?g|svg|webp))['"]/g;

const matches = [];
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  let match;
  while ((match = imageRegex.exec(content)) !== null) {
    const img = match[1];
    matches.push({ file: path.relative(process.cwd(), f), img });
  }
});

console.log('Total image references found:', matches.length);

const suspicious = matches.filter(m => {
  const i = m.img.toLowerCase();
  return (
    i.includes('department-of-') ||
    i.includes('14_img') ||
    i.includes('faculty') ||
    i.includes('vc-portrait') ||
    i.includes('leadership') ||
    i.includes('news-gandhara-mou')
  );
});

console.log('\nSuspicious / Portrait / MoU references:');
suspicious.forEach(s => {
  console.log(`${s.file}: ${s.img}`);
});
