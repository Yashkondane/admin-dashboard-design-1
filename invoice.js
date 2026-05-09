// ===== DATA =====
const invoices = [
  {
    id: "ISPL/1002/2026-27",
    date: "28-Apr-2026",
    company: "Speedtech Systems",
    location: "Ahmedabad, Gujarat, India",
    amount: "₹ 18500",
    status: "Unpaid",
    planName: "TK-Premium",
    validity: "04-28-2026 - 04-28-2027",
    bankInfo: {
      date: "01-01-001",
      amount: "18500",
      bankName: "",
      mode: "Cash",
      refNo: ""
    }
  },
  {
    id: "ISPL/1001/2026-27",
    date: "24-Apr-2026",
    company: "Speedtech Systems",
    location: "Ahmedabad, Gujarat, India",
    amount: "₹ 5000",
    status: "Paid",
    planName: "TK-Lite",
    validity: "04-24-2026 - 05-24-2026",
    bankInfo: {
      date: "24-04-2026",
      amount: "5000",
      bankName: "HDFC Bank",
      mode: "Bank Transfer",
      refNo: "TXN9928341"
    }
  }
];

var currentFilter = 'all';
let expandedRows = new Set();
let activeInvoiceId = null;
let currentPage = 1;
let rowsPerPage = 10;

// ===== RENDER =====
function renderTable() {
  const tbody = document.getElementById('invoice-tbody');
  if (!tbody) return;

  const filtered = currentFilter === 'all' 
    ? invoices 
    : invoices.filter(inv => inv.status.toLowerCase() === currentFilter.toLowerCase());

  updateBadges();
  
  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / rowsPerPage);
  
  if (currentPage > totalPages && totalPages > 0) currentPage = totalPages;

  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const paginated = filtered.slice(start, end);

  if (totalItems === 0) {
    tbody.innerHTML = '<tr><td colspan="8" style="text-align: center; padding: 60px; color: var(--text-soft); font-weight: 700;">No invoices found matching "' + currentFilter + '".</td></tr>';
    document.getElementById('showing-text').textContent = 'Showing 0 invoices';
    document.getElementById('pagination-controls').innerHTML = '';
    return;
  }

  const showingStart = totalItems === 0 ? 0 : start + 1;
  const showingEnd = Math.min(end, totalItems);
  document.getElementById('showing-text').textContent = `Showing ${showingStart} to ${showingEnd} of ${totalItems} invoices`;

  renderPagination(totalPages);

  tbody.innerHTML = paginated.map((inv, i) => {
    const isExpanded = expandedRows.has(inv.id);
    let statusClass = 'badge-warning';
    if (inv.status === 'Paid') statusClass = 'badge-active';
    if (inv.status === 'Cancel') statusClass = 'badge-inactive';

    return `
      <tr class="invoice-row ${isExpanded ? 'expanded' : ''}" style="cursor: pointer;" onclick="toggleInvoiceRow('${inv.id}')">
        <td>
          <span style="font-size: 0.85rem; color: #94a3b8; font-weight: 600;">${String(i + 1).padStart(2, '0')}</span>
        </td>
        <td>
          <span style="font-weight: 600; color: #1e293b; font-size: 0.88rem;">${inv.id}</span>
        </td>
        <td>
          <span style="font-weight: 600; color: #1e293b; font-size: 0.88rem;">${inv.planName || 'N/A'}</span>
        </td>
        <td>
          <span style="color: #475569; font-weight: 500; font-size: 0.82rem;">${inv.validity || 'N/A'}</span>
        </td>
        <td>
          <span style="font-weight: 600; color: #1e293b; font-size: 0.88rem;">${inv.company}</span>
        </td>
        <td>
          <span style="font-weight: 600; color: #1e293b; font-size: 0.95rem;">${inv.amount.replace('₹ ', '')}</span>
        </td>
        <td style="text-align: center;">
          <span class="status-badge ${statusClass}">${inv.status}</span>
        </td>
        <td style="text-align: right; position: relative;">
          <div style="display: flex; align-items: center; justify-content: flex-end; gap: 8px;">
            <span class="material-icons-round" style="color: #94a3b8; font-size: 20px; transition: transform 0.3s; transform: rotate(${isExpanded ? '180deg' : '0deg'})">expand_more</span>
            <button class="header-icon-btn" onclick="toggleActionMenu(event, '${inv.id}')">
              <span class="material-icons-round">more_vert</span>
            </button>
            <div class="dropdown-menu" id="menu-${inv.id}" style="position: absolute; top: calc(100% - 10px); right: 24px; background: white; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); width: 160px; z-index: 100; display: none; flex-direction: column; overflow: hidden;">
              <button onclick="openStatusModal(event, '${inv.id}')" style="padding: 10px 16px; text-align: left; background: none; border: none; font-size: 0.85rem; color: #1e293b; cursor: pointer; display: flex; align-items: center; gap: 8px; width: 100%;">
                <span class="material-icons-round" style="font-size: 16px; color: #64748b;">edit</span> Update Status
              </button>
              <button onclick="event.stopPropagation(); alert('Send Email')" style="padding: 10px 16px; text-align: left; background: none; border: none; font-size: 0.85rem; color: #1e293b; cursor: pointer; display: flex; align-items: center; gap: 8px; width: 100%;">
                <span class="material-icons-round" style="font-size: 16px; color: #64748b;">mail</span> Send Email
              </button>
              <button onclick="event.stopPropagation(); alert('Download PDF')" style="padding: 10px 16px; text-align: left; background: none; border: none; font-size: 0.85rem; color: #1e293b; cursor: pointer; display: flex; align-items: center; gap: 8px; width: 100%;">
                <span class="material-icons-round" style="font-size: 16px; color: #64748b;">download</span> Download PDF
              </button>
              <button onclick="event.stopPropagation(); alert('Delete')" style="padding: 10px 16px; text-align: left; background: none; border: none; font-size: 0.85rem; color: #ef4444; cursor: pointer; display: flex; align-items: center; gap: 8px; width: 100%; border-top: 1px solid #f1f5f9;">
                <span class="material-icons-round" style="font-size: 16px; color: #ef4444;">delete</span> Delete
              </button>
            </div>
          </div>
        </td>
      </tr>
      <tr class="expanded-content ${isExpanded ? '' : 'hidden'}">
        <td colspan="7" style="padding: 0;">
          <div class="dropdown-pop" style="padding: 24px 32px; background: #f8fafc; border-bottom: 1px solid #e2e8f0;">
            <div style="display: grid; grid-template-columns: 1fr; gap: 24px;">
              <div>
                <h4 style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
                  <span class="material-icons-round" style="font-size: 18px; color: #475569;">account_balance</span>
                  Bank Info
                </h4>
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;">
                  <div style="display: flex; flex-direction: column; gap: 4px;">
                    <span style="font-size: 0.72rem; color: #64748b; font-weight: 600;">DATE</span>
                    <span style="font-size: 0.85rem; color: #1e293b; font-weight: 600;">${inv.bankInfo?.date || '-'}</span>
                  </div>
                  <div style="display: flex; flex-direction: column; gap: 4px;">
                    <span style="font-size: 0.72rem; color: #64748b; font-weight: 600;">AMOUNT</span>
                    <span style="font-size: 0.85rem; color: #1e293b; font-weight: 600;">${inv.bankInfo?.amount || '-'}</span>
                  </div>
                  <div style="display: flex; flex-direction: column; gap: 4px;">
                    <span style="font-size: 0.72rem; color: #64748b; font-weight: 600;">BANK NAME</span>
                    <span style="font-size: 0.85rem; color: #1e293b; font-weight: 600;">${inv.bankInfo?.bank || '-'}</span>
                  </div>
                  <div style="display: flex; flex-direction: column; gap: 4px;">
                    <span style="font-size: 0.72rem; color: #64748b; font-weight: 600;">MODE</span>
                    <span style="font-size: 0.85rem; color: #1e293b; font-weight: 600;">${inv.bankInfo?.mode || '-'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

// ===== INTERACTIONS =====
function setFilter(f) {
  currentFilter = f;
  document.querySelectorAll('.tab-item').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-filter') === f);
  });
  renderTable();
}

function updateBadges() {
  const all = invoices.length;
  const paid = invoices.filter(i => i.status === 'Paid').length;
  const unpaid = invoices.filter(i => i.status === 'Unpaid').length;
  const cancel = invoices.filter(i => i.status === 'Cancel').length;

  const bAll = document.getElementById('badge-all');
  const bPaid = document.getElementById('badge-paid');
  const bUnpaid = document.getElementById('badge-unpaid');
  const bCancel = document.getElementById('badge-cancel');

  if (bAll) bAll.textContent = all;
  if (bPaid) bPaid.textContent = paid;
  if (bUnpaid) bUnpaid.textContent = unpaid;
  if (bCancel) bCancel.textContent = cancel;
}

function toggleInvoiceRow(id) {
  if (expandedRows.has(id)) {
    expandedRows.delete(id);
  } else {
    expandedRows.add(id);
  }
  renderTable();
}

function toggleActionMenu(event, id) {
  event.stopPropagation();
  const allMenus = document.querySelectorAll('.dropdown-menu');
  const targetMenu = document.getElementById(`menu-${id}`);
  const isShowing = targetMenu.classList.contains('show');

  allMenus.forEach(m => m.style.display = 'none');
  if (!isShowing) {
    targetMenu.style.display = 'flex';
    targetMenu.classList.add('show');
  } else {
    targetMenu.classList.remove('show');
  }
}

document.addEventListener('click', () => {
  document.querySelectorAll('.dropdown-menu').forEach(m => {
    m.style.display = 'none';
    m.classList.remove('show');
  });
});

// ===== MODAL LOGIC =====
function openStatusModal(event, id) {
  event.stopPropagation();
  activeInvoiceId = id;
  const inv = invoices.find(i => i.id === id);
  if (!inv) return;

  // Reset modal
  const radios = document.getElementsByName('status');
  radios.forEach(r => {
    if (r.value === inv.status) r.checked = true;
  });

  if (inv.status === 'Paid') {
    togglePaidFields(true);
    document.getElementById('status-date').value = inv.bankInfo.date !== '01-01-001' ? inv.bankInfo.date : '';
    document.getElementById('status-mode').value = inv.bankInfo.mode;
    document.getElementById('status-ref').value = inv.bankInfo.refNo;
    document.getElementById('status-amount').value = inv.bankInfo.amount;
    document.getElementById('status-bank').value = inv.bankInfo.bankName;
  } else {
    togglePaidFields(false);
  }

  document.getElementById('modal-container').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('modal-container').classList.add('hidden');
}

function togglePaidFields(show) {
  const fields = document.getElementById('paid-fields');
  if (show) {
    fields.classList.remove('hidden');
  } else {
    fields.classList.add('hidden');
  }
}

function saveStatus() {
  const inv = invoices.find(i => i.id === activeInvoiceId);
  if (!inv) return;

  const selectedStatus = document.querySelector('input[name="status"]:checked').value;
  inv.status = selectedStatus;

  if (selectedStatus === 'Paid') {
    inv.bankInfo = {
      date: document.getElementById('status-date').value,
      mode: document.getElementById('status-mode').value,
      refNo: document.getElementById('status-ref').value,
      amount: document.getElementById('status-amount').value,
      bankName: document.getElementById('status-bank').value
    };
  }

  closeModal();
  renderTable();
  showToast('Invoice status updated', 'success');
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
function renderPagination(totalPages) {
  const container = document.getElementById('pagination-controls');
  if (!container) return;
  container.innerHTML = '';

  if (totalPages <= 1) return;

  const createBtn = (content, page, active = false, disabled = false) => {
    const btn = document.createElement('button');
    btn.className = `page-btn ${active ? 'active' : ''}`;
    btn.innerHTML = content;
    btn.disabled = disabled;
    if (!disabled && !active) {
      btn.onclick = () => {
        currentPage = page;
        renderTable();
      };
    }
    return btn;
  };

  container.appendChild(createBtn('<span class="material-icons-round">chevron_left</span>', currentPage - 1, false, currentPage === 1));

  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      container.appendChild(createBtn(i, i, i === currentPage));
    } else if (i === currentPage - 2 || i === currentPage + 2) {
      const dots = document.createElement('span');
      dots.textContent = '...';
      dots.style.margin = '0 8px';
      dots.style.color = 'var(--text-soft)';
      container.appendChild(dots);
    }
  }

  container.appendChild(createBtn('<span class="material-icons-round">chevron_right</span>', currentPage + 1, false, currentPage === totalPages));
}

function updateRowsPerPage(val) {
  rowsPerPage = parseInt(val);
  currentPage = 1;
  renderTable();
}
