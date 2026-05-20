const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

const filesToOptimize = ['about.png', '123.png'];

async function optimizeImages() {
  for (const file of filesToOptimize) {
    const inputPath = path.join(publicDir, file);
    const outputPath = path.join(publicDir, file.replace('.png', '.webp'));

    if (fs.existsSync(inputPath)) {
      console.log(`Optimizing ${file}...`);
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
      console.log(`Successfully created ${path.basename(outputPath)}`);
    } else {
      console.log(`${file} not found in public directory.`);
    }
  }
}

optimizeImages();
