// ===== MEMBER DATA =====
const members = [
  { id:0, date:'23 Mar 2026', company:'Redstone Mining Ltd', companyType:'Manufacturer', member:'Ira Patel', role:'Director', location:'Nagpur', mobile:'+91 8408326704', email:'ira.patel@redstone.com', status:'suspended', plan:'enterprise', photo:'https://randomuser.me/api/portraits/women/44.jpg', website:'www.redstoneminingltd.com', gst:'29ABCDE1234F1Z5', phone2:'+91 8408326710', joinIp:'95.66.134.42', address:'Plot 42, MIDC Industrial Area, Hingna Road, Nagpur, Maharashtra - 440016', about:'Redstone Mining Ltd is a leading manufacturer of industrial-grade mining equipment and raw mineral processing units. Established in 2008, the company serves clients across India and Southeast Asia.', planStart:'23 Mar 2026', planExpiry:'22 Jun 2026', planPrice:'₹9,999.00', daysLeft:90 },
  { id:1, date:'24 Jan 2026', company:'Rudra Steel Works', companyType:'Manufacturer', member:'Diya Gupta', role:'Director', location:'Chennai', mobile:'+91 7028519305', email:'diya.gupta@rudra.com', status:'active', plan:'enterprise', photo:'https://randomuser.me/api/portraits/women/65.jpg', website:'www.rudrasteelworks.in', gst:'33FGHIJ5678K2L6', phone2:'+91 7028519310', joinIp:'103.21.58.91', address:'No. 18, Ambattur Industrial Estate, Chennai, Tamil Nadu - 600058', about:'Rudra Steel Works specialises in manufacturing high-quality TMT bars, steel rods and structural steel components for the construction industry.', planStart:'24 Jan 2026', planExpiry:'23 Apr 2026', planPrice:'₹9,999.00', daysLeft:60 },
  { id:2, date:'18 Jan 2026', company:'Saffron Exports', companyType:'Exporter', member:'Ishaan Reddy', role:'Director', location:'Jaipur', mobile:'+91 8834759735', email:'shaan.reddy@saffron.com', status:'active', plan:'business', photo:'https://randomuser.me/api/portraits/men/32.jpg', website:'www.saffronexports.com', gst:'08KLMNO9012P3Q7', phone2:'', joinIp:'49.36.112.77', address:'B-22, Sitapura Industrial Area, Tonk Road, Jaipur, Rajasthan - 302022', about:'Saffron Exports is a premium exporter of Indian spices, handicrafts and textile products to global markets including the UK, US and Middle East.', planStart:'18 Jan 2026', planExpiry:'17 Jul 2026', planPrice:'₹4,999.00', daysLeft:120 },
  { id:3, date:'04 Jan 2026', company:'Sharma Jewellers', companyType:'Retailer', member:'Aditya Sharma', role:'Founder', location:'Chandigarh', mobile:'+91 9882142918', email:'aditya.sharma@sharma.com', status:'active', plan:'free', photo:'https://randomuser.me/api/portraits/men/45.jpg', website:'www.sharmajewellers.in', gst:'04PQRST3456U4V8', phone2:'+91 9882142920', joinIp:'182.73.45.210', address:'Shop 14, Sector 22-C Market, Chandigarh - 160022', about:'A family-owned jewellery retail business offering gold, diamond and silver ornaments with a legacy of over 35 years of craftsmanship.', planStart:'04 Jan 2026', planExpiry:'—', planPrice:'Free', daysLeft:'∞' },
  { id:4, date:'05 Dec 2025', company:'Vyom AgriTech', companyType:'Trader', member:'Kabir Nair', role:'Owner/Proprietor', location:'Hyderabad', mobile:'+91 9820011504', email:'kabir.nair@vyom.com', status:'suspended', plan:'free', photo:'https://randomuser.me/api/portraits/men/22.jpg', website:'www.vyomagritech.com', gst:'36UVWXY7890Z5A9', phone2:'', joinIp:'157.49.88.33', address:'Flat 301, Madhapur Tech Park, HITEC City, Hyderabad, Telangana - 500081', about:'Vyom AgriTech trades in agricultural produce, seeds and modern farming solutions for small and medium-scale farmers.', planStart:'05 Dec 2025', planExpiry:'—', planPrice:'Free', daysLeft:'—' },
  { id:5, date:'24 Nov 2025', company:'Coastal Seafoods', companyType:'Wholesaler', member:'Maya Verma', role:'CEO', location:'Kochi', mobile:'+91 8856174832', email:'maya.verma@coastal.com', status:'inactive', plan:'starter', photo:'https://randomuser.me/api/portraits/women/28.jpg', website:'www.coastalseafoods.in', gst:'32BCDEF1234G6H0', phone2:'+91 8856174840', joinIp:'14.139.60.12', address:'XII/446, Thoppumpady Harbour Road, Kochi, Kerala - 682005', about:'Coastal Seafoods is a wholesale distributor of fresh and frozen seafood products sourced from the Malabar and Konkan coasts.', planStart:'24 Nov 2025', planExpiry:'23 Feb 2026', planPrice:'₹1,999.00', daysLeft:0 },
  { id:6, date:'09 Oct 2025', company:'Indigo Pharma', companyType:'Manufacturer', member:'Ananya Kapoor', role:'Director', location:'Ahmedabad', mobile:'+91 9361872296', email:'ananya.kapoor@indigo.com', status:'active', plan:'business', photo:'https://randomuser.me/api/portraits/women/33.jpg', website:'www.indigopharma.co.in', gst:'24GHIJK5678L7M1', phone2:'+91 9361872300', joinIp:'203.88.192.45', address:'Plot 88, Phase-IV, GIDC Industrial Estate, Vatva, Ahmedabad, Gujarat - 382445', about:'Indigo Pharma manufactures generic pharmaceutical formulations and APIs, exporting to over 20 countries worldwide.', planStart:'09 Oct 2025', planExpiry:'08 Apr 2026', planPrice:'₹4,999.00', daysLeft:45 },
  { id:7, date:'14 Sep 2025', company:'Aurora Logistics', companyType:'Service Provider', member:'Vihaan Singh', role:'Owner/Proprietor', location:'Delhi', mobile:'+91 9901457488', email:'vihaan.singh@aurora.com', status:'active', plan:'starter', photo:'https://randomuser.me/api/portraits/men/55.jpg', website:'www.auroralogistics.in', gst:'07LMNOP9012Q8R2', phone2:'', joinIp:'110.224.33.67', address:'D-12, Okhla Industrial Area, Phase-II, New Delhi - 110020', about:'Aurora Logistics provides end-to-end supply chain management, warehousing and last-mile delivery services across North India.', planStart:'14 Sep 2025', planExpiry:'13 Mar 2026', planPrice:'₹1,999.00', daysLeft:15 },
  { id:8, date:'22 Aug 2025', company:'Bluebell Cafe Co.', companyType:'Retailer', member:'Neha Agarwal', role:'Founder', location:'Kolkata', mobile:'+91 9739421934', email:'neha.agarwal@bluebell.com', status:'suspended', plan:'starter', photo:'https://randomuser.me/api/portraits/women/50.jpg', website:'www.bluebellcafe.in', gst:'19QRSTU3456V9W3', phone2:'+91 9739421940', joinIp:'59.94.171.22', address:'23A, Park Street, Kolkata, West Bengal - 700016', about:'Bluebell Cafe Co. is a boutique chain of artisan coffee shops known for specialty brews and locally sourced baked goods.', planStart:'22 Aug 2025', planExpiry:'21 Nov 2025', planPrice:'₹1,999.00', daysLeft:0 },
  { id:9, date:'10 Jul 2025', company:'Summit Traders', companyType:'Trader', member:'Rohan Mehta', role:'Manager', location:'Mumbai', mobile:'+91 9112358741', email:'rohan.mehta@summit.com', status:'active', plan:'business', photo:'https://randomuser.me/api/portraits/men/36.jpg', website:'www.summittraders.co.in', gst:'27VWXYZ7890A0B4', phone2:'+91 9112358750', joinIp:'122.15.78.100', address:'Office 402, Trade Centre, BKC, Bandra East, Mumbai, Maharashtra - 400051', about:'Summit Traders deals in bulk commodities including metals, chemicals and agricultural produce for domestic and export markets.', planStart:'10 Jul 2025', planExpiry:'09 Jan 2026', planPrice:'₹4,999.00', daysLeft:30 },
  { id:10, date:'01 Jun 2025', company:'Prism Textiles', companyType:'Manufacturer', member:'Sneha Joshi', role:'Director', location:'Surat', mobile:'+91 8825467190', email:'sneha.joshi@prism.com', status:'active', plan:'enterprise', photo:'https://randomuser.me/api/portraits/women/12.jpg', website:'www.prismtextiles.com', gst:'24CDEFG1234H1I5', phone2:'', joinIp:'117.200.44.88', address:'Plot 156, Pandesara GIDC, Ring Road, Surat, Gujarat - 394221', about:'Prism Textiles is a vertically integrated textile manufacturer producing fabrics, garments and home furnishing products.', planStart:'01 Jun 2025', planExpiry:'31 May 2026', planPrice:'₹9,999.00', daysLeft:180 },
  { id:11, date:'18 May 2025', company:'Zenith Infotech', companyType:'Service Provider', member:'Arjun Das', role:'CTO', location:'Bangalore', mobile:'+91 9944125803', email:'arjun.das@zenith.com', status:'active', plan:'business', photo:'https://randomuser.me/api/portraits/men/64.jpg', website:'www.zenithinfotech.io', gst:'29HIJKL5678M2N6', phone2:'+91 9944125810', joinIp:'43.250.166.55', address:'3rd Floor, Prestige Tech Park, Sarjapur Road, Bangalore, Karnataka - 560103', about:'Zenith Infotech delivers enterprise software solutions, cloud infrastructure and IT consulting services to mid-market businesses.', planStart:'18 May 2025', planExpiry:'17 Nov 2025', planPrice:'₹4,999.00', daysLeft:0 },
  { id:12, date:'02 Apr 2025', company:'Heritage Spices', companyType:'Exporter', member:'Priya Menon', role:'Owner', location:'Thiruvananthapuram', mobile:'+91 8803216754', email:'priya.menon@heritage.com', status:'active', plan:'starter', photo:'https://randomuser.me/api/portraits/women/71.jpg', website:'www.heritagespices.in', gst:'32MNOPQ9012R3S7', phone2:'', joinIp:'223.190.82.14', address:'TC 25/1872, Pattom Palace P.O., Thiruvananthapuram, Kerala - 695004', about:'Heritage Spices sources and exports premium Kerala spices including cardamom, pepper and cinnamon to international gourmet markets.', planStart:'02 Apr 2025', planExpiry:'01 Oct 2025', planPrice:'₹1,999.00', daysLeft:0 },
  { id:13, date:'15 Mar 2025', company:'Emerald Foods', companyType:'Manufacturer', member:'Karan Bhatia', role:'Director', location:'Ludhiana', mobile:'+91 9678234501', email:'karan.bhatia@emerald.com', status:'inactive', plan:'free', photo:'https://randomuser.me/api/portraits/men/78.jpg', website:'www.emeraldfoods.in', gst:'03RSTUV3456W4X8', phone2:'+91 9678234510', joinIp:'61.12.89.33', address:'G.T. Road, Focal Point Phase-5, Ludhiana, Punjab - 141010', about:'Emerald Foods manufactures packaged snacks, ready-to-eat meals and frozen food products for the North Indian market.', planStart:'15 Mar 2025', planExpiry:'—', planPrice:'Free', daysLeft:'∞' },
  { id:14, date:'28 Feb 2025', company:'Nova Electronics', companyType:'Retailer', member:'Tanvi Rao', role:'Manager', location:'Pune', mobile:'+91 9534128976', email:'tanvi.rao@nova.com', status:'active', plan:'starter', photo:'https://randomuser.me/api/portraits/women/85.jpg', website:'www.novaelectronics.co.in', gst:'27WXYZ7890A5B9', phone2:'', joinIp:'106.201.15.77', address:'Shop 7, Amanora Mall, Hadapsar, Pune, Maharashtra - 411028', about:'Nova Electronics is a retail chain specialising in consumer electronics, smart home devices and mobile accessories.', planStart:'28 Feb 2025', planExpiry:'27 Aug 2025', planPrice:'₹1,999.00', daysLeft:0 }
];

// ===== DOM =====
const tbody = document.getElementById('members-tbody');
const searchInput = document.getElementById('table-search-input');
const pills = document.querySelectorAll('.pill[data-filter]');
const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menu-toggle');
const refreshBtn = document.getElementById('refresh-btn');
const tableInfo = document.getElementById('table-info');
const directoryView = document.getElementById('directory-view');
const profileView = document.getElementById('profile-view');

let currentFilter = 'all';
let searchQuery = '';
let sortDirection = 'desc'; // Join Date sort
let openDropdown = null;

// ===== HELPERS =====
const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);
const initials = name => name.split(' ').map(w => w[0]).join('').toUpperCase();

function avatarHTML(m, size) {
  const s = size || 32;
  return `<img class="member-avatar" style="width:${s}px;height:${s}px" src="${m.photo}" alt="${m.member}" onerror="this.outerHTML='<div class=\\'member-avatar-placeholder\\' style=\\'width:${s}px;height:${s}px\\'>${initials(m.member)}</div>'">`;
}

// ===== GLOBAL UI FUNCTIONS =====
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span class="material-icons-round">${type === 'success' ? 'check_circle' : 'error'}</span> ${message}`;
  
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('fade-out');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function openModal(title, bodyHTML, footerHTML) {
  const overlay = document.getElementById('modal-container');
  const content = document.getElementById('modal-content');
  
  content.innerHTML = `
    <div class="modal-header">
      <h3 class="modal-title">${title}</h3>
      <button class="modal-close" onclick="closeModal()">
        <span class="material-icons-round">close</span>
      </button>
    </div>
    <div class="modal-body">${bodyHTML}</div>
    <div class="modal-footer">${footerHTML}</div>
  `;
  
  overlay.classList.remove('hidden');
}

function closeModal() {
  document.getElementById('modal-container').classList.add('hidden');
}

// Close modal or dropdowns on outside click
document.addEventListener('click', (e) => {
  // Close Modal
  if (e.target.id === 'modal-container') {
    closeModal();
  }
  
  // Close Dropdowns
  const isDropdownBtn = e.target.closest('.dropdown-trigger');
  if (!isDropdownBtn) {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
      menu.classList.remove('active');
    });
  }
});

// ===== ACTIONS MENU LOGIC =====
function toggleActionsMenu(id, event) {
  event.stopPropagation();
  const menu = document.getElementById(`actions-menu-${id}`);
  
  // Close others
  document.querySelectorAll('.dropdown-menu').forEach(m => {
    if (m !== menu) m.classList.remove('active');
  });
  
  menu.classList.toggle('active');
}

function suspendMember(id) {
  const member = members.find(m => m.id === id);
  if (!member) return;
  member.status = member.status === 'active' ? 'suspended' : 'active';
  showToast(`${member.member}'s account has been ${member.status}.`, 'success');
  
  // Re-render
  if (document.getElementById('directory-view').classList.contains('hidden')) {
    openProfile(id); // re-render profile
  } else {
    renderTable();
  }
}

function deleteMember(id) {
  const index = members.findIndex(m => m.id === id);
  if (index > -1) {
    const name = members[index].member;
    members.splice(index, 1);
    showToast(`Deleted ${name} successfully.`, 'success');
    closeProfile(); // Go back to directory and re-render
  }
}

// ===== EDIT LOGIC =====
function openEditModal(id) {
  const member = members.find(m => m.id === id);
  if (!member) return;

  const bodyHTML = `
    <div style="display: grid; gap: 16px;">
      <div class="field-box">
        <label class="field-label">Company Name</label>
        <input type="text" id="edit-company" class="field-value" style="width:100%; border:none; outline:none; font:inherit; background:none" value="${member.company}">
      </div>
      <div class="field-box">
        <label class="field-label">Member Name</label>
        <input type="text" id="edit-name" class="field-value" style="width:100%; border:none; outline:none; font:inherit; background:none" value="${member.member}">
      </div>
      <div class="field-box">
        <label class="field-label">Email Address</label>
        <input type="email" id="edit-email" class="field-value" style="width:100%; border:none; outline:none; font:inherit; background:none" value="${member.email}">
      </div>
      <div class="field-box">
        <label class="field-label">Mobile</label>
        <input type="text" id="edit-mobile" class="field-value" style="width:100%; border:none; outline:none; font:inherit; background:none" value="${member.mobile}">
      </div>
      <div class="field-box">
        <label class="field-label">Location</label>
        <input type="text" id="edit-location" class="field-value" style="width:100%; border:none; outline:none; font:inherit; background:none" value="${member.location}">
      </div>
    </div>
  `;

  const footerHTML = `
    <button class="pill" onclick="closeModal()">Cancel</button>
    <button class="btn-refresh" onclick="saveProfile(${id})">Save Changes</button>
  `;

  openModal('Edit Profile', bodyHTML, footerHTML);
}

function saveProfile(id) {
  const member = members.find(m => m.id === id);
  if (!member) return;

  member.company = document.getElementById('edit-company').value;
  member.member = document.getElementById('edit-name').value;
  member.email = document.getElementById('edit-email').value;
  member.mobile = document.getElementById('edit-mobile').value;
  member.location = document.getElementById('edit-location').value;

  closeModal();
  showToast('Profile updated successfully.', 'success');
  
  if (document.getElementById('directory-view').classList.contains('hidden')) {
    openProfile(id); // re-render
  } else {
    renderTable();
  }
}

// ===== RENDER TABLE =====
function renderTable() {
  let filtered = members.filter(m => {
    const mf = currentFilter === 'all' || m.status === currentFilter;
    const q = searchQuery.toLowerCase();
    const ms = !q || m.company.toLowerCase().includes(q) || m.member.toLowerCase().includes(q) || m.email.toLowerCase().includes(q) || m.mobile.includes(q);
    return mf && ms;
  });

  // Sort by Join Date
  filtered.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortDirection === 'desc' ? dateB - dateA : dateA - dateB;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9" style="text-align:center;padding:60px;color:var(--text-soft);"><span class="material-icons-round" style="font-size:48px;display:block;margin-bottom:12px;opacity:0.3;">search_off</span>No members found matching your criteria.</td></tr>`;
    tableInfo.textContent = `No members found`;
    return;
  }

  tbody.innerHTML = filtered.map(m => `
    <tr>
      <td style="font-weight:600;color:var(--text-mid);">${m.date}</td>
      <td class="cell-company"><span class="company-name">${m.company}</span><span class="company-type">${m.companyType}</span></td>
      <td><div class="cell-member">${avatarHTML(m)}<div><span class="member-name">${m.member}</span><span class="member-role">${m.role}</span></div></div></td>
      <td class="cell-location">${m.location}</td>
      <td class="cell-mobile">${m.mobile}</td>
      <td class="cell-email"><a href="mailto:${m.email}">${m.email}</a></td>
      <td><span class="status-badge ${m.status}"><span class="dot"></span>${capitalize(m.status)}</span></td>
      <td><span class="plan-badge ${m.plan}">${m.plan}</span></td>
      <td>
        <div class="row-actions">
          <button class="row-action-btn" title="Edit Profile" onclick="openProfile(${m.id})"><span class="material-icons-round">edit</span></button>
          <div class="dropdown-wrap" style="position: relative;">
            <button class="row-action-btn dropdown-trigger" onclick="toggleActionsMenu('row-${m.id}', event)"><span class="material-icons-round">more_vert</span></button>
            <div class="dropdown-menu" id="actions-menu-row-${m.id}">
              <button class="dropdown-item" onclick="openProfile(${m.id})"><span class="material-icons-round">edit</span>Edit Info</button>
              <button class="dropdown-item" onclick="openProfile(${m.id},'plan')"><span class="material-icons-round">workspace_premium</span>Assign Plan</button>
              <div class="dropdown-sep"></div>
              <button class="dropdown-item ${m.status === 'active' ? 'danger' : 'success'}" onclick="suspendMember(${m.id})">
                <span class="material-icons-round">${m.status === 'active' ? 'block' : 'check_circle'}</span>${m.status === 'active' ? 'Suspend' : 'Activate'}
              </button>
              <button class="dropdown-item danger" onclick="deleteMember(${m.id})"><span class="material-icons-round">delete</span>Delete Member</button>
            </div>
          </div>
        </div>
      </td>
    </tr>
  `).join('');

  tableInfo.textContent = `Showing ${filtered.length} of ${members.length} members`;
}

function toggleSort() {
  sortDirection = sortDirection === 'desc' ? 'asc' : 'desc';
  const icon = document.querySelector('.sort-icon');
  icon.textContent = sortDirection === 'desc' ? 'south' : 'north';
  icon.style.opacity = '1';
  icon.style.color = 'var(--blue)';
  renderTable();
}

function activateSaveBtn() {
  const btn = document.getElementById('profile-save-btn');
  if (btn && btn.classList.contains('inactive')) {
    btn.classList.remove('inactive');
    btn.classList.add('primary');
    btn.disabled = false;
  }
}

function saveProfileInline(id) {
  const btn = document.getElementById('profile-save-btn');
  if (btn) {
    btn.classList.remove('primary');
    btn.classList.add('inactive');
    btn.disabled = true;
  }
  showToast('Profile changes saved successfully.', 'success');
  // Logic to save actual data from inputs would go here if needed.
}

function addContactBox() {
  const container = document.getElementById('contacts-container');
  if (!container) return;
  const currentCount = container.querySelectorAll('.contact-edit-box').length;
  
  if (currentCount >= 3) {
    showToast('Maximum of 3 contacts allowed.', 'warning');
    return;
  }
  
  const box = document.createElement('div');
  box.className = 'contact-edit-box';
  box.innerHTML = `
    <div class="contact-edit-header">
      <span>Additional Contact</span>
      <button class="contact-edit-remove" onclick="removeContactBox(this)"><span class="material-icons-round" style="font-size:16px;margin-right:2px">delete</span> Remove</button>
    </div>
    <div class="form-grid">
      <div class="form-group"><div class="form-label">Full Name</div><input type="text" class="form-value" placeholder="Enter name" oninput="activateSaveBtn()"></div>
      <div class="form-group"><div class="form-label">Designation</div><input type="text" class="form-value" placeholder="Enter designation" oninput="activateSaveBtn()"></div>
      <div class="form-group"><div class="form-label">Primary Mobile</div><input type="text" class="form-value" placeholder="+91 0000000000" oninput="activateSaveBtn()"></div>
      <div class="form-group"><div class="form-label">Primary Email</div><input type="email" class="form-value" placeholder="email@example.com" oninput="activateSaveBtn()"></div>
    </div>
  `;
  container.appendChild(box);
  activateSaveBtn(); // The user added a box, so the state changed.
  
  if (currentCount + 1 >= 3) {
    document.getElementById('add-contact-btn').style.display = 'none';
  }
}

function removeContactBox(btn) {
  const box = btn.closest('.contact-edit-box');
  if (box) {
    box.remove();
    activateSaveBtn();
    document.getElementById('add-contact-btn').style.display = 'flex';
  }
}

function addAddressBox() {
  const container = document.getElementById('addresses-container');
  if (!container) return;
  const currentCount = container.querySelectorAll('.contact-edit-box').length;
  
  if (currentCount >= 3) {
    showToast('Maximum of 3 addresses allowed.', 'warning');
    return;
  }
  
  const box = document.createElement('div');
  box.className = 'contact-edit-box';
  box.innerHTML = `
    <div class="contact-edit-header">
      <span>Additional Address</span>
      <button class="contact-edit-remove" onclick="removeAddressBox(this)"><span class="material-icons-round" style="font-size:16px;margin-right:2px">delete</span> Remove</button>
    </div>
    <div class="form-grid">
      <div class="form-group"><div class="form-label">Address Type</div><input type="text" class="form-value" placeholder="e.g. Branch Office" oninput="activateSaveBtn()"></div>
      <div class="form-group"><div class="form-label">City / Region</div><input type="text" class="form-value" placeholder="Enter city" oninput="activateSaveBtn()"></div>
      <div class="form-group" style="grid-column: 1 / -1;"><div class="form-label">Full Address</div><textarea class="form-value" style="resize: vertical; min-height: 80px;" placeholder="Enter complete address" oninput="activateSaveBtn()"></textarea></div>
    </div>
  `;
  container.appendChild(box);
  activateSaveBtn();
  
  if (currentCount + 1 >= 3) {
    document.getElementById('add-address-btn').style.display = 'none';
  }
}

function removeAddressBox(btn) {
  const box = btn.closest('.contact-edit-box');
  if (box) {
    box.remove();
    activateSaveBtn();
    document.getElementById('add-address-btn').style.display = 'flex';
  }
}

// ===== DROPDOWN =====
function toggleDropdown(e, id) {
  e.stopPropagation();
  const menu = document.getElementById(`dropdown-${id}`);
  if (openDropdown && openDropdown !== menu) openDropdown.classList.remove('open');
  menu.classList.toggle('open');
  openDropdown = menu.classList.contains('open') ? menu : null;
}
document.addEventListener('click', () => { if (openDropdown) { openDropdown.classList.remove('open'); openDropdown = null; } });

// ===== PROFILE VIEW =====
function openProfile(id, tab) {
  if (openDropdown) { openDropdown.classList.remove('open'); openDropdown = null; }
  const m = members[id];
  const activeTab = tab || 'company';
  directoryView.classList.add('hidden');
  profileView.classList.remove('hidden');

  profileView.innerHTML = `
    <div class="breadcrumbs">
      <a href="#" onclick="closeProfile()">Directory</a>
      <span class="sep">/</span>
      <span class="current">${m.company}</span>
    </div>

    <div class="profile-header-card">
      <div class="profile-header-main">
        <div class="profile-header-left">
          <input type="file" id="photo-upload" style="display:none" accept="image/*" onchange="showToast('Profile photo updated successfully!', 'success'); activateSaveBtn();">
          <div class="profile-header-avatar-wrap" onclick="document.getElementById('photo-upload').click()">
            <div class="profile-header-avatar-inner">
              <img class="profile-header-avatar" src="${m.photo}" alt="${m.member}" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(m.member)}&background=ebf1ff&color=3971FE'">
              <div class="profile-header-avatar-overlay">
                <span class="material-icons-round" style="font-size:20px;margin-bottom:2px">photo_camera</span>
                Change
              </div>
            </div>
            <div class="profile-header-avatar-badge">
              <span class="material-icons-round" style="font-size:14px">edit</span>
            </div>
          </div>
          <div class="profile-header-info">
            <div class="profile-header-name">
              ${m.company}
              <span class="status-badge ${m.status}"><span class="dot"></span>${capitalize(m.status)}</span>
            </div>
            <div class="profile-header-sub">${m.companyType} &middot; <span>${m.member}</span>, ${m.role}</div>
          </div>
        </div>
        <div class="profile-header-actions">
          <button class="btn-header-action save-btn inactive" id="profile-save-btn" disabled onclick="saveProfileInline(${m.id})"><span class="material-icons-round">save</span> Save Changes</button>
        </div>
      </div>
      
      <div class="profile-header-stats-row">
        <div class="profile-stat"><div class="profile-stat-label">Join Date</div><div class="profile-stat-value">${m.date}</div></div>
        <div class="profile-stat"><div class="profile-stat-label">Join IP</div><div class="profile-stat-value">${m.joinIp}</div></div>
        <div class="profile-stat"><div class="profile-stat-label">Location</div><div class="profile-stat-value">${m.location}</div></div>
        <div class="profile-stat"><div class="profile-stat-label">Last Login</div><div class="profile-stat-value">2 hours ago</div></div>
      </div>
    </div>

    <div class="profile-tabs" id="profile-tabs">
      <button class="profile-tab ${activeTab==='company'?'active':''}" data-tab="company" onclick="switchTab(${id},'company')"><span class="material-icons-round">business</span> Company</button>
      <button class="profile-tab ${activeTab==='contacts'?'active':''}" data-tab="contacts" onclick="switchTab(${id},'contacts')"><span class="material-icons-round">contacts</span> Contacts</button>
      <button class="profile-tab ${activeTab==='addresses'?'active':''}" data-tab="addresses" onclick="switchTab(${id},'addresses')"><span class="material-icons-round">location_on</span> Addresses</button>
      <button class="profile-tab ${activeTab==='plan'?'active':''}" data-tab="plan" onclick="switchTab(${id},'plan')"><span class="material-icons-round">credit_card</span> Current Plan</button>
      <button class="profile-tab ${activeTab==='assign'?'active':''}" data-tab="assign" onclick="switchTab(${id},'assign')"><span class="material-icons-round">assignment</span> Assign Plan</button>
      <button class="profile-tab ${activeTab==='email'?'active':''}" data-tab="email" onclick="switchTab(${id},'email')"><span class="material-icons-round">email</span> Email</button>
      <button class="profile-tab ${activeTab==='history'?'active':''}" data-tab="history" onclick="switchTab(${id},'history')"><span class="material-icons-round">history</span> Status History</button>
    </div>

    <div class="profile-content" id="profile-tab-content">${renderProfileTab(m, activeTab)}</div>
  `;
}

function switchTab(id, tab) {
  document.querySelectorAll('.profile-tab').forEach(t => t.classList.remove('active'));
  document.querySelector(`.profile-tab[data-tab="${tab}"]`).classList.add('active');
  document.getElementById('profile-tab-content').innerHTML = renderProfileTab(members[id], tab);
}

function renderProfileTab(m, tab) {
  switch (tab) {
    case 'company':
      return `
        <div class="content-card">
          <h3 class="profile-section-title flex items-center gap-2" style="color: #0f172a;">
            <div style="background: #0f172a; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
              <span class="material-icons-round" style="font-size: 16px;">info</span>
            </div>
            Company Profile
          </h3>
          <p class="profile-section-desc">Primary business details and legal identification on file.</p>
          
          <div class="table-form">
            <div class="table-form-row">
              <div class="table-form-label">Company Name</div>
              <div class="table-form-value"><input type="text" class="form-value" value="${m.company}" oninput="activateSaveBtn()"></div>
            </div>
            <div class="table-form-row">
              <div class="table-form-label">Business Type</div>
              <div class="table-form-value">
                <select class="form-value" onchange="activateSaveBtn()">
                  <option value="Manufacturer" ${m.companyType === 'Manufacturer' ? 'selected' : ''}>Manufacturer</option>
                  <option value="Retailer" ${m.companyType === 'Retailer' ? 'selected' : ''}>Retailer</option>
                  <option value="Exporter" ${m.companyType === 'Exporter' ? 'selected' : ''}>Exporter</option>
                  <option value="Trader" ${m.companyType === 'Trader' ? 'selected' : ''}>Trader</option>
                  <option value="Service Provider" ${m.companyType === 'Service Provider' ? 'selected' : ''}>Service Provider</option>
                </select>
              </div>
            </div>
            <div class="table-form-row">
              <div class="table-form-label">Website</div>
              <div class="table-form-value"><input type="text" class="form-value" value="${m.website}" oninput="activateSaveBtn()"></div>
            </div>
            <div class="table-form-row">
              <div class="table-form-label">Email ID</div>
              <div class="table-form-value"><input type="email" class="form-value" value="info@${m.company.toLowerCase().replace(/[^a-z0-9]/g, '')}.com" oninput="activateSaveBtn()"></div>
            </div>
            <div class="table-form-row">
              <div class="table-form-label">GST No</div>
              <div class="table-form-value"><input type="text" class="form-value" value="${m.gst}" oninput="activateSaveBtn()"></div>
            </div>
            <div class="table-form-row">
              <div class="table-form-label">Phone No 1</div>
              <div class="table-form-value"><input type="text" class="form-value" value="${m.mobile}" oninput="activateSaveBtn()"></div>
            </div>
            <div class="table-form-row">
              <div class="table-form-label">Phone No 2</div>
              <div class="table-form-value"><input type="text" class="form-value" placeholder="+91 " oninput="activateSaveBtn()"></div>
            </div>
            <div class="table-form-row" style="align-items: flex-start;">
              <div class="table-form-label" style="height: auto; min-height: 100px;">About Business</div>
              <div class="table-form-value" style="padding: 0;">
                <textarea class="form-value" style="width: 100%; border: none; background: transparent; resize: vertical; min-height: 100px; padding: 16px 20px; box-shadow: none; border-radius: 0;" oninput="activateSaveBtn()">${m.about}</textarea>
              </div>
            </div>
          </div>
        </div>`;

    case 'contacts':
      return `
        <div class="content-card">
          <h3 class="profile-section-title">
            <div style="background: linear-gradient(135deg, #3b82f6, #6366f1); color: white; width: 28px; height: 28px; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <span class="material-icons-round" style="font-size: 16px;">contacts</span>
            </div>
            Contact Information
          </h3>
          <p class="profile-section-desc">Primary contact details for executive communication. Maximum 3 contacts.</p>
          
          <div id="contacts-container">
            <div class="contact-edit-box">
              <div class="contact-edit-header">
                <span>&#x1F464; Primary Contact</span>
              </div>
              <div class="form-grid">
                <div class="form-group"><div class="form-label">Full Name</div><input type="text" class="form-value" value="${m.member}" oninput="activateSaveBtn()"></div>
                <div class="form-group"><div class="form-label">Designation</div><input type="text" class="form-value" value="${m.role}" oninput="activateSaveBtn()"></div>
                <div class="form-group"><div class="form-label">Mobile</div><input type="text" class="form-value" value="${m.mobile}" oninput="activateSaveBtn()"></div>
                <div class="form-group"><div class="form-label">Email</div><input type="email" class="form-value" value="${m.email}" oninput="activateSaveBtn()"></div>
              </div>
            </div>
          </div>
          
          <button class="add-item-btn" id="add-contact-btn" onclick="addContactBox()">
            <span class="material-icons-round">add_circle_outline</span>
            Add Another Contact
          </button>
        </div>`;

    case 'addresses':
      return `
        <div class="content-card">
          <h3 class="profile-section-title">
            <div style="background: linear-gradient(135deg, #10b981, #059669); color: white; width: 28px; height: 28px; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <span class="material-icons-round" style="font-size: 16px;">location_on</span>
            </div>
            Registered Addresses
          </h3>
          <p class="profile-section-desc">Official headquarters and registered business addresses. Maximum 3 addresses.</p>
          
          <div id="addresses-container">
            <div class="contact-edit-box">
              <div class="contact-edit-header">
                <span>&#x1F3E0; Primary Address</span>
              </div>
              <div class="form-grid">
                <div class="form-group"><div class="form-label">Address Type</div><input type="text" class="form-value" value="Headquarters" oninput="activateSaveBtn()"></div>
                <div class="form-group"><div class="form-label">City / Region</div><input type="text" class="form-value" value="${m.location}" oninput="activateSaveBtn()"></div>
                <div class="form-group" style="grid-column: 1 / -1;"><div class="form-label">Full Address</div><textarea class="form-value" style="resize: vertical; min-height: 80px;" oninput="activateSaveBtn()">${m.address}</textarea></div>
              </div>
            </div>
          </div>
          
          <button class="add-item-btn" id="add-address-btn" onclick="addAddressBox()">
            <span class="material-icons-round">add_circle_outline</span>
            Add Another Address
          </button>
        </div>`;

    case 'plan':
      return `
        <div class="content-card">
          <div class="profile-section-title">Current Plan</div>
          <div class="profile-section-desc">Active subscription details and expiry.</div>
          <div class="plan-overview-premium">
            <div class="plan-premium-left">
              <div class="plan-premium-badge"><span class="plan-badge ${m.plan}">${capitalize(m.plan)}</span></div>
              <div class="plan-premium-title">${capitalize(m.plan)} Subscription</div>
              <div class="plan-premium-price">${m.planPrice} <span>/ billing cycle</span></div>
            </div>
            <div class="plan-premium-right">
              <div class="plan-days-circle">
                <span class="days-num">${m.daysLeft}</span>
                <span class="days-text">Days Left</span>
              </div>
            </div>
          </div>
          <div class="plan-details-grid">
            <div class="plan-detail-item"><div class="plan-detail-label">Start Date</div><div class="plan-detail-value">${m.planStart}</div></div>
            <div class="plan-detail-item"><div class="plan-detail-label">Expiry Date</div><div class="plan-detail-value">${m.planExpiry}</div></div>
            <div class="plan-detail-item"><div class="plan-detail-label">Auto Renewal</div><div class="plan-detail-value">Enabled</div></div>
          </div>
          <button class="btn-change-plan" onclick="showToast('Redirecting to upgrade flow...', 'success')"><span class="material-icons-round">swap_horiz</span> Upgrade / Downgrade Plan</button>
        </div>`;

    case 'assign':
      return `
        <div class="content-card">
          <h3 class="profile-section-title flex items-center gap-2">
            <span class="material-icons-round text-blue">assignment_add</span>
            Manual Plan Assignment
          </h3>
          <p class="profile-section-desc">Set a new plan. Invoice will be auto-generated and user notified before expiry.</p>
          
          <div class="plan-selector-grid">
            <div class="plan-option-card"><div class="plan-option-name">Free</div><div class="plan-option-price">₹0 / 365d</div></div>
            <div class="plan-option-card"><div class="plan-option-name">Starter</div><div class="plan-option-price">₹999 / 30d</div></div>
            <div class="plan-option-card"><div class="plan-option-name">Business</div><div class="plan-option-price">₹2999 / 30d</div></div>
            <div class="plan-option-card selected"><div class="plan-option-name">Enterprise</div><div class="plan-option-price">₹9999 / 90d</div></div>
            <div class="plan-option-card" style="grid-column: span 2"><div class="plan-option-name">Custom</div><div class="plan-option-price">₹0 / custom</div></div>
          </div>

          <div class="form-grid">
            <div class="form-group"><div class="form-label">Validity (Days)</div><input type="number" class="form-value" value="90"></div>
            <div class="form-group"><div class="form-label">Pricing (₹)</div><input type="number" class="form-value" value="9999"></div>
            <div class="form-group"><div class="form-label">Discount (%)</div><input type="number" class="form-value" value="0"></div>
            <div class="form-group"><div class="form-label">Auto Expiry</div><button class="toggle-btn">Enabled</button></div>
          </div>

          <div class="invoice-preview">
            <div class="invoice-header"><span class="material-icons-round" style="font-size:16px">description</span> Invoice Preview</div>
            <div class="invoice-row"><span>Plan</span><span style="font-weight:700">Enterprise</span></div>
            <div class="invoice-row"><span>Base Price</span><span>₹9999.00</span></div>
            <div class="invoice-row"><span>Discount</span><span>-0%</span></div>
            <div class="invoice-row total"><span class="total-label">Total</span><span>₹9999.00</span></div>
          </div>

          <button class="btn-assign" onclick="showToast('Invoice generated and plan assigned successfully.', 'success')"><span class="material-icons-round">receipt_long</span> Assign & Generate Invoice</button>
        </div>`;

    case 'email':
      return `
        <div class="content-card">
          <div class="profile-section-title">Send Email</div>
          <p class="profile-section-desc">Compose an email to ${m.member} or view communication logs.</p>
          <div class="email-layout">
            <div class="email-composer">
              <div class="form-group"><div class="form-label">Subject</div><input type="text" class="form-value" style="width:100%" value="Important: Your membership update"></div>
              <div class="form-group" style="margin-top:16px"><div class="form-label">Message</div><textarea class="form-value" style="width:100%;min-height:120px"></textarea></div>
              <button class="btn-change-plan" style="margin-top:16px" onclick="showToast('Email sent to ${m.member} successfully.', 'success')"><span class="material-icons-round">send</span> Send Message</button>
            </div>
          </div>
          
          <h3 class="profile-section-title" style="margin-top: 40px;">Communication History</h3>
          <p class="profile-section-desc">Past emails sent to this member.</p>
          <div class="timeline">
            <div class="timeline-item"><div class="timeline-marker blue"></div><div class="timeline-content"><div class="timeline-header"><span class="timeline-title"><strong>Subject:</strong> Welcome to the Platform</span><span class="timeline-date">${m.date}</span></div><p class="timeline-desc">Automated welcome sequence initiated.</p></div></div>
            <div class="timeline-item"><div class="timeline-marker"></div><div class="timeline-content"><div class="timeline-header"><span class="timeline-title"><strong>Subject:</strong> Please verify your email</span><span class="timeline-date">${m.date}</span></div><p class="timeline-desc">Verification link sent to ${m.email}.</p></div></div>
          </div>
        </div>`;

    case 'history':
      return `
        <div class="content-card">
          <h3 class="profile-section-title">Audit Log & History</h3>
          <p class="profile-section-desc">Full traceability of account status and plan transitions.</p>
          <div class="timeline">
            <div class="timeline-item"><div class="timeline-marker success"></div><div class="timeline-content"><div class="timeline-header"><span class="timeline-title">Status: <strong>Active</strong></span><span class="timeline-date">Today</span></div><p class="timeline-desc">Payment confirmed. Account restored.</p></div></div>
            <div class="timeline-item"><div class="timeline-marker danger"></div><div class="timeline-content"><div class="timeline-header"><span class="timeline-title">Status: <strong>Suspended</strong></span><span class="timeline-date">2 days ago</span></div><p class="timeline-desc">Automatic suspension due to expiry.</p></div></div>
            <div class="timeline-item"><div class="timeline-marker"></div><div class="timeline-content"><div class="timeline-header"><span class="timeline-title">Registered</span><span class="timeline-date">${m.date}</span></div><p class="timeline-desc">Initial account registration.</p></div></div>
          </div>
        </div>`;
    default: return '';
  }
}

function closeProfile() {
  profileView.classList.add('hidden');
  profileView.innerHTML = '';
  directoryView.classList.remove('hidden');
}

// ===== EVENTS =====
pills.forEach(pill => {
  pill.addEventListener('click', () => {
    pills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    currentFilter = pill.dataset.filter;
    renderTable();
  });
});

searchInput.addEventListener('input', e => { searchQuery = e.target.value; renderTable(); });
menuToggle.addEventListener('click', () => sidebar.classList.toggle('open'));
document.addEventListener('click', e => {
  if (window.innerWidth <= 768 && sidebar.classList.contains('open') && !sidebar.contains(e.target) && e.target !== menuToggle) sidebar.classList.remove('open');
});
refreshBtn.addEventListener('click', () => {
  const icon = refreshBtn.querySelector('.material-icons-round');
  icon.style.transition = 'transform 0.5s ease';
  icon.style.transform = 'rotate(360deg)';
  setTimeout(() => { icon.style.transform = ''; }, 500);
  renderTable();
});
// Sidebar Accordion Nav
document.querySelectorAll('.nav-toggle').forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    const group = toggle.closest('.nav-group');
    const sub = group.querySelector('.nav-sub');
    
    document.querySelectorAll('.nav-group.open').forEach(g => {
      if (g !== group) {
        g.classList.remove('open');
        g.querySelector('.nav-sub').style.height = '0px';
        g.querySelector('.nav-toggle').setAttribute('aria-expanded', 'false');
      }
    });

    if (group.classList.contains('open')) {
      group.classList.remove('open');
      sub.style.height = '0px';
      toggle.setAttribute('aria-expanded', 'false');
    } else {
      group.classList.add('open');
      sub.style.height = sub.scrollHeight + 'px';
      toggle.setAttribute('aria-expanded', 'true');
    }
  });
});

document.querySelectorAll('.nav-item:not(.nav-toggle), .nav-sub-item').forEach(item => {
  item.addEventListener('click', e => { 
    e.preventDefault(); 
    document.querySelectorAll('.nav-item, .nav-sub-item').forEach(n => n.classList.remove('active')); 
    item.classList.add('active'); 
    
    if (item.classList.contains('nav-sub-item')) {
      item.closest('.nav-group').querySelector('.nav-toggle').classList.add('active');
    }
  });
});

// ===== INIT =====
renderTable();
