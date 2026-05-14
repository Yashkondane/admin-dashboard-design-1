// ===== DATA =====
const invoices = [
  {
    id: "ISPL/1002/2026-27",
    date: "28-Apr-2026",
    company: "Speedtech Systems",
    location: "Ahmedabad, Gujarat, India",
    amount: "₹ 18,500",
    status: "Unpaid",
    planName: "TK-Premium",
    validity: "28-Apr-2026 to 28-Apr-2027",
    bankInfo: {
      date: "01-Jan-2001",
      amount: "18,500",
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
    amount: "₹ 5,000",
    status: "Paid",
    planName: "TK-Lite",
    validity: "24-Apr-2026 to 24-May-2026",
    bankInfo: {
      date: "24-Apr-2026",
      amount: "5,000",
      bankName: "HDFC Bank",
      mode: "Bank Transfer",
      refNo: "TXN9928341"
    }
  }
];

var currentFilter = 'paid';
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

    const srNo = start + i + 1;
    return `
      <tr class="invoice-row ${isExpanded ? 'expanded' : ''}" style="cursor: pointer; height: 68px;" onclick="toggleInvoiceRow('${inv.id}')">
        <td style="text-align: center; padding-left: 32px;"><span style="color: #475569; font-weight: 700; font-size: 0.82rem;">${String(srNo).padStart(2, '0')}</span></td>
        <td style="padding: 12px 16px;">
          <div style="display: flex; flex-direction: column; gap: 3px;">
            <span style="font-weight: 700; color: #1e293b; font-size: 0.88rem; line-height: 1.2;">${inv.company}</span>
            <span style="font-size: 0.72rem; color: #64748b; font-weight: 600; opacity: 0.8;">${inv.location}</span>
          </div>
        </td>
        <td style="padding: 12px 16px;">
          <span style="font-weight: 600; color: #475569; font-size: 0.82rem;">${inv.date}</span>
        </td>
        <td style="padding: 12px 16px;">
          <span style="font-weight: 700; color: #1e293b; font-size: 0.82rem; letter-spacing: 0.01em;">${inv.id}</span>
        </td>
        <td style="padding: 12px 16px;">
          <div style="display: flex; flex-direction: column; gap: 3px;">
            <span style="font-weight: 700; color: #1e293b; font-size: 0.85rem; line-height: 1.2;">${inv.planName || 'N/A'}</span>
            <span style="font-size: 0.7rem; color: #64748b; font-weight: 600; opacity: 0.8;">${inv.validity || 'N/A'}</span>
          </div>
        </td>
        <td style="padding: 12px 16px;">
          <span style="font-weight: 600; color: #1e293b; font-size: 0.88rem; letter-spacing: -0.01em;">${inv.amount}</span>
        </td>
        <td style="text-align: center;">
          <span class="status-badge ${statusClass}">${inv.status}</span>
        </td>
        <td style="text-align: right; position: relative; padding: 12px 16px; padding-right: 32px; overflow: visible;">
          <div style="display: flex; align-items: center; justify-content: flex-end; gap: 8px;">
            <span class="material-icons-round" style="color: #94a3b8; font-size: 20px; transition: transform 0.3s; transform: rotate(${isExpanded ? '180deg' : '0deg'})">expand_more</span>
            <button class="header-icon-btn" onclick="window.toggleActionMenu(event, '${inv.id}')">
              <span class="material-icons-round">more_vert</span>
            </button>
            <div class="dropdown-menu" id="menu-${inv.id}" style="position: absolute; top: 40px; right: 32px; background: white; border: 1px solid #e2e8f0; border-radius: 10px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1); width: 180px; z-index: 1000; display: none; flex-direction: column; overflow: hidden; animation: slideIn 0.2s ease-out;">
              <button onclick="openStatusModal(event, '${inv.id}')" style="padding: 10px 16px; text-align: left; background: none; border: none; font-size: 0.85rem; color: #1e293b; cursor: pointer; display: flex; align-items: center; gap: 8px; width: 100%;">
                <span class="material-icons-round" style="font-size: 16px; color: #64748b;">edit</span> Update Status
              </button>
              <button onclick="openEmailModal(event, '${inv.id}')" style="padding: 10px 16px; text-align: left; background: none; border: none; font-size: 0.85rem; color: #1e293b; cursor: pointer; display: flex; align-items: center; gap: 8px; width: 100%;">
                <span class="material-icons-round" style="font-size: 16px; color: #64748b;">mail</span> Send Email
              </button>
              <button onclick="openPDFModal(event, '${inv.id}')" style="padding: 10px 16px; text-align: left; background: none; border: none; font-size: 0.85rem; color: #1e293b; cursor: pointer; display: flex; align-items: center; gap: 8px; width: 100%;">
                <span class="material-icons-round" style="font-size: 16px; color: #64748b;">download</span> Download PDF
              </button>
              <button onclick="openDeleteModal(event, '${inv.id}')" style="padding: 10px 16px; text-align: left; background: none; border: none; font-size: 0.85rem; color: #ef4444; cursor: pointer; display: flex; align-items: center; gap: 8px; width: 100%; border-top: 1px solid #f1f5f9;">
                <span class="material-icons-round" style="font-size: 16px; color: #ef4444;">delete</span> Delete
              </button>
            </div>
          </div>
        </td>
      </tr>
      <tr class="expanded-content ${isExpanded ? '' : 'hidden'}">
        <td colspan="8" style="padding: 0;">
          <div class="dropdown-pop" style="padding: 24px 32px; background: #f8fafc; border-bottom: 1px solid #e2e8f0;">
            <div style="display: grid; grid-template-columns: 1fr; gap: 24px;">
              <div>
                <h4 style="font-size: 0.82rem; font-weight: 700; color: #475569; margin-bottom: 16px; display: flex; align-items: center; gap: 8px; text-transform: uppercase; letter-spacing: 0.5px;">
                  <span class="material-icons-round" style="font-size: 18px; color: #94a3b8;">account_balance</span>
                  Bank Information
                </h4>
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;">
                  <div style="display: flex; flex-direction: column; gap: 5px;">
                    <span style="font-size: 0.68rem; color: #94a3b8; font-weight: 700; letter-spacing: 0.02em;">SETTLEMENT DATE</span>
                    <span style="font-size: 0.82rem; color: #334155; font-weight: 600;">${inv.bankInfo?.date || '-'}</span>
                  </div>
                  <div style="display: flex; flex-direction: column; gap: 5px;">
                    <span style="font-size: 0.68rem; color: #94a3b8; font-weight: 700; letter-spacing: 0.02em;">AMOUNT PAID</span>
                    <span style="font-size: 0.82rem; color: #334155; font-weight: 700;">₹ ${inv.bankInfo?.amount || '-'}</span>
                  </div>
                  <div style="display: flex; flex-direction: column; gap: 5px;">
                    <span style="font-size: 0.68rem; color: #94a3b8; font-weight: 700; letter-spacing: 0.02em;">RECIPIENT BANK</span>
                    <span style="font-size: 0.82rem; color: #334155; font-weight: 600;">${inv.bankInfo?.bankName || '-'}</span>
                  </div>
                  <div style="display: flex; flex-direction: column; gap: 5px;">
                    <span style="font-size: 0.68rem; color: #94a3b8; font-weight: 700; letter-spacing: 0.02em;">PAYMENT MODE</span>
                    <span style="font-size: 0.82rem; color: #334155; font-weight: 600;">${inv.bankInfo?.mode || '-'}</span>
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

window.toggleActionMenu = function(event, id) {
  if (event) event.stopPropagation();
  const targetMenu = document.getElementById(`menu-${id}`);
  if (!targetMenu) return;

  const isShowing = targetMenu.style.display === 'flex' || targetMenu.classList.contains('show');

  // Close all other dropdowns
  document.querySelectorAll('.dropdown-menu').forEach(m => {
    m.style.display = 'none';
    m.classList.remove('show');
  });

  if (!isShowing) {
    targetMenu.style.display = 'flex';
    targetMenu.classList.add('show');
  } else {
    targetMenu.style.display = 'none';
    targetMenu.classList.remove('show');
  }
};

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

  const modalContainer = document.getElementById('modal-container');
  const modalContent = document.getElementById('modal-content');

  const formatDateForInput = (dStr) => {
    if (!dStr || dStr === '01-Jan-2001') return '';
    const parts = dStr.split('-');
    if (parts.length < 3) return '';
    const months = { 'Jan': '01', 'Feb': '02', 'Mar': '03', 'Apr': '04', 'May': '05', 'Jun': '06', 'Jul': '07', 'Aug': '08', 'Sep': '09', 'Oct': '10', 'Nov': '11', 'Dec': '12' };
    return `${parts[2]}-${months[parts[1]]}-${parts[0]}`;
  };

  modalContent.innerHTML = `
    <div style="padding: 24px; border-bottom: 1px solid #f1f5f9; display: flex; justify-content: space-between; align-items: center; background: #fff;">
      <h2 style="margin: 0; font-size: 1.1rem; font-weight: 800; color: #1e293b;">Update Payment Status</h2>
      <button class="header-icon-btn" onclick="closeModal()"><span class="material-icons-round">close</span></button>
    </div>
    
    <div style="padding: 32px; background: #fff;">
      <div style="display: flex; flex-direction: column; gap: 28px;">
        <!-- Status Row -->
        <div style="display: flex; align-items: center; gap: 24px;">
          <label style="font-size: 0.72rem; font-weight: 800; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px; width: 80px;">Status</label>
          <div style="display: flex; gap: 20px;">
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; font-weight: 700; color: #475569; font-size: 0.9rem;">
              <input type="radio" name="status" value="Unpaid" ${inv.status === 'Unpaid' ? 'checked' : ''} onchange="togglePaidFields(false)" style="width: 18px; height: 18px; accent-color: #2563eb;"> Unpaid
            </label>
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; font-weight: 700; color: #475569; font-size: 0.9rem;">
              <input type="radio" name="status" value="Paid" ${inv.status === 'Paid' ? 'checked' : ''} onchange="togglePaidFields(true)" style="width: 18px; height: 18px; accent-color: #2563eb;"> Paid
            </label>
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; font-weight: 700; color: #475569; font-size: 0.9rem;">
              <input type="radio" name="status" value="Cancel" ${inv.status === 'Cancel' ? 'checked' : ''} onchange="togglePaidFields(false)" style="width: 18px; height: 18px; accent-color: #2563eb;"> Cancel
            </label>
          </div>
        </div>

        <div id="paid-fields" class="${inv.status === 'Paid' ? '' : 'hidden'}">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <label style="font-size: 0.7rem; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Payment Date</label>
              <div class="pm-field-modern">
                <input type="date" id="status-date" value="${formatDateForInput(inv.bankInfo?.date)}" style="width: 100%; border: none; background: transparent; outline: none; font-weight: 700; font-size: 0.9rem; color: #1e293b;">
              </div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <label style="font-size: 0.7rem; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Payment Mode</label>
              <div class="pm-field-modern" style="position: relative;">
                <select id="status-mode" style="width: 100%; border: none; background: transparent; outline: none; font-weight: 700; font-size: 0.9rem; color: #1e293b; appearance: none; cursor: pointer; padding-right: 24px;">
                  <option value="Bank Transfer" ${inv.bankInfo?.mode === 'Bank Transfer' ? 'selected' : ''}>Bank Transfer</option>
                  <option value="Cash" ${inv.bankInfo?.mode === 'Cash' ? 'selected' : ''}>Cash</option>
                  <option value="Check" ${inv.bankInfo?.mode === 'Check' ? 'selected' : ''}>Check</option>
                  <option value="UPI" ${inv.bankInfo?.mode === 'UPI' ? 'selected' : ''}>UPI / QR</option>
                </select>
                <span class="material-icons-round" style="position: absolute; right: 8px; top: 50%; transform: translateY(-50%); pointer-events: none; color: #94a3b8; font-size: 20px;">expand_more</span>
              </div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <label style="font-size: 0.7rem; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Reference Number</label>
              <div class="pm-field-modern">
                <input type="text" id="status-ref" placeholder="TXN..." value="${inv.bankInfo?.refNo || ''}" style="width: 100%; border: none; background: transparent; outline: none; font-weight: 700; font-size: 0.9rem; color: #1e293b;">
              </div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <label style="font-size: 0.7rem; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Settlement Amount</label>
              <div class="pm-field-modern">
                <input type="text" id="status-amount" placeholder="0.00" value="${inv.bankInfo?.amount || ''}" style="width: 100%; border: none; background: transparent; outline: none; font-weight: 700; font-size: 0.9rem; color: #1e293b;">
              </div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px; grid-column: span 2;">
              <label style="font-size: 0.7rem; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Recipient Bank</label>
              <div class="pm-field-modern">
                <input type="text" id="status-bank" placeholder="e.g. HDFC Bank" value="${inv.bankInfo?.bankName || ''}" style="width: 100%; border: none; background: transparent; outline: none; font-weight: 700; font-size: 0.9rem; color: #1e293b;">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div style="padding: 16px 32px; background: #f8fafc; border-top: 1px solid #f1f5f9; display: flex; justify-content: flex-end; gap: 12px; border-radius: 0 0 16px 16px;">
      <button class="btn-outline" onclick="closeModal()" style="height: 44px; padding: 0 24px; border-radius: 10px; font-weight: 700; font-size: 0.9rem;">Discard</button>
      <button class="btn-primary" onclick="saveStatus()" style="height: 44px; padding: 0 24px; border-radius: 10px; font-weight: 700; font-size: 0.9rem; background: #2563eb; box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);">Update Status</button>
    </div>
  `;

  modalContainer.classList.remove('hidden');
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
    const rawDate = document.getElementById('status-date').value;
    inv.bankInfo = {
      date: formatDateToSaaS(rawDate),
      mode: document.getElementById('status-mode').value,
      refNo: document.getElementById('status-ref').value,
      amount: document.getElementById('status-amount').value,
      bankName: document.getElementById('status-bank').value
    };
  } else {
    // Reset bank info if cancelled/unpaid
    inv.bankInfo = { date: '01-Jan-2001', amount: '', bankName: '', mode: '', refNo: '' };
  }
  closeModal();
  renderTable();
  showToast('Invoice status updated', 'success');
}

function formatDateToSaaS(dateStr) {
  if (!dateStr || dateStr === '01-01-001') return '01-Jan-2001';
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  const day = d.getDate().toString().padStart(2, '0');
  const month = d.toLocaleString('en-GB', { month: 'short' });
  const year = d.getFullYear();
  return `${day}-${month}-${year}`;
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

// Additional Action Modals
function openEmailModal(event, id) {
  if (event) event.stopPropagation();
  document.querySelectorAll('.dropdown-menu').forEach(m => m.style.display = 'none');
  const inv = invoices.find(i => i.id === id);
  if (!inv) return;

  const modalContainer = document.getElementById('modal-container');
  const modalContent = document.getElementById('modal-content');
  
  modalContent.innerHTML = `
    <div style="padding: 24px; border-bottom: 1px solid #f1f5f9; display: flex; justify-content: space-between; align-items: center; background: #fff;">
      <h2 style="margin: 0; font-size: 1.1rem; font-weight: 800; color: #1e293b;">Send Invoice Email</h2>
      <button class="header-icon-btn" onclick="closeModal()"><span class="material-icons-round">close</span></button>
    </div>
    <div style="padding: 32px; background: #fff;">
      <p style="margin-bottom: 24px; color: #64748b; font-size: 0.9rem; font-weight: 600;">Confirm sending invoice <strong>${id}</strong> to client.</p>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <label style="font-size: 0.7rem; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Recipient Email</label>
        <div class="pm-field-modern">
          <input type="email" value="${inv.clientEmail || 'client@example.com'}" style="width: 100%; border: none; background: transparent; outline: none; font-weight: 700; font-size: 0.9rem; color: #1e293b;">
        </div>
      </div>
    </div>
    <div style="padding: 16px 32px; background: #f8fafc; border-top: 1px solid #f1f5f9; display: flex; justify-content: flex-end; gap: 12px; border-radius: 0 0 16px 16px;">
      <button class="btn-outline" onclick="closeModal()" style="height: 44px; padding: 0 24px; border-radius: 10px; font-weight: 700;">Cancel</button>
      <button class="btn-primary" onclick="confirmAction('Email', '${id}')" style="height: 44px; padding: 0 24px; border-radius: 10px; font-weight: 700; background: #2563eb;">Send Now</button>
    </div>
  `;
  modalContainer.classList.remove('hidden');
}

function openPDFModal(event, id) {
  if (event) event.stopPropagation();
  document.querySelectorAll('.dropdown-menu').forEach(m => m.style.display = 'none');
  const modalContainer = document.getElementById('modal-container');
  const modalContent = document.getElementById('modal-content');
  
  modalContent.innerHTML = `
    <div style="padding: 32px; background: #fff; text-align: center; border-radius: 16px;">
      <div style="width: 64px; height: 64px; background: #f0fdf4; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
        <span class="material-icons-round" style="font-size: 32px; color: #16a34a;">picture_as_pdf</span>
      </div>
      <h2 style="margin: 0 0 12px; font-size: 1.2rem; font-weight: 800; color: #1e293b;">Download PDF</h2>
      <p style="margin: 0 0 28px; color: #64748b; font-size: 0.9rem; font-weight: 600;">Generate and download the PDF for invoice <strong>${id}</strong>?</p>
      <div style="display: flex; justify-content: center; gap: 12px;">
        <button class="btn-outline" onclick="closeModal()" style="height: 44px; padding: 0 24px; border-radius: 10px; font-weight: 700;">Cancel</button>
        <button class="btn-primary" onclick="confirmAction('PDF', '${id}')" style="height: 44px; padding: 0 24px; border-radius: 10px; font-weight: 700; background: #2563eb;">Download</button>
      </div>
    </div>
  `;
  modalContainer.classList.remove('hidden');
}

function openDeleteModal(event, id) {
  if (event) event.stopPropagation();
  document.querySelectorAll('.dropdown-menu').forEach(m => m.style.display = 'none');
  const modalContainer = document.getElementById('modal-container');
  const modalContent = document.getElementById('modal-content');
  
  modalContent.innerHTML = `
    <div style="padding: 32px; background: #fff; text-align: center; border-radius: 16px;">
      <div style="width: 64px; height: 64px; background: #fef2f2; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
        <span class="material-icons-round" style="font-size: 32px; color: #ef4444;">delete_outline</span>
      </div>
      <h2 style="margin: 0 0 12px; font-size: 1.2rem; font-weight: 800; color: #1e293b;">Delete Invoice</h2>
      <p style="margin: 0 0 28px; color: #64748b; font-size: 0.9rem; font-weight: 600;">Are you sure you want to delete invoice <strong>${id}</strong>? This cannot be undone.</p>
      <div style="display: flex; justify-content: center; gap: 12px;">
        <button class="btn-outline" onclick="closeModal()" style="height: 44px; padding: 0 24px; border-radius: 10px; font-weight: 700;">Cancel</button>
        <button class="btn-primary" onclick="confirmAction('Delete', '${id}')" style="height: 44px; padding: 0 24px; border-radius: 10px; font-weight: 700; background: #ef4444; border-color: #ef4444;">Delete</button>
      </div>
    </div>
  `;
  modalContainer.classList.remove('hidden');
}

function confirmAction(type, id) {
  closeModal();
  if (type === 'Delete') {
    const idx = invoices.findIndex(i => i.id === id);
    if (idx !== -1) invoices.splice(idx, 1);
    renderTable();
    showToast(`Invoice ${id} deleted`, 'success');
  } else if (type === 'Email') {
    showToast(`Invoice ${id} emailed successfully`, 'success');
  } else if (type === 'PDF') {
    showToast(`Downloading invoice ${id} PDF`, 'success');
  }
}