import fs from 'fs';
import path from 'path';

interface CityDef {
  slug: string;
  name: string;
  county: string;
  zipCodes: string;
  title: string;
  metaDesc: string;
  localClimate: string;
  commonIssues: string[];
  faqs: { q: string; a: string }[];
  mapEmbedSrc: string;
}

const cities: CityDef[] = [
  {
    slug: 'san-diego',
    name: 'San Diego',
    county: 'San Diego County',
    zipCodes: '92101, 92102, 92103, 92104, 92108, 92109, 92110, 92111, 92115, 92117',
    title: 'San Diego HVAC Contractor | 24/7 AC & Heating Repair in San Diego, CA',
    metaDesc: 'San Diego\'s premier local HVAC contractor. Licensed 24/7 AC repair, heat pump installation, and furnace service in San Diego CA. Call (615) 555-0199!',
    localClimate: 'San Diego features a Mediterranean climate with coastal humidity, marine fog, and intense inland heat spikes. High salt air in coastal neighborhoods causes accelerated outdoor condenser coil corrosion if not protected.',
    commonIssues: [
      'Corrosion on outdoor AC condenser coils due to coastal salt air',
      'High indoor humidity requiring specialized dehumidification systems',
      'Short-cycling during sudden summer heatwaves in downtown and urban neighborhoods'
    ],
    faqs: [
      { q: 'How fast can you arrive for AC repair in San Diego?', a: 'Our central dispatch hub in San Diego allows us to reach downtown, Hillcrest, Pacific Beach, and North Park within 60 to 90 minutes.' },
      { q: 'Do you handle San Diego city building permits for new installations?', a: 'Yes! We pull all necessary permits with the City of San Diego Development Services Department and handle Title 24 compliance testing.' }
    ],
    mapEmbedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214758.33703358052!2d-117.27218385202611!3d32.71573800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9530fad921e4b%3A0xd3a21fdfd15df79!2sSan%20Diego%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus'
  },
  {
    slug: 'la-mesa',
    name: 'La Mesa',
    county: 'San Diego County',
    zipCodes: '91941, 91942, 91943, 91944',
    title: 'La Mesa HVAC Contractor | AC Repair & Furnace Service in La Mesa, CA',
    metaDesc: 'Top-rated HVAC services in La Mesa, CA. Emergency air conditioner repair, heat pumps, and duct cleaning. Licensed & insured (CSLB #1048291).',
    localClimate: 'Known as the Jewel of the Hills, La Mesa experiences warmer inland summer temperatures than coastal zones, placing heavy demands on central AC units from June through October.',
    commonIssues: [
      'Overworked air conditioners struggling to maintain 72°F during 95°F+ summer days',
      'Aging gas furnaces in historic homes requiring heat exchanger safety testing',
      'High attic heat buildup causing thermal overload on air handlers'
    ],
    faqs: [
      { q: 'Do you offer emergency HVAC service in La Mesa?', a: 'Yes! We provide 24/7 emergency repair dispatch throughout La Mesa and Mt. Helix.' }
    ],
    mapEmbedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53683.87412853247!2d-117.04273895!3d32.76783115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d95712f5a5e3f1%3A0x6b4db3a2283e3e0!2sLa%20Mesa%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus'
  },
  {
    slug: 'carlsbad',
    name: 'Carlsbad',
    county: 'San Diego County',
    zipCodes: '92008, 92009, 92010, 92011, 92018',
    title: 'Carlsbad HVAC Contractor | AC Repair & Heat Pump Installation Carlsbad',
    metaDesc: 'Trusted Carlsbad HVAC services. 24/7 air conditioning repair, ductless mini-splits, and heat pump installations in Carlsbad, CA. Call (615) 555-0199.',
    localClimate: 'Carlsbad’s coastal proximity brings ocean breezes and marine fog, making heat pump technology and anti-corrosive coil coatings ideal for North County coastal living.',
    commonIssues: [
      'Salt air degradation on outdoor aluminum fins and copper tubing',
      'Elevated indoor moisture levels causing mold spores inside dirty ductwork',
      'Ductless mini split installations for luxury home remodels'
    ],
    faqs: [
      { q: 'What AC system works best near the ocean in Carlsbad?', a: 'Heat pumps with factory-coated anti-corrosion fins and coastal protective enclosures perform best in Carlsbad.' }
    ],
    mapEmbedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53512.42878430589!2d-117.33802995!3d33.15809335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc7332c974ddc3%3A0x444db3a2283e3e0!2sCarlsbad%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus'
  },
  {
    slug: 'el-cajon',
    name: 'El Cajon',
    county: 'San Diego County',
    zipCodes: '92019, 92020, 92021, 92090',
    title: 'El Cajon HVAC Repair & Installation | 24/7 AC Services in El Cajon, CA',
    metaDesc: 'Fast 24/7 AC repair & furnace replacement in El Cajon, CA. Beat the East County summer heat with high-SEER2 central cooling. Free estimates!',
    localClimate: 'Surrounded by mountains, El Cajon experiences East County inland valley heat, with summer temperatures routinely exceeding 100°F. Reliable, heavy-duty cooling is a health necessity.',
    commonIssues: [
      'Blown capacitors and failed fan motors during prolonged 100°F heat waves',
      'Inadequate duct insulation leading to severe cooling loss in hot attics',
      'High electric bills from outdated 10-SEER air conditioners'
    ],
    faqs: [
      { q: 'How can I reduce high summer cooling bills in El Cajon?', a: 'Upgrading to a 16+ SEER2 variable-speed inverter AC system can lower summer electric bills by up to 40%.' }
    ],
    mapEmbedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53671.12345678!2d-116.9625!3d32.7948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d958123456789%3A0x123456789!2sEl%20Cajon%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus'
  },
  {
    slug: 'la-jolla',
    name: 'La Jolla',
    county: 'San Diego County',
    zipCodes: '92037, 92038, 92039, 92092, 92093',
    title: 'La Jolla HVAC Contractor | Luxury Home AC & Heat Pump Experts',
    metaDesc: 'Premier HVAC services in La Jolla, CA. High-end climate control, ductless mini-splits, indoor air purification, and whisper-quiet heat pumps.',
    localClimate: 'La Jolla’s coastal environment requires quiet, architecturally unobtrusive heating and cooling systems equipped with marine-grade anti-corrosion protection.',
    commonIssues: [
      'Noise sensitivity in luxury hillside residences requiring low-decibel equipment',
      'Coastal air corrosion on outdoor condensing units',
      'Multi-zone climate control demands for sprawling architectural properties'
    ],
    faqs: [
      { q: 'Do you offer whisper-quiet HVAC options for La Jolla homes?', a: 'Yes! Inverter mini-splits and variable-speed heat pumps operate at ultra-quiet sound levels as low as 19 dB.' }
    ],
    mapEmbedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53590.12345678!2d-117.2713!3d32.8328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc038123456789%3A0x987654321!2sLa%20Jolla%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus'
  },
  {
    slug: 'poway',
    name: 'Poway',
    county: 'San Diego County',
    zipCodes: '92064, 92074',
    title: 'Poway HVAC Services | AC Repair & Furnace Installation Poway, CA',
    metaDesc: 'Top-rated HVAC services in Poway, CA. Emergency AC repair, furnace maintenance, and heat pump replacements for Poway homes. Call (615) 555-0199.',
    localClimate: 'Known as the City in the Country, Poway experiences inland heat and dry conditions, creating heavy demand for efficient air conditioning and indoor air filtration.',
    commonIssues: [
      'Dust and pollen buildup in air duct systems from rural surroundings',
      'Heavy summer AC workload during peak Inland Empire heat flows',
      'Gas furnace maintenance for winter evening temperature drops'
    ],
    faqs: [
      { q: 'Do you provide air duct cleaning in Poway?', a: 'Yes! Our HEPA vacuum duct cleaning removes accumulated dust and rural allergens.' }
    ],
    mapEmbedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53540.12345678!2d-117.0359!3d32.9628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbf8123456789%3A0x111111111!2sPoway%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus'
  },
  {
    slug: 'santee',
    name: 'Santee',
    county: 'San Diego County',
    zipCodes: '92071, 92072',
    title: 'Santee HVAC Repair & AC Installation | Santee, CA',
    metaDesc: 'Reliable 24/7 HVAC repair in Santee, CA. Same-day AC fix, furnace tune-ups, and heat pump installations. Free service estimates!',
    localClimate: 'Santee experiences high inland temperatures throughout summer, making dependable air conditioning essential for home comfort and indoor safety.',
    commonIssues: [
      'Refrigerant leaks and compressor strain during hot summer months',
      'Dust accumulation inside blower compartments',
      'Duct leakage causing uneven room temperatures'
    ],
    faqs: [
      { q: 'How fast can a Santee HVAC technician arrive?', a: 'Our local dispatch team can reach any Santee neighborhood within 60 to 90 minutes.' }
    ],
    mapEmbedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53660.12345678!2d-116.9739!3d32.8384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d959123456789%3A0x222222222!2sSantee%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus'
  },
  {
    slug: 'los-alamitos',
    name: 'Los Alamitos',
    county: 'Orange County',
    zipCodes: '90720, 90721',
    title: 'Los Alamitos HVAC Contractor | AC & Heating Services Los Alamitos, CA',
    metaDesc: 'Professional HVAC contractor serving Los Alamitos, CA. 24/7 AC repair, heat pumps, and furnace replacements. Licensed & insured.',
    localClimate: 'Los Alamitos features mild coastal-inland climate transition, benefiting from quiet, high-efficiency heat pump systems year-round.',
    commonIssues: [
      'Humidity control and seasonal AC tune-ups',
      'Smart thermostat upgrades for energy savings',
      'Duct sealing to eliminate dust and hot spots'
    ],
    faqs: [
      { q: 'Do you service residential homes in Los Alamitos?', a: 'Yes! We provide full residential and commercial HVAC services in Los Alamitos.' }
    ],
    mapEmbedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53000.12345678!2d-118.0728!3d33.8031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd2d123456789%3A0x333333333!2sLos%20Alamitos%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus'
  },
  {
    slug: 'rosemead',
    name: 'Rosemead',
    county: 'Los Angeles County',
    zipCodes: '91770, 91771, 91772',
    title: 'Rosemead HVAC Repair & AC Services | Rosemead, CA',
    metaDesc: 'Expert HVAC contractor serving Rosemead, CA. Emergency AC repair, new heating installations, and duct cleaning. Call (615) 555-0199.',
    localClimate: 'Rosemead experiences warm inland San Gabriel Valley summers, making efficient air conditioning critical for energy-conscious families.',
    commonIssues: [
      'Aging central cooling units requiring motor replacements',
      'High electricity usage during peak heat waves',
      'Inadequate air filtration in urban residential zones'
    ],
    faqs: [
      { q: 'Do you offer financing for HVAC replacements in Rosemead?', a: 'Yes! We offer 0% APR financing options with easy online application.' }
    ],
    mapEmbedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52950.12345678!2d-118.0817!3d34.0686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c2123456789%3A0x444444444!2sRosemead%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus'
  },
  {
    slug: 'irvine',
    name: 'Irvine',
    county: 'Orange County',
    zipCodes: '92602, 92603, 92604, 92606, 92612, 92614, 92618, 92620',
    title: 'Irvine HVAC Contractor | AC Repair & Heat Pump Installation Irvine, CA',
    metaDesc: 'Premier Irvine HVAC services. Emergency air conditioning repair, heat pump systems, and smart thermostats in Irvine, CA. Free estimates!',
    localClimate: 'Irvine features modern master-planned communities requiring high-SEER2 inverter systems, smart thermostat integration, and Title 24 energy compliance.',
    commonIssues: [
      'HOA architectural noise restrictions requiring quiet outdoor units',
      'Smart home thermostat connectivity and C-wire setup',
      'Zoned ductless mini split systems for modern home offices'
    ],
    faqs: [
      { q: 'Are your systems compliant with Irvine HOA guidelines?', a: 'Yes! We select ultra-quiet equipment that strictly complies with local sound decibel limits.' }
    ],
    mapEmbedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53100.12345678!2d-117.8265!3d33.6846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdd123456789%3A0x555555555!2sIrvine%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus'
  },
  {
    slug: 'capistrano-beach',
    name: 'Capistrano Beach',
    county: 'Orange County',
    zipCodes: '92624',
    title: 'Capistrano Beach HVAC Services | Coastal AC & Heat Pump Repairs',
    metaDesc: 'Coastal HVAC specialists in Capistrano Beach, CA. 24/7 AC repair, anti-corrosion heat pumps, and ductless mini-splits. Call (615) 555-0199.',
    localClimate: 'Capistrano Beach’s oceanfront environment presents severe salt spray challenges that accelerate coil rust on standard HVAC units.',
    commonIssues: [
      'Accelerated marine air corrosion on aluminum fins and copper lines',
      'High coastal humidity requiring specialized moisture control',
      'Ductless mini split installations for beachside homes'
    ],
    faqs: [
      { q: 'How do you protect AC units from ocean salt corrosion in Capistrano Beach?', a: 'We apply marine-grade protective epoxy coatings and install coastal-rated heat pump equipment.' }
    ],
    mapEmbedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53200.12345678!2d-117.6698!3d33.4639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcf0123456789%3A0x666666666!2sCapistrano%20Beach%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus'
  }
];

function generateCityHTML(c: CityDef): string {
  const faqsHTML = c.faqs.map((f, idx) => `
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
  <title>${c.title}</title>
  <meta name="description" content="${c.metaDesc}">
  <link rel="canonical" href="https://sandiegohvacexperts.homes/service-areas/${c.slug}.html">
  <meta name="robots" content="index, follow">

  <meta property="og:type" content="article">
  <meta property="og:url" content="https://sandiegohvacexperts.homes/service-areas/${c.slug}.html">
  <meta property="og:title" content="${c.title}">
  <meta property="og:description" content="${c.metaDesc}">
  <meta property="og:image" content="https://sandiegohvacexperts.homes/assets/logo/logo.svg">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  <link rel="stylesheet" href="/css/styles.css">
  <link rel="icon" href="/favicon.ico">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HVACBusiness",
        "name": "San Diego HVAC Experts - ${c.name}",
        "url": "https://sandiegohvacexperts.homes/service-areas/${c.slug}.html",
        "telephone": "+1-615-555-0199",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "${c.name}",
          "addressRegion": "CA",
          "addressCountry": "US"
        },
        "areaServed": "${c.name}, CA"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sandiegohvacexperts.homes/" },
          { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://sandiegohvacexperts.homes/service-areas/san-diego.html" },
          { "@type": "ListItem", "position": 3, "name": "${c.name} HVAC Services", "item": "https://sandiegohvacexperts.homes/service-areas/${c.slug}.html" }
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
        <span class="topbar-item">📍 Serving ${c.name}, CA & ${c.county}</span>
        <span class="topbar-item">🛡️ CSLB License #1048291</span>
      </div>
      <div class="topbar-item">
        <span>Need Help in ${c.name}?</span>
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
              <a href="/services/ac-repair.html" class="nav-link">Services</a>
              <button class="dropdown-toggle-btn" aria-label="Toggle Services Menu" aria-expanded="false">
                <svg class="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M2 4l4 4 4-4"/></svg>
              </button>
            </div>
            <div class="dropdown-menu dropdown-mega">
              <div class="dropdown-grid">
                <div class="dropdown-col">
                  <h4 class="dropdown-heading">Air Conditioning</h4>
                  <ul>
                    <li><a href="/services/ac-repair.html">AC Repair</a></li>
                    <li><a href="/services/ac-installation.html">AC Installation</a></li>
                    <li><a href="/services/ac-replacement.html">AC Replacement</a></li>
                    <li><a href="/services/ac-maintenance.html">AC Maintenance</a></li>
                    <li><a href="/services/emergency-ac-repair.html">Emergency AC Repair</a></li>
                  </ul>
                </div>
                <div class="dropdown-col">
                  <h4 class="dropdown-heading">Heating & Furnace</h4>
                  <ul>
                    <li><a href="/services/heating-repair.html">Heating Repair</a></li>
                    <li><a href="/services/heating-installation.html">Heating Installation</a></li>
                    <li><a href="/services/heating-replacement.html">Heating Replacement</a></li>
                    <li><a href="/services/furnace-repair.html">Furnace Repair</a></li>
                    <li><a href="/services/furnace-installation.html">Furnace Installation</a></li>
                    <li><a href="/services/furnace-replacement.html">Furnace Replacement</a></li>
                  </ul>
                </div>
                <div class="dropdown-col">
                  <h4 class="dropdown-heading">Heat Pumps & Mini-Splits</h4>
                  <ul>
                    <li><a href="/services/heat-pump-repair.html">Heat Pump Repair</a></li>
                    <li><a href="/services/heat-pump-installation.html">Heat Pump Installation</a></li>
                    <li><a href="/services/heat-pump-replacement.html">Heat Pump Replacement</a></li>
                    <li><a href="/services/mini-split-repair.html">Mini Split Repair</a></li>
                    <li><a href="/services/mini-split-installation.html">Mini Split Installation</a></li>
                  </ul>
                </div>
                <div class="dropdown-col">
                  <h4 class="dropdown-heading">Ducts & Air Quality</h4>
                  <ul>
                    <li><a href="/services/ductwork-installation.html">Ductwork Installation</a></li>
                    <li><a href="/services/duct-repair.html">Duct Repair & Sealing</a></li>
                    <li><a href="/services/air-duct-cleaning.html">Air Duct Cleaning</a></li>
                    <li><a href="/services/indoor-air-quality.html">Indoor Air Quality</a></li>
                    <li><a href="/services/thermostat-installation.html">Thermostat Installation</a></li>
                    <li><a href="/services/smart-thermostat-installation.html">Smart Thermostat</a></li>
                  </ul>
                </div>
                <div class="dropdown-col">
                  <h4 class="dropdown-heading">Commercial & Maintenance</h4>
                  <ul>
                    <li><a href="/services/residential-hvac.html">Residential HVAC</a></li>
                    <li><a href="/services/commercial-hvac.html">Commercial HVAC</a></li>
                    <li><a href="/services/hvac-maintenance.html">HVAC Maintenance</a></li>
                    <li><a href="/services/hvac-tune-up.html">HVAC Tune-Up</a></li>
                    <li><a href="/services/hvac-inspection.html">HVAC Inspection</a></li>
                    <li><a href="/services/hvac-repair.html">General HVAC Repair</a></li>
                    <li><a href="/services/hvac-replacement.html">HVAC Replacement</a></li>
                    <li><a href="/services/emergency-hvac-service.html">Emergency HVAC Service</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li class="nav-item-dropdown">
            <div class="nav-link-wrapper">
              <a href="/service-areas/san-diego.html" class="nav-link active">Service Areas</a>
              <button class="dropdown-toggle-btn" aria-label="Toggle Service Areas Menu" aria-expanded="false">
                <svg class="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M2 4l4 4 4-4"/></svg>
              </button>
            </div>
            <div class="dropdown-menu">
              <div class="dropdown-grid dropdown-grid-2col">
                <div class="dropdown-col">
                  <h4 class="dropdown-heading">San Diego Metro & Coastal</h4>
                  <ul>
                    <li><a href="/service-areas/san-diego.html" class="${c.slug === 'san-diego' ? 'active' : ''}">San Diego, CA</a></li>
                    <li><a href="/service-areas/la-jolla.html" class="${c.slug === 'la-jolla' ? 'active' : ''}">La Jolla, CA</a></li>
                    <li><a href="/service-areas/carlsbad.html" class="${c.slug === 'carlsbad' ? 'active' : ''}">Carlsbad, CA</a></li>
                    <li><a href="/service-areas/capistrano-beach.html" class="${c.slug === 'capistrano-beach' ? 'active' : ''}">Capistrano Beach, CA</a></li>
                    <li><a href="/service-areas/los-alamitos.html" class="${c.slug === 'los-alamitos' ? 'active' : ''}">Los Alamitos, CA</a></li>
                    <li><a href="/service-areas/irvine.html" class="${c.slug === 'irvine' ? 'active' : ''}">Irvine, CA</a></li>
                  </ul>
                </div>
                <div class="dropdown-col">
                  <h4 class="dropdown-heading">East County & Inland</h4>
                  <ul>
                    <li><a href="/service-areas/la-mesa.html" class="${c.slug === 'la-mesa' ? 'active' : ''}">La Mesa, CA</a></li>
                    <li><a href="/service-areas/el-cajon.html" class="${c.slug === 'el-cajon' ? 'active' : ''}">El Cajon, CA</a></li>
                    <li><a href="/service-areas/poway.html" class="${c.slug === 'poway' ? 'active' : ''}">Poway, CA</a></li>
                    <li><a href="/service-areas/santee.html" class="${c.slug === 'santee' ? 'active' : ''}">Santee, CA</a></li>
                    <li><a href="/service-areas/rosemead.html" class="${c.slug === 'rosemead' ? 'active' : ''}">Rosemead, CA</a></li>
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

  <!-- Breadcrumbs -->
  <nav class="breadcrumb-nav">
    <div class="container">
      <ul class="breadcrumb-list">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item">/</li>
        <li class="breadcrumb-item"><a href="/service-areas/san-diego.html">Service Areas</a></li>
        <li class="breadcrumb-item">/</li>
        <li class="breadcrumb-item active">${c.name}, CA</li>
      </ul>
    </div>
  </nav>

  <!-- Title Banner -->
  <section class="bg-navy section-padding-sm">
    <div class="container">
      <span class="badge-tag amber">Local HVAC Coverage</span>
      <h1>HVAC Services in ${c.name}, California</h1>
      <p class="lead">Fast, Reliable AC Repair, Heat Pump Installation & Furnace Service in ZIP Codes: ${c.zipCodes}</p>
    </div>
  </section>

  <!-- Main Content Layout -->
  <main class="container section-padding">
    <div class="content-wrapper">
      
      <article class="main-content">
        <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80" 
             alt="HVAC Services in ${c.name}, CA" 
             style="width:100%; height:320px; object-fit:cover; border-radius:var(--radius-lg); margin-bottom:2rem; box-shadow:var(--shadow-md);" 
             loading="lazy">
        <h2>Local Climate & HVAC Requirements in ${c.name}</h2>
        <p>${c.localClimate}</p>

        <p>At <strong>San Diego HVAC Experts</strong>, our mobile service units are stationed directly throughout ${c.county}. We provide same-day emergency dispatch, precision air conditioning diagnostic testing, and energy-smart heat pump installations tailored to ${c.name} homes and businesses.</p>

        <h3>Common HVAC Challenges in ${c.name}</h3>
        <ul>
          ${c.commonIssues.map(issue => `<li><strong>Issue:</strong> ${issue}</li>`).join('\n')}
        </ul>

        <h3>Comprehensive HVAC Services Provided in ${c.name}</h3>
        <p>We provide full-spectrum heating, cooling, and air quality solutions including:</p>
        <ul>
          <li><strong>24/7 Emergency AC Repair:</strong> Rapid diagnosis for frozen coils, refrigerant leaks, and short-cycling air conditioners.</li>
          <li><strong>High-SEER2 AC Installation:</strong> Energy-smart central air systems from Carrier, Trane, Lennox, and Goodman.</li>
          <li><strong>Electric Heat Pump Systems:</strong> All-in-one heating and cooling solutions eligible for up to $2,000 in federal tax credits.</li>
          <li><strong>Ductless Mini Splits:</strong> Multi-zone custom climate control ideal for room additions and ADUs.</li>
          <li><strong>Gas Furnace Repair & Replacement:</strong> Safe, high-AFUE heating solutions for chilly winter evenings.</li>
          <li><strong>Air Duct Cleaning & Purification:</strong> HEPA vacuum duct cleaning and whole-home UV purifiers.</li>
        </ul>

        <!-- Local FAQs -->
        <h2 style="margin-top:3rem;">Frequently Asked Questions in ${c.name}</h2>
        <div class="faq-list" style="margin-top:1.5rem;">
          ${faqsHTML}
        </div>

        <!-- Inline Form -->
        <div style="margin-top:3.5rem; background-color:var(--bg-light); padding:2.5rem; border-radius:var(--radius-lg); border:1px solid var(--border-light);">
          <h3>Request Free Estimate in ${c.name}</h3>
          <p style="margin-bottom:1.5rem; color:var(--text-muted);">Fill out the form below or call <a href="tel:6155550199" style="font-weight:700;">(615) 555-0199</a> for immediate dispatch.</p>
          <form data-api-endpoint="/api/estimate">
            <div class="form-group">
              <label class="form-label">Full Name *</label>
              <input type="text" name="name" class="form-input" required placeholder="John Doe">
            </div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
              <div class="form-group">
                <label class="form-label">Phone Number *</label>
                <input type="tel" name="phone" class="form-input" required placeholder="(615) 555-0199">
              </div>
              <div class="form-group">
                <label class="form-label">ZIP Code</label>
                <input type="text" name="zipCode" class="form-input" value="${c.zipCodes.split(',')[0]}">
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Service Category</label>
              <select name="service" class="form-select" required>
                <option value="ac-repair">Air Conditioning Repair</option>
                <option value="ac-installation">New AC Installation</option>
                <option value="heat-pump">Heat Pump Service</option>
                <option value="furnace-repair">Furnace Repair</option>
                <option value="ducts">Air Duct Cleaning</option>
              </select>
            </div>
            <button type="submit" class="btn btn-accent" style="width:100%;">Submit Free Quote Request</button>
            <div class="alert-box alert-success"></div>
            <div class="alert-box alert-error"></div>
          </form>
        </div>

        <!-- Map -->
        <div style="margin-top:3rem;">
          <h3>Location Map: ${c.name}, CA</h3>
          <div class="map-container" style="height:320px; margin-top:1rem;">
            <iframe 
              title="${c.name} Location Map"
              src="${c.mapEmbedSrc}" 
              allowfullscreen="" 
              loading="lazy">
            </iframe>
          </div>
        </div>

      </article>

      <aside class="sidebar">
        <div class="sidebar-widget">
          <h3>Local Emergency Hotline</h3>
          <p style="font-size:0.9rem; margin-bottom:1rem;">Standing by 24/7 for fast response in ${c.name}.</p>
          <a href="tel:6155550199" class="btn btn-accent" style="width:100%;">📞 Call (615) 555-0199</a>
        </div>

        <div class="sidebar-widget">
          <h3>Popular Services in ${c.name}</h3>
          <ul class="sidebar-links">
            <li><a href="/services/ac-repair.html">❄️ AC Repair</a></li>
            <li><a href="/services/ac-installation.html">🔧 AC Installation</a></li>
            <li><a href="/services/heat-pump-installation.html">🌱 Heat Pump Systems</a></li>
            <li><a href="/services/furnace-repair.html">⚙️ Furnace Repair</a></li>
            <li><a href="/services/air-duct-cleaning.html">🧹 Air Duct Cleaning</a></li>
          </ul>
        </div>

        <div class="sidebar-widget">
          <h3>Nearby Cities Served</h3>
          <ul class="sidebar-links">
            ${cities.filter(other => other.slug !== c.slug).map(other => `<li><a href="/service-areas/${other.slug}.html">📍 ${other.name}, CA</a></li>`).join('\n')}
          </ul>
        </div>
      </aside>

    </div>
  </main>

  <footer class="site-footer">
    <div class="container text-center">
      <p>&copy; 2026 San Diego HVAC Experts. Licensed HVAC Contractor (CSLB #1048291). Serving ${c.name}, CA. <a href="/privacy-policy.html" style="color:#94A3B8; margin-left:0.5rem;">Privacy Policy</a> • <a href="/terms-and-conditions.html" style="color:#94A3B8; margin-left:0.5rem;">Terms & Conditions</a></p>
    </div>
  </footer>

  <script src="/js/main.js"></script>
</body>
</html>`;
}

function run() {
  const targetDir = path.join(process.cwd(), 'service-areas');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  cities.forEach(c => {
    const html = generateCityHTML(c);
    const filePath = path.join(targetDir, `${c.slug}.html`);
    fs.writeFileSync(filePath, html, 'utf-8');
    console.log(`Generated Service Area: ${filePath}`);
  });

  console.log(`Successfully built ${cities.length} city service area pages!`);
}

run();
