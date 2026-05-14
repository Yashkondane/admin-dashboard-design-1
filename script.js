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

var currentFilter = 'active';
let searchQuery = '';
let sortCol = 'date';
let sortDir = 'desc';
let currentPage = 1;
let rowsPerPage = 10;

// Getters for DOM elements to avoid null errors on different pages
const getTbody = () => document.getElementById('members-tbody');
const getDirectoryView = () => document.getElementById('directory-view');
const getProfileView = () => document.getElementById('profile-view');
const getPaginationControls = () => document.getElementById('pagination-controls');

const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span class="material-icons-round">${type === 'success' ? 'check_circle' : 'error'}</span> ${message}`;
  container.appendChild(toast);
  setTimeout(() => { toast.classList.add('fade-out'); setTimeout(() => toast.remove(), 300); }, 3000);
}

// ===== TIMELINE FILTERING & SORTING =====
let phSortCol = 'sr';
let phSortDir = 'desc';

window.filterTimeline = function (memberId, filterType) {
  const m = members.find(x => x.id === memberId);
  if (!m) return;

  const activityView = document.getElementById('tl-activity-view');
  const tableBody = document.getElementById('tl-table-body');
  if (!activityView && !tableBody) return;

  // Filter the plans
  let filtered = filterType === 'all' 
    ? [...m.assignedPlans] 
    : m.assignedPlans.filter(p => {
        if (filterType === 'assign') return p.type === 'assign';
        if (filterType === 'extend') return p.type === 'extend';
        if (filterType === 'upgrade') return p.type === 'upgrade';
        if (filterType === 'suspend') return p.type === 'suspend' || p.name === 'Suspended';
        if (filterType === 'reactivate') return p.type === 'reactivate' || p.name === 'Reactivated';
        return true;
      });

  // Apply sorting for table view
  filtered.sort((a, b) => {
    let valA = a[phSortCol] || '';
    let valB = b[phSortCol] || '';
    if (phSortCol === 'date') {
       valA = new Date(valA.split(' to ')[0] || 0);
       valB = new Date(valB.split(' to ')[0] || 0);
    }
    if (valA < valB) return phSortDir === 'asc' ? -1 : 1;
    if (valA > valB) return phSortDir === 'asc' ? 1 : -1;
    return 0;
  });

  // Re-render activity feed
  if (activityView) {
    activityView.innerHTML = filtered.length > 0 
      ? filtered.map(p => renderTimelineEvent(p)).join('')
      : `<div style="padding: 48px; text-align: center; color: var(--text-soft); font-weight: 700;">No ${filterType === 'all' ? '' : filterType} events found.</div>`;
  }

  // Re-render table body
  if (tableBody) {
    tableBody.innerHTML = filtered.length > 0
      ? filtered.map(p => `
          <tr style="transition: all 0.1s;" onmouseover="this.style.background='#fcfcfc'" onmouseout="this.style.background='transparent'">
            <td style="font-weight: 700; color: #64748b;">#${p.sr}</td>
            <td style="font-weight: 800; color: #1e293b;">
              <div>${p.name}</div>
              <div style="font-size: 0.72rem; color: #94a3b8; font-weight: 600;">${p.type.charAt(0).toUpperCase() + p.type.slice(1)}</div>
            </td>
            <td style="font-weight: 600; color: #64748b;">
              <div style="font-weight: 700; color: #475569;">${p.date}</div>
              <div style="font-size: 0.7rem; color: #94a3b8;">${p.timestamp || ''}</div>
            </td>
            <td style="font-weight: 700; color: var(--blue); font-family: monospace;">${p.invoice || '—'}</td>
            <td style="text-align: center;">
              <span class="timeline-event-status" style="color: ${p.status === 'Paid' ? '#16a34a' : (p.status === 'N/A' ? '#94a3b8' : '#f59e0b')}; background: ${p.status === 'Paid' ? '#f0fdf4' : (p.status === 'N/A' ? '#f8fafc' : '#fffbeb')}; border: 1px solid ${p.status === 'Paid' ? '#bbf7d0' : (p.status === 'N/A' ? '#e2e8f0' : '#fef3c7')}; padding: 4px 10px; border-radius: 4px;">
                ${p.status}
              </span>
            </td>
          </tr>
        `).join('')
      : `<tr><td colspan="5" style="padding: 48px; text-align: center; color: var(--text-soft); font-weight: 700;">No ${filterType === 'all' ? '' : filterType} records found.</td></tr>`;
  }
};

window.sortPlanHistory = function(memberId, col) {
  if (phSortCol === col) {
    phSortDir = phSortDir === 'asc' ? 'desc' : 'asc';
  } else {
    phSortCol = col;
    phSortDir = 'asc';
  }
  
  const filterType = document.getElementById('tl-activity-filter')?.value || 'all';
  filterTimeline(memberId, filterType);
};

window.renderTimelineEvent = function (p) {
  let actIcon = 'history';
  let actColor = '#64748b';
  let actBg = '#f1f5f9';
  if (p.type === 'assign') { actIcon = 'add_task'; actColor = '#3b82f6'; actBg = '#eff6ff'; }
  else if (p.type === 'extend') { actIcon = 'more_time'; actColor = '#2563eb'; actBg = '#eff6ff'; }
  else if (p.type === 'upgrade') { actIcon = 'upgrade'; actColor = '#7c3aed'; actBg = '#f3e8ff'; }
  else if (p.type === 'suspend' || p.name === 'Suspended') { actIcon = 'block'; actColor = '#ef4444'; actBg = '#fef2f2'; }
  else if (p.type === 'reactivate' || p.name === 'Reactivated') { actIcon = 'verified_user'; actColor = '#16a34a'; actBg = '#f0fdf4'; }

  const statusBg = p.status === 'Paid' ? '#f0fdf4' : (p.status === 'N/A' ? '#f8fafc' : '#fffbeb');
  const statusColor = p.status === 'Paid' ? '#16a34a' : (p.status === 'N/A' ? '#94a3b8' : '#f59e0b');
  const statusBorder = p.status === 'Paid' ? '#bbf7d0' : (p.status === 'N/A' ? '#e2e8f0' : '#fef3c7');
  
  return `
    <div class="plan-timeline-event" style="padding-left:0; padding-right:0;">
      <div style="width:32px; height:32px; border-radius:8px; display:flex; align-items:center; justify-content:center; background:${actBg}; color:${actColor}; flex-shrink:0;">
        <span class="material-icons-round" style="font-size:16px;">${actIcon}</span>
      </div>
      <div class="timeline-event-content">
        <div class="timeline-event-main">
          <span class="timeline-event-name">${p.name}</span>
          ${p.type === 'extend' ? '<span class="timeline-event-badge" style="background:#eff6ff;color:#2563eb;">Extension</span>' : ''}
          ${p.type === 'upgrade' ? '<span class="timeline-event-badge" style="background:#f3e8ff;color:#7c3aed;">Upgrade</span>' : ''}
          ${p.name === 'Suspended' ? '<span class="timeline-event-badge" style="background:#fef2f2;color:#dc2626;">Suspension</span>' : ''}
          ${p.name === 'Reactivated' ? '<span class="timeline-event-badge" style="background:#f0fdf4;color:#16a34a;">Restored</span>' : ''}
        </div>
        <div class="timeline-event-detail">${p.remark || p.date}</div>
        <div class="timeline-event-meta">
          <span><span class="material-icons-round">schedule</span> ${p.timestamp || p.date.split(' to ')[0]}</span>
          <span><span class="material-icons-round">person</span> ${p.admin || 'Admin'}</span>
        </div>
      </div>
      <div class="timeline-event-right">
        <span class="timeline-event-status" style="color: ${statusColor}; background: ${statusBg}; border: 1px solid ${statusBorder};">${p.status}</span>
        ${p.invoice ? '<span class="timeline-event-invoice">' + p.invoice + '</span>' : ''}
      </div>
    </div>
  `;
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

function updateCounts() {
  const counts = {
    all: members.length,
    active: members.filter(m => m.status === 'active').length,
    pending: members.filter(m => m.status === 'pending').length,
    suspended: members.filter(m => m.status === 'suspended').length,
    incomplete: members.filter(m => m.status === 'incomplete').length
  };

  if (document.getElementById('badge-all')) document.getElementById('badge-all').textContent = counts.all;
  if (document.getElementById('badge-active')) document.getElementById('badge-active').textContent = counts.active;
  if (document.getElementById('badge-pending')) document.getElementById('badge-pending').textContent = counts.pending;
  if (document.getElementById('badge-suspended')) document.getElementById('badge-suspended').textContent = counts.suspended;
  if (document.getElementById('badge-incomplete')) document.getElementById('badge-incomplete').textContent = counts.incomplete;
}

function renderTable() {
  updateCounts();
  const filtered = getFiltered();
  const total = filtered.length;
  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const pageItems = filtered.slice(start, end);

  const tbodyEl = getTbody();
  if (!tbodyEl) return;

  if (total === 0) {
    tbodyEl.innerHTML = '<tr><td colspan="8" style="text-align: center; padding: 60px; color: var(--text-soft); font-weight: 700;">No members found matching your search.</td></tr>';
    document.getElementById('showing-text').textContent = 'Showing 0 members';
    renderPagination(0);
    return;
  }

  tbodyEl.innerHTML = pageItems.map((m, i) => {
    const hasEmailCheck = m.status === 'active' || (m.stamps && m.stamps.some(s => s.badges.includes('email')));
    const hasMobileCheck = m.status === 'active' || (m.stamps && m.stamps.some(s => s.badges.includes('identity')));

    let statusBg = '#E5E7EB'; let statusColor = '#4B5563'; let statusBorder = '#D1D5DB'; let statusText = m.status;
    if (m.status === 'active') { statusBg = '#E8F5EC'; statusColor = '#15803D'; statusBorder = '#22C55E'; statusText = 'Active'; }
    else if (m.status === 'suspended') { statusBg = '#FEE2E2'; statusColor = '#B91C1C'; statusBorder = '#EF4444'; statusText = 'Suspended'; }
    else if (m.status === 'pending') { statusBg = '#FFF7ED'; statusColor = '#A34E0C'; statusBorder = '#FB923C'; statusText = 'Pending'; }
    else if (m.status === 'incomplete') { statusBg = '#F3E8FF'; statusColor = '#6D28D9'; statusBorder = '#A855F7'; statusText = 'Incomplete'; }
    else if (m.status === 'inactive' || m.status === 'expire') { statusBg = '#F3F4F6'; statusColor = '#4B5563'; statusBorder = '#D1D5DB'; statusText = 'Inactive'; }

    const planColors = {
      enterprise: '#8b5cf6',
      business: '#475569',
      starter: '#10b981',
      free: '#94a3b8',
      nil: '#94a3b8',
      premium: '#f59e0b'
    };
    const pColor = planColors[m.plan] || '#94a3b8';
    const pName = m.plan === 'nil' ? 'Free' : capitalize(m.plan);

    const srNo = start + i + 1;
    return `
    <tr style="cursor: pointer; transition: all 0.1s;">
      <td style="text-align: center;" onclick="openProfile(${m.id})"><span style="color: #475569; font-weight: 700; font-size: 0.82rem;">${String(srNo).padStart(2, '0')}</span></td>
      <td onclick="openProfile(${m.id})">
        <div class="cell-member">
          <img src="${m.photo || 'https://i.pravatar.cc/150?u=' + m.id}" class="member-avatar" alt="${m.member}">
          <div style="display: flex; flex-direction: column;">
            <span class="cell-member-name">${m.member}</span>
            <span class="cell-member-sub">${m.company}</span>
          </div>
        </div>
      </td>
      <td onclick="openProfile(${m.id})" style="font-weight:700; color:#475569; font-size:0.82rem;">${m.location}</td>
      <td onclick="openProfile(${m.id})">
        <div style="display:flex; flex-direction:column; align-items:flex-start;">
          <span style="color: ${hasEmailCheck ? '#1e293b' : '#f97316'}; font-weight: 700; font-size:0.82rem;">${m.email}</span>
        </div>
      </td>
      <td onclick="openProfile(${m.id})">
        <div style="display:flex; flex-direction:column; align-items:flex-start;">
          <span style="color: ${hasMobileCheck ? '#1e293b' : '#f97316'}; font-weight: 700; font-size:0.82rem;">${m.mobile}</span>
        </div>
      </td>
      <td onclick="openProfile(${m.id})">
        <span style="font-weight: 600; color: #475569; font-size: 0.82rem;">${pName}</span>
      </td>
      <td onclick="openProfile(${m.id})" style="text-align:center;">
        <div class="status-badge" style="min-width: 100px; padding: 6px 14px; font-size: 0.75rem; background: ${statusBg}; color: ${statusColor}; border: 1px solid ${statusBorder}; border-radius: 6px; display: inline-flex; align-items: center; justify-content: center; gap: 6px; font-weight: 700; text-transform: capitalize; letter-spacing: 0.01em;">
          ${m.status === 'pending' ? '' : `<span style="width: 6px; height: 6px; border-radius: 50%; background: ${statusColor};"></span>`}
          ${statusText}
        </div>
      </td>
      <td onclick="openProfile(${m.id})" style="font-weight:600; color:#64748b; font-size:0.85rem;">${m.date}</td>
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

  const pc = getPaginationControls();
  if (pc) pc.innerHTML = html;

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

  const dv = getDirectoryView();
  const pv = getProfileView();
  if (dv) dv.classList.add('hidden');
  if (pv) pv.classList.remove('hidden');
  if (!pv) return;
  document.querySelector('.top-bar-search').style.display = 'none';
  document.querySelector('.top-bar').style.marginBottom = '8px';

  pv.innerHTML = `
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
      <button class="profile-tab ${tab === 'email' ? 'active' : ''}" onclick="switchTab(${id},'email')"><span class="material-icons-round">mail</span> Email</button>
      <button class="profile-tab ${tab === 'broadcasts' ? 'active' : ''}" onclick="switchTab(${id},'broadcasts')"><span class="material-icons-round">campaign</span> Broadcasts</button>
      <button class="profile-tab ${tab === 'broadcast-settings' ? 'active' : ''}" onclick="switchTab(${id},'broadcast-settings')"><span class="material-icons-round">settings_input_antenna</span> Broadcast Settings</button>
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
  const hasEmailCheck = m.status === 'active' || (m.stamps && m.stamps.some(s => s.badges.includes('email')));
  const hasMobileCheck = m.status === 'active' || (m.stamps && m.stamps.some(s => s.badges.includes('identity')));

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
            <div style="font-size: 0.85rem; font-weight: 600; color: ${hasEmailCheck ? '#1e293b' : '#f97316'};">${m.email}</div>
          </div>
          <div style="padding: 16px 24px; border-right: 1px solid #cbd5e1;">
            <div style="font-size: 0.75rem; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">GST</div>
            <div style="font-size: 0.85rem; font-weight: 600; color: #1e293b;">${m.gst || '29ABCDE1234F1Z5'}</div>
          </div>
          <div style="padding: 16px 24px; border-right: 1px solid #cbd5e1;">
            <div style="font-size: 0.75rem; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Phone</div>
            <div style="font-size: 0.85rem; font-weight: 600; color: ${hasMobileCheck ? '#1e293b' : '#f97316'};">${m.mobile}</div>
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
                  <div class="action-btn-wrap">
                    <button class="action-btn" onclick="event.stopPropagation()">
                      <span class="material-icons-round">more_vert</span>
                    </button>
                    <div class="dropdown-menu" id="dropdown-contact-${m.id}-${ci}" style="right:0;top:100%;margin-top:4px">
                    <button class="dropdown-item" onclick="event.stopPropagation(); openEditModal('contact', ${m.id}, ${ci}); closeAllDropdowns();"><span class="material-icons-round">edit</span> Edit</button>
                    <button class="dropdown-item delete" onclick="event.stopPropagation(); showToast('Contact removed', 'error'); closeAllDropdowns();"><span class="material-icons-round">delete</span> Delete</button>
                    </div>
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
                    <div style="font-size:0.88rem; font-weight:700; color: ${hasMobileCheck ? 'var(--text)' : '#f97316'};">${c.phone}</div>
                  </div>
                  <div>
                    <div style="font-size:0.65rem; font-weight:800; color:var(--text-soft); margin-bottom:4px;">Email</div>
                    <div style="font-size:0.88rem; font-weight:700; color: ${hasEmailCheck ? 'var(--text)' : '#f97316'}; word-break:break-all;">${c.email}</div>
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
                      <span style="color: ${hasEmailCheck ? 'var(--text-mid)' : '#f97316'}; font-weight: 600; font-size: 0.88rem;">${c.email}</span>
                    </td>
                    <td style="padding: 16px 24px;">
                      <span style="color: ${hasMobileCheck ? 'var(--text-mid)' : '#f97316'}; font-weight: 600; font-size: 0.88rem;">${c.phone}</span>
                    </td>
                    <td style="padding: 16px 24px;">
                      <div class="status-badge" style="min-width: 85px; padding: 5px 12px; font-size: 0.8rem; background: ${status === 'Active' ? '#E8F5EC' : '#F3F4F6'}; color: ${status === 'Active' ? '#15803D' : '#4B5563'}; border: 1px solid ${status === 'Active' ? '#22C55E' : '#D1D5DB'}; border-radius: 6px; display: inline-flex; align-items: center; justify-content: center; gap: 6px; font-weight: 700;">
                        <span style="width: 6px; height: 6px; border-radius: 50%; background: ${status === 'Active' ? '#15803D' : '#4B5563'};"></span>
                        ${status}
                      </div>
                    </td>
                    <td style="text-align:right;">
                    <div class="action-btn-wrap">
                      <button class="action-btn" onclick="event.stopPropagation()">
                        <span class="material-icons-round">more_vert</span>
                      </button>
                      <div class="dropdown-menu" id="dropdown-contact-table-${m.id}-${ci}">
                        <button class="dropdown-item" onclick="event.stopPropagation(); openEditModal('contact', ${m.id}, ${ci}); closeAllDropdowns();"><span class="material-icons-round">edit</span> Edit</button>
                        <button class="dropdown-item delete" onclick="event.stopPropagation(); showToast('Contact removed', 'error'); closeAllDropdowns();"><span class="material-icons-round">delete</span> Delete</button>
                      </div>
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
                      <div class="action-btn-wrap">
                        <button class="action-btn" onclick="event.stopPropagation()" style="background:transparent; border:none; color:#94a3b8; cursor:pointer;">
                          <span class="material-icons-round">more_vert</span>
                        </button>
                        <div class="dropdown-menu" id="dropdown-addr-${m.id}-${ai}">
                        <button class="dropdown-item" onclick="event.stopPropagation(); openEditModal('address', ${m.id}, ${ai}); closeAllDropdowns();"><span class="material-icons-round">edit</span> Edit</button>
                        <button class="dropdown-item delete" onclick="event.stopPropagation(); m.addresses.splice(${ai}, 1); showToast('Address removed', 'error'); closeAllDropdowns(); switchTab(${m.id}, 'addresses');"><span class="material-icons-round">delete</span> Delete</button>
                      </div>
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
    // Initialize assignedPlans with richer data
    if (!m.assignedPlans) {
      m.assignedPlans = [
        { sr: 1, name: 'TK-Premium', date: '28-Apr-2026 to 28-Apr-2027', remark: 'Plan assigned by Admin', invoice: 'ISPL/1002/2026-27', status: 'UnPaid', invoiceType: 'Final', type: 'assign', admin: 'Admin User', timestamp: '28-Apr-2026 10:30 AM' },
        { sr: 2, name: 'TK-Premium', date: '24-Apr-2026 to 24-Apr-2026', remark: 'Invoice generated', invoice: 'ISPL/1001/2026-27', status: 'Paid', invoiceType: 'Final', type: 'assign', admin: 'Admin User', timestamp: '24-Apr-2026 09:15 AM' },
        { sr: 3, name: 'TK-Premium', date: '22-Apr-2026 to 22-May-2026', remark: 'Plan extended by 30 days', invoice: '', status: 'N/A', type: 'extend', admin: 'System', timestamp: '22-Apr-2026 02:45 PM' },
        { sr: 4, name: 'TK-Lite', date: '16-Apr-2026 to 16-May-2026', remark: 'Initial plan assigned', invoice: '', status: 'N/A', type: 'assign', admin: 'Admin User', timestamp: '16-Apr-2026 11:00 AM' }
      ];
    }
    const assignedPlans = m.assignedPlans;
    const actualPlan = assignedPlans.find(p => !['Suspended', 'Reactivated'].includes(p.name)) || {};
    const hasPlan = actualPlan.name && actualPlan.name !== 'None';
    const latestInvoice = assignedPlans.find(p => p.invoice) || {};
    
    // Check if plan is expired
    const activePlanExpiry = actualPlan.date ? actualPlan.date.split(' to ')[1] : 'N/A';
    let isExpired = false;
    if (activePlanExpiry !== 'N/A') {
      const expDate = new Date(activePlanExpiry);
      if (expDate < new Date()) isExpired = true;
    }

    const memberIsSuspended = m.status === 'suspended';

    // Helper: get timeline dot color
    const getDotColor = (p) => {
      if (p.name === 'Suspended') return 'red';
      if (p.name === 'Reactivated') return 'green';
      if (p.type === 'extend') return 'blue';
      if (p.type === 'upgrade') return 'purple';
      if (p.status === 'Paid') return 'green';
      if (p.status === 'UnPaid') return 'yellow';
      return 'gray';
    };

    // Helper: get timeline event icon
    const getEventIcon = (p) => {
      if (p.name === 'Suspended') return 'block';
      if (p.name === 'Reactivated') return 'verified_user';
      if (p.type === 'extend') return 'more_time';
      if (p.type === 'upgrade') return 'upgrade';
      if (p.status === 'Paid') return 'paid';
      return 'assignment';
    };

    return `
      <div class="content-card">
        <div class="profile-section-header" style="justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border); margin-bottom: 0; padding: 24px 0;">
          <div>
            <h3 class="profile-section-title" style="margin:0; font-size:1.1rem; font-weight:800; color:#1e293b;">Subscription Management</h3>
            <p style="margin: 4px 0 0; font-size: 0.8rem; font-weight: 600; color: #64748b;">Manage member plans and billing history</p>
          </div>
          <button class="btn-primary" onclick="window.openManagePlanModal(${m.id})" style="height: 40px; padding: 0 20px; border-radius:10px; font-weight: 800;">
            Manage Plan
          </button>
        </div>

        <!-- Timeline / Invoices — Dual Mode -->
        <div class="plan-timeline-card" style="border:none; box-shadow:none; border-radius:0;">
          <div class="plan-timeline-header" style="padding: 24px 0; border-bottom: none; background: transparent;">
            <div class="plan-timeline-header-left">
              <div class="plan-timeline-icon-wrap">
                <span class="material-icons-round">history</span>
              </div>
              <div>
                <h3 class="plan-timeline-title">Plan History</h3>
                <p class="plan-timeline-count">${assignedPlans.length} events · Comprehensive audit log</p>
              </div>
            </div>
            <div class="plan-timeline-header-right" style="display:flex; align-items:center; gap:12px;">
              <div id="tl-filter-container" class="pm-field-modern compact" style="width: 140px; margin: 0; height: 34px; border-radius: 6px; background: #fff;">
                <select id="tl-activity-filter" onchange="filterTimeline(${m.id}, this.value)" style="font-size: 0.78rem; font-weight: 700; color: #475569; padding-right: 12px;">
                  <option value="all">All Events</option>
                  <option value="assign">Assignments</option>
                  <option value="extend">Extensions</option>
                  <option value="upgrade">Upgrades</option>
                  <option value="suspend">Suspensions</option>
                  <option value="reactivate">Reactivations</option>
                </select>
              </div>
              <div class="timeline-view-toggle">
                <button class="tl-toggle-btn active" data-view="activity" onclick="switchTimelineView('activity', this, ${m.id})">
                  Activity
                </button>
                <button class="tl-toggle-btn" data-view="table" onclick="switchTimelineView('table', this, ${m.id})">
                  Invoices
                </button>
              </div>
            </div>
          </div>

          <div id="tl-activity-view" class="plan-timeline-body" style="padding: 0 24px 24px;">
            ${assignedPlans.map(p => renderTimelineEvent(p)).join('')}
          </div>

          <div id="tl-table-view" class="plan-timeline-table-view" style="display:none; padding: 0 24px 24px;">
            <div class="table-responsive" style="border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
              <table class="plan-history-table">
                <thead>
                  <tr>
                    <th style="padding: 16px 24px; text-align: left; border-bottom: 1px solid var(--border); color: #94a3b8; font-size: 0.68rem; font-weight: 900; text-transform: uppercase; letter-spacing: 0.12em; width: 60px;">Sr</th>
                    <th onclick="sortPlanHistory(${m.id}, 'name')" style="padding: 16px 24px; text-align: left; border-bottom: 1px solid var(--border); color: #94a3b8; font-size: 0.68rem; font-weight: 900; text-transform: uppercase; letter-spacing: 0.12em; cursor:pointer;">Plan Detail <span class="material-icons-round" style="font-size:14px; vertical-align:middle; opacity:0.3;">unfold_more</span></th>
                    <th onclick="sortPlanHistory(${m.id}, 'date')" style="padding: 16px 24px; text-align: left; border-bottom: 1px solid var(--border); color: #94a3b8; font-size: 0.68rem; font-weight: 900; text-transform: uppercase; letter-spacing: 0.12em; cursor:pointer;">Timeline <span class="material-icons-round" style="font-size:14px; vertical-align:middle; opacity:0.3;">unfold_more</span></th>
                    <th style="padding: 16px 24px; text-align: left; border-bottom: 1px solid var(--border); color: #94a3b8; font-size: 0.68rem; font-weight: 900; text-transform: uppercase; letter-spacing: 0.12em;">Invoice</th>
                    <th onclick="sortPlanHistory(${m.id}, 'status')" style="padding: 16px 24px; text-align: center; border-bottom: 1px solid var(--border); color: #94a3b8; font-size: 0.68rem; font-weight: 900; text-transform: uppercase; letter-spacing: 0.12em; width: 100px; cursor:pointer;">Status <span class="material-icons-round" style="font-size:14px; vertical-align:middle; opacity:0.3;">unfold_more</span></th>
                  </tr>
                </thead>
                <tbody>
                  ${assignedPlans.map(p => `
                    <tr style="transition: all 0.1s;" onmouseover="this.style.background='#fcfcfc'" onmouseout="this.style.background='transparent'">
                      <td style="padding: 16px 24px; border-bottom: 1px solid var(--border); font-size: 0.82rem; font-weight: 700; color: #64748b;">${p.sr}</td>
                      <td style="padding: 16px 24px; border-bottom: 1px solid var(--border); font-size: 0.88rem; font-weight: 800; color: #1e293b;">${p.name}</td>
                      <td style="padding: 16px 24px; border-bottom: 1px solid var(--border); font-size: 0.82rem; font-weight: 600; color: #64748b;">${p.date}</td>
                      <td style="padding: 16px 24px; border-bottom: 1px solid var(--border); font-size: 0.82rem; font-weight: 700; color: var(--blue); font-family: monospace;">${p.invoice || '—'}</td>
                      <td style="padding: 16px 24px; border-bottom: 1px solid var(--border); text-align: center;">
                        <span style="font-size: 0.7rem; font-weight: 900; text-transform: uppercase; color: ${p.status === 'Paid' ? '#16a34a' : (p.status === 'N/A' ? '#94a3b8' : '#f59e0b')}; background: ${p.status === 'Paid' ? '#f0fdf4' : (p.status === 'N/A' ? '#f8fafc' : '#fffbeb')}; border: 1px solid ${p.status === 'Paid' ? '#bbf7d0' : (p.status === 'N/A' ? '#e2e8f0' : '#fef3c7')}; padding: 4px 10px; border-radius: 4px;">
                          ${p.status}
                        </span>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
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

    return `
      <div class="content-card">
        <div class="profile-section-header" style="justify-content: space-between; align-items:center; border-bottom:1px solid var(--border); margin-bottom:0; padding: 24px 0;">
          <div>
            <h3 class="profile-section-title" style="margin:0; font-size:1.1rem; font-weight:800; color:#1e293b;">Broadcast History</h3>
            <p style="margin: 4px 0 0; font-size: 0.8rem; font-weight: 600; color: #64748b;">Member activity logs for all broadcasted messages</p>
          </div>
          <div style="display:flex; align-items:center; gap:12px;">
            <div style="display:flex; align-items:center; gap:10px; padding:8px 14px; background:#f8fafc; border:1px solid var(--border); border-radius:10px;">
              <span style="font-size: 0.82rem; font-weight: 800; color: var(--text-mid);">Approval Required</span>
              <input type="checkbox" style="width: 18px; height: 18px; accent-color:var(--blue); cursor:pointer;">
            </div>
          </div>
        </div>
        
        <div class="table-scroll-wrap" style="margin: 0 -24px -24px -24px;">
          <table class="plan-history-table" style="width: 100%;">
            <thead>
              <tr>
                <th style="padding: 16px 24px; text-align: left; border-bottom: 1px solid var(--border); color: #94a3b8; font-size: 0.68rem; font-weight: 900; text-transform: uppercase; letter-spacing: 0.12em; width: 140px;">Date & Time</th>
                <th style="padding: 16px 24px; text-align: left; border-bottom: 1px solid var(--border); color: #94a3b8; font-size: 0.68rem; font-weight: 900; text-transform: uppercase; letter-spacing: 0.12em;">Message Detail</th>
                <th style="padding: 16px 24px; text-align: left; border-bottom: 1px solid var(--border); color: #94a3b8; font-size: 0.68rem; font-weight: 900; text-transform: uppercase; letter-spacing: 0.12em; width: 130px;">Recipient</th>
                <th style="padding: 16px 24px; text-align: center; border-bottom: 1px solid var(--border); color: #94a3b8; font-size: 0.68rem; font-weight: 900; text-transform: uppercase; letter-spacing: 0.12em; width: 100px;">Status</th>
              </tr>
            </thead>
            <tbody>
              ${broadcasts.map(b => `
                <tr style="transition: all 0.1s; cursor:pointer;" onmouseover="this.style.background='#fcfcfc'" onmouseout="this.style.background='transparent'" onclick="openBroadcastHistoryModal('${m.id}', '${b.id}')">
                  <td style="padding: 16px 24px; border-bottom: 1px solid var(--border);">
                    <div style="font-size: 0.82rem; color: #1e293b; font-weight: 800;">${b.date.split(' ')[0]}</div>
                    <div style="font-size: 0.72rem; color: #64748b; font-weight: 600; margin-top:2px;">${b.date.split(' ').slice(1).join(' ')}</div>
                  </td>
                  <td style="padding: 16px 24px; border-bottom: 1px solid var(--border);">
                    <div style="font-size: 0.88rem; color: #1e293b; font-weight: 800; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${b.broadcast}">${b.broadcast}</div>
                    <div style="font-size: 0.75rem; color: #64748b; font-weight: 600; margin-top:2px;">Sent by ${b.broadcaster}</div>
                  </td>
                  <td style="padding: 16px 24px; border-bottom: 1px solid var(--border);">
                    <span style="font-size: 0.78rem; font-weight: 800; color: #64748b; background:#f1f5f9; padding:4px 10px; border-radius:6px;">${b.sendTo}</span>
                  </td>
                  <td style="padding: 16px 24px; border-bottom: 1px solid var(--border); text-align: center;">
                    <span style="font-size: 0.7rem; font-weight: 900; text-transform: uppercase; color: ${b.status === 'Live' || b.status === 'Active' ? '#16a34a' : (b.status === 'Pending' ? '#f59e0b' : '#94a3b8')}; background: ${b.status === 'Live' || b.status === 'Active' ? '#f0fdf4' : (b.status === 'Pending' ? '#fffbeb' : '#f8fafc')}; border: 1px solid ${b.status === 'Live' || b.status === 'Active' ? '#bbf7d0' : (b.status === 'Pending' ? '#fef3c7' : '#e2e8f0')}; padding: 4px 10px; border-radius: 4px;">
                      ${b.status}
                    </span>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;

  } else if (tab === 'broadcast-settings') {
    const settings = [
      { category: 'Stainless Steel', sub: 'Circle, Plate' },
      { category: 'Mobile', sub: 'Iphone' },
      { category: 'Components', sub: 'Motherboard, Memory, Processor' },
      { category: 'Aluminium', sub: 'Sheet' },
      { category: 'Server', sub: 'Hard Drive' },
      { category: 'PC', sub: 'Motherboard, Screen, Hard drive, Processor' },
      { category: 'Laptop', sub: 'Hard drive 2.5", Battery, Motherboard, Laptop' }
    ];
    return `
      <div class="content-card">
        <div class="profile-section-header" style="justify-content: flex-start; align-items: center; border-bottom: 1px solid var(--border); margin-bottom: 0; padding: 24px 32px;">
          <div>
            <h3 class="profile-section-title" style="margin:0; font-size:1.15rem; font-weight:900; color:#1e293b;">Broadcast Settings</h3>
            <p style="margin: 4px 0 0; font-size: 0.85rem; font-weight: 600; color: #64748b;">Select the subcategories to include in this broadcast.</p>
          </div>
        </div>
        
        <div class="table-scroll-wrap" style="margin: 0;">
          <table class="plan-history-table" style="width: 100%; border-collapse: separate; border-spacing: 0 8px; padding: 16px 32px;">
            <thead>
              <tr>
                <th style="padding: 12px 16px; text-align: left; color: #94a3b8; font-size: 0.7rem; font-weight: 900; text-transform: uppercase; letter-spacing: 0.12em;">Category</th>
                <th style="padding: 12px 16px; text-align: left; color: #94a3b8; font-size: 0.7rem; font-weight: 900; text-transform: uppercase; letter-spacing: 0.12em;">Selected Subcategories</th>
                <th style="width:50px;"></th>
              </tr>
            </thead>
            <tbody>
              ${settings.map((s, idx) => {
                const iconsMap = {
                  'Stainless Steel': 'shield',
                  'Mobile': 'phone_iphone',
                  'Components': 'layers',
                  'Aluminium': 'architecture',
                  'Server': 'storage',
                  'PC': 'desktop_windows',
                  'Laptop': 'laptop'
                };
                const icon = iconsMap[s.category] || 'settings';
                const safeId = s.category.replace(/\s+/g, '-');
                
                const subcategories = {
                  'Stainless Steel': ['Circle', 'Plate', 'Pipe', 'Sheet', 'Coil', 'Strip'],
                  'Mobile': ['Iphone', 'Samsung', 'Google Pixel', 'OnePlus', 'Xiaomi', 'Oppo'],
                  'Components': ['Motherboard', 'Memory', 'Processor', 'Graphic Card', 'SSD', 'PSU'],
                  'Aluminium': ['Sheet', 'Extrusion', 'Ingot', 'Foil', 'Plate', 'Rod'],
                  'Server': ['Hard Drive', 'Rack', 'CPU', 'Power Supply', 'RAM', 'Chassis'],
                  'PC': ['Monitor', 'Keyboard', 'Mouse', 'UPS', 'Speaker', 'Webcam'],
                  'Laptop': ['Display', 'Battery', 'Keyboard', 'Touchpad', 'Charger', 'RAM']
                }[s.category] || [];

                return `
                  <!-- Main Row -->
                  <tr class="broadcast-settings-row" id="row-${safeId}" onclick="window.toggleBroadcastAccordion('${safeId}', this)" style="transition: all 0.2s; cursor: pointer;" onmouseover="this.style.background='#f8fafc'" onmouseout="if(!this.classList.contains('active-edit')) this.style.background='transparent'">
                    <td style="padding: 18px 16px; border-top: 1px solid #f1f5f9; border-bottom: 1px solid #f1f5f9; border-left: 1px solid #f1f5f9; border-radius: 12px 0 0 12px; font-size: 0.95rem; font-weight: 800; color: #1e293b;">
                      <div style="display:flex; align-items:center; gap:16px;">
                        <span class="material-icons-round category-icon" style="font-size:24px; color:#64748b; transition: color 0.2s;">${icon}</span>
                        <span class="category-name-label">${s.category}</span>
                      </div>
                    </td>
                    <td style="padding: 18px 16px; border-top: 1px solid #f1f5f9; border-bottom: 1px solid #f1f5f9; font-size: 0.9rem; font-weight: 600; color: #64748b;">${s.sub}</td>
                    <td style="padding: 18px 16px; border-top: 1px solid #f1f5f9; border-bottom: 1px solid #f1f5f9; border-right: 1px solid #f1f5f9; border-radius: 0 12px 12px 0; text-align: right;">
                      <span class="material-icons-round chevron-icon" style="font-size:20px; color:#94a3b8;">chevron_right</span>
                    </td>
                  </tr>
                  
                  <!-- Expansion (Dropdown) Row -->
                  <tr id="expand-${safeId}" style="display:none; background: #fff;">
                    <td colspan="3" style="padding: 0 32px 16px 32px;">
                      <div style="padding: 24px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 16px; animation: slideDown 0.2s ease;">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                          <div style="display:flex; align-items:center; gap:12px;">
                            <span class="material-icons-round" style="font-size:24px; color:var(--blue);">${icon}</span>
                            <span style="font-size:1rem; font-weight:900; color:#1e293b;">${s.category} Configuration</span>
                          </div>
                          <div style="display:flex; align-items:center; gap:8px; cursor:pointer;" onclick="event.stopPropagation()">
                             <span style="font-size:0.85rem; font-weight:800; color:#64748b;">Select All</span>
                             <input type="checkbox" checked style="width:18px; height:18px; accent-color:var(--blue);">
                          </div>
                        </div>
                        
                        <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap:16px; margin-bottom:24px;">
                          ${subcategories.map(sub => `
                            <label style="display:flex; align-items:center; gap:10px; cursor:pointer;" onclick="event.stopPropagation()">
                              <input type="checkbox" checked style="width:18px; height:18px; accent-color:var(--blue);">
                              <span style="font-size:0.9rem; font-weight:700; color:#334155;">${sub}</span>
                            </label>
                          `).join('')}
                        </div>
                        
                        <div style="display:flex; gap:12px;">
                          <button class="btn-primary" onclick="window.saveAccordionEdit('${s.category}', event)" style="padding:8px 24px; font-size:0.85rem; border-radius:8px;">Done</button>
                          <button class="btn-outline" onclick="window.toggleBroadcastAccordion('${safeId}', document.getElementById('row-${safeId}'))" style="padding:8px 20px; font-size:0.85rem; border-radius:8px; background:transparent;">Cancel</button>
                        </div>
                      </div>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
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
                  <td><span style="color:#64748b; font-weight:700; font-size: 0.82rem;">${i + 1}</span></td>
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
      { key: 'identity', label: 'Identity', icon: 'badge', color: '#1e293b', bg: '#f1f5f9' },
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

  if (type === 'broadcast-settings') {
    content.className = 'modal-content modal-full';
    content.style.maxWidth = '1300px';
    
    const categories = [
      { id: 'ss', name: 'Stainless Steel', icon: 'shield', selected: 2, total: 2, active: true },
      { id: 'mo', name: 'Mobile', icon: 'phone_iphone', selected: 1, total: 1, active: false },
      { id: 'co', name: 'Components', icon: 'layers', selected: 3, total: 3, active: false },
      { id: 'al', name: 'Aluminium', icon: 'architecture', selected: 1, total: 1, active: false },
      { id: 'se', name: 'Server', icon: 'storage', selected: 1, total: 1, active: false },
      { id: 'pc', name: 'PC', icon: 'desktop_windows', selected: 4, total: 6, active: false },
      { id: 'lp', name: 'Laptop', icon: 'laptop', selected: 4, total: 5, active: false }
    ];

    const subs = {
      'ss': ['Circle', 'Plate'],
      'mo': ['Iphone'],
      'co': ['Motherboard', 'Memory', 'Processor'],
      'al': ['Sheet'],
      'se': ['Hard Drive'],
      'pc': ['Motherboard', 'Screen', 'Hard drive', 'Processor', 'Memory', 'SSD'],
      'lp': ['Hard drive 2.5"', 'Battery', 'Motherboard', 'Laptop', 'Screen']
    };

    const themeColor = 'var(--blue)';
    const themeBg = 'var(--blue-light)';

    html = `
      <div class="modal-header" style="padding: 24px 32px; background: #fff; border-bottom: 1px solid var(--border); position: sticky; top: 0; z-index: 100;">
        <div style="display:flex; gap:16px; align-items:center;">
          <div style="width:48px; height:48px; border-radius:12px; background:${themeBg}; color:${themeColor}; display:grid; place-items:center;">
            <span class="material-icons-round" style="font-size:24px;">settings_input_antenna</span>
          </div>
          <div>
            <h3 style="margin:0; font-size:1.15rem; font-weight:900; color: #1e293b;">Broadcast Settings</h3>
            <div style="display:flex; align-items:center; gap:8px; margin-top:2px;">
              <span style="width:8px; height:8px; border-radius:50%; background:#10b981;"></span>
              <span style="font-size:12px; font-weight:600; color:#64748b; text-transform:uppercase; letter-spacing:0.06em;">Live Configuration</span>
            </div>
          </div>
        </div>
        <div style="display:flex; gap:12px; align-items:center;">
          <button class="modal-close" onclick="closeModal()" style="background:#f8fafc; border:1px solid #e2e8f0; width:32px; height:32px; border-radius:50%; display:grid; place-items:center; cursor:pointer; color:#94a3b8; transition:all 0.2s;">
            <span class="material-icons-round" style="font-size:18px;">close</span>
          </button>
        </div>
      </div>

      <div class="modal-body" style="padding: 24px 32px; background: #f8fafc; overflow-y:auto; max-height:calc(100vh - 200px);">
        <div style="margin-bottom: 24px;">
          <div style="display:flex; align-items:center; margin-bottom:8px; padding:0 4px;">
            <h4 style="margin:0; font-size:12px; font-weight:600; color:#64748b; text-transform:uppercase; letter-spacing:0.06em;">Category</h4>
          </div>
          
          <div class="custom-scrollbar" style="display:flex; gap:16px; overflow-x:auto; padding:4px 4px 16px 4px;">
            ${categories.map(c => `
              <div style="flex:0 0 170px; padding:20px; background:${c.active ? '#fff' : '#f1f5f9'}; border:2px solid ${c.active ? themeColor : 'transparent'}; border-radius:16px; display:flex; flex-direction:column; align-items:center; gap:14px; cursor:pointer; transition:all 0.3s; position:relative; 
                ${c.active ? `box-shadow: 0 12px 24px -8px rgba(37,99,235,0.15);` : 'opacity:0.7;'}" 
                onmouseover="this.style.transform='translateY(-4px)'; this.style.opacity='1'" 
                onmouseout="this.style.transform='translateY(0)'; ${c.active ? '' : "this.style.opacity='0.7'"}">
                
                <div style="width:44px; height:44px; border-radius:12px; background:${c.active ? themeBg : '#fff'}; color:${themeColor}; display:grid; place-items:center; border:1px solid ${c.active ? themeColor + '30' : '#e2e8f0'};">
                  <span class="material-icons-round" style="font-size:24px;">${c.icon}</span>
                </div>
                
                <div style="text-align:center;">
                  <div style="font-size:0.88rem; font-weight:800; color:${c.active ? '#1e293b' : '#64748b'}; margin-bottom:4px;">${c.name}</div>
                  <div style="font-size:12px; font-weight:600; color:${c.active ? themeColor : '#94a3b8'}; text-transform:uppercase; letter-spacing:0.06em;">
                    ${c.selected}/${c.total} Selected
                  </div>
                </div>
                ${c.active ? `<div style="position:absolute; top:12px; right:12px; width:8px; height:8px; border-radius:50%; background:${themeColor};"></div>` : ''}
              </div>
            `).join('')}
          </div>
        </div>

        <div>
          <div style="display:flex; align-items:center; margin-bottom:10px; padding:0 4px;">
            <h4 style="margin:0; font-size:12px; font-weight:600; color:#64748b; text-transform:uppercase; letter-spacing:0.06em;">Subcategory</h4>
          </div>
          
          <div class="custom-scrollbar" style="display:flex; gap:24px; overflow-x:auto; padding:4px 4px 20px 4px;">
            ${categories.map(c => `
              <div style="flex:0 0 220px; background:#fff; border:1.5px solid #e2e8f0; border-radius:16px; padding:20px; transition:all 0.3s; position:relative; overflow:hidden;" onmouseover="this.style.borderColor='${themeColor}'; this.style.boxShadow='0 12px 24px -8px rgba(0,0,0,0.05)'" onmouseout="this.style.borderColor='#e2e8f0'; this.style.boxShadow='none'">
                <div style="display:flex; align-items:center; gap:12px; margin-bottom:20px;">
                  <div style="width:36px; height:36px; border-radius:10px; background:${themeBg}; color:${themeColor}; display:grid; place-items:center;">
                    <span class="material-icons-round" style="font-size:20px;">${c.icon}</span>
                  </div>
                  <span style="font-size:1rem; font-weight:900; color:#1e293b;">${c.name}</span>
                </div>

                <div style="display:flex; flex-direction:column; gap:2px;">
                  <label style="display:flex; align-items:center; gap:10px; cursor:pointer; padding:8px 12px; border-radius:10px; transition:background 0.2s; background:#f8fafc; border:1px solid #f1f5f9;">
                    <input type="checkbox" style="width:18px; height:18px; accent-color:${themeColor}; border-radius:6px; cursor:pointer;">
                    <span style="font-size:12px; font-weight:600; color:#64748b; text-transform:uppercase; letter-spacing:0.06em;">Select All Fields</span>
                  </label>
                  
                  <div style="display:flex; flex-direction:column; gap:0px;">
                    ${(subs[c.id] || []).map(s => `
                      <label style="display:flex; align-items:center; gap:10px; cursor:pointer; padding:6px 10px; border-radius:10px; transition:all 0.2s;" onmouseover="this.style.background='${themeBg}50'" onmouseout="this.style.background='transparent'">
                        <input type="checkbox" checked style="width:20px; height:20px; accent-color:${themeColor}; border-radius:6px; cursor:pointer;">
                        <span style="font-size:0.88rem; font-weight:600; color:#334155;">${s}</span>
                      </label>
                    `).join('')}
                  </div>
                </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
      <div class="modal-footer" style="padding: 16px 32px; background: #fff; border-top: 1px solid var(--border); display: flex; justify-content: flex-end; gap: 12px; border-radius: 0 0 16px 16px;">
        <button class="btn-outline" onclick="closeModal()" style="padding: 10px 24px; font-weight: 800; border-radius: 10px;">Cancel</button>
        <button class="btn-primary" onclick="showToast('Broadcast Settings Updated', 'success'); closeModal();" style="padding: 10px 28px; font-weight: 800; border-radius: 10px; background: ${themeColor}; box-shadow: 0 4px 12px rgba(37,99,235,0.2);">
          Save Changes
        </button>
      </div>
    `;
  } else if (type === 'contact') {
    const c = m.contacts[index];
    const nameParts = (c.name || '').split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';
    const status = c.status || 'Active';
    const role = c.role || 'CEO';

    content.className = 'modal-content';
    content.style.maxWidth = '680px';

    html = `
      <div class="bem-wrap">
        <div class="bem-header">
          <div class="bem-header-left">
            <div class="bem-title-row">
              <h2 class="bem-title">Edit Contact</h2>
              <span class="bem-badge"><span class="material-icons-round">edit</span>EDITING</span>
            </div>
            <div class="bem-meta">
              <span>${m.company}</span><span>•</span>
              <span class="material-icons-round" style="color:#2563eb;">account_circle</span>
              <span>${c.name}</span>
            </div>
          </div>
          <button class="bem-close" onclick="closeModal()"><span class="material-icons-round">close</span></button>
        </div>

        <div class="bem-body">
          <div class="bem-grid">
            <div class="bem-field" style="grid-column: span 2; margin-bottom: 8px;">
              <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(c.name)}&background=e2e8f0&color=64748b" style="width:56px; height:56px; border-radius:50%;">
            </div>

            <div class="bem-field">
              <label class="bem-label">First Name</label>
              <input class="bcast-edit-input" type="text" value="${firstName}" id="edit-c-fname" data-orig="${firstName}" oninput="checkProfileDirty()">
            </div>

            <div class="bem-field">
              <label class="bem-label">Last Name</label>
              <input class="bcast-edit-input" type="text" value="${lastName}" id="edit-c-lname" data-orig="${lastName}" oninput="checkProfileDirty()">
            </div>

            <div class="bem-field">
              <label class="bem-label">Designation</label>
              <div class="bem-select-wrap">
                <select class="bcast-edit-select" id="edit-c-role" data-orig="${role}" onchange="checkProfileDirty()">
                  <option value="CEO" ${role === 'CEO' ? 'selected' : ''}>CEO</option>
                  <option value="Proprietor" ${role === 'Proprietor' ? 'selected' : ''}>Proprietor</option>
                  <option value="Director" ${role === 'Director' ? 'selected' : ''}>Director</option>
                  <option value="Manager" ${role === 'Manager' ? 'selected' : ''}>Manager</option>
                  <option value="Partner" ${role === 'Partner' ? 'selected' : ''}>Partner</option>
                </select>
                <span class="material-icons-round bem-chevron">expand_more</span>
              </div>
            </div>

            <div class="bem-field">
              <label class="bem-label">Status</label>
              <div class="bem-select-wrap">
                <select class="bcast-edit-select" id="edit-c-status" data-orig="${status}" onchange="checkProfileDirty()">
                  <option value="Active" ${status === 'Active' ? 'selected' : ''}>Active</option>
                  <option value="Inactive" ${status === 'Inactive' ? 'selected' : ''}>Inactive</option>
                </select>
                <span class="material-icons-round bem-chevron">expand_more</span>
              </div>
            </div>
          </div>
        </div>

        <div class="bem-footer">
          <button class="bem-btn-cancel" onclick="window.closeModal()">Cancel</button>
          <button class="bem-btn-update" id="profile-update-btn" onclick="saveContactChanges(${memberId}, ${index})">
            <span class="material-icons-round">save</span> Update
          </button>
        </div>
      </div>
    `;
  } else if (type === 'plan') {
    content.className = 'modal-content modal-wide';
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
            <div style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: #64748b; padding-bottom: 12px; border-bottom: 1px solid #f1f5f9; margin-bottom: 4px;">Plan Information</div>
            
            <div style="display:flex; flex-direction:column; gap:4px;">
              <label class="modal-label">Select Plan</label>
              ${renderCustomSelect('edit-plan-select', [
                { value: 'starter', label: 'Starter Plan' },
                { value: 'business', label: 'Business Plan' },
                { value: 'enterprise', label: 'Enterprise Plan' }
              ], m.plan, (val) => { m.plan = val; })}
            </div>

            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:16px;">
              <div style="display:flex; flex-direction:column; gap:4px;">
                <label class="modal-label">Plan Rate</label>
                <input class="modal-input" type="number" value="${planRate}">
              </div>
              <div style="display:flex; flex-direction:column; gap:4px;">
                <label class="modal-label">Validity</label>
                ${renderCustomSelect('edit-plan-validity', [
                  { value: 'monthly', label: 'Monthly' },
                  { value: 'quarterly', label: 'Quarterly' },
                  { value: 'halfyearly', label: 'Half Yearly' },
                  { value: 'yearly', label: 'Yearly' }
                ], planValidity, (val) => { /* Update logic if needed */ })}
              </div>
            </div>

            <div style="display:flex; flex-direction:column; gap:4px;">
              <label class="modal-label">Daily Broadcast Limit</label>
              <input class="modal-input" type="number" value="${planBroadcast}">
            </div>

            <div style="display:flex; flex-direction:column; gap:4px;">
              <label class="modal-label">Notification Email</label>
              <input class="modal-input" type="email" value="${planEmail}">
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
                    <div style="font-size:0.85rem; font-weight:700; color:#1e293b;">${f.label}</div>
                    <div style="font-size:0.72rem; font-weight:500; color:#64748b; max-width:200px;">${f.desc}</div>
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
          <label class="modal-label">Address Title</label>
          <select class="modal-input" id="edit-addr-title">
            <option value="Company Address" ${title === 'Company Address' ? 'selected' : ''}>Company Address</option>
            <option value="Work" ${title === 'Work' ? 'selected' : ''}>Work</option>
            <option value="Factory" ${title === 'Factory' ? 'selected' : ''}>Factory</option>
            <option value="Warehouse" ${title === 'Warehouse' ? 'selected' : ''}>Warehouse</option>
          </select>
        </div>
        <div class="modal-form-row">
          <label class="modal-label">Address Line 1</label>
          <input class="modal-input" type="text" value="${a.line1 || a.detail || ''}" id="edit-addr-line1" placeholder="Building, Street">
        </div>
        <div class="modal-form-row">
          <label class="modal-label">Address Line 2</label>
          <input class="modal-input" type="text" value="${a.line2 || ''}" id="edit-addr-line2" placeholder="Enter Address Line">
        </div>
        <div class="modal-form-row">
          <label class="modal-label">City</label>
          <input class="modal-input" type="text" value="${a.city || m.location}" id="edit-addr-city" placeholder="Ahmedabad Gujarat">
        </div>
        <div class="modal-form-row">
          <label class="modal-label">Pincode</label>
          <input class="modal-input" type="text" value="${a.pincode || ''}" id="edit-addr-pincode" placeholder="125558">
        </div>
        <div class="modal-form-row" style="margin-top: 24px;">
          <label class="modal-label" style="margin-bottom:0;">Set as default</label>
          <input type="checkbox" id="edit-addr-default" ${isDefault ? 'checked' : ''} style="width:18px; height:18px;">
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-outline" style="background:#f1f5f9; border:none; color:var(--text-mid);" onclick="m.addresses.splice(${index}, 1); closeModal(); showToast('Address removed', 'error'); switchTab(${memberId}, 'addresses');">Delete</button>
        <button class="btn-outline" style="background:#f1f5f9; border:none; color:var(--text-mid);" onclick="closeModal()">Close</button>
        <button class="btn-primary" style="padding: 10px 32px;" onclick="saveAddress(${memberId}, ${index})">Save</button>
      </div>
    `;
  } else if (type === 'company') {
    content.className = 'modal-content';
    content.style.maxWidth = '750px';

    const bType = m.companyType || 'Wholesaler';

    html = `
      <div class="bem-wrap">
        <div class="bem-header">
          <div class="bem-header-left">
            <div class="bem-title-row">
              <h2 class="bem-title">Company Information</h2>
              <span class="bem-badge"><span class="material-icons-round">edit</span>EDITING</span>
            </div>
            <div class="bem-meta">
              <span>${m.id}</span><span>•</span>
              <span class="material-icons-round" style="color:#2563eb;">business</span>
              <span>${m.company}</span>
            </div>
          </div>
          <button class="bem-close" onclick="closeModal()"><span class="material-icons-round">close</span></button>
        </div>
        
        <div class="bem-body">
          <div class="bem-grid">
            <div class="bem-field" style="grid-column: span 2;">
              <div style="display:flex; align-items:center; gap:16px; margin-bottom:4px;">
                <div style="width:64px; height:64px; background:#475569; border-radius:50%; color:#fff; display:grid; place-items:center; flex-shrink:0;">
                  <span class="material-icons-round" style="font-size:32px;">person</span>
                </div>
                <div style="display:flex; flex-direction:column; gap:6px;">
                  <button class="bem-btn-cancel" style="padding: 6px 14px; font-size: 0.75rem;">Choose File</button>
                  <span style="color:#94a3b8; font-size:0.7rem; font-weight:600;">No file chosen</span>
                </div>
              </div>
            </div>

            <div class="bem-field">
              <label class="bem-label">GST / VAT</label>
              <input class="bcast-edit-input" type="text" value="${m.gst || '29ABCDE1234F1Z5'}" id="edit-co-gst" data-orig="${m.gst || '29ABCDE1234F1Z5'}" oninput="checkProfileDirty()">
            </div>

            <div class="bem-field">
              <label class="bem-label">Company Name</label>
              <input class="bcast-edit-input" type="text" value="${m.company}" id="edit-co-name" data-orig="${m.company}" oninput="checkProfileDirty()">
            </div>

            <div class="bem-field">
              <label class="bem-label">Email Address</label>
              <input class="bcast-edit-input" type="email" value="${m.email}" id="edit-co-email" data-orig="${m.email}" oninput="checkProfileDirty()">
            </div>

            <div class="bem-field">
              <label class="bem-label">Business Type</label>
              <div class="bem-select-wrap">
                <select class="bcast-edit-select" id="edit-co-type" data-orig="${bType}" onchange="checkProfileDirty()">
                  <option value="Wholesaler" ${bType === 'Wholesaler' ? 'selected' : ''}>Wholesaler</option>
                  <option value="Retailer" ${bType === 'Retailer' ? 'selected' : ''}>Retailer</option>
                  <option value="Manufacturer" ${bType === 'Manufacturer' ? 'selected' : ''}>Manufacturer</option>
                </select>
                <span class="material-icons-round bem-chevron">expand_more</span>
              </div>
            </div>

            <div class="bem-field">
              <label class="bem-label">Website</label>
              <input class="bcast-edit-input" type="text" value="www.${m.company.toLowerCase().replace(/ /g, '')}.com" id="edit-co-website" data-orig="www.${m.company.toLowerCase().replace(/ /g, '')}.com" oninput="checkProfileDirty()">
            </div>

            <div class="bem-field">
              <label class="bem-label">Phone 1</label>
              <input class="bcast-edit-input" type="text" value="${m.mobile}" id="edit-co-phone1" data-orig="${m.mobile}" oninput="checkProfileDirty()">
            </div>

            <div class="bem-field">
              <label class="bem-label">Phone 2</label>
              <input class="bcast-edit-input" type="text" value="${m.phone2 || ''}" id="edit-co-phone2" data-orig="${m.phone2 || ''}" oninput="checkProfileDirty()">
            </div>

            <div class="bem-field bem-field--full">
              <label class="bem-label">About Us</label>
              <div class="bem-textarea-wrap">
                <textarea class="bem-textarea" id="edit-co-about" maxlength="500" data-orig="${m.about || ''}" oninput="checkProfileDirty(); updateBroadcastCharCount(this)">${m.about || ''}</textarea>
                <span class="bem-char-count" id="bcast-char-count">${(m.about || '').length}/500</span>
              </div>
            </div>
          </div>
        </div>

        <div class="bem-footer">
          <button class="bem-btn-cancel" onclick="window.closeModal()">Cancel</button>
          <button class="bem-btn-update" id="profile-update-btn" onclick="saveProfileChanges(${memberId})">
            <span class="material-icons-round">save</span> Update
          </button>
        </div>
      </div>
    `;
  }

  content.innerHTML = html;
  modal.classList.remove('hidden');
}

function openAddModal(type, memberId) {
  const m = members.find(x => x.id === memberId);
  const modal = document.getElementById('modal-container');
  const content = document.getElementById('modal-content');
  let html = '';

  if (type === 'contact') {
    content.className = 'modal-content';
    content.style.maxWidth = '680px';
    html = `
      <div class="bem-wrap">
        <div class="bem-header">
          <div class="bem-header-left">
            <h2 class="bem-title">Add New Contact</h2>
            <div class="bem-meta"><span>${m.company}</span></div>
          </div>
          <button class="bem-close" onclick="closeModal()"><span class="material-icons-round">close</span></button>
        </div>
        <div class="bem-body">
          <div class="bem-grid">
            <div class="bem-field"><label class="bem-label">First Name</label><input class="bcast-edit-input" type="text" id="add-c-fname" placeholder="John"></div>
            <div class="bem-field"><label class="bem-label">Last Name</label><input class="bcast-edit-input" type="text" id="add-c-lname" placeholder="Doe"></div>
            <div class="bem-field"><label class="bem-label">Designation</label><input class="bcast-edit-input" type="text" id="add-c-role" placeholder="Manager"></div>
            <div class="bem-field"><label class="bem-label">Phone</label><input class="bcast-edit-input" type="text" id="add-c-phone" placeholder="+91 0000000000"></div>
            <div class="bem-field bem-field--full"><label class="bem-label">Email</label><input class="bcast-edit-input" type="email" id="add-c-email" placeholder="john.doe@example.com"></div>
          </div>
        </div>
        <div class="bem-footer">
          <button class="bem-btn-cancel" onclick="window.closeModal()">Cancel</button>
          <button class="bem-btn-update" style="display:flex;" onclick="saveNewContact(${memberId})">Add Contact</button>
        </div>
      </div>
    `;
  } else if (type === 'address') {
    content.className = 'modal-content';
    content.style.maxWidth = '580px';
    html = `
      <div class="modal-header"><h3>Add Address</h3><button class="modal-close" onclick="closeModal()"><span class="material-icons-round">close</span></button></div>
      <div class="modal-body" style="padding:32px;">
        <div class="modal-form-row"><label class="modal-label">Title</label><input class="modal-input" type="text" id="add-addr-title" placeholder="e.g. Warehouse"></div>
        <div class="modal-form-row"><label class="modal-label">Address Line 1</label><input class="modal-input" type="text" id="add-addr-line1"></div>
        <div class="modal-form-row"><label class="modal-label">City</label><input class="modal-input" type="text" id="add-addr-city"></div>
        <div class="modal-form-row"><label class="modal-label">Pincode</label><input class="modal-input" type="text" id="add-addr-pincode"></div>
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

window.openComposeModal = function(id) {
  const m = members.find(x => x.id === id);
  const modal = document.getElementById('modal-container');
  const content = document.getElementById('modal-content');
  content.className = 'modal-content';
  content.style.maxWidth = '600px';
  content.innerHTML = `
    <div class="modal-header"><h3>Compose Email</h3><button class="modal-close" onclick="closeModal()"><span class="material-icons-round">close</span></button></div>
    <div class="modal-body" style="padding:32px;">
      <div class="modal-form-row"><label class="modal-label">To</label><input class="modal-input" type="text" value="${m.email}" readonly></div>
      <div class="modal-form-row"><label class="modal-label">Subject</label><input class="modal-input" type="text" id="email-subject"></div>
      <div class="modal-form-row"><label class="modal-label">Message</label><textarea class="modal-input" style="height:150px;" id="email-body"></textarea></div>
    </div>
    <div class="modal-footer">
      <button class="btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn-primary" onclick="showToast('Email sent', 'success'); closeModal();">Send Email</button>
    </div>
  `;
  modal.classList.remove('hidden');
};

window.openStampModal = function(id) {
  const modal = document.getElementById('modal-container');
  const content = document.getElementById('modal-content');
  content.className = 'modal-content';
  content.style.maxWidth = '500px';
  content.innerHTML = `
    <div class="modal-header"><h3>Add Verification Stamp</h3><button class="modal-close" onclick="closeModal()"><span class="material-icons-round">close</span></button></div>
    <div class="modal-body" style="padding:32px;">
      <div class="modal-form-row"><label class="modal-label">Remark</label><textarea class="modal-input" id="stamp-remark"></textarea></div>
    </div>
    <div class="modal-footer">
      <button class="btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn-primary" onclick="showToast('Stamp added', 'success'); closeModal();">Apply Stamp</button>
    </div>
  `;
  modal.classList.remove('hidden');
};


window.openBroadcastHistoryModal = function(memberId, broadcastId, isEditing = false, options = {}) {
  const canEdit = options.canEdit !== undefined ? options.canEdit : true;

  let b = null;
  const m = (typeof members !== 'undefined') ? members.find(x => x.id == memberId) : null;

  if (m) {
    if (!m.broadcasts) {
      m.broadcasts = [
        { id: 'BRD-001', date: '02-05-2026 04:04:28 AM', broadcaster: 'Jayesh Jain', company: 'Speedtech Systems', broadcast: 'WTS Mobile Iphone | Qty : 5 Pcs | Price', sendTo: 'SendToAll', status: 'Live' },
        { id: 'BRD-002', date: '01-05-2026 06:34:49 PM', broadcaster: 'Jayesh Jain', company: 'Speedtech Systems', broadcast: 'WTS Laptop Laptop | Qty : 10 Pcs | Call', sendTo: 'SendToAll', status: 'Live' },
        { id: 'BRD-003', date: '30-04-2026 05:20:35 AM', broadcaster: 'Jayesh Jain', company: 'Speedtech Systems', broadcast: 'WTS Laptop Laptop | Qty : 15 Pcs | Call', sendTo: 'SendToAll', status: 'Live' }
      ];
    }
    b = m.broadcasts.find(x => x.id === broadcastId) || m.broadcasts[0];
  } else {
    // Global search (from broadcast.js data)
    if (window.broadcasts) {
      b = window.broadcasts.find(x => x.id === broadcastId);
      // Map global fields to the modal's expected fields
      if (b && !b.broadcast) b.broadcast = b.message;
      if (b && !b.broadcaster) b.broadcaster = b.broadcaster;
    }
  }

  if (!b) return;

  const bType = (b.broadcast || b.message || "").startsWith('WTS') ? 'Want to sell' : 'Want to buy';
  const mainCat = (b.broadcast || b.message || "").includes('Mobile') ? 'Accessories' : 'Electronics';
  const subCat = (b.broadcast || b.message || "").includes('Iphone') ? 'Chargers' : 'Laptops';
  const qtyMatch = (b.broadcast || b.message || "").match(/Qty : (\d+) (Pcs|Kg)/) || (b.message || "").match(/Qty: (\d+) (Pcs|Kg)/);
  const qty = qtyMatch ? qtyMatch[1] : (b.quantity || '500');
  const unit = qtyMatch ? qtyMatch[2] : (b.unit || 'Pcs');
  const price = (b.broadcast || b.message || "").includes('Price') ? 'Fixed' : 'Quote';

  let content = '';

  if (isEditing) {
    content = `
      <div class="bem-wrap">
        <div class="bem-header">
          <div class="bem-header-left">
            <div class="bem-title-row">
              <h2 class="bem-title">Broadcast Details</h2>
              <span class="bem-badge"><span class="material-icons-round">edit</span>EDITING</span>
            </div>
            <div class="bem-meta">
              <span>${b.id}</span><span>•</span>
              <span class="material-icons-round">person</span>
              <span>${b.broadcaster} · ${b.company}</span>
            </div>
          </div>
          <button class="bem-close" onclick="closeModal()"><span class="material-icons-round">close</span></button>
        </div>
        <div class="bem-body">
          <div class="bem-grid">
            <div class="bem-field">
              <label class="bem-label">Broadcast Type</label>
              <div class="bem-select-wrap">
                <select class="bcast-edit-select" id="edit-broadcast-type" data-orig="${bType}" onchange="checkBroadcastDirty()">
                  <option value="Want to buy" ${bType==='Want to buy'?'selected':''}>Want to buy</option>
                  <option value="Want to sell" ${bType==='Want to sell'?'selected':''}>Want to sell</option>
                </select>
                <span class="material-icons-round bem-chevron">expand_more</span>
              </div>
            </div>
            <div class="bem-field">
              <label class="bem-label">Product Condition</label>
              <div class="bem-select-wrap">
                <select class="bcast-edit-select" id="edit-condition" data-orig="New" onchange="checkBroadcastDirty()">
                  <option value="New" selected>New</option>
                  <option value="Used">Used</option>
                </select>
                <span class="material-icons-round bem-chevron">expand_more</span>
              </div>
            </div>
            <div class="bem-field">
              <label class="bem-label">Main Category</label>
              <div class="bem-select-wrap">
                <select class="bcast-edit-select" id="edit-main-cat" data-orig="${mainCat}" onchange="checkBroadcastDirty()">
                  <option value="Accessories" ${mainCat==='Accessories'?'selected':''}>Accessories</option>
                  <option value="Electronics" ${mainCat==='Electronics'?'selected':''}>Electronics</option>
                  <option value="Mobile" ${mainCat==='Mobile'?'selected':''}>Mobile</option>
                </select>
                <span class="material-icons-round bem-chevron">expand_more</span>
              </div>
            </div>
            <div class="bem-field">
              <label class="bem-label">Sub Category</label>
              <div class="bem-select-wrap">
                <select class="bcast-edit-select" id="edit-sub-cat" data-orig="${subCat}" onchange="checkBroadcastDirty()">
                  <option value="Chargers" ${subCat==='Chargers'?'selected':''}>Chargers</option>
                  <option value="Laptops" ${subCat==='Laptops'?'selected':''}>Laptops</option>
                  <option value="iPhone" ${subCat==='iPhone'?'selected':''}>iPhone</option>
                </select>
                <span class="material-icons-round bem-chevron">expand_more</span>
              </div>
            </div>
            <div class="bem-field bem-field--full">
              <label class="bem-label">Message</label>
              <div class="bem-textarea-wrap">
                <textarea class="bem-textarea" id="edit-message" maxlength="500" data-orig="${b.broadcast || b.message}" oninput="checkBroadcastDirty(); updateBroadcastCharCount(this)">${b.broadcast || b.message}</textarea>
                <span class="bem-char-count" id="bcast-char-count">${(b.broadcast || b.message).length}/500</span>
              </div>
            </div>
            <div class="bem-field">
              <label class="bem-label">Quantity</label>
              <div class="bem-inline">
                <input type="text" class="bcast-edit-input" id="edit-qty" value="${qty}" data-orig="${qty}" oninput="checkBroadcastDirty()" style="flex:2;min-width:0;">
                <div class="bem-select-wrap" style="flex:1;">
                  <select class="bcast-edit-select" id="edit-unit" data-orig="${unit}" onchange="checkBroadcastDirty()">
                    <option value="Pcs" ${unit==='Pcs'?'selected':''}>Pcs</option>
                    <option value="Kg" ${unit==='Kg'?'selected':''}>Kg</option>
                    <option value="MT" ${unit==='MT'?'selected':''}>MT</option>
                  </select>
                  <span class="material-icons-round bem-chevron">expand_more</span>
                </div>
              </div>
            </div>
            <div class="bem-field">
              <label class="bem-label">Price Option</label>
              <div class="bem-inline">
                <div class="bem-select-wrap" style="flex:1;">
                  <select class="bcast-edit-select" id="edit-price-opt" data-orig="${price}" onchange="checkBroadcastDirty()">
                    <option value="Quote" ${price==='Quote'?'selected':''}>Quote</option>
                    <option value="Fixed" ${price==='Fixed'?'selected':''}>Fixed</option>
                  </select>
                  <span class="material-icons-round bem-chevron">expand_more</span>
                </div>
                <input type="text" class="bcast-edit-input" id="edit-price-val" value="0" data-orig="0" oninput="checkBroadcastDirty()" placeholder="Amount" style="flex:1;min-width:0;">
              </div>
            </div>
            <div class="bem-field">
              <label class="bem-label">Sending Option</label>
              <div class="bem-select-wrap">
                <select class="bcast-edit-select" id="edit-send-opt" data-orig="${b.sendTo || b.sendingOption}" onchange="checkBroadcastDirty()">
                  <option value="${b.sendTo || b.sendingOption}" selected>${b.sendTo || b.sendingOption}</option>
                  <option value="Send to All">Send to All</option>
                  <option value="Send to group">Send to group</option>
                </select>
                <span class="material-icons-round bem-chevron">expand_more</span>
              </div>
            </div>
            <div class="bem-field">
              <label class="bem-label">Audience</label>
              <div class="bem-select-wrap">
                <select class="bcast-edit-select" id="edit-audience" data-orig="${b.audience || 'All Members'}" onchange="checkBroadcastDirty()">
                  <option value="${b.audience || 'All Members'}" selected>${b.audience || 'All Members'}</option>
                  <option value="Charger suppliers">Charger suppliers</option>
                  <option value="All Members">All Members</option>
                </select>
                <span class="material-icons-round bem-chevron">expand_more</span>
              </div>
            </div>
          </div>
        </div>
        <div class="bem-footer">
          <button class="bem-btn-cancel" onclick="window.openBroadcastHistoryModal('${memberId}', '${b.id}', false)">Cancel</button>
          <button class="bem-btn-update" id="bcast-update-btn" onclick="saveBroadcastChanges('${memberId}', '${b.id}')" style="display:none;">
            <span class="material-icons-round">save</span> Update
          </button>
        </div>
      </div>
    `;
  } else {
    content = `
      <div class="modal-header-modern" style="padding: 20px 24px; border-bottom: 1px solid #f1f5f9;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <div>
            <h2 style="font-family:'Outfit',sans-serif; font-size: 1.25rem; font-weight: 800; color: #1e293b; margin:0;">Broadcast Details</h2>
            <div class="modal-header-meta" style="display:flex; align-items:center; gap:8px; margin-top:8px; font-size:0.85rem; color:#64748b; font-weight:600;">
              <span>${b.id}</span>
              <span style="font-size:18px;">•</span>
              <span class="material-icons-round" style="color: #2563eb; font-size:16px;">person</span>
              <span>${b.broadcaster} · ${b.company}</span>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 16px;">
            ${canEdit ? `
            <button onclick="openBroadcastHistoryModal('${memberId}', '${b.id}', true)" style="display:flex; align-items:center; gap:6px; border:1.5px solid #dbeafe; border-radius:8px; background:#fff; color:#2563eb; font-weight:800; font-size:0.9rem; cursor:pointer; padding:7px 14px;">
              <span class="material-icons-round" style="font-size:17px;">edit</span> Edit
            </button>
            ` : ''}
            <button onclick="closeModal()" style="background:none; border:none; color:#94a3b8; cursor:pointer;"><span class="material-icons-round">close</span></button>
          </div>
        </div>
      </div>
      <div class="details-grid-modern" style="padding: 24px; display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
        <div class="detail-box">
          <span class="detail-label" style="display:block; font-size:0.75rem; font-weight:800; color:#94a3b8; text-transform:uppercase; margin-bottom:8px;">Broadcast Type</span>
          <span style="font-size:0.95rem; font-weight:700; color:#1e293b;">${bType}</span>
        </div>
        <div class="detail-box">
          <span class="detail-label" style="display:block; font-size:0.75rem; font-weight:800; color:#94a3b8; text-transform:uppercase; margin-bottom:8px;">Product Condition</span>
          <span style="font-size:0.95rem; font-weight:700; color:#1e293b;">New</span>
        </div>
        <div class="detail-box">
          <span class="detail-label" style="display:block; font-size:0.75rem; font-weight:800; color:#94a3b8; text-transform:uppercase; margin-bottom:8px;">Main Category</span>
          <span style="font-size:0.95rem; font-weight:700; color:#1e293b;">${mainCat}</span>
        </div>
        <div class="detail-box">
          <span class="detail-label" style="display:block; font-size:0.75rem; font-weight:800; color:#94a3b8; text-transform:uppercase; margin-bottom:8px;">Sub Category</span>
          <span style="font-size:0.95rem; font-weight:700; color:#1e293b;">${subCat}</span>
        </div>
        <div class="detail-box" style="grid-column: span 2;">
          <span class="detail-label" style="display:block; font-size:0.75rem; font-weight:800; color:#94a3b8; text-transform:uppercase; margin-bottom:8px;">Message</span>
          <div style="padding:12px 14px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; font-size:0.9rem; color:#475569; line-height:1.6;">${b.broadcast || b.message}</div>
        </div>
        <div class="detail-box">
          <span class="detail-label" style="display:block; font-size:0.75rem; font-weight:800; color:#94a3b8; text-transform:uppercase; margin-bottom:8px;">Quantity</span>
          <span style="font-size:0.95rem; font-weight:700; color:#1e293b;">${qty} <span style="color:#94a3b8; font-weight:600;">${unit}</span></span>
        </div>
        <div class="detail-box">
          <span class="detail-label" style="display:block; font-size:0.75rem; font-weight:800; color:#94a3b8; text-transform:uppercase; margin-bottom:8px;">Price</span>
          <span style="font-size:0.95rem; font-weight:700; color:#94a3b8;">${price}</span>
        </div>
        <div class="detail-box">
          <span class="detail-label" style="display:block; font-size:0.75rem; font-weight:800; color:#94a3b8; text-transform:uppercase; margin-bottom:8px;">Sending Option</span>
          <span style="font-size:0.95rem; font-weight:700; color:#1e293b;">${b.sendTo || b.sendingOption}</span>
        </div>
        <div class="detail-box">
          <span class="detail-label" style="display:block; font-size:0.75rem; font-weight:800; color:#94a3b8; text-transform:uppercase; margin-bottom:8px;">Audience</span>
          <span style="font-size:0.95rem; font-weight:700; color:#1e293b;">${b.audience || 'All Members'}</span>
        </div>
      </div>
      <div style="padding: 0 24px 16px 24px; display:flex; align-items:center; gap:6px; font-size:0.78rem; color:#94a3b8; font-weight:600;">
        <span class="material-icons-round" style="font-size:14px;">schedule</span> Submitted ${b.submittedAt || '28 mins ago'}
      </div>
      <div class="modal-footer" style="padding: 16px 24px; border-top: 1px solid #f1f5f9; display: flex; justify-content: space-between; align-items: center; background: #fff; border-radius: 0 0 20px 20px;">
        <button onclick="window.closeModal()" style="display:flex; align-items:center; gap:8px; border:1.5px solid #e2e8f0; border-radius:10px; background:#fff; color:#64748b; font-weight:700; font-size:0.9rem; cursor:pointer; padding:8px 16px;">Cancel</button>
        <div style="display: flex; gap: 10px;">
          <button onclick="handleBroadcastAction('Hide', '${memberId}', '${b.id}')" style="display:flex; align-items:center; gap:6px; padding: 8px 16px; border: none; border-radius: 10px; background: #FFF7ED; color: #A34E0C; font-weight: 800; font-size: 0.88rem; cursor: pointer;">
            <span class="material-icons-round" style="font-size:16px;">visibility_off</span> Hide
          </button>
          ${(!memberId || memberId === 'null') ? `
          <button onclick="handleBroadcastAction('Suspend', '${memberId}', '${b.id}')" style="display:flex; align-items:center; gap:6px; padding: 8px 16px; border: none; border-radius: 10px; background: #FEF2F2; color: #991B1B; font-weight: 800; font-size: 0.88rem; cursor: pointer;">
            <span class="material-icons-round" style="font-size:16px;">block</span> Suspend
          </button>
          ` : ''}
          <button onclick="handleBroadcastAction('${(!memberId || memberId === 'null') ? 'Approve' : 'Live'}', '${memberId}', '${b.id}')" style="display:flex; align-items:center; gap:6px; padding: 8px 16px; border: none; border-radius: 10px; background: #E8F5EC; color: #15803D; font-weight: 800; font-size: 0.88rem; cursor: pointer;">
            <span class="material-icons-round" style="font-size:16px;">check_circle</span> ${(!memberId || memberId === 'null') ? 'Approve' : 'Live'}
          </button>
        </div>
      </div>

    `;
  }

  const modal = document.getElementById('modal-container');
  const contentEl = document.getElementById('modal-content');
  if (!modal || !contentEl) return;
  contentEl.className = 'modal-content modal-stamp';
  contentEl.style.maxWidth = '800px';
  contentEl.innerHTML = content;
  modal.classList.remove('hidden');

  window.currentBroadcastInitialStatus = b.status === 'Active' ? 'Live' : b.status;
};

window.saveBroadcastChanges = function(memberId, broadcastId) {
  let b = null;
  if (memberId && memberId !== 'null') {
    const m = members.find(x => x.id == memberId);
    if (m && m.broadcasts) b = m.broadcasts.find(x => x.id === broadcastId);
  } else {
    if (window.broadcasts) b = window.broadcasts.find(x => x.id === broadcastId);
  }
  
  if (!b) return;

  const newMsg = document.getElementById('edit-message').value;
  const newQty = document.getElementById('edit-qty').value;
  const newUnit = document.getElementById('edit-unit').value;
  
  if (b.broadcast) b.broadcast = newMsg;
  if (b.message) b.message = newMsg;
  if (b.quantity) b.quantity = newQty;
  if (b.unit) b.unit = newUnit;

  showToast('Broadcast updated successfully', 'success');
  openBroadcastHistoryModal(memberId, broadcastId, false);
  
  // Refresh the main table
  if (window.renderBroadcastTable) window.renderBroadcastTable();
  if (memberId && memberId !== 'null' && typeof switchTab === 'function') switchTab(memberId, 'broadcasts');
};

window.handleBroadcastAction = function(action, memberId, broadcastId) {
  let b = null;
  if (memberId && memberId !== 'null') {
    const m = (typeof members !== 'undefined') ? members.find(x => x.id == memberId) : null;
    if (m && m.broadcasts) b = m.broadcasts.find(x => x.id === broadcastId);
  } else {
    if (window.broadcasts) b = window.broadcasts.find(x => x.id === broadcastId);
    if (!b && window.pendingBroadcasts) b = window.pendingBroadcasts.find(x => x.id === broadcastId);
  }
  
  if (!b) return;

  if (action === 'Hide' || action === 'Suspend') {
    openProfileDecisionModal(action.toLowerCase(), broadcastId, (reason) => {
      b.status = action === 'Hide' ? 'Hidden' : 'Suspended';
      b.actionReason = reason; // Store reason
      showToast(`Broadcast ${action === 'Hide' ? 'hidden' : 'suspended'} successfully`, action === 'Hide' ? 'success' : 'error');
      closeModal();
      
      // Remove from pending if in dashboard
      if (window.pendingBroadcasts) {
        const idx = window.pendingBroadcasts.findIndex(pb => pb.id === broadcastId);
        if (idx !== -1) window.pendingBroadcasts.splice(idx, 1);
      }

      if (window.renderBroadcastTable) window.renderBroadcastTable();
      if (window.renderDashBroadcastTable) window.renderDashBroadcastTable();
      if (memberId && memberId !== 'null' && typeof switchTab === 'function') switchTab(memberId, 'broadcasts');
    });
  } else {
    // Approve or Live
    b.status = 'Approved';
    showToast(`Broadcast is now ${action === 'Approve' ? 'Approved' : 'Live'}`, 'success');
    closeModal();
    
    // Remove from pending if in dashboard
    if (window.pendingBroadcasts) {
      const idx = window.pendingBroadcasts.findIndex(pb => pb.id === broadcastId);
      if (idx !== -1) window.pendingBroadcasts.splice(idx, 1);
    }

    if (window.renderBroadcastTable) window.renderBroadcastTable();
    if (window.renderDashBroadcastTable) window.renderDashBroadcastTable();
    if (memberId && memberId !== 'null' && typeof switchTab === 'function') switchTab(memberId, 'broadcasts');
  }
};



window.openProfileDecisionModal = function(type, id, onConfirm) {
    const isSuspend = type === 'suspend';
    const overlay = document.createElement('div');
    overlay.className = 'decision-modal-overlay';
    overlay.id = 'decision-modal';
    const title = isSuspend ? 'Suspend broadcast' : 'Hide broadcast';
    const btnText = isSuspend ? 'Confirm Suspend' : 'Confirm Hide';
    const icon = isSuspend ? 'block' : 'visibility_off';
    const iconColor = isSuspend ? '#dc2626' : '#f59e0b';

    overlay.innerHTML = `
        <div class="decision-modal-content" style="max-width: 480px;">
            <button onclick="closeProfileDecisionModal()" style="position:absolute; top:24px; right:24px; background:none; border:none; color:#94a3b8; cursor:pointer;"><span class="material-icons-round">close</span></button>
            <div style="display:flex; align-items:center; gap:16px; margin-bottom:16px;">
                <div style="width:40px; height:40px; border-radius:10px; background:${iconColor}15; color:${iconColor}; display:grid; place-items:center;">
                    <span class="material-icons-round">${icon}</span>
                </div>
                <h3 style="margin:0; font-family:'Outfit',sans-serif; font-weight:800; color:#1e293b;">${title}</h3>
            </div>
            <p style="margin:0 0 16px 0; color:#64748b; font-size:0.92rem; line-height:1.6;">
                Are you sure you want to ${type} this broadcast? Please provide a reason for this action.
            </p>
            <div style="margin-bottom: 24px;">
                <textarea id="decision-reason" placeholder="Type reason here..." style="width:100%; height:80px; padding:12px; border:1.5px solid #e2e8f0; border-radius:10px; font-family:inherit; font-size:0.9rem; resize:none; outline:none;" oninput="this.style.borderColor = this.value ? '#4880FF' : '#e2e8f0'"></textarea>
            </div>
            <div style="display:flex; gap:12px; justify-content:flex-end;">
                <button onclick="closeProfileDecisionModal()" style="padding:10px 20px; border-radius:10px; border:1.5px solid #e2e8f0; background:#fff; color:#64748b; font-weight:700; cursor:pointer;">Cancel</button>
                <button id="confirm-decision-btn" style="padding:10px 20px; border-radius:10px; border:none; background:${iconColor}; color:#fff; font-weight:800; cursor:pointer;">${btnText}</button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);
    document.getElementById('confirm-decision-btn').onclick = () => {
      const reason = document.getElementById('decision-reason').value;
      if (!reason) {
          document.getElementById('decision-reason').style.borderColor = '#dc2626';
          return;
      }
      if (onConfirm) onConfirm(reason);
      closeProfileDecisionModal();
    };
};


window.closeProfileDecisionModal = function() {
    const modal = document.getElementById('decision-modal');
    if (modal) modal.remove();
};

window.checkBroadcastDirty = function() {
  const btn = document.getElementById('bcast-update-btn');
  if (!btn) return;
  
  let isDirty = false;
  const selects = document.querySelectorAll('.bcast-edit-select');
  selects.forEach(s => {
    if (s.value !== s.getAttribute('data-orig')) isDirty = true;
  });
  
  const inputs = document.querySelectorAll('.bcast-edit-input');
  inputs.forEach(i => {
    if (i.value !== i.getAttribute('data-orig')) isDirty = true;
  });
  
  const msg = document.getElementById('edit-message');
  if (msg && msg.value !== msg.getAttribute('data-orig')) isDirty = true;
  
  btn.style.display = isDirty ? 'flex' : 'none';
};

window.updateBroadcastCharCount = function(textarea) {
  const count = document.getElementById('bcast-char-count');
  if (count) count.textContent = `${textarea.value.length}/500`;
};

window.checkProfileDirty = function() {
  const btn = document.getElementById('profile-update-btn');
  if (!btn) return;
  
  let isDirty = false;
  const selects = document.querySelectorAll('.bcast-edit-select');
  selects.forEach(s => {
    if (s.value !== s.getAttribute('data-orig')) isDirty = true;
  });
  
  const inputs = document.querySelectorAll('.bcast-edit-input');
  inputs.forEach(i => {
    if (i.value !== i.getAttribute('data-orig')) isDirty = true;
  });
  
  const textarea = document.querySelector('.bem-textarea');
  if (textarea && textarea.value !== textarea.getAttribute('data-orig')) isDirty = true;
  
  btn.style.display = isDirty ? 'flex' : 'none';
};

window.saveProfileChanges = function(id) {
  const m = members.find(x => x.id === id);
  if (!m) return;
  
  m.gst = document.getElementById('edit-co-gst').value;
  m.company = document.getElementById('edit-co-name').value;
  m.email = document.getElementById('edit-co-email').value;
  m.companyType = document.getElementById('edit-co-type').value;
  m.mobile = document.getElementById('edit-co-phone1').value;
  m.phone2 = document.getElementById('edit-co-phone2').value;
  const about = document.getElementById('edit-co-about');
  if (about) m.about = about.value;
  
  showToast('Profile updated successfully', 'success');
  closeModal();
  switchTab(id, 'company');
};

window.saveContactChanges = function(memberId, index) {
  const m = members.find(x => x.id === memberId);
  if (!m || !m.contacts[index]) return;
  
  const c = m.contacts[index];
  const fname = document.getElementById('edit-c-fname').value;
  const lname = document.getElementById('edit-c-lname').value;
  c.name = `${fname} ${lname}`.trim();
  c.role = document.getElementById('edit-c-role').value;
  c.status = document.getElementById('edit-c-status').value;
  
  showToast('Contact updated successfully', 'success');
  closeModal();
  switchTab(memberId, 'contact-table');
};

window.saveAddress = function(memberId, index) {
  const m = members.find(x => x.id === memberId);
  if (!m || !m.addresses[index]) return;
  
  const a = m.addresses[index];
  a.title = document.getElementById('edit-addr-title').value;
  a.line1 = document.getElementById('edit-addr-line1').value;
  a.line2 = document.getElementById('edit-addr-line2').value;
  a.city = document.getElementById('edit-addr-city').value;
  a.pincode = document.getElementById('edit-addr-pincode').value;
  a.isDefault = document.getElementById('edit-addr-default').checked;
  
  if (a.isDefault) {
    m.addresses.forEach((addr, i) => { if (i !== index) addr.isDefault = false; });
  }
  
  showToast('Address updated', 'success');
  closeModal();
  switchTab(memberId, 'addresses');
};

window.saveNewContact = function(memberId) {
  const m = members.find(x => x.id === memberId);
  if (!m) return;
  
  const fname = document.getElementById('add-c-fname').value;
  const lname = document.getElementById('add-c-lname').value;
  const role = document.getElementById('add-c-role').value;
  const phone = document.getElementById('add-c-phone').value;
  const email = document.getElementById('add-c-email').value;
  
  m.contacts.push({
    name: `${fname} ${lname}`.trim(),
    role: role,
    mobile: phone,
    email: email,
    status: 'Active'
  });
  
  showToast('Contact added', 'success');
  closeModal();
  switchTab(memberId, 'contact-table');
};

window.saveNewAddress = function(memberId) {
  const m = members.find(x => x.id === memberId);
  if (!m) return;
  
  const title = document.getElementById('add-addr-title').value;
  const line1 = document.getElementById('add-addr-line1').value;
  const city = document.getElementById('add-addr-city').value;
  const pincode = document.getElementById('add-addr-pincode').value;
  
  m.addresses.push({
    title: title,
    line1: line1,
    city: city,
    pincode: pincode,
    isDefault: false
  });
  
  showToast('Address added', 'success');
  closeModal();
  switchTab(memberId, 'addresses');
};

window.deleteStamp = function(memberId, stampId) {
  const m = members.find(x => x.id === memberId);
  if (m && m.stamps) {
    m.stamps = m.stamps.filter(s => s.id !== stampId);
    showToast('Stamp removed', 'error');
    switchTab(memberId, 'stamps');
  }
};

window.toggleEmailRow = function(id) {
  const content = document.getElementById(`email-content-${id}`);
  const icon = document.getElementById(`email-icon-${id}`);
  if (content) {
    const isHidden = content.style.display === 'none' || !content.style.display;
    content.style.display = isHidden ? 'block' : 'none';
    if (icon) icon.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
  }
};

window.renderCustomSelect = function(id, options, selectedValue, onchange, config = {}) {
  const compact = config.compact || false;
  
  return `
    <div class="bem-select-wrap ${compact ? 'bem-select-wrap--compact' : ''}">
      <select class="bcast-edit-select" id="${id}" data-orig="${selectedValue}" onchange="${onchange ? (onchange.includes('(') ? onchange : onchange + '(this.value)') : ''}">
        ${options.map(o => `<option value="${o.value}" ${o.value === selectedValue ? 'selected' : ''}>${o.label}</option>`).join('')}
      </select>
      <span class="material-icons-round bem-chevron">expand_more</span>
    </div>
  `;
};

// ===== SIDEBAR & MENU TOGGLES =====
window.toggleNavGroup = function(btn) {
    const group = btn.closest('.nav-group');
    const sub = group.querySelector('.nav-sub');
    const isOpen = group.classList.contains('open');
    
    document.querySelectorAll('.nav-group.open').forEach(g => {
        if (g !== group) {
            g.classList.remove('open');
            if (g.querySelector('.nav-sub')) g.querySelector('.nav-sub').style.height = '0px';
        }
    });

    if (isOpen) {
        group.classList.remove('open');
        if (sub) sub.style.height = '0px';
    } else {
        group.classList.add('open');
        if (sub) sub.style.height = sub.scrollHeight + 'px';
    }
};

function setupSidebarToggles() {
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) {
        menuToggle.onclick = () => {
            document.getElementById('sidebar').classList.toggle('collapsed');
        };
    }
    
    const sidebarToggle = document.getElementById('sidebar-toggle');
    if (sidebarToggle) {
        sidebarToggle.onclick = () => {
            const sidebar = document.getElementById('sidebar');
            const icon = document.getElementById('sidebar-toggle-icon');
            sidebar.classList.toggle('collapsed');
            if (icon) {
                icon.textContent = sidebar.classList.contains('collapsed') ? 'chevron_right' : 'chevron_left';
            }
        };
    }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Initial render
    if (getTbody()) {
        renderTable();
    }
    
    // Check for deep links (Profile view, etc.)
    checkUrlParams();
    
    // Setup sidebar and menu toggles
    setupSidebarToggles();

    // Global Search Listener
    const searchInput = document.getElementById('top-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase();
            currentPage = 1;
            renderTable();
        });
    }
});

// Handle browser back/forward buttons
window.addEventListener('popstate', checkUrlParams);

window.closeModal = function() {
  const modal = document.getElementById('modal-container');
  if (modal) {
    modal.classList.add('hidden');
    // Also clear any decision modal if open
    const decisionModal = document.getElementById('decision-modal');
    if (decisionModal) decisionModal.remove();
  }
};

window.closeProfileDecisionModal = function() {
    const modal = document.getElementById('decision-modal');
    if (modal) modal.remove();
};

// ===== BROADCAST SETTINGS ACCORDION (DROPDOWN) =====
window.toggleBroadcastAccordion = function(safeId, rowEl) {
  const expandRow = document.getElementById(`expand-${safeId}`);
  if (!expandRow) return;

  const isOpening = expandRow.style.display === 'none';

  // 1. Close all other accordions first
  document.querySelectorAll('[id^="expand-"]').forEach(row => {
    if (row.id !== `expand-${safeId}`) {
      row.style.display = 'none';
      const parentId = row.id.replace('expand-', 'row-');
      const parent = document.getElementById(parentId);
      if (parent) {
        parent.classList.remove('active-edit');
        parent.style.background = 'transparent';
        const icon = parent.querySelector('.category-icon');
        if (icon) icon.style.color = '#64748b';
        const label = parent.querySelector('.category-name-label');
        if (label) label.style.color = '#1e293b';
        const chevron = parent.querySelector('.chevron-icon');
        if (chevron) {
          chevron.textContent = 'chevron_right';
          chevron.style.color = '#94a3b8';
        }
      }
    }
  });

  // 2. Toggle current accordion
  if (isOpening) {
    expandRow.style.display = 'table-row';
    rowEl.classList.add('active-edit');
    rowEl.style.background = 'var(--blue-light)';
    
    const icon = rowEl.querySelector('.category-icon');
    if (icon) icon.style.color = 'var(--blue)';
    const label = rowEl.querySelector('.category-name-label');
    if (label) label.style.color = 'var(--blue)';
    const chevron = rowEl.querySelector('.chevron-icon');
    if (chevron) {
      chevron.textContent = 'expand_more';
      chevron.style.color = 'var(--blue)';
    }
    
    // Smooth scroll if needed
    expandRow.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  } else {
    expandRow.style.display = 'none';
    rowEl.classList.remove('active-edit');
    rowEl.style.background = 'transparent';
    
    const icon = rowEl.querySelector('.category-icon');
    if (icon) icon.style.color = '#64748b';
    const label = rowEl.querySelector('.category-name-label');
    if (label) label.style.color = '#1e293b';
    const chevron = rowEl.querySelector('.chevron-icon');
    if (chevron) {
      chevron.textContent = 'chevron_right';
      chevron.style.color = '#94a3b8';
    }
  }
};

window.saveAccordionEdit = function(cat, event) {
  if (event) event.stopPropagation();
  showToast(`${cat} Configuration Updated`, 'success');
  const safeId = cat.replace(/\s+/g, '-');
  window.toggleBroadcastAccordion(safeId, document.getElementById(`row-${safeId}`));
};


