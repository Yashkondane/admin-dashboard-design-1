const members = [
  {
    id: 0, date: '23 Mar 2026', company: 'Redstone Mining Ltd', member: 'Ira Patel', location: 'Nagpur', mobile: '+91 8408326704', email: 'ira.patel@redstone.com', status: 'suspended', plan: 'enterprise', photo: 'https://randomuser.me/api/portraits/women/44.jpg', address: 'Plot 42, MIDC, Nagpur',
    joinIp: '95.66.134.42', lastLogin: '2 hours ago', companyType: 'Manufacturer', role: 'Director', about: 'Redstone Mining Ltd is a leading manufacturer of industrial-grade mining equipment and raw mineral processing units. Established in 2008, the company serves clients across India and Southeast Asia.',
    contacts: [
      { name: 'Ira Patel', role: 'Director', phone: '+91 8408326704', email: 'ira.patel@redstone.com', isMain: true, status: 'Active', reason: 'Primary stakeholder for all procurement and technical discussions.' },
      { name: 'Amit Sharma', role: 'Operations Manager', phone: '+91 9882142918', email: 'amit.s@redstone.com', isMain: false, status: 'Active', reason: 'Handles day-to-day operations and logistics coordination.' },
      { name: 'Diya Gupta', role: 'CEO', phone: '+91 7028519305', email: 'diya.gupta@rudra.com', isMain: false, status: 'Inactive', reason: 'No longer associated with this project.' }
    ],
    addresses: [
      { title: 'Company Address', line1: 'Plot 42, MIDC', line2: 'Nagpur, Maharashtra', pincode: '440016', city: 'Nagpur', isDefault: true },
      { title: 'Branch Office', line1: '12th Floor, Trade Center', line2: 'Mumbai', pincode: '400051', city: 'Mumbai', isDefault: false },
      { title: 'Regional Office', line1: 'Sector 5, Hinjewadi', line2: 'Phase 1', pincode: '411057', city: 'Pune', isDefault: false }
    ],
    stamps: [
      { date: '12 Apr 2026', badges: ['identity', 'email', 'docs', 'account'], remark: 'Verified via onsite visit and document audit.', admin: 'Admin User' },
      { date: '15 Mar 2026', badges: ['identity', 'email'], remark: 'Initial identity and email check completed.', admin: 'System' }
    ],
    emails: [
      { id: 101, subject: 'Your plan is about to expire', sender: 'admin@example.com', date: '23-04-2026 18 : 19', body: 'This is a reminder that your current plan is expiring soon. Please renew to continue accessing all features.\n\n— Team Admin' },
      { id: 102, subject: 'Welcome to the Platform', sender: 'admin@example.com', date: '24-11-2025 09 : 00', body: 'Welcome to our premium management suite. We are glad to have you on board!' },
      { id: 103, subject: 'Your monthly invoice is ready', sender: 'admin@example.com', date: '12-07-2026 14 : 00', body: 'Your invoice for the current billing cycle has been generated and is ready for download.' }
    ]
  },
  {
    id: 1, date: '24 Jan 2026', company: 'Rudra Steel Works', member: 'Diya Gupta', location: 'Chennai, Tamil Nadu', mobile: '+91 7028519305', email: 'diya.gupta@rudra.com', status: 'active', plan: 'enterprise', photo: 'https://randomuser.me/api/portraits/women/65.jpg', address: 'Ambattur Ind. Estate, Chennai',
    joinIp: '102.45.22.11', lastLogin: '1 day ago', companyType: 'Steel Production', role: 'CEO', about: 'Rudra Steel Works specializes in high-quality structural steel and custom fabrication services for major infrastructure projects.',
    contacts: [{ name: 'Diya Gupta', role: 'CEO', phone: '+91 7028519305', email: 'diya.gupta@rudra.com' }],
    addresses: [{ title: 'Factory Address', line1: 'Ambattur Ind. Estate', line2: '', pincode: '600058', city: 'Chennai', isDefault: true }],
    stamps: [{ date: '20 Jan 2026', badges: ['identity', 'email', 'docs'], remark: 'Verified at factory site.', admin: 'Admin' }]
  },
  {
    id: 2, date: '18 Jan 2026', company: 'Saffron Exports', member: 'Ishaan Reddy', location: 'Jaipur, Rajasthan', mobile: '+91 8834759735', email: 'shaan.reddy@saffron.com', status: 'active', plan: 'business', photo: 'https://randomuser.me/api/portraits/men/32.jpg', address: 'B-22, Sitapura, Jaipur',
    joinIp: '45.12.99.201', lastLogin: '5 mins ago', companyType: 'Exporter', role: 'Founder', about: 'Saffron Exports is a premier export house dealing in authentic Indian spices and textiles for the European market.',
    contacts: [{ name: 'Ishaan Reddy', role: 'Founder', phone: '+91 8834759735', email: 'shaan.reddy@saffron.com' }],
    addresses: [{ title: 'Head Office', line1: 'B-22, Sitapura', line2: '', pincode: '302022', city: 'Jaipur', isDefault: true }],
    stamps: [{ date: '15 Jan 2026', badges: ['identity', 'email', 'account'], remark: 'Identity and account verified.', admin: 'System' }]
  },
  {
    id: 3, date: '04 Jan 2026', company: 'Sharma Jewellers', member: 'Aditya Sharma', location: 'Chandigarh, Punjab', mobile: '+91 9882142918', email: 'aditya.sharma@sharma.com', status: 'pending', plan: 'nil', photo: 'https://randomuser.me/api/portraits/men/45.jpg', address: 'Sector 22-C, Chandigarh',
    joinIp: '110.22.33.44', lastLogin: '3 days ago', companyType: 'Retailer', role: 'Owner', about: 'Sharma Jewellers is a multi-generational boutique offering bespoke gold and diamond jewellery in the heart of Chandigarh.',
    contacts: [{ name: 'Aditya Sharma', role: 'Owner', phone: '+91 9882142918', email: 'aditya.sharma@sharma.com' }],
    addresses: [{ title: 'Showroom', line1: 'Sector 22-C', line2: '', pincode: '160022', city: 'Chandigarh', isDefault: true }],
    stamps: [{ date: '01 Jan 2026', badges: ['identity', 'email'], remark: 'Awaiting document verification.', admin: 'Admin' }]
  },
  {
    id: 4, date: '05 Dec 2025', company: 'Vyom AgriTech', member: 'Kabir Nair', location: 'Hyderabad, Telangana', mobile: '+91 9820011504', email: 'kabir.nair@vyom.com', status: 'suspended', plan: 'free', photo: 'https://randomuser.me/api/portraits/men/22.jpg', address: 'HITEC City, Hyderabad',
    joinIp: '88.12.45.67', lastLogin: '1 week ago', companyType: 'AgriTech', role: 'CTO', about: 'Vyom AgriTech provides precision agriculture solutions using IoT sensors and AI-driven analytics for Indian farmers.',
    contacts: [{ name: 'Kabir Nair', role: 'CTO', phone: '+91 9820011504', email: 'kabir.nair@vyom.com' }],
    addresses: [{ title: 'Company Address', line1: 'HITEC City', line2: '', pincode: '500081', city: 'Hyderabad', isDefault: true }]
  },
  {
    id: 5, date: '24 Nov 2025', company: 'Coastal Seafoods', member: 'Maya Verma', location: 'Kochi, Kerala', mobile: '+91 8856174832', email: 'maya.verma@coastal.com', status: 'expire', plan: 'starter', photo: 'https://randomuser.me/api/portraits/women/28.jpg', address: 'Harbour Road, Kochi',
    joinIp: '77.33.21.90', lastLogin: '2 weeks ago', companyType: 'Food Processing', role: 'Managing Director', about: 'Coastal Seafoods is a premium seafood processing and export company based out of Kochi, Kerala.',
    contacts: [{ name: 'Maya Verma', role: 'Managing Director', phone: '+91 8856174832', email: 'maya.verma@coastal.com' }],
    addresses: [{ title: 'Factory Address', line1: 'Harbour Road', line2: 'Kerala', pincode: '682003', city: 'Kochi', isDefault: true }]
  },
  {
    id: 6, date: '09 Oct 2025', company: 'Indigo Pharma', member: 'Ananya Kapoor', location: 'Ahmedabad, Gujarat', mobile: '+91 9361872296', email: 'ananya.kapoor@indigo.com', status: 'pending', plan: 'nil', photo: 'https://randomuser.me/api/portraits/women/33.jpg', address: 'GIDC Vatva, Ahmedabad',
    joinIp: '55.66.77.88', lastLogin: '5 days ago', companyType: 'Pharmaceutical', role: 'Founder', about: 'Indigo Pharma focuses on generic drug manufacturing and API production for domestic and international markets.',
    contacts: [{ name: 'Ananya Kapoor', role: 'Founder', phone: '+91 9361872296', email: 'ananya.kapoor@indigo.com' }],
    addresses: [{ title: 'Plant Address', line1: 'GIDC Vatva', line2: 'Gujarat', pincode: '382445', city: 'Ahmedabad', isDefault: true }]
  },
  {
    id: 7, date: '14 Sep 2025', company: 'Aurora Logistics', member: 'Vihaan Singh', location: 'Delhi, Delhi', mobile: '+91 9901457488', email: 'vihaan.singh@aurora.com', status: 'active', plan: 'starter', photo: 'https://randomuser.me/api/portraits/men/55.jpg', address: 'Okhla Phase-II, New Delhi',
    joinIp: '112.90.45.12', lastLogin: '30 mins ago', companyType: 'Logistics', role: 'CEO', about: 'Aurora Logistics provides end-to-end supply chain solutions across India with a focus on last-mile delivery.',
    contacts: [{ name: 'Vihaan Singh', role: 'CEO', phone: '+91 9901457488', email: 'vihaan.singh@aurora.com' }],
    addresses: [{ title: 'Head Office', line1: 'Okhla Phase-II', line2: '', pincode: '110020', city: 'New Delhi', isDefault: true }]
  },
  {
    id: 8, date: '22 Aug 2025', company: 'Bluebell Cafe Co.', member: 'Neha Agarwal', location: 'Kolkata, West Bengal', mobile: '+91 9739421934', email: 'neha.agarwal@bluebell.com', status: 'expire', plan: 'starter', photo: 'https://randomuser.me/api/portraits/women/50.jpg', address: 'Park Street, Kolkata',
    joinIp: '99.88.77.66', lastLogin: '1 month ago', companyType: 'Hospitality', role: 'Owner', about: 'Bluebell Cafe Co. is a specialty coffee chain with a focus on artisanal roasts and cozy ambiance.',
    contacts: [{ name: 'Neha Agarwal', role: 'Owner', phone: '+91 9739421934', email: 'neha.agarwal@bluebell.com' }],
    addresses: [{ type: 'Flagship', detail: 'Park Street, Kolkata' }]
  },
  {
    id: 9, date: '10 Jul 2025', company: 'Summit Traders', member: 'Rohan Mehta', location: 'Mumbai, Maharashtra', mobile: '+91 9112358741', email: 'rohan.mehta@summit.com', status: 'active', plan: 'business', photo: 'https://randomuser.me/api/portraits/men/36.jpg', address: 'BKC, Bandra East, Mumbai',
    joinIp: '44.55.66.77', lastLogin: '1 hour ago', companyType: 'Trading', role: 'Partner', about: 'Summit Traders is a diversified trading firm dealing in commodities, textiles, and electronics.',
    contacts: [{ name: 'Rohan Mehta', role: 'Partner', phone: '+91 9112358741', email: 'rohan.mehta@summit.com' }],
    addresses: [{ type: 'Office', detail: 'BKC, Bandra East, Mumbai' }]
  },
  {
    id: 10, date: '01 Jun 2025', company: 'Prism Textiles', member: 'Sneha Joshi', location: 'Surat', mobile: '+91 8825467190', email: 'sneha.joshi@prism.com', status: 'pending', plan: 'nil', photo: 'https://randomuser.me/api/portraits/women/12.jpg', address: 'Ring Road, Surat',
    joinIp: '33.44.55.66', lastLogin: '4 days ago', companyType: 'Textiles', role: 'Director', about: 'Prism Textiles manufactures premium quality fabrics for both domestic and export markets.',
    contacts: [{ name: 'Sneha Joshi', role: 'Director', phone: '+91 8825467190', email: 'sneha.joshi@prism.com' }],
    addresses: [{ type: 'Factory', detail: 'Ring Road, Surat, Gujarat' }]
  },
  {
    id: 11, date: '18 May 2025', company: 'Zenith Infotech', member: 'Arjun Das', location: 'Bangalore', mobile: '+91 9944125803', email: 'arjun.das@zenith.com', status: 'active', plan: 'business', photo: 'https://randomuser.me/api/portraits/men/64.jpg', address: 'Prestige Tech Park, Bangalore',
    joinIp: '22.33.44.55', lastLogin: '10 mins ago', companyType: 'IT Services', role: 'CEO', about: 'Zenith Infotech is a leading IT services and consulting firm specializing in cloud solutions and digital transformation.',
    contacts: [{ name: 'Arjun Das', role: 'CEO', phone: '+91 9944125803', email: 'arjun.das@zenith.com' }],
    addresses: [{ type: 'HQ', detail: 'Prestige Tech Park, Bangalore' }]
  },
  {
    id: 12, date: '02 Apr 2025', company: 'Heritage Spices', member: 'Priya Menon', location: 'Thiruvananthapuram', mobile: '+91 8803216754', email: 'priya.menon@heritage.com', status: 'active', plan: 'starter', photo: 'https://randomuser.me/api/portraits/women/71.jpg', address: 'Pattom, Thiruvananthapuram',
    joinIp: '11.22.33.44', lastLogin: '2 days ago', companyType: 'FMCG', role: 'Founder', about: 'Heritage Spices curates and exports authentic Kerala spices to premium international markets.',
    contacts: [{ name: 'Priya Menon', role: 'Founder', phone: '+91 8803216754', email: 'priya.menon@heritage.com' }],
    addresses: [{ type: 'Warehouse', detail: 'Pattom, Thiruvananthapuram' }]
  },
  {
    id: 13, date: '15 Mar 2025', company: 'Emerald Foods', member: 'Karan Bhatia', location: 'Ludhiana', mobile: '+91 9678234501', email: 'karan.bhatia@emerald.com', status: 'expire', plan: 'free', photo: 'https://randomuser.me/api/portraits/men/78.jpg', address: 'Focal Point, Ludhiana',
    joinIp: '66.77.88.99', lastLogin: '3 weeks ago', companyType: 'Food Production', role: 'MD', about: 'Emerald Foods produces organic and health-conscious food products for the Indian market.',
    contacts: [{ name: 'Karan Bhatia', role: 'MD', phone: '+91 9678234501', email: 'karan.bhatia@emerald.com' }],
    addresses: [{ type: 'Factory', detail: 'Focal Point, Ludhiana, Punjab' }]
  },
  {
    id: 14, date: '28 Feb 2025', company: 'Nova Electronics', member: 'Tanvi Rao', location: 'Pune', mobile: '+91 9534128976', email: 'tanvi.rao@nova.com', status: 'incomplete', plan: 'nil', photo: 'https://randomuser.me/api/portraits/women/85.jpg', address: 'Amanora Mall, Pune',
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
  document.querySelectorAll('.tab-item').forEach(p => p.classList.remove('active'));
  const active = document.querySelector(`.tab-item[data-filter="${status}"]`);
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

  const tbodyEl = document.getElementById('members-tbody');
  if (!tbodyEl) return;

  if (filtered.length === 0) {
    tbodyEl.innerHTML = '<tr><td colspan="7" style="text-align:center;padding:60px;color:var(--text-soft);">No members found.</td></tr>';
    return;
  }

  tbodyEl.innerHTML = pageItems.map((m, i) => {
    const hasEmailCheck = m.status === 'active' || m.status === 'suspended' || m.id % 2 !== 0;
    const hasMobileCheck = m.status === 'active' || m.id % 3 !== 0;

    // No icons needed, using text color instead

    let statusBg = '#E5E7EB'; let statusColor = '#4B5563'; let statusText = m.status;
    if (m.status === 'active') { statusBg = '#E8F5EC'; statusColor = '#15803D'; statusBorder = '#22C55E'; statusText = 'Active'; }
    else if (m.status === 'suspended') { statusBg = '#FEE2E2'; statusColor = '#B91C1C'; statusBorder = '#EF4444'; statusText = 'Suspended'; }
    else if (m.status === 'pending') { statusBg = '#FFF7ED'; statusColor = '#A34E0C'; statusBorder = '#FB923C'; statusText = 'Pending'; }
    else if (m.status === 'incomplete') { statusBg = '#F3E8FF'; statusColor = '#6D28D9'; statusBorder = '#A855F7'; statusText = 'Incomplete'; }
    else if (m.status === 'inactive' || m.status === 'expire') { statusBg = '#F3F4F6'; statusColor = '#4B5563'; statusBorder = '#D1D5DB'; statusText = 'Inactive'; }

    return `
    <tr>
      <td onclick="openProfile(${m.id})">
        <div style="display: flex; align-items: center; gap: 10px;">
          <img src="${m.photo || 'https://i.pravatar.cc/150?u=' + m.id}" alt="" style="width: 34px; height: 34px; border-radius: 50%; object-fit: cover; background: #f1f5f9;">
          <div style="display: flex; flex-direction: column;">
            <span style="font-weight: 800; color: #1e293b; font-size: 0.88rem;">${m.member}</span>
            <span style="font-size: 0.8rem; color: #64748b; font-weight: 600; margin-top:1px;">${m.company}</span>
          </div>
        </div>
      </td>
      <td onclick="openProfile(${m.id})">
        <span style="color: var(--text-mid); font-weight: 600; font-size: 0.88rem;">${m.location}</span>
      </td>
      <td onclick="openProfile(${m.id})">
        <div style="display:flex; flex-direction:column; align-items:flex-start;">
          <span style="color: ${hasEmailCheck ? 'var(--text-mid)' : '#f97316'}; font-weight: 600; font-size:0.88rem;">${m.email}</span>
        </div>
      </td>
      <td onclick="openProfile(${m.id})">
        <div style="display:flex; flex-direction:column; align-items:flex-start;">
          <span style="color: ${hasMobileCheck ? 'var(--text-mid)' : '#f97316'}; font-weight: 600; font-size:0.88rem;">${m.mobile}</span>
        </div>
      </td>
      <td onclick="openProfile(${m.id})">
        <span style="color: var(--text-mid); font-weight: 600; font-size: 0.88rem;">${m.plan === 'nil' ? 'Free' : capitalize(m.plan)}</span>
      </td>
      <td onclick="openProfile(${m.id})" style="text-align:center;">
        <div class="status-badge" style="min-width: 95px; padding: 5px 12px; font-size: 0.82rem; background: ${statusBg}; color: ${statusColor}; border: 1px solid ${statusBorder}; border-radius: 6px; display: inline-flex; align-items: center; justify-content: center; gap: 6px; font-weight: 700;">
          ${m.status === 'pending' ? '' : `<span style="width: 6px; height: 6px; border-radius: 50%; background: ${statusColor};"></span>`}
          ${statusText}
        </div>
      </td>
      <td onclick="openProfile(${m.id})">
        <span style="color: var(--text-mid); font-weight: 600; font-size: 0.82rem;">${m.date}</span>
      </td>
    </tr>
    `;
  }).join('');

  renderPagination(filtered.length);
  updateSortIcons();
}

function renderPagination(total) {
  const tp = Math.ceil(total / rowsPerPage);
  let html = '';

  html += `<button class="page-btn" id="prev-page" style="width: 32px; height: 32px; border: none; background: transparent;" ${currentPage === 1 ? 'disabled style="opacity:0.4;cursor:default;"' : `onclick="goToPage(${currentPage - 1})"`}><span class="material-icons-round" style="color:var(--text-mid); font-size: 18px;">chevron_left</span></button>`;

  for (let i = 1; i <= tp; i++) {
    html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" style="width: 32px; height: 32px; font-size: 0.85rem; font-weight: 700; background: transparent; border: 1px solid ${i === currentPage ? 'var(--blue)' : 'transparent'}; border-radius: 8px; color: ${i === currentPage ? 'var(--blue)' : 'var(--text-mid)'};" onclick="goToPage(${i})">${i}</button>`;
  }

  html += `<button class="page-btn" id="next-page" style="width: 32px; height: 32px; border: none; background: transparent;" ${currentPage === tp ? 'disabled style="opacity:0.4;cursor:default;"' : `onclick="goToPage(${currentPage + 1})"`}><span class="material-icons-round" style="color:var(--text-mid); font-size: 18px;">chevron_right</span></button>`;

  paginationControls.innerHTML = html;

  const showingText = document.getElementById('showing-text');
  if (showingText) {
    const start = total === 0 ? 0 : (currentPage - 1) * rowsPerPage + 1;
    const end = Math.min(currentPage * rowsPerPage, total);
    showingText.textContent = `Showing ${start} to ${end} of ${total} members`;
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


function openProfile(id, tab = 'company', pushState = true) {
  const m = members.find(x => x.id === id);
  if (!m) return;
  if (tab === 'contacts') tab = 'contact-table';

  if (pushState) {
    const url = new URL(window.location);
    url.searchParams.set('p', id);
    url.searchParams.set('t', tab);
    window.history.pushState({}, '', url);
  }

  directoryView.classList.add('hidden');
  profileView.classList.remove('hidden');
  document.querySelector('.top-bar-search').style.display = 'none';
  document.querySelector('.top-bar').style.marginBottom = '8px';

  profileView.innerHTML = `
    <div class="breadcrumbs" style="margin-bottom: 24px;">
      <span style="color:var(--blue); font-weight:700;">Directory</span>
      <span class="material-icons-round" style="font-size:16px; color:#cbd5e1;">chevron_right</span>
      <span style="color:var(--text-soft); font-weight:700;">${m.company}</span>
    </div>

    <div class="profile-header-card">
      <div class="profile-header-top">
        <div class="profile-header-left">
          <div class="profile-avatar-wrapper">
            <img src="${m.photo || 'https://i.pravatar.cc/150?u=' + m.email}" class="profile-header-avatar" alt="${m.member}">
          </div>
          <div class="profile-header-info">
            <div class="profile-name-row">
              <h2 class="profile-header-name">${m.member}, ${m.role}</h2>
              <span class="material-icons-round" style="color:var(--blue); font-size:20px; margin-left:4px;">verified</span>
            </div>
            <p class="profile-header-sub">
              <span style="color: #1e293b; font-weight: 800;">${m.company}</span>, ${m.companyType || 'Manufacturer'}
            </p>
          </div>
        </div>
        <div class="profile-header-right">
          <div class="profile-plan-text" style="font-size: 0.8rem; font-weight: 700; color: #94a3b8;">Plan: <span style="color:var(--blue); font-weight:800; text-transform: capitalize;">${m.plan || 'enterprise'}</span></div>
          <div style="display: flex; align-items: center; gap: 6px; font-size: 0.8rem; font-weight: 800; text-transform: capitalize; 
            background: ${m.status === 'active' ? '#E8F5EC' : (m.status === 'suspended' ? '#FEE2E2' : (m.status === 'pending' ? '#FFF7ED' : (m.status === 'incomplete' ? '#F3E8FF' : '#F3F4F6')))}; 
            color: ${m.status === 'active' ? '#15803D' : (m.status === 'suspended' ? '#B91C1C' : (m.status === 'pending' ? '#A34E0C' : (m.status === 'incomplete' ? '#6D28D9' : '#4B5563')))}; 
            border: 1px solid ${m.status === 'active' ? '#22C55E' : (m.status === 'suspended' ? '#EF4444' : (m.status === 'pending' ? '#FB923C' : (m.status === 'incomplete' ? '#A855F7' : '#D1D5DB')))}; 
            padding: 5px 14px; border-radius: 6px;">
            ${m.status === 'pending' ? '' : `<span style="width:6px; height:6px; border-radius:50%; background: ${m.status === 'active' ? '#15803D' : (m.status === 'suspended' ? '#B91C1C' : (m.status === 'pending' ? '#A34E0C' : (m.status === 'incomplete' ? '#6D28D9' : '#4B5563')))}"></span>`}
            ${m.status ? capitalize(m.status) : 'Suspended'}
          </div>
        </div>
      </div>
      <div class="profile-stats-row">
        <div class="stat-item">
          <div class="stat-label">Join Date</div>
          <div class="stat-value-row">
            <span class="material-icons-round stat-icon">calendar_today</span>
            <div class="stat-value" title="${m.date}">${m.date}</div>
          </div>
        </div>
        <div class="stat-item">
          <div class="stat-label">Join IP</div>
          <div class="stat-value-row">
            <span class="material-icons-round stat-icon">desktop_windows</span>
            <div class="stat-value" title="${m.joinIp || '95.66.134.42'}">${m.joinIp || '95.66.134.42'}</div>
          </div>
        </div>
        <div class="stat-item">
          <div class="stat-label">Location</div>
          <div class="stat-value-row">
            <span class="material-icons-round stat-icon">location_on</span>
            <div class="stat-value" title="${m.location}">${m.location}</div>
          </div>
        </div>
        <div class="stat-item">
          <div class="stat-label">Last Login</div>
          <div class="stat-value-row">
            <span class="material-icons-round stat-icon">schedule</span>
            <div class="stat-value" title="${m.lastLogin || '2 hours ago'}">${m.lastLogin || '2 hours ago'}</div>
          </div>
        </div>
        <div class="stat-item">
          <div class="stat-label">Broadcasts</div>
          <div class="stat-value-row">
            <span class="material-icons-round stat-icon">sensors</span>
            <div class="stat-value" title="${m.broadcasts ? m.broadcasts.length : 2}">${m.broadcasts ? m.broadcasts.length : 2}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="profile-tabs" id="profile-tabs">
      <button class="profile-tab ${tab === 'company' ? 'active' : ''}" onclick="switchTab(${id},'company')"><span class="material-icons-round">business</span> Company</button>
      <button class="profile-tab ${tab === 'contact-table' ? 'active' : ''}" onclick="switchTab(${id},'contact-table')"><span class="material-icons-round">people</span> Contact</button>
      <button class="profile-tab ${tab === 'addresses' ? 'active' : ''}" onclick="switchTab(${id},'addresses')"><span class="material-icons-round">location_on</span> Addresses</button>
      <button class="profile-tab ${tab === 'plan' ? 'active' : ''}" onclick="switchTab(${id},'plan')"><span class="material-icons-round">assignment</span> Assign Plan</button>
      <button class="profile-tab ${tab === 'email' ? 'active' : ''}" onclick="switchTab(${id},'email')"><span class="material-icons-round">mail</span> Email Setup</button>
      <button class="profile-tab ${tab === 'broadcasts' ? 'active' : ''}" onclick="switchTab(${id},'broadcasts')"><span class="material-icons-round">campaign</span> Broadcasts</button>
      <button class="profile-tab ${tab === 'history' ? 'active' : ''}" onclick="switchTab(${id},'history')"><span class="material-icons-round">login</span> Login History</button>
      <button class="profile-tab ${tab === 'stamp' ? 'active' : ''}" onclick="switchTab(${id},'stamp')"><span class="material-icons-round">verified</span> Stamp</button>
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
        <div class="profile-section-header" style="justify-content: space-between; align-items: center; margin-bottom: 24px;">
          <div style="display:flex; gap:16px; align-items:center; flex-wrap:wrap;">
            <div class="profile-section-icon" style="width: 44px; height: 44px; flex-shrink: 0; border: 1px solid var(--border); background: var(--white); border-radius:8px; display:flex; align-items:center; justify-content:center;"><span class="material-icons-round">business</span></div>
            <div>
              <h3 class="profile-section-title" style="margin:0; font-size:1.15rem; font-weight:800; color:#1e293b;">Company Details</h3>
            </div>
          </div>
          <button class="btn-primary" onclick="openEditModal('company', ${m.id})" style="padding: 10px 24px; border-radius:10px;">
            <span class="material-icons-round">edit</span> Edit
          </button>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden;">
          <div style="padding: 16px 24px; border-right: 1px solid #cbd5e1; border-bottom: 1px solid #cbd5e1;">
            <div style="font-size: 0.75rem; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Company</div>
            <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
              <span style="font-size: 0.85rem; font-weight: 600; color: #1e293b;">${m.company}</span>
              <span style="font-size: 0.65rem; color: #2563eb; font-weight: 700; background: #eff6ff; border-radius: 4px; padding: 2px 6px;">${m.companyType}</span>
            </div>
          </div>
          <div style="padding: 16px 24px; border-right: 1px solid #cbd5e1; border-bottom: 1px solid #cbd5e1;">
            <div style="font-size: 0.75rem; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Website</div>
            <div style="font-size: 0.85rem; font-weight: 600; color: #1e293b;">www.${m.company.toLowerCase().replace(/ /g, '')}.com</div>
          </div>
          <div style="padding: 16px 24px; border-bottom: 1px solid #cbd5e1;">
            <div style="font-size: 0.75rem; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Email</div>
            <div style="font-size: 0.85rem; font-weight: 600; color: #1e293b;">${m.email}</div>
          </div>
          <div style="padding: 16px 24px; border-right: 1px solid #cbd5e1;">
            <div style="font-size: 0.75rem; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">GST</div>
            <div style="font-size: 0.85rem; font-weight: 600; color: #1e293b;">${m.gst || '29ABCDE1234F1Z5'}</div>
          </div>
          <div style="padding: 16px 24px; border-right: 1px solid #cbd5e1;">
            <div style="font-size: 0.75rem; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Phone</div>
            <div style="font-size: 0.85rem; font-weight: 600; color: #1e293b;">${m.mobile}</div>
          </div>
          <div style="padding: 16px 24px;">
            <div style="font-size: 0.75rem; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Phone 2</div>
            <div style="font-size: 0.85rem; font-weight: 600; color: #1e293b;">${m.phone2 || '+91 —'}</div>
          </div>
        </div>


        <div style="padding: 16px 24px; border: 1px solid #cbd5e1; border-radius: 8px; background: #fff; margin-top: 16px;">
          <h3 style="margin: 0 0 12px 0; font-size: 0.78rem; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">About Business</h3>
          <p style="margin:0; color:#475569; font-size:0.88rem; line-height:1.6;">
            ${m.company} is a leading manufacturer of industrial-grade mining equipment and raw mineral processing units. Established in 2008, the company serves clients across India and Southeast Asia.
          </p>
        </div>
      </div>
    `;

  } else if (tab === 'contacts') {
    const contacts = m.contacts || [];
    return `
      <div class="content-card">
        <div class="profile-section-header" style="justify-content: space-between; align-items: center; margin-bottom: 24px;">
          <div style="display:flex; gap:16px; align-items:center;">
            <div class="profile-section-icon" style="width: 44px; height: 44px; flex-shrink: 0; border: 1px solid var(--border); background: var(--white); border-radius:8px; display:flex; align-items:center; justify-content:center;"><span class="material-icons-round">people</span></div>
            <div>
              <h3 class="profile-section-title" style="margin:0; font-size:1.15rem; font-weight:800; color:#1e293b;">Key Contacts</h3>
            </div>
          </div>
          <button class="btn-primary" onclick="openAddModal('contact', ${m.id})" style="padding: 10px 24px; border-radius:10px;">
            <span class="material-icons-round">add</span> Add
          </button>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px; margin-top: 24px;">
          ${contacts.map((c, ci) => {
      const status = c.status || 'Active';
      return `
              <div class="employee-card" style="height: 100%; gap: 16px;">
                <div style="position:absolute; top:16px; right:12px; z-index:10;">
                  <button class="action-btn" onclick="event.stopPropagation(); toggleDropdown('contact-${m.id}-${ci}', this)">
                    <span class="material-icons-round">more_vert</span>
                  </button>
                  <div class="dropdown-menu" id="dropdown-contact-${m.id}-${ci}" style="right:0;top:100%;margin-top:4px">
                    <button class="dropdown-item" onclick="event.stopPropagation(); openEditModal('contact', ${m.id}, ${ci}); closeAllDropdowns();"><span class="material-icons-round">edit</span> Edit</button>
                    <button class="dropdown-item delete" onclick="event.stopPropagation(); showToast('Contact removed', 'error'); closeAllDropdowns();"><span class="material-icons-round">delete</span> Delete</button>
                  </div>
                </div>

                <div style="display:flex; gap:16px; align-items:center;">
                  <img src="https://randomuser.me/api/portraits/${ci % 2 === 0 ? 'men' : 'women'}/${ci + 20}.jpg" class="employee-avatar" style="width:52px; height:52px; border-radius:6px; object-fit:cover; border:2px solid #fff; box-shadow:0 4px 10px rgba(0,0,0,0.05);">
                  <div>
                    <div style="font-weight:800; color:var(--text); font-size:1.05rem; letter-spacing:-0.2px;">${c.name}</div>
                    <div style="font-weight:700; color:var(--text-soft); font-size:0.8rem;">${c.role}</div>
                  </div>
                </div>

                <div style="display:flex; gap:8px;">
                  <span class="status-badge ${status.toLowerCase()}" style="min-width:auto; padding:4px 12px; font-size:0.75rem;">
                    <span></span> ${status}
                  </span>
                  ${c.isMain ? '<span class="bubble-tag blue" style="font-size:0.7rem; padding:4px 12px; font-weight:800; letter-spacing:0.3px;">MAIN CONTACT</span>' : ''}
                </div>

                <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; padding:14px; background:#f8fafc; border-radius:6px; border:1px solid #f1f5f9;">
                  <div>
                    <div style="font-size:0.65rem; font-weight:800; color:var(--text-soft); margin-bottom:4px;">Mobile</div>
                    <div style="font-size:0.88rem; font-weight:700; color:var(--text);">${c.phone}</div>
                  </div>
                  <div>
                    <div style="font-size:0.65rem; font-weight:800; color:var(--text-soft); margin-bottom:4px;">Email</div>
                    <div style="font-size:0.88rem; font-weight:700; color:var(--text); word-break:break-all;">${c.email}</div>
                  </div>
                </div>

                ${c.reason ? `
                  <div style="padding:14px; border:1px solid #f1f5f9; border-radius:6px; background:#fff; flex-grow: 1; min-height: 85px;">
                    <div style="font-size:0.65rem; font-weight:800; color:var(--text-soft); margin-bottom:4px;">Internal note</div>
                    <div style="font-size:0.82rem; font-weight:600; color:var(--text-mid); line-height:1.5;">${c.reason}</div>
                  </div>
                ` : `
                  <div style="padding:14px; border:1px solid transparent; flex-grow: 1; min-height: 85px;"></div>
                `}
              </div>
            `;
    }).join('') || '<p style="color:var(--text-soft)">No contacts added.</p>'}
        </div>
      </div>
    `;
  } else if (tab === 'contact-table') {
    const contacts = m.contacts || [];
    return `
      <div class="content-card">
        <div class="profile-section-header" style="justify-content: space-between; align-items: center; margin-bottom: 18px;">
          <div style="display:flex; gap:16px; align-items:center;">
            <div class="profile-section-icon" style="width: 44px; height: 44px; flex-shrink: 0; border: 1px solid var(--border); background: var(--white); border-radius:8px; display:flex; align-items:center; justify-content:center;"><span class="material-icons-round">table_rows</span></div>
            <div>
              <h3 class="profile-section-title" style="margin:0; font-size:1.15rem; font-weight:800; color:#1e293b;">Contact</h3>
            </div>
          </div>
          <button class="btn-primary" onclick="openAddModal('contact', ${m.id})" style="padding: 10px 24px; border-radius:10px;">
            <span class="material-icons-round">add</span> Add
          </button>
        </div>

        <div class="table-scroll-wrap profile-contact-table-wrap">
          <table class="data-table profile-contact-table">
            <colgroup>
              <col style="width: 25%;">
              <col style="width: 15%;">
              <col style="width: 20%;">
              <col style="width: 15%;">
              <col style="width: 15%;">
              <col style="width: 10%;">
            </colgroup>
            <thead>
              <tr>
                <th>NAME</th>
                <th>DESIGNATION</th>
                <th>EMAIL</th>
                <th>MOBILE</th>
                <th>STATUS</th>
                <th style="text-align:right;">ACTION</th>
              </tr>
            </thead>
            <tbody>
              ${contacts.length ? contacts.map((c, ci) => {
      const status = c.status || 'Active';
      const isInactive = status === 'Inactive';
      const isMainContact = ci === 0 || c.isMain;
      const portraitType = ci % 2 === 0 ? 'men' : 'women';
      const avatar = c.photo || `https://randomuser.me/api/portraits/${portraitType}/${ci + 20}.jpg`;

      return `
                  <tr>
                    <td>
                      <div class="cell-member profile-contact-person">
                        <img src="${avatar}" alt="${c.name}" class="member-avatar profile-contact-avatar">
                        <div class="profile-contact-name-stack">
                          <span class="member-name" style="font-size: 0.88rem; font-weight: 800; color: #1e293b;">${c.name}</span>
                          ${isMainContact ? `
                            <span class="main-contact-indicator">
                              <span class="material-icons-round">star</span>
                              Main Contact
                            </span>
                          ` : '<span class="profile-contact-muted">Secondary Contact</span>'}
                        </div>
                      </div>
                    </td>
                    <td style="padding: 16px 24px;">
                      <span style="color: var(--text-mid); font-weight: 600; font-size: 0.88rem;">${c.role || '-'}</span>
                    </td>
                    <td style="padding: 16px 24px;">
                      <span style="color: ${isInactive ? '#f97316' : 'var(--text-mid)'}; font-weight: 600; font-size: 0.88rem;">${c.email}</span>
                    </td>
                    <td style="padding: 16px 24px;">
                      <span style="color: ${isInactive ? '#f97316' : 'var(--text-mid)'}; font-weight: 600; font-size: 0.88rem;">${c.phone}</span>
                    </td>
                    <td style="padding: 16px 24px;">
                      <div class="status-badge" style="min-width: 85px; padding: 5px 12px; font-size: 0.8rem; background: ${status === 'Active' ? '#E8F5EC' : '#F3F4F6'}; color: ${status === 'Active' ? '#15803D' : '#4B5563'}; border: 1px solid ${status === 'Active' ? '#22C55E' : '#D1D5DB'}; border-radius: 6px; display: inline-flex; align-items: center; justify-content: center; gap: 6px; font-weight: 700;">
                        <span style="width: 6px; height: 6px; border-radius: 50%; background: ${status === 'Active' ? '#15803D' : '#4B5563'};"></span>
                        ${status}
                      </div>
                    </td>
                    <td style="text-align:right;">
                      <button class="action-btn" onclick="event.stopPropagation(); toggleDropdown('contact-table-${m.id}-${ci}', this)">
                        <span class="material-icons-round">more_vert</span>
                      </button>
                      <div class="dropdown-menu" id="dropdown-contact-table-${m.id}-${ci}">
                        <button class="dropdown-item" onclick="event.stopPropagation(); openEditModal('contact', ${m.id}, ${ci}); closeAllDropdowns();"><span class="material-icons-round">edit</span> Edit</button>
                        <button class="dropdown-item delete" onclick="event.stopPropagation(); showToast('Contact removed', 'error'); closeAllDropdowns();"><span class="material-icons-round">delete</span> Delete</button>
                      </div>
                    </td>
                  </tr>
                `;
    }).join('') : `
                <tr>
                  <td colspan="6" style="padding:64px; text-align:center; color:var(--text-soft); font-weight:700;">No contacts added.</td>
                </tr>
              `}
            </tbody>
          </table>
        </div>
      </div>
    `;
  } else if (tab === 'addresses') {
    const addresses = m.addresses || [];
    return `
      <div class="content-card">
        <div class="profile-section-header" style="justify-content: space-between; align-items: center; margin-bottom: 18px;">
          <div style="display:flex; gap:16px; align-items:center;">
            <div class="profile-section-icon" style="width: 44px; height: 44px; flex-shrink: 0; border: 1px solid var(--border); background: var(--white); border-radius:8px; display:flex; align-items:center; justify-content:center;"><span class="material-icons-round">location_on</span></div>
            <div>
              <h3 class="profile-section-title" style="margin:0; font-size:1.15rem; font-weight:800; color:#1e293b;">Registered Addresses</h3>
            </div>
          </div>
          <button class="btn-primary" onclick="openAddModal('address', ${m.id})" style="padding: 10px 24px; border-radius:10px;">
            <span class="material-icons-round">add</span> Add
          </button>
        </div>
        <div class="table-scroll-wrap profile-contact-table-wrap">
          <table class="data-table profile-contact-table profile-address-table">
            <colgroup>
              <col style="width: 20%;">
              <col style="width: 32%;">
              <col style="width: 15%;">
              <col style="width: 15%;">
              <col style="width: 18%;">
            </colgroup>
            <thead>
              <tr>
                <th>Title</th>
                <th>Address</th>
                <th>City</th>
                <th>Pincode</th>
                <th style="text-align:right;">Action</th>
              </tr>
            </thead>
            <tbody>
              ${addresses.length ? addresses.map((a, ai) => {
      const title = a.title || a.type || 'Address';
      const isDefault = a.isDefault || false;
      return `
                  <tr>
                    <td style="padding: 16px 24px;">
                      <div style="display:flex; flex-direction:column; gap:2px;">
                        <span style="color: #1e293b; font-weight: 800; font-size: 0.88rem;">${title}</span>
                        ${isDefault ? '<span class="main-contact-indicator">Default</span>' : '<span class="profile-contact-muted">Secondary</span>'}
                      </div>
                    </td>
                    <td style="padding: 16px 24px;">
                      <span style="color: var(--text-mid); font-weight: 600; font-size: 0.88rem;">
                        ${a.line1 || a.detail || '-'} ${a.line2 ? ', ' + a.line2 : ''}
                      </span>
                    </td>
                    <td style="padding: 16px 24px;">
                      <span style="color: var(--text-mid); font-weight: 600; font-size: 0.88rem;">${a.city || '-'}</span>
                    </td>
                    <td style="padding: 16px 24px;">
                      <span style="color: var(--text-mid); font-weight: 600; font-size: 0.88rem;">${a.pincode || '-'}</span>
                    </td>
                    <td style="text-align:right;">
                      <button class="action-btn" onclick="event.stopPropagation(); toggleDropdown('addr-${m.id}-${ai}', this)" style="background:transparent; border:none; color:#94a3b8; cursor:pointer;">
                        <span class="material-icons-round">more_vert</span>
                      </button>
                      <div class="dropdown-menu" id="dropdown-addr-${m.id}-${ai}">
                        <button class="dropdown-item" onclick="event.stopPropagation(); openEditModal('address', ${m.id}, ${ai}); closeAllDropdowns();"><span class="material-icons-round">edit</span> Edit</button>
                        <button class="dropdown-item delete" onclick="event.stopPropagation(); m.addresses.splice(${ai}, 1); showToast('Address removed', 'error'); closeAllDropdowns(); switchTab(${m.id}, 'addresses');"><span class="material-icons-round">delete</span> Delete</button>
                      </div>
                    </td>
                  </tr>
                `;
    }).join('') : `
                <tr>
                  <td colspan="6" style="padding:64px; text-align:center; color:var(--text-soft); font-weight:700;">No addresses found.</td>
                </tr>
              `}
            </tbody>
          </table>
        </div>
      </div>
    `;
  } else if (tab === 'plan') {
    const assignedPlans = m.assignedPlans || [
      { sr: 1, name: 'TK-Premium', date: '28-Apr-2026 to 28-Apr-2027', remark: '', invoice: 'ISPL/1002/2026-27', status: 'UnPaid' },
      { sr: 2, name: 'TK-Premium', date: '24-Apr-2026 to 24-Apr-2026', remark: '', invoice: 'ISPL/1001/2026-27', status: 'Paid' },
      { sr: 3, name: 'TK-Premium', date: '22-Apr-2026 to 22-May-2026', remark: '', invoice: '', status: 'UnPaid' },
      { sr: 4, name: 'TK-Lite', date: '16-Apr-2026 to 16-May-2026', remark: '', invoice: '', status: 'UnPaid' }
    ];

    return `
      <div class="content-card">
        <div class="profile-section-header" style="justify-content: space-between; align-items:center; border-bottom:1px solid var(--border); margin-bottom:0; padding-bottom:24px;">
          <div style="display:flex; align-items:center; gap:12px;">
            <div class="profile-section-icon" style="width: 44px; height: 44px; flex-shrink: 0; border: 1px solid var(--border); background: var(--white); border-radius:8px; display:flex; align-items:center; justify-content:center; color:#1e293b;">
              <span class="material-icons-round">assignment_ind</span>
            </div>
            <div>
              <h3 class="profile-section-title" style="margin:0;">Assign Plan</h3>
            </div>
          </div>
          <button class="btn-primary" onclick="showAssignPlanModal(${m.id})" style="background: var(--blue);">
            Assign Plan
          </button>
        </div>
        
        <div class="table-scroll-wrap" style="margin: 0 -24px -24px -24px;">
          <table class="data-table" style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr>
                <th style="padding: 16px 24px; text-align: left; border-bottom: 1px solid var(--border); background: #fff; color: #64748b; font-size: 0.78rem; font-weight: 800; text-transform: uppercase; letter-spacing:0.5px;">SR No.</th>
                <th style="padding: 16px 24px; text-align: left; border-bottom: 1px solid var(--border); background: #fff; color: #64748b; font-size: 0.78rem; font-weight: 800; text-transform: uppercase; letter-spacing:0.5px;">Plan Name</th>
                <th style="padding: 16px 24px; text-align: left; border-bottom: 1px solid var(--border); background: #fff; color: #64748b; font-size: 0.78rem; font-weight: 800; text-transform: uppercase; letter-spacing:0.5px;">Date</th>
                <th style="padding: 16px 24px; text-align: left; border-bottom: 1px solid var(--border); background: #fff; color: #64748b; font-size: 0.78rem; font-weight: 800; text-transform: uppercase; letter-spacing:0.5px;">Remark</th>
                <th style="padding: 16px 24px; text-align: left; border-bottom: 1px solid var(--border); background: #fff; color: #64748b; font-size: 0.78rem; font-weight: 800; text-transform: uppercase; letter-spacing:0.5px;">Invoice No.</th>
                <th style="padding: 16px 24px; text-align: left; border-bottom: 1px solid var(--border); background: #fff; color: #64748b; font-size: 0.78rem; font-weight: 800; text-transform: uppercase; letter-spacing:0.5px;">Status</th>
                <th style="padding: 16px 24px; text-align: right; border-bottom: 1px solid var(--border); background: #fff; color: #64748b; font-size: 0.78rem; font-weight: 800; text-transform: uppercase; letter-spacing:0.5px;"></th>
              </tr>
            </thead>
            <tbody>
              ${assignedPlans.map(p => `
                <tr style="transition: background 0.2s;" onmouseover="this.style.background='#f8fafc'" onmouseout="this.style.background='transparent'">
                  <td style="padding: 16px 24px; border-bottom: 1px solid var(--border); font-size: 0.88rem; font-weight: 600; color: #64748b;">${p.sr}</td>
                  <td style="padding: 16px 24px; border-bottom: 1px solid var(--border); font-size: 0.88rem; font-weight: 800; color: #1e293b; letter-spacing:-0.2px;">${p.name}</td>
                  <td style="padding: 16px 24px; border-bottom: 1px solid var(--border); font-size: 0.88rem; font-weight: 600; color: #94a3b8;">${p.date}</td>
                  <td style="padding: 16px 24px; border-bottom: 1px solid var(--border); font-size: 0.88rem; font-weight: 600; color: var(--text-soft);">${p.remark || '-'}</td>
                  <td style="padding: 16px 24px; border-bottom: 1px solid var(--border); font-size: 0.88rem; font-weight: 800; color: var(--blue);">${p.invoice || '-'}</td>
                  <td style="padding: 16px 24px; border-bottom: 1px solid var(--border);">
                    <span class="bubble-tag" style="background: ${p.status === 'Paid' ? '#dcfce7' : '#e0f2fe'}; color: ${p.status === 'Paid' ? '#16a34a' : '#1d4ed8'}; font-weight:800; font-size:0.75rem; padding:4px 12px;">${p.status}</span>
                  </td>
                  <td style="padding: 16px 24px; border-bottom: 1px solid var(--border); text-align: right; position: relative;">
                    <button class="action-btn" onclick="event.stopPropagation(); toggleDropdown('plan-${p.sr}', this)"><span class="material-icons-round">more_vert</span></button>
                    <div class="dropdown-menu" id="dropdown-plan-${p.sr}" style="right: 16px; top: 80%;">
                      <button class="dropdown-item" onclick="showToast('Editing plan...', 'success')"><span class="material-icons-round">edit</span> Edit Plan</button>
                      <button class="dropdown-item" onclick="showToast('Invoice sent', 'success')"><span class="material-icons-round">send</span> Send Invoice</button>
                      <button class="dropdown-item" onclick="showToast('Viewing details...', 'success')"><span class="material-icons-round">visibility</span> View</button>
                      <button class="dropdown-item" onclick="showToast('Downloading invoice...', 'success')"><span class="material-icons-round">download</span> Download</button>
                    </div>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;

  } else if (tab === 'email') {
    const emails = m.emails || [
      { id: 1, subject: 'Your plan is about to expire', sender: 'admin@example.com', date: '23 Apr 2026, 18:19', body: 'This is a reminder that your current plan is expiring soon. Please renew to continue accessing all features.\n\n— Team Admin' },
      { id: 2, subject: 'Welcome to the Platform', sender: 'admin@example.com', date: '24 Nov 2025, 09:00', body: 'Welcome! Your account is now active and ready to use.\n\n— Team Admin' },
      { id: 3, subject: 'Your monthly invoice is ready', sender: 'admin@example.com', date: '12 Jul 2026, 14:00', body: 'Invoice for Jul 2026 has been generated. Please review and make payment.\n\n— Team Admin' }
    ];

    return `
      <div class="content-card">
        <div class="profile-section-header" style="justify-content: space-between; align-items: center; margin-bottom: 18px;">
          <div style="display:flex; gap:16px; align-items:center;">
            <div class="profile-section-icon" style="width: 44px; height: 44px; flex-shrink: 0; border: 1px solid var(--border); background: var(--white); border-radius:8px; display:flex; align-items:center; justify-content:center;"><span class="material-icons-round">mail</span></div>
            <div>
              <h3 class="profile-section-title" style="margin:0; font-size:1.15rem; font-weight:800; color:#1e293b;">Communication History</h3>
            </div>
          </div>
          <button class="btn-primary" onclick="openComposeModal(${m.id})" style="padding: 10px 24px; border-radius:10px;">
            Compose
          </button>
        </div>

        <div class="table-scroll-wrap profile-contact-table-wrap">
          <table class="data-table profile-contact-table">
            <colgroup>
              <col style="width: 5%;">
              <col style="width: 15%;">
              <col style="width: 30%;">
              <col style="width: 25%;">
              <col style="width: 25%;">
            </colgroup>
            <thead>
              <tr>
                <th style="padding: 12px 8px !important; text-align: center !important;">#</th>
                <th style="padding: 12px 16px 12px 20px !important; text-align: left !important;">Date Sent</th>
                <th style="padding: 12px 16px !important; text-align: left !important;">Subject</th>
                <th style="padding: 12px 16px !important; text-align: left !important;">Sent To</th>
                <th style="padding: 12px 16px !important; text-align: left !important;">Sender</th>
              </tr>
            </thead>
            <tbody>
              ${emails.length ? emails.map((e, ei) => {
                const words = e.body.split(' ');
                const bodySnippet = words.length > 4 ? words.slice(0, 4).join(' ') + '...' : e.body;
                return `
                <tr class="email-row" style="cursor: pointer;" onclick="toggleEmailRow(${ei})">
                  <td style="padding: 12px 8px; text-align: center; vertical-align: top;">
                    <span style="font-size: 0.82rem; color: #94a3b8; font-weight: 800;">${ei + 1}</span>
                  </td>
                  <td style="padding: 12px 16px 12px 20px; vertical-align: top;">
                    <div style="font-size: 0.82rem; color: #475569; font-weight: 700;">${e.date.split(' ')[0]}</div>
                    <div style="font-size: 0.7rem; color: #94a3b8; font-weight: 600; margin-top:2px;">${e.date.split(' ').slice(1).join(' ')}</div>
                  </td>
                  <td style="padding: 12px 16px; vertical-align: top;">
                    <div style="display:flex; align-items:flex-start; gap:8px;">
                      <span class="material-icons-round" id="email-icon-${ei}" style="font-size:16px; color:#94a3b8; transition: transform 0.2s; margin-top: 2px;">chevron_right</span>
                      <div style="display:flex; flex-direction:column;">
                        <span class="member-name" style="font-size: 0.85rem;">${e.subject}</span>
                        <span style="font-size: 0.7rem; color: #64748b; font-weight: 600; margin-top: 1px;">(${bodySnippet})</span>
                      </div>
                    </div>
                  </td>
                  <td style="padding: 12px 16px; vertical-align: top;">
                    <div style="display: flex; flex-direction: column; align-items: flex-start;">
                      <span style="font-size: 0.82rem; color: #1e293b; font-weight: 700;">${m.member}</span>
                      <span style="font-size: 0.72rem; color: var(--blue); font-weight: 600;">${m.email}</span>
                    </div>
                  </td>
                  <td style="padding: 12px 16px; vertical-align: top;">
                    <div style="display: flex; flex-direction: column; align-items: flex-start;">
                      <span style="font-size: 0.82rem; color: #1e293b; font-weight: 700;">Jayesh Jain</span>
                      <span style="font-size: 0.72rem; color: #64748b; font-weight: 600;">${e.sender}</span>
                    </div>
                  </td>
                </tr>
                <tr id="email-body-${ei}" style="display: none; background: #fcfcfc;">
                  <td colspan="5" style="padding: 24px 32px; border-bottom: 1px solid #e2e8f0;">
                    <div style="background: #fff; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: inset 0 2px 4px rgba(0,0,0,0.01);">
                      <div style="font-size: 0.72rem; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 12px; display:flex; align-items:center; gap:6px;">
                        Full Message Content
                      </div>
                      <div style="font-size: 0.85rem; color: #475569; line-height: 1.6; white-space: pre-line; font-weight: 600;">${e.body}</div>
                    </div>
                  </td>
                </tr>
              `}).join('') : `
                <tr>
                  <td colspan="5" style="padding: 64px; text-align: center; color: var(--text-soft); font-weight: 700;">No communication history found.</td>
                </tr>
              `}
            </tbody>
          </table>
        </div>
      </div>
    `;


  } else if (tab === 'broadcasts') {
    const broadcasts = m.broadcasts || [
      { id: 'BRD-001', date: '02-05-2026 04:04:28 AM', broadcaster: 'Jayesh Jain', company: 'Speedtech Systems', broadcast: 'WTS Mobile Iphone | Qty : 5 Pcs | Price', sendTo: 'SendToAll', status: 'Live' },
      { id: 'BRD-002', date: '01-05-2026 06:34:49 PM', broadcaster: 'Jayesh Jain', company: 'Speedtech Systems', broadcast: 'WTS Laptop Laptop | Qty : 10 Pcs | Call', sendTo: 'SendToAll', status: 'Live' },
      { id: 'BRD-003', date: '30-04-2026 05:20:35 AM', broadcaster: 'Jayesh Jain', company: 'Speedtech Systems', broadcast: 'WTS Laptop Laptop | Qty : 15 Pcs | Call', sendTo: 'SendToAll', status: 'Live' }
    ];

    const totalCreations = broadcasts.length;

    let html = `

      <!-- History Table -->
      <div class="content-card">
        <div class="profile-section-header" style="justify-content: space-between; align-items:center; border-bottom:1px solid var(--border); margin-bottom:0; padding-bottom:24px;">
          <div style="display:flex; align-items:center; gap:12px;">
            <div class="profile-section-icon" style="width: 44px; height: 44px; flex-shrink: 0; border: 1px solid var(--border); background: var(--white); border-radius:8px; display:flex; align-items:center; justify-content:center; color:#1e293b;">
              <span class="material-icons-round">campaign</span>
            </div>
            <div>
              <h3 class="profile-section-title" style="margin:0;">Broadcast History</h3>
            </div>
          </div>
          <div style="display:flex; align-items:center; gap:16px;">
            <div style="display:flex; align-items:center; gap:10px; padding:8px 14px; background:#f8fafc; border:1px solid var(--border); border-radius:10px;">
              <span style="font-size: 0.82rem; font-weight: 800; color: var(--text-mid);">Approval Required</span>
              <input type="checkbox" style="width: 18px; height: 18px; accent-color:var(--blue); cursor:pointer;">
            </div>
            <button class="btn-primary" onclick="showToast('Initiating new broadcast...', 'success')">
              <span class="material-icons-round">add</span> Add
            </button>
          </div>
        </div>
        
        <div class="table-scroll-wrap" style="margin: 0 -24px -24px -24px;">
          <table class="data-table" style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr>
                <th style="padding: 12px 16px; text-align: left; border-bottom: 1px solid var(--border); background: #f8fafc; color: #64748b; font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing:0.5px;">Date & Time</th>
                <th style="padding: 12px 16px; text-align: left; border-bottom: 1px solid var(--border); background: #f8fafc; color: #64748b; font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing:0.5px;">Message Detail</th>
                <th style="padding: 12px 16px; text-align: left; border-bottom: 1px solid var(--border); background: #f8fafc; color: #64748b; font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing:0.5px;">Recipient</th>
                <th style="padding: 12px 16px; text-align: left; border-bottom: 1px solid var(--border); background: #f8fafc; color: #64748b; font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing:0.5px;">Status</th>
                <th style="padding: 12px 16px; text-align: right; border-bottom: 1px solid var(--border); background: #f8fafc; color: #64748b; font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing:0.5px;">Actions</th>
              </tr>
            </thead>
            <tbody>
              ${broadcasts.map(b => `
                <tr style="transition: background 0.2s;" onmouseover="this.style.background='#f8fafc'" onmouseout="this.style.background='transparent'">
                  <td style="padding: 12px 16px; border-bottom: 1px solid var(--border);">
                    <div style="font-size: 0.88rem; color: var(--text); font-weight: 800;">${b.date.split(' ')[0]}</div>
                    <div style="font-size: 0.75rem; color: var(--text-soft); font-weight: 700; margin-top:2px;">${b.date.split(' ').slice(1).join(' ')}</div>
                  </td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid var(--border); max-width:300px;">
                    <div style="font-size: 0.88rem; color: var(--text); font-weight: 700; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${b.broadcast}">${b.broadcast}</div>
                    <div style="font-size: 0.75rem; color: var(--text-soft); font-weight: 700; margin-top:2px;">Sent by ${b.broadcaster}</div>
                  </td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid var(--border);">
                    <span style="font-size: 0.82rem; font-weight: 800; color: var(--text-mid); background:#f1f5f9; padding:4px 10px; border-radius:6px;">${b.sendTo}</span>
                  </td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid var(--border);">
                    <div style="display:inline-flex; align-items:center; gap:6px; padding: 5px 12px; border-radius: 6px; 
                      background: ${b.status === 'Live' || b.status === 'Active' ? '#E8F5EC' : (b.status === 'Pending' ? '#FFF7ED' : (b.status === 'Incomplete' ? '#F3E8FF' : '#F3F4F6'))}; 
                      color: ${b.status === 'Live' || b.status === 'Active' ? '#15803D' : (b.status === 'Pending' ? '#A34E0C' : (b.status === 'Incomplete' ? '#6D28D9' : '#4B5563'))}; 
                      border: 1px solid ${b.status === 'Live' || b.status === 'Active' ? '#22C55E' : (b.status === 'Pending' ? '#FB923C' : (b.status === 'Incomplete' ? '#A855F7' : '#D1D5DB'))}; 
                      font-weight: 700;">
                      ${b.status === 'Pending' ? '' : `<span style="width:6px; height:6px; border-radius:50%; background: ${b.status === 'Live' || b.status === 'Active' ? '#15803D' : (b.status === 'Pending' ? '#A34E0C' : (b.status === 'Incomplete' ? '#1D4ED8' : '#4B5563'))};"></span>`}
                      <span style="font-size:0.8rem; text-transform:capitalize;">${b.status}</span>
                    </div>
                  </td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid var(--border); text-align:right;">
                    <button class="action-btn" onclick="showToast('Viewing broadcast detail...', 'success')" style="width:36px; height:36px; border-radius:10px; background:white; border:1px solid var(--border); color:var(--text-mid); display:inline-flex; align-items:center; justify-content:center; transition: all 0.2s;">
                      <span class="material-icons-round" style="font-size:18px;">visibility</span>
                    </button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
    return html;

  } else if (tab === 'history') {
    const loginHistory = m.loginHistory || [];
    return `
      <div class="content-card">
        <div class="profile-section-header" style="justify-content:space-between; align-items:center;">
          <div style="display:flex; gap:12px; align-items:center;">
            <div class="profile-section-icon" style="width:44px;height:44px;flex-shrink:0;border:1px solid var(--border);background:var(--white);"><span class="material-icons-round">login</span></div>
            <div>
              <h3 class="profile-section-title">Login History</h3>
            </div>
          </div>
        </div>
        <div class="table-scroll-wrap" style="margin: 16px -24px -24px -24px; border-top: 1px solid var(--border);">
          <table class="data-table" style="width:100%; border-collapse:collapse;">
            <thead>
              <tr>
                <th>Sr.No</th>
                <th>Date & Time</th>
                <th>IP Address</th>
                <th>Device ID</th>
                <th>GEO Information</th>
                <th>Mac Address</th>
              </tr>
            </thead>
            <tbody>
              ${loginHistory.length ? loginHistory.map((l, i) => `
                <tr>
                  <td><span style="color:var(--text-soft); font-weight:800;">${i + 1}</span></td>
                  <td>
                    <div style="font-weight:800; color:var(--text);">${l.datetime.split(' ')[0]}</div>
                    <div style="font-size:0.75rem; color:var(--text-soft);">${l.datetime.split(' ')[1]} ${l.datetime.split(' ')[2] || ''}</div>
                  </td>
                  <td style="font-weight:700;">${l.ip}</td>
                  <td>${l.deviceId}</td>
                  <td>${l.geo}</td>
                  <td style="color:var(--text-soft);">${l.mac}</td>
                </tr>
              `).join('') : `
                <tr>
                  <td colspan="6" style="padding:64px; text-align:center; color:var(--text-soft); font-weight:700;">No login history found</td>
                </tr>
              `}
            </tbody>
          </table>
        </div>
      </div>
    `;

  } else if (tab === 'stamp') {
    const stamps = m.stamps || [];
    const badgeConfig = [
      { key: 'identity', label: 'Identity', icon: 'badge', color: '#3b82f6', bg: '#dbeafe' },
      { key: 'email', label: 'Email', icon: 'mark_email_read', color: '#16a34a', bg: '#dcfce7' },
      { key: 'docs', label: 'Documents', icon: 'verified_user', color: '#7c3aed', bg: '#ede9fe' },
      { key: 'account', label: 'Account', icon: 'account_circle', color: '#d97706', bg: '#fef3c7' },
    ];

    return `
      <!-- History Table -->
      <div class="content-card">
        <div class="profile-section-header" style="border-bottom:1px solid var(--border); margin-bottom:0; padding-bottom:24px; justify-content:space-between; align-items:center;">
          <div style="display:flex; align-items:center; gap:12px;">
            <div class="profile-section-icon" style="background:#f1f5f9; color:var(--text-mid);"><span class="material-icons-round">history</span></div>
            <div>
              <h3 class="profile-section-title" style="margin:0;">Stamp History</h3>
            </div>
          </div>
          <button class="btn-primary" onclick="openStampModal(${m.id})">
            <span class="material-icons-round">add</span> Add
          </button>
        </div>
        <div class="table-scroll-wrap" style="margin: 0 -24px -24px -24px;">
          <table class="data-table" style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr>
                <th style="padding: 12px 16px; text-align: left; background: #f8fafc; color: #64748b; font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing:0.5px;">Applied Date</th>
                <th style="padding: 12px 16px; text-align: left; background: #f8fafc; color: #64748b; font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing:0.5px;">Badges Applied</th>
                <th style="padding: 12px 16px; text-align: left; background: #f8fafc; color: #64748b; font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing:0.5px;">Remark / Note</th>
                <th style="padding: 12px 16px; text-align: left; background: #f8fafc; color: #64748b; font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing:0.5px;">Verified By</th>
              </tr>
            </thead>
            <tbody>
              ${stamps.length ? stamps.map((s, idx) => `
                <tr style="transition: background 0.2s;" onmouseover="this.style.background='#f8fafc'" onmouseout="this.style.background='transparent'">
                  <td style="padding: 12px 16px; border-bottom: 1px solid var(--border);">
                    <div style="font-size: 0.88rem; color: var(--text); font-weight: 800;">${s.date}</div>
                  </td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid var(--border);">
                    <div style="display:flex; align-items:center; gap:6px;">
                      ${(s.badges || []).map(bk => {
      const cfg = badgeConfig.find(b => b.key === bk);
      return cfg ? `<div title="${cfg.label}" style="width:28px; height:28px; border-radius:50%; background:${cfg.color}; display:grid; place-items:center; border:2px solid #fff; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin-right:-8px;"><span class="material-icons-round" style="font-size:14px; color:#fff;">${cfg.icon}</span></div>` : '';
    }).join('')}
                    </div>
                  </td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid var(--border); max-width:250px;">
                    <div style="font-size: 0.85rem; color: var(--text-mid); font-weight: 600; line-height:1.5;">${s.remark || 'N/A'}</div>
                  </td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid var(--border);">
                    <div style="display:flex; align-items:center; justify-content:space-between;">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <span style="font-size:0.85rem; font-weight:700; color:var(--text);">${s.admin || 'Admin'}</span>
                      </div>
                      <button class="header-icon-btn delete-stamp-btn" onclick="deleteStamp(${m.id}, ${idx})" style="color:var(--red); opacity:0; transition:opacity 0.2s;">
                        <span class="material-icons-round" style="font-size:18px;">delete_outline</span>
                      </button>
                    </div>
                  </td>
                </tr>
              `).join('') : `
                <tr>
                  <td colspan="4" style="padding: 60px; text-align: center;">
                    <div style="color:var(--text-soft); font-weight:700; font-size:0.95rem;">No verification history found.</div>
                  </td>
                </tr>
              `}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
  return '';
}


function closeProfile(pushState = true) {
  profileView.classList.add('hidden');
  profileView.innerHTML = '';
  directoryView.classList.remove('hidden');
  document.querySelector('.top-bar-search').style.display = '';

  if (pushState) {
    const url = new URL(window.location);
    url.searchParams.delete('p');
    url.searchParams.delete('t');
    window.history.pushState({}, '', url);
  }
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
    content.className = 'modal-content modal-wide';

    html = `
      <div class="modal-header">
        <div style="display:flex; align-items:center; gap:12px;">
          <div style="width:40px; height:40px; border-radius:10px; background:var(--blue-light); color:var(--blue); display:grid; place-items:center;">
            <span class="material-icons-round">edit</span>
          </div>
          <h3>Edit Contact</h3>
        </div>
        <button class="modal-close" onclick="closeModal()"><span class="material-icons-round">close</span></button>
      </div>
      <div class="modal-body" style="padding: 32px;">
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:32px;">
          
          <!-- Column 1: Info -->
          <div style="display:flex; flex-direction:column; gap:20px;">
            <div style="display:flex; align-items:center; gap:16px; margin-bottom:12px;">
              <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(c.name)}&background=e2e8f0&color=64748b" style="width:64px; height:64px; border-radius:50%; flex-shrink:0;">
              <div style="display:flex; flex-direction:column; gap:6px;">
                <button class="btn-outline" style="padding: 6px 14px; font-size: 0.85rem; background:#f1f5f9; border-color:#cbd5e1; color:var(--text-mid); font-weight:700; border-radius: 4px;">Choose File</button>
                <span style="color:var(--text-soft); font-size:0.75rem; font-weight:600;">No file chosen</span>
              </div>
            </div>

            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:16px;">
              <div style="display:flex; flex-direction:column; gap:8px;">
                <label class="modal-label" style="margin:0; font-size:0.72rem; text-transform:uppercase; letter-spacing:0.5px; color:var(--text-soft);">First Name</label>
                <input class="modal-input" type="text" value="${firstName}" id="edit-c-fname" placeholder="First name" style="background:#f8fafc;">
              </div>
              <div style="display:flex; flex-direction:column; gap:8px;">
                <label class="modal-label" style="margin:0; font-size:0.72rem; text-transform:uppercase; letter-spacing:0.5px; color:var(--text-soft);">Last Name</label>
                <input class="modal-input" type="text" value="${lastName}" id="edit-c-lname" placeholder="Last name" style="background:#f8fafc;">
              </div>
            </div>

            <div style="display:flex; flex-direction:column; gap:8px;">
              <label class="modal-label" style="margin:0; font-size:0.72rem; text-transform:uppercase; letter-spacing:0.5px; color:var(--text-soft);">Designation</label>
              <select class="modal-input" id="edit-c-role" style="background:#f8fafc;">
                <option value="" disabled ${!['CEO', 'Proprietor', 'Director', 'Manager', 'Partner'].includes(c.role) ? 'selected' : ''}>Choose Designation</option>
                <option value="CEO" ${c.role === 'CEO' ? 'selected' : ''}>CEO</option>
                <option value="Proprietor" ${c.role === 'Proprietor' ? 'selected' : ''}>Proprietor</option>
                <option value="Director" ${c.role === 'Director' ? 'selected' : ''}>Director</option>
                <option value="Manager" ${c.role === 'Manager' ? 'selected' : ''}>Manager</option>
                <option value="Partner" ${c.role === 'Partner' ? 'selected' : ''}>Partner</option>
                ${!['CEO', 'Proprietor', 'Director', 'Manager', 'Partner'].includes(c.role) && c.role ? `<option value="${c.role}" selected>${c.role}</option>` : ''}
              </select>
            </div>

            <div style="display:flex; flex-direction:column; gap:8px;">
              <label class="modal-label" style="margin:0; font-size:0.72rem; text-transform:uppercase; letter-spacing:0.5px; color:var(--text-soft);">Mobile</label>
              <input class="modal-input" type="text" value="${c.phone}" id="edit-c-phone" placeholder="+91 —" style="background:#f8fafc;">
            </div>

            <div style="display:flex; flex-direction:column; gap:8px;">
              <label class="modal-label" style="margin:0; font-size:0.72rem; text-transform:uppercase; letter-spacing:0.5px; color:var(--text-soft);">Email Address</label>
              <input class="modal-input" type="email" value="${c.email}" id="edit-c-email" placeholder="email@example.com" style="background:#f8fafc;">
            </div>
          </div>

          <!-- Column 2: Status & Settings -->
          <div style="display:flex; flex-direction:column; gap:24px;">
            <div style="padding:20px; background:#f8fafc; border:1px solid var(--border); border-radius:16px;">
              <label class="modal-label" style="display:block; margin-bottom:16px; font-size:0.72rem; text-transform:uppercase; letter-spacing:0.5px; color:var(--text-soft);">Status & Permissions</label>
              
              <div style="display:flex; align-items:center; gap:12px; margin-bottom:20px; padding-bottom:16px; border-bottom:1px solid var(--border);">
                <input type="checkbox" id="edit-c-main" style="width: 20px; height: 20px; accent-color: var(--blue); cursor: pointer;">
                <label for="edit-c-main" style="margin:0; font-size:0.85rem; font-weight:700; color:var(--text); cursor:pointer;">Mark as Main Contact</label>
              </div>

              <div style="display:flex; flex-direction:column; gap:12px;">
                <div style="font-size:0.85rem; font-weight:700; color:var(--text);">Account Status</div>
                <div style="display:flex; gap: 20px;">
                  <label style="display:flex; align-items:center; gap:8px; font-size:0.85rem; font-weight:700; cursor:pointer;">
                    <input type="radio" name="edit-status" value="Active" ${status === 'Active' ? 'checked' : ''} style="accent-color: var(--blue);" onchange="document.getElementById('edit-inactive-options').style.display='none';"> Active
                  </label>
                  <label style="display:flex; align-items:center; gap:8px; font-size:0.85rem; font-weight:700; cursor:pointer;">
                    <input type="radio" name="edit-status" value="Inactive" ${status === 'Inactive' ? 'checked' : ''} style="accent-color: var(--blue);" onchange="document.getElementById('edit-inactive-options').style.display='block';"> Inactive
                  </label>
                </div>
                <div id="edit-inactive-options" style="display: ${status === 'Inactive' ? 'block' : 'none'}; margin-top: 4px;">
                  <select class="modal-input" style="background:#fff;">
                    <option value="" disabled selected>Select Inactive Reason</option>
                    <option value="Block">Block</option>
                    <option value="AllowedForNewRegistration">Allowed For New Registration</option>
                  </select>
                </div>
              </div>
            </div>

            <div style="display:flex; flex-direction:column; gap:8px; flex:1;">
              <label class="modal-label" style="margin:0; font-size:0.72rem; text-transform:uppercase; letter-spacing:0.5px; color:var(--text-soft);">Reason / Internal Note</label>
              <textarea class="modal-input" id="edit-c-reason" style="flex:1; background:#f8fafc; resize:none; min-height:120px;" placeholder="Add internal notes about this contact..."></textarea>
            </div>
          </div>

        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-outline" onclick="closeModal()">Cancel</button>
        <button class="btn-primary" onclick="saveContact(${memberId}, ${index})">Save</button>
      </div>
    `;

  } else if (type === 'plan') {
    content.className = 'modal-content modal-wide';
    const planName = m.plan ? capitalize(m.plan) : 'Starter';
    const planRate = m.planRate || '999';
    const planValidity = m.planValidity || 'monthly';
    const planBroadcast = m.planBroadcast || '5';
    const planEmail = m.planEmail || 'notify@example.com';
    const flags = m.planFlags || { sendall: true, state: true, city: true, contacts: false, phone: true, address: false };

    html = `
      <div class="modal-header" style="border-bottom: 1px solid var(--border); padding: 24px 32px; background: #fff;">
        <div style="display:flex; align-items:center; gap:12px;">
          <div style="width:40px; height:40px; border-radius:10px; background:var(--blue-light); color:var(--blue); display:grid; place-items:center;">
            <span class="material-icons-round">assignment</span>
          </div>
          <div>
            <h3 style="margin:0; font-size:1.1rem; font-weight:900; color:var(--text);">Manage Member Plan</h3>
          </div>
        </div>
        <button class="modal-close" onclick="closeModal()"><span class="material-icons-round">close</span></button>
      </div>

      <div class="modal-body" style="padding: 32px;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px;">
          
          <!-- LEFT COLUMN: Plan Info -->
          <div style="display:flex; flex-direction:column; gap:20px;">
            <div style="font-size: 0.7rem; font-weight: 900; text-transform: uppercase; letter-spacing: 0.8px; color: var(--text-soft); padding-bottom: 12px; border-bottom: 1px solid #f1f5f9; margin-bottom: 4px;">Plan Information</div>
            
            <div style="display:flex; flex-direction:column; gap:8px;">
              <label style="font-size:0.7rem; font-weight:800; text-transform:uppercase; letter-spacing:0.6px; color:var(--text-soft);">Select Plan</label>
              <select class="modal-input" style="background:#f8fafc; border:1.5px solid #e2e8f0; border-radius:9px; padding:10px 14px; font-weight:700;">
                <option value="starter" ${m.plan === 'starter' ? 'selected' : ''}>Starter Plan</option>
                <option value="business" ${m.plan === 'business' ? 'selected' : ''}>Business Plan</option>
                <option value="enterprise" ${m.plan === 'enterprise' ? 'selected' : ''}>Enterprise Plan</option>
              </select>
            </div>

            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:16px;">
              <div style="display:flex; flex-direction:column; gap:8px;">
                <label style="font-size:0.7rem; font-weight:800; text-transform:uppercase; letter-spacing:0.6px; color:var(--text-soft);">Plan Rate (₹)</label>
                <input class="modal-input" type="number" value="${planRate}" style="background:#f8fafc; border:1.5px solid #e2e8f0; border-radius:9px; padding:10px 14px; font-weight:700;">
              </div>
              <div style="display:flex; flex-direction:column; gap:8px;">
                <label style="font-size:0.7rem; font-weight:800; text-transform:uppercase; letter-spacing:0.6px; color:var(--text-soft);">Validity</label>
                <select class="modal-input" style="background:#f8fafc; border:1.5px solid #e2e8f0; border-radius:9px; padding:10px 14px; font-weight:700;">
                  <option value="monthly" ${planValidity === 'monthly' ? 'selected' : ''}>Monthly</option>
                  <option value="quarterly" ${planValidity === 'quarterly' ? 'selected' : ''}>Quarterly</option>
                  <option value="halfyearly" ${planValidity === 'halfyearly' ? 'selected' : ''}>Half Yearly</option>
                  <option value="yearly" ${planValidity === 'yearly' ? 'selected' : ''}>Yearly</option>
                </select>
              </div>
            </div>

            <div style="display:flex; flex-direction:column; gap:8px;">
              <label style="font-size:0.7rem; font-weight:800; text-transform:uppercase; letter-spacing:0.6px; color:var(--text-soft);">Daily Broadcast Limit</label>
              <input class="modal-input" type="number" value="${planBroadcast}" style="background:#f8fafc; border:1.5px solid #e2e8f0; border-radius:9px; padding:10px 14px; font-weight:700;">
            </div>

            <div style="display:flex; flex-direction:column; gap:8px;">
              <label style="font-size:0.7rem; font-weight:800; text-transform:uppercase; letter-spacing:0.6px; color:var(--text-soft);">Notification Email</label>
              <input class="modal-input" type="email" value="${planEmail}" style="background:#f8fafc; border:1.5px solid #e2e8f0; border-radius:9px; padding:10px 14px; font-weight:700;">
            </div>
          </div>

          <!-- RIGHT COLUMN: Features -->
          <div style="display:flex; flex-direction:column; gap:20px;">
            <div style="font-size: 0.7rem; font-weight: 900; text-transform: uppercase; letter-spacing: 0.8px; color: var(--text-soft); padding-bottom: 12px; border-bottom: 1px solid #f1f5f9; margin-bottom: 4px;">Features & Permissions</div>
            
            <div style="display:flex; flex-direction:column; gap:4px;">
              ${[
        { key: 'sendall', label: 'Send to All', desc: 'Broadcast to all users' },
        { key: 'state', label: 'State Targeting', desc: 'Filter by state' },
        { key: 'city', label: 'City Targeting', desc: 'Filter by city' },
        { key: 'contacts', label: 'Add Contacts', desc: 'Allow adding contacts in profile' },
        { key: 'phone', label: 'Phone Visibility', desc: 'User can toggle phone visibility' },
        { key: 'address', label: 'Address Button', desc: 'User can add more addresses' }
      ].map(f => `
                <div style="display:flex; align-items:center; justify-content:space-between; padding:10px 0; border-bottom: 1px solid #f8fafc;">
                  <div style="display:flex; flex-direction:column; gap:2px;">
                    <div style="font-size:0.88rem; font-weight:700; color:var(--text);">${f.label}</div>
                    <div style="font-size:0.75rem; font-weight:600; color:var(--text-soft); max-width:200px;">${f.desc}</div>
                  </div>
                  <label style="position:relative; width:40px; height:22px; flex-shrink:0;">
                    <input type="checkbox" ${flags[f.key] ? 'checked' : ''} style="opacity:0; width:0; height:0;" onchange="this.nextElementSibling.style.background = this.checked ? 'var(--blue)' : '#e2e8f0'; this.nextElementSibling.querySelector('span').style.transform = this.checked ? 'translateX(18px)' : 'translateX(0)';">
                    <span style="position:absolute; inset:0; background:${flags[f.key] ? 'var(--blue)' : '#e2e8f0'}; border-radius:99px; cursor:pointer; transition:background 0.2s;">
                      <span style="position:absolute; width:16px; height:16px; border-radius:50%; background:#fff; top:3px; left:3px; transition:transform 0.2s; box-shadow:0 1px 3px rgba(0,0,0,0.15); transform:${flags[f.key] ? 'translateX(18px)' : 'translateX(0)'};"></span>
                    </span>
                  </label>
                </div>
              `).join('')}
            </div>
          </div>

        </div>
      </div>

      <div class="modal-footer">
        <button class="btn-outline" onclick="closeModal()">Cancel</button>
        <button class="btn-primary" onclick="showToast('Plan Assigned Successfully!', 'success'); closeModal();">
          <span class="material-icons-round">check_circle</span> Assign Plan
        </button>
      </div>
    `;
  } else if (type === 'address') {
    const a = m.addresses[index];
    const title = a.title || a.type || 'Company Address';
    const isDefault = a.isDefault || false;
    content.className = 'modal-content';
    content.style.maxWidth = '580px';
    html = `
      <div class="modal-header">
        <h3>Update Location</h3>
        <button class="modal-close" onclick="closeModal()"><span class="material-icons-round">close</span></button>
      </div>
      <div class="modal-body" style="padding: 40px 32px;">
        <div class="modal-form-row">
          <label>Address Title</label>
          <select class="modal-input" id="edit-addr-title">
            <option value="Company Address" ${title === 'Company Address' ? 'selected' : ''}>Company Address</option>
            <option value="Work" ${title === 'Work' ? 'selected' : ''}>Work</option>
            <option value="Factory" ${title === 'Factory' ? 'selected' : ''}>Factory</option>
            <option value="Warehouse" ${title === 'Warehouse' ? 'selected' : ''}>Warehouse</option>
          </select>
        </div>
        <div class="modal-form-row">
          <label>Address Line 1</label>
          <input class="modal-input" type="text" value="${a.line1 || a.detail || ''}" id="edit-addr-line1" placeholder="Building, Street">
        </div>
        <div class="modal-form-row">
          <label>Address Line 2</label>
          <input class="modal-input" type="text" value="${a.line2 || ''}" id="edit-addr-line2" placeholder="Enter Address Line">
        </div>
        <div class="modal-form-row">
          <label>City</label>
          <input class="modal-input" type="text" value="${a.city || m.location}" id="edit-addr-city" placeholder="Ahmedabad Gujarat">
        </div>
        <div class="modal-form-row">
          <label>Pincode</label>
          <input class="modal-input" type="text" value="${a.pincode || ''}" id="edit-addr-pincode" placeholder="125558">
        </div>
        <div class="modal-form-row" style="margin-top: 24px;">
          <label>Set as default</label>
          <input type="checkbox" id="edit-addr-default" ${isDefault ? 'checked' : ''}>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-outline" style="background:#f1f5f9; border:none; color:var(--text-mid);" onclick="m.addresses.splice(${index}, 1); closeModal(); showToast('Address removed', 'error'); switchTab(${memberId}, 'addresses');">Delete</button>
        <button class="btn-outline" style="background:#f1f5f9; border:none; color:var(--text-mid);" onclick="closeModal()">Close</button>
        <button class="btn-primary" style="padding: 10px 32px;" onclick="saveAddress(${memberId}, ${index})">Save</button>
      </div>
    `;
  } else if (type === 'company') {
    content.className = 'modal-content modal-wide';
    html = `
      <div class="modal-header">
        <div style="display:flex; align-items:center; gap:12px;">
          <div style="width:40px; height:40px; border-radius:10px; background:var(--blue-light); color:var(--blue); display:grid; place-items:center;">
            <span class="material-icons-round">business</span>
          </div>
          <h3>Company Information</h3>
        </div>
        <button class="modal-close" onclick="closeModal()"><span class="material-icons-round">close</span></button>
      </div>
      <div class="modal-body" style="padding: 32px;">
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:32px;">
          
          <!-- Column 1 -->
          <div style="display:flex; flex-direction:column; gap:20px;">
            <div style="display:flex; align-items:center; gap:16px; margin-bottom:12px;">
              <div style="width:64px; height:64px; background:#475569; border-radius:50%; color:#fff; display:grid; place-items:center; flex-shrink:0;">
                <span class="material-icons-round" style="font-size:32px;">person</span>
              </div>
              <div style="display:flex; flex-direction:column; gap:6px;">
                <button class="btn-outline" style="padding: 6px 14px; font-size: 0.85rem; background:#f1f5f9; border-color:#cbd5e1; color:var(--text-mid); font-weight:700; border-radius: 4px;">Choose File</button>
                <span style="color:var(--text-soft); font-size:0.75rem; font-weight:600;">No file chosen</span>
              </div>
            </div>

            <div style="display:flex; flex-direction:column; gap:8px;">
              <label class="modal-label" style="margin:0; font-size:0.72rem; text-transform:uppercase; letter-spacing:0.5px; color:var(--text-soft);">GST / VAT</label>
              <input class="modal-input" type="text" value="${m.gst || '29ABCDE1234F1Z5'}" id="edit-co-gst" style="background:#f8fafc;">
            </div>

            <div style="display:flex; flex-direction:column; gap:8px;">
              <label class="modal-label" style="margin:0; font-size:0.72rem; text-transform:uppercase; letter-spacing:0.5px; color:var(--text-soft);">Company Name</label>
              <input class="modal-input" type="text" value="${m.company}" id="edit-co-name" style="background:#f8fafc;">
            </div>

            <div style="display:flex; flex-direction:column; gap:8px;">
              <label class="modal-label" style="margin:0; font-size:0.72rem; text-transform:uppercase; letter-spacing:0.5px; color:var(--text-soft);">Email Address</label>
              <input class="modal-input" type="email" value="${m.email}" id="edit-co-email" style="background:#f8fafc;">
            </div>

            <div style="display:flex; flex-direction:column; gap:8px;">
              <label class="modal-label" style="margin:0; font-size:0.72rem; text-transform:uppercase; letter-spacing:0.5px; color:var(--text-soft);">Business Type</label>
              <select class="modal-input" id="edit-co-type" style="background:#f8fafc;">
                <option value="Wholesaler" ${m.companyType === 'Wholesaler' ? 'selected' : ''}>Wholesaler</option>
                <option value="Retailer" ${m.companyType === 'Retailer' ? 'selected' : ''}>Retailer</option>
                <option value="Manufacturer" ${m.companyType === 'Manufacturer' ? 'selected' : ''}>Manufacturer</option>
                ${!['Wholesaler', 'Retailer', 'Manufacturer'].includes(m.companyType) ? `<option value="${m.companyType}" selected>${m.companyType}</option>` : ''}
              </select>
            </div>
          </div>

          <!-- Column 2 -->
          <div style="display:flex; flex-direction:column; gap:20px;">
            <div style="display:flex; flex-direction:column; gap:8px;">
              <label class="modal-label" style="margin:0; font-size:0.72rem; text-transform:uppercase; letter-spacing:0.5px; color:var(--text-soft);">Website</label>
              <input class="modal-input" type="text" value="www.${m.company.toLowerCase().replace(/ /g, '')}.com" id="edit-co-website" style="background:#f8fafc;">
            </div>

            <div style="display:flex; flex-direction:column; gap:8px;">
              <label class="modal-label" style="margin:0; font-size:0.72rem; text-transform:uppercase; letter-spacing:0.5px; color:var(--text-soft);">Phone 1</label>
              <input class="modal-input" type="text" value="${m.mobile}" id="edit-co-phone1" style="background:#f8fafc;">
            </div>

            <div style="display:flex; flex-direction:column; gap:8px;">
              <label class="modal-label" style="margin:0; font-size:0.72rem; text-transform:uppercase; letter-spacing:0.5px; color:var(--text-soft);">Phone 2</label>
              <input class="modal-input" type="text" value="${m.phone2 || ''}" id="edit-co-phone2" style="background:#f8fafc;">
            </div>

            <div style="display:flex; flex-direction:column; gap:8px;">
              <label class="modal-label" style="margin:0; font-size:0.72rem; text-transform:uppercase; letter-spacing:0.5px; color:var(--text-soft);">About Us</label>
              <textarea class="modal-input" id="edit-co-about" rows="4" style="background:#f8fafc; resize:none;">${m.about || ''}</textarea>
            </div>
          </div>

        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-outline" onclick="closeModal()">Cancel</button>
        <button class="btn-primary" onclick="saveCompany(${memberId})">Save</button>
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
    content.className = 'modal-content modal-wide';
    html = `
      <div class="modal-header">
        <div style="display:flex; align-items:center; gap:12px;">
          <div style="width:40px; height:40px; border-radius:10px; background:var(--blue-light); color:var(--blue); display:grid; place-items:center;">
            <span class="material-icons-round">person_add</span>
          </div>
          <h3>Add New Contact</h3>
        </div>
        <button class="modal-close" onclick="closeModal()"><span class="material-icons-round">close</span></button>
      </div>
      <div class="modal-body" style="padding: 32px;">
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:32px;">
          
          <!-- Column 1: Info -->
          <div style="display:flex; flex-direction:column; gap:20px;">
            <div style="display:flex; align-items:center; gap:16px; margin-bottom:12px;">
              <div style="width:64px; height:64px; background:#475569; border-radius:50%; color:#fff; display:grid; place-items:center; flex-shrink:0;">
                <span class="material-icons-round" style="font-size:36px;">person</span>
              </div>
              <div style="display:flex; flex-direction:column; gap:6px;">
                <button class="btn-outline" style="padding: 6px 14px; font-size: 0.85rem; background:#f1f5f9; border-color:#cbd5e1; color:var(--text-mid); font-weight:700; border-radius: 4px;">Choose File</button>
                <span style="color:var(--text-soft); font-size:0.75rem; font-weight:600;">No file chosen</span>
              </div>
            </div>

            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:16px;">
              <div style="display:flex; flex-direction:column; gap:8px;">
                <label class="modal-label" style="margin:0; font-size:0.72rem; text-transform:uppercase; letter-spacing:0.5px; color:var(--text-soft);">First Name</label>
                <input class="modal-input" type="text" id="add-c-fname" placeholder="First name" style="background:#f8fafc;">
              </div>
              <div style="display:flex; flex-direction:column; gap:8px;">
                <label class="modal-label" style="margin:0; font-size:0.72rem; text-transform:uppercase; letter-spacing:0.5px; color:var(--text-soft);">Last Name</label>
                <input class="modal-input" type="text" id="add-c-lname" placeholder="Last name" style="background:#f8fafc;">
              </div>
            </div>

            <div style="display:flex; flex-direction:column; gap:8px;">
              <label class="modal-label" style="margin:0; font-size:0.72rem; text-transform:uppercase; letter-spacing:0.5px; color:var(--text-soft);">Designation</label>
              <select class="modal-input" id="add-c-role" style="background:#f8fafc;">
                <option value="" disabled selected>Choose Designation</option>
                <option value="CEO">CEO</option>
                <option value="Proprietor">Proprietor</option>
                <option value="Director">Director</option>
                <option value="Manager">Manager</option>
                <option value="Partner">Partner</option>
              </select>
            </div>

            <div style="display:flex; flex-direction:column; gap:8px;">
              <label class="modal-label" style="margin:0; font-size:0.72rem; text-transform:uppercase; letter-spacing:0.5px; color:var(--text-soft);">Mobile</label>
              <input class="modal-input" type="text" id="add-c-phone" placeholder="+91 —" style="background:#f8fafc;">
            </div>

            <div style="display:flex; flex-direction:column; gap:8px;">
              <label class="modal-label" style="margin:0; font-size:0.72rem; text-transform:uppercase; letter-spacing:0.5px; color:var(--text-soft);">Email Address</label>
              <input class="modal-input" type="email" id="add-c-email" placeholder="email@example.com" style="background:#f8fafc;">
            </div>
          </div>

          <!-- Column 2: Status & Settings -->
          <div style="display:flex; flex-direction:column; gap:24px;">
            <div style="padding:20px; background:#f8fafc; border:1px solid var(--border); border-radius:16px;">
              <label class="modal-label" style="display:block; margin-bottom:16px; font-size:0.72rem; text-transform:uppercase; letter-spacing:0.5px; color:var(--text-soft);">Status & Permissions</label>
              
              <div style="display:flex; align-items:center; gap:12px; margin-bottom:20px; padding-bottom:16px; border-bottom:1px solid var(--border);">
                <input type="checkbox" id="add-c-main" style="width: 20px; height: 20px; accent-color: var(--blue); cursor: pointer;">
                <label for="add-c-main" style="margin:0; font-size:0.85rem; font-weight:700; color:var(--text); cursor:pointer;">Mark as Main Contact</label>
              </div>

              <div style="display:flex; flex-direction:column; gap:12px;">
                <div style="font-size:0.85rem; font-weight:700; color:var(--text);">Account Status</div>
                <div style="display:flex; gap: 20px;">
                  <label style="display:flex; align-items:center; gap:8px; font-size:0.85rem; font-weight:700; cursor:pointer;">
                    <input type="radio" name="add-status" value="Active" checked style="accent-color: var(--blue);" onchange="document.getElementById('add-inactive-options').style.display='none';"> Active
                  </label>
                  <label style="display:flex; align-items:center; gap:8px; font-size:0.85rem; font-weight:700; cursor:pointer;">
                    <input type="radio" name="add-status" value="Inactive" style="accent-color: var(--blue);" onchange="document.getElementById('add-inactive-options').style.display='block';"> Inactive
                  </label>
                </div>
                <div id="add-inactive-options" style="display: none; margin-top: 4px;">
                  <select class="modal-input" style="background:#fff;">
                    <option value="" disabled selected>Select Inactive Reason</option>
                    <option value="Block">Block</option>
                    <option value="AllowedForNewRegistration">Allowed For New Registration</option>
                  </select>
                </div>
              </div>
            </div>

            <div style="display:flex; flex-direction:column; gap:8px; flex:1;">
              <label class="modal-label" style="margin:0; font-size:0.72rem; text-transform:uppercase; letter-spacing:0.5px; color:var(--text-soft);">Reason / Internal Note</label>
              <textarea class="modal-input" id="add-c-reason" style="flex:1; background:#f8fafc; resize:none; min-height:120px;" placeholder="Add internal notes about this contact..."></textarea>
            </div>
          </div>

        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-outline" onclick="closeModal()">Cancel</button>
        <button class="btn-primary" onclick="saveNewContact(${memberId})">Save</button>
      </div>
    `;
  } else if (type === 'address') {
    content.className = 'modal-content';
    content.style.maxWidth = '580px';
    html = `
      <div class="modal-header">
        <h3>Add New Location</h3>
        <button class="modal-close" onclick="closeModal()"><span class="material-icons-round">close</span></button>
      </div>
      <div class="modal-body" style="padding: 40px 32px;">
        <div class="modal-form-row">
          <label>Address Title</label>
          <select class="modal-input" id="add-addr-title">
            <option value="" disabled selected>Choose Address Title</option>
            <option value="Company Address">Company Address</option>
            <option value="Work">Work</option>
            <option value="Factory">Factory</option>
            <option value="Warehouse">Warehouse</option>
          </select>
        </div>
        <div class="modal-form-row">
          <label>Address Line 1</label>
          <input class="modal-input" type="text" id="add-addr-line1" placeholder="Building, Street">
        </div>
        <div class="modal-form-row">
          <label>Address Line 2</label>
          <input class="modal-input" type="text" id="add-addr-line2" placeholder="Enter Address Line">
        </div>
        <div class="modal-form-row">
          <label>City</label>
          <input class="modal-input" type="text" id="add-addr-city" placeholder="Ahmedabad Gujarat">
        </div>
        <div class="modal-form-row">
          <label>Pincode</label>
          <input class="modal-input" type="text" id="add-addr-pincode" placeholder="125558">
        </div>
        <div class="modal-form-row" style="margin-top: 24px;">
          <label>Set as default</label>
          <input type="checkbox" id="add-addr-default">
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-outline" style="background:#f1f5f9; border:none; color:var(--text-mid);" onclick="closeModal()">Close</button>
        <button class="btn-primary" style="padding: 10px 32px;" onclick="saveNewAddress(${memberId})">Save</button>
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
    status: document.querySelector('input[name="add-status"]:checked')?.value || 'Active',
    reason: document.getElementById('add-c-reason')?.value || '',
    photo: `https://ui-avatars.com/api/?name=${encodeURIComponent(fName)}&background=eef3ff&color=4880ff`
  });
  closeModal();
  showToast('Contact added successfully', 'success');
  switchTab(memberId, 'contact-table');
}

function saveNewAddress(memberId) {
  const m = members.find(x => x.id === memberId);
  const title = document.getElementById('add-addr-title').value;
  const line1 = document.getElementById('add-addr-line1').value.trim();
  const line2 = document.getElementById('add-addr-line2').value.trim();
  const pincode = document.getElementById('add-addr-pincode').value.trim();
  const city = document.getElementById('add-addr-city').value.trim();
  const isDefault = document.getElementById('add-addr-default').checked;

  if (!title || (!line1 && !city)) { showToast('Please fill required fields', 'error'); return; }

  if (!m.addresses) m.addresses = [];

  if (isDefault) m.addresses.forEach(a => a.isDefault = false);

  m.addresses.push({ title, line1, line2, pincode, city, isDefault });

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
  m.contacts[index].status = document.querySelector('input[name="edit-status"]:checked')?.value || 'Active';
  m.contacts[index].reason = document.getElementById('edit-c-reason')?.value || '';
  closeModal();
  showToast('Contact updated successfully.', 'success');
  openProfile(memberId, 'contact-table');
}

function saveAddress(memberId, index) {
  const m = members.find(x => x.id === memberId);
  const title = document.getElementById('edit-addr-title').value;
  const line1 = document.getElementById('edit-addr-line1').value.trim();
  const line2 = document.getElementById('edit-addr-line2').value.trim();
  const pincode = document.getElementById('edit-addr-pincode').value.trim();
  const city = document.getElementById('edit-addr-city').value.trim();
  const isDefault = document.getElementById('edit-addr-default').checked;

  if (isDefault) m.addresses.forEach((a, i) => { if (i !== index) a.isDefault = false; });

  m.addresses[index] = { ...m.addresses[index], title, line1, line2, pincode, city, isDefault };

  closeModal();
  showToast('Address updated successfully.', 'success');
  switchTab(memberId, 'addresses');
}

function saveCompany(memberId) {
  const m = members.find(x => x.id === memberId);
  m.company = document.getElementById('edit-co-name').value;
  m.companyType = document.getElementById('edit-co-type').value;
  m.email = document.getElementById('edit-co-email').value;
  m.gst = document.getElementById('edit-co-gst').value;
  m.mobile = document.getElementById('edit-co-phone1').value;
  m.phone2 = document.getElementById('edit-co-phone2').value;
  m.about = document.getElementById('edit-co-about').value;
  closeModal();
  showToast('Company profile updated.', 'success');
  switchTab(memberId, 'company');
}

// Close modal on overlay click
document.getElementById('modal-container').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeModal();
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

// ===== ASSIGN PLAN =====
function assignPlan(memberId, plan) {
  const m = members.find(x => x.id === memberId);
  if (!m) return;
  m.plan = plan.toLowerCase();
  showToast(`Plan changed to ${plan}`, 'success');
  switchTab(memberId, 'plan');
}

// ===== STAMP MODAL =====
function openStampModal(memberId) {
  const m = members.find(x => x.id === memberId);
  if (!m) return;

  const modalContainer = document.getElementById('modal-container');
  const modalContent = document.getElementById('modal-content');

  const badgeConfig = [
    { key: 'identity', label: 'Identity Verified', icon: 'badge', color: '#3b82f6', bg: '#dbeafe', desc: 'User identity has been verified' },
    { key: 'email', label: 'Email Verified', icon: 'mark_email_read', color: '#16a34a', bg: '#dcfce7', desc: 'Email address has been verified' },
    { key: 'docs', label: 'Documents Verified', icon: 'verified_user', color: '#7c3aed', bg: '#ede9fe', desc: 'Official documents have been verified' },
    { key: 'account', label: 'Account Verified', icon: 'account_circle', color: '#d97706', bg: '#fef3c7', desc: 'Account has been verified' },
  ];

  modalContent.className = 'modal-content modal-stamp';
  modalContent.style.maxWidth = '1000px';
  modalContent.innerHTML = `
    <div class="modal-header" style="background:#fff; border-bottom:1px solid var(--border); padding:20px 24px;">
      <div style="display:flex; align-items:center; gap:12px;">
        <div style="width:36px; height:36px; border-radius:10px; background:var(--blue-light); color:var(--blue); display:grid; place-items:center;">
          <span class="material-icons-round" style="font-size:20px;">verified</span>
        </div>
        <h3 style="margin:0; font-size:1.25rem; font-weight:900;">Add Verification Stamp</h3>
      </div>
      <button class="modal-close" onclick="closeModal()"><span class="material-icons-round">close</span></button>
    </div>
    <div class="modal-body" style="padding:32px; background:#fff;">
      
      <div style="display:grid; grid-template-columns: 1.1fr 1fr; gap:40px;">
        <!-- Left Column: Date & Badges -->
        <div style="display:flex; flex-direction:column; gap:24px;">
          <div>
            <label class="modal-label" style="display:block; margin-bottom:8px; color:var(--text); font-weight:800; font-size:0.8rem;">DATE <span style="color:var(--red);">*</span></label>
            <div style="position:relative;">
              <span class="material-icons-round" style="position:absolute; left:14px; top:50%; transform:translateY(-50%); color:var(--text-soft); font-size:20px;">calendar_today</span>
              <input type="date" id="stamp-date" class="modal-input" style="padding-left:44px; background:#f8fafc;" value="${new Date().toISOString().split('T')[0]}">
            </div>
          </div>

          <div>
            <label class="modal-label" style="display:block; margin-bottom:12px; color:var(--text); font-weight:800; font-size:0.8rem;">VERIFICATION BADGES <span style="color:var(--red);">*</span></label>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
              ${badgeConfig.map(b => `
                <label class="badge-select-item" style="display:flex; align-items:center; gap:10px; padding:8px 12px; border:1px solid var(--border); border-radius:12px; cursor:pointer; transition:all 0.2s;">
                  <input type="checkbox" id="badge-${b.key}" value="${b.key}" style="width:18px; height:18px; accent-color:var(--blue); cursor:pointer;">
                  <div style="width:30px; height:30px; border-radius:50%; background:${b.bg}; color:${b.color}; display:grid; place-items:center; flex-shrink:0;">
                    <span class="material-icons-round" style="font-size:16px;">${b.icon}</span>
                  </div>
                  <div>
                    <div style="font-size:0.8rem; font-weight:800; color:var(--text); line-height:1.2;">${b.label}</div>
                    <div style="font-size:0.7rem; color:var(--text-soft); font-weight:600; line-height:1.2;">${b.desc}</div>
                  </div>
                </label>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Right Column: Remark -->
        <div style="display:flex; flex-direction:column; gap:24px;">
          <div style="flex:1; display:flex; flex-direction:column;">
            <label class="modal-label" style="display:block; margin-bottom:8px; color:var(--text); font-weight:800; font-size:0.8rem;">REMARK <span style="color:var(--text-soft); font-weight:600; text-transform:none;">(Optional)</span></label>
            <div style="position:relative; flex:1;">
              <span class="material-icons-round" style="position:absolute; left:14px; top:14px; color:var(--text-soft); font-size:20px;">chat_bubble_outline</span>
              <textarea id="stamp-remark" class="modal-input" style="width:100%; height:100%; min-height:200px; padding:12px 16px 12px 44px; background:#f8fafc; resize:none;" placeholder="Enter remark (optional)"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn-outline" onclick="closeModal()">Close</button>
      <button class="btn-primary" onclick="saveStamp(${m.id})">
        <span class="material-icons-round">save</span> Save Stamp
      </button>
    </div>
  `;
  modalContainer.classList.remove('hidden');
}

function saveStamp(memberId) {
  const m = members.find(x => x.id === memberId);
  if (!m) return;

  const dateRaw = document.getElementById('stamp-date').value;
  const remark = document.getElementById('stamp-remark').value.trim();
  const badges = ['identity', 'email', 'docs', 'account'].filter(k => {
    const el = document.getElementById('badge-' + k);
    return el && el.checked;
  });

  if (!dateRaw) { showToast('Please select a verification date', 'error'); return; }
  if (badges.length < 3) { showToast('Please select at least 3 verification badges', 'error'); return; }

  const d = new Date(dateRaw);
  const dateFormatted = d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

  if (!m.stamps) m.stamps = [];
  m.stamps.unshift({
    date: dateFormatted,
    badges,
    remark: remark || 'Verified and badges assigned.',
    admin: 'Admin User'
  });

  closeModal();
  showToast('Verification stamp applied successfully!', 'success');
  switchTab(memberId, 'stamp');
}

// ===== EMAIL / COMMUNICATION FUNCTIONS =====
function toggleEmailRow(index) {
  const body = document.getElementById(`email-body-${index}`);
  const icon = document.getElementById(`email-icon-${index}`);
  if (!body || !icon) return;

  const isHidden = body.style.display === 'none';
  body.style.display = isHidden ? 'table-row' : 'none';
  icon.style.transform = isHidden ? 'rotate(90deg)' : 'rotate(0deg)';
}

function openComposeModal(memberId) {
  const modal = document.getElementById('modal-container');
  const content = document.getElementById('modal-content');
  const m = members.find(x => x.id === memberId);
  if (!m) return;

  content.className = 'modal-content modal-wide';
  content.style.maxWidth = '900px';

  content.innerHTML = `
    <div class="modal-header">
      <div style="display:flex; align-items:center; gap:12px;">
        <div style="width:40px; height:40px; border-radius:10px; background:var(--blue-light); color:var(--blue); display:grid; place-items:center;">
          <span class="material-icons-round">send</span>
        </div>
        <h3>Compose Email to ${m.member}</h3>
      </div>
      <button class="modal-close" onclick="closeModal()"><span class="material-icons-round">close</span></button>
    </div>
    <div class="modal-body" style="padding: 0; display: flex !important; flex-direction: row !important; min-height: 500px;">
      <!-- Left Sidebar: Templates -->
      <div style="width: 280px; border-right: 1px solid var(--border); background: #f8fafc; display: flex; flex-direction: column; flex-shrink: 0;">
        <div style="padding: 16px 20px; border-bottom: 1px solid var(--border);">
          <div style="font-size: 0.72rem; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Templates</div>
        </div>
        <div style="flex: 1; overflow-y: auto; padding: 12px;">
          <div class="template-item" onclick="loadEmailTemplate('welcome', ${m.id})" style="padding: 12px; border-radius: 8px; cursor: pointer; transition: all 0.2s; margin-bottom: 8px; background: #fff; border: 1px solid var(--border);">
            <div style="font-weight: 700; color: var(--text); font-size: 0.85rem; margin-bottom: 4px;">Welcome Email</div>
            <div style="font-size: 0.75rem; color: var(--text-soft); font-weight: 500; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">Official welcome message for new members.</div>
          </div>
          <div class="template-item" onclick="loadEmailTemplate('expiry', ${m.id})" style="padding: 12px; border-radius: 8px; cursor: pointer; transition: all 0.2s; margin-bottom: 8px; background: #fff; border: 1px solid var(--border);">
            <div style="font-weight: 700; color: var(--text); font-size: 0.85rem; margin-bottom: 4px;">Plan Expiry</div>
            <div style="font-size: 0.75rem; color: var(--text-soft); font-weight: 500; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">Friendly reminder about upcoming plan expiration.</div>
          </div>
          <div class="template-item" onclick="loadEmailTemplate('invoice', ${m.id})" style="padding: 12px; border-radius: 8px; cursor: pointer; transition: all 0.2s; margin-bottom: 8px; background: #fff; border: 1px solid var(--border);">
            <div style="font-weight: 700; color: var(--text); font-size: 0.85rem; margin-bottom: 4px;">Monthly Invoice</div>
            <div style="font-size: 0.75rem; color: var(--text-soft); font-weight: 500; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">Notification about newly generated invoice.</div>
          </div>
        </div>
      </div>

      <!-- Right Side: Compose Form -->
      <div style="flex: 1; padding: 32px; display: flex; flex-direction: column; gap: 20px; background: #fff;">
        <div style="display:flex; flex-direction:column; gap:8px;">
          <label class="modal-label" style="margin:0; font-size:0.72rem; text-transform:uppercase; letter-spacing:0.5px; color:var(--text-soft);">Recipient</label>
          <div style="padding: 12px 16px; background: #f1f5f9; border-radius: 8px; font-weight: 700; color: var(--text-mid); display: flex; align-items: center; gap: 8px; border: 1px solid var(--border);">
            <span class="material-icons-round" style="font-size: 16px;">mail_outline</span> ${m.email}
          </div>
        </div>
        <div style="display:flex; flex-direction:column; gap:8px;">
          <label class="modal-label" style="margin:0; font-size:0.72rem; text-transform:uppercase; letter-spacing:0.5px; color:var(--text-soft);">Subject</label>
          <input class="modal-input" type="text" id="compose-subject" placeholder="Enter email subject" style="background:#f8fafc;">
        </div>
        <div style="display:flex; flex-direction:column; gap:8px; flex: 1;">
          <label class="modal-label" style="margin:0; font-size:0.72rem; text-transform:uppercase; letter-spacing:0.5px; color:var(--text-soft);">Message</label>
          <textarea class="modal-input" id="compose-message" style="flex: 1; background:#f8fafc; resize:none; min-height: 180px;" placeholder="Type your message here..."></textarea>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn-primary" onclick="sendProfileEmail(${m.id})" style="padding: 10px 32px;">
        Send
      </button>
    </div>
  `;
  modal.classList.remove('hidden');
}

function loadEmailTemplate(temp, memberId) {
  const m = members.find(x => x.id === memberId);
  const subj = document.getElementById('compose-subject');
  const msg = document.getElementById('compose-message');
  if (!subj || !msg || !m) return;

  const templates = {
    welcome: {
      subject: 'Welcome to the Platform',
      body: `Dear ${m.member},\n\nWe are excited to welcome you to our platform! Your account for ${m.company} has been successfully activated.\n\nYou can now access all your dashboard features. If you have any questions, feel free to reply to this email.\n\nBest regards,\nAdmin Team`
    },
    expiry: {
      subject: 'Action Required: Your plan is about to expire',
      body: `Hi ${m.member},\n\nThis is a friendly reminder that your current plan for ${m.company} is set to expire in 7 days.\n\nTo ensure uninterrupted service, please renew your plan from the dashboard.\n\nBest regards,\nAdmin Team`
    },
    invoice: {
      subject: 'Your monthly invoice is ready',
      body: `Hello ${m.member},\n\nYour monthly invoice for ${m.company} has been generated and is now available for review in your account.\n\nThank you for your business!\n\nBest regards,\nAdmin Team`
    }
  };

  subj.value = templates[temp].subject;
  msg.value = templates[temp].body;
  showToast('Template loaded', 'success');
}

function sendProfileEmail(memberId) {
  const subj = document.getElementById('compose-subject').value.trim();
  const msg = document.getElementById('compose-message').value.trim();
  if (!subj || !msg) { showToast('Subject and message are required', 'error'); return; }

  const m = members.find(x => x.id === memberId);
  if (!m.emails) m.emails = [];

  const now = new Date();
  const d = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const formattedDate = `${d}-${month}-${year} ${hh} : ${mm}`;

  m.emails.unshift({
    id: Date.now(),
    subject: subj,
    sender: 'admin@example.com',
    date: formattedDate,
    body: msg
  });

  closeModal();
  showToast('Email sent successfully', 'success');
  switchTab(memberId, 'email');
}

// ===== DELETE STAMP =====
function deleteStamp(memberId, index) {
  if (confirm('Are you sure you want to remove this verification stamp?')) {
    const m = members.find(x => x.id === memberId);
    if (m && m.stamps) {
      m.stamps.splice(index, 1);
      showToast('Verification stamp removed', 'info');
      switchTab(memberId, 'stamp');
    }
  }
}

// ===== INITIALIZATION =====
function initApp() {
  // Render the members table immediately
  renderTable();

  // Sidebar collapse/expand toggle
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.querySelector('.main-content');
  const toggleIcon = document.getElementById('sidebar-toggle-icon');

  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
      if (mainContent) mainContent.classList.toggle('expanded');
      if (toggleIcon) {
        toggleIcon.textContent = sidebar.classList.contains('collapsed') ? 'chevron_right' : 'chevron_left';
      }
    });
  }

  // Search input listener
  const searchInput = document.getElementById('top-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      currentPage = 1;
      renderTable();
    });
  }

  // Handle URL on load
  handleNavigation();
  window.addEventListener('popstate', handleNavigation);
}

function handleNavigation() {
  const params = new URLSearchParams(window.location.search);
  const profileId = params.get('p');
  const tab = params.get('t') || 'company';

  if (profileId !== null) {
    openProfile(parseInt(profileId), tab, false);
  } else {
    closeProfile(false);
  }
}

// Robust initialization — works whether DOM is already ready or still loading
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

function showAssignPlanModal(memberId) {
  const modal = document.getElementById('modal-container');
  const content = document.getElementById('modal-content');
  if (!modal || !content) return;

  content.className = 'modal-content';
  content.style.maxWidth = '600px';

  content.innerHTML = `
        <div class="modal-header" style="border-bottom: 1px solid var(--border); padding-bottom: 16px;">
            <h3 style="font-size: 1.25rem; font-weight: 800; color: #1e293b;">Plan Activation</h3>
            <button class="modal-close" onclick="closeModal()"><span class="material-icons-round">close</span></button>
        </div>
        <div class="modal-body" style="padding: 40px 32px;">
            <div style="display:flex; flex-direction:column; gap:28px;">
                
                <!-- Active Row -->
                <div style="display:flex; align-items:center; gap:24px;">
                    <label style="display:flex; align-items:center; gap:10px; font-weight:700; width:100px; cursor:pointer; color: #1e293b; font-size: 0.95rem;">
                        <input type="radio" name="plan-status" value="Active" checked style="width: 18px; height: 18px; accent-color:var(--blue);"> Active
                    </label>
                    <div style="flex:1; position:relative;">
                        <select class="modal-input" style="width: 100%; background: #f8fafc; border: 1px solid var(--border); padding: 12px 16px; border-radius: 10px; font-weight: 600; color: #334155; appearance: none;">
                            <option>Choose any one</option>
                            <option>TK-Premium</option>
                            <option>TK-Lite</option>
                        </select>
                        <span class="material-icons-round" style="position:absolute; right:12px; top:50%; transform:translateY(-50%); pointer-events:none; color:#64748b; font-size:20px;">expand_more</span>
                    </div>
                </div>

                <!-- Inactive Row -->
                <div style="display:flex; align-items:center; gap:24px;">
                    <label style="display:flex; align-items:center; gap:10px; font-weight:700; width:100px; cursor:pointer; color: #1e293b; font-size: 0.95rem;">
                        <input type="radio" name="plan-status" value="Inactive" style="width: 18px; height: 18px; accent-color:var(--blue);"> Inactive
                    </label>
                    <div style="flex:1; position:relative;">
                        <select class="modal-input" style="width: 100%; background: #f8fafc; border: 1px solid var(--border); padding: 12px 16px; border-radius: 10px; font-weight: 600; color: #334155; appearance: none;">
                            <option>Choose Inactive Status</option>
                            <option>Cancel (Failed to pay)</option>
                            <option>Inactive</option>
                        </select>
                        <span class="material-icons-round" style="position:absolute; right:12px; top:50%; transform:translateY(-50%); pointer-events:none; color:#64748b; font-size:20px;">expand_more</span>
                    </div>
                </div>

                <!-- Dates Row -->
                <div style="display:flex; align-items:center; gap:24px;">
                    <div style="width:100px; font-weight:700; color: #1e293b; font-size: 0.95rem;">Start Date</div>
                    <div style="display:flex; align-items:center; gap:16px; flex:1;">
                        <input type="text" class="modal-input" placeholder="05/07/2026" style="flex:1; background: #f8fafc; border: 1px solid var(--border); padding: 12px 16px; border-radius: 10px; font-weight: 600;">
                        <div style="font-weight:700; color: #1e293b; font-size: 0.95rem;">End Date</div>
                        <input type="text" class="modal-input" placeholder="05/07/2027" style="flex:1; background: #f8fafc; border: 1px solid var(--border); padding: 12px 16px; border-radius: 10px; font-weight: 600;">
                    </div>
                </div>

                <!-- Remark -->
                <div style="display:flex; gap:24px;">
                    <div style="width:100px; font-weight:700; color: #1e293b; font-size: 0.95rem; padding-top: 12px;">Remark</div>
                    <textarea class="modal-input" rows="4" style="flex:1; background: #f8fafc; border: 1px solid var(--border); padding: 12px 16px; border-radius: 12px; font-weight: 600; resize: none;" placeholder="Enter internal notes..."></textarea>
                </div>
            </div>
        </div>
        <div class="modal-footer" style="border-top: 1px solid var(--border); padding: 24px 32px; display:flex; justify-content: flex-end; gap: 12px;">
            <button class="btn-outline" onclick="closeModal()" style="background: #cbd5e1; border: none; color: #475569; font-weight: 800; padding: 10px 28px;">Close</button>
            <button class="btn-primary" onclick="closeModal(); showToast('Plan updated successfully', 'success')" style="padding: 10px 32px; font-weight: 800; background: var(--blue);">Save</button>
        </div>
    `;

  modal.classList.remove('hidden');
}