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
  heroSubheadline: 'Soldier Security Services Ltd. delivers disciplined, reliable, and rigorously trained security personnel for corporate headquarters, industrial complexes, commercial premises, and private residences.',
  aboutOverview: 'Soldier Security Services Ltd. is a dedicated private security solutions provider established in Bangladesh. Built upon the principles of unwavering integrity, tactical discipline, and prompt operational oversight, SSSL provides comprehensive asset protection and personnel security tailored to modern commercial and institutional requirements.',
  mission: 'To deliver steadfast, professional, and vigilant security services that empower organizations and communities to operate safely, confidently, and without compromise.',
  vision: 'To emerge as Bangladesh\'s benchmark private security agency, recognized for disciplined personnel, uncompromising ethical standards, and technology-augmented physical security.',
  coreValues: [
    {
      title: 'Tactical Discipline',
      desc: 'Our personnel undergo rigorous training adhering to established operational standards, ensuring professional conduct at every post.',
      icon: 'ShieldCheck'
    },
    {
      title: 'Uncompromised Integrity',
      desc: 'Trust is our paramount asset. We uphold absolute honesty, transparency, and accountability in every client engagement.',
      icon: 'Lock'
    },
    {
      title: '24/7 Vigilance',
      desc: 'Round-the-clock supervisor patrols, scheduled check-ins, and proactive emergency preparedness to neutralize vulnerabilities.',
      icon: 'Eye'
    },
    {
      title: 'Client-Centric Protection',
      desc: 'Customized security blueprints engineered around your facility’s unique traffic, perimeter, and operational risks.',
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
      desc: 'Deployment of vetted, physically fit, and site-specifically briefed security guards and team leaders.'
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
    chatUrl: 'https://wa.me/8801707059684?text=Hello%20Soldier%20Security%20Services%20Ltd.%2C%20I%20would%20like%20to%20inquire%20about%20your%20security%20services.',
    isVerified: true, // Configured with the supplied number
    note: 'Initial WhatsApp configuration mapped to verified company phone line. Verification pending final message test.'
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
    address: undefined, // Explicitly not provided yet
    isConfigured: false
  },
  messenger: {
    url: undefined, // Subject to Facebook page messaging configuration
    isConfigured: false
  },
  officeAddress: {
    registered: '18/8, Zalasor, Aricha Road, Shimultala',
    city: 'Savar, Dhaka-1340',
    country: 'Bangladesh',
    isVerified: true, // Confirmed via commercial directory registry
    verificationNote: 'Commercial registry address on record. Client can update or supplement branch office addresses at any time.'
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
    bio: 'As Chairman of Soldier Security Services Ltd., Sabina Yasmin steers the company\'s strategic direction, corporate governance, and long-term organizational ethos. Committed to establishing ethical security standards and sustainable operational growth, she ensures the organization remains anchored in institutional credibility and responsive client stewardship.',
    portrait: '/images/leadership-placeholder-chairman.svg',
    credentialsNotes: 'Official executive profile. Detailed personal biography and honorary credentials will be updated upon official submission.',
    isPlaceholderBio: true
  },
  {
    id: 'md-kamal-hossain',
    name: 'Md Kamal Hossain',
    designation: 'Managing Director',
    roleDescription: 'Operational Command, Deployment Excellence & Client Relations',
    bio: 'Md Kamal Hossain provides active executive leadership as the Managing Director of Soldier Security Services Ltd. Focusing on personnel discipline, tactical deployment standards, and rigorous supervisor field inspections, he drives day-to-day operational excellence to guarantee that every client asset is protected by vigilant, dependable professionals.',
    portrait: '/images/leadership-placeholder-md.svg',
    credentialsNotes: 'Official executive profile. Detailed service background and career credentials will be updated upon official submission.',
    isPlaceholderBio: true
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: 'manned-guarding',
    title: 'Manned Guarding Services',
    category: 'Manned Guarding',
    shortDesc: 'Disciplined, uniformed security personnel trained for access control, perimeter watch, and crowd discipline.',
    fullDesc: 'Our manned guarding solutions provide a visible, disciplined deterrent at entrances, gates, and internal security posts. Guards undergo background vetting and customer-service orientation.',
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

// 20+ Detailed Project Entries across diverse sectors
export const projectData: ProjectItem[] = [
  {
    id: 'proj-01',
    title: 'Savar Industrial Garment Hub Security Deployment',
    category: 'Industrial',
    location: 'Savar Industrial Zone, Dhaka',
    client: 'Approved RMG Manufacturing Complex (Confidential)',
    completionYear: '2025',
    description: 'Round-the-clock perimeter guarding, shift-change transit security, and vehicular logistics gate control for a 4,000-worker apparel plant.',
    fullDetails: {
      challenge: 'Managing peak morning and evening shift entry of over 4,000 workers while ensuring zero unauthorized item ingress or export loss.',
      deploymentScale: '24 Security Guards, 2 Supervisors, 2 Metal Detector Screening Lanes',
      solutionHighlights: [
        'Dual-lane biometric and bag screening checkpoint',
        'Loading bay dispatch seal verification protocol',
        'Night thermal perimeter sweeps along boundary wall'
      ],
      result: 'Maintained 100% zero-incident record over 18 consecutive operational months.'
    },
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    tags: ['Industrial', 'Manned Guarding', 'Gate Control'],
    isDemo: true
  },
  {
    id: 'proj-02',
    title: 'Corporate Headquarters Access Management',
    category: 'Corporate',
    location: 'Gulshan-2 Commercial District, Dhaka',
    client: 'Multinational Financial Advisory Firm',
    completionYear: '2025',
    description: 'Premium front-desk concierge security, executive floor visitor vetting, and after-hours keycard surveillance management.',
    fullDetails: {
      challenge: 'High-profile corporate clientele requiring courteous customer service combined with strict anti-tailgating floor access.',
      deploymentScale: '8 Executive Security Officers, 1 Concierge Liaison',
      solutionHighlights: [
        'Digital visitor photo-badging integration',
        'Server room biometric dual-custody escort',
        'Executive parking bay reservation security'
      ],
      result: 'Seamless visitor clearance averaging under 45 seconds with complete audit trails.'
    },
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    tags: ['Corporate', 'Concierge', 'Access Control'],
    isDemo: true
  },
  {
    id: 'proj-03',
    title: 'Ashulia Textile & Dyeing Facility Protection',
    category: 'Industrial',
    location: 'Ashulia, Dhaka',
    client: 'Textile Composite Unit',
    completionYear: '2024',
    description: 'Comprehensive static guarding, raw material stock protection, and chemical store hazard access protocols.',
    fullDetails: {
      challenge: 'Preventing hazardous material exposure and securing valuable yarn and chemical stores across a 15-acre campus.',
      deploymentScale: '18 Security Personnel across 3 rotational shifts',
      solutionHighlights: [
        'Hazardous chemical storage isolation post',
        'Truck weighbridge verification logging',
        'Perimeter infrared motion sensor coordination'
      ],
      result: 'Eliminated stock discrepancies and elevated fire-safety emergency compliance.'
    },
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    tags: ['Industrial', 'Perimeter Watch', 'Material Safety'],
    isDemo: true
  },
  {
    id: 'proj-04',
    title: 'Commercial Tower Multi-Tenant Security System',
    category: 'Commercial',
    location: 'Motijheel Commercial Area, Dhaka',
    client: 'Premier Commercial Plaza',
    completionYear: '2024',
    description: 'Centralized 14-story building security command, turnstile supervision, underground parking traffic flow, and night patrol logs.',
    fullDetails: {
      challenge: 'High-density daily foot traffic spanning banking branches, corporate chambers, and retail ground-floor spaces.',
      deploymentScale: '16 Personnel, 1 Control Room Master Operator',
      solutionHighlights: [
        'Central CCTV monitor desk monitoring 64 cameras',
        'Basement parking token and valet clearance order',
        'Nightly floor-by-floor lockdown checklist verification'
      ],
      result: 'Zero unauthorized breaches and streamlined parking ingress during peak hours.'
    },
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80',
    tags: ['Commercial', 'Multi-Tenant', 'CCTV Monitoring'],
    isDemo: true
  },
  {
    id: 'proj-05',
    title: 'Luxury Residential Gated Enclave Security',
    category: 'Residential',
    location: 'Baridhara Diplomatic Enclave / DOHS',
    client: 'Gated Residential Society Committee',
    completionYear: '2025',
    description: '24/7 boom barrier vehicle inspection, resident RFID tag clearance, domestic helper registration, and quiet neighborhood patrols.',
    fullDetails: {
      challenge: 'High privacy expectations, low noise tolerance, and meticulous courier delivery management for 120 luxury residences.',
      deploymentScale: '12 Residential Guards, 2 Night Mobile Bicycles',
      solutionHighlights: [
        'Intercom pre-clearance for guest vehicle entrance',
        'Pedestrian domestic staff biometric check-in',
        'Silent hourly perimeter foot patrols'
      ],
      result: 'Ranked top residential security satisfaction among neighborhood associations.'
    },
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    tags: ['Residential', 'Gated Community', 'Access Screening'],
    isDemo: true
  },
  {
    id: 'proj-06',
    title: 'International Trade Exhibition & Summit Security',
    category: 'Event',
    location: 'BICC / International Convention City, Dhaka',
    client: 'Chamber of Commerce Expo Committee',
    completionYear: '2024',
    description: '3-day rapid deployment for 15,000 daily visitors, metal detector archways, VIP escort, and rapid crowd dispatch.',
    fullDetails: {
      challenge: 'Surge crowds, dignitary motorcade arrivals, and emergency evacuation clearance in a crowded exhibition hall.',
      deploymentScale: '40 Event Security Officers, 4 Supervisors, 6 Metal Arches',
      solutionHighlights: [
        'Baggage X-ray flow management and physical frisking',
        'VIP Green Room dedicated sentry detachment',
        'Medical emergency evacuation corridor preservation'
      ],
      result: 'Flawless 3-day exhibition without a single security stoppage or overcrowding incident.'
    },
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    tags: ['Event', 'Crowd Management', 'VIP Escort'],
    isDemo: true
  },
  {
    id: 'proj-07',
    title: 'Pharmaceutical Warehouse & Cold Chain Sentry',
    category: 'Industrial',
    location: 'Tongi Industrial Area, Gazipur',
    client: 'National Pharmaceutical Distributor',
    completionYear: '2025',
    description: 'Temperature-sensitive storage perimeter guarding, sealed container dispatch oversight, and zero-tolerance pilferage control.',
    fullDetails: {
      challenge: 'Securing life-saving high-value medications and validating seal numbers on refrigerated transport containers.',
      deploymentScale: '10 Trained Guards with logistics background check',
      solutionHighlights: [
        'Reefer truck dispatch sealing double-signoff',
        'Strict unauthorized personnel entry prevention',
        '24/7 generator backup post watch'
      ],
      result: '100% consignment delivery integrity with verifiable dispatch logs.'
    },
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    tags: ['Industrial', 'Logistics', 'Asset Integrity'],
    isDemo: true
  },
  {
    id: 'proj-08',
    title: 'Banking Branch Network Static Guarding',
    category: 'Commercial',
    location: 'Dhaka Metropolitan (Multiple Branches)',
    client: 'Commercial Private Bank',
    completionYear: '2024',
    description: 'Armed/unarmed sentries at banking halls, cash-counter perimeter security, and ATM booth customer safety vigilance.',
    fullDetails: {
      challenge: 'Maintaining calm customer ambiance while sustaining instantaneous readiness for armed robbery or unruly crowd threats.',
      deploymentScale: '30 Security Guards deployed across 10 branches',
      solutionHighlights: [
        'Silent panic alarm integration knowledge',
        'ATM lobby occupancy limitation enforcement',
        'Cash-in-transit (CIT) van arrival escort'
      ],
      result: 'Zero security incidents during high cash-volume festival seasons.'
    },
    image: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?auto=format&fit=crop&w=800&q=80',
    tags: ['Commercial', 'Financial', 'Manned Guarding'],
    isDemo: true
  },
  {
    id: 'proj-09',
    title: 'Tech Park Server Facility Access Lockdown',
    category: 'Access Control',
    location: 'Kaliakoir Hi-Tech City, Gazipur',
    client: 'Cloud Infrastructure & Data Center',
    completionYear: '2025',
    description: 'Biometric airlock supervision, strict NDA entry logging, anti-camera hardware tagging, and clean-room security standards.',
    fullDetails: {
      challenge: 'Rigorous tier-3 data center compliance where personal electronics and unauthorized bags are strictly forbidden.',
      deploymentScale: '6 High-Security Clearance Guards',
      solutionHighlights: [
        'Airlock mantrap entry protocol enforcement',
        'Visitor electronics storage lockers & seal inspection',
        'Continuous surveillance correlation logging'
      ],
      result: 'Complied with ISO 27001 physical security guidelines with zero audit observations.'
    },
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    tags: ['Access Control', 'Data Center', 'High Security'],
    isDemo: true
  },
  {
    id: 'proj-10',
    title: 'Foreign Mission Residential Compound Protection',
    category: 'Residential',
    location: 'Gulshan Diplomatic Zone, Dhaka',
    client: 'Diplomatic Mission Staff Residences',
    completionYear: '2025',
    description: 'Under-vehicle inspection mirrors, diplomatic guest protocols, perimeter fence alarms, and 24/7 supervisor check-ins.',
    fullDetails: {
      challenge: 'Stringent diplomatic security guidelines, emergency protocol integration, and discreet English-speaking personnel.',
      deploymentScale: '14 Vetted Security Guards, 1 Liaison Officer',
      solutionHighlights: [
        'Under-carriage mirror inspection on all arriving cars',
        'Strict delivery inspection at external guardhouse',
        'Night patrol illumination checks'
      ],
      result: 'Commended by embassy security regional officer for discipline and punctuality.'
    },
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
    tags: ['Residential', 'Diplomatic', 'Perimeter Watch'],
    isDemo: true
  },
  {
    id: 'proj-11',
    title: 'Automotive Distribution Center & Showroom Guarding',
    category: 'Commercial',
    location: 'Tejgaon Industrial Area, Dhaka',
    client: 'Flagship Automobile Dealership',
    completionYear: '2024',
    description: 'Showroom vehicle inventory protection, customer vehicle intake tracking, and after-hours glass perimeter surveillance.',
    fullDetails: {
      challenge: 'Protecting crores worth of luxury display vehicles without obstructing customer walk-ins or test drive dispatch.',
      deploymentScale: '8 Guards, 1 Head Sentry',
      solutionHighlights: [
        'Key custody logbook management for inventory units',
        'Service bay visitor pass clearance',
        'Floodlit night showroom guarding'
      ],
      result: '100% asset safeguarding with zero vehicle transit damage.'
    },
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
    tags: ['Commercial', 'Showroom', 'Asset Integrity'],
    isDemo: true
  },
  {
    id: 'proj-12',
    title: 'Annual General Meeting & Corporate Shareholder Assembly',
    category: 'Event',
    location: 'Radisson Blu Water Garden, Dhaka',
    client: 'Publicly Listed Conglomerate',
    completionYear: '2025',
    description: 'Stage security cordon, shareholder registration queue control, ballot room guard post, and executive motorcade handling.',
    fullDetails: {
      challenge: 'Ensuring orderly conduct among 2,500 shareholders during voting sessions and sensitive agenda presentations.',
      deploymentScale: '28 Event Officers, 2 Chief Marshals',
      solutionHighlights: [
        'Queue segregation for registered voting delegates',
        'Podium and board table perimeter demarcation',
        'Swift de-escalation of vocal grievances'
      ],
      result: 'AGM concluded seamlessly within scheduled timeframe in full order.'
    },
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
    tags: ['Event', 'Corporate AGM', 'Crowd Control'],
    isDemo: true
  },
  {
    id: 'proj-13',
    title: 'Ashulia Inland Container Depot (ICD) Gate Sentry',
    category: 'Industrial',
    location: 'DEPZ / Ashulia Logistics Belt, Dhaka',
    client: 'Inland Logistics & Freight Station',
    completionYear: '2024',
    description: 'Heavy container vehicle entry pass inspection, container lock inspection, and night yard perimeter surveillance.',
    fullDetails: {
      challenge: 'High-volume 40ft container truck maneuvers and securing open freight storage across 20 acres against night intrusion.',
      deploymentScale: '20 Industrial Watchmen, 2 Roving Motorbike Patrols',
      solutionHighlights: [
        'Container seal integrity visual check and log verification',
        'Reflective high-visibility traffic guiding uniforms',
        'Perimeter solar floodlight line monitoring'
      ],
      result: 'Zero container seal tampering instances over 2 years of deployment.'
    },
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    tags: ['Industrial', 'Freight Depot', 'Logistics Guarding'],
    isDemo: true
  },
  {
    id: 'proj-14',
    title: 'International School & Campus Child Safety Security',
    category: 'Commercial',
    location: 'Uttara Model Town, Dhaka',
    client: 'Private International English Medium School',
    completionYear: '2025',
    description: 'Student arrival and drop-off traffic control, authorized guardian pickup card verification, and visitor background checks.',
    fullDetails: {
      challenge: 'High emotional sensitivity and strict prohibition against unauthorized adult contact with school children.',
      deploymentScale: '10 School Security Guards, 2 Female Attendant Sentries',
      solutionHighlights: [
        'Guardian pickup RFID card cross-match',
        'Peak hour school bus queue traffic management',
        'Campus playground perimeter observation'
      ],
      result: '100% child release accuracy with zero parent disputes.'
    },
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
    tags: ['Commercial', 'Campus Safety', 'Access Control'],
    isDemo: true
  },
  {
    id: 'proj-15',
    title: 'Steel Mill & Heavy Fabrication Plant Perimeter Guarding',
    category: 'Industrial',
    location: 'Narayanganj Industrial Corridor',
    client: 'Heavy Steel Re-rolling Mills',
    completionYear: '2024',
    description: 'High-temperature industrial environment protection, scrap metal weighbridge audit, and worker PPE compliance enforcement at gates.',
    fullDetails: {
      challenge: 'Harsh industrial conditions with scrap metal pilferage risks and heavy vehicle movement.',
      deploymentScale: '16 Heavy-Duty Security Guards',
      solutionHighlights: [
        'Gross and tare weight scale verification slips',
        'Driver safety helmet and boot compliance check',
        'Perimeter scrap yard night patrol'
      ],
      result: 'Reduced scrap losses to negligible levels and improved plant gate safety compliance.'
    },
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    tags: ['Industrial', 'Heavy Industry', 'Perimeter Watch'],
    isDemo: true
  },
  {
    id: 'proj-16',
    title: 'Private Hospital & Emergency Wing Security',
    category: 'Commercial',
    location: 'Dhanmondi, Dhaka',
    client: 'Specialized 200-Bed Hospital',
    completionYear: '2025',
    description: 'Emergency ward conflict de-escalation, visitor crowd limits, doctor protection, and ambulance bay clearance.',
    fullDetails: {
      challenge: 'Emotionally charged emergency situations where aggressive family reactions must be defused respectfully without violence.',
      deploymentScale: '18 Trained Hospital Sentries',
      solutionHighlights: [
        'De-escalation trained security personnel',
        'Ambulance ramp immediate clearance protocol',
        'ICU visiting pass strict 1-visitor limitation'
      ],
      result: 'Zero disruption of emergency medical procedures and protection of attending doctors.'
    },
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    tags: ['Commercial', 'Healthcare', 'Crisis De-escalation'],
    isDemo: true
  },
  {
    id: 'proj-17',
    title: 'Luxury Apartment Complex (180 Units) Security Guarding',
    category: 'Residential',
    location: 'Bashundhara R/A, Dhaka',
    client: 'Residential Condominium Owners Association',
    completionYear: '2025',
    description: 'Biometric gate entry, 3-level basement parking security, rooftop leisure zone surveillance, and night perimeter watch.',
    fullDetails: {
      challenge: 'Providing tight security while ensuring effortless entry for 180 resident families, their vehicles, and service staff.',
      deploymentScale: '14 Residential Guards, 1 Facility Security Supervisor',
      solutionHighlights: [
        'Automated vehicle barrier linked to license recognition',
        'Guest parking voucher system',
        'Children playground security monitoring'
      ],
      result: 'Community recognized for zero reported thefts over 24 consecutive months.'
    },
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    tags: ['Residential', 'Condominium', 'Access Control'],
    isDemo: true
  },
  {
    id: 'proj-18',
    title: 'Telecom Tower & Remote BTS Station Vigilance',
    category: 'Access Control',
    location: 'Manikganj & Greater Dhaka Suburbs',
    client: 'National Cellular Network Operator',
    completionYear: '2024',
    description: 'Protection of high-value battery banks, diesel generators, and transmission equipment at 25 unmanned cellular towers.',
    fullDetails: {
      challenge: 'Vandalism and battery theft attempts at isolated rural and suburban telecommunication relay sites.',
      deploymentScale: 'Mobile Quick Response Team (QRT) + Local Caretakers',
      solutionHighlights: [
        'Intrusion alarm sensor relay to central SSSL desk',
        'Rapid response motorcycle patrol response',
        'Diesel generator fueling supervision logs'
      ],
      result: 'Zero network downtime caused by physical intrusion across 25 sites.'
    },
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    tags: ['Access Control', 'Telecom BTS', 'Rapid Response'],
    isDemo: true
  },
  {
    id: 'proj-19',
    title: 'Embassy Cultural Week & Film Festival Protection',
    category: 'Event',
    location: 'National Museum Auditorium, Dhaka',
    client: 'Cultural Exchange Commission',
    completionYear: '2024',
    description: 'Crowd screening, bag inspection with hand-held metal detectors, foreign delegate escort, and ticket queue order.',
    fullDetails: {
      challenge: 'High profile diplomatic visitors mingling with public cultural crowds over a 5-day celebration.',
      deploymentScale: '22 Event Sentries, 2 Female Inspection Officers',
      solutionHighlights: [
        'Double-cordon entry verification checkpoint',
        'Auditorium interior aisle fire-exit supervision',
        'Vetted parking escort for diplomatic vehicles'
      ],
      result: 'Peaceful cultural exchange without safety incidents or queue delays.'
    },
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
    tags: ['Event', 'Cultural Festival', 'VIP Security'],
    isDemo: true
  },
  {
    id: 'proj-20',
    title: 'Corporate Bank Tower Night Surveillance & Lockout Sweep',
    category: 'Corporate',
    location: 'Karwan Bazar Commercial Hub, Dhaka',
    client: 'Financial Services Headquarters',
    completionYear: '2025',
    description: 'After-hours internal sweeps, data room lock verification, clean desk audit enforcement, and overnight external sentry watch.',
    fullDetails: {
      challenge: 'Protecting sensitive client dossiers, currency counting rooms, and preventing unauthorized overnight stay.',
      deploymentScale: '8 Night Security Officers, 1 Shift Captain',
      solutionHighlights: [
        'Hourly barcode checkpoint scanning at all emergency stairwells',
        'Server room thermal and water leakage observation',
        'Executive office door seal inspections'
      ],
      result: 'Total peace of mind for management with detailed morning patrol logs.'
    },
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80',
    tags: ['Corporate', 'Night Surveillance', 'Floor Lockdown'],
    isDemo: true
  },
  {
    id: 'proj-21',
    title: 'Food & Beverage Processing Facility Gate Operations',
    category: 'Industrial',
    location: 'Dhamrai Agro-Industrial Area, Dhaka',
    client: 'FMCG Food Processing Plant',
    completionYear: '2025',
    description: 'Hygiene gate check, raw material vegetable and grain delivery inspection, and perimeter surveillance.',
    fullDetails: {
      challenge: 'Enforcing strict sanitary head-cover and hand sanitation rules at all factory worker entrance gates.',
      deploymentScale: '12 Industrial Guards, 1 Quality Gatekeeper',
      solutionHighlights: [
        'Sanitation compliance checkpoint before locker room entry',
        'Delivery truck temperature log recording',
        'Perimeter bio-security perimeter check'
      ],
      result: 'Zero contamination incident and full adherence to international food processing audits.'
    },
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    tags: ['Industrial', 'Food Processing', 'Hygiene Gate'],
    isDemo: true
  },
  {
    id: 'proj-22',
    title: 'Mega Infrastructure Construction Material Depot',
    category: 'Industrial',
    location: 'Aricha Highway Corridor, Savar',
    client: 'Civil Engineering Infrastructure Contractor',
    completionYear: '2025',
    description: 'Safeguarding heavy machinery, rebar rod stacks, fuel diesel storage, and 24/7 highway perimeter watch.',
    fullDetails: {
      challenge: 'Sprawling outdoor storage yard exposed to highway transit and potential nighttime fuel and metal theft.',
      deploymentScale: '14 Heavy Yard Watchmen, Guard Dogs Liaison (where permitted)',
      solutionHighlights: [
        'Fuel bowser dip-stick and dispenser meter security logs',
        'Perimeter high-intensity searchlight posts',
        'Material gate-pass counterfoil verification'
      ],
      result: 'Zero unauthorized fuel draw and complete rebar material inventory reconciliation.'
    },
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=800&q=80',
    tags: ['Industrial', 'Construction Depot', 'Material Safeguard'],
    isDemo: true
  }
];

export const counterStatsData: CounterStatItem[] = [
  {
    id: 'projects-completed',
    label: 'Demonstrated Deployments',
    value: 22,
    suffix: '+',
    description: 'Portfolio projects across corporate, industrial, and residential sectors.',
    isVerified: false,
    sourceNote: 'Includes sample portfolio assignments for client review. Real operational metrics will be calibrated upon verified deployment audit.'
  },
  {
    id: 'security-personnel',
    label: 'Trained Personnel Pool',
    value: 150,
    suffix: '+',
    description: 'Vetted security guards, supervisors, and patrol officers available for assignment.',
    isVerified: false,
    sourceNote: 'Representative operational capacity placeholder pending official payroll count.'
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
    id: 'corporate-offices',
    title: 'Corporate Headquarters & IT Parks',
    description: 'Polished front-desk sentries, badge access controls, visitor sign-in desks, and executive safety.',
    scopePoints: [
      'Visitor badge logging & anti-tailgating',
      'Confidential document & server room safeguards',
      'Polished and courteous customer interaction',
      'After-hours floor-by-floor lockdown'
    ],
    icon: 'Building',
    isVerified: true
  },
  {
    id: 'industrial-manufacturing',
    title: 'Industrial Plants & Garment Factories',
    description: 'Heavy perimeter guarding, shift-change crowd control, material gate passes, and fire-safety support.',
    scopePoints: [
      'Large workforce entry and exit screening',
      'Warehouse inventory and raw material protection',
      'Vehicle loading and dispatch seal verification',
      'Emergency fire and disaster evacuation leadership'
    ],
    icon: 'Factory',
    isVerified: true
  },
  {
    id: 'commercial-retail',
    title: 'Commercial Plazas & Shopping Centers',
    description: 'High-visibility deterrence, baggage screening, loss prevention, and parking traffic order.',
    scopePoints: [
      'Customer-friendly presence preventing shoplifting',
      'Underground parking order and valet lanes',
      'Lost-and-found and dispute mediation',
      'Closing hours cash-transit escort'
    ],
    icon: 'Store',
    isVerified: true
  },
  {
    id: 'residential-societies',
    title: 'Gated Communities & Luxury Apartments',
    description: 'Resident peace of mind, guest verification, courier handling, and night patrol rounds.',
    scopePoints: [
      'Vehicle boom barrier and intercom confirmation',
      'Domestic worker and service staff registration',
      'Children play zone vigilance',
      'Quiet nocturnal perimeter watch'
    ],
    icon: 'Home',
    isVerified: true
  },
  {
    id: 'institutional-education',
    title: 'Educational Institutions & Hospitals',
    description: 'Protective child safety protocols, hospital emergency dispute de-escalation, and parking clearance.',
    scopePoints: [
      'Strict guardian release verification',
      'Emergency room crowd control',
      'Ambulance and drop-off lane maintenance',
      'Zero-tolerance campus substance prohibition'
    ],
    icon: 'GraduationCap',
    isVerified: true
  },
  {
    id: 'events-summits',
    title: 'Events, AGMs & Public Exhibitions',
    description: 'Temporary surge security detachments, metal arch gates, VIP protection, and crowd guidance.',
    scopePoints: [
      'Fast-throughput metal detector archways',
      'VIP guest room cordon and motorcade guide',
      'Emergency evacuation pathway assurance',
      'Coordinated dispatch with local police'
    ],
    icon: 'PartyPopper',
    isVerified: true
  }
];

export const trustCredentials: TrustCredentialItem[] = [
  {
    id: 'cred-01',
    title: 'Private Security Agency License',
    issuer: 'Ministry of Home Affairs / Government of Bangladesh',
    year: 'Official Registration',
    licenseNumber: 'Pending Upload of Official Reg. No.',
    status: 'Pending Official Upload',
    isVerified: false,
    description: 'Operating under regulatory standards for private security service providers in Bangladesh. Official certificate document will be displayed here upon receipt.'
  },
  {
    id: 'cred-02',
    title: 'Certificate of Incorporation',
    issuer: 'Registrar of Joint Stock Companies & Firms (RJSC), Bangladesh',
    year: 'Official Company Record',
    status: 'Pending Official Upload',
    isVerified: false,
    description: 'Registered private limited company: Soldier Security Services Ltd. Official RJSC registration documentation in company archive.'
  },
  {
    id: 'cred-03',
    title: 'Standard Guard Training Curriculum',
    issuer: 'SSSL Internal Training Academy & Field Protocol',
    year: 'Continuous Program',
    status: 'Verified',
    isVerified: true,
    description: 'Rigorous drills covering drill & discipline, physical fitness, fire extinguisher operation, customer courtesy, and incident logging.'
  },
  {
    id: 'cred-04',
    title: '24/7 Operational Field Supervision Protocol',
    issuer: 'SSSL Quality Assurance Division',
    year: 'Enforced Daily',
    status: 'Verified',
    isVerified: true,
    description: 'Mandatory surprise inspections by roving supervisors to audit guard alertness, logbooks, and uniform turnout.'
  }
];

export const careersData: CareerItem[] = [
  {
    id: 'career-01',
    title: 'Security Guard (Manned Guarding)',
    department: 'Field Operations',
    location: 'Dhaka / Savar / Ashulia / Gazipur',
    employmentType: 'Full-time / Rotational Shifts',
    description: 'Responsible for gate sentry duties, visitor logging, patrol checks, and maintaining discipline across client facilities.',
    requirements: [
      'Minimum education: SSC or equivalent',
      'Physical fitness and minimum height requirement (5\' 6" preferred)',
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
