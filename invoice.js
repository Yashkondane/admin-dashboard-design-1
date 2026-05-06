const invoices = [
  { id: "#INV-2023-001", client: "Acme Corp", date: "Oct 24, 2023", amount: "₹9,999", status: "Paid", statusClass: "active" },
  { id: "#INV-2023-002", client: "Stark Industries", date: "Oct 22, 2023", amount: "₹2,999", status: "Pending", statusClass: "suspended" },
  { id: "#INV-2023-003", client: "Wayne Enterprises", date: "Oct 15, 2023", amount: "₹29,999", status: "Overdue", statusClass: "inactive" },
  { id: "#INV-2023-004", client: "Oscorp", date: "Oct 10, 2023", amount: "₹999", status: "Paid", statusClass: "active" },
  { id: "#INV-2023-005", client: "Globex", date: "Oct 05, 2023", amount: "₹5,499", status: "Paid", statusClass: "active" },
  { id: "#INV-2023-006", client: "Initech", date: "Sep 28, 2023", amount: "₹2,999", status: "Overdue", statusClass: "inactive" },
  { id: "#INV-2023-007", client: "Soylent Corp", date: "Sep 15, 2023", amount: "₹999", status: "Paid", statusClass: "active" },
  { id: "#INV-2023-008", client: "Umbrella Corp", date: "Sep 01, 2023", amount: "₹15,000", status: "Pending", statusClass: "suspended" },
];

let currentFilter = 'all';

function renderTable(data = invoices) {
  const tbody = document.getElementById('invoice-tbody');
  
  if (data.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 40px; color: var(--text-soft); font-weight: 600;">No invoices found.</td></tr>';
    return;
  }
  
  tbody.innerHTML = data.map(inv => `
    <tr>
      <td style="padding-left: 24px; font-weight: 700; color: var(--blue); font-size: 0.95rem;">
        ${inv.id}
      </td>
      <td style="font-weight: 700; color: var(--text);">${inv.client}</td>
      <td style="color: var(--text-mid); font-weight: 600;">${inv.date}</td>
      <td style="font-weight: 800; color: var(--text); font-size: 1.05rem;">${inv.amount}</td>
      <td>
        <span class="employee-badge ${inv.statusClass}">${inv.status}</span>
      </td>
      <td style="text-align: right; padding-right: 24px;">
        <button class="btn-outline" style="padding: 6px 12px; font-size: 0.8rem; font-weight: 700; display: inline-flex; align-items: center; gap: 4px;" onclick="downloadInvoice('${inv.id}')">
          <span class="material-icons-round" style="font-size: 16px;">file_download</span> PDF
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
  
  let filtered = invoices.filter(inv => {
    // Check search term
    const matchesSearch = inv.id.toLowerCase().includes(searchTerm) || inv.client.toLowerCase().includes(searchTerm);
    
    // Check filter pills
    const matchesFilter = currentFilter === 'all' || inv.status === currentFilter;
    
    return matchesSearch && matchesFilter;
  });
  
  renderTable(filtered);
}

function downloadInvoice(id) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="material-icons-round" style="color: #10b981; font-size: 20px;">check_circle</span>
    <span style="font-size: 0.9rem; font-weight: 600; color: var(--text);">Downloading ${id}...</span>
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
