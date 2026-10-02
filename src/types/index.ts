export type ProductCategory = 
  | 'steel-metallurgical'
  | 'material-handling'
  | 'cranes-lifting'
  | 'process-auxiliary';

export interface ProductSpec {
  label: string;
  value: string;
  isConfirmed?: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  categoryName: string;
  tagline: string;
  shortDescription: string;
  detailedDescription: string;
  image: string;
  applications: string[];
  features: string[];
  specs: ProductSpec[];
  workingPrinciple: string;
  customizationOptions: string[];
  relatedProductIds: string[];
  isFeatured?: boolean;
}

export interface Industry {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  relevantEquipment: string[];
  applicationScope: 'Documented Equipment Alignment' | 'Inferred Industrial Application' | 'Logical Industrial Application';
  keyBenefits: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Steel Plant' | 'Material Handling' | 'Machinery' | 'Manufacturing' | 'Workshop';
  description: string;
  image: string;
  badge: string;
}

export interface RfqFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  equipmentType: string;
  capacity: string;
  application: string;
  quantity: string;
  deliveryLocation: string;
  timeline: string;
  message: string;
  specificationFile?: File | null;
}
