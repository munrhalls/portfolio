const sharp = require('sharp');
const path = require('path');

const testPath = path.join(__dirname, 'src', 'assets', 'images', 'sanglogium', 'sanglogium-01.png');

sharp(testPath)
  .resize(100)
  .toBuffer()
  .then((buf) => {
    console.log(`Sharp processed OK: ${buf.length} bytes`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(`Sharp failed: ${err.message}`);
    process.exit(1);
  });
