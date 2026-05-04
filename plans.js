// ===== DATA =====
let plans = [
  {
    id: 1, name: "Starter", price: 999, validity: "monthly", broadcast: 5,
    email: "notify@starter.com", status: "Active", statusClass: "active", color: "#3b82f6",
    subscribers: 42,
    flags: { sendall: true, state: true, city: true, contacts: false, phone: true, address: false }
  },
  {
    id: 2, name: "Business", price: 2999, validity: "monthly", broadcast: 20,
    email: "notify@business.com", status: "Active", statusClass: "active", color: "#8b5cf6",
    subscribers: 128,
    flags: { sendall: true, state: true, city: true, contacts: true, phone: true, address: true }
  },
  {
    id: 3, name: "Enterprise", price: 9999, validity: "yearly", broadcast: 100,
    email: "notify@enterprise.com", status: "Active", statusClass: "enterprise", color: "#10b981",
    subscribers: 15,
    flags: { sendall: true, state: true, city: true, contacts: true, phone: true, address: true }
  },
  {
    id: 4, name: "Legacy Plan", price: 499, validity: "monthly", broadcast: 2,
    email: "", status: "Inactive", statusClass: "inactive", color: "#94a3b8",
    subscribers: 8,
    flags: { sendall: false, state: false, city: false, contacts: false, phone: false, address: false }
  }
];

const VALIDITY_LABELS = { monthly: "Monthly", quarterly: "Quarterly", halfyearly: "Half Yearly", yearly: "Yearly" };
const COLORS = ["#3b82f6", "#8b5cf6", "#10b981", "#f59e0b", "#ec4899", "#06b6d4"];

const FLAG_DEFS = [
  { key: 'sendall',  label: 'Send to All', desc: 'Broadcast to all users' },
  { key: 'state',    label: 'State Targeting', desc: 'Filter by state' },
  { key: 'city',     label: 'City Targeting', desc: 'Filter by city' },
  { key: 'contacts', label: 'Add Contacts', desc: 'Allow adding contacts' },
  { key: 'phone',    label: 'Phone Visibility', desc: 'Show/hide phone number' },
  { key: 'address',  label: 'Address Button', desc: 'Add multiple addresses' },
];

// ===== RENDER =====
function renderGrid(list) {
  const grid = document.getElementById('plans-grid');
  list = list || plans;

  if (!list.length) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--text-soft);font-weight:700;">No plans found.</div>`;
    return;
  }

  grid.innerHTML = list.map(p => {
    const vLabel = VALIDITY_LABELS[p.validity] || p.validity;
    const flags = p.flags || {};
    const sc = p.status === 'Active'
      ? { bg: '#dcfce7', color: '#16a34a' }
      : { bg: '#f1f5f9', color: '#94a3b8' };

    return `
      <div class="plan-card" style="border-top: 4px solid ${p.color};">
        <div class="plan-card-body">

          <!-- Top: name + status -->
          <div class="pc-top">
            <div>
              <div class="pc-name">${p.name}</div>
              <div class="pc-subs">
                <span class="material-icons-round" style="color:${p.color};">group</span>
                ${p.subscribers} members
              </div>
            </div>
            <span class="pc-tag ${p.status.toLowerCase()}">${p.status}</span>
          </div>

          <!-- Price -->
          <div>
            <div class="pc-price-row">
              <span class="pc-price" style="color:${p.color};">₹${Number(p.price).toLocaleString()}</span>
              <span class="pc-price-cycle">/ ${vLabel}</span>
            </div>
          </div>

          <!-- Stats box -->
          <div class="pc-stats" style="background:${p.color}08; border-color:${p.color}20;">
            <div>
              <div class="pc-stat-label">Daily Broadcast</div>
              <div class="pc-stat-value">${p.broadcast || '—'} Messages</div>
            </div>
            <div>
              <div class="pc-stat-label">Validity</div>
              <div class="pc-stat-value">${vLabel}</div>
            </div>
            <div class="pc-stat-email">
              <div class="pc-stat-label">Daily Email</div>
              <div class="pc-stat-value" style="color:${p.color};">${p.email || '—'}</div>
            </div>
          </div>

          <!-- Flags -->
          <div class="pc-flags">
            ${FLAG_DEFS.map(f => `
              <div class="pc-flag-row">
                <span>${f.label}</span>
                ${flags[f.key]
                  ? `<span class="pc-flag-on"><span class="material-icons-round" style="font-size:20px;">check_circle</span></span>`
                  : `<span class="pc-flag-off"><span class="material-icons-round" style="font-size:20px;">cancel</span></span>`}
              </div>
            `).join('')}
          </div>

        </div>

        <!-- Footer actions -->
        <div class="plan-card-footer">
          <button class="btn-delete-card" onclick="deletePlan(${p.id})" title="Delete Plan">
            <span class="material-icons-round" style="font-size:20px;">delete_outline</span>
          </button>
          <button class="btn-edit-card" style="background:${p.color}; box-shadow: 0 4px 12px ${p.color}40;" onclick="openPlanModal(${p.id})">
            <span class="material-icons-round" style="font-size:18px;">edit</span> Edit Plan
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// ===== MODAL =====
let editingId = null;

function openPlanModal(id) {
  editingId = id || null;
  const modal = document.getElementById('modal-container');
  const content = document.getElementById('modal-content');
  content.className = 'modal-content modal-wide';

  let p = {
    name: '', price: '', validity: 'monthly', broadcast: '', email: '', status: 'Active',
    flags: { sendall: true, state: true, city: true, contacts: false, phone: true, address: false }
  };

  if (id) {
    p = plans.find(x => x.id === id);
  }

  content.innerHTML = `
    <div class="modal-header" style="border-bottom: 1px solid var(--border); padding: 24px 32px; background: #fff;">
      <div style="display:flex; align-items:center; gap:12px;">
        <div style="width:40px; height:40px; border-radius:10px; background:var(--blue-light); color:var(--blue); display:grid; place-items:center;">
          <span class="material-icons-round">assignment</span>
        </div>
        <div>
          <h3 style="margin:0; font-size:1.1rem; font-weight:900; color:var(--text);">${id ? 'Edit Plan' : 'Create New Plan'}</h3>
          <p style="margin:2px 0 0; font-size:0.8rem; color:var(--text-soft); font-weight:600;">Define the parameters and permissions for this tier.</p>
        </div>
      </div>
      <button class="modal-close" onclick="closeModal()"><span class="material-icons-round">close</span></button>
    </div>

    <div class="modal-body" style="padding: 32px;">
      <div class="modal-2-col">
        
        <!-- LEFT COLUMN: Basic Info -->
        <div>
          <div class="pf-section-title">Plan Information</div>
          
          <div class="pf-row">
            <label class="pf-label">Plan Name</label>
            <input class="pf-input" id="pf-name" type="text" placeholder="e.g. Starter, Pro, Business" value="${p.name}">
          </div>

          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:16px;">
            <div class="pf-row">
              <label class="pf-label">Rate (₹)</label>
              <input class="pf-input" id="pf-price" type="number" placeholder="999" value="${p.price}">
            </div>
            <div class="pf-row">
              <label class="pf-label">Validity</label>
              <select class="pf-input" id="pf-validity">
                <option value="monthly" ${p.validity === 'monthly' ? 'selected' : ''}>Monthly</option>
                <option value="quarterly" ${p.validity === 'quarterly' ? 'selected' : ''}>Quarterly</option>
                <option value="halfyearly" ${p.validity === 'halfyearly' ? 'selected' : ''}>Half Yearly</option>
                <option value="yearly" ${p.validity === 'yearly' ? 'selected' : ''}>Yearly</option>
              </select>
            </div>
          </div>

          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:16px;">
            <div class="pf-row">
              <label class="pf-label">Daily Broadcast</label>
              <input class="pf-input" id="pf-broadcast" type="number" placeholder="5" value="${p.broadcast}">
            </div>
            <div class="pf-row">
              <label class="pf-label">Status</label>
              <select class="pf-input" id="pf-status">
                <option value="Active" ${p.status === 'Active' ? 'selected' : ''}>Active</option>
                <option value="Inactive" ${p.status === 'Inactive' ? 'selected' : ''}>Inactive</option>
              </select>
            </div>
          </div>

          <div class="pf-row">
            <label class="pf-label">Daily Direct Email</label>
            <input class="pf-input" id="pf-email" type="email" placeholder="notifications@example.com" value="${p.email}">
          </div>
        </div>

        <!-- RIGHT COLUMN: Permissions -->
        <div>
          <div class="pf-section-title">Features & Permissions</div>
          
          <div style="display:flex; flex-direction:column; gap:4px;">
            ${FLAG_DEFS.map(f => `
              <div class="pf-check-row">
                <div class="pf-check-left">
                  <div class="pf-check-name">${f.label}</div>
                  <div class="pf-check-desc">${f.desc}</div>
                </div>
                <label class="toggle-wrap">
                  <input type="checkbox" id="pf-${f.key}" ${p.flags[f.key] ? 'checked' : ''}>
                  <span class="toggle-slider"></span>
                </label>
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    </div>

    <div class="modal-footer" style="padding:24px 32px; background:#f8fafc; border-top:1px solid var(--border); justify-content:flex-end; gap:12px;">
      <button class="btn-outline" style="background:#fff; border-color:#d1d5db; color:var(--text-mid);" onclick="closeModal()">Cancel</button>
      <button class="btn-primary" style="background:var(--blue); border-radius:8px; padding:12px 28px; font-weight:800; box-shadow:0 4px 12px rgba(72,128,255,0.25);" onclick="savePlan()">
        <span class="material-icons-round" style="font-size:18px;">save</span> Save Plan
      </button>
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
    status: document.getElementById('pf-status').value,
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
  renderGrid();
}

function deletePlan(id) {
  plans = plans.filter(p => p.id !== id);
  renderGrid();
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

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderGrid();
  const searchInput = document.getElementById('top-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      const term = e.target.value.toLowerCase();
      renderGrid(plans.filter(p => p.name.toLowerCase().includes(term)));
    });
  }
});
