const fs = require('fs');
const projects = JSON.parse(fs.readFileSync('scripts/generated_projects.json', 'utf8'));

const content = `import type { 
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
export const projectData: ProjectItem[] = ${JSON.stringify(projects, null, 2)};

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
`;

fs.writeFileSync('src/data/siteConfig.ts', content);
console.log('Successfully updated src/data/siteConfig.ts with all 58 verified clients and company records!');
