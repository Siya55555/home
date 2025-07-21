// --- Data Section ---
// Curated Matterport models (sample, add more as needed)
const matterportModels = [
  {
    id: 'vNtptZXMm8U',
    title: 'Residential Real Estate Example 5',
    desc: 'A spacious modern home with open floor plans, large windows, and contemporary finishes.',
    style: 'Modern',
    bedrooms: 4,
    features: ['open kitchen', 'backyard patio'],
    size: 'Medium',
    special: ['Eco-Friendly']
  },
  {
    id: 'P9cgFFtBnqC',
    title: 'Eco-Friendly Smart Home',
    desc: 'Smart home with solar panels, battery storage, and green roof.',
    style: 'Modern',
    bedrooms: 4,
    features: ['solar panels', 'green roof'],
    size: 'Medium',
    special: ['Eco-Friendly', 'Smart Home']
  },
  {
    id: 'tZfn1hNHd5E',
    title: 'Elk Grove Family Home',
    desc: 'Suburban house with dollhouse view, ideal for families, featuring a pool and garage.',
    style: 'Suburban',
    bedrooms: 5,
    features: ['pool', '2-car garage'],
    size: 'Large',
    special: ['Smart Home']
  },
  {
    id: 'rGP6xRhNRNS',
    title: 'Washington DC Residential',
    desc: 'Urban townhouse with modern interiors, high ceilings, and rooftop terrace.',
    style: 'Urban Modern',
    bedrooms: 3,
    features: ['terrace', 'city views'],
    size: 'Medium',
    special: ['Eco-Friendly']
  },
  {
    id: 'ES1siRynVXh',
    title: 'Sacramento Suburban Retreat',
    desc: 'Ranch-style home with expansive yard, updated kitchen, and energy-efficient features.',
    style: 'Ranch',
    bedrooms: 4,
    features: ['yard', 'solar panels'],
    size: 'Large',
    special: ['Eco-Friendly']
  },
  {
    id: 'o3mwks7FnBS',
    title: 'European-Inspired Home Library',
    desc: 'Luxurious residence with library, grand staircase, and elegant decor.',
    style: 'Luxury',
    bedrooms: 6,
    features: ['library', 'wine cellar'],
    size: 'Large',
    special: ['Smart Home']
  },
  {
    id: 'RvQZeTgMZ1o',
    title: 'Roosevelt Library Center Home',
    desc: 'Mid-century home with vintage charm, wood paneling, and spacious rooms.',
    style: 'Mid-Century',
    bedrooms: 4,
    features: ['vintage fixtures', 'garden'],
    size: 'Medium',
    special: ['Fireplace']
  },
  // --- 18 more sample models below ---
  {
    id: 'A1B2C3D4E5F',
    title: 'Modern Lakeview Villa',
    desc: 'Modern villa with lake views, glass walls, and infinity pool.',
    style: 'Modern',
    bedrooms: 5,
    features: ['pool', 'lake view'],
    size: 'Large',
    special: ['Eco-Friendly']
  },
  {
    id: 'B2C3D4E5F6G',
    title: 'Classic Colonial Home',
    desc: 'Colonial style with brick facade, formal dining, and large porch.',
    style: 'Colonial',
    bedrooms: 4,
    features: ['porch', 'formal dining'],
    size: 'Medium',
    special: ['Fireplace']
  },
  {
    id: 'C3D4E5F6G7H',
    title: 'Contemporary Urban Loft',
    desc: 'Open-concept loft with exposed beams and rooftop deck.',
    style: 'Contemporary',
    bedrooms: 2,
    features: ['rooftop deck', 'open kitchen'],
    size: 'Small',
    special: ['Smart Home']
  },
  {
    id: 'D4E5F6G7H8I',
    title: 'Victorian Painted Lady',
    desc: 'Colorful Victorian with ornate trim and bay windows.',
    style: 'Victorian',
    bedrooms: 5,
    features: ['bay windows', 'garden'],
    size: 'Large',
    special: ['Fireplace']
  },
  {
    id: 'E5F6G7H8I9J',
    title: 'Tuscan Countryside Estate',
    desc: 'Tuscan estate with terracotta roof, arched doors, and olive grove.',
    style: 'Mediterranean',
    bedrooms: 6,
    features: ['olive grove', 'arched doors'],
    size: 'Large',
    special: ['Eco-Friendly']
  },
  {
    id: 'F6G7H8I9J0K',
    title: 'Craftsman Bungalow',
    desc: 'Charming bungalow with built-ins, wood beams, and front porch.',
    style: 'Craftsman',
    bedrooms: 3,
    features: ['porch', 'built-ins'],
    size: 'Small',
    special: ['Fireplace']
  },
  {
    id: 'G7H8I9J0K1L',
    title: 'Luxury Beachfront Mansion',
    desc: 'Expansive mansion with private beach, pool, and home theater.',
    style: 'Luxury',
    bedrooms: 8,
    features: ['pool', 'home theater', 'beachfront'],
    size: 'Large',
    special: ['Smart Home']
  },
  {
    id: 'H8I9J0K1L2M',
    title: 'Farmhouse Retreat',
    desc: 'Classic farmhouse with wraparound porch and barn.',
    style: 'Farmhouse',
    bedrooms: 4,
    features: ['porch', 'barn'],
    size: 'Medium',
    special: ['Eco-Friendly']
  },
  {
    id: 'I9J0K1L2M3N',
    title: 'Spanish Revival Villa',
    desc: 'Stucco villa with red tile roof and courtyard.',
    style: 'Mediterranean',
    bedrooms: 5,
    features: ['courtyard', 'tile roof'],
    size: 'Large',
    special: ['Smart Home']
  },
  {
    id: 'J0K1L2M3N4O',
    title: 'Urban Micro-Home',
    desc: 'Efficient micro-home with smart storage and rooftop garden.',
    style: 'Modern',
    bedrooms: 1,
    features: ['rooftop garden', 'smart storage'],
    size: 'Small',
    special: ['Smart Home']
  },
  {
    id: 'K1L2M3N4O5P',
    title: 'Mountain Chalet',
    desc: 'Rustic chalet with stone fireplace and panoramic views.',
    style: 'Contemporary',
    bedrooms: 4,
    features: ['fireplace', 'mountain view'],
    size: 'Medium',
    special: ['Fireplace']
  },
  {
    id: 'L2M3N4O5P6Q',
    title: 'Suburban Family Home',
    desc: 'Family home with playroom, fenced yard, and two-car garage.',
    style: 'Suburban',
    bedrooms: 5,
    features: ['yard', 'garage'],
    size: 'Large',
    special: ['Eco-Friendly']
  },
  {
    id: 'M3N4O5P6Q7R',
    title: 'Minimalist Glass House',
    desc: 'Minimalist home with floor-to-ceiling windows and open plan.',
    style: 'Modern',
    bedrooms: 3,
    features: ['glass walls', 'open plan'],
    size: 'Medium',
    special: ['Eco-Friendly']
  },
  {
    id: 'N4O5P6Q7R8S',
    title: 'Classic Ranch',
    desc: 'Single-story ranch with large backyard and patio.',
    style: 'Ranch',
    bedrooms: 4,
    features: ['patio', 'yard'],
    size: 'Large',
    special: ['Fireplace']
  },
  {
    id: 'O5P6Q7R8S9T',
    title: 'Luxury Penthouse',
    desc: 'Penthouse with skyline views, private elevator, and spa.',
    style: 'Luxury',
    bedrooms: 3,
    features: ['spa', 'elevator'],
    size: 'Medium',
    special: ['Smart Home']
  },
  {
    id: 'P9cgFFtBnqC', // updated to a real public Matterport model ID
    title: 'Mediterranean Courtyard Home',
    desc: 'Home with central courtyard, fountain, and arched windows.',
    style: 'Mediterranean',
    bedrooms: 5,
    features: ['courtyard', 'fountain'],
    size: 'Large',
    special: ['Eco-Friendly']
  },
  {
    id: 'Q7R8S9T0U1V',
    title: 'Victorian Garden House',
    desc: 'Victorian with lush gardens, gazebo, and sunroom.',
    style: 'Victorian',
    bedrooms: 6,
    features: ['garden', 'sunroom'],
    size: 'Large',
    special: ['Fireplace']
  },
  {
    id: 'R8S9T0U1V2W',
    title: 'Contemporary City Townhouse',
    desc: 'Multi-level townhouse with garage and rooftop terrace.',
    style: 'Contemporary',
    bedrooms: 3,
    features: ['garage', 'rooftop terrace'],
    size: 'Medium',
    special: ['Smart Home']
  },
  {
    id: 'T0U1V2W3X4Y',
    title: 'Classic Farmhouse',
    desc: 'Farmhouse with wraparound porch, barn, and orchard.',
    style: 'Farmhouse',
    bedrooms: 5,
    features: ['porch', 'barn', 'orchard'],
    size: 'Large',
    special: ['Eco-Friendly']
  },
  {
    id: 'U1V2W3X4Y5Z',
    title: 'Modern Urban Studio',
    desc: 'Compact studio with smart furniture and city views.',
    style: 'Modern',
    bedrooms: 1,
    features: ['city view', 'smart furniture'],
    size: 'Small',
    special: ['Smart Home']
  }
];

// Wizard options
const styleOptions = [
  {title: 'Modern/Contemporary', desc: 'Clean lines, simple proportions, open layouts, and abundant natural light.', value: 'Modern'},
  {title: 'Craftsman', desc: 'Low-pitched roofs, wide front porches, and exposed wooden structural elements.', value: 'Craftsman'},
  {title: 'Farmhouse', desc: 'Practical and comfortable with gabled roofs and large porches for indoor-outdoor living.', value: 'Farmhouse'},
  {title: 'Mediterranean/Tuscan', desc: 'Low-pitched tile roofs, stucco siding, and arched windows, evoking a warm, sunny climate.', value: 'Mediterranean'},
  {title: 'Victorian', desc: 'Ornate detailing, steep multi-faceted roofs, and vibrant color schemes.', value: 'Victorian'},
  {title: 'Custom/Combination', desc: 'A unique blend of styles tailored to your personal taste and vision.', value: 'Custom'}
];
const bedroomOptions = [
  {title: '2-3 Bedrooms', desc: 'Perfect for couples or small families.', value: 3},
  {title: '4-5 Bedrooms', desc: 'Ideal for growing families or guests.', value: 5},
  {title: '6+ Bedrooms', desc: 'For large families or those who love space.', value: 6}
];
const featureOptions = [
  {title: 'Pool', desc: 'Enjoy a private pool for relaxation and fun.', value: 'pool'},
  {title: 'Yard', desc: 'Spacious yard for outdoor activities.', value: 'yard'},
  {title: 'Patio', desc: 'Perfect for outdoor dining and gatherings.', value: 'patio'}
];
const sizeOptions = [
  {title: 'Small/Starter', desc: 'Cozy and efficient, great for first-time buyers.', value: 'Small'},
  {title: 'Medium/Family', desc: 'Balanced space for comfort and function.', value: 'Medium'},
  {title: 'Large/Luxury', desc: 'Expansive layouts for ultimate living.', value: 'Large'}
];
const specialOptions = [
  {title: 'Fireplace', desc: 'Warm up with a beautiful fireplace.', value: 'Fireplace'},
  {title: 'Smart Home', desc: 'Modern automation and tech features.', value: 'Smart Home'},
  {title: 'Eco-Friendly', desc: 'Sustainable and energy-efficient.', value: 'Eco-Friendly'}
];

// --- State ---
let wizardAnswers = {
  style: null,
  bedrooms: null,
  features: [],
  size: null,
  special: []
};
let filteredModels = [];
let selectedModel = null;

// --- Persistence Helpers ---
function saveWizardState() {
  localStorage.setItem('wizardAnswers', JSON.stringify(wizardAnswers));
  localStorage.setItem('filteredModels', JSON.stringify(filteredModels));
  localStorage.setItem('selectedModel', selectedModel ? JSON.stringify(selectedModel) : '');
}
function loadWizardState() {
  const answers = localStorage.getItem('wizardAnswers');
  const models = localStorage.getItem('filteredModels');
  const selected = localStorage.getItem('selectedModel');
  if (answers) wizardAnswers = JSON.parse(answers);
  if (models) filteredModels = JSON.parse(models);
  if (selected) selectedModel = JSON.parse(selected);
}
function clearWizardState() {
  localStorage.removeItem('wizardAnswers');
  localStorage.removeItem('filteredModels');
  localStorage.removeItem('selectedModel');
}

// --- Helper Functions ---
function showStep(id) {
  // Add fade out animation to current active step
  const currentActive = document.querySelector('.wizard-step.active, .gallery-section.active, .estimate-section.active, .address-section.active');
  if (currentActive) {
    currentActive.style.opacity = '0';
    currentActive.style.transform = 'translateY(-20px)';
    setTimeout(() => {
      currentActive.classList.remove('active');
      currentActive.style.opacity = '';
      currentActive.style.transform = '';
    }, 300);
  }
  
  // Show new step with fade in animation
  setTimeout(() => {
    const newStep = document.getElementById(id);
    if (newStep) {
      newStep.classList.add('active');
      newStep.style.opacity = '0';
      newStep.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        newStep.style.opacity = '1';
        newStep.style.transform = 'translateY(0)';
      }, 50);
    }
  }, 300);
  
  window.scrollTo(0,0);
  
  // Update progress bar if it exists
  updateProgressBar(id);
}

function updateProgressBar(stepId) {
  const progressMap = {
    'step-style': 20,
    'step-bedrooms': 40,
    'step-features': 60,
    'step-size': 80,
    'step-special': 100
  };
  
  const progress = progressMap[stepId];
  if (progress) {
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
      progressFill.style.width = progress + '%';
    }
  }
}
function renderOptions(containerId, options, multi=false, selected=[]) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  
  options.forEach(opt => {
    const card = document.createElement('div');
    card.className = 'option-card';
    
    if (multi && selected.includes(opt.value)) card.classList.add('selected');
    if (!multi && selected === opt.value) card.classList.add('selected');
    
    card.innerHTML = `
      <div class="option-title">${opt.title}</div>
      <div class="option-desc">${opt.desc}</div>
      ${multi ? '<div class="selection-indicator">✓</div>' : ''}
    `;
    
    card.onclick = () => {
      // Add click animation
      card.style.transform = 'scale(0.95)';
      setTimeout(() => {
        card.style.transform = '';
      }, 150);
      
      if (multi) {
        if (selected.includes(opt.value)) {
          selected = selected.filter(v => v !== opt.value);
        } else {
          selected.push(opt.value);
        }
        renderOptions(containerId, options, multi, selected);
      } else {
        selected = opt.value;
        renderOptions(containerId, options, multi, selected);
      }
    };
    
    container.appendChild(card);
  });
  
  return () => selected;
}

// --- Wizard Navigation ---
document.getElementById('start-btn').onclick = () => {
  document.getElementById('welcome-screen').style.display = 'none';
  showStep('step-style');
};
// Step 1: Style
let getStyle = renderOptions('style-options', styleOptions, false, null);
document.getElementById('to-step-bedrooms').onclick = () => {
  wizardAnswers.style = getStyle();
  if (!wizardAnswers.style) return alert('Please select a style.');
  saveWizardState();
  showStep('step-bedrooms');
};
// Step 2: Bedrooms
let getBedrooms = renderOptions('bedroom-options', bedroomOptions, false, null);
document.getElementById('to-step-features').onclick = () => {
  wizardAnswers.bedrooms = getBedrooms();
  if (!wizardAnswers.bedrooms) return alert('Please select bedrooms.');
  saveWizardState();
  showStep('step-features');
};
// Step 3: Features (multi)
let getFeatures = renderOptions('feature-options', featureOptions, true, []);
document.getElementById('to-step-size').onclick = () => {
  wizardAnswers.features = getFeatures();
  saveWizardState();
  showStep('step-size');
};
// Step 4: Size
let getSize = renderOptions('size-options', sizeOptions, false, null);
document.getElementById('to-step-special').onclick = () => {
  wizardAnswers.size = getSize();
  if (!wizardAnswers.size) return alert('Please select a size.');
  saveWizardState();
  showStep('step-special');
};
// Step 5: Special (multi)
let getSpecial = renderOptions('special-options', specialOptions, true, []);
document.getElementById('to-hourglass').onclick = () => {
  wizardAnswers.special = getSpecial();
  saveWizardState();
  showStep('hourglass-step');
  setTimeout(() => {
    // Filter models with more flexible matching and bedroom ranges
    filteredModels = matterportModels.filter(m => {
      let match = true;
      // Flexible style match: allow partial/case-insensitive
      if (wizardAnswers.style && m.style && !m.style.toLowerCase().includes(wizardAnswers.style.toLowerCase().split('/')[0].trim())) match = false;
      // Bedrooms: use ranges
      if (wizardAnswers.bedrooms) {
        if (wizardAnswers.bedrooms === 3 && (m.bedrooms < 2 || m.bedrooms > 3)) match = false;
        if (wizardAnswers.bedrooms === 5 && (m.bedrooms < 4 || m.bedrooms > 5)) match = false;
        if (wizardAnswers.bedrooms === 6 && m.bedrooms < 6) match = false;
      }
      // Size: exact match
      if (wizardAnswers.size && m.size && m.size !== wizardAnswers.size) match = false;
      // Features: match if any selected feature is present (case-insensitive)
      if (wizardAnswers.features && wizardAnswers.features.length) {
        if (!wizardAnswers.features.some(f => m.features.map(x=>x.toLowerCase()).includes(f.toLowerCase()))) match = false;
      }
      // Special: match if any selected special is present (case-insensitive)
      if (wizardAnswers.special && wizardAnswers.special.length) {
        if (!wizardAnswers.special.some(s => m.special.map(x=>x.toLowerCase()).includes(s.toLowerCase()))) match = false;
      }
      return match;
    });
    saveWizardState();
    showGallery();
  }, 2000);
};

// --- On page load, check for saved state ---
document.addEventListener('DOMContentLoaded', function() {
  loadWizardState();
  // If there is saved state, offer to resume or reset
  if (wizardAnswers && (wizardAnswers.style || wizardAnswers.bedrooms || wizardAnswers.size)) {
    if (confirm('Resume your previous Dream Home Wizard session?')) {
      // Resume at gallery if filteredModels exist, else at last answered step
      if (filteredModels && filteredModels.length) {
        showGallery();
      } else if (wizardAnswers.special && wizardAnswers.special.length) {
        showStep('hourglass-step');
        setTimeout(() => { showGallery(); }, 1000);
      } else if (wizardAnswers.size) {
        showStep('step-special');
      } else if (wizardAnswers.features && wizardAnswers.features.length) {
        showStep('step-size');
      } else if (wizardAnswers.bedrooms) {
        showStep('step-features');
      } else if (wizardAnswers.style) {
        showStep('step-bedrooms');
      }
      return;
    } else {
      clearWizardState();
    }
  }
  setupLotInfoHandlers();
});

// --- Gallery ---
function showGallery() {
  showStep('gallery-section');
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';
  if (!filteredModels.length) {
    gallery.innerHTML = '<div style="color:#fff;font-size:1.2rem;">No matching homes found. Try different options.</div>';
    return;
  }
  filteredModels.forEach((m, idx) => {
    const card = document.createElement('div');
    card.className = 'gallery-card';
    card.innerHTML = `
      <div class="gallery-title">${m.title}</div>
      <div class="gallery-desc">${m.desc}</div>
      <div class="gallery-features">Style: ${m.style} | Bedrooms: ${m.bedrooms} | Features: ${m.features.join(', ')}</div>
      <iframe class="gallery-iframe" src="https://my.matterport.com/show/?m=${m.id}&play=1" allowfullscreen></iframe>
      <button class="gallery-btn">Select This Home</button>
      <button class="gallery-btn" style="background:#ffe066;color:#333;margin-left:8px;" data-mpid="${m.id}">Add Furniture</button>
    `;
    card.querySelector('.gallery-btn').onclick = () => {
      selectedModel = m;
      saveWizardState();
      Array.from(document.querySelectorAll('.gallery-card')).forEach(c => c.style.border = 'none');
      card.style.border = '3px solid #7b2ff2';
    };
    // Add Furniture button logic
    card.querySelectorAll('.gallery-btn')[1].onclick = () => {
      openFurnitureModal(m.id);
    };
    gallery.appendChild(card);
  });
}
document.getElementById('to-address').onclick = () => {
  if (!selectedModel) return alert('Please select a home from the gallery.');
  showStep('address-section');
};

// --- Address/Survey Section ---
document.getElementById('to-estimate').onclick = () => {
  // For demo, just proceed. In production, fetch lot info from appraiser site or parse survey.
  showStep('estimate-section');
  showEstimate();
};

// --- Estimate Section ---
function showEstimate() {
  // Simple cost estimate based on model size and FL averages
  if (!selectedModel) return;
  let sq_ft = 2500; // default
  if (selectedModel.size === 'Small') sq_ft = 1600;
  if (selectedModel.size === 'Medium') sq_ft = 2500;
  if (selectedModel.size === 'Large') sq_ft = 3500;
  let cost_per_sqft = 250;
  let construction_cost = sq_ft * cost_per_sqft;
  let permit_fees = construction_cost * 0.01;
  let contractor_fee = (construction_cost + permit_fees) * 0.20;
  let total_cost = construction_cost + permit_fees + contractor_fee;
  let draw_schedule = [
    {phase: 'Initial Deposit/Planning', pct: 0.10, milestone: 'Upon loan approval'},
    {phase: 'Foundation/Site Prep', pct: 0.15, milestone: 'After site clearing and foundation pour'},
    {phase: 'Framing/Rough-In', pct: 0.30, milestone: 'After framing complete, plumbing/electrical rough-in'},
    {phase: 'Interior Finish', pct: 0.30, milestone: 'After drywall, painting, fixtures'},
    {phase: 'Final Completion', pct: 0.15, milestone: 'After inspections and CO'}
  ];
  let html = `<b>Home:</b> ${selectedModel.title}<br>
    <b>Estimated Size:</b> ${sq_ft} sq ft<br>
    <b>Construction Cost:</b> $${construction_cost.toLocaleString()}<br>
    <b>Permit Fees:</b> $${permit_fees.toLocaleString()}<br>
    <b>Contractor Fee (20%):</b> $${contractor_fee.toLocaleString()}<br>
    <b>Total Estimated Cost:</b> <span style="color:#ffe066;">$${total_cost.toLocaleString()}</span><br><br>
    <b>Draw Schedule:</b><ul style="text-align:left;max-width:400px;margin:0 auto;">`;
  draw_schedule.forEach(d => {
    html += `<li><b>${d.phase}:</b> $${(total_cost*d.pct).toLocaleString()} &mdash; <i>${d.milestone}</i></li>`;
  });
  html += '</ul>';
  document.getElementById('estimate-output').innerHTML = html;
  // Add Download 2D Plan button if not already present
  if (!document.getElementById('download-2d-plan-btn')) {
    const btn = document.createElement('button');
    btn.className = 'gallery-btn';
    btn.id = 'download-2d-plan-btn';
    btn.textContent = 'Download 2D Plan';
    btn.style.marginLeft = '12px';
    btn.onclick = download2DPlan;
    document.getElementById('estimate-output').appendChild(btn);
    // Add a message area
    if (!document.getElementById('download-2d-plan-msg')) {
      const msg = document.createElement('div');
      msg.id = 'download-2d-plan-msg';
      msg.style.color = '#ffe066';
      msg.style.marginTop = '8px';
      document.getElementById('estimate-output').appendChild(msg);
    }
  }
}

async function download2DPlan() {
  const msg = document.getElementById('download-2d-plan-msg');
  const btn = document.getElementById('to-instructions');
  
  // Show loading state
  btn.textContent = 'Generating...';
  btn.disabled = true;
  btn.style.opacity = '0.7';
  msg.textContent = 'Generating 2D plan... please wait.';
  
  try {
    const response = await fetch('http://127.0.0.1:5000/generate-plan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model_id: selectedModel.id })
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'floor_plan.png';
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
    
    // Show success state
    msg.textContent = '✅ 2D plan downloaded successfully!';
    msg.style.color = '#4CAF50';
    btn.textContent = 'Download 2D Plans';
    btn.disabled = false;
    btn.style.opacity = '1';
    
    // Reset message after 3 seconds
    setTimeout(() => {
      msg.textContent = '';
      msg.style.color = '';
    }, 3000);
    
  } catch (e) {
    console.error('Download error:', e);
    msg.textContent = `❌ Error generating 2D plan: ${e.message}`;
    msg.style.color = '#f44336';
    btn.textContent = 'Try Again';
    btn.disabled = false;
    btn.style.opacity = '1';
    
    // Reset message after 5 seconds
    setTimeout(() => {
      msg.textContent = '';
      msg.style.color = '';
    }, 5000);
  }
}
document.getElementById('to-instructions').onclick = () => {
  document.getElementById('estimate-section').classList.remove('active');
  document.getElementById('instructions-section').style.display = 'block';
  window.scrollTo(0,0);
  // Provide download link and instructions for the Python script
  document.getElementById('python-script').innerHTML = `
<b>Download the Python script:</b> <a href="generate_plan.py" download>generate_plan.py</a><br>
Run it locally to generate 2D plans and estimates.<br>
<pre>
pip install matplotlib numpy
python generate_plan.py
</pre>
`;
};

// --- Furniture Placement Modal Logic ---
const MP_SDK_KEY = 'YOUR_MATTERPORT_SDK_KEY';
let mpSdk = null;
let placingMode = null; // 'furniture' or 'picture'
let uploadedModelUrl = null;
let uploadedImageUrl = null;

function openFurnitureModal(modelId) {
  const modal = document.getElementById('furniture-modal');
  const iframe = document.getElementById('mp-iframe');
  const msgDiv = document.getElementById('furniture-modal-msg');
  modal.style.display = 'flex';
  msgDiv.textContent = '';
  iframe.src = `https://my.matterport.com/show/?m=${modelId}&play=1`;
  document.getElementById('upload-gltf').value = '';
  document.getElementById('upload-image').value = '';
  mpSdk = null;
  placingMode = null;
  uploadedModelUrl = null;
  uploadedImageUrl = null;

  iframe.onload = async function() {
    try {
      mpSdk = await window.MP_SDK.connect(iframe, MP_SDK_KEY, '');
      msgDiv.textContent = 'Matterport SDK connected. Upload a model or image to begin.';
      setupPlacementListeners();
    } catch (e) {
      msgDiv.textContent = 'Failed to connect to Matterport SDK. Check your SDK key.';
    }
  };
}

document.getElementById('close-furniture-modal').onclick = function() {
  document.getElementById('furniture-modal').style.display = 'none';
  document.getElementById('mp-iframe').src = '';
  mpSdk = null;
  placingMode = null;
  uploadedModelUrl = null;
  uploadedImageUrl = null;
};

document.getElementById('upload-gltf').addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    uploadedModelUrl = url;
    placingMode = 'furniture';
    document.getElementById('furniture-modal-msg').textContent = '3D model uploaded. Click in the 3D view to place.';
  }
});
document.getElementById('upload-image').addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    uploadedImageUrl = url;
    placingMode = 'picture';
    document.getElementById('furniture-modal-msg').textContent = 'Image uploaded. Click on a wall in the 3D view to place.';
  }
});

function setupPlacementListeners() {
  if (!mpSdk) return;
  mpSdk.Pointer.intersection.subscribe(async (intersection) => {
    if (!placingMode) return;
    if (placingMode === 'furniture' && uploadedModelUrl && intersection.object === 'intersected' && Math.abs(intersection.normal.y) > 0.9) {
      // Place furniture (GLTF model) on floor
      await placeFurniture(intersection.position);
      placingMode = null;
      document.getElementById('furniture-modal-msg').textContent = 'Furniture placed!';
    } else if (placingMode === 'picture' && uploadedImageUrl && intersection.object === 'intersected' && Math.abs(intersection.normal.y) < 0.1) {
      // Place picture (image) on wall
      await placePicture(intersection.position, intersection.normal);
      placingMode = null;
      document.getElementById('furniture-modal-msg').textContent = 'Picture placed!';
    }
  });
}

async function placeFurniture(position) {
  if (!mpSdk || !uploadedModelUrl) return;
  const sceneObject = await mpSdk.Scene.createObjects(1);
  const node = sceneObject[0].addNode();
  const gltfComponent = node.addComponent('mp.gltfLoader', {
    url: uploadedModelUrl
  });
  gltfComponent.inputs.localScale = { x: 0.01, y: 0.01, z: 0.01 };
  node.obj3D.position.copy(position);
  node.obj3D.position.y += 0.1; // Slight offset above floor
  node.start();
}

async function placePicture(position, normal) {
  if (!mpSdk || !uploadedImageUrl) return;
  const sceneObject = (await mpSdk.Scene.createObjects(1))[0];
  const node = sceneObject.addNode();
  const geometry = new window.THREE.PlaneGeometry(1, 1);
  const textureLoader = new window.THREE.TextureLoader();
  const material = new window.THREE.MeshBasicMaterial({ map: textureLoader.load(uploadedImageUrl), side: window.THREE.DoubleSide });
  const picture = new window.THREE.Mesh(geometry, material);
  node.obj3D.add(picture);
  node.obj3D.position.copy(position);
  // Orient to wall
  const quaternion = new window.THREE.Quaternion();
  quaternion.setFromUnitVectors(new window.THREE.Vector3(0, 0, 1), normal);
  node.obj3D.quaternion.copy(quaternion);
  node.start();
}

// --- Lot Info Fetch & Fit Check ---
let lotInfo = null;
let isRenovation = false;

function mockFetchLotInfo(address) {
  // Simulate fetching lot info from public appraiser site
  // In real implementation, replace with actual API call or scraping
  // For demo, return a random lot size and random house existence
  if (!address || address.length < 5) return null;
  // Simulate: 80% chance lot found, 50% chance house exists
  if (Math.random() < 0.2) return null;
  const lotSize = (0.2 + Math.random() * 1.5).toFixed(2); // acres
  const hasHouse = Math.random() < 0.5;
  return {
    lotSizeAcres: parseFloat(lotSize),
    lotSizeSqft: Math.round(parseFloat(lotSize) * 43560),
    hasHouse: hasHouse
  };
}

function showLotInfoUI(info) {
  const lotDiv = document.getElementById('lot-info');
  if (!info) {
    lotDiv.innerHTML = '<span style="color:#ffb3b3;">Lot info not found. Please enter lot size manually below.</span>';
    document.getElementById('manual-lot-section').style.display = 'block';
    return;
  }
  lotDiv.innerHTML = `<b>Lot Size:</b> ${info.lotSizeAcres} acres (${info.lotSizeSqft} sq ft)` +
    (info.hasHouse ? '<br><span style="color:#ffe066;">A house already exists on this lot. Switching to renovation mode.</span>' : '');
  document.getElementById('manual-lot-section').style.display = 'none';
  lotInfo = info;
  isRenovation = info.hasHouse;
  // Fit check
  if (!isRenovation && selectedModel) {
    let houseSqft = 2500;
    if (selectedModel.size === 'Small') houseSqft = 1600;
    if (selectedModel.size === 'Medium') houseSqft = 2500;
    if (selectedModel.size === 'Large') houseSqft = 3500;
    if (houseSqft > info.lotSizeSqft * 0.5) {
      lotDiv.innerHTML += '<br><span style="color:#ffb3b3;">Warning: Selected house may not fit on this lot.</span>';
    } else {
      lotDiv.innerHTML += '<br><span style="color:#b3ffb3;">Selected house fits the lot.</span>';
    }
  }
}

// Add UI for lot info in address-section
// (Add these elements in your HTML if not present)
// <div id="lot-info" style="margin:12px 0 8px 0;"></div>
// <div id="manual-lot-section" style="display:none;">
//   <label for="manual-lot-sqft">Enter lot size (sq ft):</label>
//   <input type="number" id="manual-lot-sqft" min="500" step="1" placeholder="e.g. 10000">
//   <button class="wizard-btn" id="manual-lot-btn">Set Lot Size</button>
// </div>

// Add event listeners for lot info fetch and manual entry
function setupLotInfoHandlers() {
  const fetchBtn = document.getElementById('fetch-lot-btn');
  if (fetchBtn) {
    fetchBtn.onclick = () => {
      const address = document.getElementById('address-input').value;
      const info = mockFetchLotInfo(address);
      showLotInfoUI(info);
    };
  }
  const manualBtn = document.getElementById('manual-lot-btn');
  if (manualBtn) {
    manualBtn.onclick = () => {
      const sqft = parseInt(document.getElementById('manual-lot-sqft').value, 10);
      if (!sqft || sqft < 500) {
        alert('Please enter a valid lot size.');
        return;
      }
      showLotInfoUI({ lotSizeAcres: (sqft/43560).toFixed(2), lotSizeSqft: sqft, hasHouse: false });
    };
  }
} 
