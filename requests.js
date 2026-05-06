const requests = [
  { id: "#REQ-101", member: "Jane Cooper", type: "Profile Update", details: "Requested to change Job Title to 'Senior UX Designer'.", date: "Today, 09:15 AM", status: "Pending", statusClass: "suspended", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: "#REQ-102", member: "Cameron Williamson", type: "KYC Verification", details: "Uploaded new business registration document for verification.", date: "Yesterday", status: "Pending", statusClass: "suspended", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: "#REQ-103", member: "Brooklyn Simmons", type: "Profile Update", details: "Changed contact email and phone number.", date: "Oct 24, 2023", status: "Approved", statusClass: "active", avatar: "https://randomuser.me/api/portraits/women/68.jpg" },
  { id: "#REQ-104", member: "Leslie Alexander", type: "New Registration", details: "Awaiting final approval for newly created Business account.", date: "Oct 23, 2023", status: "Rejected", statusClass: "inactive", avatar: "https://randomuser.me/api/portraits/women/43.jpg" },
  { id: "#REQ-105", member: "Jacob Jones", type: "Profile Update", details: "Requested company logo change.", date: "Oct 20, 2023", status: "Pending", statusClass: "suspended", avatar: "https://randomuser.me/api/portraits/men/46.jpg" }
];

let currentFilter = 'all';

function renderTable(data = requests) {
  const tbody = document.getElementById('requests-tbody');
  
  if (data.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 40px; color: var(--text-soft); font-weight: 600;">No requests found.</td></tr>';
    return;
  }
  
  tbody.innerHTML = data.map(req => `
    <tr>
      <td style="padding-left: 24px; font-weight: 700; color: var(--text-mid); font-size: 0.9rem;">
        ${req.id}
      </td>
      <td>
        <div style="display: flex; align-items: center; gap: 12px;">
          <img src="${req.avatar}" alt="${req.member}" style="width: 32px; height: 32px; border-radius: 50%; object-fit: cover;">
          <span style="font-weight: 700; color: var(--text);">${req.member}</span>
        </div>
      </td>
      <td style="font-weight: 600; color: var(--blue); font-size: 0.95rem;">${req.type}</td>
      <td style="color: var(--text-mid); font-weight: 600;">${req.date}</td>
      <td>
        <span class="employee-badge ${req.statusClass}">${req.status}</span>
      </td>
      <td style="text-align: right; padding-right: 24px;">
        <button class="btn-primary" style="padding: 6px 16px; font-size: 0.8rem; font-weight: 700;" onclick="openReviewModal('${req.id}')">
          Review
        </button>
      </td>
    </tr>
  `).join('');
}

function setFilter(filterType) {
  currentFilter = filterType;
  
  document.querySelectorAll('.tab-item').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.filter === filterType) btn.classList.add('active');
  });
  
  applyFilters();
}

function applyFilters() {
  const searchTerm = (document.getElementById('top-search-input')?.value || '').toLowerCase();
  
  let filtered = requests.filter(req => {
    const matchesSearch = req.id.toLowerCase().includes(searchTerm) || req.member.toLowerCase().includes(searchTerm) || req.type.toLowerCase().includes(searchTerm);
    const matchesFilter = currentFilter === 'all' || req.status === currentFilter;
    return matchesSearch && matchesFilter;
  });
  
  renderTable(filtered);
}

function openReviewModal(id) {
  const req = requests.find(x => x.id === id);
  if (!req) return;
  
  const modal = document.getElementById('modal-container');
  const content = document.getElementById('modal-content');
  
  content.innerHTML = `
    <div class="modal-header">
      <h3>Review Request ${req.id}</h3>
      <button class="modal-close" onclick="closeModal()"><span class="material-icons-round">close</span></button>
    </div>
    <div class="modal-body">
      <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 24px; padding-bottom: 20px; border-bottom: 1px solid var(--border);">
        <img src="${req.avatar}" alt="${req.member}" style="width: 56px; height: 56px; border-radius: 50%; object-fit: cover;">
        <div>
          <div style="font-size: 1.1rem; font-weight: 800; color: var(--text);">${req.member}</div>
          <div style="font-size: 0.85rem; font-weight: 600; color: var(--text-mid);">${req.type} &bull; ${req.date}</div>
        </div>
      </div>
      
      <div style="background: #f8fafc; border: 1px solid var(--border); border-radius: 12px; padding: 20px; margin-bottom: 24px;">
        <div style="font-size: 0.8rem; font-weight: 800; color: var(--text-soft); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Request Details</div>
        <p style="margin: 0; font-size: 0.95rem; color: var(--text); line-height: 1.5; font-weight: 500;">
          ${req.details}
        </p>
      </div>
      
      ${req.status !== 'Pending' ? `
        <div style="text-align: center; padding: 16px; font-weight: 700; color: ${req.status === 'Approved' ? '#10b981' : '#ef4444'};">
          This request has already been ${req.status.toLowerCase()}.
        </div>
      ` : ''}
    </div>
    <div class="modal-footer" style="display: flex; justify-content: space-between; align-items: center;">
      <button class="btn-outline" onclick="closeModal()">Cancel</button>
      
      ${req.status === 'Pending' ? `
        <div style="display: flex; gap: 12px;">
          <button class="btn-outline" style="color: #ef4444; border-color: #fca5a5;" onclick="updateRequestStatus('${req.id}', 'Rejected')">Reject</button>
          <button class="btn-primary" style="background: #10b981; border-color: #10b981; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2);" onclick="updateRequestStatus('${req.id}', 'Approved')">Approve</button>
        </div>
      ` : ''}
    </div>
  `;
  
  modal.classList.remove('hidden');
}

function updateRequestStatus(id, newStatus) {
  const req = requests.find(x => x.id === id);
  if (req) {
    req.status = newStatus;
    req.statusClass = newStatus === 'Approved' ? 'active' : 'inactive';
  }
  
  closeModal();
  applyFilters();
  showToast(`Request ${id} marked as ${newStatus}`, newStatus === 'Approved' ? 'success' : 'error');
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

document.addEventListener('DOMContentLoaded', () => {
  renderTable();
  
  const searchInput = document.getElementById('top-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
  }
});
