const { PDFDocument, PDFName } = require('pdf-lib');
const fs = require('fs');

async function extract() {
  const bytes = fs.readFileSync('public/documents/soldier-security-services-profile.pdf');
  const doc = await PDFDocument.load(bytes);
  console.log('Page count:', doc.getPageCount());

  let imgIdx = 0;
  for (const [ref, obj] of doc.context.enumerateIndirectObjects()) {
    if (obj && obj.dict && obj.dict.get) {
      const subtype = obj.dict.get(PDFName.of('Subtype'));
      if (subtype === PDFName.of('Image')) {
        imgIdx++;
        const filter = obj.dict.get(PDFName.of('Filter'));
        console.log(`Image ${imgIdx} (${ref.toString()}): filter=${filter ? filter.toString() : 'none'} size=${obj.contents ? obj.contents.length : 0}`);
        if (filter && filter.toString().includes('DCTDecode')) {
          fs.writeFileSync(`public/images/profile-img-${imgIdx}.jpg`, obj.contents);
          console.log(`Saved public/images/profile-img-${imgIdx}.jpg`);
        } else if (filter && filter.toString().includes('FlateDecode')) {
          // It might be raw PNG/bitmap or flate-compressed
          console.log(`FlateDecode image found: ${obj.contents.length} bytes`);
        }
      }
    }
  }
}

extract().then(() => console.log('Extraction complete!')).catch(console.error);
