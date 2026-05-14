// All plan-related modal workflows
const formatPremiumDate = (dateStr) => {
  if (!dateStr) return '';
  // Handle DD-MM-YYYY or DD-Month-YYYY
  const parts = dateStr.split(/[-/]/);
  if (parts.length < 3) return dateStr;
  
  const day = parts[0];
  const month = parts[1];
  const year = parts[2];
  
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  // If month is already a name, keep it, else convert index
  let mName = month;
  if (!isNaN(month)) {
    mName = monthNames[parseInt(month) - 1] || month;
  }
  
  return `${day} ${mName} ${year}`;
};

const fmtDate = (d) => {
  if (!(d instanceof Date)) d = new Date(d);
  return formatPremiumDate(d.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '-'));
};

// Invoice section builder (reusable)
// Invoice section builder (reusable)
function buildInvoiceSection(m) {
  return `
    <div class="pm-invoice-toggle-card" id="pm-invoice-card" onclick="window.toggleInvoiceSelection()">
      <div class="pm-invoice-check-circle" id="pm-invoice-circle">
        <span class="material-icons-round">check</span>
      </div>
      <div class="pm-invoice-toggle-text" style="flex:1;">
        <h4 class="pm-invoice-toggle-title" style="margin-bottom: 0; font-weight: 700;">Generate Invoice?</h4>
        
        <div id="pm-invoice-options" style="display:none; margin-top: 12px;">
           <div style="display: flex; gap: 8px; margin-bottom: 16px;">
              <div class="pm-inv-type-chip" id="type-proforma" onclick="window.selectInvoiceType('proforma', this, event)">
                Proforma
              </div>
              <div class="pm-inv-type-chip" id="type-final" onclick="window.selectInvoiceType('final', this, event)">
                Final Invoice
              </div>
           </div>

           <!-- Premium Bank Details Section (Visible for Final Invoice) -->
           <div id="pm-final-invoice-details" style="display:none; margin-top: 20px; padding: 20px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; animation: slideDown 0.3s ease-out;">
             <h4 style="font-size: 0.72rem; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
               <span class="material-icons-round" style="font-size: 16px; color: #4880FF;">account_balance</span>
               Bank Information
             </h4>
             <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;">
               <div style="display: flex; flex-direction: column;">
                 <label class="pm-form-label-modern">Settlement Date</label>
                 <div class="pm-field-modern">
                   <input type="date" id="pm-inv-date" value="${new Date().toISOString().split('T')[0]}">
                   <span class="material-icons-round pm-field-icon">calendar_today</span>
                 </div>
               </div>
               <div style="display: flex; flex-direction: column;">
                 <label class="pm-form-label-modern">Amount Paid</label>
                 <div class="pm-field-modern">
                   <input type="text" id="pm-inv-amount" placeholder="₹ 0.00">
                 </div>
               </div>
               <div style="display: flex; flex-direction: column;">
                  <label class="pm-form-label-modern">Recipient Bank</label>
                  ${renderCustomSelect('pm-inv-bank', [
                    { value: 'HDFC Bank', label: 'HDFC Bank' },
                    { value: 'ICICI Bank', label: 'ICICI Bank' },
                    { value: 'SBI', label: 'SBI' }
                  ], 'HDFC Bank')}
                </div>
                <div style="display: flex; flex-direction: column;">
                  <label class="pm-form-label-modern">Payment Mode</label>
                  ${renderCustomSelect('pm-inv-mode', [
                    { value: 'Bank Transfer', label: 'Bank Transfer' },
                    { value: 'UPI', label: 'UPI / QR' },
                    { value: 'Cash', label: 'Cash' }
                  ], 'Bank Transfer')}
                </div>
             </div>
           </div>
        </div>
      </div>
      <input type="checkbox" id="pm-gen-invoice" style="display:none;">
      <input type="hidden" id="pm-invoice-type" value="">
    </div>
  `;
}

window.toggleInvoiceSelection = function() {
  const card = document.getElementById('pm-invoice-card');
  const check = document.getElementById('pm-gen-invoice');
  const options = document.getElementById('pm-invoice-options');
  
  if (!card || !check) return;
  
  check.checked = !check.checked;
  if (check.checked) {
    card.classList.add('selected');
    if (options) options.style.display = 'block';
  } else {
    card.classList.remove('selected');
    if (options) options.style.display = 'none';
  }
};

window.selectInvoiceType = function(val, el, e) {
  if (e) e.stopPropagation(); // Prevent card toggle
  const input = document.getElementById('pm-invoice-type');
  
  if (el.classList.contains('active')) {
    // Deselect if already active
    el.classList.remove('active');
    if (input) input.value = '';
  } else {
    // Select new option
    if (input) input.value = val;
    document.querySelectorAll('.pm-inv-type-chip').forEach(opt => {
      opt.classList.remove('active');
    });
    el.classList.add('active');

    // Show/Hide Bank Details
    const bankDetails = document.getElementById('pm-final-invoice-details');
    if (bankDetails) {
      bankDetails.style.display = (val === 'final') ? 'block' : 'none';
    }
  }
};

function updateInvoiceDesc() {
  // Description removed as per user request
}

// Dropdown handlers removed in favor of toggle card

// Plan options builder
function getPlanOptions() {
  return (typeof plans !== 'undefined' ? plans : []).map(p => {
    const vl = typeof VALIDITY_LABELS !== 'undefined' ? (VALIDITY_LABELS[p.validity] || p.validity) : p.validity;
    return `<option value="${p.name}">${p.name}  ${p.price === 0 ? 'FREE' : '₹' + Number(p.price).toLocaleString() + ' / ' + vl}</option>`;
  }).join('');
}

// Select wrapper
function selWrap(id, opts, onchange) {
  // Parsing simple option strings for legacy support
  const options = [];
  const temp = document.createElement('div');
  temp.innerHTML = `<select>${opts}</select>`;
  temp.querySelectorAll('option').forEach(o => {
    options.push({ value: o.value, label: o.textContent });
  });
  
  return renderCustomSelect(id, options, options[0]?.value, onchange);
}

// ===== TIMELINE VIEW TOGGLE =====
window.switchTimelineView = function (view, btn, memberId) {
  const activityView = document.getElementById('tl-activity-view');
  const tableView = document.getElementById('tl-table-view');
  const filterContainer = document.getElementById('tl-filter-container');
  
  if (!activityView || !tableView) return;

  // Toggle views
  activityView.style.display = view === 'activity' ? 'block' : 'none';
  tableView.style.display = view === 'table' ? 'block' : 'none';

  // Toggle filter visibility - Remove from Table view as requested
  if (filterContainer) {
    filterContainer.style.display = view === 'activity' ? 'flex' : 'none';
  }

  // Toggle button states
  btn.parentElement.querySelectorAll('.tl-toggle-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // If switching to table, ensure filter is reset or applied (logic is in filterTimeline)
  if (typeof filterTimeline === 'function') {
    const filterType = document.getElementById('tl-activity-filter')?.value || 'all';
    filterTimeline(memberId, filterType);
  }
};

// ===== UNIFIED MANAGE PLAN MODAL =====
window.openManagePlanModal = function (memberId) {
  const m = members.find(x => x.id === memberId);
  if (!m) return;

  const modalContainer = document.getElementById('modal-container');
  const modalContent = document.getElementById('modal-content');
  modalContent.className = 'modal-content plan-modal';

  const isSuspended = m.status === 'suspended';
  const actions = [
    { key: 'assign', name: 'Assign Plan' },
    { key: 'extend', name: 'Extend Plan' },
    { key: 'upgrade', name: 'Upgrade Plan' },
    isSuspended ? { key: 'reactivate', name: 'Reactivate Member' } : { key: 'suspend', name: 'Suspend Member' }
  ];

  modalContent.innerHTML = `
    <div class="pm-header-modern" style="padding: 24px 32px 12px; display: flex; justify-content: space-between; align-items: flex-start; background: #fff;">
      <div style="display: flex; flex-direction: column; gap: 12px; flex: 1;">
        <h2 style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin: 0;">Plan Actions</h2>
        
        <div class="pm-action-dropdown-wrap" style="width: 240px;">
          <div class="action-btn-wrap" style="width: 100%; position: relative;">
            <div class="pm-field-modern clickable" onclick="const menu = this.nextElementSibling; const isOpen = menu.style.opacity === '1'; document.querySelectorAll('.dropdown-menu').forEach(m => { m.style.opacity = '0'; m.style.visibility = 'hidden'; m.style.transform = 'translateY(10px)'; }); if (!isOpen) { menu.style.opacity = '1'; menu.style.visibility = 'visible'; menu.style.transform = 'translateY(0)'; } event.stopPropagation();" style="width: 100%; height: 40px; background: #f8fafc; border: 1px solid #e2e8f0;">
              <div style="flex: 1; font-size: 0.85rem; font-weight: 600; color: #1e293b; padding: 0 14px;" id="pm-current-action-label">Assign Plan</div>
              <span class="material-icons-round pm-field-icon" style="color: #94a3b8; font-size: 18px;">expand_more</span>
            </div>
            <div class="dropdown-menu" style="position: absolute; display: flex; flex-direction: column; width: 100%; left: 0; top: 100%; margin-top: 4px; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1); z-index: 1000; transition: all 0.2s ease; opacity: 0; visibility: hidden; transform: translateY(10px);">
              ${actions.map(a => `
                <button class="dropdown-item" onclick="selectManageAction(${memberId}, '${a.key}');" style="padding: 10px 16px; font-weight: 600; font-size: 0.85rem; text-align: left; background: transparent; border: none; cursor: pointer; border-bottom: 1px solid #f1f5f9; transition: background 0.2s; color: #475569;" onmouseover="this.style.background='#f8fafc'; this.style.color='#1e293b'" onmouseout="this.style.background='transparent'; this.style.color='#475569'">
                  ${a.name}
                </button>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
      <button class="modal-close" onclick="closeModal()" style="background:#f8fafc; border:1px solid #e2e8f0; width:32px; height:32px; border-radius:50%; display:grid; place-items:center; cursor:pointer; color:#94a3b8; transition:all 0.2s;" onmouseover="this.style.background='#f1f5f9'" onmouseout="this.style.background='#f8fafc'">
        <span class="material-icons-round" style="font-size:18px;">close</span>
      </button>
    </div>
    <div style="border-bottom: 1px solid #f1f5f9; width: 100%;"></div>

    <div class="modal-body" id="pm-modal-body" style="padding: 20px 32px;">
      <div id="pm-dynamic-form-area" style="display: flex; flex-direction: column;"></div>
    </div>
    <div class="pm-footer-modern" id="pm-footer" style="display:none; justify-content: flex-end; gap:12px; padding: 14px 32px; background: #fafbfc; border-top: 1px solid #f1f5f9; border-radius: 0 0 20px 20px;">
      <button class="btn-outline" onclick="closeModal()" style="height: 40px; padding: 0 20px; font-size: 0.85rem;">Cancel</button>
      <div id="pm-footer-actions"></div>
    </div>
  `;

  modalContainer.classList.remove('hidden');

  setTimeout(() => {
    // Manually trigger the default action since the custom select is now used
    selectManageAction(memberId, 'assign');
  }, 10);
};

// ===== SELECT ACTION INSIDE UNIFIED MODAL =====
window.selectManageAction = function (memberId, action) {
  const m = members.find(x => x.id === memberId);
  if (!m) return;
  const formArea = document.getElementById('pm-dynamic-form-area');
  const footer = document.getElementById('pm-footer');
  const footerActions = document.getElementById('pm-footer-actions');
  const modalContent = document.getElementById('modal-content');
  const modalBody = document.getElementById('pm-modal-body');
  
  if (!formArea || !modalContent || !modalBody) return;

  // Update label
  const label = document.getElementById('pm-current-action-label');
  if (label) {
    const actionNames = {
      'assign': 'Assign Plan',
      'extend': 'Extend Plan',
      'upgrade': 'Upgrade Plan',
      'suspend': 'Suspend Member',
      'reactivate': 'Reactivate Member'
    };
    label.textContent = actionNames[action] || action;
  }

  let html = '';
  let footerBtn = '';

  if (action === 'assign') {
    html = `
      <div class="pm-form-grid" style="gap: 12px;">
        <div class="pm-form-full">
          <label class="pm-form-label-modern">TARGET PLAN</label>
          ${renderCustomSelect('pm-plan-select', 
            (typeof plans !== 'undefined' ? plans : []).filter(p => p.name !== 'TK-Premium').map(p => ({ 
              value: p.name, 
              label: `${p.name} • ₹${Number(p.price).toLocaleString()}/${p.validity === 'monthly' ? 'mo' : (p.validity === 'yearly' ? 'yr' : 'fixed')}` 
            })), 
            '', 
            'autoSetEndDate'
          )}
        </div>
        <div>
          <label class="pm-form-label-modern">START DATE</label>
          <div class="pm-field-modern" style="height: 40px;">
            <input type="date" id="pm-start-date" value="${new Date().toISOString().split('T')[0]}" onchange="autoSetEndDate()">
            <span class="material-icons-round pm-field-icon" style="font-size: 18px;">calendar_today</span>
          </div>
        </div>
        <div>
          <label class="pm-form-label-modern">END DATE</label>
          <div class="pm-field-modern" style="height: 40px;">
            <input type="date" id="pm-end-date" onchange="updateAssignDuration()">
            <span class="material-icons-round pm-field-icon" style="font-size: 18px;">calendar_today</span>
          </div>
        </div>
      </div>

      <div id="assign-duration-preview" style="display:none; margin-top: 16px; padding-top: 12px; border-top: 1px solid #f1f5f9; display: flex; justify-content: space-between; align-items: center;">
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <label class="pm-form-label-modern" style="margin-bottom:0;">NEW SUBSCRIPTION PERIOD</label>
          <div id="ad-period" style="font-size: 0.88rem; font-weight: 700; color: #1e293b;"></div>
        </div>
        <div id="ad-duration" style="background: #eff6ff; color: #4880FF; padding: 3px 10px; border-radius: 6px; font-size: 0.72rem; font-weight: 700; border: 1px solid #dbeafe;"></div>
      </div>

      <div class="pm-divider-dashed" style="margin: 12px 0;"></div>
      ${buildInvoiceSection(m)}
    `;
    footerBtn = `<button class="btn-primary" onclick="submitPlanAction(${m.id}, 'assign')" style="height: 40px; padding: 0 20px; font-size: 0.85rem;">Assign Plan <span class="material-icons-round" style="font-size: 16px; margin-left: 6px;">arrow_forward</span></button>`;

  } else if (action === 'extend') {
    const actualPlan = (m.assignedPlans && m.assignedPlans.find(p => !['Suspended', 'Reactivated'].includes(p.name))) || {};
    const currentExpiryStr = actualPlan.date ? actualPlan.date.split(' to ')[1] : '';

    html = `
      <div class="pm-form-grid" style="gap: 12px;">
        <div>
          <label class="pm-form-label-modern">EXTEND BY</label>
          ${renderCustomSelect('pm-ext-days', [
            { value: '7', label: '7 days' },
            { value: '14', label: '14 days' },
            { value: '30', label: '30 days' },
            { value: '60', label: '60 days' },
            { value: '90', label: '90 days' },
            { value: '365', label: '1 year' }
          ], '30', 'window.updateExtendPreviewFromSelect')}
        </div>
        <div>
          <label class="pm-form-label-modern">NEW EXPIRY</label>
          <div class="pm-field-modern" style="height: 40px;">
            <span id="pm-ext-preview-date" style="font-weight: 700; font-size: 0.88rem;">${currentExpiryStr || 'N/A'}</span>
          </div>
        </div>
      </div>
      <div class="pm-divider-dashed" style="margin: 12px 0;"></div>
      ${buildInvoiceSection(m)}
    `;
    footerBtn = `<button class="btn-primary" onclick="submitPlanAction(${m.id}, 'extend')" style="height: 40px; padding: 0 20px; font-size: 0.85rem;">Extend Plan <span class="material-icons-round" style="font-size: 16px; margin-left: 6px;">arrow_forward</span></button>`;

  } else if (action === 'upgrade') {
    html = `
      <div class="pm-form-grid" style="gap: 12px;">
        <div class="pm-form-full">
          <label class="pm-form-label-modern">TARGET PLAN</label>
          ${renderCustomSelect('pm-plan-select', 
            (typeof plans !== 'undefined' ? plans : []).filter(p => p.name !== 'TK-Premium').map(p => ({ 
              value: p.name, 
              label: `${p.name} • ₹${p.price}/${p.validity === 'monthly' ? 'mo' : (p.validity === 'yearly' ? 'yr' : 'fixed')}` 
            })), 
            '', 
            'autoSetEndDate'
          )}
        </div>
        <div>
          <label class="pm-form-label-modern">START DATE</label>
          <div class="pm-field-modern" style="height: 40px;">
            <input type="date" id="pm-start-date" value="${new Date().toISOString().split('T')[0]}" onchange="autoSetEndDate()">
            <span class="material-icons-round pm-field-icon" style="font-size: 18px;">calendar_today</span>
          </div>
        </div>
        <div>
          <label class="pm-form-label-modern">PRORATION</label>
          ${renderCustomSelect('pm-proration', [
            { value: 'yes', label: 'Yes, prorate' },
            { value: 'no', label: 'No, full charge' }
          ], 'yes', null)}
        </div>
      </div>

      <div id="upgrade-period-preview" style="display:none; margin-top: 16px; padding-top: 12px; border-top: 1px solid #f1f5f9; display: flex; justify-content: space-between; align-items: center;">
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <label class="pm-form-label-modern" style="margin-bottom:0;">NEW SUBSCRIPTION PERIOD</label>
          <div id="up-period-range" style="font-size: 0.88rem; font-weight: 700; color: #1e293b;"></div>
        </div>
        <div id="up-period-duration" style="background: #eff6ff; color: #4880FF; padding: 3px 10px; border-radius: 6px; font-size: 0.72rem; font-weight: 700; border: 1px solid #dbeafe;"></div>
      </div>

      <div class="pm-divider-dashed" style="margin: 12px 0;"></div>
      ${buildInvoiceSection(m)}
    `;
    footerBtn = `<button class="btn-primary" onclick="submitPlanAction(${m.id}, 'upgrade')" style="height: 40px; padding: 0 20px; font-size: 0.85rem;">Apply Upgrade <span class="material-icons-round" style="font-size: 16px; margin-left: 6px;">arrow_forward</span></button>`;

  } else if (action === 'suspend') {
    html = `
      <div class="pm-form-grid">
        <div class="pm-form-full">
          <label class="pm-form-label-modern">REASON FOR SUSPENSION</label>
          <textarea id="pm-suspend-reason" class="plan-field-textarea" placeholder="e.g. Terms of service violation, payment failure..."></textarea>
          <div class="pm-field-help">This reason will be logged for administrative review.</div>
        </div>
      </div>
    `;
    footerBtn = `<button class="pm-btn-apply" style="background:#ef4444;" onclick="confirmSuspend(${m.id})">Suspend Access <span class="material-icons-round">block</span></button>`;

  } else if (action === 'reactivate') {
    html = `
      <div class="pm-form-grid">
        <div class="pm-form-full">
          <label class="pm-form-label-modern">ADMIN NOTE (OPTIONAL)</label>
          <textarea id="pm-reactivate-note" class="plan-field-textarea" placeholder="e.g. Payment cleared, manual override..."></textarea>
          <div class="pm-field-help">Internal note about why access was restored.</div>
        </div>
      </div>
    `;
    footerBtn = `<button class="btn-primary" onclick="submitPlanAction(${m.id}, 'reactivate')" style="height: 42px; padding: 0 24px;">Apply Reactivation <span class="material-icons-round" style="font-size: 18px; margin-left: 8px;">arrow_forward</span></button>`;
  }


  formArea.innerHTML = html;
  footerActions.innerHTML = footerBtn;
  footer.style.display = 'flex';

  // Ensure dropdown closes after selection
  document.querySelectorAll('.dropdown-menu').forEach(m => {
    m.style.opacity = '0';
    m.style.visibility = 'hidden';
    m.style.transform = 'translateY(10px)';
  });

  // Initial state setup
  if (action === 'assign' || action === 'upgrade') {
    autoSetEndDate();
  } else if (action === 'extend') {
    const actualPlan = (m.assignedPlans && m.assignedPlans.find(p => !['Suspended', 'Reactivated'].includes(p.name))) || {};
    const currentExpiryStr = actualPlan.date ? actualPlan.date.split(' to ')[1] : '';
    updateExtendPreview(currentExpiryStr);
  }
};

// ===== ASSIGN NEW PLAN MODAL =====
function buildAssignModal(m, todayISO, po) {
  return `
    <div class="modal-header">
      <div class="modal-header-left">
        <div class="plan-modal-icon" style="background:#eff6ff;color:#4880FF;">
          <span class="material-icons-round">add_task</span>
        </div>
        <div>
          <h3 class="plan-modal-title">Assign New Plan</h3>
          <p class="plan-modal-subtitle">${m.member} · ${m.company}</p>
        </div>
      </div>
      <button class="modal-close" onclick="closeModal()"><span class="material-icons-round">close</span></button>
    </div>
    <div class="modal-body">
      <div class="plan-form-grid">
        <div class="plan-field-group plan-form-full">
          <div class="plan-field-label">Plan <span class="required">*</span></div>
          ${selWrap('pm-plan-select', po, (val) => autoSetEndDate())}
        </div>
        <div class="plan-field-group">
          <div class="plan-field-label">Start Date</div>
          <input type="date" class="plan-field-input" id="pm-start-date" value="${todayISO}" onchange="updateAssignDuration()">
        </div>
        <div class="plan-field-group">
          <div class="plan-field-label">End Date</div>
          <input type="date" class="plan-field-input" id="pm-end-date" onchange="updateAssignDuration()">
        </div>
      </div>
      <div class="expiry-preview" id="assign-duration-preview" style="display:none; margin-top:16px; margin-bottom:16px;">
        <div class="expiry-preview-item">
          <div class="ep-label">Duration</div>
          <div class="ep-value" id="ad-duration">-</div>
        </div>
        <div class="expiry-preview-arrow"><span class="material-icons-round">schedule</span></div>
        <div class="expiry-preview-item new-expiry">
          <div class="ep-label">Active Period</div>
          <div class="ep-value" id="ad-period">-</div>
        </div>
      </div>
      <div class="plan-field-group">
        <div class="plan-field-label">Admin Notes (optional)</div>
        <textarea class="plan-field-textarea" id="pm-admin-notes" placeholder="Internal notes for this assignment..."></textarea>
      </div>
      <div class="plan-modal-divider"></div>
      <div id="pm-invoice-section">${buildInvoiceSection('')}</div>
    </div>
    <div class="modal-footer">
      <div class="modal-footer-hint"><span class="material-icons-round">tips_and_updates</span> Initiates a new billing cycle for the member.</div>
      <div class="modal-footer-actions">
        <button class="plan-btn-cancel" onclick="closeModal()">Cancel</button>
        <button class="plan-btn-submit" onclick="submitPlanAction(${m.id},'assign')">
          Assign Plan <span class="material-icons-round">arrow_forward</span>
        </button>
      </div>
    </div>`;
}

// ===== EXTEND PLAN MODAL =====
function buildExtendModal(m, todayISO, activePlanExpiry, actualPlan) {
  const presets = [1, 2, 3, 7, 15, 30];
  return `
    <div class="modal-header-modern" style="padding: 24px 32px; border-bottom: 1px solid #f1f5f9;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <div style="display: flex; align-items: center; gap: 16px;">
          <div style="width: 44px; height: 44px; border-radius: 12px; background: #eff6ff; color: #4880FF; display: flex; align-items: center; justify-content: center;">
            <span class="material-icons-round">more_time</span>
          </div>
          <div>
            <h2 style="font-size: 1.25rem; font-weight: 800; color: #1e293b; margin: 0;">Extend Plan</h2>
            <p style="margin: 4px 0 0; color: #64748b; font-weight: 600; font-size: 0.88rem;">${actualPlan.name || 'Current Plan'} · ${m.member}</p>
          </div>
        </div>
        <button onclick="closeModal()" style="background:none; border:none; color:#94a3b8; cursor:pointer;"><span class="material-icons-round">close</span></button>
      </div>
    </div>
    <div style="padding: 32px;">
      <div style="margin-bottom: 24px;">
        <label class="pm-form-label-modern">Extension Duration</label>
        <div class="extension-chips" id="ext-chips">
          ${presets.map(d => `<button class="extension-chip${d === 30 ? ' active' : ''}" data-days="${d}" onclick="selectExtChip(this,${d})">${d} Day${d > 1 ? 's' : ''}</button>`).join('')}
          <button class="extension-chip" data-days="custom" onclick="selectExtChip(this,'custom')">Custom</button>
        </div>
        <div id="ext-custom-wrap" style="display:none;" class="extension-custom-group">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 16px;">
            <div>
              <label class="pm-form-label-modern">Amount</label>
              <div class="pm-field-modern">
                <input type="number" id="pm-ext-custom-val" value="45" min="1" oninput="updateExpiryPreview()">
              </div>
            </div>
            <div>
              <label class="pm-form-label-modern">Unit</label>
              <div class="pm-field-modern">
                <select id="pm-ext-custom-unit" onchange="updateCustomExtendPreview()">
                  <option value="days">Days</option>
                  <option value="months">Months</option>
                </select>
                <span class="material-icons-round pm-field-icon">expand_more</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <input type="hidden" id="pm-ext-days" value="30">
      
      <div id="expiry-preview" style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <label class="pm-form-label-modern" style="margin:0;">Current Expiry</label>
          <div id="ep-current" style="font-size: 0.95rem; font-weight: 800; color: #64748b;">${activePlanExpiry}</div>
        </div>
        <div style="color: #cbd5e1;"><span class="material-icons-round" style="font-size: 24px;">arrow_forward</span></div>
        <div style="display: flex; flex-direction: column; gap: 4px; text-align: right;">
          <label class="pm-form-label-modern" style="margin:0;">New Expiry</label>
          <div id="ep-new" style="font-size: 0.95rem; font-weight: 800; color: #10b981;">${calcNewExpiry(activePlanExpiry, 30)}</div>
        </div>
      </div>

      <div class="pm-divider-dashed" style="margin: 24px 0;"></div>
      <div id="pm-invoice-section">${buildInvoiceSection(actualPlan.name || '')}</div>
    </div>
    <div class="modal-footer" style="padding: 24px 32px; border-top: 1px solid #f1f5f9; display: flex; justify-content: space-between; align-items: center; background: #fff; border-radius: 0 0 20px 20px;">
      <div style="display: flex; align-items: center; gap: 8px; color: #64748b; font-size: 0.85rem; font-weight: 600;">
        <span class="material-icons-round" style="font-size: 18px; color: #4880FF;">tips_and_updates</span>
        Adds more time to the current subscription.
      </div>
      <div style="display: flex; gap: 12px;">
        <button class="btn-outline" onclick="closeModal()" style="height: 42px; padding: 0 24px;">Cancel</button>
        <button class="btn-primary" onclick="submitPlanAction(${m.id},'extend')" style="height: 42px; padding: 0 24px;">
          Apply Extension <span class="material-icons-round" style="font-size: 18px; margin-left: 8px;">arrow_forward</span>
        </button>
      </div>
    </div>`;
}

// ===== UPGRADE PLAN MODAL =====
function buildUpgradeModal(m, todayISO, po, actualPlan) {
  return `
    <div class="modal-header-modern" style="padding: 24px 32px; border-bottom: 1px solid #f1f5f9;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <div style="display: flex; align-items: center; gap: 16px;">
          <div style="width: 44px; height: 44px; border-radius: 12px; background: #f3e8ff; color: #7c3aed; display: flex; align-items: center; justify-content: center;">
            <span class="material-icons-round">upgrade</span>
          </div>
          <div>
            <h2 style="font-size: 1.25rem; font-weight: 800; color: #1e293b; margin: 0;">Upgrade Plan</h2>
            <p style="margin: 4px 0 0; color: #64748b; font-weight: 600; font-size: 0.88rem;">Current: ${actualPlan.name || 'None'} · ${m.member}</p>
          </div>
        </div>
        <button onclick="closeModal()" style="background:none; border:none; color:#94a3b8; cursor:pointer;"><span class="material-icons-round">close</span></button>
      </div>
    </div>
    <div style="padding: 32px;">
      <div class="pm-form-grid">
        <div class="pm-form-full">
          <label class="pm-form-label-modern">New Plan <span class="required" style="color:#ef4444;">*</span></label>
          ${renderCustomSelect('pm-plan-select', (typeof plans !== 'undefined' ? plans : []).filter(p => p.name !== 'TK-Premium').map(p => ({ value: p.name, label: `${p.name} • ₹${p.price}` })), '', 'autoSetEndDate')}
        </div>
        <div>
          <label class="pm-form-label-modern">Start Date</label>
          <div class="pm-field-modern">
            <input type="date" id="pm-start-date" value="${todayISO}">
            <span class="material-icons-round pm-field-icon">calendar_today</span>
          </div>
        </div>
        <div>
          <label class="pm-form-label-modern">Proration</label>
          <div class="pm-field-modern">
            <select id="pm-proration">
              <option value="yes">Yes, prorate</option>
              <option value="no">No proration</option>
            </select>
            <span class="material-icons-round pm-field-icon">expand_more</span>
          </div>
        </div>
      </div>

      <div class="pm-divider-dashed" style="margin: 24px 0;"></div>
      <div id="pm-invoice-section">${buildInvoiceSection('')}</div>
    </div>
    <div class="modal-footer" style="padding: 24px 32px; border-top: 1px solid #f1f5f9; display: flex; justify-content: space-between; align-items: center; background: #fff; border-radius: 0 0 20px 20px;">
      <div style="display: flex; align-items: center; gap: 8px; color: #64748b; font-size: 0.85rem; font-weight: 600;">
        <span class="material-icons-round" style="font-size: 18px; color: #7c3aed;">tips_and_updates</span>
        Proration logic will be applied to the new tier.
      </div>
      <div style="display: flex; gap: 12px;">
        <button class="btn-outline" onclick="closeModal()" style="height: 42px; padding: 0 24px;">Cancel</button>
        <button class="btn-primary" onclick="submitPlanAction(${m.id},'upgrade')" style="height: 42px; padding: 0 24px; background: #7c3aed; border-color: #7c3aed;">
          Upgrade Plan <span class="material-icons-round" style="font-size: 18px; margin-left: 8px;">arrow_forward</span>
        </button>
      </div>
    </div>`;
}

// ===== SUSPEND MODAL =====
function buildSuspendModal(m) {
  return `
    <div class="modal-header-modern" style="padding: 24px 32px; border-bottom: 1px solid #f1f5f9;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <div style="display: flex; align-items: center; gap: 16px;">
          <div style="width: 44px; height: 44px; border-radius: 12px; background: #fef2f2; color: #ef4444; display: flex; align-items: center; justify-content: center; border: 1px solid #fee2e2;">
            <span class="material-icons-round">block</span>
          </div>
          <div>
            <h2 style="font-size: 1.25rem; font-weight: 800; color: #1e293b; margin: 0;">Suspend Member</h2>
            <p style="margin: 4px 0 0; color: #64748b; font-weight: 600; font-size: 0.88rem;">${m.member} · ${m.company}</p>
          </div>
        </div>
        <button onclick="closeModal()" style="background:none; border:none; color:#94a3b8; cursor:pointer;"><span class="material-icons-round">close</span></button>
      </div>
    </div>
    <div style="padding: 32px;">
      <div style="background: #fff5f5; border: 1px solid #fed7d7; border-radius: 12px; padding: 20px; display: flex; gap: 16px; margin-bottom: 24px;">
        <span class="material-icons-round" style="color: #f56565; font-size: 24px;">warning</span>
        <div>
          <h4 style="margin: 0; font-size: 0.95rem; font-weight: 800; color: #9b2c2c;">Restricting Access</h4>
          <p style="margin: 4px 0 0; font-size: 0.85rem; font-weight: 600; color: #c53030; line-height: 1.5;">The member will be blocked from accessing the application. Active plan features will be suspended until reactivation.</p>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div>
          <label class="pm-form-label-modern">Suspension Reason <span class="required" style="color:#ef4444;">*</span></label>
          <div class="pm-field-modern">
            <input type="text" id="pm-suspend-reason" placeholder="e.g. Non-payment, violation of terms...">
          </div>
        </div>
        <div>
          <label class="pm-form-label-modern">Admin Note (optional)</label>
          <textarea id="pm-admin-notes" class="plan-field-textarea" style="width: 100%; min-height: 100px; padding: 12px 16px; border: 1px solid #e2e8f0; border-radius: 10px; font-family: inherit; font-size: 0.88rem; font-weight: 600; outline: none; transition: border-color 0.2s;" onfocus="this.style.borderColor='#4880FF'" onblur="this.style.borderColor='#e2e8f0'" placeholder="Additional internal notes..."></textarea>
        </div>
      </div>
    </div>
    <div class="modal-footer" style="padding: 24px 32px; border-top: 1px solid #f1f5f9; display: flex; justify-content: space-between; align-items: center; background: #fff; border-radius: 0 0 20px 20px;">
      <div style="display: flex; align-items: center; gap: 8px; color: #64748b; font-size: 0.85rem; font-weight: 600;">
        <span class="material-icons-round" style="font-size: 18px; color: #ef4444;">info</span>
        No invoice will be generated.
      </div>
      <div style="display: flex; gap: 12px;">
        <button class="btn-outline" onclick="closeModal()" style="height: 42px; padding: 0 24px;">Cancel</button>
        <button class="btn-primary" onclick="confirmSuspend(${m.id})" style="height: 42px; padding: 0 24px; background: #ef4444; border-color: #ef4444;">
          Suspend Member <span class="material-icons-round" style="font-size: 18px; margin-left: 8px;">block</span>
        </button>
      </div>
    </div>`;
}

// ===== REACTIVATE MODAL =====
function buildReactivateModal(m) {
  return `
    <div class="modal-header-modern" style="padding: 24px 32px; border-bottom: 1px solid #f1f5f9;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <div style="display: flex; align-items: center; gap: 16px;">
          <div style="width: 44px; height: 44px; border-radius: 12px; background: #f0fdf4; color: #16a34a; display: flex; align-items: center; justify-content: center; border: 1px solid #dcfce7;">
            <span class="material-icons-round">verified_user</span>
          </div>
          <div>
            <h2 style="font-size: 1.25rem; font-weight: 800; color: #1e293b; margin: 0;">Reactivate Member</h2>
            <p style="margin: 4px 0 0; color: #64748b; font-weight: 600; font-size: 0.88rem;">${m.member} · ${m.company}</p>
          </div>
        </div>
        <button onclick="closeModal()" style="background:none; border:none; color:#94a3b8; cursor:pointer;"><span class="material-icons-round">close</span></button>
      </div>
    </div>
    <div style="padding: 32px;">
      <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 20px; display: flex; gap: 16px; margin-bottom: 24px;">
        <span class="material-icons-round" style="color: #16a34a; font-size: 24px;">check_circle</span>
        <div>
          <h4 style="margin: 0; font-size: 0.95rem; font-weight: 800; color: #166534;">Restoring Access</h4>
          <p style="margin: 4px 0 0; font-size: 0.85rem; font-weight: 600; color: #15803d; line-height: 1.5;">Plan access and all member privileges will be immediately restored upon reactivation.</p>
        </div>
      </div>

      <div>
        <label class="pm-form-label-modern">Reactivation Note (optional)</label>
        <textarea id="pm-reactivate-note" class="plan-field-textarea" style="width: 100%; min-height: 100px; padding: 12px 16px; border: 1px solid #e2e8f0; border-radius: 10px; font-family: inherit; font-size: 0.88rem; font-weight: 600; outline: none; transition: border-color 0.2s;" onfocus="this.style.borderColor='#4880FF'" onblur="this.style.borderColor='#e2e8f0'" placeholder="e.g. Payment verified, issue resolved..."></textarea>
      </div>
    </div>
    <div class="modal-footer" style="padding: 24px 32px; border-top: 1px solid #f1f5f9; display: flex; justify-content: space-between; align-items: center; background: #fff; border-radius: 0 0 20px 20px;">
      <div style="display: flex; align-items: center; gap: 8px; color: #64748b; font-size: 0.85rem; font-weight: 600;">
        <span class="material-icons-round" style="font-size: 18px; color: #16a34a;">tips_and_updates</span>
        Restores all member privileges immediately.
      </div>
      <div style="display: flex; gap: 12px;">
        <button class="btn-outline" onclick="closeModal()" style="height: 42px; padding: 0 24px;">Cancel</button>
        <button class="btn-primary" onclick="submitPlanAction(${m.id},'reactivate')" style="height: 42px; padding: 0 24px; background: #16a34a; border-color: #16a34a;">
          Reactivate Member <span class="material-icons-round" style="font-size: 18px; margin-left: 8px;">verified_user</span>
        </button>
      </div>
    </div>`;
}

// ===== HELPERS =====
window.updateExtendPreview = function (currentExpiryStr) {
  if (!currentExpiryStr) return;
  const daysToAdd = parseInt(document.getElementById('pm-ext-days')?.value) || 0;

  // Parse '23-Apr-2026' style or standard
  let current;
  if (currentExpiryStr.includes('-')) {
    const parts = currentExpiryStr.split('-');
    const months = { 'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5, 'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11 };
    current = new Date(parts[2], months[parts[1]], parts[0]);
  } else {
    current = new Date(currentExpiryStr);
  }

  if (isNaN(current)) return;

  const newDate = new Date(current);
  newDate.setDate(newDate.getDate() + daysToAdd);

  const fmtDate = (d) => d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).replace(/ /g, '-');
  const previewEl = document.getElementById('pm-ext-preview-date');
  if (previewEl) previewEl.textContent = fmtDate(newDate);
};

window.selectExtChip = function (el, val) {
  el.parentElement.querySelectorAll('.extension-chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  const customWrap = document.getElementById('ext-custom-wrap');
  const daysInput = document.getElementById('pm-ext-days');
  if (val === 'custom') {
    if (customWrap) customWrap.style.display = 'grid';
    updateExpiryPreview();
  } else {
    if (customWrap) customWrap.style.display = 'none';
    if (daysInput) daysInput.value = val;
    updateExpiryPreview();
  }
};

window.updateExpiryPreview = function () {
  const activeChip = document.querySelector('.extension-chip.active');
  let days = 30;
  if (activeChip && activeChip.dataset.days === 'custom') {
    const v = parseInt(document.getElementById('pm-ext-custom-val')?.value) || 1;
    const u = document.getElementById('pm-ext-custom-unit')?.value || 'days';
    days = u === 'months' ? v * 30 : v;
  } else if (activeChip) {
    days = parseInt(activeChip.dataset.days) || 30;
  }
  document.getElementById('pm-ext-days').value = days;
  const current = document.getElementById('ep-current')?.textContent || 'N/A';
  const newEl = document.getElementById('ep-new');
  if (newEl) newEl.textContent = calcNewExpiry(current, days);
};

window.selectProration = function (el, val) {
  el.parentElement.querySelectorAll('.proration-option').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
  const hidden = document.getElementById('pm-proration');
  if (hidden) hidden.value = val;
};

window.updateAssignDuration = function () {
  const startVal = document.getElementById('pm-start-date')?.value;
  const endVal = document.getElementById('pm-end-date')?.value;
  const preview = document.getElementById('assign-duration-preview');

  if (!startVal || !endVal) {
    if (preview) preview.style.display = 'none';
    return;
  }

  const start = new Date(startVal);
  const end = new Date(endVal);

  if (isNaN(start) || isNaN(end) || start > end) {
    if (preview) preview.style.display = 'none';
    return;
  }

  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const fmtDate = (d) => d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).replace(/ /g, '-');

  if (preview) {
    preview.style.display = 'flex';
    const durEl = document.getElementById('ad-duration');
    const perEl = document.getElementById('ad-period');
    if (durEl) durEl.textContent = diffDays + ' Days';
    if (perEl) perEl.textContent = fmtDate(start) + ' to ' + fmtDate(end);
  }
};

window.autoSetEndDate = function () {
  const sel = document.getElementById('pm-plan-select');
  const startVal = document.getElementById('pm-start-date')?.value;
  if (!sel || !startVal) return;

  const planData = (typeof plans !== 'undefined' ? plans : []).find(p => p.name === sel.value) || {};
  let days = 30;
  if (planData.validity) {
    days = { monthly: 30, quarterly: 90, halfyearly: 180, yearly: 365, '15days': 15 }[planData.validity] || 30;
  }

  const start = new Date(startVal);
  start.setDate(start.getDate() + days);

  const endEl = document.getElementById('pm-end-date');
  if (endEl) {
    endEl.value = start.toISOString().split('T')[0];
    updateAssignDuration();
  }

  // Also update upgrade preview card if present
  const upRange = document.getElementById('up-period-range');
  const upDuration = document.getElementById('up-period-duration');
  const upCard = document.getElementById('upgrade-period-preview');
  if (upRange && upDuration) {
    if (upRange) upRange.textContent = fmt(new Date(startVal)) + ' to ' + fmt(start);
    if (upDuration) upDuration.textContent = days + ' Days';
    if (upCard) upCard.style.display = 'flex';
  }
};


// ===== CONFIRMATION DIALOG =====
window.confirmSuspend = function (memberId) {
  const overlay = document.createElement('div');
  overlay.className = 'confirm-dialog-overlay';
  overlay.id = 'confirm-overlay';
  overlay.innerHTML = `
    <div class="confirm-dialog">
      <div class="confirm-dialog-icon" style="background:#fef2f2;">
        <span class="material-icons-round" style="color:#ef4444;">warning</span>
      </div>
      <h3>Confirm Suspension</h3>
      <p>Are you sure you want to suspend this member? They will lose access to all plan features.</p>
      <div class="confirm-dialog-actions">
        <button class="plan-btn-cancel" onclick="document.getElementById('confirm-overlay').remove()">Cancel</button>
        <button class="plan-btn-submit danger" onclick="document.getElementById('confirm-overlay').remove(); submitPlanAction(${memberId},'suspend')">
          Yes, Suspend
        </button>
      </div>
    </div>`;
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
  document.body.appendChild(overlay);
};

// ===== SUBMIT HANDLER =====
window.submitPlanAction = function (memberId, action) {
  const m = (typeof members !== 'undefined' ? members : []).find(x => x.id === memberId);
  if (!m) return;
  if (!m.assignedPlans) m.assignedPlans = [];

  const today = new Date();
  const newSr = m.assignedPlans.length > 0 ? Math.max(...m.assignedPlans.map(p => p.sr)) + 1 : 1;
  const invNo = 'ISPL/' + (1000 + newSr) + '/' + today.getFullYear() + '-' + String(today.getFullYear() + 1).slice(-2);
  const timestamp = today.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) + ' ' + today.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

  // Invoice logic
  const genInv = document.getElementById('pm-gen-invoice');
  const invTypeEl = document.getElementById('pm-invoice-type');
  const shouldGenerate = genInv ? genInv.checked : false;
  const invType = invTypeEl ? invTypeEl.value : 'final';

  if (action === 'assign' || action === 'upgrade') {
    const sel = document.getElementById('pm-plan-select');
    if (!sel || !sel.value) { showToast('Please select a plan', 'error'); return; }
    const planName = sel.value;
    const startVal = document.getElementById('pm-start-date');
    const startDate = startVal ? new Date(startVal.value) : today;

    const endVal = document.getElementById('pm-end-date');
    let endDate;
    if (endVal && endVal.value) {
      endDate = new Date(endVal.value);
    } else {
      const planData = (typeof plans !== 'undefined' ? plans : []).find(p => p.name === planName) || {};
      const days = planData.validity ? ({ monthly: 30, quarterly: 90, halfyearly: 180, yearly: 365, '15days': 15 }[planData.validity] || 30) : 30;
      endDate = new Date(startDate); endDate.setDate(endDate.getDate() + days);
    }

    const planData = (typeof plans !== 'undefined' ? plans : []).find(p => p.name === planName) || {};
    const isFree = planData.price === 0;
    const assignedInvNo = shouldGenerate && !isFree ? invNo : '';
    // Final Invoice -> Paid. Proforma/No Invoice -> UnPaid (or N/A if free)
    const assignedStatus = isFree ? 'N/A' : (shouldGenerate ? (invType === 'final' ? 'Paid' : 'UnPaid') : 'N/A');
    const prorationVal = document.getElementById('pm-proration')?.value;
    const prorationText = prorationVal === 'yes' ? ' (Prorated)' : ' (Full Charge)';
    const remarkText = action === 'upgrade' ? `Upgraded from ${(m.assignedPlans.find(p => !['Suspended', 'Reactivated'].includes(p.name)) || {}).name || 'None'} to ${planName}${prorationText}` : 'Plan assigned by Admin';

    // NEW LOGIC: If Final Invoice, show the "Mark as Paid" popup first
    if (shouldGenerate && invType === 'final' && !isFree) {
      openPaymentStatusModal(m, {
        planName,
        startDate,
        endDate,
        remark: remarkText,
        amount: '₹ ' + (planData.price ? Number(planData.price).toLocaleString() : '0'),
        invoiceNo: invNo,
        type: action
      });
      return;
    }

    finalizePlanAssignment(m, {
      planName,
      startDate,
      endDate,
      remark: remarkText,
      amount: '₹ ' + (planData.price ? Number(planData.price).toLocaleString() : '0'),
      invoiceNo: assignedInvNo,
      status: assignedStatus,
      invoiceType: shouldGenerate && !isFree ? (invType === 'proforma' ? 'Proforma' : 'Final') : '',
      type: action
    });
    
  } else if (action === 'extend') {
    const extDays = parseInt(document.getElementById('pm-ext-days')?.value) || 30;
    const actualPlan = m.assignedPlans.find(p => !['Suspended', 'Reactivated'].includes(p.name)) || {};
    if (!actualPlan.name) { showToast('No active plan to extend', 'error'); return; }
    const planData = (typeof plans !== 'undefined' ? plans : []).find(p => p.name === actualPlan.name) || {};
    const isFree = planData.price === 0;
    const extEnd = new Date(today); extEnd.setDate(extEnd.getDate() + extDays);
    const assignedInvNo = shouldGenerate && !isFree ? invNo : '';
    const assignedStatus = isFree ? 'N/A' : (shouldGenerate ? (invType === 'final' ? 'Paid' : 'UnPaid') : 'N/A');

    // NEW LOGIC: If Final Invoice, show the "Mark as Paid" popup first
    if (shouldGenerate && invType === 'final' && !isFree) {
      openPaymentStatusModal(m, {
        planName: actualPlan.name,
        startDate: today,
        endDate: extEnd,
        remark: 'Plan extended by ' + extDays + ' days',
        amount: '₹ ' + (planData.price ? Number(planData.price).toLocaleString() : '0'),
        invoiceNo: invNo,
        type: 'extend'
      });
      return;
    }

    finalizePlanAssignment(m, {
      planName: actualPlan.name,
      startDate: today,
      endDate: extEnd,
      remark: 'Plan extended by ' + extDays + ' days',
      amount: '₹ ' + (planData.price ? Number(planData.price).toLocaleString() : '0'),
      invoiceNo: assignedInvNo,
      status: assignedStatus,
      invoiceType: shouldGenerate && !isFree ? (invType === 'proforma' ? 'Proforma' : 'Final') : '',
      type: 'extend'
    });
  } else if (action === 'suspend') {
    const reason = document.getElementById('pm-suspend-reason')?.value || 'No reason';
    m.status = 'suspended';
    m.assignedPlans.unshift({ sr: newSr, name: 'Suspended', date: fmtDate(today), remark: reason, invoice: '', status: 'N/A', type: 'suspend', admin: 'Admin User', timestamp });
    closeModal();
    showToast('Member suspended', 'error');

  } else if (action === 'reactivate') {
    const note = document.getElementById('pm-reactivate-note')?.value || 'Access restored';
    m.status = 'active';
    m.assignedPlans.unshift({ sr: newSr, name: 'Reactivated', date: fmtDate(today), remark: note, invoice: '', status: 'N/A', type: 'reactivate', admin: 'Admin User', timestamp });
    closeModal();
    showToast('Member reactivated!', 'success');
  }

  if (action === 'suspend' || action === 'reactivate') {
    switchTab(memberId, 'plan');
  }
}

// Separate functions to finalize and show payment modal
function finalizePlanAssignment(m, data, bankInfo = null) {
  const timestamp = new Date().toLocaleString();
  const newSr = m.assignedPlans.length + 1;
  
  if (data.type === 'assign' || data.type === 'upgrade') {
    m.plan = data.planName.toLowerCase().replace('tk-', '');
    if (m.status === 'suspended') m.status = 'active';
  }

  m.assignedPlans.unshift({ 
    sr: newSr, 
    name: data.planName, 
    date: fmtDate(data.startDate) + ' to ' + fmtDate(data.endDate), 
    remark: data.remark, 
    invoice: data.invoiceNo, 
    amount: data.amount,
    status: data.status, 
    invoiceType: data.invoiceType, 
    type: data.type, 
    admin: 'Admin User', 
    timestamp,
    bankInfo: bankInfo || { date: '-', amount: '0', bankName: '', mode: '', refNo: '' }
  });
  
  closeModal();
  showToast(data.planName + ' ' + (data.type === 'upgrade' ? 'upgraded' : (data.type === 'extend' ? 'extended' : 'assigned')) + ' successfully!', 'success');
  
  if (window.renderTable) window.renderTable();
  if (window.switchTab) window.switchTab(m.id, 'plan');
}

function openPaymentStatusModal(m, planData) {
  const modal = document.getElementById('modal-container');
  const content = document.getElementById('modal-content');
  if (!modal || !content) return;

  const todayStr = new Date().toISOString().split('T')[0];

  content.innerHTML = `
    <div class="modal-header-modern" style="padding: 24px; border-bottom: 1px solid #f1f5f9;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <div>
          <h2 style="font-family:'Outfit',sans-serif; font-size: 1.5rem; font-weight: 700; color: #1e293b; margin:0;">Payment Confirmation</h2>
          <p style="margin: 4px 0 0; color: #64748b; font-weight: 600; font-size: 0.95rem;">Mark this invoice as paid and record bank details.</p>
        </div>
        <button onclick="closeModal()" style="background:none; border:none; color:#94a3b8; cursor:pointer;"><span class="material-icons-round">close</span></button>
      </div>
    </div>

    <div style="padding: 24px;">
      <div style="background: #f8fafc; border-radius: 12px; padding: 16px; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <div style="font-size: 0.75rem; font-weight: 800; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px;">Pending Invoice</div>
          <div style="font-size: 1.1rem; font-weight: 800; color: #1e293b;">${planData.invoiceNo}</div>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 0.75rem; font-weight: 800; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px;">Amount to Settle</div>
          <div style="font-size: 1.1rem; font-weight: 800; color: #4880FF;">${planData.amount}</div>
        </div>
      </div>

      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
        <div class="pm-invoice-checkbox checked" id="payment-paid-check" onclick="this.classList.toggle('checked'); document.getElementById('payment-fields-area').classList.toggle('hidden')">
          <span class="material-icons-round" style="font-size:16px;">done</span>
        </div>
        <label style="font-size: 1rem; font-weight: 800; color: #1e293b; cursor: pointer;" onclick="document.getElementById('payment-paid-check').click()">Mark as Paid?</label>
      </div>

      <div id="payment-fields-area" class="pm-fade-in">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
          <div style="display: flex; flex-direction: column; gap: 6px;">
            <label style="font-size: 0.7rem; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Payment Date</label>
            <div style="height: 42px; border: 1px solid #e2e8f0; border-radius: 8px; display: flex; align-items: center; padding: 0 12px;">
              <input type="date" id="pm-pay-date" value="${todayStr}" style="width: 100%; border: none; outline: none; background: transparent; font-weight: 600; font-size: 0.9rem; color: #1e293b; font-family: 'Nunito Sans', sans-serif;">
            </div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 6px;">
            <label style="font-size: 0.7rem; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Payment Mode</label>
            <div style="position: relative; height: 42px; border: 1px solid #e2e8f0; border-radius: 8px; display: flex; align-items: center; padding: 0 12px;">
              <select id="pm-pay-mode" style="width: 100%; border: none; outline: none; background: transparent; font-weight: 600; font-size: 0.9rem; color: #1e293b; appearance: none; cursor: pointer; font-family: 'Nunito Sans', sans-serif;">
                <option value="Bank Transfer">Bank Transfer</option>
                <option value="Cash">Cash</option>
                <option value="Check">Check</option>
                <option value="UPI">UPI / QR</option>
              </select>
              <span class="material-icons-round" style="position: absolute; right: 8px; pointer-events: none; color: #94a3b8; font-size: 18px;">expand_more</span>
            </div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 6px;">
            <label style="font-size: 0.7rem; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Reference Number</label>
            <div style="height: 42px; border: 1px solid #e2e8f0; border-radius: 8px; display: flex; align-items: center; padding: 0 12px;">
              <input type="text" id="pm-pay-ref" placeholder="TXN..." style="width: 100%; border: none; outline: none; background: transparent; font-weight: 600; font-size: 0.9rem; color: #1e293b; font-family: 'Nunito Sans', sans-serif;">
            </div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 6px;">
            <label style="font-size: 0.7rem; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Settlement Amount</label>
            <div style="height: 42px; border: 1px solid #e2e8f0; border-radius: 8px; display: flex; align-items: center; padding: 0 12px;">
              <input type="text" id="pm-pay-amount" value="${planData.amount.replace('₹ ', '').replace(',', '')}" style="width: 100%; border: none; outline: none; background: transparent; font-weight: 600; font-size: 0.9rem; color: #1e293b; font-family: 'Nunito Sans', sans-serif;">
            </div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 6px; grid-column: span 2;">
            <label style="font-size: 0.7rem; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Recipient Bank</label>
            <div style="height: 42px; border: 1px solid #e2e8f0; border-radius: 8px; display: flex; align-items: center; padding: 0 12px;">
              <input type="text" id="pm-pay-bank" placeholder="e.g. HDFC Bank" style="width: 100%; border: none; outline: none; background: transparent; font-weight: 600; font-size: 0.9rem; color: #1e293b; font-family: 'Nunito Sans', sans-serif;">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal-footer" style="padding: 20px 24px; border-top: 1px solid #f1f5f9; display: flex; justify-content: flex-end; gap: 12px; background: #fff; border-radius: 0 0 20px 20px;">
      <button class="btn-outline" onclick="closeModal()" style="height: 42px; padding: 0 24px;">Discard</button>
      <button class="btn-primary" id="btn-confirm-payment" style="height: 42px; padding: 0 24px;">Confirm & Assign</button>
    </div>
  `;

  document.getElementById('btn-confirm-payment').onclick = () => {
    const isPaid = document.getElementById('payment-paid-check').classList.contains('checked');
    let bankInfo = null;
    let status = 'UnPaid';

    if (isPaid) {
      status = 'Paid';
      bankInfo = {
        date: document.getElementById('pm-pay-date').value,
        mode: document.getElementById('pm-pay-mode').value,
        refNo: document.getElementById('pm-pay-ref').value,
        amount: document.getElementById('pm-pay-amount').value,
        bankName: document.getElementById('pm-pay-bank').value
      };
    }

    finalizePlanAssignment(m, {
      ...planData,
      status,
      invoiceType: 'Final'
    }, bankInfo);
  };
}

// Helper for custom select in extend view
window.updateExtendPreviewFromSelect = function(val) {
  // Find current expiry from UI or member data
  const currentExpiryStr = document.getElementById('ep-current')?.textContent || '';
  if (window.updateExtendPreview) {
    window.updateExtendPreview(currentExpiryStr);
  } else {
    // Fallback logic if needed
    const preview = document.getElementById('pm-ext-preview-date');
    if (preview && typeof calcNewExpiry === 'function') {
      preview.textContent = calcNewExpiry(currentExpiryStr, parseInt(val));
    }
  }
};

// ESC key to close modal
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    const overlay = document.getElementById('confirm-overlay');
    if (overlay) { overlay.remove(); return; }
    const modal = document.getElementById('modal-container');
    if (modal && !modal.classList.contains('hidden')) closeModal();
  }
});
document.addEventListener('click', function(e) {
  if (!e.target.closest('.pm-action-dropdown-wrap')) {
    document.querySelectorAll('.dropdown-menu').forEach(m => {
      m.style.opacity = '0';
      m.style.visibility = 'hidden';
      m.style.transform = 'translateY(10px)';
    });
  }
});
