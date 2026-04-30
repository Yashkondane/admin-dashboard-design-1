const members = [
  { id:0, date:'23 Mar 2026', company:'Redstone Mining Ltd', companyType:'Manufacturer', member:'Ira Patel', role:'Director', location:'Nagpur', mobile:'+91 8408326704', email:'ira.patel@redstone.com', status:'suspended', plan:'enterprise', photo:'https://randomuser.me/api/portraits/women/44.jpg', website:'www.redstoneminingltd.com', gst:'29ABCDE1234F1Z5', phone2:'+91 8408326710', joinIp:'95.66.134.42', address:'Plot 42, MIDC Industrial Area, Hingna Road, Nagpur, Maharashtra - 440016', about:'Redstone Mining Ltd is a leading manufacturer...' },
  { id:1, date:'24 Jan 2026', company:'Rudra Steel Works', companyType:'Manufacturer', member:'Diya Gupta', role:'Director', location:'Chennai', mobile:'+91 7028519305', email:'diya.gupta@rudra.com', status:'active', plan:'enterprise', photo:'https://randomuser.me/api/portraits/women/65.jpg', website:'www.rudrasteelworks.in', gst:'33FGHIJ5678K2L6', phone2:'+91 7028519310', joinIp:'103.21.58.91', address:'No. 18, Ambattur Industrial Estate, Chennai, Tamil Nadu - 600058', about:'Rudra Steel Works specialises in manufacturing...' },
  { id:2, date:'18 Jan 2026', company:'Saffron Exports', companyType:'Exporter', member:'Ishaan Reddy', role:'Director', location:'Jaipur', mobile:'+91 8834759735', email:'shaan.reddy@saffron.com', status:'active', plan:'business', photo:'https://randomuser.me/api/portraits/men/32.jpg', website:'www.saffronexports.com', gst:'08KLMNO9012P3Q7', phone2:'', joinIp:'49.36.112.77', address:'B-22, Sitapura Industrial Area, Tonk Road, Jaipur, Rajasthan - 302022', about:'Saffron Exports is a premium exporter...' },
  { id:3, date:'04 Jan 2026', company:'Sharma Jewellers', companyType:'Retailer', member:'Aditya Sharma', role:'Founder', location:'Chandigarh', mobile:'+91 9882142918', email:'aditya.sharma@sharma.com', status:'active', plan:'free', photo:'https://randomuser.me/api/portraits/men/45.jpg', website:'www.sharmajewellers.in', gst:'04PQRST3456U4V8', phone2:'+91 9882142920', joinIp:'182.73.45.210', address:'Shop 14, Sector 22-C Market, Chandigarh - 160022', about:'A family-owned jewellery retail business...' },
  { id:4, date:'05 Dec 2025', company:'Vyom AgriTech', companyType:'Trader', member:'Kabir Nair', role:'Owner/Proprietor', location:'Hyderabad', mobile:'+91 9820011504', email:'kabir.nair@vyom.com', status:'suspended', plan:'free', photo:'https://randomuser.me/api/portraits/men/22.jpg', website:'www.vyomagritech.com', gst:'36UVWXY7890Z5A9', phone2:'', joinIp:'157.49.88.33', address:'Flat 301, Madhapur Tech Park, HITEC City, Hyderabad, Telangana - 500081', about:'Vyom AgriTech trades in agricultural produce...' },
  { id:5, date:'24 Nov 2025', company:'Coastal Seafoods', companyType:'Wholesaler', member:'Maya Verma', role:'CEO', location:'Kochi', mobile:'+91 8856174832', email:'maya.verma@coastal.com', status:'inactive', plan:'starter', photo:'https://randomuser.me/api/portraits/women/28.jpg', website:'www.coastalseafoods.in', gst:'32BCDEF1234G6H0', phone2:'+91 8856174840', joinIp:'14.139.60.12', address:'XII/446, Thoppumpady Harbour Road, Kochi, Kerala - 682005', about:'Coastal Seafoods is a wholesale distributor...' },
  { id:6, date:'09 Oct 2025', company:'Indigo Pharma', companyType:'Manufacturer', member:'Ananya Kapoor', role:'Director', location:'Ahmedabad', mobile:'+91 9361872296', email:'ananya.kapoor@indigo.com', status:'active', plan:'business', photo:'https://randomuser.me/api/portraits/women/33.jpg', website:'www.indigopharma.co.in', gst:'24GHIJK5678L7M1', phone2:'+91 9361872300', joinIp:'203.88.192.45', address:'Plot 88, Phase-IV, GIDC Industrial Estate, Vatva, Ahmedabad, Gujarat - 382445', about:'Indigo Pharma manufactures generic pharmaceutical...' },
  { id:7, date:'14 Sep 2025', company:'Aurora Logistics', companyType:'Service Provider', member:'Vihaan Singh', role:'Owner/Proprietor', location:'Delhi', mobile:'+91 9901457488', email:'vihaan.singh@aurora.com', status:'active', plan:'starter', photo:'https://randomuser.me/api/portraits/men/55.jpg', website:'www.auroralogistics.in', gst:'07LMNOP9012Q8R2', phone2:'', joinIp:'110.224.33.67', address:'D-12, Okhla Industrial Area, Phase-II, New Delhi - 110020', about:'Aurora Logistics provides end-to-end supply chain...' },
  { id:8, date:'22 Aug 2025', company:'Bluebell Cafe Co.', companyType:'Retailer', member:'Neha Agarwal', role:'Founder', location:'Kolkata', mobile:'+91 9739421934', email:'neha.agarwal@bluebell.com', status:'suspended', plan:'starter', photo:'https://randomuser.me/api/portraits/women/50.jpg', website:'www.bluebellcafe.in', gst:'19QRSTU3456V9W3', phone2:'+91 9739421940', joinIp:'59.94.171.22', address:'23A, Park Street, Kolkata, West Bengal - 700016', about:'Bluebell Cafe Co. is a boutique chain of artisan...' },
  { id:9, date:'10 Jul 2025', company:'Summit Traders', companyType:'Trader', member:'Rohan Mehta', role:'Manager', location:'Mumbai', mobile:'+91 9112358741', email:'rohan.mehta@summit.com', status:'active', plan:'business', photo:'https://randomuser.me/api/portraits/men/36.jpg', website:'www.summittraders.co.in', gst:'27VWXYZ7890A0B4', phone2:'+91 9112358750', joinIp:'122.15.78.100', address:'Office 402, Trade Centre, BKC, Bandra East, Mumbai, Maharashtra - 400051', about:'Summit Traders deals in bulk commodities...' },
  { id:10, date:'01 Jun 2025', company:'Prism Textiles', companyType:'Manufacturer', member:'Sneha Joshi', role:'Director', location:'Surat', mobile:'+91 8825467190', email:'sneha.joshi@prism.com', status:'active', plan:'enterprise', photo:'https://randomuser.me/api/portraits/women/12.jpg', website:'www.prismtextiles.com', gst:'24CDEFG1234H1I5', phone2:'', joinIp:'117.200.44.88', address:'Plot 156, Pandesara GIDC, Ring Road, Surat, Gujarat - 394221', about:'Prism Textiles is a vertically integrated textile manufacturer...' },
  { id:11, date:'18 May 2025', company:'Zenith Infotech', companyType:'Service Provider', member:'Arjun Das', role:'CTO', location:'Bangalore', mobile:'+91 9944125803', email:'arjun.das@zenith.com', status:'active', plan:'business', photo:'https://randomuser.me/api/portraits/men/64.jpg', website:'www.zenithinfotech.io', gst:'29HIJKL5678M2N6', phone2:'+91 9944125810', joinIp:'43.250.166.55', address:'3rd Floor, Prestige Tech Park, Sarjapur Road, Bangalore, Karnataka - 560103', about:'Zenith Infotech delivers enterprise software solutions...' },
  { id:12, date:'02 Apr 2025', company:'Heritage Spices', companyType:'Exporter', member:'Priya Menon', role:'Owner', location:'Thiruvananthapuram', mobile:'+91 8803216754', email:'priya.menon@heritage.com', status:'active', plan:'starter', photo:'https://randomuser.me/api/portraits/women/71.jpg', website:'www.heritagespices.in', gst:'32MNOPQ9012R3S7', phone2:'', joinIp:'223.190.82.14', address:'TC 25/1872, Pattom Palace P.O., Thiruvananthapuram, Kerala - 695004', about:'Heritage Spices sources and exports premium Kerala spices...' },
  { id:13, date:'15 Mar 2025', company:'Emerald Foods', companyType:'Manufacturer', member:'Karan Bhatia', role:'Director', location:'Ludhiana', mobile:'+91 9678234501', email:'karan.bhatia@emerald.com', status:'inactive', plan:'free', photo:'https://randomuser.me/api/portraits/men/78.jpg', website:'www.emeraldfoods.in', gst:'03RSTUV3456W4X8', phone2:'+91 9678234510', joinIp:'61.12.89.33', address:'G.T. Road, Focal Point Phase-5, Ludhiana, Punjab - 141010', about:'Emerald Foods manufactures packaged snacks...' },
  { id:14, date:'28 Feb 2025', company:'Nova Electronics', companyType:'Retailer', member:'Tanvi Rao', role:'Manager', location:'Pune', mobile:'+91 9534128976', email:'tanvi.rao@nova.com', status:'active', plan:'starter', photo:'https://randomuser.me/api/portraits/women/85.jpg', website:'www.novaelectronics.co.in', gst:'27WXYZ7890A5B9', phone2:'', joinIp:'106.201.15.77', address:'Shop 7, Amanora Mall, Hadapsar, Pune, Maharashtra - 411028', about:'Nova Electronics is a retail chain specialising in consumer electronics...' }
];

let currentFilter = 'all';
let searchQuery = '';
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

function toggleDropdown(id) {
  const dropdown = document.getElementById(`dropdown-${id}`);
  const isShowing = dropdown.classList.contains('show');
  closeAllDropdowns();
  if (!isShowing) dropdown.classList.add('show');
}

function closeAllDropdowns() {
  document.querySelectorAll('.dropdown-menu').forEach(d => d.classList.remove('show'));
}

document.addEventListener('click', closeAllDropdowns);

function getFiltered() {
  let filtered = members.filter(m => {
    const mf = currentFilter === 'all' || m.status === currentFilter;
    const q = searchQuery.toLowerCase();
    const ms = !q || m.company.toLowerCase().includes(q) || m.member.toLowerCase().includes(q) || m.email.toLowerCase().includes(q) || m.mobile.includes(q);
    return mf && ms;
  });
  filtered.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortDir === 'desc' ? dateB - dateA : dateA - dateB;
  });
  return filtered;
}

function renderTable() {
  const filtered = getFiltered();
  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const pageItems = filtered.slice(start, end);

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;padding:60px;color:var(--text-soft);">No members found.</td></tr>`;
    return;
  }

  tbody.innerHTML = pageItems.map(m => `
    <tr>
      <td>
        <div class="cell-member">
          <img class="member-avatar" src="${m.photo}" alt="${m.member}" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(m.member)}&background=eef3ff&color=4880ff'">
          <span class="member-name">${m.member}</span>
        </div>
      </td>
      <td>${m.company}</td>
      <td>${m.mobile}</td>
      <td>${m.location}</td>
      <td>${capitalize(m.plan)}</td>
      <td><span class="status-badge ${m.status}">${capitalize(m.status)}</span></td>
      <td class="action-cell">
        <button class="action-btn" onclick="event.stopPropagation(); toggleDropdown(${m.id})">
          <span class="material-icons-round">more_horiz</span>
        </button>
        <div class="dropdown-menu" id="dropdown-${m.id}">
          <button class="dropdown-item" onclick="event.stopPropagation(); showToast('Edit mode opened', 'success'); closeAllDropdowns();"><span class="material-icons-round">edit</span> Edit</button>
          <button class="dropdown-item delete" onclick="event.stopPropagation(); showToast('Item deleted', 'error'); closeAllDropdowns();"><span class="material-icons-round">delete</span> Delete</button>
        </div>
      </td>
    </tr>
  `).join('');

  renderPagination(filtered.length);
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

  profileView.innerHTML = `
    <div class="breadcrumbs">
      <a href="#" onclick="closeProfile()">Directory</a>
      <span class="sep">/</span>
      <span class="current">${m.company}</span>
    </div>

    <div class="profile-header-card">
      <img class="profile-header-avatar" src="${m.photo}" alt="${m.member}">
      <div class="profile-header-info">
        <div class="profile-header-name">${m.company}</div>
        <div class="profile-header-sub">${m.companyType} &middot; <span>${m.member}</span>, ${m.role}</div>
      </div>
      <div>
        <button class="btn-primary" onclick="showToast('Profile saved successfully.', 'success')">
          <span class="material-icons-round">save</span> Save Changes
        </button>
      </div>
    </div>

    <div class="profile-tabs" id="profile-tabs">
      <button class="profile-tab ${tab==='company'?'active':''}" onclick="switchTab(${id},'company')"><span class="material-icons-round">business</span> Company Details</button>
      <button class="profile-tab ${tab==='contacts'?'active':''}" onclick="switchTab(${id},'contacts')"><span class="material-icons-round">contacts</span> Contacts</button>
      <button class="profile-tab ${tab==='billing'?'active':''}" onclick="switchTab(${id},'billing')"><span class="material-icons-round">credit_card</span> Billing & Plan</button>
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
        <h3 class="profile-section-title">Company Profile</h3>
        <p class="profile-section-desc">Primary business details and legal identification.</p>
        
        <div class="table-form">
          <div class="table-form-row">
            <div class="table-form-label">Company Name</div>
            <div class="table-form-value"><input type="text" value="${m.company}"></div>
          </div>
          <div class="table-form-row">
            <div class="table-form-label">Business Type</div>
            <div class="table-form-value"><input type="text" value="${m.companyType}"></div>
          </div>
          <div class="table-form-row">
            <div class="table-form-label">Email Address</div>
            <div class="table-form-value"><input type="email" value="${m.email}"></div>
          </div>
          <div class="table-form-row">
            <div class="table-form-label">Mobile</div>
            <div class="table-form-value"><input type="text" value="${m.mobile}"></div>
          </div>
          <div class="table-form-row">
            <div class="table-form-label">Location</div>
            <div class="table-form-value"><input type="text" value="${m.location}"></div>
          </div>
          <div class="table-form-row" style="align-items: flex-start;">
            <div class="table-form-label" style="height: auto; min-height: 100px;">About Business</div>
            <div class="table-form-value" style="padding: 0;">
              <textarea style="width: 100%; resize: vertical; min-height: 100px; padding: 18px 24px;">${m.about}</textarea>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  return `
    <div class="content-card">
      <h3 class="profile-section-title">Content not available</h3>
      <p class="profile-section-desc">This section is currently under development.</p>
    </div>
  `;
}

function closeProfile() {
  profileView.classList.add('hidden');
  profileView.innerHTML = '';
  directoryView.classList.remove('hidden');
}

// Events
document.querySelectorAll('.pill[data-filter]').forEach(pill => {
  pill.addEventListener('click', () => {
    document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    currentFilter = pill.dataset.filter;
    currentPage = 1;
    renderTable();
  });
});

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

document.getElementById('refresh-btn').addEventListener('click', () => {
  showToast('Data refreshed successfully.', 'success');
  renderTable();
});

document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('open');
});

document.querySelectorAll('.nav-toggle').forEach(toggle => {
  toggle.addEventListener('click', e => {
    e.preventDefault();
    const group = toggle.closest('.nav-group');
    const sub = group.querySelector('.nav-sub');
    document.querySelectorAll('.nav-group.open').forEach(g => {
      if (g !== group) {
        g.classList.remove('open');
        g.querySelector('.nav-sub').style.height = '0px';
      }
    });
    if (group.classList.contains('open')) {
      group.classList.remove('open');
      sub.style.height = '0px';
    } else {
      group.classList.add('open');
      sub.style.height = sub.scrollHeight + 'px';
    }
  });
});

document.querySelectorAll('.nav-item:not(.nav-toggle):not(.logout-item)').forEach(item => {
  item.addEventListener('click', e => {
    if (item.getAttribute('href') === '#') {
      e.preventDefault();
      document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
      item.classList.add('active');
    }
  });
});

renderTable();
