let labels = [
  { id: 1, name: "Most Popular", color: "#8b5cf6", status: "Active" },
  { id: 2, name: "Best Value", color: "#10b981", status: "Active" },
  { id: 3, name: "Enterprise", color: "#3b82f6", status: "Active" },
  { id: 4, name: "Legacy", color: "#94a3b8", status: "Inactive" }
];

function renderTable() {
  const tbody = document.getElementById('labels-tbody');
  tbody.innerHTML = labels.map(l => `
    <tr>
      <td style="padding-left: 24px;">
        <div style="display: inline-block; padding: 4px 12px; border-radius: 12px; background: ${l.color}15; color: ${l.color}; font-weight: 700; font-size: 0.8rem; border: 1px solid ${l.color}30;">
          ${l.name}
        </div>
      </td>
      <td style="font-weight: 600; color: var(--text);">${l.name}</td>
      <td>
        <div style="display: flex; align-items: center; gap: 8px;">
          <div style="width: 16px; height: 16px; border-radius: 4px; background: ${l.color};"></div>
          <span style="font-family: monospace; color: var(--text-mid); font-size: 0.9rem;">${l.color}</span>
        </div>
      </td>
      <td>
        <span class="employee-badge ${l.status === 'Active' ? 'active' : 'inactive'}">${l.status}</span>
      </td>
      <td style="text-align: right; padding-right: 24px;">
        <button class="action-btn" onclick="openEditLabelModal(${l.id})">
          <span class="material-icons-round" style="font-size: 20px; color: var(--blue);">edit</span>
        </button>
      </td>
    </tr>
  `).join('');
}

// Search logic
document.addEventListener('DOMContentLoaded', () => {
  renderTable();
  
  const searchInput = document.getElementById('top-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      const filtered = labels.filter(l => l.name.toLowerCase().includes(term));
      
      const tbody = document.getElementById('labels-tbody');
      tbody.innerHTML = filtered.map(l => `
        <tr>
          <td style="padding-left: 24px;">
            <div style="display: inline-block; padding: 4px 12px; border-radius: 12px; background: ${l.color}15; color: ${l.color}; font-weight: 700; font-size: 0.8rem; border: 1px solid ${l.color}30;">
              ${l.name}
            </div>
          </td>
          <td style="font-weight: 600; color: var(--text);">${l.name}</td>
          <td>
            <div style="display: flex; align-items: center; gap: 8px;">
              <div style="width: 16px; height: 16px; border-radius: 4px; background: ${l.color};"></div>
              <span style="font-family: monospace; color: var(--text-mid); font-size: 0.9rem;">${l.color}</span>
            </div>
          </td>
          <td>
            <span class="employee-badge ${l.status === 'Active' ? 'active' : 'inactive'}">${l.status}</span>
          </td>
          <td style="text-align: right; padding-right: 24px;">
            <button class="action-btn" onclick="openEditLabelModal(${l.id})">
              <span class="material-icons-round" style="font-size: 20px; color: var(--blue);">edit</span>
            </button>
          </td>
        </tr>
      `).join('');
      
      if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align: center; padding: 40px; color: var(--text-soft); font-weight: 600;">No labels found matching your search.</td></tr>';
      }
    });
  }
});

// Modals
function openAddLabelModal() {
  const modal = document.getElementById('modal-container');
  const content = document.getElementById('modal-content');
  
  content.innerHTML = `
    <div class="modal-header">
      <h3>Create New Label</h3>
      <button class="modal-close" onclick="closeModal()"><span class="material-icons-round">close</span></button>
    </div>
    <div class="modal-body">
      <div class="modal-grid-1">
        <div>
          <label class="modal-label">Label Name</label>
          <input class="modal-input" type="text" id="add-label-name" placeholder="e.g. Recommended">
        </div>
        <div>
          <label class="modal-label">Color Hex</label>
          <div style="display:flex; gap: 10px;">
            <input class="modal-input" type="color" id="add-label-color-picker" value="#3b82f6" style="width: 50px; padding: 0; cursor: pointer; border: none; height: 42px; border-radius: 8px;">
            <input class="modal-input" type="text" id="add-label-color" value="#3b82f6" style="flex:1;">
          </div>
        </div>
        <div>
          <label class="modal-label">Status</label>
          <select class="modal-input" id="add-label-status">
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn-primary" onclick="saveNewLabel()">Create Label</button>
    </div>
  `;
  
  // Sync color picker with text input
  document.getElementById('add-label-color-picker').addEventListener('input', e => {
    document.getElementById('add-label-color').value = e.target.value;
  });
  document.getElementById('add-label-color').addEventListener('input', e => {
    document.getElementById('add-label-color-picker').value = e.target.value;
  });
  
  modal.classList.remove('hidden');
}

function openEditLabelModal(id) {
  const modal = document.getElementById('modal-container');
  const content = document.getElementById('modal-content');
  const l = labels.find(x => x.id === id);
  
  content.innerHTML = `
    <div class="modal-header">
      <h3>Edit Label: ${l.name}</h3>
      <button class="modal-close" onclick="closeModal()"><span class="material-icons-round">close</span></button>
    </div>
    <div class="modal-body">
      <div class="modal-grid-1">
        <div>
          <label class="modal-label">Label Name</label>
          <input class="modal-input" type="text" id="edit-label-name" value="${l.name}">
        </div>
        <div>
          <label class="modal-label">Color Hex</label>
          <div style="display:flex; gap: 10px;">
            <input class="modal-input" type="color" id="edit-label-color-picker" value="${l.color}" style="width: 50px; padding: 0; cursor: pointer; border: none; height: 42px; border-radius: 8px;">
            <input class="modal-input" type="text" id="edit-label-color" value="${l.color}" style="flex:1;">
          </div>
        </div>
        <div>
          <label class="modal-label">Status</label>
          <select class="modal-input" id="edit-label-status">
            <option value="Active" ${l.status === 'Active' ? 'selected' : ''}>Active</option>
            <option value="Inactive" ${l.status === 'Inactive' ? 'selected' : ''}>Inactive</option>
          </select>
        </div>
      </div>
    </div>
    <div class="modal-footer" style="display: flex; justify-content: space-between;">
      <button class="btn-outline" style="color: #ef4444; border-color: #fca5a5;" onclick="deleteLabel(${l.id})">Delete Label</button>
      <div style="display: flex; gap: 12px;">
        <button class="btn-outline" onclick="closeModal()">Cancel</button>
        <button class="btn-primary" onclick="saveEditLabel(${l.id})">Save Changes</button>
      </div>
    </div>
  `;
  
  document.getElementById('edit-label-color-picker').addEventListener('input', e => {
    document.getElementById('edit-label-color').value = e.target.value;
  });
  document.getElementById('edit-label-color').addEventListener('input', e => {
    document.getElementById('edit-label-color-picker').value = e.target.value;
  });
  
  modal.classList.remove('hidden');
}

function saveNewLabel() {
  const name = document.getElementById('add-label-name').value.trim();
  const color = document.getElementById('add-label-color').value.trim();
  const status = document.getElementById('add-label-status').value;
  
  if (!name || !color) { showToast('Name and color are required', 'error'); return; }
  
  labels.push({
    id: Date.now(),
    name, color, status
  });
  
  closeModal();
  renderTable();
  showToast('Label created successfully', 'success');
}

function saveEditLabel(id) {
  const l = labels.find(x => x.id === id);
  const name = document.getElementById('edit-label-name').value.trim();
  const color = document.getElementById('edit-label-color').value.trim();
  const status = document.getElementById('edit-label-status').value;
  
  if (!name || !color) { showToast('Name and color are required', 'error'); return; }
  
  l.name = name;
  l.color = color;
  l.status = status;
  
  closeModal();
  renderTable();
  showToast('Label updated successfully', 'success');
}

function deleteLabel(id) {
  labels = labels.filter(x => x.id !== id);
  closeModal();
  renderTable();
  showToast('Label deleted successfully', 'success');
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
