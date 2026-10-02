import { Product, ProductCategory } from '../types';

export const CATEGORIES: { id: ProductCategory; name: string; description: string; count: number }[] = [
  {
    id: 'steel-metallurgical',
    name: 'Steel & Metallurgical Equipment',
    description: 'Secondary metallurgy refining systems, heating, casting, and thermal conditioning machinery for steel plants.',
    count: 6,
  },
  {
    id: 'material-handling',
    name: 'Material Handling & Conveying',
    description: 'Heavy-duty industrial feeding systems, sponge iron conveyors, and magnetic separation material transfer equipment.',
    count: 5,
  },
  {
    id: 'cranes-lifting',
    name: 'Cranes & Lifting Equipment',
    description: 'Overhead traveling cranes, metallurgical ladle cranes, gantry systems, hoists, and heavy structural end carriages.',
    count: 7,
  },
  {
    id: 'process-auxiliary',
    name: 'Process & Industrial Equipment',
    description: 'Rolling mill lines, ball mills, heat recovery recuperators, and plant environmental pollution control systems.',
    count: 5,
  },
];

export const PRODUCTS: Product[] = [
  // --- STEEL & METALLURGICAL EQUIPMENT ---
  {
    id: 'ladle-refining-furnace',
    slug: 'ladle-refining-furnace',
    name: 'Ladle Refining Furnace (LRF)',
    category: 'steel-metallurgical',
    categoryName: 'Steel & Metallurgical Equipment',
    tagline: 'Secondary metallurgical thermal & chemical trimming unit',
    shortDescription: 'Metallurgical refining equipment designed for controlled heating, desulphurization, degassing, and secondary steelmaking alloy adjustments.',
    detailedDescription: 'The Ladle Refining Furnace (LRF) performs essential secondary metallurgy operations downstream of primary steelmaking furnaces (Induction Furnace or Electric Arc Furnace). It maintains molten metal temperature, allows precise chemical composition trimming, enables alloy additions under inert argon stirring, and reduces inclusion content before continuous casting.',
    image: '/src/assets/images/ladle_refining_furnace_1790961886316.jpg',
    applications: [
      'Secondary steelmaking & alloy trimming in billet / ingot plants',
      'Desulphurization and deoxidation treatment of liquid steel',
      'Thermal buffering between melting furnace and continuous casting machine',
      'Clean steel production for special alloy, structural, and forging grades'
    ],
    features: [
      'Water-cooled tubular furnace roof with fume extraction port',
      'Hydraulic or electromechanical electrode arm lift and regulation system',
      'Integrated bottom argon porous plug connection piping',
      'Alloy feeding chute assembly for bulk and micro additions',
      'Sturdy heavy-duty ladle car / turret support structure'
    ],
    specs: [
      { label: 'Heat Capacity Range', value: '5 Ton – 50+ Ton (Configured to meltshop capacity)', isConfirmed: false },
      { label: 'Transformer Rating', value: 'Custom-matched MVA per cycle speed requirement', isConfirmed: false },
      { label: 'Electrode Operation', value: 'Hydraulic cylinder or AC motor driven electrode masts', isConfirmed: false },
      { label: 'Roof Cooling', value: 'Pressurized water-cooled tubular membrane structure', isConfirmed: false },
      { label: 'Bottom Stirring Medium', value: 'Inert Argon gas via ladle bottom porous plugs', isConfirmed: false }
    ],
    workingPrinciple: 'Molten metal is tapped from the primary furnace into a refractory-lined ladle and transferred to the LRF heating station. Three graphite electrodes strike an arc onto the slag layer, supplying electrical energy to compensate for heat losses and raise melt temperature. Simultaneously, argon gas is purged through porous plugs in the ladle bottom to homogenize melt temperature and chemical composition while synthetic flux additions absorb impurities.',
    customizationOptions: [
      'Twin-arm swivel roof mechanism or single-car ladle transfer design',
      'Automated wire injection feeder integration for calcium-silicon / alloy wires',
      'Dedicated fume exhaust hood with primary bag filter integration',
      'PLC-based supervisory control with electrode consumption optimization'
    ],
    relatedProductIds: ['continuous-casting-machine', 'ladle-preheater', 'ladle-crane', 'ladle-furnace'],
    isFeatured: true,
  },
  {
    id: 'continuous-casting-machine',
    slug: 'continuous-casting-machine',
    name: 'Continuous Casting Machine (CCM)',
    category: 'steel-metallurgical',
    categoryName: 'Steel & Metallurgical Equipment',
    tagline: 'Continuous strand casting for steel billets and blooms',
    shortDescription: 'Precision metallurgical machinery engineered for converting liquid steel into solid semi-finished billets or sections with controlled solidification.',
    detailedDescription: 'Continuous Casting Machines (CCM) eliminate ingot reheating by directly casting liquid steel into continuous solid billets. Built for high mechanical reliability in heavy steelmaking facilities, featuring curved strand design, hydraulic or mechanical mould oscillation, intensive secondary water spray zones, and withdrawal straightener units.',
    image: '/src/assets/images/continuous_casting_machine_1790961899580.jpg',
    applications: [
      'Billet and bloom casting for rebar, wire rod, and structural rolling mills',
      'Medium to high volume secondary steel melting plants',
      'Direct hot-charging link with downstream rolling mill lines'
    ],
    features: [
      'Tundish car with hydraulic or motorized transverse and longitudinal travel',
      'Curved copper mould assembly with high-frequency oscillation mechanism',
      'Secondary cooling chamber with stainless steel spray headers and roller guides',
      'Heavy-duty withdrawal straightener (WD) with pneumatic/hydraulic clamping',
      'Automatic billet cutting torch or hydraulic shear mechanism'
    ],
    specs: [
      { label: 'Machine Type', value: 'Radial curved strand continuous casting machine', isConfirmed: false },
      { label: 'Casting Radius', value: '4.0m / 6.0m / 9.0m (Configured per mill requirement)', isConfirmed: false },
      { label: 'Number of Strands', value: 'Single strand to multi-strand configurations (1 to 4 strands)', isConfirmed: false },
      { label: 'Billet Section Range', value: '80x80 mm up to 200x200 mm (Application dependent)', isConfirmed: false },
      { label: 'Casting Speed', value: 'Variable controlled via AC flux-vector drives', isConfirmed: false }
    ],
    workingPrinciple: 'Liquid steel from the ladle pours via a shroud into the tundish, which distributes steel uniformly to water-cooled copper moulds. An oscillating mechanism prevents the solidified steel shell from sticking to the mould wall. As the strand emerges with a thin solid skin, it travels through secondary cooling roller aprons where high-pressure water mist completes solidification. The straightener withdraws the curved strand, flattens it, and delivers it to cutting units.',
    customizationOptions: [
      'Modular multi-strand configuration based on induction furnace tap cycle',
      'Electromagnetic stirring (EMS) mounting provisions for superior core quality',
      'Rigid or flexible dummy bar storage and insertion system',
      'Automatic length measurement and billet discharge pusher-bank'
    ],
    relatedProductIds: ['ladle-refining-furnace', 'ladle-crane', 'ladle-preheater', 'rolling-mill'],
    isFeatured: true,
  },
  {
    id: 'aod-decarburization-equipment',
    slug: 'aod-decarburization-equipment',
    name: 'AOD Decarburization Equipment',
    category: 'steel-metallurgical',
    categoryName: 'Steel & Metallurgical Equipment',
    tagline: 'Argon Oxygen Decarburization system for stainless & alloy steels',
    shortDescription: 'Specialized metallurgical vessel and gas blending station engineered for precision carbon removal without excessive chromium or alloy oxidation.',
    detailedDescription: 'The Argon Oxygen Decarburization (AOD) vessel is a specialized converter system used in stainless steel and high-alloy metallurgical refining. By diluting oxygen with argon and nitrogen gases blown through submerged side tuyeres, it lowers the partial pressure of carbon monoxide, driving decarburization reactions while conserving expensive alloying elements.',
    image: '/src/assets/images/hero_steel_plant_engineering_1790961873297.jpg',
    applications: [
      'Stainless steel (200, 300, 400 series) refining and carbon reduction',
      'Low-carbon alloy steel and special casting foundry operations',
      'Deep desulphurization and alloy recovery from scrap melts'
    ],
    features: [
      'Heavy trunnion ring and tilting drive mechanism with fail-safe braking',
      'Refractory-lined interchangeable converter vessel shell',
      'Submerged multi-tuyere gas delivery manifold with argon/nitrogen/oxygen regulation',
      'Top lance assembly for oxygen addition and post-combustion control',
      'Gas valve mixing rack with automated mass-flow control instrumentation'
    ],
    specs: [
      { label: 'Vessel Capacity', value: 'Configured per meltshop requirements (e.g. 5T to 30T)', isConfirmed: false },
      { label: 'Tilting Angle', value: '360-degree rotation capability for charging, blowing, and tapping', isConfirmed: false },
      { label: 'Gas Control System', value: 'High-precision mass flow controller valve skid', isConfirmed: false },
      { label: 'Process Gases', value: 'Argon (Ar), Oxygen (O2), Nitrogen (N2), Compressed Air', isConfirmed: false }
    ],
    workingPrinciple: 'Base molten metal from primary melting is charged into the tilted AOD vessel. When returned to vertical blowing position, mixed O2/Ar or O2/N2 gas is injected through submerged tuyeres. The dilution reduces carbon monoxide partial pressure, accelerating decarburization while protecting chromium from slagging. Reductants (silicon/aluminium) are then added for final desulphurization before tapping.',
    customizationOptions: [
      'Custom trunnion drive gear assembly (hydraulic motor or electromechanical drive)',
      'Dual-vessel stand system for rapid vessel changeover during relining',
      'Comprehensive gas mixing skid with remote PLC touchscreen operator desk'
    ],
    relatedProductIds: ['ladle-refining-furnace', 'ladle-preheater', 'continuous-casting-machine'],
    isFeatured: true,
  },
  {
    id: 'ladle-furnace',
    slug: 'ladle-furnace',
    name: 'Industrial Ladle Furnace',
    category: 'steel-metallurgical',
    categoryName: 'Steel & Metallurgical Equipment',
    tagline: 'Standard metallurgical holding & reheating station',
    shortDescription: 'Robust ladle heating unit for holding molten metal temperature, superheating prior to casting, and slag conditioning in steel meltshops.',
    detailedDescription: 'Engineered for continuous duty in steel mills, the Ladle Furnace provides reliable electrical reheating of liquid steel in the transfer ladle. It eliminates temperature drops during delays and ensures uniform casting temperatures.',
    image: '/src/assets/images/ladle_refining_furnace_1790961886316.jpg',
    applications: [
      'Meltshop buffer holding and thermal balancing',
      'Reheating chilled heats before casting',
      'Standard steel grades and structural steel billet manufacturing'
    ],
    features: [
      'Heavy structural steel supporting columns and electrode lifting frame',
      'Secondary bus-tube water cooling circuit for low electrical impedance',
      'Argon gas purging connection assembly with pressure regulator',
      'Operator control desk with manual and automatic power regulation modes'
    ],
    specs: [
      { label: 'Capacity', value: 'Custom engineered per meltshop specification', isConfirmed: false },
      { label: 'Electrode System', value: 'Graphite electrode clamps with hydraulic/mechanical positioning', isConfirmed: false },
      { label: 'Cooling Requirement', value: 'Closed loop recirculating industrial cooling water', isConfirmed: false }
    ],
    workingPrinciple: 'Utilizes electric arc resistance between three graphite electrodes and the slag-metal interface to impart controlled thermal energy into the molten steel batch.',
    customizationOptions: [
      'Stationary gantry or slewing arm roof design',
      'Pneumatic wire feeder add-on compatibility',
      'Temperature and sampling lance integration'
    ],
    relatedProductIds: ['ladle-refining-furnace', 'ladle-preheater', 'powder-ladle-furnace'],
    isFeatured: false,
  },
  {
    id: 'ladle-preheater',
    slug: 'ladle-preheater',
    name: 'Industrial Ladle Preheater',
    category: 'steel-metallurgical',
    categoryName: 'Steel & Metallurgical Equipment',
    tagline: 'Vertical and horizontal refractory preheating systems',
    shortDescription: 'High-efficiency thermal preheating station engineered to raise steel ladle refractory linings to operational temperature before liquid metal tapping.',
    detailedDescription: 'The Ladle Preheater is critical for thermal shock prevention and safety in the meltshop. By bringing the ladle refractory lining to 800°C–1100°C prior to tapping, it eliminates molten metal explosion hazards caused by residual moisture and significantly reduces initial tapping temperature losses.',
    image: '/src/assets/images/hero_steel_plant_engineering_1790961873297.jpg',
    applications: [
      'Preheating freshly relined or cold steel ladles in meltshops',
      'Drying refractory castables and brick linings after repair',
      'Tundish preheating stations prior to continuous casting startup'
    ],
    features: [
      'Available in vertical cantilever swing arm, vertical lift, or horizontal designs',
      'High-velocity industrial burner compatible with Oxy-Fuel, LPG, LNG, or Producer Gas',
      'Refractory lined burner cover hood for heat retention and operator safety',
      'Pneumatic or hydraulic lift/tilt cylinder system with safety mechanical lock'
    ],
    specs: [
      { label: 'Preheat Temperature', value: 'Up to 1000°C – 1100°C (depending on fuel & burner selection)', isConfirmed: false },
      { label: 'Fuel Compatibility', value: 'LPG / Natural Gas / Furnace Oil / Producer Gas', isConfirmed: false },
      { label: 'Orientation', value: 'Vertical top-down firing or horizontal firing configuration', isConfirmed: false }
    ],
    workingPrinciple: 'The burner hood descends over or swings across the open ladle mouth. Combustion of fuel gas and forced air generates a controlled radiant flame pattern that uniformly warms the refractory walls without localized flame impingement.',
    customizationOptions: [
      'Automatic flame safety ignition and flame monitoring system',
      'Waste heat recuperative burner integration for fuel conservation',
      'Custom cover hood diameter matched to client ladle dimensions'
    ],
    relatedProductIds: ['ladle-refining-furnace', 'ladle-furnace', 'continuous-casting-machine'],
    isFeatured: false,
  },
  {
    id: 'powder-ladle-furnace',
    slug: 'powder-ladle-furnace',
    name: 'Powder Ladle Furnace',
    category: 'steel-metallurgical',
    categoryName: 'Steel & Metallurgical Equipment',
    tagline: 'Specialized metallurgical powder injection refining station',
    shortDescription: 'Industrial ladle station configured with pneumatic powder injection capability for accelerated desulphurization and micro-alloying.',
    detailedDescription: 'A specialized iteration of secondary metallurgical refining, integrating submerged powder injection dispensers for feeding desulphurizing agents, synthetic flux powders, and micro-alloys directly into deep melt zones under inert carrier gas.',
    image: '/src/assets/images/ladle_refining_furnace_1790961886316.jpg',
    applications: [
      'Deep desulphurization for low-sulphur steel specifications',
      'Inclusion shape control and modified metallurgical structures',
      'Rapid flux dissolution during high-throughput refining cycles'
    ],
    features: [
      'Pressurized powder dispensing vessel with precise metering screw/rotary valves',
      'Submerged refractory lance immersion and pneumatic hoisting mechanism',
      'Carrier gas flow monitoring (Argon/Nitrogen) with anti-clogging backpressure sensing'
    ],
    specs: [
      { label: 'Dispensing Rate', value: 'Configured per powder density and metallurgical recipe', isConfirmed: false },
      { label: 'Carrier Medium', value: 'Inert Argon or Nitrogen gas at controlled pressure', isConfirmed: false }
    ],
    workingPrinciple: 'Fine reactive powders are fluidized in a pressurized vessel and propelled through a refractory-sheathed lance deep into the liquid steel bath, maximizing chemical contact area and reaction kinetics.',
    customizationOptions: [
      'Multi-vessel dispenser for multiple reagent types without cross-contamination',
      'Integrated weighing cells on dispenser hopper for exact batch delivery'
    ],
    relatedProductIds: ['ladle-refining-furnace', 'ladle-furnace'],
    isFeatured: false,
  },

  // --- MATERIAL HANDLING & CONVEYING ---
  {
    id: 'sponge-iron-feeding-conveyor',
    slug: 'sponge-iron-feeding-conveyor',
    name: 'Sponge Iron Feeding Conveyor',
    category: 'material-handling',
    categoryName: 'Material Handling & Conveying',
    tagline: 'Heavy-duty continuous charging system for melting furnaces',
    shortDescription: 'Specialized industrial belt conveyor engineered for continuous, controlled feeding of direct-reduced sponge iron (DRI) into induction and arc furnaces.',
    detailedDescription: 'The Sponge Iron Feeding Conveyor is designed to withstand the abrasive, dense, and hot characteristics of Direct Reduced Iron (DRI) pellets. Featuring heavy-duty structural steel channel/truss frames, abrasion-resistant belting, impact idlers at receiving points, and variable-speed drives to synchronize feeding rates with furnace melting capacity.',
    image: '/src/assets/images/sponge_iron_conveyor_1790961912847.jpg',
    applications: [
      'Continuous furnace charging for induction furnaces and electric arc furnaces',
      'Direct-reduced iron (DRI) transfer from storage silos to meltshop floor',
      'Sponge iron screening and batch weighing transfer lines'
    ],
    features: [
      'Abrasion-resistant rubber conveyor belt with reinforced vulcanized plies',
      'Heavy structural steel truss or channel stringer fabrication',
      'Closely spaced impact idler sets in receiving hoppers to cushion shock loads',
      'Skirt-board sealing arrangement to prevent spillage and dust dispersion',
      'Direct-coupled geared motor with variable frequency drive (VFD) speed regulation'
    ],
    specs: [
      { label: 'Belt Width Range', value: '500 mm to 1200 mm (Tailored to handling throughput)', isConfirmed: false },
      { label: 'Handling Material', value: 'Sponge Iron / DRI Pellets / Mill Scale / Sinter', isConfirmed: false },
      { label: 'Structure Build', value: 'Heavy structural steel channels / fabricated box section', isConfirmed: false },
      { label: 'Drive Arrangement', value: 'Shaft mounted gear reducer or geared motor with fluid coupling', isConfirmed: false },
      { label: 'Safety Accessories', value: 'Emergency pull chord switches, belt sway switches, zero-speed switches', isConfirmed: false }
    ],
    workingPrinciple: 'Sponge iron stored in silos or bunker bins discharge onto the conveyor via vibro-feeders. The conveyor carries material up an incline directly to charging chutes positioned over the furnace mouth. Variable speed controls modulate feed rate to balance melting power and prevent slag bridging.',
    customizationOptions: [
      'Swivel or shuttle conveyor configuration for charging multiple adjacent furnaces',
      'Integrated continuous belt weigh-feeder for real-time tonnage calculation',
      'High-temperature belt grade selection for handling hot DRI'
    ],
    relatedProductIds: ['magnetic-conveyor', 'industrial-sponge-iron-feeding-conveyor', 'feeding-conveyors'],
    isFeatured: true,
  },
  {
    id: 'industrial-sponge-iron-feeding-conveyor',
    slug: 'industrial-sponge-iron-feeding-conveyor',
    name: 'Industrial Sponge Iron Feeding Conveyor (Custom)',
    category: 'material-handling',
    categoryName: 'Material Handling & Conveying',
    tagline: 'Custom engineered high-tonnage DRI transfer system',
    shortDescription: 'Industrial-grade, high-capacity sponge iron conveyor designed for demanding plant layouts requiring extended spans and custom structural supports.',
    detailedDescription: 'Engineered specifically for plants requiring custom incline geometry, elevated gantry trestles, and integration with automated silo extraction systems. Built with reinforced framework to handle heavy cyclic loads without deflection.',
    image: '/src/assets/images/sponge_iron_conveyor_1790961912847.jpg',
    applications: [
      'Large-scale sponge iron / DRI secondary steelmaking plants',
      'High-throughput raw material handling across processing bays',
      'Elevated bin charging gantry systems'
    ],
    features: [
      'Heavy-duty self-aligning carrying and return idler assemblies',
      'Dual-side inspection walkways with industrial handrails and toe-guards',
      'Heavy counterweight gravity take-up or screw take-up tensioning unit'
    ],
    specs: [
      { label: 'Throughput Capacity', value: 'Engineered to plant design feed rate requirements', isConfirmed: false },
      { label: 'Tensioning Unit', value: 'Vertical gravity counterweight or horizontal screw take-up', isConfirmed: false }
    ],
    workingPrinciple: 'Continuous bulk material transport along engineered troughed belt angles supported by heavy idler rollers, ensuring stable travel even on steep incline transfers.',
    customizationOptions: [
      'Full weather hood enclosure / dust covers along conveyor length',
      'Dual drive pulleys for high-lift or extra-long installations'
    ],
    relatedProductIds: ['sponge-iron-feeding-conveyor', 'magnetic-conveyor'],
    isFeatured: false,
  },
  {
    id: 'magnetic-conveyor',
    slug: 'magnetic-conveyor',
    name: 'Industrial Magnetic Conveyor',
    category: 'material-handling',
    categoryName: 'Material Handling & Conveying',
    tagline: 'Ferrous material extraction, separation, and scrap conveying',
    shortDescription: 'Conveying system with integrated magnetic fields designed for separating, elevating, and feeding ferrous metal parts, scrap, or ore fines.',
    detailedDescription: 'The Magnetic Conveyor uses permanent ceramic/neodymium magnets or electromagnet assemblies beneath a moving stainless steel slider bed or belt. It securely holds ferrous parts or scrap during steep angle elevation and automatically separates tramp iron from non-magnetic process streams.',
    image: '/src/assets/images/sponge_iron_conveyor_1790961912847.jpg',
    applications: [
      'Separation of tramp iron from sponge iron / DRI feeds',
      'Conveying ferrous scrap, stamping punch-outs, and chips from rolling mills',
      'Steep vertical or high-incline transfer of steel components without slippage'
    ],
    features: [
      'Non-magnetic stainless steel slider bed / guide surfaces',
      'Permanent high-strength strontium ferrite or rare-earth magnet tracks',
      'Enclosed chain or belt drive mechanism shielded from abrasive particles',
      'Custom discharge chute geometry for clean demagnetization release'
    ],
    specs: [
      { label: 'Magnet Type', value: 'Permanent magnet circuit or electro-magnetic configuration', isConfirmed: false },
      { label: 'Bed Material', value: 'Non-magnetic austenitic stainless steel (SS304 / SS316)', isConfirmed: false },
      { label: 'Incline Capability', value: 'Horizontal up to 60+ degrees steep incline depending on part profile', isConfirmed: false }
    ],
    workingPrinciple: 'Ferrous materials entering the receiving zone are captured by internal magnetic rails through the non-magnetic bed. As the belt or slats travel forward, parts are drawn along the magnetic field until reaching the discharge end where the magnet terminates, cleanly releasing material.',
    customizationOptions: [
      'Cross-belt overband magnetic separator configuration',
      'Liquid-tight construction for carrying metal chips in coolant environments'
    ],
    relatedProductIds: ['mild-steel-magnetic-conveyor', 'sponge-iron-feeding-conveyor'],
    isFeatured: true,
  },
  {
    id: 'mild-steel-magnetic-conveyor',
    slug: 'mild-steel-magnetic-conveyor',
    name: 'Mild Steel Magnetic Conveyor',
    category: 'material-handling',
    categoryName: 'Material Handling & Conveying',
    tagline: 'Fabricated mild steel structural magnetic scrap and feeding conveyor',
    shortDescription: 'Cost-effective structural mild steel magnetic conveyor for secondary sorting and workshop scrap management.',
    detailedDescription: 'Ruggedly built with fabricated structural mild steel outer framework while retaining non-magnetic stainless contact zones, engineered for general foundry scrap removal and parts transfer.',
    image: '/src/assets/images/sponge_iron_conveyor_1790961912847.jpg',
    applications: [
      'Foundry scrap return lines',
      'Workshop machining scrap collection',
      'Ferrous debris removal from processing streams'
    ],
    features: [
      'Heavy mild steel channel structural side plates',
      'Sealed bearings with grease nipples for extended maintenance intervals',
      'Modular bolt-together construction for easy site installation'
    ],
    specs: [
      { label: 'Frame Material', value: 'Structural Mild Steel (IS 2062 Grade)', isConfirmed: false },
      { label: 'Contact Surface', value: 'Stainless steel non-magnetic glide sheet', isConfirmed: false }
    ],
    workingPrinciple: 'Combines structural steel chassis strength with magnetic field traction for reliable unattended scrap handling.',
    customizationOptions: [
      'Floor-mounted stands or overhead suspended mounting brackets',
      'Custom hopper dimensions and inlet funnel designs'
    ],
    relatedProductIds: ['magnetic-conveyor', 'feeding-conveyors'],
    isFeatured: false,
  },
  {
    id: 'feeding-conveyors',
    slug: 'feeding-conveyors',
    name: 'Industrial Feeding Conveyors',
    category: 'material-handling',
    categoryName: 'Material Handling & Conveying',
    tagline: 'Reliable bulk material feeding and transfer systems',
    shortDescription: 'Industrial belt, apron, or screw conveyors configured for steady, uniform material delivery into process machinery and mills.',
    detailedDescription: 'Heavy-duty industrial conveyors designed for raw materials such as coal, iron ore fines, dolomite, limestone, and ferro-alloys in steel and processing plants.',
    image: '/src/assets/images/sponge_iron_conveyor_1790961912847.jpg',
    applications: [
      'Raw material dosing into processing equipment',
      'Transfer between crushing, screening, and furnace bays',
      'Plant inter-bay material bulk transport'
    ],
    features: [
      'Precision machined drive and tail pulleys with vulcanized rubber lagging',
      'Heavy-gauge dust collection hood connection flanges',
      'Robust structural supports designed for seismic and wind load compliance'
    ],
    specs: [
      { label: 'Belt Types', value: 'EP / NN canvas plies or steel-cord belting based on length', isConfirmed: false },
      { label: 'Speed', value: 'Fixed or variable speed per process flow balance', isConfirmed: false }
    ],
    workingPrinciple: 'Transfers bulk solids uniformly from upstream storage to downstream process equipment with minimal spillage and controlled flow rate.',
    customizationOptions: [
      'Reversible belt drive capability',
      'Emergency stop pull-cords and interlocking automation'
    ],
    relatedProductIds: ['sponge-iron-feeding-conveyor', 'magnetic-conveyor'],
    isFeatured: false,
  },

  // --- CRANES & LIFTING EQUIPMENT ---
  {
    id: 'eot-crane',
    slug: 'eot-crane',
    name: 'Electric Overhead Traveling (EOT) Crane',
    category: 'cranes-lifting',
    categoryName: 'Cranes & Lifting Equipment',
    tagline: 'Single and Double Girder heavy industrial workshop cranes',
    shortDescription: 'Heavy-duty EOT cranes engineered for high structural rigidity, smooth material transfer, and safe handling in fabrication workshops and steel mills.',
    detailedDescription: 'Micro Technocam manufactures robust Double Girder and Single Girder Electric Overhead Traveling (EOT) Cranes built in compliance with heavy industrial duty classes. Designed with box girder or plate girder construction, high-tensile fasteners, hardened track wheels, and precision hoist machinery for dependable plant-wide material movement.',
    image: '/src/assets/images/eot_industrial_crane_1790961923224.jpg',
    applications: [
      'Heavy machinery assembly bays and steel fabrication workshops',
      'Meltshop auxiliary bay handling, scrap loading, and ingot shifting',
      'Warehouse coil, billet, and plate loading/unloading operations',
      'Maintenance crane service across power, cement, and engineering plants'
    ],
    features: [
      'Box-section bridge girder fabricated from high-grade structural steel plate',
      'Heavy-duty forged alloy steel wheels heat-treated to resist rail wear',
      'Independent motor-gearbox drives on bridge and crab travel motions',
      'Fail-safe electro-hydraulic thruster brakes or electromagnetic disc brakes',
      'Radio remote control (RRC) and pendent push-button dual operation systems'
    ],
    specs: [
      { label: 'Configuration', value: 'Double Girder / Single Girder Box Construction', isConfirmed: false },
      { label: 'Safe Working Load (SWL)', value: 'Configured to project requirements (e.g. 5T up to 50T+)', isConfirmed: false },
      { label: 'Span Length', value: 'Custom engineered to workshop runway rail centers', isConfirmed: false },
      { label: 'Duty Classification', value: 'Class I to Class IV (M3 to M8 equivalent industrial duty)', isConfirmed: false },
      { label: 'Braking System', value: 'Electro-hydraulic thruster brakes with mechanical override', isConfirmed: false }
    ],
    workingPrinciple: 'The crane bridge travels longitudinally on elevated runway rails via end carriages. A motorized trolley (crab) mounted on top of the bridge girders traverses cross-wise, carrying the heavy-duty rope hoist winch that performs vertical lifting of loads.',
    customizationOptions: [
      'Auxiliary hoist hook for rapid light-load handling',
      'Full-length operator cabin with insulated thermal glazing and ergonomic master controller',
      'Variable Frequency Drives (VFD) for jerk-free acceleration and micro-inching positioning'
    ],
    relatedProductIds: ['ladle-crane', 'gantry-crane', 'crane-end-carriage', 'electric-chain-hoist'],
    isFeatured: true,
  },
  {
    id: 'ladle-crane',
    slug: 'ladle-crane',
    name: 'Heavy Industrial Ladle Crane',
    category: 'cranes-lifting',
    categoryName: 'Cranes & Lifting Equipment',
    tagline: 'Extreme-environment metallurgical molten metal handling crane',
    shortDescription: 'High-safety metallurgical crane engineered specifically for transporting and pouring liquid steel ladles in furnace and casting bays.',
    detailedDescription: 'The Ladle Crane operates in the most demanding environment in a steel plant: intense radiant heat, airborne dust, and high duty cycles. Built with high safety factor hoisting mechanisms, laminated ladle hooks, heat shields beneath girder boxes, and redundant emergency braking.',
    image: '/src/assets/images/eot_industrial_crane_1790961923224.jpg',
    applications: [
      'Carrying liquid steel ladles from furnace tapping to LRF and CCM turret',
      'Slag pot handling and hot metal pouring into converters',
      'Foundry heavy ladle teeming and molten metal transport'
    ],
    features: [
      'Heavy laminated plate hooks (sister hooks) on motor-driven spreader beam',
      'Thermal radiation protection shields fitted beneath bridge girders and crab',
      'Dual hoist drive motors or planetary backup drives for ultimate safety',
      'Air-conditioned and vibration-isolated operator cabin for extreme ambient conditions'
    ],
    specs: [
      { label: 'Duty Rating', value: 'Severe Metallurgical Duty (Class IV / M8)', isConfirmed: false },
      { label: 'Hoist Safety', value: 'Redundant braking and independent dual reeving system', isConfirmed: false },
      { label: 'Thermal Shielding', value: 'Bottom heat radiation barriers and heat-resistant cabling', isConfirmed: false }
    ],
    workingPrinciple: 'Engages trunnions of liquid metal ladles via forged or laminated sister hooks on a motorized spreader beam, allowing controlled lifting, transport, and precision tilting over casting tundishes.',
    customizationOptions: [
      'Integrated load-cell weighing system in rope equalizer sheaves',
      'Digital ladle weight display visible from the meltshop floor',
      'Emergency manual hoist descent during power disruption'
    ],
    relatedProductIds: ['eot-crane', 'ladle-refining-furnace', 'continuous-casting-machine'],
    isFeatured: true,
  },
  {
    id: 'gantry-crane',
    slug: 'gantry-crane',
    name: 'Industrial Gantry Crane',
    category: 'cranes-lifting',
    categoryName: 'Cranes & Lifting Equipment',
    tagline: 'Rail-mounted outdoor and indoor portal lifting systems',
    shortDescription: 'Self-supporting gantry cranes ideal for outdoor storage yards, scrap handling, and facilities without overhead structural runway columns.',
    detailedDescription: 'The Gantry Crane features rigid supporting legs that run along ground-level embedded rails. Ideal for steel scrap yards, billet storage stockyards, and precast concrete staging where building an enclosed building superstructure would be prohibitive.',
    image: '/src/assets/images/eot_industrial_crane_1790961923224.jpg',
    applications: [
      'Steel stockyard billet and structural section stacking',
      'Outdoor raw material and heavy equipment handling',
      'Railway siding loading and container transshipment'
    ],
    features: [
      'A-frame or shear-leg structural design with box or tubular truss legs',
      'Ground-level storm brakes and rail clamp anchors for outdoor wind safety',
      'Cable-reeling drum (CRD) or trench busbar electrical power supply',
      'Cantilever overhangs on one or both sides to extend lifting coverage'
    ],
    specs: [
      { label: 'Configuration', value: 'Double Girder / Single Girder Full Gantry or Semi-Gantry', isConfirmed: false },
      { label: 'Outdoor Protection', value: 'Weatherproof motor enclosures (IP55) and protective rain covers', isConfirmed: false }
    ],
    workingPrinciple: 'Supported on ground-mounted tracks by heavy-duty end carriages, providing unrestricted vertical hoisting across outdoor staging grounds.',
    customizationOptions: [
      'Cantilever extension arms for loading trucks outside rail tracks',
      'Electromagnet beam attachment for lifting steel plates, billets, and rebar bundles'
    ],
    relatedProductIds: ['girder-gantry-crane', 'eot-crane', 'crane-end-carriage'],
    isFeatured: false,
  },
  {
    id: 'girder-gantry-crane',
    slug: 'girder-gantry-crane',
    name: 'Girder Gantry Crane',
    category: 'cranes-lifting',
    categoryName: 'Cranes & Lifting Equipment',
    tagline: 'High-span box girder portal crane for open storage and fabrication',
    shortDescription: 'Engineered girder gantry systems built for maximum structural rigidity across long outdoor spans.',
    detailedDescription: 'Optimized for wide spans and high lifting heights in open-air fabrication yards, combining lightweight box girder design with wind-resistant leg architecture.',
    image: '/src/assets/images/eot_industrial_crane_1790961923224.jpg',
    applications: [
      'Structural fabrication assembly yards',
      'Long-span billet storage facilities',
      'Heavy process equipment staging'
    ],
    features: [
      'High-span box girder construction with internal stiffeners',
      'Four-corner synchronized drive wheel sets with anti-skew controls'
    ],
    specs: [
      { label: 'Span', value: 'Custom fabricated to site rail gauge', isConfirmed: false },
      { label: 'Drive Sync', value: 'Dual-speed or VFD synchronized wheel bogies', isConfirmed: false }
    ],
    workingPrinciple: 'Travels smoothly along ground rails, allowing heavy component maneuvering over wide yards.',
    customizationOptions: [
      'Semi-portal design using existing building column on one side'
    ],
    relatedProductIds: ['gantry-crane', 'eot-crane'],
    isFeatured: false,
  },
  {
    id: 'crane-end-carriage',
    slug: 'crane-end-carriage',
    name: 'Crane End Carriage Assemblies',
    category: 'cranes-lifting',
    categoryName: 'Cranes & Lifting Equipment',
    tagline: 'Precision-machined structural bogie and wheel units',
    shortDescription: 'Engineered structural end carriages with machined wheel blocks, buffers, and drive mounting flanges for EOT and gantry cranes.',
    detailedDescription: 'End carriages form the mechanical foundation of bridge cranes. Fabricated from rectangular structural steel tube or plate box sections, boring-mill machined to ensure wheel axle parallelism, and fitted with high-grade forged alloy wheels.',
    image: '/src/assets/images/eot_industrial_crane_1790961923224.jpg',
    applications: [
      'OEM crane building and retrofit crane modernizations',
      'Replacement assemblies for worn industrial crane runway bogies'
    ],
    features: [
      'Line-bored wheel pockets for accurate wheel alignment and reduced flange wear',
      'Double-flanged forged steel wheels with high-load spherical roller bearings',
      'Integrated rubber / hydraulic buffers and rail sweepers'
    ],
    specs: [
      { label: 'Material', value: 'Fabricated structural steel box section (IS 2062)', isConfirmed: false },
      { label: 'Wheel Diameter Range', value: '200 mm to 630 mm (Tailored to wheel load)', isConfirmed: false }
    ],
    workingPrinciple: 'Distributes crane bridge deadweight and dynamic hook loads evenly across runway rails while providing propelled tracking motion.',
    customizationOptions: [
      'Hollow-shaft geared motor direct mounting or open spur gear drives'
    ],
    relatedProductIds: ['eot-crane', 'gantry-crane'],
    isFeatured: false,
  },
  {
    id: 'electric-chain-hoist',
    slug: 'electric-chain-hoist',
    name: 'Electric Chain Hoist',
    category: 'cranes-lifting',
    categoryName: 'Cranes & Lifting Equipment',
    tagline: 'Compact, high-precision industrial lifting units',
    shortDescription: 'Industrial electric chain hoists for secondary workstations, monorails, machine shops, and maintenance bays.',
    detailedDescription: 'Durable, compact hoists featuring grade 80 load chain, electromagnetic friction brakes, overload slippage clutches, and low-voltage pendant controls.',
    image: '/src/assets/images/eot_industrial_crane_1790961923224.jpg',
    applications: [
      'Workstation lifting and machine tool loading',
      'Foundry mould core handling and pattern positioning',
      'Maintenance crane service in tight headroom areas'
    ],
    features: [
      'Hardened alloy steel load sprocket and precision chain guide',
      'Dual-speed hoisting motor for gentle positioning and fast transit'
    ],
    specs: [
      { label: 'Capacity Range', value: '0.5 Ton to 10 Ton standard ranges', isConfirmed: false },
      { label: 'Suspension', value: 'Hook suspended, push trolley, or motorized electric trolley', isConfirmed: false }
    ],
    workingPrinciple: 'Converts motor torque through planetary gears into chain sprocket rotation to lift loads cleanly.',
    customizationOptions: [
      'Low-headroom trolley configuration',
      'IP55/IP65 weather protection'
    ],
    relatedProductIds: ['power-jib-crane', 'eot-crane'],
    isFeatured: false,
  },
  {
    id: 'power-jib-crane',
    slug: 'power-jib-crane',
    name: 'Power Jib Crane',
    category: 'cranes-lifting',
    categoryName: 'Cranes & Lifting Equipment',
    tagline: 'Pillar-mounted and wall-mounted 360-degree slew cranes',
    shortDescription: 'Slewing arm jib cranes designed for localized circular workstation handling without tying up primary overhead cranes.',
    detailedDescription: 'Floor pillar-mounted or wall-bracket mounted jib cranes featuring motorized or manual slewing arms, dedicated to feeding machining centers, presses, or welding stations.',
    image: '/src/assets/images/eot_industrial_crane_1790961923224.jpg',
    applications: [
      'Dedicated fabrication workstation service',
      'Loading forgings, ingots, and parts into machine tools',
      'Foundry casting fettling and inspection bays'
    ],
    features: [
      'Heavy cylindrical seamless pipe or fabricated steel pillar',
      'Smooth 180° to 360° slew rotation with heavy slewing bearing and motor drive'
    ],
    specs: [
      { label: 'Slew Angle', value: '180° (wall) / 360° continuous (pillar mounted)', isConfirmed: false },
      { label: 'Arm Radius', value: 'Custom engineered up to 8m+ reach', isConfirmed: false }
    ],
    workingPrinciple: 'Rotates around a fixed vertical axis to transfer loads radially across a dedicated work cell.',
    customizationOptions: [
      'Motorized slew drive with smooth start inverter',
      'Under-braced or over-braced arm profile based on shop ceiling height'
    ],
    relatedProductIds: ['electric-chain-hoist', 'eot-crane'],
    isFeatured: false,
  },

  // --- PROCESS & AUXILIARY EQUIPMENT ---
  {
    id: 'rolling-mill',
    slug: 'rolling-mill',
    name: 'Industrial Rolling Mill Equipment',
    category: 'process-auxiliary',
    categoryName: 'Process & Industrial Equipment',
    tagline: 'Stands, drives, and auxiliary equipment for rebar and section mills',
    shortDescription: 'Heavy mechanical mill stands, pinions, and reduction gear units engineered for hot-rolling steel billets into rebars, wire rods, and structural profiles.',
    detailedDescription: 'Micro Technocam manufactures rolling mill mechanical equipment, including roughing, intermediate, and finishing mill stands, reduction gearboxes, pinion stands, and guide boxes designed for high-stress continuous steel rolling operations.',
    image: '/src/assets/images/hero_steel_plant_engineering_1790961873297.jpg',
    applications: [
      'Hot rolling of continuous cast steel billets into TMT rebar',
      'Wire rod, flat bar, angle, and channel section production',
      'Mill modernization and capacity expansion retrofits'
    ],
    features: [
      'Cast steel or heavy fabricated housing stands with high structural stiffness',
      'Alloy steel forged mill rolls with precision bearing chocks',
      'Heavy-duty hardened and ground reduction gearboxes with forced lubrication',
      'Quick roll change assembly features to minimize mill downtime'
    ],
    specs: [
      { label: 'Stand Sizes', value: 'Configured per mill pass design (e.g. 10" to 24" stand diameter)', isConfirmed: false },
      { label: 'Drive System', value: 'Heavy industrial AC/DC motor coupled via gear couplings', isConfirmed: false }
    ],
    workingPrinciple: 'Preheated steel billets enter progressively smaller roll apertures across sequential mill stands. Compressive rolling forces deform and elongate the hot steel into specified TMT bar or structural dimensions.',
    customizationOptions: [
      'Horizontal and vertical (H/V) housing-less stand designs',
      'Automated repeaters and cooling bed entry roller tables'
    ],
    relatedProductIds: ['continuous-casting-machine', 'flow-ball-mill'],
    isFeatured: true,
  },
  {
    id: 'flow-ball-mill',
    slug: 'flow-ball-mill',
    name: 'Industrial Flow Ball Mill',
    category: 'process-auxiliary',
    categoryName: 'Process & Industrial Equipment',
    tagline: 'Continuous dry and wet grinding mill for mineral and metallurgical processing',
    shortDescription: 'Heavy rotating cylinder grinding mill for reducing ore, flux minerals, and industrial slag to required particle size distributions.',
    detailedDescription: 'Engineered for tough comminution tasks, the Flow Ball Mill grinds materials by tumbling forged steel balls within a rotating manganese or alloy steel lined drum, operating in continuous open or closed-circuit flow.',
    image: '/src/assets/images/hero_steel_plant_engineering_1790961873297.jpg',
    applications: [
      'Grinding iron ore fines, quartz, and fluxing minerals',
      'Pulverizing coal and raw materials in sponge iron plants',
      'Slag grinding and beneficiation recovery processes'
    ],
    features: [
      'Heavy fabricated steel cylinder with high-integrity welded joints',
      'High-wear-resistant manganese steel or high-chromium lining plates',
      'Girth gear and pinion drive with oil lubrication spray enclosure',
      'Heavy trunnion bearing pedestals with white-metal or spherical roller bearings'
    ],
    specs: [
      { label: 'Grinding Media', value: 'Forged high-carbon or alloy steel grinding balls', isConfirmed: false },
      { label: 'Discharge Type', value: 'Grate discharge or overflow discharge depending on flow schema', isConfirmed: false }
    ],
    workingPrinciple: 'As the drum rotates, internal grinding media and raw material are carried up the drum wall before cascading downward, fracturing material through impact and attrition.',
    customizationOptions: [
      'Custom inlet feed chutes and trommel screen discharge attachments',
      'Variable speed inching drive for maintenance inspections'
    ],
    relatedProductIds: ['rolling-mill', 'recuperator'],
    isFeatured: false,
  },
  {
    id: 'recuperator',
    slug: 'recuperator',
    name: 'Industrial Metallic Recuperator',
    category: 'process-auxiliary',
    categoryName: 'Process & Industrial Equipment',
    tagline: 'High-temperature flue gas heat recovery heat exchanger',
    shortDescription: 'Thermal energy recovery equipment engineered to extract heat from furnace exhaust flue gases to preheat combustion air, reducing fuel consumption.',
    detailedDescription: 'The Metallic Recuperator recovers waste thermal energy from steel reheating furnaces, soaking pits, or melting exhaust gases. By preheating incoming combustion air up to 400°C–500°C, it cuts fuel consumption by 15%–25% and improves furnace thermal efficiency.',
    image: '/src/assets/images/hero_steel_plant_engineering_1790961873297.jpg',
    applications: [
      'Reheating furnace flue gas heat recovery in rolling mills',
      'Heat recovery in sponge iron DRI kilns and heat-treating furnaces',
      'Energy conservation across high-temperature metallurgical furnaces'
    ],
    features: [
      'Radiation, convection, or hybrid radiation-convection tube bundle design',
      'Heat-resistant stainless steel and alloy tubing (SS310 / SS316 / Inconel)',
      'Expansion bellows and floating tube-sheets to absorb severe thermal expansion',
      'Flue gas bypass damper integration for system thermal protection'
    ],
    specs: [
      { label: 'Flue Gas Inlet Temp', value: 'Engineered for up to 900°C – 1100°C exhaust streams', isConfirmed: false },
      { label: 'Preheat Air Delivery', value: 'Delivers 250°C to 500°C preheated combustion air', isConfirmed: false }
    ],
    workingPrinciple: 'Hot furnace exhaust gases pass through or around high-temperature alloy tube bundles, transferring heat via radiation and convection to counter-flowing ambient combustion air.',
    customizationOptions: [
      'Radiation cage design for high-dust, high-temperature furnace flues',
      'Integrated cold air dilution protection system against over-temperature'
    ],
    relatedProductIds: ['rolling-mill', 'pollution-control-equipment', 'ladle-preheater'],
    isFeatured: false,
  },
  {
    id: 'pollution-control-equipment',
    slug: 'pollution-control-equipment',
    name: 'Industrial Pollution Control Equipment',
    category: 'process-auxiliary',
    categoryName: 'Process & Industrial Equipment',
    tagline: 'Baghouse filtration and fume extraction systems for steel plants',
    shortDescription: 'Heavy-duty fume extraction hoods, ducting networks, cyclone separators, and pulse-jet baghouses designed for clean meltshop emissions.',
    detailedDescription: 'Industrial air quality management systems built to capture and filter fugitive emissions, fumes, and particulate matter generated during furnace melting, tapping, and material handling.',
    image: '/src/assets/images/hero_steel_plant_engineering_1790961873297.jpg',
    applications: [
      'Induction furnace and arc furnace fume extraction',
      'Sponge iron DRI de-dusting systems',
      'Material handling transfer point dust suppression'
    ],
    features: [
      'Canopy fume collection hoods and side-draft extraction dampers',
      'Heavy-gauge spiral and welded industrial steel ducting networks',
      'Online pulse-jet bag filters with compressed air cleaning manifolds',
      'High-efficiency centrifugal Induced Draft (ID) fans with dynamic balancing'
    ],
    specs: [
      { label: 'Filter Media', value: 'Needle felt polyester / PTFE coated high-temp bags', isConfirmed: false },
      { label: 'Filtration Efficiency', value: 'Designed to meet statutory state pollution control standards', isConfirmed: false }
    ],
    workingPrinciple: 'Contaminated fume-laden air is captured at the source by aerodynamic hoods, routed through ductwork to a baghouse where particulate matter is retained on fabric filters, and cleaned gas is discharged via chimney.',
    customizationOptions: [
      'Spark arrestor and cyclone pre-separator chambers',
      'Acoustic silencers and vibration isolators for ID fans'
    ],
    relatedProductIds: ['aod-decarburization-equipment', 'ladle-refining-furnace', 'recuperator'],
    isFeatured: true,
  },
  {
    id: 'customized-industrial-equipment',
    slug: 'customized-industrial-equipment',
    name: 'Custom Heavy Engineering & Industrial Fabrication',
    category: 'process-auxiliary',
    categoryName: 'Process & Industrial Equipment',
    tagline: 'Application-specific engineering, heavy structural weldments & machinery',
    shortDescription: 'Custom engineering solutions built to client drawings, unique plant footprint constraints, and specific metallurgical process requirements.',
    detailedDescription: 'When standard equipment does not match unique bay dimensions, capacity needs, or existing plant layouts, Micro Technocam collaborates with plant engineering teams to detail, fabricate, machine, and assemble specialized industrial equipment.',
    image: '/src/assets/images/hero_steel_plant_engineering_1790961873297.jpg',
    applications: [
      'Custom transfer cars, slag pot carriers, and coil tilting machines',
      'Heavy structural steel equipment frames and retrofit assemblies',
      'Specialized process vessels and mechanical handling fixtures'
    ],
    features: [
      'Engineering configuration aligned with client civil foundations and crane rails',
      'Full material traceability and welding quality inspection',
      'Trial shop pre-assembly to verify interface dimensions prior to dispatch'
    ],
    specs: [
      { label: 'Scope', value: 'Design detailing, heavy fabrication, precision machining, trial assembly', isConfirmed: true },
      { label: 'Standards', value: 'Adherence to relevant Indian & international engineering codes', isConfirmed: true }
    ],
    workingPrinciple: 'Direct application-focused engineering, translating process requirements into robust heavy machinery.',
    customizationOptions: [
      'Tailored metallurgy, heavy machining tolerance, and drive choices per customer RFP'
    ],
    relatedProductIds: ['ladle-refining-furnace', 'eot-crane', 'sponge-iron-feeding-conveyor'],
    isFeatured: false,
  }
];
