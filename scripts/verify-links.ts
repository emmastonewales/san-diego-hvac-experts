import fs from 'fs';
import path from 'path';

function getAllHtmlFiles(dir: string): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== 'dist' && file !== '.git') {
        results = results.concat(getAllHtmlFiles(filePath));
      }
    } else if (file.endsWith('.html')) {
      results.push(filePath);
    }
  });
  return results;
}

function verifyLinks() {
  const root = process.cwd();
  const htmlFiles = getAllHtmlFiles(root);
  console.log(`Checking links across ${htmlFiles.length} HTML files...`);

  let brokenCount = 0;
  const linkRegex = /href=["'](\/[^"']+)["']/g;

  htmlFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    let match;
    while ((match = linkRegex.exec(content)) !== null) {
      const urlPath = match[1];
      // Ignore anchors or tel/mailto
      if (urlPath.startsWith('#') || urlPath.startsWith('tel:') || urlPath.startsWith('mailto:')) continue;

      let targetFile = path.join(root, urlPath);
      // Handle directory root '/' -> 'index.html'
      if (urlPath === '/') {
        targetFile = path.join(root, 'index.html');
      }

      if (!fs.existsSync(targetFile)) {
        console.error(`BROKEN LINK in ${path.relative(root, file)}: "${urlPath}" -> File not found: ${path.relative(root, targetFile)}`);
        brokenCount++;
      }
    }
  });

  if (brokenCount === 0) {
    console.log('✅ ALL INTERNAL LINKS VERIFIED PERFECTLY! 0 BROKEN LINKS.');
  } else {
    console.error(`❌ FOUND ${brokenCount} BROKEN LINKS!`);
    process.exit(1);
  }
}

verifyLinks();
