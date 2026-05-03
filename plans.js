const plans = [
  { id: 1, name: "Starter", price: "₹999", cycle: "monthly", subscribers: 42, status: "Active", statusClass: "active", color: "#3b82f6", features: ["1 User Account", "Basic Analytics", "Standard Support"] },
  { id: 2, name: "Business", price: "₹2999", cycle: "monthly", subscribers: 128, status: "Active", statusClass: "business", color: "#8b5cf6", features: ["Up to 10 Users", "Advanced Analytics", "Priority Support", "Custom Reports"] },
  { id: 3, name: "Enterprise", price: "₹9999", cycle: "yearly", subscribers: 15, status: "Active", statusClass: "enterprise", color: "#10b981", features: ["Unlimited Users", "Dedicated Account Manager", "24/7 Phone Support", "Custom Integrations", "SLA Guarantee"] },
  { id: 4, name: "Legacy Plan", price: "₹499", cycle: "monthly", subscribers: 8, status: "Inactive", statusClass: "inactive", color: "#94a3b8", features: ["Basic Access", "Email Support Only"] }
];

function renderGrid() {
  const grid = document.getElementById('plans-grid');
  grid.innerHTML = plans.map((p, i) => `
    <div style="background: var(--white); border-radius: 14px; padding: 20px; padding-top: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.03); border: 1px solid var(--border); border-top: 4px solid ${p.color}; display: flex; flex-direction: column; height: 100%; transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 12px 24px rgba(0,0,0,0.06)';" onmouseout="this.style.transform='none'; this.style.boxShadow='0 4px 20px rgba(0,0,0,0.03)';">
      
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <h3 style="margin: 0; font-size: 1.15rem; font-weight: 800; color: var(--text);">${p.name}</h3>
        <span class="employee-badge ${p.statusClass}" style="transform: scale(0.9); transform-origin: right;">${p.status}</span>
      </div>

      <div style="margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px dashed var(--border);">
        <div style="display: flex; align-items: baseline; gap: 4px;">
          <span style="font-size: 1.8rem; font-weight: 900; color: var(--text); letter-spacing: -0.5px;">${p.price}</span>
          <span style="font-size: 0.85rem; font-weight: 600; color: var(--text-soft);">/${p.cycle === 'monthly' ? 'mo' : 'yr'}</span>
        </div>
        <div style="margin-top: 8px; display: inline-flex; align-items: center; gap: 6px; background: #f8fafc; padding: 4px 10px; border-radius: 16px; border: 1px solid #e2e8f0; font-size: 0.75rem; font-weight: 700; color: var(--text-mid);">
          <span class="material-icons-round" style="font-size: 14px; color: var(--blue);">group</span> ${p.subscribers} Active Subs
        </div>
      </div>

      <div style="flex: 1;">
        <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px;">
          ${p.features.map(f => `
            <li style="display: flex; align-items: flex-start; gap: 8px; font-size: 0.85rem; font-weight: 600; color: var(--text-mid); line-height: 1.4;">
              <span class="material-icons-round" style="font-size: 16px; color: #10b981; flex-shrink: 0; margin-top: 1px;">check_circle</span>
              <span>${f}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <button class="btn-outline" style="width: 100%; margin-top: 20px; justify-content: center; font-weight: 700; border-color: #cbd5e1; color: var(--text); font-size: 0.85rem; padding: 8px 12px;" onclick="openEditPlanModal(${p.id})">
        <span class="material-icons-round" style="font-size: 16px;">edit</span> Edit Plan
      </button>
    </div>
  `).join('');
}

function toggleDropdown(id, btn) {
  const menu = document.getElementById('dropdown-' + id);
  const isVisible = !menu.classList.contains('hidden') && menu.style.display !== 'none' && menu.style.display !== '';
  closeAllDropdowns();
  
  if (!isVisible) {
    menu.style.display = 'block';
    // Position fixed logic as used in script.js
    const rect = btn.getBoundingClientRect();
    menu.style.position = 'fixed';
    menu.style.top = (rect.bottom + 4) + 'px';
    menu.style.right = (window.innerWidth - rect.right) + 'px';
    menu.style.left = 'auto';
    menu.style.bottom = 'auto';
  }
}

function closeAllDropdowns() {
  document.querySelectorAll('.dropdown-menu').forEach(menu => {
    menu.style.display = 'none';
  });
}

document.addEventListener('click', () => {
  closeAllDropdowns();
});

document.querySelectorAll('.dropdown-menu').forEach(menu => {
  menu.addEventListener('click', e => e.stopPropagation());
});

// Modal logic
function openAddPlanModal() {
  const modal = document.getElementById('modal-container');
  const content = document.getElementById('modal-content');
  
  content.innerHTML = `
    <div class="modal-header">
      <h3>Create New Plan</h3>
      <button class="modal-close" onclick="closeModal()"><span class="material-icons-round">close</span></button>
    </div>
    <div class="modal-body">
      <div class="modal-grid-2">
        <div>
          <label class="modal-label">Plan Name</label>
          <input class="modal-input" type="text" id="add-plan-name" placeholder="e.g. Pro">
        </div>
        <div>
          <label class="modal-label">Price (₹)</label>
          <input class="modal-input" type="number" id="add-plan-price" placeholder="e.g. 1499">
        </div>
        <div>
          <label class="modal-label">Billing Cycle</label>
          <select class="modal-input" id="add-plan-cycle">
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
        <div>
          <label class="modal-label">Status</label>
          <select class="modal-input" id="add-plan-status">
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <div style="grid-column: 1 / -1;">
          <label class="modal-label">Features (comma separated)</label>
          <input class="modal-input" type="text" id="add-plan-features" placeholder="e.g. 5 Users, Standard Support">
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn-primary" onclick="saveNewPlan()">Create Plan</button>
    </div>
  `;
  modal.classList.remove('hidden');
}

function openEditPlanModal(id) {
  const modal = document.getElementById('modal-container');
  const content = document.getElementById('modal-content');
  const p = plans.find(x => x.id === id);
  
  const rawPrice = p.price.replace(/[^0-9.]/g, '');
  
  content.innerHTML = `
    <div class="modal-header">
      <h3>Edit Plan: ${p.name}</h3>
      <button class="modal-close" onclick="closeModal()"><span class="material-icons-round">close</span></button>
    </div>
    <div class="modal-body">
      <div class="modal-grid-2">
        <div>
          <label class="modal-label">Plan Name</label>
          <input class="modal-input" type="text" id="edit-plan-name" value="${p.name}">
        </div>
        <div>
          <label class="modal-label">Price (₹)</label>
          <input class="modal-input" type="number" id="edit-plan-price" value="${rawPrice}">
        </div>
        <div>
          <label class="modal-label">Billing Cycle</label>
          <select class="modal-input" id="edit-plan-cycle">
            <option value="monthly" ${p.cycle === 'monthly' ? 'selected' : ''}>Monthly</option>
            <option value="yearly" ${p.cycle === 'yearly' ? 'selected' : ''}>Yearly</option>
          </select>
        </div>
        <div>
          <label class="modal-label">Status</label>
          <select class="modal-input" id="edit-plan-status">
            <option value="Active" ${p.status === 'Active' ? 'selected' : ''}>Active</option>
            <option value="Inactive" ${p.status === 'Inactive' ? 'selected' : ''}>Inactive</option>
          </select>
        </div>
        <div style="grid-column: 1 / -1;">
          <label class="modal-label">Features (comma separated)</label>
          <input class="modal-input" type="text" id="edit-plan-features" value="${p.features.join(', ')}">
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn-primary" onclick="saveEditPlan(${p.id})">Save Changes</button>
    </div>
  `;
  modal.classList.remove('hidden');
}

function saveNewPlan() {
  const name = document.getElementById('add-plan-name').value.trim();
  const price = document.getElementById('add-plan-price').value.trim();
  if (!name || !price) { showToast('Plan name and price are required', 'error'); return; }
  
  const featuresStr = document.getElementById('add-plan-features').value.trim();
  const features = featuresStr ? featuresStr.split(',').map(f => f.trim()) : ["Basic Access"];
  
  const status = document.getElementById('add-plan-status').value;
  
  plans.push({
    id: Date.now(),
    name: name,
    price: '₹' + price,
    cycle: document.getElementById('add-plan-cycle').value,
    subscribers: 0,
    status: status,
    statusClass: status === 'Active' ? 'active' : 'inactive',
    color: ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ec4899'][Math.floor(Math.random() * 5)],
    features: features
  });
  
  closeModal();
  renderGrid();
  showToast('Plan created successfully', 'success');
}

function saveEditPlan(id) {
  const p = plans.find(x => x.id === id);
  const name = document.getElementById('edit-plan-name').value.trim();
  const price = document.getElementById('edit-plan-price').value.trim();
  if (!name || !price) { showToast('Plan name and price are required', 'error'); return; }
  
  const featuresStr = document.getElementById('edit-plan-features').value.trim();
  const features = featuresStr ? featuresStr.split(',').map(f => f.trim()) : ["Basic Access"];
  
  p.name = name;
  p.price = '₹' + price;
  p.cycle = document.getElementById('edit-plan-cycle').value;
  p.status = document.getElementById('edit-plan-status').value;
  p.statusClass = p.status === 'Active' ? 'active' : 'inactive';
  p.features = features;
  
  closeModal();
  renderGrid();
  showToast('Plan updated successfully', 'success');
}

function closeModal() {
  document.getElementById('modal-container').classList.add('hidden');
  document.getElementById('modal-content').innerHTML = '';
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  
  let icon = 'check_circle';
  let color = '#10b981';
  if (type === 'error') {
    icon = 'error';
    color = '#ef4444';
  } else if (type === 'warning') {
    icon = 'warning';
    color = '#f59e0b';
  }

  toast.innerHTML = `
    <span class="material-icons-round" style="color: ${color}; font-size: 20px;">${icon}</span>
    <span style="font-size: 0.9rem; font-weight: 600; color: var(--text);">${message}</span>
  `;
  container.appendChild(toast);

  // Trigger animation
  setTimeout(() => toast.classList.add('show'), 10);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function toggleNavGroup(btn) {
  const group = btn.closest('.nav-group');
  const sub = group.querySelector('.nav-sub');
  const isOpen = group.classList.contains('open');

  document.querySelectorAll('.nav-group.open').forEach(g => {
    if (g !== group) {
      g.classList.remove('open');
      g.querySelector('.nav-sub').style.height = '0px';
    }
  });

  if (isOpen) {
    group.classList.remove('open');
    sub.style.height = '0px';
  } else {
    group.classList.add('open');
    sub.style.height = sub.scrollHeight + 'px';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderGrid();

  // Search logic
  const searchInput = document.getElementById('top-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      const filtered = plans.filter(p => p.name.toLowerCase().includes(term));
      
      const grid = document.getElementById('plans-grid');
      grid.innerHTML = filtered.map((p, i) => `
        <div style="background: var(--white); border-radius: 14px; padding: 20px; padding-top: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.03); border: 1px solid var(--border); border-top: 4px solid ${p.color}; display: flex; flex-direction: column; height: 100%; transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 12px 24px rgba(0,0,0,0.06)';" onmouseout="this.style.transform='none'; this.style.boxShadow='0 4px 20px rgba(0,0,0,0.03)';">
          
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <h3 style="margin: 0; font-size: 1.15rem; font-weight: 800; color: var(--text);">${p.name}</h3>
            <span class="employee-badge ${p.statusClass}" style="transform: scale(0.9); transform-origin: right;">${p.status}</span>
          </div>

          <div style="margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px dashed var(--border);">
            <div style="display: flex; align-items: baseline; gap: 4px;">
              <span style="font-size: 1.8rem; font-weight: 900; color: var(--text); letter-spacing: -0.5px;">${p.price}</span>
              <span style="font-size: 0.85rem; font-weight: 600; color: var(--text-soft);">/${p.cycle === 'monthly' ? 'mo' : 'yr'}</span>
            </div>
            <div style="margin-top: 8px; display: inline-flex; align-items: center; gap: 6px; background: #f8fafc; padding: 4px 10px; border-radius: 16px; border: 1px solid #e2e8f0; font-size: 0.75rem; font-weight: 700; color: var(--text-mid);">
              <span class="material-icons-round" style="font-size: 14px; color: var(--blue);">group</span> ${p.subscribers} Active Subs
            </div>
          </div>

          <div style="flex: 1;">
            <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px;">
              ${p.features.map(f => `
                <li style="display: flex; align-items: flex-start; gap: 8px; font-size: 0.85rem; font-weight: 600; color: var(--text-mid); line-height: 1.4;">
                  <span class="material-icons-round" style="font-size: 16px; color: #10b981; flex-shrink: 0; margin-top: 1px;">check_circle</span>
                  <span>${f}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <button class="btn-outline" style="width: 100%; margin-top: 20px; justify-content: center; font-weight: 700; border-color: #cbd5e1; color: var(--text); font-size: 0.85rem; padding: 8px 12px;" onclick="openEditPlanModal(${p.id})">
            <span class="material-icons-round" style="font-size: 16px;">edit</span> Edit Plan
          </button>
        </div>
      `).join('');
      
      if (filtered.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-soft); font-weight: 600;">No plans found matching your search.</div>';
      }
    });
  }
});
