const employees = [
  { id: 1, name: "Leslie Alexander", role: "Sales Representative", phone: "(406) 555-0120", email: "leslie@example.com", status: "Active", statusClass: "active", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 2, name: "Cameron Williamson", role: "Account Manager", phone: "(505) 555-0125", email: "willia@example.com", status: "On Duty", statusClass: "suspended", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 3, name: "Wade Warren", role: "Business Analyst", phone: "(219) 555-0115", email: "warren@example.com", status: "Working", statusClass: "suspended", avatar: "https://randomuser.me/api/portraits/men/45.jpg" },
  { id: 4, name: "Savannah Nguyen", role: "Marketing Coordinator", phone: "(319) 555-0118", email: "savan@example.com", status: "On Delivery", statusClass: "inactive", avatar: "https://randomuser.me/api/portraits/women/68.jpg" },
  { id: 5, name: "Esther Howard", role: "Operations Manager", phone: "(319) 555-0115", email: "esther@example.com", status: "Leading", statusClass: "enterprise", avatar: "https://randomuser.me/api/portraits/women/22.jpg" },
  { id: 6, name: "Bessie Cooper", role: "Supply Chain Coordinator", phone: "(307) 555-0133", email: "bessie@example.com", status: "Team Player", statusClass: "business", avatar: "https://randomuser.me/api/portraits/women/47.jpg" },
  { id: 7, name: "Floyd Miles", role: "Training and Development", phone: "(406) 555-0120", email: "floyd@example.com", status: "Top Performer", statusClass: "starter", avatar: "https://randomuser.me/api/portraits/men/62.jpg" },
  { id: 8, name: "Ralph Edwards", role: "Finance Manager", phone: "(201) 555-0124", email: "ralph@example.com", status: "Project Star", statusClass: "business", avatar: "https://randomuser.me/api/portraits/men/84.jpg" },
  { id: 9, name: "Jenny Wilson", role: "Product Manager", phone: "(205) 555-0100", email: "jenny@example.com", status: "Best Contributor", statusClass: "starter", avatar: "https://randomuser.me/api/portraits/women/91.jpg" },
];

var currentFilter = 'all';

function renderTable(data = employees) {
  const tbody = document.getElementById('employee-tbody');
  if (!tbody) return;

  if (data.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" style="text-align: center; padding: 40px; color: var(--text-soft); font-weight: 600;">No employees found.</td></tr>';
    return;
  }

  tbody.innerHTML = data.map(e => `
    <tr>
      <td>
        <div class="cell-member">
          <img src="${e.avatar}" alt="${e.name}" class="member-avatar">
          <span class="member-name">${e.name}</span>
        </div>
      </td>
      <td style="color: var(--text-mid); font-weight: 600;">${e.role}</td>
      <td style="font-weight: 600; color: var(--text-mid);">${e.phone}</td>
      <td style="font-weight: 600; color: var(--text-mid);">${e.email}</td>
      <td style="text-align: right;">
        <button class="action-btn" onclick="openEmployeeMenu(event, ${e.id})">
          <span class="material-icons-round">more_vert</span>
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
  let filtered = employees.filter(e => {
    const matchesSearch = e.name.toLowerCase().includes(searchTerm) ||
      e.role.toLowerCase().includes(searchTerm) ||
      e.email.toLowerCase().includes(searchTerm);
    const matchesFilter = currentFilter === 'all' || e.status === currentFilter;
    return matchesSearch && matchesFilter;
  });
  renderTable(filtered);
}

function openEmployeeMenu(event, id) {
  event.stopPropagation();
  const emp = employees.find(e => e.id === id);
  if (!emp) return;
  showToast(`Actions for ${emp.name}`, 'info');
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  const icons = { success: 'check_circle', error: 'error', warning: 'warning', info: 'info' };
  const colors = { success: '#10b981', error: '#ef4444', warning: '#f59e0b', info: 'var(--blue)' };
  toast.innerHTML = `
    <span class="material-icons-round" style="color: ${colors[type] || colors.success}; font-size: 20px;">${icons[type] || 'check_circle'}</span>
    <span style="font-size: 0.9rem; font-weight: 600; color: var(--text);">${message}</span>
  `;
  container.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 300); }, 3000);
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

document.addEventListener('DOMContentLoaded', () => {
  renderTable();
  const searchInput = document.getElementById('top-search-input');
  if (searchInput) searchInput.addEventListener('input', applyFilters);
});
