const calls = [
  { id: 1, date: "08-May-2026", company: "Paxaal International", location: "Ahmedabad, Gujarat, India", name: "Sanjay Jain", mobile: "8980652020", requestNo: "8980652020", topic: "Request a callback", details: "Wants to discuss premium membership features.", status: "Callback" },
  { id: 6, date: "09-May-2026", company: "Spark Solutions", location: "Mumbai, Maharashtra, India", name: "Ira Patel", mobile: "9876543210", requestNo: "9876543210", topic: "Callback Request", details: "Urgent callback required regarding the new dashboard setup.", status: "Callback" },
  { id: 2, date: "07-May-2026", company: "Speedtech Systems", location: "Ahmedabad, Gujarat, India", name: "Vishal Chaubey", mobile: "8585857787", requestNo: "8980652020", topic: "Request a callback", details: "Technical issue with login.", status: "Callback" },
  { id: 3, date: "06-May-2026", company: "GEC International Study Centre", location: "Ahmedabad, Gujarat, India", name: "Vinod Gambtoo", mobile: "9825023698", requestNo: "9825023698", topic: "Membership", details: "Inquiry about bulk membership for students.", status: "Close" },
  { id: 4, date: "01-May-2026", company: "Speedtech Systems", location: "Ahmedabad, Gujarat, India", name: "Jayesh Jain", mobile: "9825886033", requestNo: "9825886033", topic: "Billing", details: "Question about latest invoice.", status: "Open" },
  { id: 5, date: "30-Apr-2026", company: "CODSOD", location: "Gorakhpur, Uttar Pradesh, India", name: "Vishal Chaturvedi", mobile: "9519922769", requestNo: "9519922769", topic: "Membership", details: "How to renew membership?", status: "Close" }
];

var currentFilter = 'all';
let sortCol = 'date';
let sortDir = 'desc';
let currentPage = 1;
let rowsPerPage = 10;

function renderTable() {
  const filtered = getFiltered();
  const total = filtered.length;
  const start = (currentPage - 1) * rowsPerPage;
  const end = Math.min(start + rowsPerPage, total);
  const data = filtered.slice(start, end);

  updateSortIcons();
  const tbody = document.getElementById('calls-tbody');
  if (!tbody) return;

  if (total === 0) {
    tbody.innerHTML = '<tr><td colspan="9" style="text-align: center; padding: 100px; color: var(--text-soft); font-weight: 700;">No call requests found matching your search</td></tr>';
    updateShowing(0, 0, 0);
    renderPagination(0);
    return;
  }

  tbody.innerHTML = data.map(call => {
    // Member-style colorful badges
    let statusBg = '#E8F5EC';
    let statusColor = '#15803D';
    let statusBorder = '#22C55E';
    
    if (call.status === 'Close') {
      statusBg = '#F3F4F6'; statusColor = '#4B5563'; statusBorder = '#D1D5DB';
    } else if (call.status === 'Callback') {
      statusBg = '#FFF7ED'; statusColor = '#A34E0C'; statusBorder = '#FB923C';
    }

    return `
    <tr onclick="openManageModal(${call.id})" style="border-bottom: 1px solid #f1f5f9; cursor: pointer; transition: all 0.1s;">
      <td style="color: #475569; font-weight: 700; font-size: 0.82rem; padding: 16px 24px;">${call.date}</td>
      <td style="padding: 16px 24px;">
        <div class="cell-member">
          <img src="https://i.pravatar.cc/150?u=${call.id}" class="member-avatar" alt="${call.name}">
          <div style="display: flex; flex-direction: column;">
            <span class="cell-member-name">${call.name}</span>
            <span class="cell-member-sub">${call.company}</span>
          </div>
        </div>
      </td>
      <td style="color: #475569; font-weight: 700; font-size: 0.82rem; padding: 16px 24px;">${call.location}</td>
      <td style="color: #1e293b; font-weight: 700; font-size: 0.82rem; padding: 16px 24px;">${call.mobile}</td>
      <td style="color: #64748b; font-weight: 700; font-size: 0.82rem; padding: 16px 24px;">${call.requestNo}</td>
      <td style="color: #1e293b; font-weight: 700; font-size: 0.82rem; padding: 16px 24px;">${call.topic}</td>
      <td style="text-align: left; padding: 16px 24px;">
        <div class="status-badge" style="min-width: 100px; padding: 6px 14px; font-size: 0.75rem; background: ${statusBg}; color: ${statusColor}; border: 1px solid ${statusBorder}; border-radius: 6px; display: inline-flex; align-items: center; justify-content: center; gap: 6px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.02em;">
          <span style="width: 6px; height: 6px; border-radius: 50%; background: ${statusColor};"></span>
          ${call.status}
        </div>
      </td>
    </tr>
    `;
  }).join('');

  updateShowing(start + 1, end, total);
  renderPagination(total);
}

function getFiltered() {
  const searchTerm = (document.getElementById('top-search-input')?.value || '').toLowerCase();
  let filtered = calls.filter(call => {
    const matchesSearch = call.company.toLowerCase().includes(searchTerm) || call.name.toLowerCase().includes(searchTerm) || call.mobile.includes(searchTerm);
    const matchesFilter = currentFilter === 'all' || call.status === currentFilter;
    return matchesSearch && matchesFilter;
  });

  filtered.sort((a, b) => {
    let valA = a[sortCol];
    let valB = b[sortCol];
    if (valA < valB) return sortDir === 'asc' ? -1 : 1;
    if (valA > valB) return sortDir === 'asc' ? 1 : -1;
    return 0;
  });

  return filtered;
}

function setFilter(status) {
  currentFilter = status;
  currentPage = 1;
  document.querySelectorAll('.tab-item').forEach(p => p.classList.remove('active'));
  const active = document.querySelector(`.tab-item[data-filter="${status}"]`);
  if (active) active.classList.add('active');
  renderTable();
}

function toggleSort(col) {
  if (sortCol === col) sortDir = sortDir === 'asc' ? 'desc' : 'asc';
  else { sortCol = col; sortDir = 'asc'; }
  renderTable();
}

function updateSortIcons() {
  document.querySelectorAll('.sort-icon').forEach(icon => {
    icon.textContent = 'unfold_more';
    icon.style.opacity = '0.3';
  });
  const activeIcon = document.getElementById(`sort-icon-${sortCol}`);
  if (activeIcon) {
    activeIcon.textContent = sortDir === 'asc' ? 'north' : 'south';
    activeIcon.style.opacity = '1';
  }
}

function updateShowing(start, end, total) {
  const showingText = document.getElementById('showing-text');
  if (showingText) showingText.textContent = `Showing ${start} to ${end} of ${total} requests`;
}

function renderPagination(total) {
  const tp = Math.ceil(total / rowsPerPage);
  const controls = document.getElementById('pagination-controls');
  if (!controls) return;
  let html = '';
  html += `<button class="page-btn" ${currentPage === 1 ? 'disabled style="opacity:0.4;"' : `onclick="goToPage(${currentPage - 1})"`}><span class="material-icons-round">chevron_left</span></button>`;
  for (let i = 1; i <= tp; i++) {
    html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})">${i}</button>`;
  }
  html += `<button class="page-btn" ${currentPage === tp ? 'disabled style="opacity:0.4;"' : `onclick="goToPage(${currentPage + 1})"`}><span class="material-icons-round">chevron_right</span></button>`;
  controls.innerHTML = html;
}

function goToPage(page) {
  currentPage = page;
  renderTable();
}

function updatePageSize(size) {
  rowsPerPage = parseInt(size);
  currentPage = 1;
  renderTable();
}

function toggleCallMessage(event, id) {
  event.stopPropagation();
  const pop = document.getElementById(`msg-pop-${id}`);
  document.querySelectorAll('[id^="msg-pop-"]').forEach(p => {
    if (p.id !== `msg-pop-${id}`) p.classList.add('hidden');
  });
  pop.classList.toggle('hidden');
}

let tempSelectedStatus = '';

function selectStatus(newStatus) {
  tempSelectedStatus = newStatus;
  const buttons = document.querySelectorAll('.status-select-btn');
  buttons.forEach(btn => {
    const btnStatus = btn.getAttribute('data-status');
    const isActive = btnStatus === newStatus;
    
    const icon = btn.querySelector('.material-icons-round');
    if (icon) icon.style.display = isActive ? 'block' : 'none';
  });
}

function openManageModal(id) {
  const call = calls.find(c => c.id === id);
  if (!call) return;

  tempSelectedStatus = call.status;
  const modalContent = document.getElementById('modal-content');
  const modalOverlay = document.getElementById('modal-container');
  
  modalContent.innerHTML = `
    <div style="padding: 32px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
        <h2 style="font-size: 1.5rem; font-weight: 800; color: #1e293b;">Call Request Details</h2>
        <span class="material-icons-round" style="cursor: pointer; color: #94a3b8;" onclick="closeModal()">close</span>
      </div>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 24px;">
        <div>
          <div style="font-size: 0.75rem; font-weight: 800; color: #94a3b8; text-transform: uppercase; margin-bottom: 8px;">Company Name</div>
          <div style="font-weight: 700; color: #1e293b;">${call.company}</div>
        </div>
        <div>
          <div style="font-size: 0.75rem; font-weight: 800; color: #94a3b8; text-transform: uppercase; margin-bottom: 8px;">Request Date</div>
          <div style="font-weight: 600; color: #475569;">${call.date}</div>
        </div>
        <div>
          <div style="font-size: 0.75rem; font-weight: 800; color: #94a3b8; text-transform: uppercase; margin-bottom: 8px;">Contact Person</div>
          <div style="font-weight: 700; color: #1e293b;">${call.name}</div>
        </div>
        <div>
          <div style="font-size: 0.75rem; font-weight: 800; color: #94a3b8; text-transform: uppercase; margin-bottom: 8px;">Mobile Number</div>
          <div style="font-weight: 600; color: #475569;">${call.mobile}</div>
        </div>
        <div style="grid-column: span 2;">
          <div style="font-size: 0.75rem; font-weight: 800; color: #94a3b8; text-transform: uppercase; margin-bottom: 12px;">Update Status</div>
          <div style="display: flex; gap: 24px;">
            <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; color: #334155; font-weight: 600; font-size: 0.9rem;">
              <input type="radio" name="status" value="Open" ${call.status === 'Open' ? 'checked' : ''} onchange="tempSelectedStatus='Open'" style="width: 18px; height: 18px; accent-color: var(--blue); cursor: pointer;">
              Open
            </label>
            <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; color: #334155; font-weight: 600; font-size: 0.9rem;">
              <input type="radio" name="status" value="Callback" ${call.status === 'Callback' ? 'checked' : ''} onchange="tempSelectedStatus='Callback'" style="width: 18px; height: 18px; accent-color: var(--blue); cursor: pointer;">
              Callback
            </label>
            <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; color: #334155; font-weight: 600; font-size: 0.9rem;">
              <input type="radio" name="status" value="Close" ${call.status === 'Close' ? 'checked' : ''} onchange="tempSelectedStatus='Close'" style="width: 18px; height: 18px; accent-color: var(--blue); cursor: pointer;">
              Closed
            </label>
          </div>
        </div>
      </div>
      
      <div style="margin-bottom: 24px;">
        <div style="font-size: 0.75rem; font-weight: 800; color: #94a3b8; text-transform: uppercase; margin-bottom: 8px;">Location</div>
        <div style="font-weight: 600; color: #475569;">${call.location}</div>
      </div>
      
      <div style="margin-bottom: 24px;">
        <div style="font-size: 0.75rem; font-weight: 800; color: #94a3b8; text-transform: uppercase; margin-bottom: 12px;">Message</div>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px 20px; font-weight: 600; color: #334155; line-height: 1.6;">
          ${call.details}
        </div>
      </div>
      
      <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #f1f5f9; display: flex; justify-content: flex-end; gap: 12px;">
        <button onclick="closeModal()" class="btn-outline" style="height: 42px; padding: 0 24px; border-radius: 10px;">Cancel</button>
        <button onclick="updateStatus(${call.id}, tempSelectedStatus)" class="btn-primary" style="height: 42px; padding: 0 28px; background: var(--blue); border: none; border-radius: 10px; font-weight: 700; box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.2);">Save Changes</button>
      </div>
    </div>
  `;
  
  modalOverlay.classList.remove('hidden');
}

function closeModal() {
  document.getElementById('modal-container').classList.add('hidden');
}

function updateStatus(id, status) {
  const call = calls.find(c => c.id === id);
  if (call) {
    call.status = status;
    showToast(`Request marked as ${status}`, 'success');
    closeModal();
    renderTable();
  }
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span class="material-icons-round">${type === 'success' ? 'check_circle' : 'error'}</span> ${message}`;
  container.appendChild(toast);
  setTimeout(() => { toast.classList.add('fade-out'); setTimeout(() => toast.remove(), 300); }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
  renderTable();
  const searchInput = document.getElementById('top-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      currentPage = 1;
      renderTable();
    });
  }
});

document.addEventListener('click', () => {
  document.querySelectorAll('[id^="msg-pop-"]').forEach(p => p.classList.add('hidden'));
});

function toggleNavGroup(btn) {
  const group = btn.closest('.nav-group');
  const sub = group.querySelector('.nav-sub');
  if (group.classList.contains('open')) {
    sub.style.height = '0px';
    group.classList.remove('open');
  } else {
    sub.style.height = sub.scrollHeight + 'px';
    group.classList.add('open');
  }
}
