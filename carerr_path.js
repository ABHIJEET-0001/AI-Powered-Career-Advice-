const careers = [
  // Tech
  { title: "AI Solutions Architect", category: "Tech", salary: "$120k - $180k", growth: "High", skills: ["Python", "Cloud", "ML"] },
  { title: "Cybersecurity Analyst", category: "Tech", salary: "$90k - $140k", growth: "High", skills: ["Networking", "Security+", "Linux"] },
  { title: "Full Stack Developer", category: "Tech", salary: "$85k - $140k", growth: "High", skills: ["React", "Node.js", "MongoDB"] },
  { title: "Data Scientist", category: "Tech", salary: "$100k - $160k", growth: "High", skills: ["Python", "Statistics", "ML"] },
  { title: "Cloud DevOps Engineer", category: "Tech", salary: "$110k - $170k", growth: "High", skills: ["AWS", "Docker", "Kubernetes"] },
  { title: "Blockchain Developer", category: "Tech", salary: "$105k - $165k", growth: "Emerging", skills: ["Solidity", "Web3", "Smart Contracts"] },

  // Design
  { title: "UX Designer", category: "Design", salary: "$80k - $130k", growth: "Steady", skills: ["Figma", "User Research", "Prototyping"] },
  { title: "Motion Graphics Artist", category: "Design", salary: "$70k - $110k", growth: "Steady", skills: ["After Effects", "Cinema 4D"] },
  { title: "UI Visual Designer", category: "Design", salary: "$75k - $120k", growth: "Steady", skills: ["UI Design", "Branding", "Illustrator"] },
  { title: "Product Designer", category: "Design", salary: "$90k - $140k", growth: "High", skills: ["Design Systems", "UX Strategy"] },

  // Business
  { title: "Fintech Analyst", category: "Business", salary: "$85k - $130k", growth: "Moderate", skills: ["Finance", "SQL", "Data Viz"] },
  { title: "Renewable Energy Engineer", category: "Business", salary: "$95k - $150k", growth: "Critical", skills: ["Engineering", "Sustainability"] },
  { title: "Product Manager", category: "Business", salary: "$100k - $160k", growth: "High", skills: ["Roadmapping", "Agile", "Stakeholders"] },
  { title: "Growth Marketing Manager", category: "Business", salary: "$80k - $140k", growth: "High", skills: ["SEO", "Ads", "Analytics"] },
  { title: "Business Intelligence Analyst", category: "Business", salary: "$90k - $145k", growth: "High", skills: ["Power BI", "SQL", "Dashboards"] },

  // Emerging / Future
  { title: "AR/VR Experience Designer", category: "Design", salary: "$95k - $150k", growth: "Emerging", skills: ["Unity", "XR Design"] },
  { title: "AI Prompt Engineer", category: "Tech", salary: "$110k - $170k", growth: "Emerging", skills: ["LLMs", "Prompting", "AI Tools"] },
  { title: "Climate Data Analyst", category: "Business", salary: "$85k - $135k", growth: "Critical", skills: ["Climate Models", "Python", "GIS"] }
];

const grid = document.getElementById('careerGrid');
const searchInput = document.getElementById('careerSearch');
const filterBtns = document.querySelectorAll('.filter-btn');

/* ================================
   Render Cards + Not Found State
================================ */
function renderCareers(data) {
  grid.innerHTML = '';

  if (data.length === 0) {
    grid.innerHTML = `
      <div class="card" style="grid-column: 1/-1; text-align:center;">
        <h2>😕 No Careers Found</h2>
        <p>Try searching with different keywords or remove filters.</p>
        <p style="opacity:0.7;">Examples: <strong>AI, Design, Cloud, Marketing</strong></p>
      </div>
    `;
    return;
  }

  data.forEach(job => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <span class="tag">${job.category}</span>
      <h3>${job.title}</h3>
      <p><strong>Salary:</strong> ${job.salary}</p>
      <p><strong>Growth:</strong> ${job.growth}</p>
      <div class="skills">
        ${job.skills.map(s => `<small>#${s}</small>`).join(' ')}
      </div>
    `;
    card.onclick = () => showDetails(job);
    grid.appendChild(card);
  });
}

/* ================================
   Smart Search (Title + Skills + Category + Growth)
================================ */
searchInput.addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase();

  const filtered = careers.filter(c => 
    c.title.toLowerCase().includes(term) ||
    c.category.toLowerCase().includes(term) ||
    c.growth.toLowerCase().includes(term) ||
    c.skills.some(s => s.toLowerCase().includes(term))
  );

  renderCareers(filtered);
});

/* ================================
   Category Filter
================================ */
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filter-btn.active')?.classList.remove('active');
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');
    const filtered = filter === 'all'
      ? careers
      : careers.filter(c => c.category === filter);

    renderCareers(filtered);
  });
});

/* ================================
   Modal Logic (Enhanced Content)
================================ */
const modal = document.getElementById('careerModal');
const closeBtn = document.querySelector('.close-btn');

function showDetails(job) {
  document.getElementById('modalBody').innerHTML = `
    <h2>${job.title}</h2>
    <p><strong>Category:</strong> ${job.category}</p>
    <p><strong>Salary Range:</strong> ${job.salary}</p>
    <p><strong>Market Growth:</strong> ${job.growth}</p>
    <p><strong>Key Skills:</strong> ${job.skills.join(', ')}</p>

    <hr style="margin:15px 0;">

    <p>This role is trending in future-ready industries and offers strong long-term career potential.</p>

    <button style="
      padding: 12px 24px; 
      background: linear-gradient(135deg,#2563eb,#38bdf8); 
      color: white; 
      border: none; 
      border-radius: 8px; 
      cursor: pointer;
      font-weight:600;
      box-shadow:0 8px 20px rgba(37,99,235,0.3);
    ">
      🚀 Generate Personalized Learning Roadmap
    </button>
  `;
  modal.style.display = 'block';
}

closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if (e.target == modal) modal.style.display = 'none'; };

/* ================================
   Initial Render
================================ */
renderCareers(careers);
