import fs from 'fs';
import path from 'path';

interface ServiceDef {
  slug: string;
  title: string;
  h1: string;
  metaDesc: string;
  category: string;
  icon: string;
  keywords: string[];
  summary: string;
  benefits: string[];
  faqs: { q: string; a: string }[];
}

const services: ServiceDef[] = [
  {
    slug: 'ac-repair',
    title: 'AC Repair San Diego | 24/7 Air Conditioning Repair Experts',
    h1: 'Air Conditioning Repair Services in San Diego, CA',
    metaDesc: 'Fast 24/7 emergency AC repair in San Diego. Certified technicians fix refrigerant leaks, frozen coils, noisy compressors, and short-cycling units. Call (615) 555-0199!',
    category: 'Air Conditioning',
    icon: '❄️',
    keywords: ['ac repair san diego', 'air conditioning repair near me', 'emergency ac fix san diego', 'hvac repair ca'],
    summary: 'When San Diego temperatures soar, a malfunctioning air conditioner transforms your home into an uncomfortable sauna. San Diego HVAC Experts provides rapid, diagnostic-first AC repair services across San Diego County.',
    benefits: [
      'Same-day emergency dispatch across San Diego County',
      'Upfront flat-rate pricing with zero surprise trip fees',
      'Certified technicians trained on all major brands (Carrier, Trane, Lennox)',
      'Fully stocked service vehicles carrying OEM replacement parts',
      '100% satisfaction guarantee with 1-year labor warranty'
    ],
    faqs: [
      { q: 'Why is my AC blowing warm air?', a: 'Warm air is typically caused by a dirty air filter, restricted airflow, a failing compressor, low refrigerant due to a leak, or a faulty thermostat setting.' },
      { q: 'How much does AC repair cost in San Diego?', a: 'Standard AC repairs typically range from $150 to $450 depending on the component needed (e.g., capacitor, contactor, fan motor). We provide a written estimate before starting.' },
      { q: 'How fast can a technician arrive at my home?', a: 'Our emergency dispatch team arrives within 1-2 hours anywhere in San Diego, La Jolla, Carlsbad, and El Cajon.' }
    ]
  },
  {
    slug: 'ac-installation',
    title: 'AC Installation San Diego | High-SEER2 Air Conditioner Installers',
    h1: 'Professional Air Conditioner Installation in San Diego, CA',
    metaDesc: 'Custom high-efficiency AC installation in San Diego. SEER2 compliant systems from Carrier, Trane & Lennox with flexible financing. Free estimates!',
    category: 'Air Conditioning',
    icon: '🔧',
    keywords: ['ac installation san diego', 'new air conditioner cost', 'hvac installer san diego'],
    summary: 'Installing a new air conditioning system is one of the most impactful investments you can make in your home comfort and energy efficiency. Our certified team custom-sizes and engineers central AC systems for maximum cooling performance.',
    benefits: [
      'Accurate Manual J heat load calculations for perfect system sizing',
      'High-SEER2 energy efficient systems that drastically reduce electric bills',
      'Professional duct testing and airflow balancing included',
      'Flexible 0% APR financing options available',
      '10-year manufacturer warranty and 1-year labor warranty'
    ],
    faqs: [
      { q: 'How long does a new AC installation take?', a: 'Most residential central AC installations are completed in a single day (6 to 8 hours).' },
      { q: 'What size AC system does my home need?', a: 'System size is determined by square footage, insulation quality, window exposure, and ceiling height. A typical San Diego home requires 1.5 to 5 tons of cooling.' },
      { q: 'Are there energy rebates for new AC units?', a: 'Yes, high-efficiency SEER2 heat pumps and AC units qualify for local utility rebates and federal tax credits under the IRA.' }
    ]
  },
  {
    slug: 'ac-replacement',
    title: 'AC Replacement San Diego | Upgrade Your Old Air Conditioner',
    h1: 'Air Conditioning Replacement Services in San Diego, CA',
    metaDesc: 'Replace your old, inefficient air conditioner in San Diego. High-efficiency SEER2 replacements with utility rebate assistance. Call (615) 555-0199 today!',
    category: 'Air Conditioning',
    icon: '🔄',
    keywords: ['ac replacement san diego', 'replace air conditioner cost', 'hvac replacement ca'],
    summary: 'If your existing air conditioner is over 12-15 years old, uses phased-out R-22 Freon, or breaks down frequently, replacement is the most cost-effective path forward.',
    benefits: [
      'Eliminate high electric bills with modern SEER2 inverter technology',
      'Quiet indoor and outdoor operation',
      'Environmental compliance with eco-friendly R-410A / R-454B refrigerants',
      'Complete removal and eco-friendly disposal of legacy equipment'
    ],
    faqs: [
      { q: 'How do I know it is time to replace my AC?', a: 'Consider replacement if your unit is 12+ years old, requires frequent repairs costing over half the system value, or uses obsolete R-22 refrigerant.' },
      { q: 'How much can I save on electric bills with a new AC?', a: 'Upgrading from an older 10 SEER unit to a 16+ SEER2 unit can reduce cooling energy consumption by up to 35-40%.' }
    ]
  },
  {
    slug: 'ac-maintenance',
    title: 'AC Maintenance & Tune-Up San Diego | Seasonal HVAC Service',
    h1: 'Comprehensive Air Conditioning Maintenance in San Diego, CA',
    metaDesc: 'Keep your cooling system running at peak performance with annual AC maintenance in San Diego. Prevent breakdowns and preserve warranties.',
    category: 'Air Conditioning',
    icon: '📋',
    keywords: ['ac maintenance san diego', 'ac tune up', 'annual air conditioner service'],
    summary: 'Proactive seasonal air conditioner maintenance is essential for preventing unexpected summer breakdowns, optimizing energy consumption, and extending system lifespan.',
    benefits: [
      'Comprehensive 21-point safety and performance inspection',
      'Evaporator and condenser coil deep cleaning',
      'Refrigerant pressure checks and electrical wiring tightening',
      'Drain line flush to prevent water damage and mold growth'
    ],
    faqs: [
      { q: 'When is the best time for AC maintenance?', a: 'Early spring before hot summer temperatures begin is the ideal time for preventive maintenance.' },
      { q: 'Does annual maintenance keep my warranty valid?', a: 'Yes, major manufacturers like Carrier, Trane, and Lennox require annual documented maintenance to maintain warranty coverage.' }
    ]
  },
  {
    slug: 'emergency-ac-repair',
    title: 'Emergency AC Repair San Diego | 24/7 Overnight HVAC Service',
    h1: '24/7 Emergency Air Conditioning Repair in San Diego',
    metaDesc: 'Sudden AC breakdown during a heatwave? Call San Diego HVAC Experts for 24/7 emergency repair. Rapid 1-2 hour arrival anywhere in San Diego County.',
    category: 'Air Conditioning',
    icon: '🚨',
    keywords: ['emergency ac repair san diego', '24/7 hvac repair near me', 'overnight ac repair'],
    summary: 'Air conditioning failures don’t abide by standard business hours. Our emergency response dispatch team is available 24/7/365 to restore cool air to your home immediately.',
    benefits: [
      '24/7 immediate dispatch including weekends and holidays',
      'Fully equipped service trucks carrying replacement capacitors, motors, and controls',
      'Upfront transparent rates with no price gouging'
    ],
    faqs: [
      { q: 'What counts as an AC emergency?', a: 'Complete cooling failure during extreme heatwaves, electrical burning smells from the unit, or severe water leaks inside your living space.' }
    ]
  },
  {
    slug: 'heating-repair',
    title: 'Heating Repair San Diego | Fast Furnace & Heat Pump Repair',
    h1: 'Professional Heating Repair Services in San Diego, CA',
    metaDesc: 'Reliable heating repair in San Diego. Certified technicians repair furnaces, heat pumps, and ductless systems. Call (615) 555-0199 for fast local service.',
    category: 'Heating',
    icon: '🔥',
    keywords: ['heating repair san diego', 'furnace repair near me', 'heat pump repair ca'],
    summary: 'When chilly winter evenings arrive in San Diego, a failing heating system creates uncomfortable living conditions. We diagnose and repair gas furnaces, electric heaters, and heat pumps quickly.',
    benefits: [
      'Comprehensive safety check for carbon monoxide and gas leaks',
      'Precision repair for ignition systems, pilot lights, and thermostats',
      'Servicing all major heating brands with original factory parts'
    ],
    faqs: [
      { q: 'Why is my furnace making loud squeaking or banging noises?', a: 'Loud noises indicate worn blower fan belts, loose motor bearings, or delayed gas ignition. Call an expert immediately.' }
    ]
  },
  {
    slug: 'heating-installation',
    title: 'Heating Installation San Diego | New Furnace & Heat Pump Installers',
    h1: 'Heating System Installation Services in San Diego, CA',
    metaDesc: 'Expert heating system installation in San Diego. High-efficiency gas furnaces and electric heat pumps installed by licensed contractors.',
    category: 'Heating',
    icon: '🏗️',
    keywords: ['heating installation san diego', 'furnace installer', 'new heat pump install'],
    summary: 'Ensure warm, reliable indoor comfort with a professionally designed heating system installation tailored to your building footprint and energy budget.',
    benefits: [
      'Accurate sizing to prevent short-cycling and temperature fluctuations',
      'Seamless integration with existing air duct networks',
      'Compliant with all California building codes and Title 24 standards'
    ],
    faqs: [
      { q: 'Which heating system is best for San Diego homes?', a: 'Electric heat pumps are popular in coastal areas, while gas furnaces remain ideal for inland properties requiring rapid high-heat output.' }
    ]
  },
  {
    slug: 'heating-replacement',
    title: 'Heating Replacement San Diego | Furnace & Heating Upgrades',
    h1: 'Heating System Replacement Services in San Diego, CA',
    metaDesc: 'Replace your old furnace or heater with an energy-smart modern unit in San Diego. Energy tax credits and 0% financing options available.',
    category: 'Heating',
    icon: '♻️',
    keywords: ['heating replacement san diego', 'furnace replacement cost', 'heat pump upgrade'],
    summary: 'Replace aging, noisy heaters with clean, quiet, high-AFUE furnaces or electric heat pumps that keep your winter utility costs under control.',
    benefits: [
      'Up to 98% AFUE high-efficiency furnace options',
      'Enhanced indoor safety with modern sealed combustion technology',
      'Full removal and environmentally responsible disposal of legacy units'
    ],
    faqs: [
      { q: 'How long does a typical furnace last?', a: 'Gas furnaces typically last 15-20 years with proper maintenance, while heat pumps last 12-15 years.' }
    ]
  },
  {
    slug: 'furnace-repair',
    title: 'Furnace Repair San Diego | Fast Gas & Electric Furnace Repairs',
    h1: 'Furnace Repair Services in San Diego, CA',
    metaDesc: 'Expert furnace repair in San Diego. Certified technicians fix pilot light issues, cracked heat exchangers, noisy blowers, and short-cycling.',
    category: 'Heating',
    icon: '⚙️',
    keywords: ['furnace repair san diego', 'fix gas furnace', 'electric furnace repair'],
    summary: 'A broken furnace leaves your home cold and poses potential health risks if gas leaks or carbon monoxide develop. Our certified technicians resolve all furnace problems safely.',
    benefits: [
      'Thorough heat exchanger inspection for safety crack prevention',
      'Flame sensor cleaning and electronic ignitor replacement',
      'Blower motor lubrication and capacitor testing'
    ],
    faqs: [
      { q: 'Why won’t my furnace ignite?', a: 'Ignition failures stem from dirty flame sensors, faulty hot surface ignitors, tripped safety switches, or gas valve issues.' }
    ]
  },
  {
    slug: 'furnace-installation',
    title: 'Furnace Installation San Diego | Gas & Electric Furnace Installers',
    h1: 'Professional Furnace Installation in San Diego, CA',
    metaDesc: 'Custom furnace installation in San Diego. High-efficiency variable-speed furnaces from Carrier, Trane, and Rheem. Get a free quote today!',
    category: 'Heating',
    icon: '🏠',
    keywords: ['furnace installation san diego', 'gas furnace install', 'high efficiency furnace'],
    summary: 'Upgrade your home with a state-of-the-art furnace featuring multi-stage heating and variable-speed blower technology for smooth, quiet warmth.',
    benefits: [
      'Precision ductwork static pressure testing included',
      'Programmable thermostat pairing for optimal fuel savings',
      'Complete safety testing prior to system handover'
    ],
    faqs: [
      { q: 'What is AFUE rating?', a: 'AFUE (Annual Fuel Utilization Efficiency) measures how efficiently a furnace converts gas into heat. Higher AFUE ratings mean less wasted energy.' }
    ]
  },
  {
    slug: 'furnace-replacement',
    title: 'Furnace Replacement San Diego | Upgrade Old Heaters',
    h1: 'Furnace Replacement Services in San Diego, CA',
    metaDesc: 'Replace outdated gas or electric furnaces in San Diego. Fast turnaround, clean installation, and available financing. Call (615) 555-0199.',
    category: 'Heating',
    icon: '🛠️',
    keywords: ['furnace replacement san diego', 'replace old furnace', 'hvac furnace replacement'],
    summary: 'Replace old, inefficient furnaces before the winter chill arrives. Modern replacement units operate quietly and deliver uniform warmth throughout every room.',
    benefits: ['Lower monthly heating bills', 'Quiet operation', 'Advanced safety features', 'Full labor & parts warranties'],
    faqs: [{ q: 'How long does furnace replacement take?', a: 'A standard furnace replacement is completed in 4 to 6 hours.' }]
  },
  {
    slug: 'heat-pump-repair',
    title: 'Heat Pump Repair San Diego | Fast Electric Heat Pump Service',
    h1: 'Heat Pump Repair Services in San Diego, CA',
    metaDesc: 'Specialized heat pump repair in San Diego. Fix reversing valves, defrost controls, compressor loops, and refrigerant leaks. 24/7 service available.',
    category: 'Heat Pumps',
    icon: '⚡',
    keywords: ['heat pump repair san diego', 'fix heat pump', 'heat pump not cooling'],
    summary: 'Heat pumps operate year-round providing both heating and cooling. When reversing valves freeze or refrigerant drops, our technicians provide precision heat pump repairs.',
    benefits: ['Expert diagnostic for dual-mode operation', 'OEM replacement valves and defrost boards', 'Restored heating and cooling efficiency'],
    faqs: [{ q: 'Why is my heat pump stuck in cooling mode?', a: 'A stuck heat pump is usually caused by a faulty reversing valve solenoid, electrical control defect, or thermostat setting.' }]
  },
  {
    slug: 'heat-pump-installation',
    title: 'Heat Pump Installation San Diego | Electrification Experts',
    h1: 'Heat Pump System Installation in San Diego, CA',
    metaDesc: 'Go green with heat pump installation in San Diego. High-SEER2 inverter systems eligible for tax credits up to $2,000. Free estimate!',
    category: 'Heat Pumps',
    icon: '🌱',
    keywords: ['heat pump installation san diego', 'electric heat pump install', 'hvac electrification ca'],
    summary: 'Embrace clean energy electrification with an ultra-efficient heat pump. Enjoy whisper-quiet, all-in-one heating and cooling designed for California homes.',
    benefits: ['Up to $2,000 federal tax credit under the Inflation Reduction Act', 'No natural gas reliance or combustion safety concerns', 'Superior humidity management in coastal areas'],
    faqs: [{ q: 'Do heat pumps work during cold San Diego nights?', a: 'Yes! Modern inverter heat pumps operate efficiently even in freezing temperatures well below 30°F.' }]
  },
  {
    slug: 'heat-pump-replacement',
    title: 'Heat Pump Replacement San Diego | Upgrade Modern Heat Pumps',
    h1: 'Heat Pump Replacement Services in San Diego, CA',
    metaDesc: 'Replace legacy heat pumps in San Diego with high-efficiency variable speed models. Utility rebates and flexible financing options.',
    category: 'Heat Pumps',
    icon: '🔁',
    keywords: ['heat pump replacement san diego', 'upgrade heat pump', 'hvac heat pump replacement'],
    summary: 'Upgrade your outdated heat pump to an inverter-driven system that adjusts output incrementally, delivering consistent temperatures while using minimal electricity.',
    benefits: ['Variable-speed compressor technology', 'Dramatically reduced monthly electric consumption', 'Silent operation'],
    faqs: [{ q: 'How long do heat pumps last in San Diego?', a: 'Heat pumps generally last 12 to 15 years with routine maintenance.' }]
  },
  {
    slug: 'mini-split-repair',
    title: 'Ductless Mini Split Repair San Diego | Multi-Zone Experts',
    h1: 'Ductless Mini Split Repair in San Diego, CA',
    metaDesc: 'Fast ductless mini split repair in San Diego. Mitsubishi, Daikin, and Fujitsu certified technicians fix condensate leaks, communication errors, and non-cooling zones.',
    category: 'Ductless Systems',
    icon: '🌬️',
    keywords: ['mini split repair san diego', 'ductless ac repair', 'mitsubishi mini split repair'],
    summary: 'Ductless mini splits offer zoned comfort control. When indoor handlers leak condensate or display error codes, our specialized technicians resolve issues quickly.',
    benefits: ['Specialized diagnostic tools for inverter electronics', 'Clearance of clogged condensate drain lines', 'Refrigerant flare fitting leak repairs'],
    faqs: [{ q: 'Why is water leaking from my mini split indoor unit?', a: 'Water leaks usually occur when the condensate drain line is clogged with algae or dust, or if the unit is unlevel.' }]
  },
  {
    slug: 'mini-split-installation',
    title: 'Ductless Mini Split Installation San Diego | Multi-Zone Cooling',
    h1: 'Ductless Mini Split Installation in San Diego, CA',
    metaDesc: 'Custom ductless mini split installation in San Diego. Perfect for room additions, garages, and homes without existing ductwork. Free quote!',
    category: 'Ductless Systems',
    icon: '💡',
    keywords: ['mini split installation san diego', 'ductless air conditioner install', 'multi zone mini split'],
    summary: 'Enjoy personalized temperature control in every room without installing bulky air ducts. Mini splits are energy-smart and ideal for room additions, ADUs, or historical homes.',
    benefits: ['Independent zone control for individual rooms', 'No energy loss through duct leaks', 'Sleek wall, floor, or ceiling cassette designs'],
    faqs: [{ q: 'Can a mini split cool multiple rooms?', a: 'Yes! Multi-zone outdoor compressors can power up to 5 or 8 independent indoor wall units.' }]
  },
  {
    slug: 'ductwork-installation',
    title: 'Ductwork Installation San Diego | Custom Air Duct System Design',
    h1: 'Custom Ductwork Installation in San Diego, CA',
    metaDesc: 'Professional ductwork installation in San Diego. Engineered air duct design for balanced airflow, low noise, and maximum HVAC efficiency.',
    category: 'Air Ducts',
    icon: '📐',
    keywords: ['ductwork installation san diego', 'air duct replacement', 'hvac duct installation'],
    summary: 'Properly engineered ductwork is crucial for HVAC efficiency. Poorly sized ducts create hot spots, high energy bills, and noisy blower operation. We design and install balanced duct networks.',
    benefits: ['Computerized Manual D duct airflow calculations', 'R-8 insulated ducting to prevent heat transfer loss', 'Sealed airtight joints compliant with Title 24 specs'],
    faqs: [{ q: 'How long does ductwork installation take?', a: 'Replacing ductwork in a standard single-family home takes 1 to 2 days.' }]
  },
  {
    slug: 'duct-repair',
    title: 'Duct Repair & Sealing San Diego | Fix Air Leaks & Hot Spots',
    h1: 'Air Duct Repair & Sealing Services in San Diego, CA',
    metaDesc: 'Repair leaking, crushed, or disconnected air ducts in San Diego. Eliminate hot spots, lower electric bills, and clean up home air.',
    category: 'Air Ducts',
    icon: '🩹',
    keywords: ['duct repair san diego', 'duct sealing near me', 'fix leaky air ducts'],
    summary: 'According to energy studies, average duct systems lose 20-30% of conditioned air through leaks and tears. Professional duct repair restores full cooling capacity to every room.',
    benefits: ['Eliminate hot and cold spots throughout your home', 'Reduce dust infiltration from crawlspaces or attics', 'Lower monthly air conditioning costs'],
    faqs: [{ q: 'How do I know if my air ducts are leaking?', a: 'Signs include higher energy bills, excessive room dust, weak airflow from vents, and rooms that refuse to stay cool.' }]
  },
  {
    slug: 'air-duct-cleaning',
    title: 'Air Duct Cleaning San Diego | HEPA Vacuum Purification',
    h1: 'Professional Air Duct Cleaning in San Diego, CA',
    metaDesc: 'Deep air duct cleaning in San Diego. Remove dust, allergens, pet dander, and mold spores with HEPA negative-air vacuum equipment.',
    category: 'Air Quality',
    icon: '🧹',
    keywords: ['air duct cleaning san diego', 'duct cleaning service near me', 'clean hvac ducts'],
    summary: 'Breathe cleaner, fresher air. Our negative-pressure HEPA vacuum duct cleaning removes accumulated dust, pollen, pet dander, and debris from inside your ventilation system.',
    benefits: ['Significantly improves indoor air purity for allergy sufferers', 'Removes lingering odors from pets or cooking', 'Improves HVAC blower efficiency by reducing airflow drag'],
    faqs: [{ q: 'How often should air ducts be cleaned?', a: 'We recommend professional air duct cleaning every 3 to 5 years, or sooner if you have pets or recent remodeling dust.' }]
  },
  {
    slug: 'indoor-air-quality',
    title: 'Indoor Air Quality San Diego | Whole-Home UV & Purification',
    h1: 'Indoor Air Quality Services in San Diego, CA',
    metaDesc: 'Breathe healthier air with San Diego indoor air quality solutions. Whole-home UV air purifiers, MERV 13 filtration, and dehumidifiers.',
    category: 'Air Quality',
    icon: '🌿',
    keywords: ['indoor air quality san diego', 'whole home air purifier', 'uv light hvac san diego'],
    summary: 'Indoor air can be 2 to 5 times more polluted than outdoor air. Protect your family with hospital-grade MERV filtration, germicidal UV lights, and ERV fresh air ventilation.',
    benefits: ['Neutralizes viruses, bacteria, and mold spores', 'Controls indoor humidity in coastal moisture zones', 'Reduces asthma and allergy triggers'],
    faqs: [{ q: 'What is the best whole-home air purifier?', a: 'Combination systems featuring MERV 13 media filters and germicidal UV-C lamps deliver the highest purification coverage.' }]
  },
  {
    slug: 'thermostat-installation',
    title: 'Thermostat Installation San Diego | Digital & Programmable Controls',
    h1: 'Thermostat Installation Services in San Diego, CA',
    metaDesc: 'Expert thermostat installation in San Diego. Upgrade to modern digital and programmable climate controls for precision comfort.',
    category: 'Thermostats',
    icon: '🌡️',
    keywords: ['thermostat installation san diego', 'install digital thermostat', 'hvac controls'],
    summary: 'A properly calibrated thermostat ensures your HVAC system runs only when needed, avoiding wasteful overcooling or overheating.',
    benefits: ['Accurate temperature sensing within 1 degree', 'Easy-to-use digital displays', 'Custom scheduling to match your daily routine'],
    faqs: [{ q: 'Can a new thermostat lower my electric bill?', a: 'Yes! Setting automatic setback temperatures when away can save up to 10-12% annually on cooling and heating costs.' }]
  },
  {
    slug: 'smart-thermostat-installation',
    title: 'Smart Thermostat Installation San Diego | Nest, Ecobee & Honeywell',
    h1: 'Smart Thermostat Setup in San Diego, CA',
    metaDesc: 'Professional Nest, Ecobee & Honeywell smart thermostat installation in San Diego. C-wire wiring, Wi-Fi pairing, and smartphone app setup.',
    category: 'Thermostats',
    icon: '📱',
    keywords: ['smart thermostat installation san diego', 'nest installer san diego', 'ecobee installation'],
    summary: 'Control your home temperature from anywhere in the world using your smartphone. Smart thermostats learn your family schedule, track energy usage, and automatically optimize efficiency.',
    benefits: ['Remote phone app climate control', 'C-wire power adapter wiring for reliable operation', 'Utility energy report tracking and rebate eligibility'],
    faqs: [{ q: 'Do smart thermostats require a C-wire?', a: 'Most smart thermostats require a constant 24V common wire (C-wire). If your home lacks one, we install power adapters or pull new thermostat wire.' }]
  },
  {
    slug: 'residential-hvac',
    title: 'Residential HVAC San Diego | Complete Home Comfort Services',
    h1: 'Residential HVAC Services in San Diego, CA',
    metaDesc: 'Dedicated residential HVAC services in San Diego. AC repair, furnace maintenance, heat pumps, and ductwork for single-family homes and condos.',
    category: 'Residential',
    icon: '🏡',
    keywords: ['residential hvac san diego', 'home ac repair', 'residential heating contractor'],
    summary: 'Your home is your sanctuary. San Diego HVAC Experts delivers customized climate solutions for single-family residences, townhomes, and luxury estates throughout San Diego County.',
    benefits: ['Clean, respectful technicians using floor protection shoe covers', 'Tailored system design matching home architecture', 'Priority dispatch for residential plan members'],
    faqs: [{ q: 'Do you offer residential maintenance contracts?', a: 'Yes! Our annual VIP Maintenance Plan includes bi-annual tune-ups, 15% discount on repairs, and priority scheduling.' }]
  },
  {
    slug: 'commercial-hvac',
    title: 'Commercial HVAC San Diego | Rooftop RTU Repair & Contracts',
    h1: 'Commercial HVAC Services in San Diego, CA',
    metaDesc: 'Commercial HVAC contractor in San Diego. Rooftop RTU maintenance, emergency repairs, and commercial climate controls for local businesses.',
    category: 'Commercial',
    icon: '🏢',
    keywords: ['commercial hvac san diego', 'rooftop unit repair', 'commercial ac maintenance ca'],
    summary: 'Commercial property climate control requires specialized knowledge of high-tonnage rooftop packaged units, economizers, and multi-zone building automation controls.',
    benefits: ['Prevent business downtime with rapid 24/7 commercial dispatch', 'Custom preventive maintenance service contracts', 'Rooftop unit (RTU) replacement and crane rigging services'],
    faqs: [{ q: 'What types of commercial properties do you service?', a: 'We service retail centers, office buildings, warehouses, restaurants, medical clinics, and industrial facilities across San Diego.' }]
  },
  {
    slug: 'hvac-maintenance',
    title: 'HVAC Maintenance San Diego | Preventive Maintenance Plans',
    h1: 'HVAC Maintenance Programs in San Diego, CA',
    metaDesc: 'Protect your heating and cooling investment with structured HVAC maintenance plans in San Diego. Bi-annual tune-ups and repair discounts.',
    category: 'Maintenance',
    icon: '🛡️',
    keywords: ['hvac maintenance plan san diego', 'preventive ac maintenance', 'annual hvac contract'],
    summary: 'Regular bi-annual HVAC maintenance pays for itself by catching minor wear-and-tear issues before they escalate into major, expensive equipment failures.',
    benefits: ['Spring AC tune-up & Fall Heating tune-up', '15% discount on all parts and labor repairs', 'Zero overtime emergency service charges'],
    faqs: [{ q: 'What is included in an HVAC maintenance visit?', a: 'We inspect electrical components, test refrigerant pressures, lubricate motors, check heat exchangers, clean coils, flush drains, and calibrate thermostats.' }]
  },
  {
    slug: 'hvac-tune-up',
    title: 'HVAC Tune-Up San Diego | Seasonal Heating & Cooling Checks',
    h1: 'Professional HVAC Seasonal Tune-Up in San Diego, CA',
    metaDesc: 'Comprehensive HVAC tune-up in San Diego. Optimize cooling SEER2 efficiency and heating safety. Schedule your multi-point check today!',
    category: 'Maintenance',
    icon: '✨',
    keywords: ['hvac tune up san diego', 'ac tune up special', 'heating tune up'],
    summary: 'Give your climate system a fresh start. Our multi-point seasonal tune-up restores factory cooling capacity, quiet operation, and energy efficiency.',
    benefits: ['Comprehensive system safety and electrical check', 'Improved airflow and cooling power', 'Peace of mind entering peak weather seasons'],
    faqs: [{ q: 'How long does an HVAC tune-up take?', a: 'A thorough tune-up takes approximately 60 to 90 minutes per system.' }]
  },
  {
    slug: 'hvac-inspection',
    title: 'HVAC Inspection San Diego | Real Estate & Escrow Inspections',
    h1: 'Comprehensive HVAC System Inspections in San Diego, CA',
    metaDesc: 'Detailed HVAC inspections for home buyers, sellers, and escrow in San Diego. Digital diagnostic reports with fair cost estimates.',
    category: 'Inspection',
    icon: '🔍',
    keywords: ['hvac inspection san diego', 'real estate hvac inspection', 'home buyer ac inspection'],
    summary: 'Buying or selling a home? Don’t get surprised by hidden HVAC defects. Our certified technicians perform detailed digital inspections with written component health ratings.',
    benefits: ['Complete diagnostic evaluation of heat exchanger, compressor, and ducts', 'Digital photo report detailing current equipment condition', 'Accurate cost estimates for real estate negotiations'],
    faqs: [{ q: 'Why is an HVAC inspection important during home purchase?', a: 'HVAC replacement costs thousands. Knowing the true age, health, and efficiency of a home’s system provides critical negotiation leverage.' }]
  },
  {
    slug: 'hvac-repair',
    title: 'HVAC Repair San Diego | Comprehensive Climate System Fixes',
    h1: 'All-Inclusive HVAC Repair Services in San Diego, CA',
    metaDesc: 'Top-rated HVAC repair in San Diego. Fast diagnosis for all cooling, heating, ductwork, and thermostat problems. Call (615) 555-0199!',
    category: 'General HVAC',
    icon: '🛠️',
    keywords: ['hvac repair san diego', 'local hvac company', 'air conditioning and heating repair'],
    summary: 'Whether your system is making strange rattling noises, leaking water, or failing to hold set temperatures, our licensed technicians restore total comfort fast.',
    benefits: ['NATE-certified HVAC service specialists', 'Upfront written quotes before work begins', 'Fully stocked service vans for single-visit repairs'],
    faqs: [{ q: 'Do you charge a trip fee for diagnostic inspection?', a: 'We offer low flat-rate diagnostic fees that are waived when you approve the recommended repair.' }]
  },
  {
    slug: 'hvac-replacement',
    title: 'HVAC Replacement San Diego | Complete Cooling & Heating Upgrades',
    h1: 'Complete HVAC Replacement Services in San Diego, CA',
    metaDesc: 'Full HVAC system replacement in San Diego. Upgrade to modern high-efficiency heat pumps or central systems with warranty protection.',
    category: 'General HVAC',
    icon: '📦',
    keywords: ['hvac replacement san diego', 'full hvac system cost', 'replace heating and ac'],
    summary: 'Replace both your indoor furnace/fan coil and outdoor AC unit together to ensure perfectly matched SEER2 efficiency and maximum lifespan.',
    benefits: ['Matched indoor and outdoor equipment for peak performance', 'Utility rebate assistance and tax credit optimization', 'Turnkey installation including permit handling'],
    faqs: [{ q: 'Should I replace both AC and furnace at the same time?', a: 'Yes! Replacing both ensures matched coil airflow technology, saves on labor setup costs, and synchronizes system warranties.' }]
  },
  {
    slug: 'emergency-hvac-service',
    title: '24/7 Emergency HVAC Service San Diego | Priority Dispatch',
    h1: '24/7 Emergency HVAC Services in San Diego, CA',
    metaDesc: '24/7 emergency heating and AC service in San Diego. Rapid arrival across San Diego County for severe system breakdowns. Call (615) 555-0199.',
    category: 'General HVAC',
    icon: '🆘',
    keywords: ['emergency hvac service san diego', '24 hour heating repair', 'overnight ac repair san diego'],
    summary: 'When extreme weather hits San Diego, an HVAC failure becomes a true emergency. We maintain round-the-clock technician availability for immediate relief.',
    benefits: ['Immediate phone dispatch 24 hours a day', 'Fast response across all San Diego zip codes', 'Safety-first diagnostic and temporary climate solutions'],
    faqs: [{ q: 'Are emergency rates higher than standard rates?', a: 'We maintain fair, upfront flat-rate pricing regardless of what time you call. Members of our VIP plan pay zero overtime fees.' }]
  }
];

function generateServiceHTML(s: ServiceDef): string {
  const relatedServicesList = services
    .filter(other => other.slug !== s.slug)
    .slice(0, 8)
    .map(other => `<li><a href="/services/${other.slug}.html">${other.icon} ${other.title.split('|')[0]}</a></li>`)
    .join('\n');

  const faqsHTML = s.faqs.map((f, idx) => `
    <div class="faq-item ${idx === 0 ? 'active' : ''}">
      <button class="faq-button" aria-expanded="${idx === 0 ? 'true' : 'false'}">
        <span>${f.q}</span>
        <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="faq-content">
        <p>${f.a}</p>
      </div>
    </div>
  `).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${s.title}</title>
  <meta name="description" content="${s.metaDesc}">
  <meta name="keywords" content="${s.keywords.join(', ')}">
  <link rel="canonical" href="https://sandiegohvacexperts.homes/services/${s.slug}.html">
  <meta name="robots" content="index, follow">

  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://sandiegohvacexperts.homes/services/${s.slug}.html">
  <meta property="og:title" content="${s.title}">
  <meta property="og:description" content="${s.metaDesc}">
  <meta property="og:image" content="https://sandiegohvacexperts.homes/assets/logo/logo.svg">
  <meta property="og:site_name" content="San Diego HVAC Experts">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  <link rel="stylesheet" href="/css/styles.css">
  <link rel="icon" href="/favicon.ico">

  <!-- JSON-LD Structured Data Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "${s.h1}",
        "provider": {
          "@type": "HVACBusiness",
          "name": "San Diego HVAC Experts",
          "telephone": "+1-615-555-0199",
          "url": "https://sandiegohvacexperts.homes/"
        },
        "areaServed": "San Diego, CA",
        "description": "${s.metaDesc}"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sandiegohvacexperts.homes/" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://sandiegohvacexperts.homes/services/ac-repair.html" },
          { "@type": "ListItem", "position": 3, "name": "${s.h1}", "item": "https://sandiegohvacexperts.homes/services/${s.slug}.html" }
        ]
      }
    ]
  }
  </script>
</head>
<body>

  <!-- Topbar -->
  <div class="header-topbar">
    <div class="container topbar-wrapper">
      <div class="topbar-info">
        <span class="topbar-item">📍 Serving San Diego County</span>
        <span class="topbar-item">🛡️ CSLB License #1048291</span>
        <span class="topbar-item">⚡ 24/7 Dispatch Ready</span>
      </div>
      <div class="topbar-item">
        <span>Need Instant Help?</span>
        <a href="tel:6155550199">📞 (615) 555-0199</a>
      </div>
    </div>
  </div>

  <!-- Header -->
  <header class="site-header">
    <div class="container header-container">
      <a href="/" class="logo-brand">
        <div class="logo-icon-box">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        </div>
        <div class="logo-text">
          <span class="logo-title">SAN DIEGO</span>
          <span class="logo-subtitle">HVAC EXPERTS</span>
        </div>
      </a>

      <button class="mobile-nav-toggle" aria-label="Toggle Navigation Menu" aria-expanded="false">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
      </button>

      <nav aria-label="Main Navigation">
        <ul class="nav-menu">
          <li><a href="/" class="nav-link">Home</a></li>
          <li><a href="/about.html" class="nav-link">About Us</a></li>
          
          <li class="nav-item-dropdown">
            <div class="nav-link-wrapper">
              <a href="/services/ac-repair.html" class="nav-link active">Services</a>
              <button class="dropdown-toggle-btn" aria-label="Toggle Services Menu" aria-expanded="false">
                <svg class="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M2 4l4 4 4-4"/></svg>
              </button>
            </div>
            <div class="dropdown-menu dropdown-mega">
              <div class="dropdown-grid">
                <div class="dropdown-col">
                  <h4 class="dropdown-heading">Air Conditioning</h4>
                  <ul>
                    <li><a href="/services/ac-repair.html" class="${s.slug === 'ac-repair' ? 'active' : ''}">AC Repair</a></li>
                    <li><a href="/services/ac-installation.html" class="${s.slug === 'ac-installation' ? 'active' : ''}">AC Installation</a></li>
                    <li><a href="/services/ac-replacement.html" class="${s.slug === 'ac-replacement' ? 'active' : ''}">AC Replacement</a></li>
                    <li><a href="/services/ac-maintenance.html" class="${s.slug === 'ac-maintenance' ? 'active' : ''}">AC Maintenance</a></li>
                    <li><a href="/services/emergency-ac-repair.html" class="${s.slug === 'emergency-ac-repair' ? 'active' : ''}">Emergency AC Repair</a></li>
                  </ul>
                </div>
                <div class="dropdown-col">
                  <h4 class="dropdown-heading">Heating & Furnace</h4>
                  <ul>
                    <li><a href="/services/heating-repair.html" class="${s.slug === 'heating-repair' ? 'active' : ''}">Heating Repair</a></li>
                    <li><a href="/services/heating-installation.html" class="${s.slug === 'heating-installation' ? 'active' : ''}">Heating Installation</a></li>
                    <li><a href="/services/heating-replacement.html" class="${s.slug === 'heating-replacement' ? 'active' : ''}">Heating Replacement</a></li>
                    <li><a href="/services/furnace-repair.html" class="${s.slug === 'furnace-repair' ? 'active' : ''}">Furnace Repair</a></li>
                    <li><a href="/services/furnace-installation.html" class="${s.slug === 'furnace-installation' ? 'active' : ''}">Furnace Installation</a></li>
                    <li><a href="/services/furnace-replacement.html" class="${s.slug === 'furnace-replacement' ? 'active' : ''}">Furnace Replacement</a></li>
                  </ul>
                </div>
                <div class="dropdown-col">
                  <h4 class="dropdown-heading">Heat Pumps & Mini-Splits</h4>
                  <ul>
                    <li><a href="/services/heat-pump-repair.html" class="${s.slug === 'heat-pump-repair' ? 'active' : ''}">Heat Pump Repair</a></li>
                    <li><a href="/services/heat-pump-installation.html" class="${s.slug === 'heat-pump-installation' ? 'active' : ''}">Heat Pump Installation</a></li>
                    <li><a href="/services/heat-pump-replacement.html" class="${s.slug === 'heat-pump-replacement' ? 'active' : ''}">Heat Pump Replacement</a></li>
                    <li><a href="/services/mini-split-repair.html" class="${s.slug === 'mini-split-repair' ? 'active' : ''}">Mini Split Repair</a></li>
                    <li><a href="/services/mini-split-installation.html" class="${s.slug === 'mini-split-installation' ? 'active' : ''}">Mini Split Installation</a></li>
                  </ul>
                </div>
                <div class="dropdown-col">
                  <h4 class="dropdown-heading">Ducts & Air Quality</h4>
                  <ul>
                    <li><a href="/services/ductwork-installation.html" class="${s.slug === 'ductwork-installation' ? 'active' : ''}">Ductwork Installation</a></li>
                    <li><a href="/services/duct-repair.html" class="${s.slug === 'duct-repair' ? 'active' : ''}">Duct Repair & Sealing</a></li>
                    <li><a href="/services/air-duct-cleaning.html" class="${s.slug === 'air-duct-cleaning' ? 'active' : ''}">Air Duct Cleaning</a></li>
                    <li><a href="/services/indoor-air-quality.html" class="${s.slug === 'indoor-air-quality' ? 'active' : ''}">Indoor Air Quality</a></li>
                    <li><a href="/services/thermostat-installation.html" class="${s.slug === 'thermostat-installation' ? 'active' : ''}">Thermostat Installation</a></li>
                    <li><a href="/services/smart-thermostat-installation.html" class="${s.slug === 'smart-thermostat-installation' ? 'active' : ''}">Smart Thermostat</a></li>
                  </ul>
                </div>
                <div class="dropdown-col">
                  <h4 class="dropdown-heading">Commercial & Maintenance</h4>
                  <ul>
                    <li><a href="/services/residential-hvac.html" class="${s.slug === 'residential-hvac' ? 'active' : ''}">Residential HVAC</a></li>
                    <li><a href="/services/commercial-hvac.html" class="${s.slug === 'commercial-hvac' ? 'active' : ''}">Commercial HVAC</a></li>
                    <li><a href="/services/hvac-maintenance.html" class="${s.slug === 'hvac-maintenance' ? 'active' : ''}">HVAC Maintenance</a></li>
                    <li><a href="/services/hvac-tune-up.html" class="${s.slug === 'hvac-tune-up' ? 'active' : ''}">HVAC Tune-Up</a></li>
                    <li><a href="/services/hvac-inspection.html" class="${s.slug === 'hvac-inspection' ? 'active' : ''}">HVAC Inspection</a></li>
                    <li><a href="/services/hvac-repair.html" class="${s.slug === 'hvac-repair' ? 'active' : ''}">General HVAC Repair</a></li>
                    <li><a href="/services/hvac-replacement.html" class="${s.slug === 'hvac-replacement' ? 'active' : ''}">HVAC Replacement</a></li>
                    <li><a href="/services/emergency-hvac-service.html" class="${s.slug === 'emergency-hvac-service' ? 'active' : ''}">Emergency HVAC Service</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li class="nav-item-dropdown">
            <div class="nav-link-wrapper">
              <a href="/service-areas/san-diego.html" class="nav-link">Service Areas</a>
              <button class="dropdown-toggle-btn" aria-label="Toggle Service Areas Menu" aria-expanded="false">
                <svg class="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M2 4l4 4 4-4"/></svg>
              </button>
            </div>
            <div class="dropdown-menu">
              <div class="dropdown-grid dropdown-grid-2col">
                <div class="dropdown-col">
                  <h4 class="dropdown-heading">San Diego Metro & Coastal</h4>
                  <ul>
                    <li><a href="/service-areas/san-diego.html">San Diego, CA</a></li>
                    <li><a href="/service-areas/la-jolla.html">La Jolla, CA</a></li>
                    <li><a href="/service-areas/carlsbad.html">Carlsbad, CA</a></li>
                    <li><a href="/service-areas/capistrano-beach.html">Capistrano Beach, CA</a></li>
                    <li><a href="/service-areas/los-alamitos.html">Los Alamitos, CA</a></li>
                    <li><a href="/service-areas/irvine.html">Irvine, CA</a></li>
                  </ul>
                </div>
                <div class="dropdown-col">
                  <h4 class="dropdown-heading">East County & Inland</h4>
                  <ul>
                    <li><a href="/service-areas/la-mesa.html">La Mesa, CA</a></li>
                    <li><a href="/service-areas/el-cajon.html">El Cajon, CA</a></li>
                    <li><a href="/service-areas/poway.html">Poway, CA</a></li>
                    <li><a href="/service-areas/santee.html">Santee, CA</a></li>
                    <li><a href="/service-areas/rosemead.html">Rosemead, CA</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li><a href="/blog/how-often-should-you-service-your-ac-in-san-diego.html" class="nav-link">Blog</a></li>
          <li><a href="/contact.html" class="nav-link">Contact</a></li>
        </ul>
      </nav>

      <div class="nav-actions">
        <a href="tel:6155550199" class="btn btn-outline btn-sm">📞 Call Now</a>
        <button class="btn btn-accent btn-sm js-open-estimate-modal">Free Estimate</button>
      </div>
    </div>
  </header>

  <!-- Breadcrumb Navigation -->
  <nav class="breadcrumb-nav">
    <div class="container">
      <ul class="breadcrumb-list">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item">/</li>
        <li class="breadcrumb-item"><a href="/services/ac-repair.html">Services</a></li>
        <li class="breadcrumb-item">/</li>
        <li class="breadcrumb-item active">${s.h1}</li>
      </ul>
    </div>
  </nav>

  <!-- Title Banner -->
  <section class="bg-navy section-padding-sm">
    <div class="container">
      <span class="badge-tag amber">${s.category} Service</span>
      <h1>${s.h1}</h1>
      <p class="lead">Licensed & Insured San Diego HVAC Specialists Available 24/7</p>
    </div>
  </section>

  <!-- Main Content Layout -->
  <main class="container section-padding">
    <div class="content-wrapper">
      
      <!-- Primary Editorial Content Column -->
      <article class="main-content">
        <img src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1000&q=80" 
             alt="${s.h1}" 
             style="width:100%; height:340px; object-fit:cover; border-radius:var(--radius-lg); margin-bottom:2rem; box-shadow:var(--shadow-md);" 
             loading="lazy">
        <h2>Expert ${s.h1} for San Diego Homeowners</h2>
        <p>${s.summary}</p>

        <p>At <strong>San Diego HVAC Experts</strong>, we understand that indoor climate reliability is essential for comfort, productivity, and peace of mind. Whether you live along the coastal breeze of La Jolla or the sun-warmed inland neighborhoods of El Cajon and Poway, our certified HVAC technicians deliver prompt, precision service tailored to your home's unique specifications.</p>

        <h3>Why Choose San Diego HVAC Experts for ${s.category}?</h3>
        <ul>
          ${s.benefits.map(b => `<li><strong>${b.split(' ')[0]} ${b.split(' ')[1] || ''}:</strong> ${b}</li>`).join('\n')}
        </ul>

        <h3>Common Signs You Need ${s.h1}</h3>
        <p>Catching climate control problems early saves money and prevents complete system failure. Contact our team immediately if you notice:</p>
        <ul>
          <li><strong>Unusual Noises:</strong> Grinding, squeaking, or rattling from your indoor fan coil or outdoor compressor unit.</li>
          <li><strong>Spike in Energy Bills:</strong> Sudden jumps in electric or natural gas consumption without an increase in usage.</li>
          <li><strong>Inconsistent Temperatures:</strong> Hot or cold spots in upstairs bedrooms or corner offices.</li>
          <li><strong>Frequent Short-Cycling:</strong> Your system turns on and off rapidly every few minutes.</li>
          <li><strong>Strange Odors:</strong> Musty mildew smells indicating drain line bacteria or burning dust odors.</li>
        </ul>

        <h3>Our Comprehensive Service Guarantee</h3>
        <p>Every service call performed by San Diego HVAC Experts includes a full diagnostic safety check, transparent flat-rate pricing, and our 100% Satisfaction Guarantee. We use only high-grade OEM parts and adhere strictly to California Title 24 building codes.</p>

        <!-- FAQs Section inside page -->
        <h2 style="margin-top:3rem;">Frequently Asked Questions about ${s.category}</h2>
        <div class="faq-list" style="margin-top:1.5rem;">
          ${faqsHTML}
        </div>

        <!-- Inline Contact Form -->
        <div style="margin-top:3.5rem; background-color:var(--bg-light); padding:2.5rem; border-radius:var(--radius-lg); border:1px solid var(--border-light);">
          <h3>Request Your Free ${s.category} Estimate</h3>
          <p style="margin-bottom:1.5rem; color:var(--text-muted);">Fill out the form below or call <a href="tel:6155550199" style="font-weight:700;">(615) 555-0199</a> for immediate dispatch.</p>
          <form data-api-endpoint="/api/estimate">
            <div class="form-group">
              <label class="form-label">Your Name *</label>
              <input type="text" name="name" class="form-input" required placeholder="John Smith">
            </div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
              <div class="form-group">
                <label class="form-label">Phone Number *</label>
                <input type="tel" name="phone" class="form-input" required placeholder="(615) 555-0199">
              </div>
              <div class="form-group">
                <label class="form-label">ZIP Code</label>
                <input type="text" name="zipCode" class="form-input" placeholder="92101">
              </div>
            </div>
            <input type="hidden" name="service" value="${s.slug}">
            <button type="submit" class="btn btn-accent" style="width:100%;">Submit Free Estimate Request</button>
            <div class="alert-box alert-success"></div>
            <div class="alert-box alert-error"></div>
          </form>
        </div>

        <!-- Embedded Map -->
        <div style="margin-top:3rem;">
          <h3>Serving San Diego & Surrounding Neighborhoods</h3>
          <div class="map-container" style="height:320px; margin-top:1rem;">
            <iframe 
              title="Service Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214758.33703358052!2d-117.27218385202611!3d32.71573800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9530fad921e4b%3A0xd3a21fdfd15df79!2sSan%20Diego%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
              allowfullscreen="" 
              loading="lazy">
            </iframe>
          </div>
        </div>

      </article>

      <!-- Sidebar Column -->
      <aside class="sidebar">
        <div class="sidebar-widget">
          <h3>Need Service Now?</h3>
          <p style="font-size:0.9rem; margin-bottom:1rem;">Our certified HVAC specialists are standing by 24/7 for emergency service callouts across San Diego County.</p>
          <a href="tel:6155550199" class="btn btn-accent" style="width:100%;">📞 Call (615) 555-0199</a>
        </div>

        <div class="sidebar-widget">
          <h3>Related HVAC Services</h3>
          <ul class="sidebar-links">
            ${relatedServicesList}
          </ul>
        </div>

        <div class="sidebar-widget">
          <h3>Service Area Cities</h3>
          <ul class="sidebar-links">
            <li><a href="/service-areas/san-diego.html">📍 San Diego</a></li>
            <li><a href="/service-areas/la-mesa.html">📍 La Mesa</a></li>
            <li><a href="/service-areas/carlsbad.html">📍 Carlsbad</a></li>
            <li><a href="/service-areas/el-cajon.html">📍 El Cajon</a></li>
            <li><a href="/service-areas/la-jolla.html">📍 La Jolla</a></li>
            <li><a href="/service-areas/poway.html">📍 Poway</a></li>
            <li><a href="/service-areas/santee.html">📍 Santee</a></li>
            <li><a href="/service-areas/irvine.html">📍 Irvine</a></li>
          </ul>
        </div>
      </aside>

    </div>
  </main>

  <!-- CTA Banner -->
  <section class="section-padding bg-ice">
    <div class="container">
      <div class="cta-banner">
        <h2>Schedule Your ${s.category} Service Today</h2>
        <p class="lead">Fast response, guaranteed craftsmanship, and zero obligation estimates.</p>
        <a href="tel:6155550199" class="btn btn-accent btn-lg">📞 Call (615) 555-0199 Now</a>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <h4>San Diego HVAC Experts</h4>
          <p>Licensed & Insured HVAC Contractor (CSLB #1048291). Serving San Diego, La Jolla, Carlsbad, and surrounding areas.</p>
          <p style="margin-top:0.5rem; color:#FFFFFF; font-weight:700;">📞 Phone: (615) 555-0199</p>
        </div>
        <div class="footer-col">
          <h4>HVAC Services</h4>
          <ul class="footer-links">
            <li><a href="/services/ac-repair.html">AC Repair</a></li>
            <li><a href="/services/ac-installation.html">AC Installation</a></li>
            <li><a href="/services/heating-repair.html">Heating Repair</a></li>
            <li><a href="/services/heat-pump-installation.html">Heat Pumps</a></li>
            <li><a href="/services/air-duct-cleaning.html">Duct Cleaning</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Service Areas</h4>
          <ul class="footer-links">
            <li><a href="/service-areas/san-diego.html">San Diego</a></li>
            <li><a href="/service-areas/la-mesa.html">La Mesa</a></li>
            <li><a href="/service-areas/carlsbad.html">Carlsbad</a></li>
            <li><a href="/service-areas/la-jolla.html">La Jolla</a></li>
            <li><a href="/service-areas/poway.html">Poway</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Site Links</h4>
          <ul class="footer-links">
            <li><a href="/about.html">About Us</a></li>
            <li><a href="/contact.html">Contact Us</a></li>
            <li><a href="/blog/how-often-should-you-service-your-ac-in-san-diego.html">HVAC Blog</a></li>
            <li><a href="/privacy-policy.html">Privacy Policy</a></li>
            <li><a href="/terms-and-conditions.html">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 San Diego HVAC Experts. CSLB License #1048291. All Rights Reserved.</p>
      </div>
    </div>
  </footer>

  <!-- Modal Popup -->
  <div class="modal-overlay" id="estimateModal" aria-hidden="true">
    <div class="modal-card">
      <button class="modal-close-btn" aria-label="Close dialog">&times;</button>
      <h3>Request Your Free Estimate</h3>
      <form data-api-endpoint="/api/estimate">
        <div class="form-group">
          <label class="form-label">Your Name *</label>
          <input type="text" name="name" class="form-input" required>
        </div>
        <div class="form-group">
          <label class="form-label">Phone Number *</label>
          <input type="tel" name="phone" class="form-input" required>
        </div>
        <input type="hidden" name="service" value="${s.slug}">
        <button type="submit" class="btn btn-primary" style="width:100%; margin-top:1rem;">Submit Request</button>
        <div class="alert-box alert-success"></div>
        <div class="alert-box alert-error"></div>
      </form>
    </div>
  </div>

  <script src="/js/main.js"></script>
</body>
</html>`;
}

function run() {
  const targetDir = path.join(process.cwd(), 'services');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  services.forEach(s => {
    const html = generateServiceHTML(s);
    const filePath = path.join(targetDir, `${s.slug}.html`);
    fs.writeFileSync(filePath, html, 'utf-8');
    console.log(`Generated: ${filePath}`);
  });

  console.log(`Successfully built ${services.length} service pages!`);
}

run();
