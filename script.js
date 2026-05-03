const members = [
  { 
    id:0, date:'23 Mar 2026', company:'Redstone Mining Ltd', member:'Ira Patel', location:'Nagpur', mobile:'+91 8408326704', email:'ira.patel@redstone.com', status:'suspended', plan:'enterprise', photo:'https://randomuser.me/api/portraits/women/44.jpg', address:'Plot 42, MIDC, Nagpur',
    joinIp: '95.66.134.42', lastLogin: '2 hours ago', companyType: 'Manufacturer', role: 'Director', about: 'Redstone Mining Ltd is a leading manufacturer of industrial-grade mining equipment and raw mineral processing units. Established in 2008, the company serves clients across India and Southeast Asia.',
    contacts: [
      { name: 'Ira Patel', role: 'Director', phone: '+91 8408326704', email: 'ira.patel@redstone.com' },
      { name: 'Amit Sharma', role: 'Operations Manager', phone: '+91 9882142918', email: 'amit.s@redstone.com' },
      { name: 'Diya Gupta', role: 'CEO', phone: '+91 7028519305', email: 'diya.gupta@rudra.com' }
    ],
    addresses: [
      { type: 'Primary', detail: 'Plot 42, MIDC, Nagpur, Maharashtra' },
      { type: 'Secondary', detail: '12th Floor, Trade Center, Mumbai' }
    ]
  },
  { 
    id:1, date:'24 Jan 2026', company:'Rudra Steel Works', member:'Diya Gupta', location:'Chennai', mobile:'+91 7028519305', email:'diya.gupta@rudra.com', status:'active', plan:'enterprise', photo:'https://randomuser.me/api/portraits/women/65.jpg', address:'Ambattur Ind. Estate, Chennai',
    joinIp: '102.45.22.11', lastLogin: '1 day ago', companyType: 'Steel Production', role: 'CEO', about: 'Rudra Steel Works specializes in high-quality structural steel and custom fabrication services for major infrastructure projects.',
    contacts: [{ name: 'Diya Gupta', role: 'CEO', phone: '+91 7028519305', email: 'diya.gupta@rudra.com' }],
    addresses: [{ type: 'Factory', detail: 'Ambattur Ind. Estate, Chennai' }]
  },
  { 
    id:2, date:'18 Jan 2026', company:'Saffron Exports', member:'Ishaan Reddy', location:'Jaipur', mobile:'+91 8834759735', email:'shaan.reddy@saffron.com', status:'active', plan:'business', photo:'https://randomuser.me/api/portraits/men/32.jpg', address:'B-22, Sitapura, Jaipur',
    joinIp: '45.12.99.201', lastLogin: '5 mins ago', companyType: 'Exporter', role: 'Founder', about: 'Saffron Exports is a premier export house dealing in authentic Indian spices and textiles for the European market.',
    contacts: [{ name: 'Ishaan Reddy', role: 'Founder', phone: '+91 8834759735', email: 'shaan.reddy@saffron.com' }],
    addresses: [{ type: 'Head Office', detail: 'B-22, Sitapura, Jaipur' }]
  },
  { 
    id:3, date:'04 Jan 2026', company:'Sharma Jewellers', member:'Aditya Sharma', location:'Chandigarh', mobile:'+91 9882142918', email:'aditya.sharma@sharma.com', status:'pending', plan:'nil', photo:'https://randomuser.me/api/portraits/men/45.jpg', address:'Sector 22-C, Chandigarh',
    joinIp: '110.22.33.44', lastLogin: '3 days ago', companyType: 'Retailer', role: 'Owner', about: 'Sharma Jewellers is a multi-generational boutique offering bespoke gold and diamond jewellery in the heart of Chandigarh.',
    contacts: [{ name: 'Aditya Sharma', role: 'Owner', phone: '+91 9882142918', email: 'aditya.sharma@sharma.com' }],
    addresses: [{ type: 'Showroom', detail: 'Sector 22-C, Chandigarh' }]
  },
  { 
    id:4, date:'05 Dec 2025', company:'Vyom AgriTech', member:'Kabir Nair', location:'Hyderabad', mobile:'+91 9820011504', email:'kabir.nair@vyom.com', status:'suspended', plan:'free', photo:'https://randomuser.me/api/portraits/men/22.jpg', address:'HITEC City, Hyderabad',
    joinIp: '88.12.45.67', lastLogin: '1 week ago', companyType: 'AgriTech', role: 'CTO', about: 'Vyom AgriTech provides precision agriculture solutions using IoT sensors and AI-driven analytics for Indian farmers.',
    contacts: [{ name: 'Kabir Nair', role: 'CTO', phone: '+91 9820011504', email: 'kabir.nair@vyom.com' }],
    addresses: [{ type: 'Office', detail: 'HITEC City, Hyderabad' }]
  },
  { 
    id:5, date:'24 Nov 2025', company:'Coastal Seafoods', member:'Maya Verma', location:'Kochi', mobile:'+91 8856174832', email:'maya.verma@coastal.com', status:'expire', plan:'starter', photo:'https://randomuser.me/api/portraits/women/28.jpg', address:'Harbour Road, Kochi',
    joinIp: '77.33.21.90', lastLogin: '2 weeks ago', companyType: 'Food Processing', role: 'Managing Director', about: 'Coastal Seafoods is a premium seafood processing and export company based out of Kochi, Kerala.',
    contacts: [{ name: 'Maya Verma', role: 'Managing Director', phone: '+91 8856174832', email: 'maya.verma@coastal.com' }],
    addresses: [{ type: 'Factory', detail: 'Harbour Road, Kochi, Kerala' }]
  },
  { 
    id:6, date:'09 Oct 2025', company:'Indigo Pharma', member:'Ananya Kapoor', location:'Ahmedabad', mobile:'+91 9361872296', email:'ananya.kapoor@indigo.com', status:'pending', plan:'nil', photo:'https://randomuser.me/api/portraits/women/33.jpg', address:'GIDC Vatva, Ahmedabad',
    joinIp: '55.66.77.88', lastLogin: '5 days ago', companyType: 'Pharmaceutical', role: 'Founder', about: 'Indigo Pharma focuses on generic drug manufacturing and API production for domestic and international markets.',
    contacts: [{ name: 'Ananya Kapoor', role: 'Founder', phone: '+91 9361872296', email: 'ananya.kapoor@indigo.com' }],
    addresses: [{ type: 'Plant', detail: 'GIDC Vatva, Ahmedabad, Gujarat' }]
  },
  { 
    id:7, date:'14 Sep 2025', company:'Aurora Logistics', member:'Vihaan Singh', location:'Delhi', mobile:'+91 9901457488', email:'vihaan.singh@aurora.com', status:'active', plan:'starter', photo:'https://randomuser.me/api/portraits/men/55.jpg', address:'Okhla Phase-II, New Delhi',
    joinIp: '112.90.45.12', lastLogin: '30 mins ago', companyType: 'Logistics', role: 'CEO', about: 'Aurora Logistics provides end-to-end supply chain solutions across India with a focus on last-mile delivery.',
    contacts: [{ name: 'Vihaan Singh', role: 'CEO', phone: '+91 9901457488', email: 'vihaan.singh@aurora.com' }],
    addresses: [{ type: 'Head Office', detail: 'Okhla Phase-II, New Delhi' }]
  },
  { 
    id:8, date:'22 Aug 2025', company:'Bluebell Cafe Co.', member:'Neha Agarwal', location:'Kolkata', mobile:'+91 9739421934', email:'neha.agarwal@bluebell.com', status:'expire', plan:'starter', photo:'https://randomuser.me/api/portraits/women/50.jpg', address:'Park Street, Kolkata',
    joinIp: '99.88.77.66', lastLogin: '1 month ago', companyType: 'Hospitality', role: 'Owner', about: 'Bluebell Cafe Co. is a specialty coffee chain with a focus on artisanal roasts and cozy ambiance.',
    contacts: [{ name: 'Neha Agarwal', role: 'Owner', phone: '+91 9739421934', email: 'neha.agarwal@bluebell.com' }],
    addresses: [{ type: 'Flagship', detail: 'Park Street, Kolkata' }]
  },
  { 
    id:9, date:'10 Jul 2025', company:'Summit Traders', member:'Rohan Mehta', location:'Mumbai', mobile:'+91 9112358741', email:'rohan.mehta@summit.com', status:'active', plan:'business', photo:'https://randomuser.me/api/portraits/men/36.jpg', address:'BKC, Bandra East, Mumbai',
    joinIp: '44.55.66.77', lastLogin: '1 hour ago', companyType: 'Trading', role: 'Partner', about: 'Summit Traders is a diversified trading firm dealing in commodities, textiles, and electronics.',
    contacts: [{ name: 'Rohan Mehta', role: 'Partner', phone: '+91 9112358741', email: 'rohan.mehta@summit.com' }],
    addresses: [{ type: 'Office', detail: 'BKC, Bandra East, Mumbai' }]
  },
  { 
    id:10, date:'01 Jun 2025', company:'Prism Textiles', member:'Sneha Joshi', location:'Surat', mobile:'+91 8825467190', email:'sneha.joshi@prism.com', status:'pending', plan:'nil', photo:'https://randomuser.me/api/portraits/women/12.jpg', address:'Ring Road, Surat',
    joinIp: '33.44.55.66', lastLogin: '4 days ago', companyType: 'Textiles', role: 'Director', about: 'Prism Textiles manufactures premium quality fabrics for both domestic and export markets.',
    contacts: [{ name: 'Sneha Joshi', role: 'Director', phone: '+91 8825467190', email: 'sneha.joshi@prism.com' }],
    addresses: [{ type: 'Factory', detail: 'Ring Road, Surat, Gujarat' }]
  },
  { 
    id:11, date:'18 May 2025', company:'Zenith Infotech', member:'Arjun Das', location:'Bangalore', mobile:'+91 9944125803', email:'arjun.das@zenith.com', status:'active', plan:'business', photo:'https://randomuser.me/api/portraits/men/64.jpg', address:'Prestige Tech Park, Bangalore',
    joinIp: '22.33.44.55', lastLogin: '10 mins ago', companyType: 'IT Services', role: 'CEO', about: 'Zenith Infotech is a leading IT services and consulting firm specializing in cloud solutions and digital transformation.',
    contacts: [{ name: 'Arjun Das', role: 'CEO', phone: '+91 9944125803', email: 'arjun.das@zenith.com' }],
    addresses: [{ type: 'HQ', detail: 'Prestige Tech Park, Bangalore' }]
  },
  { 
    id:12, date:'02 Apr 2025', company:'Heritage Spices', member:'Priya Menon', location:'Thiruvananthapuram', mobile:'+91 8803216754', email:'priya.menon@heritage.com', status:'active', plan:'starter', photo:'https://randomuser.me/api/portraits/women/71.jpg', address:'Pattom, Thiruvananthapuram',
    joinIp: '11.22.33.44', lastLogin: '2 days ago', companyType: 'FMCG', role: 'Founder', about: 'Heritage Spices curates and exports authentic Kerala spices to premium international markets.',
    contacts: [{ name: 'Priya Menon', role: 'Founder', phone: '+91 8803216754', email: 'priya.menon@heritage.com' }],
    addresses: [{ type: 'Warehouse', detail: 'Pattom, Thiruvananthapuram' }]
  },
  { 
    id:13, date:'15 Mar 2025', company:'Emerald Foods', member:'Karan Bhatia', location:'Ludhiana', mobile:'+91 9678234501', email:'karan.bhatia@emerald.com', status:'expire', plan:'free', photo:'https://randomuser.me/api/portraits/men/78.jpg', address:'Focal Point, Ludhiana',
    joinIp: '66.77.88.99', lastLogin: '3 weeks ago', companyType: 'Food Production', role: 'MD', about: 'Emerald Foods produces organic and health-conscious food products for the Indian market.',
    contacts: [{ name: 'Karan Bhatia', role: 'MD', phone: '+91 9678234501', email: 'karan.bhatia@emerald.com' }],
    addresses: [{ type: 'Factory', detail: 'Focal Point, Ludhiana, Punjab' }]
  },
  { 
    id:14, date:'28 Feb 2025', company:'Nova Electronics', member:'Tanvi Rao', location:'Pune', mobile:'+91 9534128976', email:'tanvi.rao@nova.com', status:'pending', plan:'nil', photo:'https://randomuser.me/api/portraits/women/85.jpg', address:'Amanora Mall, Pune',
    joinIp: '55.44.33.22', lastLogin: '6 days ago', companyType: 'Electronics', role: 'COO', about: 'Nova Electronics designs and manufactures consumer electronics and smart home devices.',
    contacts: [{ name: 'Tanvi Rao', role: 'COO', phone: '+91 9534128976', email: 'tanvi.rao@nova.com' }],
    addresses: [{ type: 'Office', detail: 'Amanora Mall, Pune, Maharashtra' }]
  }
];

let currentFilter = 'all';
let searchQuery = '';
let sortCol = 'date';
let sortDir = 'desc';
let currentPage = 1;
let rowsPerPage = 10;

const tbody = document.getElementById('members-tbody');
const directoryView = document.getElementById('directory-view');
const profileView = document.getElementById('profile-view');
const paginationControls = document.getElementById('pagination-controls');

const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span class="material-icons-round">${type === 'success' ? 'check_circle' : 'error'}</span> ${message}`;
  container.appendChild(toast);
  setTimeout(() => { toast.classList.add('fade-out'); setTimeout(() => toast.remove(), 300); }, 3000);
}

function toggleDropdown(id, btnEl) {
  const dropdown = document.getElementById(`dropdown-${id}`);
  const isShowing = dropdown.classList.contains('show');
  closeAllDropdowns();
  if (!isShowing) {
    const rect = btnEl.getBoundingClientRect();
    dropdown.style.top = (rect.bottom + 4 + window.scrollY) + 'px';
    dropdown.style.left = (rect.right - 144 + window.scrollX) + 'px';
    dropdown.classList.add('show');
  }
}

function closeAllDropdowns() {
  document.querySelectorAll('.dropdown-menu').forEach(d => d.classList.remove('show'));
}

document.addEventListener('click', closeAllDropdowns);

function setFilter(status) {
  currentFilter = status;
  currentPage = 1;
  document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
  const active = document.querySelector(`.filter-pill[data-filter="${status}"]`);
  if (active) active.classList.add('active');
  renderTable();
  closeAllDropdowns();
}

function toggleSort(col) {
  if (sortCol === col) {
    sortDir = sortDir === 'asc' ? 'desc' : 'asc';
  } else {
    sortCol = col;
    sortDir = 'asc';
  }
  renderTable();
}

function updateSortIcons() {
  document.querySelectorAll('.sort-icon').forEach(icon => {
    icon.textContent = 'unfold_more';
    icon.style.color = 'var(--border)';
    icon.style.opacity = '0.5';
  });
  const activeIcon = document.getElementById(`sort-icon-${sortCol}`);
  if (activeIcon) {
    activeIcon.textContent = sortDir === 'asc' ? 'north' : 'south';
    activeIcon.style.color = 'var(--blue)';
    activeIcon.style.opacity = '1';
  }
}

function getFiltered() {
  let filtered = members.filter(m => {
    const mf = currentFilter === 'all' || m.status.toLowerCase() === currentFilter.toLowerCase();
    const q = searchQuery.toLowerCase();
    const ms = !q || m.company.toLowerCase().includes(q) || m.member.toLowerCase().includes(q) || m.email.toLowerCase().includes(q) || m.mobile.includes(q);
    return mf && ms;
  });

  filtered.sort((a, b) => {
    let valA = a[sortCol];
    let valB = b[sortCol];
    
    // Default to name for Action sort
    if (sortCol === 'action') { valA = a.member; valB = b.member; }

    if (sortCol === 'date') {
      valA = new Date(valA);
      valB = new Date(valB);
    } else if (typeof valA === 'string') {
      valA = valA.toLowerCase();
      valB = valB.toLowerCase();
    }
    
    if (valA < valB) return sortDir === 'asc' ? -1 : 1;
    if (valA > valB) return sortDir === 'asc' ? 1 : -1;
    return 0;
  });
  return filtered;
}

function renderTable() {
  const filtered = getFiltered();
  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const pageItems = filtered.slice(start, end);

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="10" style="text-align:center;padding:60px;color:var(--text-soft);">No members found.</td></tr>`;
    return;
  }

  tbody.innerHTML = pageItems.map((m, i) => `
    <tr style="animation-delay: ${i * 0.03}s">
      <td onclick="openProfile(${m.id})">${m.date}</td>
      <td onclick="openProfile(${m.id})">${m.company}</td>
      <td onclick="openProfile(${m.id})">
        <div class="cell-member">
          <img class="member-avatar" src="${m.photo}" alt="${m.member}" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(m.member)}&background=eef3ff&color=4880ff'">
          <span class="member-name">${m.member}</span>
        </div>
      </td>
      <td onclick="openProfile(${m.id})">${m.location}</td>
      <td class="address-cell" title="${m.address}" onclick="openProfile(${m.id})">${m.address}</td>
      <td onclick="openProfile(${m.id})">${m.mobile}</td>
      <td onclick="openProfile(${m.id})">${m.email}</td>
      <td onclick="openProfile(${m.id})"><span class="status-badge ${m.status}">${capitalize(m.status)}</span></td>
      <td onclick="openProfile(${m.id})">${capitalize(m.plan)}</td>
      <td class="action-cell">
        <button class="action-btn" onclick="event.stopPropagation(); toggleDropdown(${m.id}, this)">
          <span class="material-icons-round">more_horiz</span>
        </button>
        <div class="dropdown-menu" id="dropdown-${m.id}">
          <button class="dropdown-item" onclick="openProfile(${m.id}); closeAllDropdowns();"><span class="material-icons-round">edit</span> Edit</button>
          <button class="dropdown-item delete" onclick="showToast('Profile deleted', 'error'); closeAllDropdowns();"><span class="material-icons-round">delete</span> Delete</button>
        </div>
      </td>
    </tr>
  `).join('');

  renderPagination(filtered.length);
  updateSortIcons();
}

function renderPagination(total) {
  const tp = Math.ceil(total / rowsPerPage);
  let html = '';

  for (let i = 1; i <= tp; i++) {
    html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})">${String(i).padStart(2, '0')}</button>`;
  }
  
  paginationControls.innerHTML = html;

  const prevBtn = document.getElementById('prev-page');
  const nextBtn = document.getElementById('next-page');
  
  if(currentPage === 1) {
    prevBtn.disabled = true;
    prevBtn.style.opacity = '0.4';
    prevBtn.style.cursor = 'default';
  } else {
    prevBtn.disabled = false;
    prevBtn.style.opacity = '1';
    prevBtn.style.cursor = 'pointer';
    prevBtn.onclick = () => goToPage(currentPage - 1);
  }

  if(currentPage === tp || tp === 0) {
    nextBtn.disabled = true;
    nextBtn.style.opacity = '0.4';
    nextBtn.style.cursor = 'default';
  } else {
    nextBtn.disabled = false;
    nextBtn.style.opacity = '1';
    nextBtn.style.cursor = 'pointer';
    nextBtn.onclick = () => goToPage(currentPage + 1);
  }
}

function goToPage(page) {
  const total = getFiltered().length;
  const tp = Math.ceil(total / rowsPerPage);
  if (page < 1 || page > tp) return;
  currentPage = page;
  renderTable();
  document.querySelector('.table-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function toggleSort() {
  sortDir = sortDir === 'desc' ? 'asc' : 'desc';
  renderTable();
}

function openProfile(id, tab = 'company') {
  const m = members.find(x => x.id === id);
  if (!m) return;
  directoryView.classList.add('hidden');
  profileView.classList.remove('hidden');
  document.querySelector('.top-bar-search').style.display = 'none';
  document.querySelector('.top-bar').style.marginBottom = '8px';

  profileView.innerHTML = `
    <div class="breadcrumbs">
      <a href="#" onclick="closeProfile()">Directory</a>
      <span class="material-icons-round" style="font-size:16px; margin:0 4px">chevron_right</span>
      <span class="current">${m.company}</span>
    </div>

    <div class="profile-header-card">
      <div class="profile-header-top">
        <div class="profile-avatar-wrapper">
          <img class="profile-header-avatar" src="${m.photo}" alt="${m.member}">
          <div class="avatar-edit-btn"><span class="material-icons-round">edit</span></div>
        </div>
        <div class="profile-header-info" style="display:flex; flex-direction:column; justify-content:center; flex:1;">
          <div style="display:flex; justify-content:space-between; align-items:center; width:100%;">
            <div style="display:flex; align-items:center; gap:12px;">
              <div class="profile-header-name" style="font-size: 2rem; font-weight: 900; color: var(--text); letter-spacing: -0.8px;">${m.company}</div>
              <span class="status-badge ${m.status}">${capitalize(m.status)}</span>
            </div>
            <button class="btn-outline" style="border-color:#fecaca; color:#ef4444; padding:6px 16px; font-size:0.85rem;" onclick="showToast('Profile deleted', 'error'); closeProfile();">
              <span class="material-icons-round" style="font-size:16px; color:#ef4444;">delete</span> Delete Profile
            </button>
          </div>
          <div class="profile-header-sub">${m.companyType} &middot; ${m.member}, ${m.role}</div>
        </div>
      </div>
      <div class="profile-header-divider"></div>
      <div class="profile-stats-row">
        <div class="stat-item">
          <div class="stat-label">Join Date</div>
          <div class="stat-value">${m.date}</div>
        </div>
        <div class="stat-item">
          <div class="stat-label">Join IP</div>
          <div class="stat-value">${m.joinIp || '95.66.134.42'}</div>
        </div>
        <div class="stat-item">
          <div class="stat-label">Location</div>
          <div class="stat-value">${m.location}</div>
        </div>
        <div class="stat-item">
          <div class="stat-label">Last Login</div>
          <div class="stat-value">${m.lastLogin || '2 hours ago'}</div>
        </div>
      </div>
    </div>

    <div class="profile-tabs" id="profile-tabs">
      <button class="profile-tab ${tab==='company'?'active':''}" onclick="switchTab(${id},'company')"><span class="material-icons-round">business</span> Company</button>
      <button class="profile-tab ${tab==='contacts'?'active':''}" onclick="switchTab(${id},'contacts')"><span class="material-icons-round">people</span> Contacts</button>
      <button class="profile-tab ${tab==='addresses'?'active':''}" onclick="switchTab(${id},'addresses')"><span class="material-icons-round">location_on</span> Addresses</button>
      <button class="profile-tab ${tab==='plan'?'active':''}" onclick="switchTab(${id},'plan')"><span class="material-icons-round">card_membership</span> Current Plan</button>
      <button class="profile-tab ${tab==='assign'?'active':''}" onclick="switchTab(${id},'assign')"><span class="material-icons-round">swap_horiz</span> Change Plan</button>
      <button class="profile-tab ${tab==='email'?'active':''}" onclick="switchTab(${id},'email')"><span class="material-icons-round">mail</span> Email</button>
      <button class="profile-tab ${tab==='history'?'active':''}" onclick="switchTab(${id},'history')"><span class="material-icons-round">history</span> Status History</button>
    </div>

    <div class="profile-content" id="profile-tab-content">${renderProfileTab(m, tab)}</div>
  `;
}

function switchTab(id, tab) {
  openProfile(id, tab);
}

function renderProfileTab(m, tab) {
  if (tab === 'company') {
    return `
      <div class="content-card">
        <div class="profile-section-header" style="justify-content: space-between; align-items: center;">
          <div style="display:flex; gap:12px; align-items:center;">
            <div class="profile-section-icon"><span class="material-icons-round">business</span></div>
            <h3 class="profile-section-title" style="margin:0;">Company Profile</h3>
          </div>
          <div style="display:flex; gap:12px;">
            <button class="btn-primary" style="background:#4880FF; padding: 6px 16px; font-size: 0.9rem;" onclick="openEditModal('company', ${m.id}, 0)">
              <span class="material-icons-round" style="font-size: 16px;">edit</span> Edit
            </button>
            <button class="btn-outline" style="padding: 6px 16px; font-size: 0.9rem;" onclick="showToast('Exporting data...', 'success')">
              <span class="material-icons-round" style="font-size: 16px;">file_download</span> Export
            </button>
          </div>
        </div>

        <div class="company-bubble-card">

          <div class="company-bubble-grid">
            <div class="company-bubble-field">
              <span class="company-bubble-label">Company Name</span>
              <span class="company-bubble-value">${m.company}</span>
            </div>
            <div class="company-bubble-field">
              <span class="company-bubble-label">Business Type</span>
              <span class="bubble-tag blue" style="width:fit-content">${m.companyType}</span>
            </div>
            <div class="company-bubble-field">
              <span class="company-bubble-label">Website</span>
              <span class="company-bubble-value">www.${m.company.toLowerCase().replace(/ /g,'')}.com</span>
            </div>
            <div class="company-bubble-field">
              <span class="company-bubble-label">Email ID</span>
              <span class="company-bubble-value">${m.email}</span>
            </div>
            <div class="company-bubble-field">
              <span class="company-bubble-label">GST No</span>
              <span class="company-bubble-value">${m.gst || '29ABCDE1234F1Z5'}</span>
            </div>
            <div class="company-bubble-field">
              <span class="company-bubble-label">Phone No 1</span>
              <span class="company-bubble-value">${m.mobile}</span>
            </div>
            <div class="company-bubble-field">
              <span class="company-bubble-label">Phone No 2</span>
              <span class="company-bubble-value">${m.phone2 || '+91 —'}</span>
            </div>
            <div class="company-bubble-field">
              <span class="company-bubble-label">Member Since</span>
              <span class="company-bubble-value">${m.date}</span>
            </div>
            <div class="company-bubble-field company-bubble-field--full">
              <span class="company-bubble-label">About Business</span>
              <span class="company-bubble-value" style="line-height:1.7; color:var(--text-mid); font-weight:600">${m.about || 'No description available.'}</span>
            </div>
          </div>
        </div>
      </div>
    `;

  } else if (tab === 'contacts') {
    const contacts = m.contacts || [];
    return `
      <div class="content-card">
        <div class="profile-section-header" style="justify-content: space-between; align-items: center;">
          <div style="display:flex; gap:12px; align-items:flex-start;">
            <div class="profile-section-icon"><span class="material-icons-round">group</span></div>
            <div>
              <h3 class="profile-section-title">Manage Contacts</h3>
              <p class="profile-section-desc">Primary and secondary contact persons for this account.</p>
            </div>
          </div>
          <button class="btn-primary" onclick="openAddModal('contact', ${m.id})">
            <span class="material-icons-round">add</span> Add Contact
          </button>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-top: 20px;">
          ${contacts.map((c, ci) => {
            const status = c.status || 'Active';
            const statusClass = status.toLowerCase() === 'inactive' ? 'inactive' : 'active';
            return `
            <div class="employee-card" style="position:relative">
              <div style="position:absolute; top:16px; right:16px; z-index:10;">
                <button class="action-btn" onclick="event.stopPropagation(); toggleDropdown('contact-${m.id}-${ci}', this)">
                  <span class="material-icons-round">more_vert</span>
                </button>
                <div class="dropdown-menu" id="dropdown-contact-${m.id}-${ci}" style="right:0;top:100%;margin-top:4px">
                  <button class="dropdown-item" onclick="event.stopPropagation(); openEditModal('contact', ${m.id}, ${ci}); closeAllDropdowns();"><span class="material-icons-round">edit</span> Edit</button>
                  <button class="dropdown-item delete" onclick="event.stopPropagation(); showToast('Contact removed', 'error'); closeAllDropdowns();"><span class="material-icons-round">delete</span> Delete</button>
                </div>
              </div>
              <div class="employee-card-header">
                <img src="https://randomuser.me/api/portraits/${ci % 2 === 0 ? 'men' : 'women'}/${ci + 10}.jpg" alt="${c.name}" class="employee-avatar" style="width:44px; height:44px;">
                <div class="employee-info">
                  <div class="employee-name">${c.name}</div>
                  <div class="employee-role">${c.role}</div>
                </div>
              </div>
              <div class="employee-contact">
                <div class="contact-row">
                  <span class="material-icons-round">call</span> ${c.phone}
                </div>
                <div class="contact-row">
                  <span class="material-icons-round">mail_outline</span> ${c.email}
                </div>
              </div>
              <div class="employee-card-footer" style="margin-top: 16px;">
                <span class="employee-badge ${statusClass}">${status}</span>
              </div>
            </div>
            `;
          }).join('') || '<p style="color:var(--text-soft)">No contacts added.</p>'}
        </div>
      </div>
    `;
  } else if (tab === 'addresses') {
    const addresses = m.addresses || [];
    return `
      <div class="content-card">
        <div class="profile-section-header" style="justify-content: space-between; align-items: center;">
          <div style="display:flex; gap:12px; align-items:flex-start;">
            <div class="profile-section-icon" style="width: 44px; height: 44px; flex-shrink: 0; border: 1px solid var(--border); background: var(--white);"><span class="material-icons-round">location_city</span></div>
            <div>
              <h3 class="profile-section-title">Registered Addresses</h3>
              <p class="profile-section-desc">Official headquarters and registered business addresses. Maximum 3 addresses.</p>
            </div>
          </div>
          <button class="btn-primary" onclick="openAddModal('address', ${m.id})">
            <span class="material-icons-round">add</span> Add Address
          </button>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-top: 20px;">
          ${addresses.map((a, ai) => `
            <div class="employee-card" style="position:relative; min-height: 160px;">
              <div style="position:absolute; top:16px; right:16px; z-index:10;">
                <button class="action-btn" onclick="event.stopPropagation(); toggleDropdown('addr-${m.id}-${ai}', this)">
                  <span class="material-icons-round">more_vert</span>
                </button>
                <div class="dropdown-menu" id="dropdown-addr-${m.id}-${ai}" style="right:0;top:100%;margin-top:4px">
                  <button class="dropdown-item" onclick="event.stopPropagation(); openEditModal('address', ${m.id}, ${ai}); closeAllDropdowns();"><span class="material-icons-round">edit</span> Edit</button>
                  <button class="dropdown-item delete" onclick="event.stopPropagation(); showToast('Address removed', 'error'); closeAllDropdowns();"><span class="material-icons-round">delete</span> Delete</button>
                </div>
              </div>
              <div class="employee-card-header">
                <div style="width:40px; height:40px; border-radius:10px; background:#1e293b; display:flex; align-items:center; justify-content:center; flex-shrink:0; margin-right:12px;">
                  <span class="material-icons-round" style="color:#fff; font-size:22px;">location_city</span>
                </div>
                <div class="employee-info">
                  <div class="employee-name" style="text-transform:uppercase; font-size:0.8rem;">${a.type} Address</div>
                  <div style="font-weight:700; color:var(--text-soft); font-size:0.85rem;">${a.city || m.location}</div>
                </div>
              </div>
              <div class="employee-contact" style="margin-bottom:0; border-top: 1px dashed var(--border); padding-top: 12px; margin-top: 12px;">
                <div class="contact-row" style="align-items:flex-start;">
                  <span class="material-icons-round" style="margin-top:2px;">place</span>
                  <span style="line-height:1.5;">${a.detail}</span>
                </div>
              </div>
            </div>
          `).join('') || '<p style="color:var(--text-soft)">No addresses found.</p>'}
        </div>
      </div>
    `;
  } else if (tab === 'plan') {
    return `
      <div class="content-card">
        <div class="profile-section-header" style="justify-content: space-between; align-items: center;">
          <div style="display:flex; gap:12px; align-items:flex-start;">
            <div class="profile-section-icon" style="width: 44px; height: 44px; flex-shrink: 0; border: 1px solid var(--border); background: var(--white);"><span class="material-icons-round">payment</span></div>
            <div>
              <h3 class="profile-section-title">Current Plan Overview</h3>
              <p class="profile-section-desc">Active subscription details and billing cycle information.</p>
            </div>
          </div>
          <button class="btn-primary" onclick="showToast('Manage Billing clicked', 'success')">
            <span class="material-icons-round">payment</span> Manage Billing
          </button>
        </div>

        <!-- Plan Banner -->
        <div style="margin-top:24px; border: 1px solid var(--border); border-radius:16px; background: #fff; padding:28px 32px; display:flex; justify-content:space-between; align-items:center;">
          <div>
            <div style="display:flex; align-items:center; gap:12px; margin-bottom:12px;">
              <span style="font-size:0.75rem;font-weight:800;color:var(--text-soft);text-transform:uppercase;letter-spacing:1px;background:#f1f5f9;padding:4px 10px;border-radius:100px;">Active Plan</span>
              <span style="display:inline-flex;align-items:center;gap:6px;background:#f0fdf4;padding:4px 10px;border-radius:100px;">
                <span style="width:6px;height:6px;border-radius:50%;background:#16a34a;display:inline-block;"></span>
                <span style="font-size:0.75rem;font-weight:800;color:#16a34a;">Auto-renew ON</span>
              </span>
            </div>
            <div style="font-size:2.2rem;font-weight:900;color:var(--text);line-height:1;margin-bottom:8px;">${capitalize(m.plan)} Plan</div>
            <div style="font-size:0.9rem;font-weight:600;color:var(--text-mid);">Renews automatically on Aug 15, 2026</div>
          </div>
          <div style="text-align:right;">
            <div style="font-size:2.8rem;font-weight:900;color:var(--blue);line-height:1;">$99<span style="font-size:1.1rem;color:var(--text-mid);font-weight:700;">/mo</span></div>
          </div>
        </div>

        <!-- Stats Row -->
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:16px;">
          <div style="border:1px solid var(--border);border-radius:12px;padding:18px 20px;background:#fff;">
            <div style="font-size:0.72rem;font-weight:800;color:var(--text-soft);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px;">Billing Cycle</div>
            <div style="font-size:1.1rem;font-weight:900;color:var(--text);">Monthly</div>
          </div>
          <div style="border:1px solid var(--border);border-radius:12px;padding:18px 20px;background:#fff;">
            <div style="font-size:0.72rem;font-weight:800;color:var(--text-soft);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px;">Next Payment</div>
            <div style="font-size:1.1rem;font-weight:900;color:var(--text);">Aug 15, 2026</div>
          </div>
          <div style="border:1px solid var(--border);border-radius:12px;padding:18px 20px;background:#fff;">
            <div style="font-size:0.72rem;font-weight:800;color:var(--text-soft);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px;">Member Since</div>
            <div style="font-size:1.1rem;font-weight:900;color:var(--text);">Nov 24, 2025</div>
          </div>
        </div>

        <!-- Billing History -->
        <div style="margin-top:24px;">
          <h4 style="font-size:1rem;font-weight:900;color:var(--text);margin-bottom:16px;">Billing History</h4>
          <div style="display:flex;flex-direction:column;gap:10px;">
            <div style="display:flex;align-items:center;justify-content:space-between;border:1px solid var(--border);border-radius:12px;padding:16px 20px;background:#fff;">
              <div style="display:flex;align-items:center;gap:14px;">
                <div style="width:38px;height:38px;border-radius:10px;background:#f0fdf4;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                  <span class="material-icons-round" style="color:#16a34a;font-size:20px;">receipt_long</span>
                </div>
                <div>
                  <div style="font-weight:800;color:var(--text);font-size:0.95rem;">Jul 15, 2026</div>
                  <a href="#" style="color:var(--blue);font-weight:700;font-size:0.82rem;text-decoration:none;">INV-2026-07</a>
                </div>
              </div>
              <div style="display:flex;align-items:center;gap:20px;">
                <div style="font-weight:900;font-size:1rem;color:var(--text);">$99.00</div>
                <span class="bubble-tag" style="background:#dcfce7;color:#16a34a;">Paid</span>
              </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;border:1px solid var(--border);border-radius:12px;padding:16px 20px;background:#fff;">
              <div style="display:flex;align-items:center;gap:14px;">
                <div style="width:38px;height:38px;border-radius:10px;background:#f0fdf4;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                  <span class="material-icons-round" style="color:#16a34a;font-size:20px;">receipt_long</span>
                </div>
                <div>
                  <div style="font-weight:800;color:var(--text);font-size:0.95rem;">Jun 15, 2026</div>
                  <a href="#" style="color:var(--blue);font-weight:700;font-size:0.82rem;text-decoration:none;">INV-2026-06</a>
                </div>
              </div>
              <div style="display:flex;align-items:center;gap:20px;">
                <div style="font-weight:900;font-size:1rem;color:var(--text);">$99.00</div>
                <span class="bubble-tag" style="background:#dcfce7;color:#16a34a;">Paid</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

  } else if (tab === 'email') {
    return `
      <div class="content-card">
        <div class="profile-section-header" style="justify-content:space-between; align-items:center; margin-bottom:20px;">
          <div style="display:flex; gap:12px; align-items:flex-start;">
            <div class="profile-section-icon" style="width:44px;height:44px;flex-shrink:0;border:1px solid var(--border);background:var(--white);"><span class="material-icons-round">mail</span></div>
            <div>
              <h3 class="profile-section-title">Email &amp; Communication</h3>
              <p class="profile-section-desc">Sending to <strong>${m.email || 'contact@example.com'}</strong>. All communications are logged.</p>
            </div>
          </div>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; align-items:flex-start;">

          <!-- LEFT: COMPOSE -->
          <div style="border:1px solid var(--border); border-radius:12px; overflow:hidden;">
            <div style="padding:14px 20px; border-bottom:1px solid var(--border); background:#f8fafc;">
              <div style="font-size:0.7rem;font-weight:800;color:var(--text-soft);text-transform:uppercase;letter-spacing:0.8px;">// Compose</div>
            </div>
            <div style="padding:20px;">
              <div style="margin-bottom:14px;">
                <div style="font-size:0.7rem;font-weight:800;color:var(--text-soft);text-transform:uppercase;letter-spacing:0.6px;margin-bottom:10px;">Quick Templates</div>
                <div style="display:flex;flex-wrap:wrap;gap:8px;">
                  <button onclick="document.getElementById('email-subj-${m.id}').value='Welcome to the Platform'; document.getElementById('email-body-${m.id}').value='Hi ${m.member},\n\nWelcome! Your account is now active.\n\n— Admin Team';" style="border:1px solid var(--border);background:#fff;padding:5px 12px;border-radius:20px;font-size:0.8rem;font-weight:700;color:var(--text-mid);cursor:pointer;font-family:inherit;">Welcome Email</button>
                  <button onclick="document.getElementById('email-subj-${m.id}').value='Your plan is about to expire'; document.getElementById('email-body-${m.id}').value='Hi ${m.member},\n\nThis is a reminder that your current plan is expiring soon. Please renew to continue access.\n\n— Admin Team';" style="border:1px solid var(--border);background:#fff;padding:5px 12px;border-radius:20px;font-size:0.8rem;font-weight:700;color:var(--text-mid);cursor:pointer;font-family:inherit;">Plan Expiry Reminder</button>
                  <button onclick="document.getElementById('email-subj-${m.id}').value='Account Under Review'; document.getElementById('email-body-${m.id}').value='Hi ${m.member},\n\nYour account is currently under review. We will notify you shortly.\n\n— Admin Team';" style="border:1px solid var(--border);background:#fff;padding:5px 12px;border-radius:20px;font-size:0.8rem;font-weight:700;color:var(--text-mid);cursor:pointer;font-family:inherit;">Account Under Review</button>
                </div>
              </div>
              <div style="margin-bottom:12px;">
                <label style="display:block;font-size:0.7rem;font-weight:800;color:var(--text-soft);text-transform:uppercase;letter-spacing:0.6px;margin-bottom:6px;">Subject</label>
                <input id="email-subj-${m.id}" type="text" placeholder="e.g. Account verification required" style="width:100%;padding:10px 14px;border:1px solid var(--border);background:#fff;border-radius:8px;font-size:0.88rem;font-weight:700;color:var(--text);outline:none;font-family:inherit;box-sizing:border-box;">
              </div>
              <div style="margin-bottom:16px;">
                <label style="display:block;font-size:0.7rem;font-weight:800;color:var(--text-soft);text-transform:uppercase;letter-spacing:0.6px;margin-bottom:6px;">Body</label>
                <textarea id="email-body-${m.id}" rows="6" placeholder="Write your message here..." style="width:100%;padding:10px 14px;border:1px solid var(--border);background:#fff;border-radius:8px;font-size:0.88rem;font-weight:600;color:var(--text);outline:none;font-family:inherit;resize:vertical;box-sizing:border-box;"></textarea>
              </div>
              <button class="btn-primary" style="width:100%;border-radius:8px;justify-content:center;" onclick="showToast('Email sent successfully','success')">
                <span class="material-icons-round">send</span> Send Email
              </button>
            </div>
          </div>

          <!-- RIGHT: HISTORY -->
          <div style="border:1px solid var(--border); border-radius:12px; overflow:hidden;">
            <div style="padding:14px 20px; border-bottom:1px solid var(--border); background:#f8fafc; display:flex; justify-content:space-between; align-items:center;">
              <div style="font-size:0.7rem;font-weight:800;color:var(--text-soft);text-transform:uppercase;letter-spacing:0.8px;">// History (3)</div>
              <button style="background:none;border:none;font-size:0.75rem;font-weight:800;color:var(--blue);cursor:pointer;font-family:inherit;" onclick="showToast('Refreshed','success')">REFRESH</button>
            </div>
            <div style="padding:0;">
              <div style="padding:16px 20px; border-bottom:1px solid var(--border);">
                <div style="cursor:pointer; display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;" onclick="const b=this.nextElementSibling.nextElementSibling; b.style.display=b.style.display==='none'?'block':'none'; const i=this.querySelector('.material-icons-round'); i.textContent=i.textContent==='expand_more'?'expand_less':'expand_more';">
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span class="material-icons-round" style="font-size:18px; color:var(--text-soft); transition:0.2s;">expand_more</span>
                    <div style="font-size:0.88rem;font-weight:800;color:var(--text);">Your plan is about to expire</div>
                  </div>
                  <div style="font-size:0.75rem;color:var(--text-soft);font-weight:700;white-space:nowrap;margin-left:12px;">23 Apr 2026, 18:19</div>
                </div>
                <div style="font-size:0.78rem;color:var(--blue);font-weight:700;margin-bottom:6px;display:flex;align-items:center;gap:4px; padding-left:26px;"><span class="material-icons-round" style="font-size:13px;">person</span>by admin@example.com</div>
                <div style="font-size:0.82rem;color:var(--text-mid);font-weight:600;line-height:1.6; display:none; padding-left:26px; padding-top:8px; border-top:1px dashed var(--border); margin-top:8px;">This is a reminder that your current plan is expiring soon. Please renew to continue accessing all features.<br>— Team Admin</div>
              </div>
              <div style="padding:16px 20px; border-bottom:1px solid var(--border);">
                <div style="cursor:pointer; display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;" onclick="const b=this.nextElementSibling.nextElementSibling; b.style.display=b.style.display==='none'?'block':'none'; const i=this.querySelector('.material-icons-round'); i.textContent=i.textContent==='expand_more'?'expand_less':'expand_more';">
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span class="material-icons-round" style="font-size:18px; color:var(--text-soft); transition:0.2s;">expand_more</span>
                    <div style="font-size:0.88rem;font-weight:800;color:var(--text);">Welcome to the Platform</div>
                  </div>
                  <div style="font-size:0.75rem;color:var(--text-soft);font-weight:700;white-space:nowrap;margin-left:12px;">24 Nov 2025, 09:00</div>
                </div>
                <div style="font-size:0.78rem;color:var(--blue);font-weight:700;margin-bottom:6px;display:flex;align-items:center;gap:4px; padding-left:26px;"><span class="material-icons-round" style="font-size:13px;">person</span>by admin@example.com</div>
                <div style="font-size:0.82rem;color:var(--text-mid);font-weight:600;line-height:1.6; display:none; padding-left:26px; padding-top:8px; border-top:1px dashed var(--border); margin-top:8px;">Welcome! Your account is now active and ready to use.<br>— Team Admin</div>
              </div>
              <div style="padding:16px 20px;">
                <div style="cursor:pointer; display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;" onclick="const b=this.nextElementSibling.nextElementSibling; b.style.display=b.style.display==='none'?'block':'none'; const i=this.querySelector('.material-icons-round'); i.textContent=i.textContent==='expand_more'?'expand_less':'expand_more';">
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span class="material-icons-round" style="font-size:18px; color:var(--text-soft); transition:0.2s;">expand_more</span>
                    <div style="font-size:0.88rem;font-weight:800;color:var(--text);">Your monthly invoice is ready</div>
                  </div>
                  <div style="font-size:0.75rem;color:var(--text-soft);font-weight:700;white-space:nowrap;margin-left:12px;">12 Jul 2026, 14:00</div>
                </div>
                <div style="font-size:0.78rem;color:var(--blue);font-weight:700;margin-bottom:6px;display:flex;align-items:center;gap:4px; padding-left:26px;"><span class="material-icons-round" style="font-size:13px;">person</span>by admin@example.com</div>
                <div style="font-size:0.82rem;color:var(--text-mid);font-weight:600;line-height:1.6; display:none; padding-left:26px; padding-top:8px; border-top:1px dashed var(--border); margin-top:8px;">Invoice for Jul 2026 has been generated. Please review and make payment.<br>— Team Admin</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    `;



  } else if (tab === 'history') {
    return `
      <div class="content-card">
        <div class="profile-section-header">
          <div style="display:flex; gap:12px; align-items:flex-start;">
            <div class="profile-section-icon" style="width: 44px; height: 44px; flex-shrink: 0; border: 1px solid var(--border); background: var(--white);"><span class="material-icons-round">history</span></div>
            <div>
              <h3 class="profile-section-title">Status & Activity History</h3>
              <p class="profile-section-desc">Timeline of major account lifecycle events and status changes.</p>
            </div>
          </div>
        </div>
        <div style="margin-top: 24px; display: flex; flex-direction: column; gap: 16px;">
          
          <div style="border: 1px solid var(--border); border-radius: 12px; padding: 20px; background: var(--white); display: flex; gap: 16px; align-items: flex-start;">
            <div style="width: 40px; height: 40px; border-radius: 50%; background: #eff6ff; color: var(--blue); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <span class="material-icons-round">upgrade</span>
            </div>
            <div>
              <div style="font-size: 1rem; font-weight: 800; color: var(--text);">Plan Upgraded to Business</div>
              <div style="font-size: 0.9rem; color: var(--text-mid); font-weight: 600; margin-top: 4px;">Changed by Admin (admin@system.com)</div>
              <div style="font-size: 0.8rem; color: var(--text-soft); font-weight: 700; margin-top: 8px;">Jul 10, 2026 &middot; 14:22 PM</div>
            </div>
          </div>
          
          <div style="border: 1px solid var(--border); border-radius: 12px; padding: 20px; background: var(--white); display: flex; gap: 16px; align-items: flex-start;">
            <div style="width: 40px; height: 40px; border-radius: 50%; background: #f0fdf4; color: #16a34a; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <span class="material-icons-round">check_circle</span>
            </div>
            <div>
              <div style="font-size: 1rem; font-weight: 800; color: var(--text);">Account Activated</div>
              <div style="font-size: 0.9rem; color: var(--text-mid); font-weight: 600; margin-top: 4px;">Initial setup completed by user.</div>
              <div style="font-size: 0.8rem; color: var(--text-soft); font-weight: 700; margin-top: 8px;">Mar 23, 2026 &middot; 09:00 AM</div>
            </div>
          </div>
          
          <div style="border: 1px solid var(--border); border-radius: 12px; padding: 20px; background: var(--white); display: flex; gap: 16px; align-items: flex-start;">
            <div style="width: 40px; height: 40px; border-radius: 50%; background: #f8fafc; color: var(--text-soft); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <span class="material-icons-round">person_add</span>
            </div>
            <div>
              <div style="font-size: 1rem; font-weight: 800; color: var(--text);">Account Created</div>
              <div style="font-size: 0.9rem; color: var(--text-mid); font-weight: 600; margin-top: 4px;">System registration.</div>
              <div style="font-size: 0.8rem; color: var(--text-soft); font-weight: 700; margin-top: 8px;">Mar 23, 2026 &middot; 08:55 AM</div>
            </div>
          </div>
          
        </div>
      </div>
    `;
  }
  return '';
}

function closeProfile() {
  profileView.classList.add('hidden');
  profileView.innerHTML = '';
  directoryView.classList.remove('hidden');
  document.querySelector('.top-bar-search').style.display = '';
}

// ===== MODAL EDIT SYSTEM =====
function openEditModal(type, memberId, index) {
  const m = members.find(x => x.id === memberId);
  if (!m) return;
  const modal = document.getElementById('modal-container');
  const content = document.getElementById('modal-content');
  let html = '';

  if (type === 'contact') {
    const c = m.contacts[index];
    const nameParts = c.name.split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';
    const status = c.status || 'Active';
    
    html = `
      <div class="modal-header">
        <h3>Edit Contact</h3>
        <button class="modal-close" onclick="closeModal()"><span class="material-icons-round">close</span></button>
      </div>
      <div class="modal-body" style="gap: 20px;">
        <div style="display:flex; align-items:center; gap:16px;">
          <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(c.name)}&background=e2e8f0&color=64748b" style="width:56px; height:56px; border-radius:50%;">
          <button class="btn-outline" style="padding: 6px 12px; font-size: 0.85rem;">Choose File</button>
          <span style="color:var(--text-soft); font-size:0.85rem; font-weight:600;">no file selected</span>
        </div>
        
        <div class="modal-grid-2">
          <div>
            <label class="modal-label">First Name</label>
            <input class="modal-input" type="text" value="${firstName}" id="edit-c-fname" placeholder="Enter First Name">
          </div>
          <div>
            <label class="modal-label">Last Name</label>
            <input class="modal-input" type="text" value="${lastName}" id="edit-c-lname" placeholder="Enter Last Name">
          </div>
          <div style="grid-column: 1 / -1;">
            <label class="modal-label">Designation</label>
            <select class="modal-input" id="edit-c-role">
              <option value="Director" ${c.role === 'Director' ? 'selected' : ''}>Director</option>
              <option value="Operations Manager" ${c.role === 'Operations Manager' ? 'selected' : ''}>Operations Manager</option>
              <option value="Sales Head" ${c.role === 'Sales Head' ? 'selected' : ''}>Sales Head</option>
              <option value="Owner" ${c.role === 'Owner' ? 'selected' : ''}>Owner</option>
            </select>
          </div>
          <div style="grid-column: 1 / -1;">
            <label class="modal-label">Mobile</label>
            <input class="modal-input" type="text" value="${c.phone}" id="edit-c-phone" placeholder="Enter Mobile Number">
          </div>
          <div style="grid-column: 1 / -1;">
            <label class="modal-label">Email</label>
            <input class="modal-input" type="email" value="${c.email}" id="edit-c-email" placeholder="Enter E-mail">
          </div>
          <div style="grid-column: 1 / -1;">
            <label class="modal-label">Status</label>
            <select class="modal-input" id="edit-c-status">
              <option value="Active" ${status === 'Active' ? 'selected' : ''}>Active</option>
              <option value="Inactive" ${status === 'Inactive' ? 'selected' : ''}>Inactive</option>
            </select>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-outline" onclick="closeModal()">Close</button>
        <button class="btn-primary" style="background:#4880FF; border-radius:8px;" onclick="saveContact(${memberId}, ${index})">Save</button>
      </div>
    `;
  } else if (type === 'address') {
    const a = m.addresses[index];
    html = `
      <div class="modal-header">
        <h3>Edit Address</h3>
        <button class="modal-close" onclick="closeModal()"><span class="material-icons-round">close</span></button>
      </div>
      <div class="modal-body">
        <label class="modal-label">Address Type</label>
        <input class="modal-input" type="text" value="${a.type}" id="edit-addr-type">
        <label class="modal-label">Full Address</label>
        <input class="modal-input" type="text" value="${a.detail}" id="edit-addr-detail">
        <label class="modal-label">City</label>
        <select class="modal-input" id="edit-addr-city" style="appearance:none;">
          ${['Mumbai','Delhi','Bengaluru','Hyderabad','Chennai','Kolkata','Pune','Jaipur','Ahmedabad','Surat','Lucknow','Kanpur','Nagpur','Indore','Thane','Bhopal','Visakhapatnam','Pimpri-Chinchwad','Patna','Vadodara','Coimbatore','Kochi','Chandigarh'].map(city => `<option value="${city}" ${city===m.location?'selected':''}>${city}</option>`).join('')}
        </select>
      </div>
      <div class="modal-footer">
        <button class="btn-outline" onclick="closeModal()">Cancel</button>
        <button class="btn-primary" onclick="saveAddress(${memberId}, ${index})">Save Changes</button>
      </div>
    `;
  } else if (type === 'company') {
    html = `
      <div class="modal-header">
        <h3>Edit Company Profile</h3>
        <button class="modal-close" onclick="closeModal()"><span class="material-icons-round">close</span></button>
      </div>
      <div class="modal-body">
        <div class="modal-grid-2">
          <div>
            <label class="modal-label">Company Name</label>
            <input class="modal-input" type="text" value="${m.company}" id="edit-co-name">
          </div>
          <div>
            <label class="modal-label">Business Type</label>
            <input class="modal-input" type="text" value="${m.companyType}" id="edit-co-type">
          </div>
          <div>
            <label class="modal-label">Website</label>
            <input class="modal-input" type="text" value="www.${m.company.toLowerCase().replace(/ /g,'')}.com" id="edit-co-website">
          </div>
          <div>
            <label class="modal-label">Email ID</label>
            <input class="modal-input" type="email" value="${m.email}" id="edit-co-email">
          </div>
          <div>
            <label class="modal-label">GST No</label>
            <input class="modal-input" type="text" value="${m.gst || '29ABCDE1234F1Z5'}" id="edit-co-gst">
          </div>
          <div>
            <label class="modal-label">Phone No 1</label>
            <input class="modal-input" type="text" value="${m.mobile}" id="edit-co-phone1">
          </div>
          <div>
            <label class="modal-label">Phone No 2</label>
            <input class="modal-input" type="text" value="${m.phone2 || ''}" id="edit-co-phone2">
          </div>
          <div></div>
          <div style="grid-column: 1 / -1;">
            <label class="modal-label">About Business</label>
            <textarea class="modal-input" id="edit-co-about" rows="3">${m.about || ''}</textarea>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-outline" onclick="closeModal()">Cancel</button>
        <button class="btn-primary" onclick="saveCompany(${memberId})">Save Changes</button>
      </div>
    `;
  }

  content.innerHTML = html;
  modal.classList.remove('hidden');
}

function openAddModal(type, memberId) {
  const modal = document.getElementById('modal-container');
  const content = document.getElementById('modal-content');
  const m = members.find(x => x.id === memberId);
  let html = '';

  if (type === 'contact') {
    html = `
      <div class="modal-header">
        <h3>Add New Contact</h3>
        <button class="modal-close" onclick="closeModal()"><span class="material-icons-round">close</span></button>
      </div>
      <div class="modal-body">
        <div class="modal-grid-2">
          <div>
            <label class="modal-label">First Name</label>
            <input class="modal-input" type="text" id="add-c-fname" placeholder="First name">
          </div>
          <div>
            <label class="modal-label">Last Name</label>
            <input class="modal-input" type="text" id="add-c-lname" placeholder="Last name">
          </div>
          <div>
            <label class="modal-label">Role / Designation</label>
            <input class="modal-input" type="text" id="add-c-role" placeholder="e.g. CEO">
          </div>
          <div>
            <label class="modal-label">Phone</label>
            <input class="modal-input" type="text" id="add-c-phone" placeholder="+91 XXXXX XXXXX">
          </div>
          <div>
            <label class="modal-label">Email</label>
            <input class="modal-input" type="email" id="add-c-email" placeholder="email@example.com">
          </div>
          <div>
            <label class="modal-label">Status</label>
            <select class="modal-input" id="add-c-status">
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-outline" onclick="closeModal()">Cancel</button>
        <button class="btn-primary" onclick="saveNewContact(${memberId})">Add Contact</button>
      </div>
    `;
  } else if (type === 'address') {
    html = `
      <div class="modal-header">
        <h3>Add New Address</h3>
        <button class="modal-close" onclick="closeModal()"><span class="material-icons-round">close</span></button>
      </div>
      <div class="modal-body">
        <label class="modal-label">Address Type</label>
        <input class="modal-input" type="text" id="add-addr-type" placeholder="e.g. Head Office, Branch">
        <label class="modal-label">Full Address</label>
        <input class="modal-input" type="text" id="add-addr-detail" placeholder="Building, Street, Area">
        <label class="modal-label">City</label>
        <select class="modal-input" id="add-addr-city">
          ${['Mumbai','Delhi','Bengaluru','Hyderabad','Chennai','Kolkata','Pune','Jaipur','Ahmedabad','Surat','Lucknow','Nagpur','Indore','Thane','Bhopal'].map(city => `<option value="${city}">${city}</option>`).join('')}
        </select>
      </div>
      <div class="modal-footer">
        <button class="btn-outline" onclick="closeModal()">Cancel</button>
        <button class="btn-primary" onclick="saveNewAddress(${memberId})">Add Address</button>
      </div>
    `;
  }

  content.innerHTML = html;
  modal.classList.remove('hidden');
}

function saveNewContact(memberId) {
  const m = members.find(x => x.id === memberId);
  const fName = document.getElementById('add-c-fname').value.trim();
  const lName = document.getElementById('add-c-lname').value.trim();
  if (!fName) { showToast('First name is required', 'error'); return; }
  if (!m.contacts) m.contacts = [];
  m.contacts.push({
    name: `${fName} ${lName}`.trim(),
    role: document.getElementById('add-c-role').value || 'Contact',
    phone: document.getElementById('add-c-phone').value || '',
    email: document.getElementById('add-c-email').value || '',
    status: document.getElementById('add-c-status').value || 'Active',
    photo: `https://ui-avatars.com/api/?name=${encodeURIComponent(fName)}&background=eef3ff&color=4880ff`
  });
  closeModal();
  showToast('Contact added successfully', 'success');
  switchTab(memberId, 'contacts');
}

function saveNewAddress(memberId) {
  const m = members.find(x => x.id === memberId);
  const addrType = document.getElementById('add-addr-type').value.trim();
  const addrDetail = document.getElementById('add-addr-detail').value.trim();
  if (!addrType || !addrDetail) { showToast('Please fill all fields', 'error'); return; }
  if (!m.addresses) m.addresses = [];
  m.addresses.push({
    type: addrType,
    detail: addrDetail + ', ' + document.getElementById('add-addr-city').value,
    city: document.getElementById('add-addr-city').value
  });
  closeModal();
  showToast('Address added successfully', 'success');
  switchTab(memberId, 'addresses');
}

function closeModal() {
  document.getElementById('modal-container').classList.add('hidden');
  document.getElementById('modal-content').innerHTML = '';
}

function saveContact(memberId, index) {
  const m = members.find(x => x.id === memberId);
  const fName = document.getElementById('edit-c-fname').value.trim();
  const lName = document.getElementById('edit-c-lname').value.trim();
  m.contacts[index].name = `${fName} ${lName}`.trim();
  m.contacts[index].role = document.getElementById('edit-c-role').value;
  m.contacts[index].phone = document.getElementById('edit-c-phone').value;
  m.contacts[index].email = document.getElementById('edit-c-email').value;
  m.contacts[index].status = document.getElementById('edit-c-status').value;
  closeModal();
  showToast('Contact updated successfully.', 'success');
  openProfile(memberId, 'contacts');
}

function saveAddress(memberId, index) {
  const m = members.find(x => x.id === memberId);
  m.addresses[index].type   = document.getElementById('edit-addr-type').value;
  m.addresses[index].detail = document.getElementById('edit-addr-detail').value;
  closeModal();
  showToast('Address updated successfully.', 'success');
  switchTab(memberId, 'addresses');
}

function saveCompany(memberId) {
  const m = members.find(x => x.id === memberId);
  m.company     = document.getElementById('edit-co-name').value;
  m.companyType = document.getElementById('edit-co-type').value;
  m.email       = document.getElementById('edit-co-email').value;
  m.gst         = document.getElementById('edit-co-gst').value;
  m.mobile      = document.getElementById('edit-co-phone1').value;
  m.phone2      = document.getElementById('edit-co-phone2').value;
  m.about       = document.getElementById('edit-co-about').value;
  closeModal();
  showToast('Company profile updated.', 'success');
  switchTab(memberId, 'company');
}

// Close modal on overlay click
document.getElementById('modal-container').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeModal();
});

// Events
document.getElementById('top-search-input').addEventListener('input', e => {
  searchQuery = e.target.value;
  currentPage = 1;
  renderTable();
});

document.getElementById('rows-per-page').addEventListener('change', e => {
  rowsPerPage = parseInt(e.target.value);
  currentPage = 1;
  renderTable();
});

document.getElementById('sidebar-toggle').addEventListener('click', () => {
  const sidebar = document.getElementById('sidebar');
  const main = document.querySelector('.main-content');
  const icon = document.getElementById('sidebar-toggle-icon');
  sidebar.classList.toggle('collapsed');
  main.classList.toggle('expanded');
  icon.textContent = sidebar.classList.contains('collapsed') ? 'chevron_right' : 'chevron_left';
});




function toggleNavGroup(btn) {
  const group = btn.closest('.nav-group');
  const sub = group.querySelector('.nav-sub');
  const isOpen = group.classList.contains('open');
  document.querySelectorAll('.nav-group.open').forEach(g => {
    if (g !== group) { g.classList.remove('open'); g.querySelector('.nav-sub').style.height = '0px'; }
  });
  if (isOpen) { group.classList.remove('open'); sub.style.height = '0px'; }
  else { group.classList.add('open'); sub.style.height = sub.scrollHeight + 'px'; }
}

renderTable();

