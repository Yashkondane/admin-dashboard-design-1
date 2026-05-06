const calls = [
  { id: "#CALL-301", member: "Jane Cooper", phone: "+91 98765 43210", email: "jane@example.com", topic: "Sales Inquiry", details: "Wants to discuss upgrading her entire team to the Enterprise plan and needs a demo.", time: "ASAP", status: "Pending", statusClass: "suspended", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: "#CALL-302", member: "Cameron Williamson", phone: "+91 87654 32109", email: "cameron@example.com", topic: "Technical Support", details: "Having issues integrating the API with their custom CRM.", time: "Tomorrow, 10:00 AM", status: "Scheduled", statusClass: "active", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: "#CALL-303", member: "Brooklyn Simmons", phone: "+91 76543 21098", email: "brooklyn@example.com", topic: "Billing Issue", details: "Double charged for the previous month's invoice.", time: "Today, 2:00 PM", status: "Pending", statusClass: "suspended", avatar: "https://randomuser.me/api/portraits/women/68.jpg" },
  { id: "#CALL-304", member: "Leslie Alexander", phone: "+91 65432 10987", email: "leslie@example.com", topic: "General Inquiry", details: "Questions about the new feature roadmap for Q4.", time: "Oct 24, 2023", status: "Completed", statusClass: "inactive", avatar: "https://randomuser.me/api/portraits/women/43.jpg" }
];

let currentFilter = 'all';

function renderTable(data = calls) {
  const tbody = document.getElementById('calls-tbody');
  
  if (data.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 40px; color: var(--text-soft); font-weight: 600;">No call requests found.</td></tr>';
    return;
  }
  
  tbody.innerHTML = data.map(call => `
    <tr>
      <td style="padding-left: 24px; font-weight: 700; color: var(--text-mid); font-size: 0.9rem;">
        ${call.id}
      </td>
      <td>
        <div style="display: flex; align-items: center; gap: 12px;">
          <img src="${call.avatar}" alt="${call.member}" style="width: 32px; height: 32px; border-radius: 50%; object-fit: cover;">
          <span style="font-weight: 700; color: var(--text);">${call.member}</span>
        </div>
      </td>
      <td style="font-weight: 600; color: var(--blue); font-size: 0.95rem;">${call.topic}</td>
      <td style="color: var(--text-mid); font-weight: 600;">${call.time}</td>
      <td>
        <span class="employee-badge ${call.statusClass}">${call.status}</span>
      </td>
      <td style="text-align: right; padding-right: 24px;">
        <button class="btn-primary" style="padding: 6px 16px; font-size: 0.8rem; font-weight: 700; background: ${call.status === 'Completed' ? '#94a3b8' : 'var(--blue)'}; border-color: ${call.status === 'Completed' ? '#94a3b8' : 'var(--blue)'};" onclick="openManageModal('${call.id}')">
          Manage
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
  
  let filtered = calls.filter(call => {
    const matchesSearch = call.id.toLowerCase().includes(searchTerm) || call.member.toLowerCase().includes(searchTerm) || call.topic.toLowerCase().includes(searchTerm);
    const matchesFilter = currentFilter === 'all' || call.status === currentFilter;
    return matchesSearch && matchesFilter;
  });
  
  renderTable(filtered);
}

function openManageModal(id) {
  const call = calls.find(x => x.id === id);
  if (!call) return;
  
  const modal = document.getElementById('modal-container');
  const content = document.getElementById('modal-content');
  
  content.innerHTML = `
    <div class="modal-header">
      <h3>Manage Call ${call.id}</h3>
      <button class="modal-close" onclick="closeModal()"><span class="material-icons-round">close</span></button>
    </div>
    <div class="modal-body">
      <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 24px; padding-bottom: 20px; border-bottom: 1px solid var(--border);">
        <img src="${call.avatar}" alt="${call.member}" style="width: 56px; height: 56px; border-radius: 50%; object-fit: cover;">
        <div>
          <div style="font-size: 1.1rem; font-weight: 800; color: var(--text);">${call.member}</div>
          <div style="font-size: 0.85rem; font-weight: 600; color: var(--text-mid);">${call.phone} &bull; ${call.email}</div>
        </div>
      </div>
      
      <div style="background: #f8fafc; border: 1px solid var(--border); border-radius: 12px; padding: 20px; margin-bottom: 24px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
          <div>
            <div style="font-size: 0.8rem; font-weight: 800; color: var(--text-soft); text-transform: uppercase; letter-spacing: 0.5px;">Topic</div>
            <div style="font-weight: 700; color: var(--blue);">${call.topic}</div>
          </div>
          <div style="text-align: right;">
            <div style="font-size: 0.8rem; font-weight: 800; color: var(--text-soft); text-transform: uppercase; letter-spacing: 0.5px;">Requested Time</div>
            <div style="font-weight: 700; color: var(--text);">${call.time}</div>
          </div>
        </div>
        
        <div style="font-size: 0.8rem; font-weight: 800; color: var(--text-soft); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Context / Notes</div>
        <p style="margin: 0; font-size: 0.95rem; color: var(--text); line-height: 1.5; font-weight: 500;">
          ${call.details}
        </p>
      </div>
    </div>
    <div class="modal-footer" style="display: flex; justify-content: space-between; align-items: center;">
      <button class="btn-outline" onclick="closeModal()">Close</button>
      
      <div style="display: flex; gap: 12px;">
        ${call.status !== 'Scheduled' && call.status !== 'Completed' ? `
          <button class="btn-outline" style="color: var(--blue); border-color: var(--blue);" onclick="updateCallStatus('${call.id}', 'Scheduled')">Mark Scheduled</button>
        ` : ''}
        ${call.status !== 'Completed' ? `
          <button class="btn-primary" style="background: #10b981; border-color: #10b981; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2);" onclick="updateCallStatus('${call.id}', 'Completed')">Mark Completed</button>
        ` : ''}
      </div>
    </div>
  `;
  
  modal.classList.remove('hidden');
}

function updateCallStatus(id, newStatus) {
  const call = calls.find(x => x.id === id);
  if (call) {
    call.status = newStatus;
    if (newStatus === 'Scheduled') call.statusClass = 'active';
    else if (newStatus === 'Completed') call.statusClass = 'inactive';
  }
  
  closeModal();
  applyFilters();
  showToast(`Call Request ${id} marked as ${newStatus}`, 'success');
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
