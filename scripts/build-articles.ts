import fs from 'fs';
import path from 'path';

interface ArticleDef {
  slug: string;
  title: string;
  metaDesc: string;
  h1: string;
  date: string;
  readTime: string;
  category: string;
  contentHtml: string;
}

const articles: ArticleDef[] = [
  {
    slug: 'how-often-should-you-service-your-ac-in-san-diego',
    title: 'How Often Should You Service Your AC in San Diego? | Expert Guide',
    metaDesc: 'Learn how often you should tune up your air conditioner in San Diego. Prevent heatwave breakdowns, preserve warranties, and lower electric bills.',
    h1: 'How Often Should You Service Your AC in San Diego?',
    date: 'July 2026',
    readTime: '5 min read',
    category: 'AC Maintenance',
    contentHtml: `
      <p>San Diego’s climate is world-renowned for its pleasant year-round temperatures. However, for your home’s central air conditioner, Southern California’s microclimates present unique challenges. From coastal salt fog along La Jolla and Carlsbad to intense inland heat spikes in El Cajon and Poway, air conditioners work hard to maintain comfortable indoor humidity and temperature.</p>

      <h2>The Recommended Service Frequency: Twice Per Year</h2>
      <p>HVAC industry experts, including major manufacturers like Carrier, Trane, and Lennox, recommend servicing your heating and cooling equipment <strong>twice a year</strong>:</p>
      <ul>
        <li><strong>Spring AC Tune-Up (March – May):</strong> Prepares your air conditioner for heavy summer workloads before high heatwaves hit San Diego County.</li>
        <li><strong>Fall Heating Check (September – November):</strong> Inspects your gas furnace or heat pump before chilly winter evenings arrive.</li>
      </ul>

      <h2>Why San Diego Climate Requires Annual AC Maintenance</h2>
      <h3>1. Coastal Salt Air Corrosion</h3>
      <p>If you live within 5 to 10 miles of the Pacific Ocean, salt spray in the atmosphere accelerates oxidation on aluminum fins and copper coil tubing. Annual coil cleaning and protective coating inspections prevent refrigerant leaks caused by salt corrosion.</p>

      <h3>2. High Dust & Pollen Accumulation</h3>
      <p>Inland neighborhoods like Poway and Santee experience dry seasonal winds carrying dust and agricultural pollen. Dirty air filters and clogged blower wheels restrict airflow, causing evaporator coils to freeze into solid ice blocks.</p>

      <h3>3. Warranty Protection Compliance</h3>
      <p>Did you know that most manufacturer warranties require documented annual professional maintenance? Failing to schedule regular tune-ups can void your warranty coverage on expensive replacement parts like compressors and heat exchangers.</p>

      <h2>What Is Included in a Professional AC Tune-Up?</h2>
      <p>A comprehensive maintenance inspection from San Diego HVAC Experts includes:</p>
      <ul>
        <li>Deep cleaning of condenser and evaporator coils</li>
        <li>Testing refrigerant pressures and checking for micro-leaks</li>
        <li>Inspecting electrical contactors, capacitors, and wire terminals</li>
        <li>Flushing condensate drain lines to prevent overflow and water damage</li>
        <li>Testing thermostat calibration and airflow balance across all vents</li>
      </ul>

      <p>Don't wait for your air conditioner to break down on a 95°F summer afternoon. <a href="/contact.html">Schedule your annual AC tune-up today</a> or call (615) 555-0199!</p>
    `
  },
  {
    slug: 'heat-pump-vs-traditional-furnace-san-diego-guide',
    title: 'Heat Pump vs. Traditional Furnace in San Diego: Full Comparison',
    metaDesc: 'Comparing heat pumps vs gas furnaces in San Diego. Learn which system offers higher energy efficiency, lower utility bills, and federal tax credits.',
    h1: 'Heat Pump vs. Traditional Furnace: Which Is Best for San Diego Homes?',
    date: 'June 2026',
    readTime: '7 min read',
    category: 'Energy Efficiency',
    contentHtml: `
      <p>With California’s aggressive clean energy electrification goals and rising natural gas prices, many Southern California homeowners are evaluating whether to replace aging gas furnaces with modern electric heat pumps.</p>

      <h2>Understanding the Core Difference</h2>
      <p><strong>Gas Furnaces:</strong> Burn natural gas or propane to generate heat through combustion, distributing hot air via ductwork. While powerful, furnaces consume fossil fuels and require gas line venting.</p>
      <p><strong>Heat Pumps:</strong> Do not generate heat through burning fuel. Instead, they use electricity to transfer thermal energy between indoor and outdoor air. In summer, a heat pump acts as an air conditioner. In winter, the reversing valve switches direction to pump outdoor heat inside.</p>

      <h2>Why Heat Pumps Thrive in San Diego’s Climate</h2>
      <p>Heat pumps excel in moderate climate zones where winter temperatures rarely fall below freezing. Because San Diego winter temperatures typically stay between 45°F and 65°F, heat pumps operate at maximum efficiency without requiring auxiliary heat strips.</p>

      <h3>Key Advantages of Heat Pumps:</h3>
      <ul>
        <li><strong>Two Systems in One:</strong> Replaces both your central air conditioner and furnace with a single unit.</li>
        <li><strong>No Natural Gas Safety Hazards:</strong> Zero risk of carbon monoxide leaks or fuel combustion issues.</li>
        <li><strong>Federal Tax Credits:</strong> Under the Inflation Reduction Act (IRA), qualifying high-efficiency heat pumps qualify for tax credits up to $2,000.</li>
        <li><strong>Solar PV Synergy:</strong> If your home features rooftop solar panels, powering an electric heat pump significantly lowers winter energy costs.</li>
      </ul>

      <h2>When a Gas Furnace Still Makes Sense</h2>
      <p>Gas furnaces remain popular for homeowners in inland mountain areas requiring instant, high-temperature heat output during cold winter nights, or for homes without adequate electrical panel capacity for heat pump conversion.</p>

      <p>Unsure which system fits your home? Contact San Diego HVAC Experts at <a href="tel:6155550199">(615) 555-0199</a> for a free home evaluation!</p>
    `
  },
  {
    slug: 'signs-your-air-conditioner-needs-immediate-repair',
    title: 'Top 5 Signs Your Air Conditioner Needs Immediate Repair',
    metaDesc: 'Discover 5 warning signs your AC unit needs immediate repair. Strange noises, warm air, water leaks, or high energy bills? Call (615) 555-0199.',
    h1: '5 Warning Signs Your Air Conditioner Needs Immediate Repair',
    date: 'May 2026',
    readTime: '4 min read',
    category: 'AC Repair',
    contentHtml: `
      <p>Air conditioners rarely fail without warning. In most cases, malfunctioning components give off clear warning signals days or weeks before a complete system shutdown occurs.</p>

      <h2>1. AC Blowing Warm Air</h2>
      <p>If your thermostat is set to "Cool" but warm air blows from your supply vents, your system may have a dirty air filter, restricted refrigerant line, or tripped outdoor compressor breaker.</p>

      <h2>2. Loud Grinding or Squeaking Noises</h2>
      <p>Modern air conditioners operate quietly. Rattling indicates loose motor mounts or fan blades; squeaking indicates worn blower motor bearings; screeching points to dangerous high compressor pressure.</p>

      <h2>3. Water Pooling Around the Indoor Unit</h2>
      <p>While minor condensation is normal, standing water around your furnace or indoor air handler indicates a clogged condensate drain line or cracked drain pan. Unchecked water leaks lead to drywall damage and toxic mold growth.</p>

      <h2>4. Unexplained Jump in Monthly Electric Bills</h2>
      <p>If your electric bill spikes significantly compared to the same month last year without additional usage, your compressor or fan motor is straining due to component wear or low refrigerant levels.</p>

      <h2>5. Frequent Short-Cycling</h2>
      <p>Short-cycling occurs when your AC turns on, runs for 2 to 3 minutes, and turns off repeatedly. This strains electrical components and accelerates equipment wear.</p>

      <p>Notice any of these red flags? <a href="/services/emergency-ac-repair.html">Schedule an emergency AC repair</a> with San Diego HVAC Experts today!</p>
    `
  },
  {
    slug: 'how-to-lower-hvac-energy-bills-in-southern-california',
    title: 'How to Lower HVAC Energy Bills in Southern California',
    metaDesc: 'Proven strategies to lower your summer air conditioning and winter heating bills in San Diego and SoCal. Smart thermostats, duct sealing, and SEER2.',
    h1: '7 Proven Ways to Lower Your HVAC Energy Bills in SoCal',
    date: 'April 2026',
    readTime: '6 min read',
    category: 'Energy Savings',
    contentHtml: `
      <p>Heating and cooling account for over 50% of average home energy consumption in California. With peak electrical utility rates rising across SDG&E and Edison territories, implementing energy-smart HVAC practices saves hundreds of dollars annually.</p>

      <h2>1. Install a Smart Programmable Thermostat</h2>
      <p>Upgrading to a Nest, Ecobee, or Honeywell smart thermostat allows you to set automated setback temperatures when sleeping or at work. Saving 7-10 degrees for 8 hours a day reduces annual cooling bills by up to 10%.</p>

      <h2>2. Seal Leaky Air Ducts</h2>
      <p>The U.S. Department of Energy estimates that typical duct systems leak 20% to 30% of conditioned air into unconditioned attics or crawlspaces. Professional duct sealing redirects lost air back into your living space.</p>

      <h2>3. Replace Air Filters Every 60-90 Days</h2>
      <p>Clogged filters force blower motors to work twice as hard to draw air, dramatically increasing electricity consumption while overheating components.</p>

      <h2>4. Upgrade to a High-SEER2 Inverter Unit</h2>
      <p>Older 10 SEER air conditioners consume significantly more electricity than modern 16-20 SEER2 variable-speed inverter systems that adjust output based on real-time weather demand.</p>

      <h2>5. Use Ceiling Fans Correctly</h2>
      <p>Ceiling fans cool people, not rooms, through wind-chill effect. Set fan blades to rotate counterclockwise in summer and clockwise on low in winter.</p>

      <p>Want a personalized home energy audit? <a href="/contact.html">Contact San Diego HVAC Experts today!</a></p>
    `
  },
  {
    slug: 'air-duct-cleaning-benefits-for-indoor-air-quality',
    title: 'Air Duct Cleaning Benefits for Health & HVAC Efficiency',
    metaDesc: 'Discover how professional air duct cleaning removes dust, mold spores, and pet dander while boosting HVAC blower efficiency in San Diego homes.',
    h1: 'The Health & Efficiency Benefits of Professional Air Duct Cleaning',
    date: 'March 2026',
    readTime: '5 min read',
    category: 'Air Quality',
    contentHtml: `
      <p>When was the last time you thought about what is hiding inside your home's air duct system? Over years of daily heating and cooling, supply and return ducts accumulate significant layers of dust, pollen, pet dander, lint, and fungal spores.</p>

      <h2>1. Relief for Allergy & Asthma Sufferers</h2>
      <p>Every time your blower fan kicks on, microscopic allergens resting in dirty ducts recirculate into your living room and bedrooms. HEPA negative-air vacuum cleaning eliminates dust reservoirs at the source.</p>

      <h2>2. Elimination of Musty Household Odors</h2>
      <p>Persistent odors from cooking spices, household pets, or dampness often originate inside contaminated duct insulation. Professional duct cleaning flushes out odor-causing bacteria.</p>

      <h2>3. Improved Airflow & Blower Longevity</h2>
      <p>Dust buildup inside ducts increases static pressure resistance, forcing your blower motor to pull more electrical current to push air. Clean ducts restore optimal airflow balance.</p>

      <h2>4. Cleaner Furniture & Hard Surfaces</h2>
      <p>If you notice a thick film of dust reappearing on tables and shelves within 24 hours of cleaning, dirty ventilation ducts are likely blowing dust back into your rooms.</p>

      <p>Improve your family's indoor air quality today. <a href="/services/air-duct-cleaning.html">Book professional air duct cleaning in San Diego!</a></p>
    `
  }
];

function generateArticleHTML(a: ArticleDef): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${a.title}</title>
  <meta name="description" content="${a.metaDesc}">
  <link rel="canonical" href="https://sandiegohvacexperts.homes/blog/${a.slug}.html">
  <meta name="robots" content="index, follow">

  <meta property="og:type" content="article">
  <meta property="og:url" content="https://sandiegohvacexperts.homes/blog/${a.slug}.html">
  <meta property="og:title" content="${a.title}">
  <meta property="og:description" content="${a.metaDesc}">
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
    "@type": "BlogPosting",
    "headline": "${a.h1}",
    "description": "${a.metaDesc}",
    "author": {
      "@type": "Organization",
      "name": "San Diego HVAC Experts"
    },
    "publisher": {
      "@type": "Organization",
      "name": "San Diego HVAC Experts",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sandiegohvacexperts.homes/assets/logo/logo.svg"
      }
    },
    "mainEntityOfPage": "https://sandiegohvacexperts.homes/blog/${a.slug}.html"
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
      </div>
      <div class="topbar-item">
        <span>Need HVAC Advice?</span>
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

          <li><a href="/blog/how-often-should-you-service-your-ac-in-san-diego.html" class="nav-link active">Blog</a></li>
          <li><a href="/contact.html" class="nav-link">Contact</a></li>
        </ul>
      </nav>

      <div class="nav-actions">
        <a href="tel:6155550199" class="btn btn-outline btn-sm">📞 Call Now</a>
      </div>
    </div>
  </header>

  <!-- Breadcrumbs -->
  <nav class="breadcrumb-nav">
    <div class="container">
      <ul class="breadcrumb-list">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item">/</li>
        <li class="breadcrumb-item"><a href="/blog/how-often-should-you-service-your-ac-in-san-diego.html">Blog</a></li>
        <li class="breadcrumb-item">/</li>
        <li class="breadcrumb-item active">${a.h1}</li>
      </ul>
    </div>
  </nav>

  <!-- Article Banner -->
  <section class="bg-navy section-padding-sm">
    <div class="container">
      <span class="badge-tag amber">${a.category}</span>
      <h1>${a.h1}</h1>
      <p style="color:#CBD5E1; font-size:0.95rem; margin-bottom:0;">
        Published ${a.date} • ${a.readTime} • By San Diego HVAC Technical Editorial Team
      </p>
    </div>
  </section>

  <!-- Main Content Layout -->
  <main class="container section-padding">
    <div class="content-wrapper">
      
      <article class="main-content">
        <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80" 
             alt="${a.h1}" 
             style="width:100%; height:380px; object-fit:cover; border-radius:var(--radius-lg); margin-bottom:2rem; box-shadow:var(--shadow-md);" 
             loading="lazy">
        ${a.contentHtml}
      </article>

      <aside class="sidebar">
        <div class="sidebar-widget">
          <h3>Need Professional HVAC Assistance?</h3>
          <p style="font-size:0.9rem; margin-bottom:1rem;">Our certified technicians provide 24/7 emergency repair and free installation estimates throughout San Diego County.</p>
          <a href="tel:6155550199" class="btn btn-accent" style="width:100%;">📞 Call (615) 555-0199</a>
        </div>

        <div class="sidebar-widget">
          <h3>More HVAC Blog Posts</h3>
          <ul class="sidebar-links">
            ${articles.filter(other => other.slug !== a.slug).map(other => `<li><a href="/blog/${other.slug}.html">📖 ${other.h1}</a></li>`).join('\n')}
          </ul>
        </div>

        <div class="sidebar-widget">
          <h3>Featured HVAC Services</h3>
          <ul class="sidebar-links">
            <li><a href="/services/ac-repair.html">❄️ AC Repair</a></li>
            <li><a href="/services/ac-installation.html">🔧 AC Installation</a></li>
            <li><a href="/services/heat-pump-installation.html">🌱 Heat Pump Systems</a></li>
            <li><a href="/services/air-duct-cleaning.html">🧹 Air Duct Cleaning</a></li>
          </ul>
        </div>
      </aside>

    </div>
  </main>

  <footer class="site-footer">
    <div class="container text-center">
      <p>&copy; 2026 San Diego HVAC Experts. CSLB License #1048291. All Rights Reserved. <a href="/privacy-policy.html" style="color:#94A3B8; margin-left:0.5rem;">Privacy Policy</a> • <a href="/terms-and-conditions.html" style="color:#94A3B8; margin-left:0.5rem;">Terms & Conditions</a></p>
    </div>
  </footer>

  <script src="/js/main.js"></script>
</body>
</html>`;
}

function run() {
  const targetDir = path.join(process.cwd(), 'blog');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  articles.forEach(a => {
    const html = generateArticleHTML(a);
    const filePath = path.join(targetDir, `${a.slug}.html`);
    fs.writeFileSync(filePath, html, 'utf-8');
    console.log(`Generated Blog Post: ${filePath}`);
  });

  console.log(`Successfully built ${articles.length} blog pages!`);
}

run();
