const fields = [
  { id: "f1", name: "First Name", type: "Text", required: true, visibility: "Public" },
  { id: "f2", name: "Last Name", type: "Text", required: true, visibility: "Public" },
  { id: "f3", name: "Company Website", type: "URL", required: false, visibility: "Public" },
  { id: "f4", name: "Industry", type: "Dropdown", required: true, visibility: "Admin Only" },
  { id: "f5", name: "Date of Birth", type: "Date", required: false, visibility: "Admin Only" }
];

let currentFilter = 'all';

function renderTable(data = fields) {
  const tbody = document.getElementById('fields-tbody');
  
  if (data.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 40px; color: var(--text-soft); font-weight: 600;">No fields found.</td></tr>';
    return;
  }
  
  tbody.innerHTML = data.map(field => `
    <tr>
      <td style="padding-left: 24px; color: var(--text-soft);">
        <span class="material-icons-round" style="cursor: grab;">drag_indicator</span>
      </td>
      <td>
        <span style="font-weight: 800; color: var(--text); font-size: 0.95rem;">${field.name}</span>
      </td>
      <td style="font-weight: 600; color: var(--text-mid);">
        <div style="display: flex; align-items: center; gap: 6px;">
          <span class="material-icons-round" style="font-size: 16px; color: var(--blue);">
            ${field.type === 'Text' ? 'short_text' : field.type === 'URL' ? 'link' : field.type === 'Dropdown' ? 'arrow_drop_down_circle' : 'calendar_today'}
          </span>
          ${field.type}
        </div>
      </td>
      <td>
        <span class="employee-badge ${field.required ? 'suspended' : 'active'}" style="${field.required ? 'background: #fffbeb; color: #f59e0b;' : 'background: #f1f5f9; color: var(--text-mid);'}">${field.required ? 'Required' : 'Optional'}</span>
      </td>
      <td>
        <span style="font-weight: 700; color: ${field.visibility === 'Public' ? '#10b981' : 'var(--text-soft)'}; font-size: 0.85rem;">
          ${field.visibility}
        </span>
      </td>
      <td style="text-align: right; padding-right: 24px;">
        <button class="header-icon-btn" onclick="openEditModal('${field.id}')" title="Edit"><span class="material-icons-round" style="font-size: 18px;">edit</span></button>
        <button class="header-icon-btn" onclick="deleteField('${field.id}')" title="Delete" style="color: #ef4444;"><span class="material-icons-round" style="font-size: 18px;">delete_outline</span></button>
      </td>
    </tr>
  `).join('');
}

function setFilter(filterType) {
  currentFilter = filterType;
  
  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.filter === filterType) {
      btn.classList.add('active');
    }
  });
  
  applyFilters();
}

function applyFilters() {
  const searchTerm = (document.getElementById('top-search-input')?.value || '').toLowerCase();
  
  let filtered = fields.filter(field => {
    const matchesSearch = field.name.toLowerCase().includes(searchTerm) || field.type.toLowerCase().includes(searchTerm);
    let matchesFilter = true;
    if (currentFilter === 'Required') matchesFilter = field.required === true;
    if (currentFilter === 'Optional') matchesFilter = field.required === false;
    
    return matchesSearch && matchesFilter;
  });
  
  renderTable(filtered);
}

function openCreateModal() {
  const modal = document.getElementById('modal-container');
  const content = document.getElementById('modal-content');
  
  content.innerHTML = `
    <div class="modal-header">
      <h3>Create Custom Field</h3>
      <button class="modal-close" onclick="closeModal()"><span class="material-icons-round">close</span></button>
    </div>
    <div class="modal-body">
      <div class="modal-grid-1">
        <div>
          <label class="modal-label">Field Name</label>
          <input class="modal-input" type="text" id="field-name" placeholder="e.g. LinkedIn Profile">
        </div>
        <div>
          <label class="modal-label">Input Type</label>
          <select class="modal-input" id="field-type">
            <option value="Text">Text</option>
            <option value="URL">URL</option>
            <option value="Dropdown">Dropdown Menu</option>
            <option value="Date">Date Picker</option>
            <option value="Number">Number</option>
          </select>
        </div>
        
        <div style="margin-top: 16px; border-top: 1px solid var(--border); padding-top: 16px;">
          <label style="display: flex; align-items: center; gap: 12px; cursor: pointer; margin-bottom: 12px;">
            <input type="checkbox" id="field-required" style="width: 18px; height: 18px; accent-color: var(--blue);">
            <span style="font-weight: 700; color: var(--text); font-size: 0.95rem;">Make this field required</span>
          </label>
          
          <label style="display: flex; align-items: center; gap: 12px; cursor: pointer;">
            <input type="checkbox" id="field-hidden" style="width: 18px; height: 18px; accent-color: var(--blue);">
            <span style="font-weight: 700; color: var(--text); font-size: 0.95rem;">Admin Only (Hide from public profile)</span>
          </label>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn-primary" onclick="saveNewField()"><span class="material-icons-round">add</span> Add Field</button>
    </div>
  `;
  
  modal.classList.remove('hidden');
}

function openEditModal(id) {
  const field = fields.find(x => x.id === id);
  if (!field) return;
  
  showToast('Edit mode opened for ' + field.name, 'info');
  // For demo, we just show a toast rather than building out the full update flow.
}

function saveNewField() {
  const name = document.getElementById('field-name').value.trim();
  const type = document.getElementById('field-type').value;
  const isRequired = document.getElementById('field-required').checked;
  const isHidden = document.getElementById('field-hidden').checked;
  
  if (!name) {
    showToast('Field Name is required', 'error');
    return;
  }
  
  fields.push({
    id: 'f' + Date.now(),
    name: name,
    type: type,
    required: isRequired,
    visibility: isHidden ? "Admin Only" : "Public"
  });
  
  closeModal();
  applyFilters();
  showToast(`Custom field "${name}" added successfully!`, 'success');
}

function deleteField(id) {
  const index = fields.findIndex(x => x.id === id);
  if (index > -1) {
    const name = fields[index].name;
    fields.splice(index, 1);
    applyFilters();
    showToast(`Field "${name}" deleted.`, 'success');
  }
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
  } else if (type === 'info') {
    icon = 'info';
    color = 'var(--blue)';
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

document.addEventListener('DOMContentLoaded', () => {
  renderTable();
  
  const searchInput = document.getElementById('top-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
  }
});
