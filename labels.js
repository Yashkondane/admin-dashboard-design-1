// ===== DATA =====
const labels = [
  { id: 4, labelName: "TK lite", hexColor: "#2563eb", planName: "Tk-Lite", planRate: "Free Trial", planValidity: "15 Days", status: "Active" },
  { id: 3, labelName: "TK Standard", hexColor: "#10b981", planName: "Standard", planRate: "1000", planValidity: "3 months", status: "Active" },
  { id: 2, labelName: "TK Premium", hexColor: "#f59e0b", planName: "Premium", planRate: "2000", planValidity: "6 Months", status: "Active" },
  { id: 1, labelName: "TK-FREE", hexColor: "#8b5cf6", planName: "PLAN", planRate: "Free", planValidity: "15 Days", status: "Active" },
];

var currentFilter = 'all';

// ===== RENDER =====
function renderTable() {
  const tbody = document.getElementById('labels-tbody');
  if (!tbody) return;

  const filtered = currentFilter === 'all' 
    ? labels 
    : labels.filter(l => l.status.toLowerCase() === currentFilter.toLowerCase());
  
  updateBadges();

  if (filtered.length === 0) {
    tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; padding: 60px; color: var(--text-soft); font-weight: 700;">No labels found.</td></tr>';
    return;
  }

  tbody.innerHTML = filtered.map(l => `
    <tr>
      <td>
        <span style="font-size: 0.85rem; color: #94a3b8; font-weight: 600;">${String(l.id).padStart(2, '0')}</span>
      </td>
      <td>
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="width: 8px; height: 8px; border-radius: 50%; background: ${l.hexColor}; flex-shrink: 0; box-shadow: 0 0 0 2px ${l.hexColor}30;"></span>
          <span style="font-weight: 600; color: #1e293b; font-size: 0.88rem;">${l.labelName}</span>
        </div>
      </td>
      <td>
        <span style="font-weight: 600; color: #1e293b; font-size: 0.88rem;">${l.planName}</span>
      </td>
      <td style="font-weight: 500; color: #475569; font-size: 0.88rem;">${l.planRate}</td>
      <td style="font-weight: 500; color: #64748b; font-size: 0.88rem;">${l.planValidity}</td>
      <td style="text-align: center;">
        <span class="status-badge ${l.status === 'Active' ? 'badge-active' : 'badge-inactive'}">${l.status}</span>
      </td>
      <td style="text-align: right;">
        <div style="display: flex; align-items: center; justify-content: flex-end; gap: 8px;">
          <button class="header-icon-btn" onclick="openEditLabelModal(${l.id})">
            <span class="material-icons-round" style="font-size: 20px;">edit</span>
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

function updateBadges() {
  const all = labels.length;
  const active = labels.filter(l => l.status === 'Active').length;
  const inactive = labels.filter(l => l.status === 'Inactive').length;

  const bAll = document.getElementById('badge-all');
  const bActive = document.getElementById('badge-active');
  const bInactive = document.getElementById('badge-inactive');

  if (bAll) bAll.textContent = all;
  if (bActive) bActive.textContent = active;
  if (bInactive) bInactive.textContent = inactive;

  const showingText = document.getElementById('showing-text');
  if (showingText) {
    showingText.textContent = `Showing ${labels.length} labels`;
  }
}

function setFilter(filter) {
  currentFilter = filter;
  document.querySelectorAll('.tab-item').forEach(tab => {
    tab.classList.toggle('active', tab.getAttribute('data-filter') === filter);
  });
  renderTable();
}

// ===== MODAL LOGIC =====
function getLabelFormHTML(label = {}) {
  const isEdit = !!label.id;
  return `
    <div style="padding: 24px; border-bottom: 1px solid #f1f5f9; display: flex; justify-content: space-between; align-items: center;">
      <h2 style="margin: 0; font-size: 1.25rem; font-weight: 800; color: #1e293b;">${isEdit ? 'Edit Label' : 'Add New Label'}</h2>
      <button class="header-icon-btn" onclick="closeModal()"><span class="material-icons-round">close</span></button>
    </div>
    <div style="padding: 32px; max-height: 75vh; overflow-y: auto; background: #fff;">
      <div style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 40px; max-width: 800px;">
        <div style="display: grid; grid-template-columns: 200px 1fr; align-items: center; gap: 16px;">
          <label style="font-size: 0.85rem; font-weight: 600; color: #475569;">Label Name</label>
          <input type="text" class="pf-input" value="${label.labelName || ''}" style="background: #fff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px 14px;">
        </div>
        <div style="display: grid; grid-template-columns: 200px 1fr; align-items: center; gap: 16px;">
          <label style="font-size: 0.85rem; font-weight: 600; color: #475569;">Plan Name</label>
          <input type="text" class="pf-input" value="${label.planName || ''}" style="background: #fff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px 14px;">
        </div>
        <div style="display: grid; grid-template-columns: 200px 1fr; align-items: center; gap: 16px;">
          <label style="font-size: 0.85rem; font-weight: 600; color: #475569;">Plan Rate</label>
          <input type="text" class="pf-input" value="${label.planRate || ''}" style="background: #fff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px 14px;">
        </div>
        <div style="display: grid; grid-template-columns: 200px 1fr; align-items: center; gap: 16px;">
          <label style="font-size: 0.85rem; font-weight: 600; color: #475569;">Duration</label>
          <input type="text" class="pf-input" value="${label.planValidity || ''}" style="background: #fff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px 14px;">
        </div>
        <div style="display: grid; grid-template-columns: 180px 1fr; align-items: center; gap: 16px;">
          <label style="font-size: 0.85rem; font-weight: 600; color: #475569;">Hex Color Code</label>
          <div style="display: flex; align-items: center; gap: 12px;">
            <input type="text" class="pf-input" value="${label.hexColor || ''}" oninput="updateLabelColorPreview(this)" style="background: #fff; border: 1px solid var(--blue); border-radius: 6px; padding: 10px 14px; outline: none; box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1); flex: 1;">
            <div id="color-preview-circle" style="width: 32px; height: 32px; border-radius: 50%; background: ${label.hexColor || '#e2e8f0'}; border: 2px solid #fff; box-shadow: 0 0 0 1px #e2e8f0; flex-shrink: 0;"></div>
          </div>
        </div>
        <div style="display: grid; grid-template-columns: 200px 1fr; align-items: center; gap: 16px;">
          <label style="font-size: 0.85rem; font-weight: 600; color: #475569;">Status</label>
          <div style="display: flex; gap: 24px; align-items: center;">
            <label style="display: flex; align-items: center; gap: 8px; font-size: 0.85rem; color: #475569; cursor: pointer;">
              <input type="radio" name="status" value="Active" ${label.status !== 'Inactive' ? 'checked' : ''} style="accent-color: var(--blue); transform: scale(1.2);"> Active
            </label>
            <label style="display: flex; align-items: center; gap: 8px; font-size: 0.85rem; color: #475569; cursor: pointer;">
              <input type="radio" name="status" value="Inactive" ${label.status === 'Inactive' ? 'checked' : ''} style="accent-color: var(--blue); transform: scale(1.2);"> Inactive
            </label>
          </div>
        </div>
      </div>

      <!-- Features Section -->
      <div style="display: grid; grid-template-columns: 1fr 1fr 120px; gap: 24px; margin-bottom: 32px;">
        <div style="border: 1px solid var(--blue); border-radius: 6px; padding: 10px; text-align: center; color: var(--blue); font-size: 0.85rem; font-weight: 600;">Features</div>
        <div style="border: 1px solid var(--blue); border-radius: 6px; padding: 10px; text-align: center; color: var(--blue); font-size: 0.85rem; font-weight: 600;">Included</div>
        <button class="btn-primary" style="height: 100%; border-radius: 6px; padding: 0; background: var(--blue); width: 100%;">Add New</button>
      </div>

      <div style="display: flex; flex-direction: column; gap: 20px;">
        ${[
          { text: "Daily Broadcast", sel: "Value", val: "5" },
          { text: "Daily Direct email", sel: "Value", val: "2" },
          { text: "Send to all", sel: "Value", val: "No" },
          { text: "Send within State", sel: "Yes", val: "" },
          { text: "Do not disturb", sel: "Yes", val: "" },
          { text: "Add more address", sel: "Yes", val: "" }
        ].map(f => `
        <div style="display: grid; grid-template-columns: 1fr 100px 100px 40px; align-items: center; gap: 16px;">
          <input type="text" class="pf-input" value="${f.text}" style="background: #fff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px 14px;">
          <select class="pf-input" style="background: #fff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px 14px; appearance: none; -webkit-appearance: none;">
            <option ${f.sel === 'Value' ? 'selected' : ''}>Value</option>
            <option ${f.sel === 'Yes' ? 'selected' : ''}>Yes</option>
          </select>
          ${f.sel === 'Yes' 
            ? '<div style="display: flex; justify-content: flex-start; padding-left: 14px;"><span class="material-icons-round" style="color: var(--blue); font-size: 22px; font-weight: bold;">check</span></div>'
            : '<input type="text" class="pf-input" value="' + f.val + '" style="background: #fff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px 14px; text-align: center;">'
          }
          <button class="header-icon-btn" style="color: #64748b;"><span class="material-icons-round">delete_outline</span></button>
        </div>
        `).join('')}
      </div>
    </div>
    <div style="padding: 16px 32px; background: #f8fafc; border-top: 1px solid #f1f5f9; display: flex; justify-content: flex-end; gap: 12px; border-radius: 0 0 16px 16px;">
      <button class="btn-outline" onclick="closeModal()" style="height: 40px; padding: 0 24px; border-radius: 8px;">Cancel</button>
      <button class="btn-primary" onclick="saveLabel()" style="height: 40px; padding: 0 24px; border-radius: 8px;">Save Changes</button>
    </div>
  `;
}

function openAddLabelModal() {
  const modalContent = document.getElementById('modal-content');
  // Reduce width for labels modal as requested
  document.getElementById('modal-container').firstElementChild.style.maxWidth = '700px';
  modalContent.innerHTML = getLabelFormHTML({});
  document.getElementById('modal-container').classList.remove('hidden');
}

function openEditLabelModal(id) {
  const label = labels.find(l => l.id === id);
  if (!label) return;
  
  const modalContent = document.getElementById('modal-content');
  // Reduce width for labels modal as requested
  document.getElementById('modal-container').firstElementChild.style.maxWidth = '700px';
  modalContent.innerHTML = getLabelFormHTML(label);
  document.getElementById('modal-container').classList.remove('hidden');
}

function updateLabelColorPreview(input) {
  const circle = document.getElementById('color-preview-circle');
  if (circle) {
    const val = input.value.trim();
    // Basic hex check
    if (/^#[0-9A-F]{6}$/i.test(val) || /^#[0-9A-F]{3}$/i.test(val)) {
      circle.style.background = val;
    }
  }
}

function closeModal() {
  document.getElementById('modal-container').classList.add('hidden');
}

function saveLabel() {
  // Logic to save label
  closeModal();
  showToast('Label added successfully', 'success');
}

function showToast(msg, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast show';
  toast.style.display = 'flex';
  toast.style.alignItems = 'center';
  toast.style.gap = '12px';
  toast.style.padding = '12px 20px';
  toast.style.background = '#fff';
  toast.style.border = '1px solid #e2e8f0';
  toast.style.borderRadius = '12px';
  toast.style.boxShadow = '0 10px 25px rgba(0,0,0,0.05)';
  toast.style.marginBottom = '12px';

  const icon = type === 'success' ? 'check_circle' : 'error';
  const color = type === 'success' ? '#10b981' : '#ef4444';

  toast.innerHTML = `
    <span class="material-icons-round" style="color: ${color}">${icon}</span>
    <span style="font-weight: 700; font-size: 0.9rem; color: #1e293b;">${msg}</span>
  `;
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, 3000);
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

document.addEventListener('DOMContentLoaded', renderTable);
