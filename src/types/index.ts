export type ServiceCategory = 
  | 'Manned Guarding'
  | 'Corporate & Office'
  | 'Industrial & Commercial'
  | 'Residential Security'
  | 'Event Security'
  | 'Access Control & Surveillance'
  | 'Security Supervision'
  | 'Risk Assessment';

export interface ServiceItem {
  id: string;
  title: string;
  category: ServiceCategory;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  icon: string;
  isDraft: boolean;
  badge?: string;
}

export type ProjectCategory = 
  | 'All Projects'
  | 'Industrial & RMG'
  | 'EPZ & Special Zones'
  | 'Packaging & Accessories'
  | 'Agro & Food'
  | 'Engineering & Heavy'
  | 'Commercial & Estates';

export interface ProjectItem {
  id: string;
  serialNumber: number;
  clientName: string;
  category: Exclude<ProjectCategory, 'All Projects'>;
  location: string;
  clientLiaison: string;
  serviceType: string;
  description: string;
  fullDetails?: {
    liaisonName: string;
    deploymentScope?: string;
    verifiedLocation: string;
    terms?: string[];
  };
  image: string;
  tags: string[];
  isVerified: boolean;
  officialRef: string;
}

export interface LeadershipMember {
  id: string;
  name: string;
  designation: string;
  roleDescription: string;
  bio: string;
  portrait: string;
  credentialsNotes: string;
  isPlaceholderBio: boolean;
}

export interface CounterStatItem {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  description: string;
  isVerified: boolean;
  sourceNote: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  scopePoints: string[];
  icon: string;
  isVerified: boolean;
}

export interface CareerItem {
  id: string;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  description: string;
  requirements: string[];
  isDemo: boolean;
  status: 'Open' | 'General Pool' | 'Draft';
}

export interface TrustCredentialItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  licenseNumber?: string;
  status: 'Verified' | 'Pending Official Upload' | 'Under Review';
  isVerified: boolean;
  description: string;
}

export interface ContactChannel {
  phone: {
    raw: string;
    formatted: string;
    telLink: string;
    isVerified: boolean;
  };
  whatsapp: {
    number: string;
    chatUrl: string;
    isVerified: boolean;
    note: string;
  };
  facebook: {
    url: string;
    label: string;
    isVerified: boolean;
  };
  instagram: {
    url?: string;
    isConfigured: boolean;
  };
  email: {
    address?: string;
    isConfigured: boolean;
  };
  messenger: {
    url?: string;
    isConfigured: boolean;
  };
  officeAddress: {
    registered: string;
    city: string;
    country: string;
    registrationNo: string;
    dateOfRegistration: string;
    isVerified: boolean;
    verificationNote: string;
  };
  businessHours: {
    ops: string;
    admin: string;
  };
}

export interface SiteMeta {
  companyName: string;
  shortName: string;
  tagline: string;
  heroHeadline: string;
  heroTypingPhrases: string[];
  heroSubheadline: string;
  aboutOverview: string;
  mission: string;
  vision: string;
  coreValues: { title: string; desc: string; icon: string }[];
  operationalApproach: { step: string; title: string; desc: string }[];
  pdfProfileUrl: string;
  pdfDownloadFilename: string;
}
