import { Industry } from '../types';

export const INDUSTRIES: Industry[] = [
  {
    id: 'steel-plants',
    title: 'Integrated & Secondary Steel Plants',
    subtitle: 'Meltshop secondary metallurgy and billet production',
    description: 'Steelmaking facilities utilizing induction furnaces, electric arc furnaces (EAF), secondary refining stations, and continuous casting routes to produce high-grade billets, blooms, and ingots.',
    relevantEquipment: [
      'Ladle Refining Furnace (LRF)',
      'Continuous Casting Machine (CCM)',
      'AOD Decarburization Equipment',
      'Heavy Ladle Cranes',
      'Ladle Preheaters'
    ],
    applicationScope: 'Documented Equipment Alignment',
    keyBenefits: [
      'Thermal balancing between melting and casting',
      'Chemical composition and inclusion control',
      'Continuous casting strand productivity'
    ]
  },
  {
    id: 'sponge-iron-plants',
    title: 'Sponge Iron (DRI) & Pellet Plants',
    subtitle: 'Continuous raw material feeding and handling',
    description: 'Direct Reduced Iron (DRI) production and charging setups where hot or cold sponge iron pellets must be reliably extracted, conveyed, screened, and continuously fed into melting furnaces.',
    relevantEquipment: [
      'Sponge Iron Feeding Conveyors',
      'Industrial Feeding Conveyors',
      'Magnetic Conveyors',
      'Recuperator Heat Exchangers'
    ],
    applicationScope: 'Documented Equipment Alignment',
    keyBenefits: [
      'Heavy-duty abrasion resistance for hard DRI pellets',
      'Controlled feed rates to stabilize furnace electrical load',
      'Reduced spillage and improved material recovery'
    ]
  },
  {
    id: 'foundries',
    title: 'Ferrous & Non-Ferrous Foundries',
    subtitle: 'Molten metal transfer, pouring, and scrap sorting',
    description: 'Casting foundries producing alloy castings, ductile iron, and steel components requiring precise ladle preheating, clean scrap magnetic handling, and reliable overhead hook service.',
    relevantEquipment: [
      'Ladle Preheaters',
      'EOT Cranes & Power Jib Cranes',
      'Mild Steel Magnetic Conveyors',
      'Electric Chain Hoists'
    ],
    applicationScope: 'Logical Industrial Application',
    keyBenefits: [
      'Thermal shock prevention through controlled ladle preheating',
      'Workstation localized lifting without overhead crane bottlenecks',
      'Scrap and sprue separation'
    ]
  },
  {
    id: 'rolling-mills',
    title: 'Hot Rolling Mills & Section Plants',
    subtitle: 'Rebar, wire rod, and structural profile processing',
    description: 'Rolling mills processing hot continuous-cast billets into finished TMT reinforcement bars, structural angles, channels, and wire rods.',
    relevantEquipment: [
      'Rolling Mill Stands & Pinion Drives',
      'Continuous Casting Machines (Upstream feed)',
      'Metallic Recuperators',
      'EOT Heavy Billet Handling Cranes'
    ],
    applicationScope: 'Documented Equipment Alignment',
    keyBenefits: [
      'High mechanical rigidity under high rolling loads',
      'Waste heat recovery from reheating furnaces',
      'Synchronized billet transfer'
    ]
  },
  {
    id: 'heavy-engineering',
    title: 'Heavy Engineering & Fabrication',
    subtitle: 'Overhead material handling and custom machinery',
    description: 'Manufacturing plants, equipment fabricators, and heavy machinery workshops that require dependable overhead lifting infrastructure and application-tailored machinery.',
    relevantEquipment: [
      'Double Girder EOT Cranes',
      'Gantry & Semi-Gantry Cranes',
      'Crane End Carriage Assemblies',
      'Customized Industrial Equipment'
    ],
    applicationScope: 'Logical Industrial Application',
    keyBenefits: [
      'Proven structural beam and box girder designs',
      'Inching speed precision for delicate assembly fit-ups',
      'High duty classification for round-the-clock service'
    ]
  },
  {
    id: 'metallurgical-refining',
    title: 'Alloy & Stainless Steel Refining',
    subtitle: 'Specialty steel, decarburization, and deep desulphurization',
    description: 'Secondary metallurgical producers aiming for high-spec alloy steels, low-carbon stainless grades, and critical aerospace/forging quality steels.',
    relevantEquipment: [
      'AOD Decarburization Equipment',
      'Powder Ladle Furnaces',
      'Ladle Refining Furnaces',
      'Pollution Control & Fume Exhaust Hoods'
    ],
    applicationScope: 'Documented Equipment Alignment',
    keyBenefits: [
      'Precise gas-ratio blowing for carbon reduction without chromium loss',
      'Deep desulphurization via powder injection',
      'Environmental regulatory compliance through high-efficiency capture'
    ]
  }
];
