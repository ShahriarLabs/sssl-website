import type { 
  ContactChannel, 
  CounterStatItem, 
  IndustryItem, 
  LeadershipMember, 
  ProjectItem, 
  ServiceItem, 
  SiteMeta, 
  TrustCredentialItem,
  CareerItem
} from '../types';

export const siteMeta: SiteMeta = {
  companyName: 'Soldier Security Services Ltd.',
  shortName: 'SSSL',
  tagline: 'Security You Can Trust. Protection You Can Rely On.',
  heroHeadline: 'Security You Can Trust. Protection You Can Rely On.',
  heroTypingPhrases: [
    'Disciplined Vigilance for Corporate Assets',
    'Specialized Industrial & Facility Protection',
    'Certified Security Personnel Across Bangladesh',
    'Round-the-Clock Rapid Emergency Response'
  ],
  heroSubheadline: 'Soldier Security Services Ltd. (Reg. No. C-96185/11) delivers disciplined, reliable, and rigorously trained security personnel for factories, commercial establishments, apartments, and corporate offices across Bangladesh.',
  aboutOverview: 'Soldier Security Services Ltd. is a duly registered private security service provider established under the laws of Bangladesh (Incorporation Reg. No: C-96185/11, Registered: 16.10.2011). Built on uncompromising discipline, operational oversight, and tactical vigilance, SSSL protects 58+ esteemed corporate, industrial, and commercial facilities nationwide.',
  mission: 'To deliver steadfast, professional, and vigilant security services that empower organizations and communities to operate safely, confidently, and without compromise.',
  vision: 'To emerge as Bangladesh benchmark private security agency, recognized for disciplined personnel, uncompromising ethical standards, and technology-augmented physical security.',
  pdfProfileUrl: '/documents/soldier-security-services-profile.pdf',
  pdfDownloadFilename: 'Soldier-Security-Services-Ltd-Company-Profile.pdf',
  coreValues: [
    {
      title: 'Tactical Discipline',
      desc: 'Our personnel undergo rigorous training adhering to established operational standards and firefighting procedures.',
      icon: 'ShieldCheck'
    },
    {
      title: 'Uncompromised Integrity',
      desc: 'Trust is our paramount asset. We uphold absolute honesty, transparency, and formal contractual accountability.',
      icon: 'Lock'
    },
    {
      title: '24/7 Vigilance',
      desc: 'Round-the-clock supervisor patrols, scheduled check-ins, and proactive emergency preparedness to neutralize vulnerabilities.',
      icon: 'Eye'
    },
    {
      title: 'Loss Compensation Protocol',
      desc: 'Clear contractual commitment to conduct joint inquiries and resolve security concerns in accordance with agreement deeds.',
      icon: 'UserCheck'
    }
  ],
  operationalApproach: [
    {
      step: '01',
      title: 'Site Risk Assessment',
      desc: 'Comprehensive perimeter vulnerability audit, access-point analysis, and operational traffic evaluation.'
    },
    {
      step: '02',
      title: 'Custom Protocol Design',
      desc: 'Formulation of standard operating procedures, post orders, access rosters, and incident response matrices.'
    },
    {
      step: '03',
      title: 'Personnel Selection & Briefing',
      desc: 'Deployment of vetted, physically fit, and site-specifically briefed security guards equipped with uniforms and essential equipment.'
    },
    {
      step: '04',
      title: 'Continuous Supervision',
      desc: 'Surprise field inspections, digital log verification, client feedback reviews, and ongoing readiness drills.'
    }
  ]
};

export const contactDetails: ContactChannel = {
  phone: {
    raw: '01707059684',
    formatted: '+880 1707-059684',
    telLink: 'tel:01707059684',
    isVerified: true
  },
  whatsapp: {
    number: '+8801707059684',
    chatUrl: 'https://wa.me/8801707059684?text=Hello%20Soldier%20Security%20Services%20Ltd.%2C%20I%20would%20like%20to%20inquire%20about%20your%20security%20guard%20services.',
    isVerified: true,
    note: 'Initial WhatsApp configuration mapped to verified company phone line. Verification pending final live message test.'
  },
  facebook: {
    url: 'https://www.facebook.com/3SLtdDhaka/',
    label: 'Soldier Security Services Ltd Facebook',
    isVerified: true
  },
  instagram: {
    url: undefined,
    isConfigured: false
  },
  email: {
    address: undefined,
    isConfigured: false
  },
  messenger: {
    url: undefined,
    isConfigured: false
  },
  officeAddress: {
    registered: '18/8, Zalasor, Aricha Road, Shimultala',
    city: 'Savar, Dhaka-1340',
    country: 'Bangladesh',
    registrationNo: 'C-96185/11',
    dateOfRegistration: '16.10.2011',
    isVerified: true,
    verificationNote: 'Official Registered Office & Company Registration Record: C-96185/11 (Registered: 16.10.2011).'
  },
  businessHours: {
    ops: '24 Hours / 7 Days a Week (Security Control & Dispatch)',
    admin: 'Saturday – Thursday: 9:00 AM – 6:00 PM'
  }
};

export const leadershipProfiles: LeadershipMember[] = [
  {
    id: 'sabina-yasmin',
    name: 'Sabina Yasmin',
    designation: 'Chairman',
    roleDescription: 'Governance, Strategic Vision & Corporate Oversight',
    bio: 'As Chairman of Soldier Security Services Ltd., Sabina Yasmin steers the company strategic direction, corporate governance, and long-term organizational ethos. Committed to establishing ethical security standards and sustainable operational growth, she ensures the organization remains anchored in institutional credibility and responsive client stewardship.',
    portrait: '/images/leadership-placeholder-chairman.svg',
    credentialsNotes: 'Official executive profile. Detailed personal biography will be updated upon official submission.',
    isPlaceholderBio: true
  },
  {
    id: 'md-kamal-hossain',
    name: 'Md Kamal Hossain',
    designation: 'Managing Director',
    roleDescription: 'Operational Command, Deployment Excellence & Client Relations',
    bio: 'Md Kamal Hossain provides active executive leadership as Director / Managing Director of Soldier Security Services Ltd. Focusing on personnel discipline, tactical deployment standards, and rigorous supervisor field inspections, he drives day-to-day operational excellence to guarantee that every client asset is protected by vigilant, dependable professionals.',
    portrait: '/images/leadership-placeholder-md.svg',
    credentialsNotes: 'Official company director signatory on record for Soldier Security Services Ltd. (Reg: C-96185/11).',
    isPlaceholderBio: false
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: 'manned-guarding',
    title: 'Manned Guarding Services',
    category: 'Manned Guarding',
    shortDesc: 'Disciplined, uniformed security personnel trained for access control, perimeter watch, and crowd discipline.',
    fullDesc: 'Our manned guarding solutions provide a visible, disciplined deterrent at entrances, gates, and internal security posts. Guards undergo background vetting, drill discipline, and firefighting orientation.',
    features: [
      'Uniformed static guards & entry sentries',
      'Visitor register & ID badge verification',
      'Material movement & gate pass monitoring',
      '24/7 static post rotational schedules'
    ],
    icon: 'Shield',
    isDraft: false,
    badge: 'Core Service'
  },
  {
    id: 'corporate-security',
    title: 'Corporate & Office Security',
    category: 'Corporate & Office',
    shortDesc: 'Refined, discreet security officers tailored for commercial headquarters, executive floors, and IT facilities.',
    fullDesc: 'Tailored for corporate environments requiring a balance of rigorous access protocols and professional courtesy. Guards are trained in reception security and executive escort.',
    features: [
      'Front-desk concierge & visitor management',
      'After-hours floor lockouts & patrol sweeps',
      'Server room and confidential zone access controls',
      'Emergency fire warden & evacuation assistance'
    ],
    icon: 'Building2',
    isDraft: false,
    badge: 'High Demand'
  },
  {
    id: 'industrial-commercial',
    title: 'Industrial & Factory Security',
    category: 'Industrial & Commercial',
    shortDesc: 'Robust protection engineered for manufacturing plants, garment factories, export warehouses, and EPZ complexes.',
    fullDesc: 'Designed to handle large labor forces, freight vehicular movement, perimeter integrity, and theft prevention across active industrial belts including Savar, Ashulia, and Gazipur.',
    features: [
      'Shift-in / shift-out crowd & labor transit control',
      'Vehicle loading bay inspection & tally verification',
      'Perimeter fence patrols & raw material safeguarding',
      'Fire-safety inspection and equipment audit'
    ],
    icon: 'Factory',
    isDraft: false,
    badge: 'Specialized'
  },
  {
    id: 'residential-security',
    title: 'Residential & Gated Community Security',
    category: 'Residential Security',
    shortDesc: 'Vigilant, community-focused guards for apartment complexes, private estates, and residential compounds.',
    fullDesc: 'Dedicated protection ensuring family safety, vehicle parking order, guest verification, and perimeter watchfulness day and night.',
    features: [
      'Gated entrance verification & intercom clearance',
      'CCTV feed observation & rooftop/basement patrols',
      'Delivery personnel registration & tracking',
      'Domestic staff verification logging'
    ],
    icon: 'Home',
    isDraft: false
  },
  {
    id: 'event-security',
    title: 'Event & Executive Security',
    category: 'Event Security',
    shortDesc: 'Dynamic crowd control, VIP protection, and incident mitigation for exhibitions, AGM meetings, and public events.',
    fullDesc: 'Comprehensive event protection planning including access gates, metal detection scanning, VIP route securing, and emergency evacuation management.',
    features: [
      'Guest invitation screening & metal detector frisking',
      'VIP stage & back-stage isolation cordon',
      'Emergency exit pathway clearance',
      'Crisis de-escalation & crowd movement control'
    ],
    icon: 'Users',
    isDraft: false
  },
  {
    id: 'access-control-surveillance',
    title: 'Access Control & Electronic Surveillance',
    category: 'Access Control & Surveillance',
    shortDesc: 'Integration of physical sentries with CCTV monitoring, biometric scanners, and smart gate hardware.',
    fullDesc: 'Synergizing trained human watchfulness with electronic security technology for fail-safe monitoring and rapid incident logging.',
    features: [
      'Control room live CCTV screen surveillance',
      'Turnstile & biometric entry authorization',
      'Automated alarm response coordination',
      'Digital incident recording & video backup preservation'
    ],
    icon: 'Cctv',
    isDraft: true,
    badge: 'Draft / Suggested'
  },
  {
    id: 'security-supervision',
    title: 'Mobile Security Supervision & Patrols',
    category: 'Security Supervision',
    shortDesc: 'Unannounced supervisor patrol inspections to ensure guard alertness, turnout, and adherence to client SOPs.',
    fullDesc: 'Dedicated mobile patrol units conducted by seasoned field officers who visit deployed posts day and night to verify vigilance and duty adherence.',
    features: [
      'Random nocturnal inspections & turnout audits',
      'Guards alertness & logbook verification',
      'Immediate replacement for emergency absenteeism',
      'Direct liaison with local law enforcement if required'
    ],
    icon: 'Compass',
    isDraft: false,
    badge: 'Operational Pillar'
  },
  {
    id: 'risk-assessment',
    title: 'Risk Assessment & Security Audits',
    category: 'Risk Assessment',
    shortDesc: 'Strategic vulnerability analysis and defensive recommendations for facilities of all scales.',
    fullDesc: 'Professional site evaluations identifying blind spots, weak perimeter zones, lighting deficiencies, and protocol bottlenecks before incidents occur.',
    features: [
      'Physical perimeter defense appraisal',
      'Traffic flow & choke-point analysis',
      'Fire & natural hazard readiness review',
      'Formal written security vulnerability report'
    ],
    icon: 'FileSpreadsheet',
    isDraft: true,
    badge: 'Draft / Advisory'
  }
];

// All 58 Verified Client Deployments from Official Profile
export const projectData: ProjectItem[] = [
  {
    "id": "client-01",
    "serialNumber": 1,
    "clientName": "Aqua Garden",
    "category": "Commercial & Estates",
    "location": "226, Bottola Mor, South Paikpara, Mirpur, Dhaka.",
    "clientLiaison": "Mr. Linkon, Account Manager",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Aqua Garden, situated at 226, Bottola Mor, South Paikpara, Mirpur, Dhaka.. Operational coordination managed through Mr. Linkon, Account Manager.",
    "fullDetails": {
      "liaisonName": "Mr. Linkon, Account Manager",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "226, Bottola Mor, South Paikpara, Mirpur, Dhaka.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-guard-squad-1.jpg",
    "tags": [
      "Commercial",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #01"
  },
  {
    "id": "client-02",
    "serialNumber": 2,
    "clientName": "Arunima Group",
    "category": "Industrial & RMG",
    "location": "Dewan Idris Road, Kathgora, Zirabo, Ashulia, Dhaka.",
    "clientLiaison": "Major Siraj (Rtd), Director",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Arunima Group, situated at Dewan Idris Road, Kathgora, Zirabo, Ashulia, Dhaka.. Operational coordination managed through Major Siraj (Rtd), Director.",
    "fullDetails": {
      "liaisonName": "Major Siraj (Rtd), Director",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "Dewan Idris Road, Kathgora, Zirabo, Ashulia, Dhaka.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-guard-parade.jpg",
    "tags": [
      "Industrial",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #02"
  },
  {
    "id": "client-03",
    "serialNumber": 3,
    "clientName": "Aladin’s Park Resort",
    "category": "Commercial & Estates",
    "location": "Sithi, Kulla, Joypura, Dhamrai, Dhaka",
    "clientLiaison": "Mr. Rifat, Director",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Aladin’s Park Resort, situated at Sithi, Kulla, Joypura, Dhamrai, Dhaka. Operational coordination managed through Mr. Rifat, Director.",
    "fullDetails": {
      "liaisonName": "Mr. Rifat, Director",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "Sithi, Kulla, Joypura, Dhamrai, Dhaka",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-female-guards-drill.jpg",
    "tags": [
      "Commercial",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #03"
  },
  {
    "id": "client-04",
    "serialNumber": 4,
    "clientName": "BSCIC Industrial Estate",
    "category": "Commercial & Estates",
    "location": "BSCIC Industrial Estate, Dhamrai, Dhaka",
    "clientLiaison": "Major Nurul Islam, Chairman",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at BSCIC Industrial Estate, situated at BSCIC Industrial Estate, Dhamrai, Dhaka. Operational coordination managed through Major Nurul Islam, Chairman.",
    "fullDetails": {
      "liaisonName": "Major Nurul Islam, Chairman",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "BSCIC Industrial Estate, Dhamrai, Dhaka",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-officer-walkie.jpg",
    "tags": [
      "Commercial",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #04"
  },
  {
    "id": "client-05",
    "serialNumber": 5,
    "clientName": "Bath Care Ltd.",
    "category": "Engineering & Heavy",
    "location": "BSCIC Industrial Estate, Dhamrai, Dhaka.",
    "clientLiaison": "Md. Anowar Hossen, Managing Director",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Bath Care Ltd., situated at BSCIC Industrial Estate, Dhamrai, Dhaka.. Operational coordination managed through Md. Anowar Hossen, Managing Director.",
    "fullDetails": {
      "liaisonName": "Md. Anowar Hossen, Managing Director",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "BSCIC Industrial Estate, Dhamrai, Dhaka.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-guard-squad-1.jpg",
    "tags": [
      "Engineering",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #05"
  },
  {
    "id": "client-06",
    "serialNumber": 6,
    "clientName": "Biswas Fabrics Ltd.",
    "category": "Industrial & RMG",
    "location": "Rajfulbaria, Savar, Dhaka.",
    "clientLiaison": "Md. Mafiz Uddin, Factory Manager",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Biswas Fabrics Ltd., situated at Rajfulbaria, Savar, Dhaka.. Operational coordination managed through Md. Mafiz Uddin, Factory Manager.",
    "fullDetails": {
      "liaisonName": "Md. Mafiz Uddin, Factory Manager",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "Rajfulbaria, Savar, Dhaka.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-guard-parade.jpg",
    "tags": [
      "Industrial",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #06"
  },
  {
    "id": "client-07",
    "serialNumber": 7,
    "clientName": "Bright Packaging Industry",
    "category": "Packaging & Accessories",
    "location": "Sreekhondia, Ashulia, Turag, Dhaka.",
    "clientLiaison": "Md. Mosharof Hossain, Managing Director",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Bright Packaging Industry, situated at Sreekhondia, Ashulia, Turag, Dhaka.. Operational coordination managed through Md. Mosharof Hossain, Managing Director.",
    "fullDetails": {
      "liaisonName": "Md. Mosharof Hossain, Managing Director",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "Sreekhondia, Ashulia, Turag, Dhaka.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-female-guards-drill.jpg",
    "tags": [
      "Packaging",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #07"
  },
  {
    "id": "client-08",
    "serialNumber": 8,
    "clientName": "Bengal Plaza",
    "category": "Commercial & Estates",
    "location": "Plot-195, Bengal Plaza-5, Jamgora, Ashulia, Dhaka.",
    "clientLiaison": "Md. Hasan, Admin Manager",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Bengal Plaza, situated at Plot-195, Bengal Plaza-5, Jamgora, Ashulia, Dhaka.. Operational coordination managed through Md. Hasan, Admin Manager.",
    "fullDetails": {
      "liaisonName": "Md. Hasan, Admin Manager",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "Plot-195, Bengal Plaza-5, Jamgora, Ashulia, Dhaka.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-officer-walkie.jpg",
    "tags": [
      "Commercial",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #08"
  },
  {
    "id": "client-09",
    "serialNumber": 9,
    "clientName": "Bangladesh Agricultural Industries",
    "category": "Agro & Food",
    "location": "Plot# S-17-18, BSCIC Industrial Estate, Dhamrai, Dhaka",
    "clientLiaison": "Md. Abdullah Al-Masud, Logistic Officer",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Bangladesh Agricultural Industries, situated at Plot# S-17-18, BSCIC Industrial Estate, Dhamrai, Dhaka. Operational coordination managed through Md. Abdullah Al-Masud, Logistic Officer.",
    "fullDetails": {
      "liaisonName": "Md. Abdullah Al-Masud, Logistic Officer",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "Plot# S-17-18, BSCIC Industrial Estate, Dhamrai, Dhaka",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-guard-squad-1.jpg",
    "tags": [
      "Agro",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #09"
  },
  {
    "id": "client-10",
    "serialNumber": 10,
    "clientName": "Biswas Knitwear",
    "category": "Industrial & RMG",
    "location": "Zirabo, Ashulia, Savar, Dhaka.",
    "clientLiaison": "Md. Mohsin Hossain, Managing Director",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Biswas Knitwear, situated at Zirabo, Ashulia, Savar, Dhaka.. Operational coordination managed through Md. Mohsin Hossain, Managing Director.",
    "fullDetails": {
      "liaisonName": "Md. Mohsin Hossain, Managing Director",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "Zirabo, Ashulia, Savar, Dhaka.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-guard-parade.jpg",
    "tags": [
      "Industrial",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #10"
  },
  {
    "id": "client-11",
    "serialNumber": 11,
    "clientName": "Corp Protection & Care Center",
    "category": "Engineering & Heavy",
    "location": "BSCIC Industrial Estate, Dhamrai, Dhaka",
    "clientLiaison": "Mr. Toufiqul, Managing Director",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Corp Protection & Care Center, situated at BSCIC Industrial Estate, Dhamrai, Dhaka. Operational coordination managed through Mr. Toufiqul, Managing Director.",
    "fullDetails": {
      "liaisonName": "Mr. Toufiqul, Managing Director",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "BSCIC Industrial Estate, Dhamrai, Dhaka",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-female-guards-drill.jpg",
    "tags": [
      "Engineering",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #11"
  },
  {
    "id": "client-12",
    "serialNumber": 12,
    "clientName": "Clothing Carnivals Ltd.",
    "category": "Industrial & RMG",
    "location": "North Gazirchat, Aliya Madrasha Road, Ashulia, Dhaka.",
    "clientLiaison": "Md. Arifuzzaman, Director",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Clothing Carnivals Ltd., situated at North Gazirchat, Aliya Madrasha Road, Ashulia, Dhaka.. Operational coordination managed through Md. Arifuzzaman, Director.",
    "fullDetails": {
      "liaisonName": "Md. Arifuzzaman, Director",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "North Gazirchat, Aliya Madrasha Road, Ashulia, Dhaka.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-officer-walkie.jpg",
    "tags": [
      "Industrial",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #12"
  },
  {
    "id": "client-13",
    "serialNumber": 13,
    "clientName": "Euro Printing Industries (pvt.) Ltd.",
    "category": "Packaging & Accessories",
    "location": "Baipail, Ashulia, Savar, Dhaka.",
    "clientLiaison": "Md. A.Salam, Manager",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Euro Printing Industries (pvt.) Ltd., situated at Baipail, Ashulia, Savar, Dhaka.. Operational coordination managed through Md. A.Salam, Manager.",
    "fullDetails": {
      "liaisonName": "Md. A.Salam, Manager",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "Baipail, Ashulia, Savar, Dhaka.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-guard-squad-1.jpg",
    "tags": [
      "Packaging",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #13"
  },
  {
    "id": "client-14",
    "serialNumber": 14,
    "clientName": "Everrich Industries Ltd.",
    "category": "Industrial & RMG",
    "location": "Altaf Nagar, Durgapur, Zirabo, Ashulia, Dhaka.",
    "clientLiaison": "Chiu Chia Chi, Director",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Everrich Industries Ltd., situated at Altaf Nagar, Durgapur, Zirabo, Ashulia, Dhaka.. Operational coordination managed through Chiu Chia Chi, Director.",
    "fullDetails": {
      "liaisonName": "Chiu Chia Chi, Director",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "Altaf Nagar, Durgapur, Zirabo, Ashulia, Dhaka.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-guard-parade.jpg",
    "tags": [
      "Industrial",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #14"
  },
  {
    "id": "client-15",
    "serialNumber": 15,
    "clientName": "Excellent Sweaters Ltd.",
    "category": "Industrial & RMG",
    "location": "Plot-195, Bengal Plaza-5, Jamgora, Ashulia, Dhaka.",
    "clientLiaison": "Mr. Tipu, Director",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Excellent Sweaters Ltd., situated at Plot-195, Bengal Plaza-5, Jamgora, Ashulia, Dhaka.. Operational coordination managed through Mr. Tipu, Director.",
    "fullDetails": {
      "liaisonName": "Mr. Tipu, Director",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "Plot-195, Bengal Plaza-5, Jamgora, Ashulia, Dhaka.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-female-guards-drill.jpg",
    "tags": [
      "Industrial",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #15"
  },
  {
    "id": "client-16",
    "serialNumber": 16,
    "clientName": "Global Premium Accessories Ltd.",
    "category": "Packaging & Accessories",
    "location": "BSCIC Industrial Estate, Dhamrai, Dhaka.",
    "clientLiaison": "Managing Director",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Global Premium Accessories Ltd., situated at BSCIC Industrial Estate, Dhamrai, Dhaka.. Operational coordination managed through Managing Director.",
    "fullDetails": {
      "liaisonName": "Managing Director",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "BSCIC Industrial Estate, Dhamrai, Dhaka.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-officer-walkie.jpg",
    "tags": [
      "Packaging",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #16"
  },
  {
    "id": "client-17",
    "serialNumber": 17,
    "clientName": "Golden Union Leather Products Ltd.",
    "category": "Industrial & RMG",
    "location": "Alanur Tower, North Gazirchat, Ashulia, Savar, Dhaka-1349",
    "clientLiaison": "Md. Nazmul Islam, Accounts Manager",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Golden Union Leather Products Ltd., situated at Alanur Tower, North Gazirchat, Ashulia, Savar, Dhaka-1349. Operational coordination managed through Md. Nazmul Islam, Accounts Manager.",
    "fullDetails": {
      "liaisonName": "Md. Nazmul Islam, Accounts Manager",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "Alanur Tower, North Gazirchat, Ashulia, Savar, Dhaka-1349",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-guard-squad-1.jpg",
    "tags": [
      "Industrial",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #17"
  },
  {
    "id": "client-18",
    "serialNumber": 18,
    "clientName": "Hyun Apparels Ltd.",
    "category": "Industrial & RMG",
    "location": "Bengal Plaza-5, Jamgora, Ashulia, Dhaka.",
    "clientLiaison": "Md. Hasan, Admin Manager",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Hyun Apparels Ltd., situated at Bengal Plaza-5, Jamgora, Ashulia, Dhaka.. Operational coordination managed through Md. Hasan, Admin Manager.",
    "fullDetails": {
      "liaisonName": "Md. Hasan, Admin Manager",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "Bengal Plaza-5, Jamgora, Ashulia, Dhaka.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-guard-parade.jpg",
    "tags": [
      "Industrial",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #18"
  },
  {
    "id": "client-19",
    "serialNumber": 19,
    "clientName": "HopYick (BD) Ltd.",
    "category": "EPZ & Special Zones",
    "location": "44-46, Dhaka EPZ (West), Ganakbari, Savar, Dhaka.",
    "clientLiaison": "Md. Shofiqur Rahman, Admin Manager",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at HopYick (BD) Ltd., situated at 44-46, Dhaka EPZ (West), Ganakbari, Savar, Dhaka.. Operational coordination managed through Md. Shofiqur Rahman, Admin Manager.",
    "fullDetails": {
      "liaisonName": "Md. Shofiqur Rahman, Admin Manager",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "44-46, Dhaka EPZ (West), Ganakbari, Savar, Dhaka.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-female-guards-drill.jpg",
    "tags": [
      "EPZ",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #19"
  },
  {
    "id": "client-20",
    "serialNumber": 20,
    "clientName": "Hyopshin Company Ltd.",
    "category": "EPZ & Special Zones",
    "location": "Plot# 88-92, DEPZ, Ganakbari, Savar, Dhaka-1349.",
    "clientLiaison": "Gun Suck Park, Director",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Hyopshin Company Ltd., situated at Plot# 88-92, DEPZ, Ganakbari, Savar, Dhaka-1349.. Operational coordination managed through Gun Suck Park, Director.",
    "fullDetails": {
      "liaisonName": "Gun Suck Park, Director",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "Plot# 88-92, DEPZ, Ganakbari, Savar, Dhaka-1349.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-officer-walkie.jpg",
    "tags": [
      "EPZ",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #20"
  },
  {
    "id": "client-21",
    "serialNumber": 21,
    "clientName": "Hyopshin Company Ltd. (Unit-2)",
    "category": "EPZ & Special Zones",
    "location": "Plot# 21-24, DEPZ, Ganakbari, Savar, Dhaka-1349.",
    "clientLiaison": "Gun Suck Park, Director",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Hyopshin Company Ltd. (Unit-2), situated at Plot# 21-24, DEPZ, Ganakbari, Savar, Dhaka-1349.. Operational coordination managed through Gun Suck Park, Director.",
    "fullDetails": {
      "liaisonName": "Gun Suck Park, Director",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "Plot# 21-24, DEPZ, Ganakbari, Savar, Dhaka-1349.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-guard-squad-1.jpg",
    "tags": [
      "EPZ",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #21"
  },
  {
    "id": "client-22",
    "serialNumber": 22,
    "clientName": "I-mart Engineering Ltd.",
    "category": "Engineering & Heavy",
    "location": "Glora, Saturia, Manikgonj.",
    "clientLiaison": "Md. Shamim, Manager",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at I-mart Engineering Ltd., situated at Glora, Saturia, Manikgonj.. Operational coordination managed through Md. Shamim, Manager.",
    "fullDetails": {
      "liaisonName": "Md. Shamim, Manager",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "Glora, Saturia, Manikgonj.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-guard-parade.jpg",
    "tags": [
      "Engineering",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #22"
  },
  {
    "id": "client-23",
    "serialNumber": 23,
    "clientName": "ISC Enterprise (BD) Ltd.",
    "category": "Engineering & Heavy",
    "location": "Plot# B-25, BSCIC Industrial Area, Dhamrai, Dhaka.",
    "clientLiaison": "Mrs. Rabeya, Factory Manager",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at ISC Enterprise (BD) Ltd., situated at Plot# B-25, BSCIC Industrial Area, Dhamrai, Dhaka.. Operational coordination managed through Mrs. Rabeya, Factory Manager.",
    "fullDetails": {
      "liaisonName": "Mrs. Rabeya, Factory Manager",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "Plot# B-25, BSCIC Industrial Area, Dhamrai, Dhaka.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-female-guards-drill.jpg",
    "tags": [
      "Engineering",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #23"
  },
  {
    "id": "client-24",
    "serialNumber": 24,
    "clientName": "Kaifeng Textile Ltd.",
    "category": "Industrial & RMG",
    "location": "Hemayetpur, Savar, Dhaka.",
    "clientLiaison": "Md. Salauddin, General Manager",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Kaifeng Textile Ltd., situated at Hemayetpur, Savar, Dhaka.. Operational coordination managed through Md. Salauddin, General Manager.",
    "fullDetails": {
      "liaisonName": "Md. Salauddin, General Manager",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "Hemayetpur, Savar, Dhaka.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-officer-walkie.jpg",
    "tags": [
      "Industrial",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #24"
  },
  {
    "id": "client-25",
    "serialNumber": 25,
    "clientName": "Khadiza Knitting",
    "category": "Industrial & RMG",
    "location": "Bhabanipur, Kashimpur, Gazipur, Dhaka.",
    "clientLiaison": "Md. Ratan Mia, Managing Partner",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Khadiza Knitting, situated at Bhabanipur, Kashimpur, Gazipur, Dhaka.. Operational coordination managed through Md. Ratan Mia, Managing Partner.",
    "fullDetails": {
      "liaisonName": "Md. Ratan Mia, Managing Partner",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "Bhabanipur, Kashimpur, Gazipur, Dhaka.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-guard-squad-1.jpg",
    "tags": [
      "Industrial",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #25"
  },
  {
    "id": "client-26",
    "serialNumber": 26,
    "clientName": "Khadiza Knitting (Unit-2)",
    "category": "Industrial & RMG",
    "location": "Kashimpur, Gazipur, Dhaka.",
    "clientLiaison": "Md. Ratan Mia, Managing Partner",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Khadiza Knitting (Unit-2), situated at Kashimpur, Gazipur, Dhaka.. Operational coordination managed through Md. Ratan Mia, Managing Partner.",
    "fullDetails": {
      "liaisonName": "Md. Ratan Mia, Managing Partner",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "Kashimpur, Gazipur, Dhaka.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-guard-parade.jpg",
    "tags": [
      "Industrial",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #26"
  },
  {
    "id": "client-27",
    "serialNumber": 27,
    "clientName": "Legend Trims Ltd.",
    "category": "Packaging & Accessories",
    "location": "Ramjan Market, Bamnertek, Nishatnagar, Turag, Dhaka-1230.",
    "clientLiaison": "Shuvo Mortuza, Managing Director",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Legend Trims Ltd., situated at Ramjan Market, Bamnertek, Nishatnagar, Turag, Dhaka-1230.. Operational coordination managed through Shuvo Mortuza, Managing Director.",
    "fullDetails": {
      "liaisonName": "Shuvo Mortuza, Managing Director",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "Ramjan Market, Bamnertek, Nishatnagar, Turag, Dhaka-1230.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-female-guards-drill.jpg",
    "tags": [
      "Packaging",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #27"
  },
  {
    "id": "client-28",
    "serialNumber": 28,
    "clientName": "Land Area",
    "category": "Commercial & Estates",
    "location": "Doshaid, Ashulia, Savar, Dhaka",
    "clientLiaison": "Sufia Ahmed, Owner",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Land Area, situated at Doshaid, Ashulia, Savar, Dhaka. Operational coordination managed through Sufia Ahmed, Owner.",
    "fullDetails": {
      "liaisonName": "Sufia Ahmed, Owner",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "Doshaid, Ashulia, Savar, Dhaka",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-officer-walkie.jpg",
    "tags": [
      "Commercial",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #28"
  },
  {
    "id": "client-29",
    "serialNumber": 29,
    "clientName": "Llano (BD) Ltd.",
    "category": "Industrial & RMG",
    "location": "Gorat, East Narshinghapur, Savar, Dhaka.",
    "clientLiaison": "Md. Kalam, General Manager",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Llano (BD) Ltd., situated at Gorat, East Narshinghapur, Savar, Dhaka.. Operational coordination managed through Md. Kalam, General Manager.",
    "fullDetails": {
      "liaisonName": "Md. Kalam, General Manager",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "Gorat, East Narshinghapur, Savar, Dhaka.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-guard-squad-1.jpg",
    "tags": [
      "Industrial",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #29"
  },
  {
    "id": "client-30",
    "serialNumber": 30,
    "clientName": "Mark Packaging & Accessories Ltd.",
    "category": "Packaging & Accessories",
    "location": "Ramjan Market, Bamnertek, Nishatnagar, Turag, Dhaka-1230.",
    "clientLiaison": "Shuvo Mortuza, Managing Director",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Mark Packaging & Accessories Ltd., situated at Ramjan Market, Bamnertek, Nishatnagar, Turag, Dhaka-1230.. Operational coordination managed through Shuvo Mortuza, Managing Director.",
    "fullDetails": {
      "liaisonName": "Shuvo Mortuza, Managing Director",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "Ramjan Market, Bamnertek, Nishatnagar, Turag, Dhaka-1230.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-guard-parade.jpg",
    "tags": [
      "Packaging",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #30"
  },
  {
    "id": "client-31",
    "serialNumber": 31,
    "clientName": "Mark Ice Cream",
    "category": "Agro & Food",
    "location": "BSCIC Industrial Estate, Dhamrai, Dhaka",
    "clientLiaison": "Md. Kabir, Managing Director",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Mark Ice Cream, situated at BSCIC Industrial Estate, Dhamrai, Dhaka. Operational coordination managed through Md. Kabir, Managing Director.",
    "fullDetails": {
      "liaisonName": "Md. Kabir, Managing Director",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "BSCIC Industrial Estate, Dhamrai, Dhaka",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-female-guards-drill.jpg",
    "tags": [
      "Agro",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #31"
  },
  {
    "id": "client-32",
    "serialNumber": 32,
    "clientName": "Mas Lace & Fabrics Ltd.",
    "category": "Industrial & RMG",
    "location": "Goalbatan, Kaliakoir, Gazipur.",
    "clientLiaison": "Md. Washim Rana, Deputy Manager",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Mas Lace & Fabrics Ltd., situated at Goalbatan, Kaliakoir, Gazipur.. Operational coordination managed through Md. Washim Rana, Deputy Manager.",
    "fullDetails": {
      "liaisonName": "Md. Washim Rana, Deputy Manager",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "Goalbatan, Kaliakoir, Gazipur.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-officer-walkie.jpg",
    "tags": [
      "Industrial",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #32"
  },
  {
    "id": "client-33",
    "serialNumber": 33,
    "clientName": "Mac Printing and Garments Accessories Ltd.",
    "category": "Packaging & Accessories",
    "location": "Cantonment Road, Zirabo, Ashulia, Dhaka",
    "clientLiaison": "Md. Salim-Al-Mamun, Managing Director",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Mac Printing and Garments Accessories Ltd., situated at Cantonment Road, Zirabo, Ashulia, Dhaka. Operational coordination managed through Md. Salim-Al-Mamun, Managing Director.",
    "fullDetails": {
      "liaisonName": "Md. Salim-Al-Mamun, Managing Director",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "Cantonment Road, Zirabo, Ashulia, Dhaka",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-guard-squad-1.jpg",
    "tags": [
      "Packaging",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #33"
  },
  {
    "id": "client-34",
    "serialNumber": 34,
    "clientName": "Pack nd Package Ltd.",
    "category": "Packaging & Accessories",
    "location": "Baliakhola, Ghior, Manikgonj.",
    "clientLiaison": "Alok Sen Gupta, Managing Director",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Pack nd Package Ltd., situated at Baliakhola, Ghior, Manikgonj.. Operational coordination managed through Alok Sen Gupta, Managing Director.",
    "fullDetails": {
      "liaisonName": "Alok Sen Gupta, Managing Director",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "Baliakhola, Ghior, Manikgonj.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-guard-parade.jpg",
    "tags": [
      "Packaging",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #34"
  },
  {
    "id": "client-35",
    "serialNumber": 35,
    "clientName": "Pullman Knitwear Ltd.",
    "category": "Industrial & RMG",
    "location": "Unique, Ashulia, Savar, Dhaka.",
    "clientLiaison": "Md. Zobbar, Admin Manager",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Pullman Knitwear Ltd., situated at Unique, Ashulia, Savar, Dhaka.. Operational coordination managed through Md. Zobbar, Admin Manager.",
    "fullDetails": {
      "liaisonName": "Md. Zobbar, Admin Manager",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "Unique, Ashulia, Savar, Dhaka.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-female-guards-drill.jpg",
    "tags": [
      "Industrial",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #35"
  },
  {
    "id": "client-36",
    "serialNumber": 36,
    "clientName": "PLN Construction Ltd.",
    "category": "Engineering & Heavy",
    "location": "Cumilla BSCIC, Cumilla",
    "clientLiaison": "Mr. Rajan, Project Planner",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at PLN Construction Ltd., situated at Cumilla BSCIC, Cumilla. Operational coordination managed through Mr. Rajan, Project Planner.",
    "fullDetails": {
      "liaisonName": "Mr. Rajan, Project Planner",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "Cumilla BSCIC, Cumilla",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-officer-walkie.jpg",
    "tags": [
      "Engineering",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #36"
  },
  {
    "id": "client-37",
    "serialNumber": 37,
    "clientName": "RAS Agro Industries Ltd.",
    "category": "Agro & Food",
    "location": "Plot-B/21, BSCIC Industrial Estate, Dhamrai, Dhaka.",
    "clientLiaison": "Md. Abu Taleb, CEO",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at RAS Agro Industries Ltd., situated at Plot-B/21, BSCIC Industrial Estate, Dhamrai, Dhaka.. Operational coordination managed through Md. Abu Taleb, CEO.",
    "fullDetails": {
      "liaisonName": "Md. Abu Taleb, CEO",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "Plot-B/21, BSCIC Industrial Estate, Dhamrai, Dhaka.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-guard-squad-1.jpg",
    "tags": [
      "Agro",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #37"
  },
  {
    "id": "client-38",
    "serialNumber": 38,
    "clientName": "Rapid Accessories Ltd.",
    "category": "Packaging & Accessories",
    "location": "A-49/6, Middle Ganda, Savar, Dhaka-1340.",
    "clientLiaison": "Mr. Rafiqul Islam Rasel, Director",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Rapid Accessories Ltd., situated at A-49/6, Middle Ganda, Savar, Dhaka-1340.. Operational coordination managed through Mr. Rafiqul Islam Rasel, Director.",
    "fullDetails": {
      "liaisonName": "Mr. Rafiqul Islam Rasel, Director",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "A-49/6, Middle Ganda, Savar, Dhaka-1340.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-guard-parade.jpg",
    "tags": [
      "Packaging",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #38"
  },
  {
    "id": "client-39",
    "serialNumber": 39,
    "clientName": "Rupsha Tower",
    "category": "Commercial & Estates",
    "location": "Chayabithi, Amtolamor, Savar, Dhaka",
    "clientLiaison": "Dr. Md. Ziaul Islam, Chairman",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Rupsha Tower, situated at Chayabithi, Amtolamor, Savar, Dhaka. Operational coordination managed through Dr. Md. Ziaul Islam, Chairman.",
    "fullDetails": {
      "liaisonName": "Dr. Md. Ziaul Islam, Chairman",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "Chayabithi, Amtolamor, Savar, Dhaka",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-female-guards-drill.jpg",
    "tags": [
      "Commercial",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #39"
  },
  {
    "id": "client-40",
    "serialNumber": 40,
    "clientName": "Sailtex Fashion Ltd.",
    "category": "Industrial & RMG",
    "location": "Chowdhury Complex, Purbohati Road, Natunpar, Hemayetpur, Savar, Dhaka.",
    "clientLiaison": "Managing Director",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Sailtex Fashion Ltd., situated at Chowdhury Complex, Purbohati Road, Natunpar, Hemayetpur, Savar, Dhaka.. Operational coordination managed through Managing Director.",
    "fullDetails": {
      "liaisonName": "Managing Director",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "Chowdhury Complex, Purbohati Road, Natunpar, Hemayetpur, Savar, Dhaka.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-officer-walkie.jpg",
    "tags": [
      "Industrial",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #40"
  },
  {
    "id": "client-41",
    "serialNumber": 41,
    "clientName": "SR Knit Fashion",
    "category": "Industrial & RMG",
    "location": "Bhabanipur, Kashimpur, Gazipur Sadar, Gazipur.",
    "clientLiaison": "Md. Hamidur Rahman, Managing Director",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at SR Knit Fashion, situated at Bhabanipur, Kashimpur, Gazipur Sadar, Gazipur.. Operational coordination managed through Md. Hamidur Rahman, Managing Director.",
    "fullDetails": {
      "liaisonName": "Md. Hamidur Rahman, Managing Director",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "Bhabanipur, Kashimpur, Gazipur Sadar, Gazipur.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-guard-squad-1.jpg",
    "tags": [
      "Industrial",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #41"
  },
  {
    "id": "client-42",
    "serialNumber": 42,
    "clientName": "Sweet Agro & Beverage Ltd.",
    "category": "Agro & Food",
    "location": "BSCIC Industrial Estate, Dhamrai, Dhaka.",
    "clientLiaison": "Md: Akbar Hossin, Admin Manager",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Sweet Agro & Beverage Ltd., situated at BSCIC Industrial Estate, Dhamrai, Dhaka.. Operational coordination managed through Md: Akbar Hossin, Admin Manager.",
    "fullDetails": {
      "liaisonName": "Md: Akbar Hossin, Admin Manager",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "BSCIC Industrial Estate, Dhamrai, Dhaka.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-guard-parade.jpg",
    "tags": [
      "Agro",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #42"
  },
  {
    "id": "client-43",
    "serialNumber": 43,
    "clientName": "Sweet Agro & Beverage Ltd. (Unit-2)",
    "category": "Agro & Food",
    "location": "BSCIC Industrial Estate, Dhamrai, Dhaka.",
    "clientLiaison": "Md: Akbar Hossin, Admin Manager",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Sweet Agro & Beverage Ltd. (Unit-2), situated at BSCIC Industrial Estate, Dhamrai, Dhaka.. Operational coordination managed through Md: Akbar Hossin, Admin Manager.",
    "fullDetails": {
      "liaisonName": "Md: Akbar Hossin, Admin Manager",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "BSCIC Industrial Estate, Dhamrai, Dhaka.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-female-guards-drill.jpg",
    "tags": [
      "Agro",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #43"
  },
  {
    "id": "client-44",
    "serialNumber": 44,
    "clientName": "Sweet Agro & Beverage Ltd. (Unit-3)",
    "category": "Agro & Food",
    "location": "BSCIC Industrial Estate, Dhamrai, Dhaka.",
    "clientLiaison": "Md: Akbar Hossin, Admin Manager",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Sweet Agro & Beverage Ltd. (Unit-3), situated at BSCIC Industrial Estate, Dhamrai, Dhaka.. Operational coordination managed through Md: Akbar Hossin, Admin Manager.",
    "fullDetails": {
      "liaisonName": "Md: Akbar Hossin, Admin Manager",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "BSCIC Industrial Estate, Dhamrai, Dhaka.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-officer-walkie.jpg",
    "tags": [
      "Agro",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #44"
  },
  {
    "id": "client-45",
    "serialNumber": 45,
    "clientName": "Sweet Agro & Beverage Ltd. (Unit-4)",
    "category": "Agro & Food",
    "location": "BSCIC Industrial Estate, Dhamrai, Dhaka.",
    "clientLiaison": "Md: Akbar Hossin, Admin Manager",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Sweet Agro & Beverage Ltd. (Unit-4), situated at BSCIC Industrial Estate, Dhamrai, Dhaka.. Operational coordination managed through Md: Akbar Hossin, Admin Manager.",
    "fullDetails": {
      "liaisonName": "Md: Akbar Hossin, Admin Manager",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "BSCIC Industrial Estate, Dhamrai, Dhaka.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-guard-squad-1.jpg",
    "tags": [
      "Agro",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #45"
  },
  {
    "id": "client-46",
    "serialNumber": 46,
    "clientName": "Snow Village Ltd.",
    "category": "Agro & Food",
    "location": "Plot# 05, Noyanogor Main Road, Turag, Dhaka-1230",
    "clientLiaison": "Mrs. Zila, Managing Director",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Snow Village Ltd., situated at Plot# 05, Noyanogor Main Road, Turag, Dhaka-1230. Operational coordination managed through Mrs. Zila, Managing Director.",
    "fullDetails": {
      "liaisonName": "Mrs. Zila, Managing Director",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "Plot# 05, Noyanogor Main Road, Turag, Dhaka-1230",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-guard-parade.jpg",
    "tags": [
      "Agro",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #46"
  },
  {
    "id": "client-47",
    "serialNumber": 47,
    "clientName": "Sustainable Silhouettes Ltd.",
    "category": "Packaging & Accessories",
    "location": "Plot#24, Road# 07, Noyanagar, Turag, Dhaka-1230.",
    "clientLiaison": "Wahid Ahmed, Factory Manager",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Sustainable Silhouettes Ltd., situated at Plot#24, Road# 07, Noyanagar, Turag, Dhaka-1230.. Operational coordination managed through Wahid Ahmed, Factory Manager.",
    "fullDetails": {
      "liaisonName": "Wahid Ahmed, Factory Manager",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "Plot#24, Road# 07, Noyanagar, Turag, Dhaka-1230.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-female-guards-drill.jpg",
    "tags": [
      "Packaging",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #47"
  },
  {
    "id": "client-48",
    "serialNumber": 48,
    "clientName": "Total Gemini Flat Owner Somiti",
    "category": "Commercial & Estates",
    "location": "2/F/7, Mymensingh Road, Shahbagh, Dhaka",
    "clientLiaison": "Nargis Mahmuda, Chairman",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Total Gemini Flat Owner Somiti, situated at 2/F/7, Mymensingh Road, Shahbagh, Dhaka. Operational coordination managed through Nargis Mahmuda, Chairman.",
    "fullDetails": {
      "liaisonName": "Nargis Mahmuda, Chairman",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "2/F/7, Mymensingh Road, Shahbagh, Dhaka",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-officer-walkie.jpg",
    "tags": [
      "Commercial",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #48"
  },
  {
    "id": "client-49",
    "serialNumber": 49,
    "clientName": "Touchstone Apparels",
    "category": "Industrial & RMG",
    "location": "Shoildubi, Bagbari, Kashimpur, Gazipur.",
    "clientLiaison": "Md. Ariful Islam, Managing Director",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Touchstone Apparels, situated at Shoildubi, Bagbari, Kashimpur, Gazipur.. Operational coordination managed through Md. Ariful Islam, Managing Director.",
    "fullDetails": {
      "liaisonName": "Md. Ariful Islam, Managing Director",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "Shoildubi, Bagbari, Kashimpur, Gazipur.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-guard-squad-1.jpg",
    "tags": [
      "Industrial",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #49"
  },
  {
    "id": "client-50",
    "serialNumber": 50,
    "clientName": "Ultra Green Power Industries Ltd.",
    "category": "Engineering & Heavy",
    "location": "92, Shorip Para, Matuail, Jatrabari, Dhaka.",
    "clientLiaison": "Md. Tawhidul Islam, Managing Director",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Ultra Green Power Industries Ltd., situated at 92, Shorip Para, Matuail, Jatrabari, Dhaka.. Operational coordination managed through Md. Tawhidul Islam, Managing Director.",
    "fullDetails": {
      "liaisonName": "Md. Tawhidul Islam, Managing Director",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "92, Shorip Para, Matuail, Jatrabari, Dhaka.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-guard-parade.jpg",
    "tags": [
      "Engineering",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #50"
  },
  {
    "id": "client-51",
    "serialNumber": 51,
    "clientName": "Valent Tech Ltd.",
    "category": "Engineering & Heavy",
    "location": "Plot# S-5, BSCIC Industrial Estate, Dhamrai, Dhaka.",
    "clientLiaison": "Mr. Toufiqul, Managing Director",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Valent Tech Ltd., situated at Plot# S-5, BSCIC Industrial Estate, Dhamrai, Dhaka.. Operational coordination managed through Mr. Toufiqul, Managing Director.",
    "fullDetails": {
      "liaisonName": "Mr. Toufiqul, Managing Director",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "Plot# S-5, BSCIC Industrial Estate, Dhamrai, Dhaka.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-female-guards-drill.jpg",
    "tags": [
      "Engineering",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #51"
  },
  {
    "id": "client-52",
    "serialNumber": 52,
    "clientName": "Valent Tech Ltd. (Unit-2)",
    "category": "Engineering & Heavy",
    "location": "Plot# S-5, BSCIC Industrial Estate, Dhamrai, Dhaka.",
    "clientLiaison": "Mr. Toufiqul, Managing Director",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Valent Tech Ltd. (Unit-2), situated at Plot# S-5, BSCIC Industrial Estate, Dhamrai, Dhaka.. Operational coordination managed through Mr. Toufiqul, Managing Director.",
    "fullDetails": {
      "liaisonName": "Mr. Toufiqul, Managing Director",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "Plot# S-5, BSCIC Industrial Estate, Dhamrai, Dhaka.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-officer-walkie.jpg",
    "tags": [
      "Engineering",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #52"
  },
  {
    "id": "client-53",
    "serialNumber": 53,
    "clientName": "Valent Tech Ltd. (Unit-3)",
    "category": "Engineering & Heavy",
    "location": "Plot# S-5, BSCIC Industrial Estate, Dhamrai, Dhaka.",
    "clientLiaison": "Mr. Toufiqul, Managing Director",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Valent Tech Ltd. (Unit-3), situated at Plot# S-5, BSCIC Industrial Estate, Dhamrai, Dhaka.. Operational coordination managed through Mr. Toufiqul, Managing Director.",
    "fullDetails": {
      "liaisonName": "Mr. Toufiqul, Managing Director",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "Plot# S-5, BSCIC Industrial Estate, Dhamrai, Dhaka.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-guard-squad-1.jpg",
    "tags": [
      "Engineering",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #53"
  },
  {
    "id": "client-54",
    "serialNumber": 54,
    "clientName": "Wooree Apparels Ltd.",
    "category": "Industrial & RMG",
    "location": "B/1, Binod Bayeed, Savar, Dhaka.",
    "clientLiaison": "Md. Shofiq, Account Manager",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Wooree Apparels Ltd., situated at B/1, Binod Bayeed, Savar, Dhaka.. Operational coordination managed through Md. Shofiq, Account Manager.",
    "fullDetails": {
      "liaisonName": "Md. Shofiq, Account Manager",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "B/1, Binod Bayeed, Savar, Dhaka.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-guard-parade.jpg",
    "tags": [
      "Industrial",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #54"
  },
  {
    "id": "client-55",
    "serialNumber": 55,
    "clientName": "Wooree Apparels Ltd. (Unit-2)",
    "category": "Industrial & RMG",
    "location": "B Belma Dairy Farm, Ashulia, Savar, Dhaka.",
    "clientLiaison": "Md. Shofiq, Account Manager",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Wooree Apparels Ltd. (Unit-2), situated at B Belma Dairy Farm, Ashulia, Savar, Dhaka.. Operational coordination managed through Md. Shofiq, Account Manager.",
    "fullDetails": {
      "liaisonName": "Md. Shofiq, Account Manager",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "B Belma Dairy Farm, Ashulia, Savar, Dhaka.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-female-guards-drill.jpg",
    "tags": [
      "Industrial",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #55"
  },
  {
    "id": "client-56",
    "serialNumber": 56,
    "clientName": "Xincheng Metalic Industries Ltd.",
    "category": "Engineering & Heavy",
    "location": "Block# B, House# 27, Road# 04, Holding# 83, Batulia, Turag, Dhaka-1230",
    "clientLiaison": "Asharafuzaman(Shiplu), General Manager",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Xincheng Metalic Industries Ltd., situated at Block# B, House# 27, Road# 04, Holding# 83, Batulia, Turag, Dhaka-1230. Operational coordination managed through Asharafuzaman(Shiplu), General Manager.",
    "fullDetails": {
      "liaisonName": "Asharafuzaman(Shiplu), General Manager",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "Block# B, House# 27, Road# 04, Holding# 83, Batulia, Turag, Dhaka-1230",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-officer-walkie.jpg",
    "tags": [
      "Engineering",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #56"
  },
  {
    "id": "client-57",
    "serialNumber": 57,
    "clientName": "Yu Lee Cap Ltd.",
    "category": "Industrial & RMG",
    "location": "Chitrashail, Kathaltola Bazar, Ashulia, Savar, Dhaka.",
    "clientLiaison": "Md. Dipu, Account Manager",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Yu Lee Cap Ltd., situated at Chitrashail, Kathaltola Bazar, Ashulia, Savar, Dhaka.. Operational coordination managed through Md. Dipu, Account Manager.",
    "fullDetails": {
      "liaisonName": "Md. Dipu, Account Manager",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "Chitrashail, Kathaltola Bazar, Ashulia, Savar, Dhaka.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-guard-squad-1.jpg",
    "tags": [
      "Industrial",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #57"
  },
  {
    "id": "client-58",
    "serialNumber": 58,
    "clientName": "Yu Lee Embroidery Ltd.",
    "category": "Industrial & RMG",
    "location": "Chitrashail, Kathaltola Bazar, Ashulia, Savar, Dhaka.",
    "clientLiaison": "Md. Dipu, Account Manager",
    "serviceType": "Unarmed Manned Guarding & Perimeter Security",
    "description": "Official verified security guarding assignment deployed at Yu Lee Embroidery Ltd., situated at Chitrashail, Kathaltola Bazar, Ashulia, Savar, Dhaka.. Operational coordination managed through Md. Dipu, Account Manager.",
    "fullDetails": {
      "liaisonName": "Md. Dipu, Account Manager",
      "deploymentScope": "24/7 static guard sentry, shift gate attendance, perimeter patrol & emergency firefighting compliance.",
      "verifiedLocation": "Chitrashail, Kathaltola Bazar, Ashulia, Savar, Dhaka.",
      "terms": [
        "Unarmed security guard services with proper security & firefighting training",
        "Full uniform equipment: batons, whistles, torches, transport & umbrellas",
        "Formal Deed of Agreement governance with joint inquiry loss protocol",
        "30 days standard written notice operational protocol"
      ]
    },
    "image": "/images/sssl-guard-parade.jpg",
    "tags": [
      "Industrial",
      "Verified Client",
      "Manned Guarding"
    ],
    "isVerified": true,
    "officialRef": "SSSL Official Profile Entry #58"
  }
];

export const counterStatsData: CounterStatItem[] = [
  {
    id: 'projects-completed',
    label: 'Verified Client Deployments',
    value: 58,
    suffix: '+',
    description: 'Active corporate, industrial, and institutional client assignments in official company portfolio.',
    isVerified: true,
    sourceNote: 'Directly verified from SSSL Official Company Profile client roster.'
  },
  {
    id: 'security-personnel',
    label: 'Years of Corporate Registration',
    value: 15,
    suffix: '+ Years',
    description: 'Duly registered under Bangladesh laws since October 16, 2011 (Reg: C-96185/11).',
    isVerified: true,
    sourceNote: 'Government of Bangladesh incorporation record: 16.10.2011.'
  },
  {
    id: 'supervision-inspections',
    label: 'Supervisor Field Audits',
    value: 100,
    suffix: '%',
    description: 'Routine day and surprise nocturnal inspections conducted across all deployed sites.',
    isVerified: true,
    sourceNote: 'Standard operating policy enforced for all Soldier Security service posts.'
  },
  {
    id: 'response-readiness',
    label: 'Control Room Vigilance',
    value: 24,
    suffix: '/7',
    description: 'Continuous operational monitoring and round-the-clock emergency support.',
    isVerified: true,
    sourceNote: 'Core organizational commitment for uninterrupted client asset protection.'
  }
];

export const industriesData: IndustryItem[] = [
  {
    id: 'industrial-rmg',
    title: 'RMG & Textile Manufacturing',
    description: 'Guarding 20+ prominent garment and textile factories in Savar, Ashulia, Gazipur, and DEPZ.',
    scopePoints: [
      'Shift-change crowd flow & biometric ingress',
      'Export cargo dispatch & seal verification',
      'Perimeter security & fire-hazard patrols',
      'Zero unauthorized material exit control'
    ],
    icon: 'Factory',
    isVerified: true
  },
  {
    id: 'epz-logistics',
    title: 'Export Processing Zones (DEPZ)',
    description: 'Serving key multinational facilities in Dhaka EPZ (West) and Ganakbari industrial clusters.',
    scopePoints: [
      'Stringent EPZ customs gate pass checking',
      'Multinational foreign visitor protocol',
      'Warehouse raw materials protection',
      'Emergency response team coordination'
    ],
    icon: 'Building2',
    isVerified: true
  },
  {
    id: 'packaging-accessories',
    title: 'Packaging, Trims & Accessories',
    description: 'Safeguarding printing, packaging, and accessories manufacturing hubs across Turag and Ashulia.',
    scopePoints: [
      'Inventory dispatch slip tallying',
      'Nocturnal perimeter fence monitoring',
      'Equipment & machinery security',
      'Chemical and flammable inventory care'
    ],
    icon: 'Building',
    isVerified: true
  },
  {
    id: 'agro-food',
    title: 'Agro, Food & Consumer Facilities',
    description: 'Protecting food processing plants, beverage units, and agricultural industries in BSCIC Dhamrai.',
    scopePoints: [
      'Sanitary hygiene compliance gates',
      'Fleet delivery truck tally records',
      'Cold store and warehouse watch',
      'Visitor register & access screening'
    ],
    icon: 'Store',
    isVerified: true
  },
  {
    id: 'engineering-heavy',
    title: 'Heavy Industry & Engineering',
    description: 'Providing robust sentries for metal works, power industries, and construction plazas.',
    scopePoints: [
      'Heavy vehicular weighbridge control',
      'Scrap metal loss prevention',
      'Night searchlight sentry posts',
      'Personal protective equipment enforcement'
    ],
    icon: 'Factory',
    isVerified: true
  },
  {
    id: 'commercial-estates',
    title: 'Commercial Plazas & Residential Estates',
    description: 'Securing multi-story commercial towers, apartment owners societies, and resorts in Dhaka.',
    scopePoints: [
      'Visitor badge sign-in & parking order',
      'Apartment resident peace of mind',
      'Delivery personnel register',
      'Emergency stairwell & roof lockdown'
    ],
    icon: 'Home',
    isVerified: true
  }
];

export const trustCredentials: TrustCredentialItem[] = [
  {
    id: 'cred-01',
    title: 'Certificate of Incorporation',
    issuer: 'Registrar of Joint Stock Companies & Firms (RJSC), Bangladesh',
    year: 'Reg. Date: 16.10.2011',
    licenseNumber: 'Registration No.: C-96185/11',
    status: 'Verified',
    isVerified: true,
    description: 'Soldier Security Services Ltd. is a duly registered limited liability company under the laws of Bangladesh with official registration number C-96185/11, registered on October 16, 2011.'
  },
  {
    id: 'cred-02',
    title: 'Formal Deed of Agreement & Loss Compensation',
    issuer: 'Soldier Security Services Ltd. Legal Framework',
    year: 'Established Standard',
    status: 'Verified',
    isVerified: true,
    description: 'Standard contractual clause committing to full joint inquiries in any irregularity and formal compensation for losses due to theft/burglary following mutual agreement.'
  },
  {
    id: 'cred-03',
    title: 'Standard Guard & Firefighting Training Curriculum',
    issuer: 'SSSL Training Academy & Field Protocol',
    year: 'Mandatory Requirement',
    status: 'Verified',
    isVerified: true,
    description: 'All unarmed guards receive comprehensive training in security operations, access procedures, uniform turnout, and firefighting operations before deployment.'
  },
  {
    id: 'cred-04',
    title: 'Guard Equipment & Uniform Standards',
    issuer: 'SSSL Operational Logistics',
    year: 'Active Protocol',
    status: 'Verified',
    isVerified: true,
    description: 'All guards are equipped with complete branded uniforms and operational items including batons, whistles, torches, transport, and protective gear.'
  }
];

export const careersData: CareerItem[] = [
  {
    id: 'career-01',
    title: 'Security Guard (Manned Guarding)',
    department: 'Field Operations',
    location: 'Savar / Ashulia / Dhamrai / Gazipur / DEPZ',
    employmentType: 'Full-time / Rotational Shifts',
    description: 'Responsible for gate sentry duties, visitor logging, patrol checks, and maintaining discipline across client facilities.',
    requirements: [
      'Minimum education: SSC or equivalent',
      'Physical fitness and minimum height requirement (5 6" preferred)',
      'Clean background check and national ID verification',
      'Prior military, police, or security agency experience is an added advantage'
    ],
    isDemo: false,
    status: 'General Pool'
  },
  {
    id: 'career-02',
    title: 'Field Security Supervisor',
    department: 'Supervisory & Compliance',
    location: 'Dhaka & Adjacent Industrial Zones',
    employmentType: 'Full-time',
    description: 'Conduct day and night surprise visits, manage guard turnout, liaise with client management, and prepare shift reports.',
    requirements: [
      'Minimum 2-3 years supervisory experience in a reputable security firm',
      'Valid motorcycle driving license',
      'Strong leadership, dispute resolution, and incident reporting skills'
    ],
    isDemo: false,
    status: 'General Pool'
  },
  {
    id: 'career-03',
    title: 'CCTV Control Room Operator',
    department: 'Electronic Surveillance',
    location: 'Dhaka Regional Operations',
    employmentType: 'Full-time (Rotational)',
    description: 'Monitor multi-screen video walls, recognize anomalies, log incident timelines, and coordinate with ground sentries.',
    requirements: [
      'HSC or Diploma in Computer / IT',
      'Experience in IP camera software, NVR, and playback archiving',
      'High attention to detail and calm demeanor under pressure'
    ],
    isDemo: false,
    status: 'Draft'
  }
];
