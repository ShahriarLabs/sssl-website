const fs = require('fs');

const rawClients = [
  { sl: 1, name: "Aqua Garden", loc: "226, Bottola Mor, South Paikpara, Mirpur, Dhaka.", contact: "Mr. Linkon, Account Manager", cat: "Commercial & Estates" },
  { sl: 2, name: "Arunima Group", loc: "Dewan Idris Road, Kathgora, Zirabo, Ashulia, Dhaka.", contact: "Major Siraj (Rtd), Director", cat: "Industrial & RMG" },
  { sl: 3, name: "Aladin’s Park Resort", loc: "Sithi, Kulla, Joypura, Dhamrai, Dhaka", contact: "Mr. Rifat, Director", cat: "Commercial & Estates" },
  { sl: 4, name: "BSCIC Industrial Estate", loc: "BSCIC Industrial Estate, Dhamrai, Dhaka", contact: "Major Nurul Islam, Chairman", cat: "Commercial & Estates" },
  { sl: 5, name: "Bath Care Ltd.", loc: "BSCIC Industrial Estate, Dhamrai, Dhaka.", contact: "Md. Anowar Hossen, Managing Director", cat: "Engineering & Heavy" },
  { sl: 6, name: "Biswas Fabrics Ltd.", loc: "Rajfulbaria, Savar, Dhaka.", contact: "Md. Mafiz Uddin, Factory Manager", cat: "Industrial & RMG" },
  { sl: 7, name: "Bright Packaging Industry", loc: "Sreekhondia, Ashulia, Turag, Dhaka.", contact: "Md. Mosharof Hossain, Managing Director", cat: "Packaging & Accessories" },
  { sl: 8, name: "Bengal Plaza", loc: "Plot-195, Bengal Plaza-5, Jamgora, Ashulia, Dhaka.", contact: "Md. Hasan, Admin Manager", cat: "Commercial & Estates" },
  { sl: 9, name: "Bangladesh Agricultural Industries", loc: "Plot# S-17-18, BSCIC Industrial Estate, Dhamrai, Dhaka", contact: "Md. Abdullah Al-Masud, Logistic Officer", cat: "Agro & Food" },
  { sl: 10, name: "Biswas Knitwear", loc: "Zirabo, Ashulia, Savar, Dhaka.", contact: "Md. Mohsin Hossain, Managing Director", cat: "Industrial & RMG" },
  { sl: 11, name: "Corp Protection & Care Center", loc: "BSCIC Industrial Estate, Dhamrai, Dhaka", contact: "Mr. Toufiqul, Managing Director", cat: "Engineering & Heavy" },
  { sl: 12, name: "Clothing Carnivals Ltd.", loc: "North Gazirchat, Aliya Madrasha Road, Ashulia, Dhaka.", contact: "Md. Arifuzzaman, Director", cat: "Industrial & RMG" },
  { sl: 13, name: "Euro Printing Industries (pvt.) Ltd.", loc: "Baipail, Ashulia, Savar, Dhaka.", contact: "Md. A.Salam, Manager", cat: "Packaging & Accessories" },
  { sl: 14, name: "Everrich Industries Ltd.", loc: "Altaf Nagar, Durgapur, Zirabo, Ashulia, Dhaka.", contact: "Chiu Chia Chi, Director", cat: "Industrial & RMG" },
  { sl: 15, name: "Excellent Sweaters Ltd.", loc: "Plot-195, Bengal Plaza-5, Jamgora, Ashulia, Dhaka.", contact: "Mr. Tipu, Director", cat: "Industrial & RMG" },
  { sl: 16, name: "Global Premium Accessories Ltd.", loc: "BSCIC Industrial Estate, Dhamrai, Dhaka.", contact: "Managing Director", cat: "Packaging & Accessories" },
  { sl: 17, name: "Golden Union Leather Products Ltd.", loc: "Alanur Tower, North Gazirchat, Ashulia, Savar, Dhaka-1349", contact: "Md. Nazmul Islam, Accounts Manager", cat: "Industrial & RMG" },
  { sl: 18, name: "Hyun Apparels Ltd.", loc: "Bengal Plaza-5, Jamgora, Ashulia, Dhaka.", contact: "Md. Hasan, Admin Manager", cat: "Industrial & RMG" },
  { sl: 19, name: "HopYick (BD) Ltd.", loc: "44-46, Dhaka EPZ (West), Ganakbari, Savar, Dhaka.", contact: "Md. Shofiqur Rahman, Admin Manager", cat: "EPZ & Special Zones" },
  { sl: 20, name: "Hyopshin Company Ltd.", loc: "Plot# 88-92, DEPZ, Ganakbari, Savar, Dhaka-1349.", contact: "Gun Suck Park, Director", cat: "EPZ & Special Zones" },
  { sl: 21, name: "Hyopshin Company Ltd. (Unit-2)", loc: "Plot# 21-24, DEPZ, Ganakbari, Savar, Dhaka-1349.", contact: "Gun Suck Park, Director", cat: "EPZ & Special Zones" },
  { sl: 22, name: "I-mart Engineering Ltd.", loc: "Glora, Saturia, Manikgonj.", contact: "Md. Shamim, Manager", cat: "Engineering & Heavy" },
  { sl: 23, name: "ISC Enterprise (BD) Ltd.", loc: "Plot# B-25, BSCIC Industrial Area, Dhamrai, Dhaka.", contact: "Mrs. Rabeya, Factory Manager", cat: "Engineering & Heavy" },
  { sl: 24, name: "Kaifeng Textile Ltd.", loc: "Hemayetpur, Savar, Dhaka.", contact: "Md. Salauddin, General Manager", cat: "Industrial & RMG" },
  { sl: 25, name: "Khadiza Knitting", loc: "Bhabanipur, Kashimpur, Gazipur, Dhaka.", contact: "Md. Ratan Mia, Managing Partner", cat: "Industrial & RMG" },
  { sl: 26, name: "Khadiza Knitting (Unit-2)", loc: "Kashimpur, Gazipur, Dhaka.", contact: "Md. Ratan Mia, Managing Partner", cat: "Industrial & RMG" },
  { sl: 27, name: "Legend Trims Ltd.", loc: "Ramjan Market, Bamnertek, Nishatnagar, Turag, Dhaka-1230.", contact: "Shuvo Mortuza, Managing Director", cat: "Packaging & Accessories" },
  { sl: 28, name: "Land Area", loc: "Doshaid, Ashulia, Savar, Dhaka", contact: "Sufia Ahmed, Owner", cat: "Commercial & Estates" },
  { sl: 29, name: "Llano (BD) Ltd.", loc: "Gorat, East Narshinghapur, Savar, Dhaka.", contact: "Md. Kalam, General Manager", cat: "Industrial & RMG" },
  { sl: 30, name: "Mark Packaging & Accessories Ltd.", loc: "Ramjan Market, Bamnertek, Nishatnagar, Turag, Dhaka-1230.", contact: "Shuvo Mortuza, Managing Director", cat: "Packaging & Accessories" },
  { sl: 31, name: "Mark Ice Cream", loc: "BSCIC Industrial Estate, Dhamrai, Dhaka", contact: "Md. Kabir, Managing Director", cat: "Agro & Food" },
  { sl: 32, name: "Mas Lace & Fabrics Ltd.", loc: "Goalbatan, Kaliakoir, Gazipur.", contact: "Md. Washim Rana, Deputy Manager", cat: "Industrial & RMG" },
  { sl: 33, name: "Mac Printing and Garments Accessories Ltd.", loc: "Cantonment Road, Zirabo, Ashulia, Dhaka", contact: "Md. Salim-Al-Mamun, Managing Director", cat: "Packaging & Accessories" },
  { sl: 34, name: "Pack nd Package Ltd.", loc: "Baliakhola, Ghior, Manikgonj.", contact: "Alok Sen Gupta, Managing Director", cat: "Packaging & Accessories" },
  { sl: 35, name: "Pullman Knitwear Ltd.", loc: "Unique, Ashulia, Savar, Dhaka.", contact: "Md. Zobbar, Admin Manager", cat: "Industrial & RMG" },
  { sl: 36, name: "PLN Construction Ltd.", loc: "Cumilla BSCIC, Cumilla", contact: "Mr. Rajan, Project Planner", cat: "Engineering & Heavy" },
  { sl: 37, name: "RAS Agro Industries Ltd.", loc: "Plot-B/21, BSCIC Industrial Estate, Dhamrai, Dhaka.", contact: "Md. Abu Taleb, CEO", cat: "Agro & Food" },
  { sl: 38, name: "Rapid Accessories Ltd.", loc: "A-49/6, Middle Ganda, Savar, Dhaka-1340.", contact: "Mr. Rafiqul Islam Rasel, Director", cat: "Packaging & Accessories" },
  { sl: 39, name: "Rupsha Tower", loc: "Chayabithi, Amtolamor, Savar, Dhaka", contact: "Dr. Md. Ziaul Islam, Chairman", cat: "Commercial & Estates" },
  { sl: 40, name: "Sailtex Fashion Ltd.", loc: "Chowdhury Complex, Purbohati Road, Natunpar, Hemayetpur, Savar, Dhaka.", contact: "Managing Director", cat: "Industrial & RMG" },
  { sl: 41, name: "SR Knit Fashion", loc: "Bhabanipur, Kashimpur, Gazipur Sadar, Gazipur.", contact: "Md. Hamidur Rahman, Managing Director", cat: "Industrial & RMG" },
  { sl: 42, name: "Sweet Agro & Beverage Ltd.", loc: "BSCIC Industrial Estate, Dhamrai, Dhaka.", contact: "Md: Akbar Hossin, Admin Manager", cat: "Agro & Food" },
  { sl: 43, name: "Sweet Agro & Beverage Ltd. (Unit-2)", loc: "BSCIC Industrial Estate, Dhamrai, Dhaka.", contact: "Md: Akbar Hossin, Admin Manager", cat: "Agro & Food" },
  { sl: 44, name: "Sweet Agro & Beverage Ltd. (Unit-3)", loc: "BSCIC Industrial Estate, Dhamrai, Dhaka.", contact: "Md: Akbar Hossin, Admin Manager", cat: "Agro & Food" },
  { sl: 45, name: "Sweet Agro & Beverage Ltd. (Unit-4)", loc: "BSCIC Industrial Estate, Dhamrai, Dhaka.", contact: "Md: Akbar Hossin, Admin Manager", cat: "Agro & Food" },
  { sl: 46, name: "Snow Village Ltd.", loc: "Plot# 05, Noyanogor Main Road, Turag, Dhaka-1230", contact: "Mrs. Zila, Managing Director", cat: "Agro & Food" },
  { sl: 47, name: "Sustainable Silhouettes Ltd.", loc: "Plot#24, Road# 07, Noyanagar, Turag, Dhaka-1230.", contact: "Wahid Ahmed, Factory Manager", cat: "Packaging & Accessories" },
  { sl: 48, name: "Total Gemini Flat Owner Somiti", loc: "2/F/7, Mymensingh Road, Shahbagh, Dhaka", contact: "Nargis Mahmuda, Chairman", cat: "Commercial & Estates" },
  { sl: 49, name: "Touchstone Apparels", loc: "Shoildubi, Bagbari, Kashimpur, Gazipur.", contact: "Md. Ariful Islam, Managing Director", cat: "Industrial & RMG" },
  { sl: 50, name: "Ultra Green Power Industries Ltd.", loc: "92, Shorip Para, Matuail, Jatrabari, Dhaka.", contact: "Md. Tawhidul Islam, Managing Director", cat: "Engineering & Heavy" },
  { sl: 51, name: "Valent Tech Ltd.", loc: "Plot# S-5, BSCIC Industrial Estate, Dhamrai, Dhaka.", contact: "Mr. Toufiqul, Managing Director", cat: "Engineering & Heavy" },
  { sl: 52, name: "Valent Tech Ltd. (Unit-2)", loc: "Plot# S-5, BSCIC Industrial Estate, Dhamrai, Dhaka.", contact: "Mr. Toufiqul, Managing Director", cat: "Engineering & Heavy" },
  { sl: 53, name: "Valent Tech Ltd. (Unit-3)", loc: "Plot# S-5, BSCIC Industrial Estate, Dhamrai, Dhaka.", contact: "Mr. Toufiqul, Managing Director", cat: "Engineering & Heavy" },
  { sl: 54, name: "Wooree Apparels Ltd.", loc: "B/1, Binod Bayeed, Savar, Dhaka.", contact: "Md. Shofiq, Account Manager", cat: "Industrial & RMG" },
  { sl: 55, name: "Wooree Apparels Ltd. (Unit-2)", loc: "B Belma Dairy Farm, Ashulia, Savar, Dhaka.", contact: "Md. Shofiq, Account Manager", cat: "Industrial & RMG" },
  { sl: 56, name: "Xincheng Metalic Industries Ltd.", loc: "Block# B, House# 27, Road# 04, Holding# 83, Batulia, Turag, Dhaka-1230", contact: "Asharafuzaman(Shiplu), General Manager", cat: "Engineering & Heavy" },
  { sl: 57, name: "Yu Lee Cap Ltd.", loc: "Chitrashail, Kathaltola Bazar, Ashulia, Savar, Dhaka.", contact: "Md. Dipu, Account Manager", cat: "Industrial & RMG" },
  { sl: 58, name: "Yu Lee Embroidery Ltd.", loc: "Chitrashail, Kathaltola Bazar, Ashulia, Savar, Dhaka.", contact: "Md. Dipu, Account Manager", cat: "Industrial & RMG" }
];

const officialImages = [
  "/images/sssl-guard-squad-1.jpg",
  "/images/sssl-guard-parade.jpg",
  "/images/sssl-female-guards-drill.jpg",
  "/images/sssl-officer-walkie.jpg"
];

const projectItems = rawClients.map((c, i) => {
  const padSl = String(c.sl).padStart(2, '0');
  const img = officialImages[i % officialImages.length];
  return {
    id: `client-${padSl}`,
    serialNumber: c.sl,
    clientName: c.name,
    category: c.cat,
    location: c.loc,
    clientLiaison: c.contact,
    serviceType: "Unarmed Manned Guarding & Perimeter Security",
    description: `Official verified security guarding assignment deployed at ${c.name}, situated at ${c.loc}. Operational coordination managed through ${c.contact}.`,
    fullDetails: {
      liaisonName: c.contact,
      deploymentScope: "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      verifiedLocation: c.loc,
      terms: [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    image: img,
    tags: [c.cat.split(' ')[0], "Verified Client", "Manned Guarding"],
    isVerified: true,
    officialRef: `SSSL Official Profile Entry #${padSl}`
  };
});

fs.writeFileSync('scripts/generated_projects.json', JSON.stringify(projectItems, null, 2));
console.log('Generated', projectItems.length, 'verified client projects!');
