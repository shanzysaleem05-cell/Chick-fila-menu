const fs = require('fs');
const path = require('path');

const menuDataPath = path.join(__dirname, 'lib', 'menu-data.ts');
let content = fs.readFileSync(menuDataPath, 'utf8');

// Function to convert name to filename
function nameToFilename(name) {
  return name
    .replace(/®/g, '')
    .replace(/™/g, '')
    .replace(/\s+/g, '-')
    .replace(/--/g, '-') + '.webp';
}

// Regex to find and replace item images
// Format:
// name: "Chick-fil-A® Chicken Sandwich",
// slug: "chicken-sandwich",
// price: "4.95",
// nutrition: { ... },
// allergens: [...],
// description: "...",
// uniqueDescription: `...`,
// faqs: [...],
// relatedItemSlugs: [...],
// image: "/images/items/chicken-sandwich.webp",

let newContent = content;

const nameImageRegex = /name:\s*"([^"]+)",[\s\S]*?image:\s*"([^"]+)",/g;

newContent = newContent.replace(nameImageRegex, (match, name, oldImage) => {
  const filename = nameToFilename(name);
  return match.replace(oldImage, '/' + filename);
});

fs.writeFileSync(menuDataPath, newContent);
console.log('Updated image paths in menu-data.ts');
