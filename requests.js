const contactRequests = [
  { id: 4, date: "06-May-2026", time: "09:45 AM", company: "GEC International Study Centre", mainContact: "Vinod Gambtoo", mobile: "9825023698", newContactName: "Manoj Paryani", newContact: "9898366292", status: "Pending", statusClass: "pending", firstName: "Manoj", lastName: "Paryani", designation: "Manager", email: "manoj@gec.com" },
  { id: 3, date: "01-May-2026", time: "11:20 AM", company: "CODSOD", mainContact: "Vishal Chaturvedi", mobile: "9519922769", newContactName: "Test User", newContact: "997776434343", status: "Pending", statusClass: "pending", firstName: "Test", lastName: "User", designation: "Admin", email: "test@codsod.com" },
  { id: 2, date: "24-Apr-2026", time: "04:15 PM", company: "Speedtech Systems", mainContact: "Jayesh Jain", mobile: "9825886033", newContactName: "Vishal Chaubey", newContact: "8585857787", status: "Approved", statusClass: "live", firstName: "Vishal", lastName: "Chaubey", designation: "Staff", email: "vishal@speedtech.com" },
  { id: 1, date: "24-Apr-2026", time: "10:05 AM", company: "ggv", mainContact: "ggv hhh", mobile: "8518935212", newContactName: "Test Test", newContact: "8885558885", status: "Pending", statusClass: "pending", firstName: "Test", lastName: "Test", designation: "Manager", email: "test2@ggv.com" }
];

var currentFilter = 'Approved';
var rowsPerPage = 10;
var currentPage = 1;
let sortCol = 'date';
let sortDir = 'desc';

function renderTable() {
  const filtered = getFiltered();
  const total = filtered.length;
  const tbody = document.getElementById('contact-tbody');
  if (!tbody) return;

  const start = (currentPage - 1) * rowsPerPage;
  const end = Math.min(start + rowsPerPage, total);
  const pageItems = filtered.slice(start, end);

  updateSortIcons();

  if (pageItems.length === 0) {
    tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; padding: 64px; color: #94a3b8; font-weight: 600;">No contact requests found.</td></tr>';
    updatePagination(0);
    return;
  }

  tbody.innerHTML = pageItems.map((req, index) => {
    const srNo = start + index + 1;
    return `
    <tr onclick="openUpdateModal(${req.id})" style="height: 72px; border-bottom: 1px solid #f1f5f9; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.background='#f8fafc'" onmouseout="this.style.background='transparent'">
      <td style="text-align: center;"><span style="color: #475569; font-weight: 700; font-size: 0.82rem;">${String(srNo).padStart(2, '0')}</span></td>
      <td style="padding: 16px 24px; text-align: left;">
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <span style="font-weight: 700; color: #475569; font-size: 0.82rem; line-height: 1;">${req.date}</span>
          <span style="font-size: 0.72rem; color: #94a3b8; font-weight: 600; letter-spacing: 0.02em;">${req.time}</span>
        </div>
      </td>
      <td style="padding: 16px 24px; text-align: left;">
        <div class="cell-member">
          <img src="https://i.pravatar.cc/150?u=${req.id + 20}" class="member-avatar" alt="${req.company}">
          <div style="display: flex; flex-direction: column;">
            <span class="cell-member-name">${req.mainContact}</span>
            <span class="cell-member-sub">${req.company}</span>
          </div>
        </div>
      </td>
      <td style="padding: 16px 24px; text-align: left;">
        <span style="font-weight: 700; color: #475569; font-size: 0.82rem;">${req.mobile}</span>
      </td>
      <td style="padding: 16px 24px; text-align: left;">
        <div style="display: flex; flex-direction: column;">
          <span class="cell-member-name">${req.newContactName}</span>
          <span class="cell-member-sub">NEW CONTACT REQUEST</span>
        </div>
      </td>
      <td style="padding: 16px 24px; text-align: left;">
        <span style="font-weight: 700; color: #1e293b; font-size: 0.82rem;">${req.newContact}</span>
      </td>
      <td style="text-align: center;">
        <span class="status-pill ${req.statusClass}" style="padding: 6px 14px; min-width: 90px; justify-content: center; font-size: 0.72rem; font-weight: 800; border-radius: 6px; text-transform: uppercase; letter-spacing: 0.02em; background: ${req.status === 'Approved' ? '#E8F5EC' : '#FFF7ED'}; color: ${req.status === 'Approved' ? '#15803D' : '#A34E0C'}; border: none;">
          ${req.status}
        </span>
      </td>
    </tr>
  `;
  }).join('');

  updatePagination(total);
}

function getFiltered() {
  const searchTerm = (document.getElementById('top-search-input')?.value || '').toLowerCase();
  let filtered = contactRequests.filter(req => {
    const matchesSearch = req.company.toLowerCase().includes(searchTerm) || req.newContactName.toLowerCase().includes(searchTerm) || req.mainContact.toLowerCase().includes(searchTerm);
    const matchesFilter = currentFilter === 'all' || req.status === currentFilter;
    return matchesSearch && matchesFilter;
  });

  filtered.sort((a, b) => {
    let valA = a[sortCol];
    let valB = b[sortCol];
    
    if (sortCol === 'date') {
      // Simple date comparison for demo
      const dateA = new Date(valA);
      const dateB = new Date(valB);
      return sortDir === 'asc' ? dateA - dateB : dateB - dateA;
    }
    
    if (valA < valB) return sortDir === 'asc' ? -1 : 1;
    if (valA > valB) return sortDir === 'asc' ? 1 : -1;
    return 0;
  });

  return filtered;
}

function toggleSort(col) {
  if (sortCol === col) {
    sortDir = sortDir === 'asc' ? 'desc' : 'asc';
  } else {
    sortCol = col;
    sortDir = 'desc';
  }
  renderTable();
}

function updateSortIcons() {
  document.querySelectorAll('.sort-icon').forEach(icon => {
    icon.classList.remove('active');
    icon.textContent = 'unfold_more';
  });

  const activeIcon = document.getElementById(`sort-icon-${sortCol}`);
  if (activeIcon) {
    activeIcon.classList.add('active');
    activeIcon.textContent = sortDir === 'asc' ? 'arrow_upward' : 'arrow_downward';
  }
}

function applyFilters() {
  currentPage = 1;
  renderTable();
}

let tempSelectedStatus = '';

function openUpdateModal(id) {
  const req = contactRequests.find(x => x.id === id);
  if (!req) return;

  tempSelectedStatus = req.status;
  const modalContent = document.getElementById('modal-content');
  const modalOverlay = document.getElementById('modal-container');
  
  modalContent.style.maxWidth = "600px";
  modalContent.innerHTML = `
    <div style="padding: 32px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
        <h2 style="font-size: 1.5rem; font-weight: 800; color: #1e293b;">Contact Request Details</h2>
        <span class="material-icons-round" style="cursor: pointer; color: #94a3b8;" onclick="closeModal()">close</span>
      </div>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 24px;">
        <div>
          <div style="font-size: 0.75rem; font-weight: 800; color: #94a3b8; text-transform: uppercase; margin-bottom: 8px;">Company Name</div>
          <div style="font-weight: 700; color: #1e293b;">${req.company}</div>
        </div>
        <div>
          <div style="font-size: 0.75rem; font-weight: 800; color: #94a3b8; text-transform: uppercase; margin-bottom: 8px;">Request Date</div>
          <div style="font-weight: 600; color: #475569;">${req.date} • ${req.time}</div>
        </div>
        <div>
          <div style="font-size: 0.75rem; font-weight: 800; color: #94a3b8; text-transform: uppercase; margin-bottom: 8px;">Contact Person</div>
          <div style="font-weight: 700; color: #1e293b;">${req.newContactName}</div>
        </div>
        <div>
          <div style="font-size: 0.75rem; font-weight: 800; color: #94a3b8; text-transform: uppercase; margin-bottom: 8px;">Mobile Number</div>
          <div style="font-weight: 600; color: #475569;">${req.newContact}</div>
        </div>
        <div>
          <div style="font-size: 0.75rem; font-weight: 800; color: #94a3b8; text-transform: uppercase; margin-bottom: 8px;">Email Address</div>
          <div style="font-weight: 600; color: #475569;">${req.email}</div>
        </div>
        <div>
          <div style="font-size: 0.75rem; font-weight: 800; color: #94a3b8; text-transform: uppercase; margin-bottom: 8px;">Designation</div>
          <div style="font-weight: 600; color: #475569;">${req.designation}</div>
        </div>
        
        <div style="grid-column: span 2;">
          <div style="font-size: 0.75rem; font-weight: 800; color: #94a3b8; text-transform: uppercase; margin-bottom: 12px;">Update Status</div>
          <div style="display: flex; gap: 24px;">
            <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; color: #334155; font-weight: 600; font-size: 0.9rem;">
              <input type="radio" name="status" value="Pending" ${req.status === 'Pending' ? 'checked' : ''} onchange="tempSelectedStatus='Pending'" style="width: 18px; height: 18px; accent-color: #2563eb; cursor: pointer;">
              Pending
            </label>
            <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; color: #334155; font-weight: 600; font-size: 0.9rem;">
              <input type="radio" name="status" value="Approved" ${req.status === 'Approved' ? 'checked' : ''} onchange="tempSelectedStatus='Approved'" style="width: 18px; height: 18px; accent-color: #2563eb; cursor: pointer;">
              Approved
            </label>
          </div>
        </div>
      </div>
      
      <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #f1f5f9; display: flex; justify-content: flex-end; gap: 12px;">
        <button onclick="closeModal()" class="btn-outline" style="height: 42px; padding: 0 24px; border-radius: 10px; border: 1px solid #e2e8f0; background: #fff; color: #64748b; font-weight: 700; cursor: pointer;">Cancel</button>
        <button onclick="updateRequestStatus(${req.id}, tempSelectedStatus)" class="btn-primary" style="height: 42px; padding: 0 28px; background: #2563eb; border: none; border-radius: 10px; color: #fff; font-weight: 700; cursor: pointer; box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.2);">Save Changes</button>
      </div>
    </div>
  `;
  
  modalOverlay.classList.remove('hidden');
}

function updateRequestStatus(id, status) {
  const req = contactRequests.find(x => x.id === id);
  if (req) {
    req.status = status;
    req.statusClass = status === 'Approved' ? 'live' : 'pending';
    showToast(`Contact request marked as ${status}`, 'success');
    closeModal();
    applyFilters();
  }
}

function deleteRequest(id) {
  if (confirm('Are you sure you want to delete this request?')) {
    const idx = contactRequests.findIndex(x => x.id === id);
    if (idx !== -1) {
      contactRequests.splice(idx, 1);
      closeModal();
      applyFilters();
      showToast('Request deleted successfully', 'error');
    }
  }
}

function verifyRequest(id) {
  const req = contactRequests.find(x => x.id === id);
  if (req) {
    req.status = 'Approved';
    req.statusClass = 'live';
    applyFilters();
    showToast('Contact approved successfully', 'success');
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
  let icon = type === 'success' ? 'check_circle' : (type === 'error' ? 'cancel' : 'info');
  let color = type === 'success' ? '#10b981' : (type === 'error' ? '#ef4444' : '#3b82f6');

  toast.innerHTML = `<span class="material-icons-round" style="color: ${color};">${icon}</span> <span>${message}</span>`;
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
