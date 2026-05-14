// ===== DATA =====
let plans = [
  {
    id: 1, name: "TK-LITE", price: 0, validity: "monthly", broadcast: 5,
    email: "lite@tk.com", status: "Active", color: "#475569",
    flags: { state: true, city: true, contacts: false, phone: true, address: false }
  },
  {
    id: 2, name: "TK-PREMIUM", price: 18500, validity: "yearly", broadcast: 100,
    email: "premium@tk.com", status: "Active", color: "#8b5cf6",
    flags: { state: true, city: true, contacts: true, phone: true, address: true }
  },
  {
    id: 3, name: "TK-STANDARD", price: 15000, validity: "monthly", broadcast: 50,
    email: "standard@tk.com", status: "Active", color: "#10b981",
    flags: { state: true, city: true, contacts: true, phone: true, address: true }
  },
  {
    id: 4, name: "TK FREE", price: 0, validity: "15days", broadcast: 2,
    email: "free@tk.com", status: "Active", color: "#94a3b8",
    flags: { state: false, city: false, contacts: false, phone: false, address: false }
  }
];

const VALIDITY_LABELS = { monthly: "1 Month", quarterly: "3 Months", halfyearly: "6 Months", yearly: "1 Year", "15days": "15 Days" };
const COLORS = ["#1e293b", "#475569", "#64748b", "#94a3b8", "#cbd5e1", "#e2e8f0"];

const FLAG_DEFS = [
  { key: 'sendall',  label: 'Send to all' },
  { key: 'state',    label: 'State' },
  { key: 'city',     label: 'City' },
  { key: 'contacts', label: 'Add Conacts' },
  { key: 'address',  label: 'Address Book' },
  { key: 'phone',    label: 'Phone no (Show / Hide)' },
];

var currentFilter = 'active';

// ===== RENDER =====
function renderPlansTable(customList = null) {
  const tbody = document.getElementById('plans-tbody');
  if (!tbody) return;

  const list = customList || (currentFilter === 'all' 
    ? plans 
    : plans.filter(p => p.status.toLowerCase() === currentFilter));

  updateBadges();

  if (!list.length) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;padding:60px;color:var(--text-soft);font-weight:600;">No plans found matching "${currentFilter}".</td></tr>`;
    return;
  }

  tbody.innerHTML = list.map((p, i) => {
    const vLabel = VALIDITY_LABELS[p.validity] || p.validity;
    let statusClass = p.status === 'Active' ? 'badge-active' : 'badge-inactive';

    return `
      <tr style="cursor:default;">
        <td style="text-align: center;">
          <span style="color: #475569; font-weight: 700; font-size: 0.82rem;">${String(i + 1).padStart(2, '0')}</span>
        </td>
        <td>
          <span style="font-weight: 600; color: var(--text); font-size: 0.88rem; text-transform: capitalize;">${p.name.toLowerCase()}</span>
        </td>
        <td>
          <span style="color: #64748b; font-weight: 600; font-size: 0.82rem;">${vLabel}</span>
        </td>
        <td>
          <span style="font-weight: 600; color: var(--text); font-size: 0.88rem;">${p.price === 0 ? 'Free' : Number(p.price).toLocaleString()}</span>
        </td>
        <td>
          <div style="display: flex; align-items: center; gap: 12px;">
            <button class="features-toggle-btn" onclick="toggleFeatures(event, ${p.id})" style="width: 28px; height: 28px; background: #fff; color: #4880FF; border: 1px solid #e2e8f0; border-radius: 8px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
              <span class="material-icons-round" style="font-size: 18px;">expand_more</span>
            </button>
            <span style="font-size: 0.85rem; color: #475569; font-weight: 700;">${p.broadcast} Broadcasts</span>
          </div>
        </td>
        <td style="text-align:center;">
          <span class="status-badge ${statusClass}">${p.status}</span>
        </td>
        <td style="text-align:right;">
          <div style="display:flex; align-items:center; justify-content:flex-end; gap:8px;">
            <button class="header-icon-btn" onclick="openPlanModal(${p.id})">
              <span class="material-icons-round" style="font-size:20px;">edit</span>
            </button>
            <button class="header-icon-btn" style="color:#ef4444;" onclick="deletePlan(${p.id})">
              <span class="material-icons-round" style="font-size:20px;">delete_outline</span>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function toggleFeatures(e, id) {
  e.stopPropagation();
  const btn = e.currentTarget;
  const rect = btn.getBoundingClientRect();
  
  // Close any existing dropdowns
  document.querySelectorAll('.dropdown-pop').forEach(d => {
    if (d.id !== `features-pop-${id}`) d.remove();
  });

  const existing = document.getElementById(`features-pop-${id}`);
  if (existing) {
    existing.remove();
    return;
  }

  const p = plans.find(x => x.id === id);
  const pop = document.createElement('div');
  pop.id = `features-pop-${id}`;
  pop.className = 'dropdown-pop';
  
  // Dynamic positioning to prevent cutoff
  const popHeight = 280; // Estimated
  const spaceBelow = window.innerHeight - rect.bottom;
  const showAbove = spaceBelow < popHeight && rect.top > popHeight;

  pop.style.cssText = `
    position: fixed;
    ${showAbove ? `bottom: ${window.innerHeight - rect.top + 8}px;` : `top: ${rect.bottom + 8}px;`}
    left: ${rect.left}px;
    width: 280px;
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    box-shadow: 0 12px 40px rgba(0,0,0,0.15);
    z-index: 9999;
    padding: 20px;
  `;

  pop.innerHTML = `
    <div style="display:flex; justify-content:space-between; margin-bottom: 16px; padding-bottom: 10px; border-bottom: 1px solid #f1f5f9;">
      <span style="font-weight: 800; color: #64748b; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.5px;">Features</span>
      <span style="font-weight: 800; color: #64748b; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.5px;">Included</span>
    </div>
    <div style="display:flex; flex-direction:column; gap:12px;">
      <div style="display:flex; justify-content:space-between; align-items: center;">
        <span style="color:#475569; font-weight:600; font-size:0.85rem;">Daily Broadcast</span>
        <span style="font-weight:700; color:#1e293b; font-size:0.85rem;">${p.broadcast}</span>
      </div>
      <div style="display:flex; justify-content:space-between; align-items: center;">
        <span style="color:#475569; font-weight:600; font-size:0.85rem;">Daily Direct Email</span>
        <span style="font-weight:700; color:#1e293b; font-size:0.85rem;">${p.email.includes('@') ? 'Yes' : p.email}</span>
      </div>
      ${FLAG_DEFS.map(f => `
        <div style="display:flex; justify-content:space-between; align-items: center;">
          <span style="color:#475569; font-weight:600; font-size:0.85rem;">${f.label}</span>
          <span class="material-icons-round" style="font-size:18px; color:${p.flags[f.key] ? '#1e293b' : '#94a3b8'};">
            ${p.flags[f.key] ? 'check' : 'close'}
          </span>
        </div>
      `).join('')}
    </div>
  `;

  document.body.appendChild(pop);

  // Close on outside click
  const closePop = (ev) => {
    if (!pop.contains(ev.target) && ev.target !== btn) {
      pop.remove();
      document.removeEventListener('click', closePop);
    }
  };
  document.addEventListener('click', closePop);
}

function setFilter(f) {
  currentFilter = f;
  document.querySelectorAll('.tab-item').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-filter') === f);
  });
  renderPlansTable();
}

function updateBadges() {
  const all = plans.length;
  const active = plans.filter(p => p.status === 'Active').length;
  const inactive = plans.filter(p => p.status === 'Inactive').length;

  const bAll = document.getElementById('badge-all');
  const bActive = document.getElementById('badge-active');
  const bInactive = document.getElementById('badge-inactive');

  if (bAll) bAll.textContent = all;
  if (bActive) bActive.textContent = active;
  if (bInactive) bInactive.textContent = inactive;
}

// ===== MODAL =====
let editingId = null;

function openPlanModal(id) {
  editingId = id || null;
  const modal = document.getElementById('modal-container');
  const content = document.getElementById('modal-content');
  content.className = 'modal-content'; // Reset to standard width

  let p = {
    name: '', price: '', validity: 'monthly', broadcast: '', email: '', status: 'Active',
    flags: { sendall: true, state: true, city: true, contacts: false, phone: true, address: false }
  };

  if (id) {
    p = plans.find(x => x.id === id);
  }

  // Compact width for perfect fit
  content.style.maxWidth = '780px';
  content.style.width = '95%';

    content.innerHTML = `
    <div class="modal-header">
      <h3 style="margin:0;">${id ? 'Edit Plan' : 'Add Plan'}</h3>
      <button class="modal-close" onclick="closeModal()"><span class="material-icons-round">close</span></button>
    </div>

    <div class="modal-body" style="padding: 24px 28px; width: 100%;">
      <div style="display: grid; grid-template-columns: 1fr 1.1fr; gap: 36px;">
        
        <!-- LEFT COLUMN: PRIMARY DETAILS -->
        <div style="display:flex; flex-direction:column; gap:18px;">
          <div style="display:flex; flex-direction:column;">
            <label class="modal-label">Plan Name</label>
            <input class="modal-input" id="pf-name" type="text" placeholder="Enter plan name" value="${p.name}">
          </div>

          <div style="display:flex; flex-direction:column;">
            <label class="modal-label">Plan Validity</label>
            <select class="modal-input" id="pf-validity">
              <option value="" disabled ${!p.validity ? 'selected' : ''}>Choose any Plan Validity</option>
              <option value="monthly" ${p.validity === 'monthly' ? 'selected' : ''}>1 Month</option>
              <option value="15days" ${p.validity === '15days' ? 'selected' : ''}>15 Days</option>
              <option value="quarterly" ${p.validity === 'quarterly' ? 'selected' : ''}>3 Months</option>
              <option value="halfyearly" ${p.validity === 'halfyearly' ? 'selected' : ''}>6 Months</option>
              <option value="yearly" ${p.validity === 'yearly' ? 'selected' : ''}>1 Year</option>
            </select>
          </div>

          <div style="display:flex; flex-direction:column;">
            <label class="modal-label">Plan Rate</label>
            <input class="modal-input" id="pf-price" type="number" placeholder="Enter Plan Rate" value="${p.price}">
          </div>

          <div style="display:flex; flex-direction:column;">
            <label class="modal-label">Daily Broadcast</label>
            <input class="modal-input" id="pf-broadcast" type="number" placeholder="Enter Daily Broadcast" value="${p.broadcast}">
          </div>

          <div style="display:flex; flex-direction:column;">
            <label class="modal-label">Daily Direct Email</label>
            <input class="modal-input" id="pf-email" type="email" placeholder="Enter E-mail" value="${p.email}">
          </div>

          ${id ? `
          <div style="display:flex; flex-direction:column;">
            <label class="modal-label">Status</label>
            <select class="modal-input" id="pf-status">
              <option value="Active" ${p.status === 'Active' ? 'selected' : ''}>Active</option>
              <option value="Inactive" ${p.status === 'Inactive' ? 'selected' : ''}>Inactive</option>
            </select>
          </div>
          ` : ''}
        </div>

        <!-- RIGHT COLUMN: PERMISSIONS -->
        <div style="display:flex; flex-direction:column; gap:12px;">
          <h4 style="margin:0 0 6px 0; color:#64748b; font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:0.06em;">Plan Permissions</h4>
          
          ${FLAG_DEFS.map(f => `
            <div style="display:flex; align-items:center; justify-content:space-between; background:#f8fafc; padding:10px 14px; border-radius:12px; border:1px solid #f1f5f9; transition:all 0.2s;">
              <div style="flex:1; padding-right:12px;">
                <div style="font-weight:700; color:#1e293b; font-size:0.85rem; margin-bottom:1px;">${f.label}</div>
                <div style="font-size:0.72rem; color:#64748b; font-weight:500; line-height:1.3;">${f.desc}</div>
              </div>
              <input type="checkbox" id="pf-${f.key}" ${p.flags[f.key] ? 'checked' : ''} style="width:18px; height:18px; cursor:pointer; accent-color:var(--blue); border-radius:5px;">
            </div>
          `).join('')}
        </div>

      </div>
    </div>

    <div class="modal-footer" style="padding: 18px 28px; background: #f8fafc; border-top: 1px solid var(--border); border-radius: 0 0 16px 16px; display: flex; gap: 12px; justify-content: flex-end;">
      <button class="btn-outline" style="min-width: 110px; height: 42px; background: #fff; border: 1px solid #e2e8f0; color: #475569; font-weight:700; border-radius:10px; font-size:0.85rem; cursor:pointer;" onclick="closeModal()">Cancel</button>
      <button class="btn-primary" onclick="savePlan()">Save Plan</button>
    </div>
  `;
  modal.classList.remove('hidden');
}

function closeModal() {
  const modal = document.getElementById('modal-container');
  modal.classList.add('hidden');
  document.getElementById('modal-content').innerHTML = '';
}

function savePlan() {
  const name = document.getElementById('pf-name').value.trim();
  const price = parseFloat(document.getElementById('pf-price').value);
  if (!name) { showToast('Plan name is required', 'error'); return; }
  if (!price || isNaN(price)) { showToast('Rate is required', 'error'); return; }

    const data = {
    name,
    price,
    validity: document.getElementById('pf-validity').value,
    broadcast: parseInt(document.getElementById('pf-broadcast').value) || 0,
    email: document.getElementById('pf-email').value.trim(),
    status: document.getElementById('pf-status') ? document.getElementById('pf-status').value : 'Active',
    flags: {
      sendall:  document.getElementById('pf-sendall').checked,
      state:    document.getElementById('pf-state').checked,
      city:     document.getElementById('pf-city').checked,
      contacts: document.getElementById('pf-contacts').checked,
      phone:    document.getElementById('pf-phone').checked,
      address:  document.getElementById('pf-address').checked,
    }
  };

  if (editingId) {
    const p = plans.find(x => x.id === editingId);
    Object.assign(p, data);
    showToast('Plan updated!', 'success');
  } else {
    plans.push({
      id: Date.now(),
      subscribers: 0,
      color: COLORS[plans.length % COLORS.length],
      ...data
    });
    showToast('Plan created!', 'success');
  }

  closeModal();
  renderPlansTable();
}

function deletePlan(id) {
  if (!confirm('Are you sure you want to delete this plan?')) return;
  plans = plans.filter(p => p.id !== id);
  renderPlansTable();
  showToast('Plan deleted', 'error');
}

// ===== UTILITIES =====
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icon = type === 'error' ? 'error' : (type === 'warning' ? 'warning' : 'check_circle');
  toast.innerHTML = `<span class="material-icons-round">${icon}</span><span style="font-size:0.9rem; font-weight:600;">${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => { toast.classList.add('fade-out'); setTimeout(() => toast.remove(), 300); }, 3000);
}

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

function deletePlan(id) {
  if (confirm('Are you sure you want to delete this plan?')) {
    plans = plans.filter(p => p.id !== id);
    renderPlansTable();
    showToast('Plan deleted!', 'success');
  }
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  const icon = type === 'success' ? 'check_circle' : 'error';
  const color = type === 'success' ? '#10b981' : '#ef4444';
  
  toast.innerHTML = `
    <span class="material-icons-round" style="color: ${color}; font-size: 20px;">${icon}</span>
    <span style="font-size: 0.9rem; font-weight: 600; color: #1e293b;">${message}</span>
  `;
  container.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function setupSidebarToggles() {
  const menuToggle = document.getElementById('menu-toggle');
  if (menuToggle) {
    menuToggle.onclick = () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
      const mainContent = document.querySelector('.main-content');
      if (mainContent) mainContent.classList.toggle('expanded');
    };
  }
  
  const sidebarToggle = document.getElementById('sidebar-toggle');
  if (sidebarToggle) {
    sidebarToggle.onclick = () => {
      const sidebar = document.getElementById('sidebar');
      const icon = document.getElementById('sidebar-toggle-icon');
      const mainContent = document.querySelector('.main-content');
      
      sidebar.classList.toggle('collapsed');
      if (mainContent) mainContent.classList.toggle('expanded');
      
      if (icon) {
        icon.textContent = sidebar.classList.contains('collapsed') ? 'chevron_right' : 'chevron_left';
      }
    };
  }
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('plans-tbody')) {
    renderPlansTable();
    setupSidebarToggles();
    const searchInput = document.getElementById('top-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', e => {
        const term = e.target.value.toLowerCase();
        renderPlansTable(plans.filter(p => p.name.toLowerCase().includes(term)));
      });
    }
  }
});

