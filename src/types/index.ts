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
  isDraft: boolean; // Flag to indicate unverified/suggested category
  badge?: string;
}

export type ProjectCategory = 
  | 'All Projects'
  | 'Corporate'
  | 'Industrial'
  | 'Commercial'
  | 'Residential'
  | 'Event'
  | 'Access Control';

export interface ProjectItem {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'All Projects'>;
  location: string;
  client: string;
  completionYear: string;
  description: string;
  fullDetails?: {
    challenge?: string;
    deploymentScale?: string;
    solutionHighlights?: string[];
    result?: string;
  };
  image: string;
  tags: string[];
  isDemo: boolean; // Clearly distinguishes demo entries from verified projects
  verifiedDate?: string;
}

export interface LeadershipMember {
  id: string;
  name: string;
  designation: string;
  roleDescription: string;
  bio: string;
  portrait: string;
  credentialsNotes: string; // Transparent note about verified vs placeholder info
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
  status: 'Pending Official Upload' | 'Verified' | 'Under Review';
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
    number: string; // +8801707059684
    chatUrl: string;
    isVerified: boolean; // Pending live verification
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
}
