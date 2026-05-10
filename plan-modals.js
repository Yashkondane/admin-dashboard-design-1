// ===== PLAN MODAL SYSTEM =====
// All plan-related modal workflows

// Invoice section builder (reusable)
function buildInvoiceSection(m) {
  // Always show invoice option for plan actions to allow flexibility 
  // during upgrades or assignments.

  return `
    <div class="plan-invoice-section">
      <div class="pm-invoice-check-row" onclick="toggleInvoiceSection()">
        <div class="pm-invoice-checkbox" id="pm-inv-check">
          <span class="material-icons-round" style="font-size:16px;">done</span>
        </div>
        <div class="pm-invoice-check-text">
          <h4>Generate invoice?</h4>
          <p>Create a billing record alongside this action.</p>
        </div>
        <input type="checkbox" id="pm-gen-invoice" style="display:none;">
      </div>

      <div id="pm-invoice-type-area" style="display:none; margin-top: 24px; animation: pm-fade-in 0.3s ease;">
        <label class="pm-form-label-modern">INVOICE TYPE</label>
        <div class="pm-invoice-type-list">
          <div class="pm-invoice-type-item" onclick="selectInvoiceType('proforma')">
            <div>
              <div class="pm-it-label">Proforma Invoice</div>
              <div class="pm-it-desc">Preliminary, not payable</div>
            </div>
            <div class="pm-it-radio"><span class="material-icons-round" style="color:#e2e8f0;">radio_button_unchecked</span></div>
          </div>
          <div class="pm-invoice-type-item selected" onclick="selectInvoiceType('final')">
            <div>
              <div class="pm-it-label">Final Invoice</div>
              <div class="pm-it-desc">Real, payable invoice</div>
            </div>
            <div class="pm-it-radio"><span class="material-icons-round" style="color:#0f172a;">check_circle</span></div>
          </div>
        </div>
        <input type="hidden" id="pm-invoice-type" value="final">
      </div>
    </div>
  `;
}

window.toggleInvoiceSection = function () {
  const check = document.getElementById('pm-inv-check');
  const input = document.getElementById('pm-gen-invoice');
  const area = document.getElementById('pm-invoice-type-area');

  input.checked = !input.checked;
  if (input.checked) {
    check.classList.add('checked');
    area.style.display = 'block';
  } else {
    check.classList.remove('checked');
    area.style.display = 'none';
  }
};

window.selectInvoiceType = function (val) {
  const list = document.querySelectorAll('.pm-invoice-type-item');
  list.forEach(item => {
    item.classList.remove('selected');
    item.querySelector('.pm-it-radio .material-icons-round').textContent = 'radio_button_unchecked';
    item.querySelector('.pm-it-radio .material-icons-round').style.color = '#e2e8f0';
  });

  const selected = Array.from(list).find(i => i.getAttribute('onclick').includes(val));
  if (selected) {
    selected.classList.add('selected');
    selected.querySelector('.pm-it-radio .material-icons-round').textContent = 'check_circle';
    selected.querySelector('.pm-it-radio .material-icons-round').style.color = '#0f172a';
  }
  document.getElementById('pm-invoice-type').value = val;
};

// Plan options builder
function getPlanOptions() {
  return (typeof plans !== 'undefined' ? plans : []).map(p => {
    const vl = typeof VALIDITY_LABELS !== 'undefined' ? (VALIDITY_LABELS[p.validity] || p.validity) : p.validity;
    return `<option value="${p.name}">${p.name}  ${p.price === 0 ? 'FREE' : '₹' + Number(p.price).toLocaleString() + ' / ' + vl}</option>`;
  }).join('');
}

// Select wrapper
function selWrap(id, opts) {
  return `<div class="plan-field-select">
    <select id="${id}">${opts}</select>
    <span class="material-icons-round select-arrow">expand_more</span>
  </div>`;
}

// ===== TIMELINE VIEW TOGGLE =====
window.switchTimelineView = function (view, btn) {
  const activityView = document.getElementById('tl-activity-view');
  const tableView = document.getElementById('tl-table-view');
  if (!activityView || !tableView) return;

  // Toggle views
  activityView.style.display = view === 'activity' ? 'block' : 'none';
  tableView.style.display = view === 'table' ? 'block' : 'none';

  // Toggle button states
  btn.parentElement.querySelectorAll('.tl-toggle-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
};

// ===== UNIFIED MANAGE PLAN MODAL =====
window.openManagePlanModal = function (memberId) {
  const m = members.find(x => x.id === memberId);
  if (!m) return;

  const modalContainer = document.getElementById('modal-container');
  const modalContent = document.getElementById('modal-content');
  modalContent.className = 'modal-content plan-modal';
  modalContent.style.maxWidth = '680px';

  const isSuspended = m.status === 'suspended';
  const actions = [
    { key: 'assign', name: 'Assign Plan' },
    { key: 'extend', name: 'Extend Plan' },
    { key: 'upgrade', name: 'Upgrade Plan' },
    isSuspended ? { key: 'reactivate', name: 'Reactivate Member' } : { key: 'suspend', name: 'Suspend Member' }
  ];

  modalContent.innerHTML = `
    <div class="pm-header-modern">
      <div class="pm-header-left">
        <h3>Plan Actions</h3>
      </div>
      <div class="pm-header-right" style="display:flex; align-items:center; gap:16px;">
        <div class="pm-action-dropdown-wrap">
          <div class="pm-field-modern">
            <select id="pm-action-dropdown" onchange="selectManageAction(${memberId}, this.value)">
              ${actions.map(a => `<option value="${a.key}">${a.name}</option>`).join('')}
            </select>
            <span class="material-icons-round" style="color:#94a3b8; font-size: 20px;">expand_more</span>
          </div>
        </div>
        <button class="modal-close" onclick="closeModal()" style="background:#f8fafc; border:1px solid #e2e8f0; width:34px; height:34px; border-radius:50%; display:grid; place-items:center; cursor:pointer; color:#94a3b8; transition:all 0.2s;" onmouseover="this.style.background='#f1f5f9'; this.style.borderColor='#cbd5e1'; this.style.color='#64748b'" onmouseout="this.style.background='#f8fafc'; this.style.borderColor='#e2e8f0'; this.style.color='#94a3b8'">
          <span class="material-icons-round" style="font-size:18px;">close</span>
        </button>
      </div>
    </div>
    <div class="modal-body" style="padding: 32px;">
      <div id="pm-dynamic-form-area"></div>
    </div>
    <div class="pm-footer-modern" id="pm-footer" style="display:none; justify-content: flex-end; gap:12px;">
      <button class="btn-outline" onclick="closeModal()" style="height: 38px; padding: 0 20px; border-radius: 8px; font-weight: 700; border: 1.5px solid #e2e8f0; background: #fff; color: #64748b; cursor: pointer; font-size: 0.85rem; transition: all 0.2s;" onmouseover="this.style.borderColor='#cbd5e1'; this.style.color='#1e293b'; this.style.background='#f8fafc'" onmouseout="this.style.borderColor='#e2e8f0'; this.style.color='#64748b'; this.style.background='#fff'">Cancel</button>
      <div id="pm-footer-actions"></div>
    </div>
  `;

  modalContainer.classList.remove('hidden');

  setTimeout(() => {
    const dropdown = document.getElementById('pm-action-dropdown');
    if (dropdown) {
      dropdown.value = 'assign';
      selectManageAction(memberId, 'assign');
    }
  }, 0);
};

// ===== SELECT ACTION INSIDE UNIFIED MODAL =====
window.selectManageAction = function (memberId, action) {
  const m = members.find(x => x.id === memberId);
  if (!m) return;
  const formArea = document.getElementById('pm-dynamic-form-area');
  const footer = document.getElementById('pm-footer');
  const footerActions = document.getElementById('pm-footer-actions');
  
  if (!formArea) return;

  let html = '';
  let footerBtn = '';

  if (action === 'assign') {
    html = `
      <div class="pm-form-grid">
        <div class="pm-form-full">
          <label class="pm-form-label-modern">TARGET PLAN</label>
          <div class="pm-field-modern">
            <select id="pm-plan-select" onchange="autoSetEndDate()">
              <option value="" disabled selected>Select Plan</option>
              ${(typeof plans !== 'undefined' ? plans : []).map(p => `<option value="${p.name}">${p.name} &nbsp; $${p.price}/${p.validity === 'monthly' ? 'mo' : (p.validity === 'yearly' ? 'yr' : 'fixed')}</option>`).join('')}
            </select>
            <span class="material-icons-round" style="color:#94a3b8; font-size: 18px;">expand_more</span>
          </div>
        </div>
        <div>
          <label class="pm-form-label-modern">START DATE</label>
          <div class="pm-field-modern">
            <input type="date" id="pm-start-date" value="${new Date().toISOString().split('T')[0]}" onchange="autoSetEndDate()">
          </div>
        </div>
        <div>
          <label class="pm-form-label-modern">EXPIRY DATE</label>
          <div class="pm-field-modern">
            <input type="date" id="pm-end-date" onchange="updateAssignDuration()">
          </div>
        </div>
      </div>

      <div id="assign-duration-preview" class="pm-period-card" style="display:none;">
        <div class="pm-period-info">
          <div class="pm-period-label">Subscription Period</div>
          <div class="pm-period-range" id="ad-period"></div>
        </div>
        <div class="pm-period-duration" id="ad-duration"></div>
      </div>

      <div class="pm-divider-dashed"></div>
      ${buildInvoiceSection(m)}
    `;
    footerBtn = `<button class="pm-btn-apply" onclick="submitPlanAction(${m.id}, 'assign')">Apply Assign Plan <span class="material-icons-round">arrow_forward</span></button>`;

  } else if (action === 'extend') {
    const actualPlan = (m.assignedPlans && m.assignedPlans.find(p => !['Suspended', 'Reactivated'].includes(p.name))) || {};
    const currentExpiryStr = actualPlan.date ? actualPlan.date.split(' to ')[1] : '';

    html = `
      <div class="pm-form-grid">
        <div>
          <label class="pm-form-label-modern">EXTEND BY</label>
          <div class="pm-field-modern">
            <select id="pm-ext-days" onchange="updateExtendPreview('${currentExpiryStr}')">
              <option value="7">7 days</option>
              <option value="14">14 days</option>
              <option value="30" selected>30 days</option>
              <option value="60">60 days</option>
              <option value="90">90 days</option>
              <option value="365">1 year</option>
            </select>
            <span class="material-icons-round" style="color:#94a3b8; font-size: 18px;">expand_more</span>
          </div>
        </div>
        <div>
          <label class="pm-form-label-modern">NEW EXPIRY</label>
          <div class="pm-field-modern preview">
            <span id="pm-ext-preview-date">${currentExpiryStr || 'N/A'}</span>
          </div>
        </div>
      </div>
      <div class="pm-divider-dashed"></div>
      ${buildInvoiceSection(m)}
    `;
    footerBtn = `<button class="pm-btn-apply" onclick="submitPlanAction(${m.id}, 'extend')">Apply Extend Plan <span class="material-icons-round">arrow_forward</span></button>`;

  } else if (action === 'upgrade') {
    html = `
      <div class="pm-form-grid">
        <div class="pm-form-full">
          <label class="pm-form-label-modern">TARGET PLAN</label>
          <div class="pm-field-modern">
            <select id="pm-plan-select" onchange="autoSetEndDate()">
              <option value="" disabled selected>Select Plan</option>
              ${(typeof plans !== 'undefined' ? plans : []).map(p => `<option value="${p.name}">${p.name} &nbsp; $${p.price}/${p.validity === 'monthly' ? 'mo' : (p.validity === 'yearly' ? 'yr' : 'fixed')}</option>`).join('')}
            </select>
            <span class="material-icons-round" style="color:#94a3b8; font-size: 18px;">expand_more</span>
          </div>
        </div>
        <div>
          <label class="pm-form-label-modern">START DATE</label>
          <div class="pm-field-modern">
            <input type="date" id="pm-start-date" value="${new Date().toISOString().split('T')[0]}" onchange="autoSetEndDate()">
          </div>
        </div>
        <div>
          <label class="pm-form-label-modern">PRORATION</label>
          <div class="pm-field-modern">
            <select id="pm-proration">
              <option value="yes" selected>Yes, prorate</option>
              <option value="no">No, full charge</option>
            </select>
            <span class="material-icons-round" style="color:#94a3b8; font-size: 18px;">expand_more</span>
          </div>
        </div>
      </div>
      
      <div id="upgrade-period-preview" class="pm-period-card" style="display:none;">
        <div class="pm-period-info">
          <div class="pm-period-label">New Subscription Period</div>
          <div class="pm-period-range" id="up-period-range"></div>
        </div>
        <div class="pm-period-duration" id="up-period-duration"></div>
      </div>

      <div class="pm-divider-dashed"></div>
      ${buildInvoiceSection(m)}
    `;
    footerBtn = `<button class="pm-btn-apply" onclick="submitPlanAction(${m.id}, 'upgrade')">Apply Upgrade Plan <span class="material-icons-round">arrow_forward</span></button>`;

  } else if (action === 'suspend') {
    html = `
      <div class="pm-form-grid">
        <div class="pm-form-full">
          <label class="pm-form-label-modern">REASON FOR SUSPENSION</label>
          <div class="pm-field-modern" style="height: auto; padding: 10px 12px;">
            <textarea id="pm-suspend-reason" class="plan-field-textarea" style="border:none; outline:none; width:100%; font-size:0.82rem; font-weight:600; min-height:80px;" placeholder="e.g. Terms of service violation, payment failure..."></textarea>
          </div>
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
          <div class="pm-field-modern" style="height: auto; padding: 10px 12px;">
            <textarea id="pm-reactivate-note" class="plan-field-textarea" style="border:none; outline:none; width:100%; font-size:0.82rem; font-weight:600; min-height:80px;" placeholder="e.g. Payment cleared, manual override..."></textarea>
          </div>
          <div class="pm-field-help">Internal note about why access was restored.</div>
        </div>
      </div>
    `;
    footerBtn = `<button class="pm-btn-apply" onclick="submitPlanAction(${m.id}, 'reactivate')">Apply Reactivation <span class="material-icons-round">arrow_forward</span></button>`;
  }


  formArea.innerHTML = html;
  footerActions.innerHTML = footerBtn;
  footer.style.display = 'flex';

  // Initial state setup
  if (action === 'assign' || action === 'upgrade') {
    const sel = document.getElementById('pm-plan-select');
    if (sel) {
      sel.addEventListener('change', autoSetEndDate);
    }
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
        <div class="plan-modal-icon" style="background:#eff6ff;color:#2563eb;">
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
          ${selWrap('pm-plan-select', po)}
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
    <div class="modal-header">
      <div class="modal-header-left">
        <div class="plan-modal-icon" style="background:#eff6ff;color:#2563eb;">
          <span class="material-icons-round">more_time</span>
        </div>
        <div>
          <h3 class="plan-modal-title">Extend Plan</h3>
          <p class="plan-modal-subtitle">${actualPlan.name || 'Current Plan'} · ${m.member}</p>
        </div>
      </div>
      <button class="modal-close" onclick="closeModal()"><span class="material-icons-round">close</span></button>
    </div>
    <div class="modal-body">
      <div class="plan-field-group">
        <div class="plan-field-label">Extension Duration</div>
        <div class="extension-chips" id="ext-chips">
          ${presets.map(d => `<button class="extension-chip${d === 30 ? ' active' : ''}" data-days="${d}" onclick="selectExtChip(this,${d})">${d} Day${d > 1 ? 's' : ''}</button>`).join('')}
          <button class="extension-chip" data-days="custom" onclick="selectExtChip(this,'custom')">Custom</button>
        </div>
        <div id="ext-custom-wrap" style="display:none;" class="extension-custom-group">
          <div class="plan-field-group">
            <div class="plan-field-label" style="font-size:0.68rem;">Amount</div>
            <input type="number" class="plan-field-input" id="pm-ext-custom-val" value="45" min="1" oninput="updateExpiryPreview()">
          </div>
          <div class="plan-field-group">
            <div class="plan-field-label" style="font-size:0.68rem;">Unit</div>
            ${selWrap('pm-ext-custom-unit', '<option value="days">Days</option><option value="months">Months</option>')}
          </div>
        </div>
      </div>
      <input type="hidden" id="pm-ext-days" value="30">
      <div class="expiry-preview" id="expiry-preview">
        <div class="expiry-preview-item">
          <div class="ep-label">Current Expiry</div>
          <div class="ep-value" id="ep-current">${activePlanExpiry}</div>
        </div>
        <div class="expiry-preview-arrow"><span class="material-icons-round">arrow_forward</span></div>
        <div class="expiry-preview-item new-expiry">
          <div class="ep-label">New Expiry</div>
          <div class="ep-value" id="ep-new">${calcNewExpiry(activePlanExpiry, 30)}</div>
        </div>
      </div>
      <div class="plan-modal-divider"></div>
      <div id="pm-invoice-section">${buildInvoiceSection(actualPlan.name || '')}</div>
    </div>
    <div class="modal-footer">
      <div class="modal-footer-hint"><span class="material-icons-round">tips_and_updates</span> Adds more time to the current subscription.</div>
      <div class="modal-footer-actions">
        <button class="plan-btn-cancel" onclick="closeModal()">Cancel</button>
        <button class="plan-btn-submit" onclick="submitPlanAction(${m.id},'extend')">
          Apply Extension <span class="material-icons-round">arrow_forward</span>
        </button>
      </div>
    </div>`;
}

// ===== UPGRADE PLAN MODAL =====
function buildUpgradeModal(m, todayISO, po, actualPlan) {
  return `
    <div class="modal-header">
      <div class="modal-header-left">
        <div class="plan-modal-icon" style="background:#f3e8ff;color:#7c3aed;">
          <span class="material-icons-round">upgrade</span>
        </div>
        <div>
          <h3 class="plan-modal-title">Upgrade Plan</h3>
          <p class="plan-modal-subtitle">Current: ${actualPlan.name || 'None'} · ${m.member}</p>
        </div>
      </div>
      <button class="modal-close" onclick="closeModal()"><span class="material-icons-round">close</span></button>
    </div>
    <div class="modal-body">
      <div class="plan-form-grid">
        <div class="plan-field-group">
          <div class="plan-field-label">New Plan <span class="required">*</span></div>
          ${selWrap('pm-plan-select', po)}
        </div>
        <div class="plan-field-group">
          <div class="plan-field-label">Start Date</div>
          <input type="date" class="plan-field-input" id="pm-start-date" value="${todayISO}">
        </div>
      </div>
      <div class="plan-field-group">
        <div class="plan-field-label">Proration</div>
        <div class="proration-options">
          <div class="proration-option selected" onclick="selectProration(this,'yes')">
            <div class="proration-radio"></div>
            <span class="proration-option-text">Yes, prorate</span>
          </div>
          <div class="proration-option" onclick="selectProration(this,'no')">
            <div class="proration-radio"></div>
            <span class="proration-option-text">No proration</span>
          </div>
        </div>
        <input type="hidden" id="pm-proration" value="yes">
      </div>
      <div class="plan-modal-divider"></div>
      <div id="pm-invoice-section">${buildInvoiceSection('')}</div>
    </div>
    <div class="modal-footer">
      <div class="modal-footer-hint"><span class="material-icons-round">tips_and_updates</span> Proration logic will be applied to the new tier.</div>
      <div class="modal-footer-actions">
        <button class="plan-btn-cancel" onclick="closeModal()">Cancel</button>
        <button class="plan-btn-submit" onclick="submitPlanAction(${m.id},'upgrade')">
          Upgrade Plan <span class="material-icons-round">arrow_forward</span>
        </button>
      </div>
    </div>`;
}

// ===== SUSPEND MODAL =====
function buildSuspendModal(m) {
  return `
    <div class="modal-header">
      <div class="modal-header-left">
        <div class="plan-modal-icon" style="background:#fef2f2; border:1px solid #fee2e2; color:#ef4444;">
          <span class="material-icons-round">block</span>
        </div>
        <div>
          <h3 class="plan-modal-title">Suspend Member</h3>
          <p class="plan-modal-subtitle">${m.member} · ${m.company}</p>
        </div>
      </div>
      <button class="modal-close" onclick="closeModal()"><span class="material-icons-round">close</span></button>
    </div>
    <div class="modal-body">
      <div class="suspend-warning-banner">
        <span class="material-icons-round">warning</span>
        <div class="suspend-warning-text">
          <h4>This action will restrict member access</h4>
          <p>The member will be blocked from accessing the application. All active plan features will be suspended until reactivation.</p>
        </div>
      </div>
      <div class="plan-field-group">
        <div class="plan-field-label">Suspension Reason <span class="required">*</span></div>
        <input type="text" class="plan-field-input" id="pm-suspend-reason" placeholder="e.g. Non-payment, violation of terms...">
      </div>
      <div class="plan-field-group">
        <div class="plan-field-label">Admin Note (optional)</div>
        <textarea class="plan-field-textarea" id="pm-admin-notes" placeholder="Additional internal notes..."></textarea>
      </div>
    </div>
    <div class="modal-footer">
      <div class="modal-footer-hint"><span class="material-icons-round">info</span> No invoice will be generated for suspensions.</div>
      <div class="modal-footer-actions">
        <button class="plan-btn-cancel" onclick="closeModal()">Cancel</button>
        <button class="plan-btn-submit danger" onclick="confirmSuspend(${m.id})">
          Suspend Member <span class="material-icons-round">block</span>
        </button>
      </div>
    </div>`;
}

// ===== REACTIVATE MODAL =====
function buildReactivateModal(m) {
  return `
    <div class="modal-header">
      <div class="modal-header-left">
        <div class="plan-modal-icon" style="background:#f0fdf4; border:1px solid #dcfce7; color:#16a34a;">
          <span class="material-icons-round">verified_user</span>
        </div>
        <div>
          <h3 class="plan-modal-title">Reactivate Member</h3>
          <p class="plan-modal-subtitle">${m.member} · ${m.company}</p>
        </div>
      </div>
      <button class="modal-close" onclick="closeModal()"><span class="material-icons-round">close</span></button>
    </div>
    <div class="modal-body">
      <div class="reactivate-success-banner">
        <span class="material-icons-round">check_circle</span>
        <div>
          <div style="font-weight:800;color:#166534;font-size:0.88rem;margin-bottom:4px;">Restore full member access</div>
          <div style="font-size:0.78rem;font-weight:600;color:#16a34a;line-height:1.4;">Plan access and all member privileges will be immediately restored upon reactivation.</div>
        </div>
      </div>
      <div class="plan-field-group">
        <div class="plan-field-label">Reactivation Note</div>
        <textarea class="plan-field-textarea" id="pm-reactivate-note" placeholder="e.g. Payment verified, issue resolved..."></textarea>
      </div>
    </div>
    <div class="modal-footer">
      <div class="modal-footer-hint"><span class="material-icons-round">tips_and_updates</span> Restores all member privileges immediately.</div>
      <div class="modal-footer-actions">
        <button class="plan-btn-cancel" onclick="closeModal()">Cancel</button>
        <button class="plan-btn-submit success" onclick="submitPlanAction(${m.id},'reactivate')">
          Reactivate Member <span class="material-icons-round">verified_user</span>
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
    document.getElementById('ad-duration').textContent = diffDays + ' Days';
    document.getElementById('ad-period').textContent = fmtDate(start) + ' to ' + fmtDate(end);
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
    const fmt = (d) => d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).replace(/ /g, '-');
    upRange.textContent = fmt(new Date(startVal)) + ' to ' + fmt(start);
    upDuration.textContent = days + ' Days';
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
  const m = members.find(x => x.id === memberId);
  if (!m) return;
  if (!m.assignedPlans) m.assignedPlans = [];

  const fmtDate = (d) => d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
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

    m.plan = planName.toLowerCase().replace('tk-', '');
    if (m.status === 'suspended') m.status = 'active';
    m.assignedPlans.unshift({ sr: newSr, name: planName, date: fmtDate(startDate) + ' to ' + fmtDate(endDate), remark: remarkText, invoice: assignedInvNo, status: assignedStatus, invoiceType: shouldGenerate && !isFree ? (invType === 'proforma' ? 'Proforma' : 'Final') : '', type: action, admin: 'Admin User', timestamp });
    closeModal();
    showToast(planName + ' ' + (action === 'upgrade' ? 'upgraded' : 'assigned') + ' successfully!', 'success');

  } else if (action === 'extend') {
    const extDays = parseInt(document.getElementById('pm-ext-days')?.value) || 30;
    const actualPlan = m.assignedPlans.find(p => !['Suspended', 'Reactivated'].includes(p.name)) || {};
    if (!actualPlan.name) { showToast('No active plan to extend', 'error'); return; }
    const planData = (typeof plans !== 'undefined' ? plans : []).find(p => p.name === actualPlan.name) || {};
    const isFree = planData.price === 0;
    const extEnd = new Date(today); extEnd.setDate(extEnd.getDate() + extDays);
    const assignedInvNo = shouldGenerate && !isFree ? invNo : '';
    const assignedStatus = isFree ? 'N/A' : (shouldGenerate ? (invType === 'final' ? 'Paid' : 'UnPaid') : 'N/A');

    m.assignedPlans.unshift({ sr: newSr, name: actualPlan.name, date: fmtDate(today) + ' to ' + fmtDate(extEnd), remark: 'Plan extended by ' + extDays + ' days', invoice: assignedInvNo, status: assignedStatus, invoiceType: shouldGenerate && !isFree ? (invType === 'proforma' ? 'Proforma' : 'Final') : '', type: 'extend', admin: 'Admin User', timestamp });
    closeModal();
    showToast('Plan extended by ' + extDays + ' days!', 'success');

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

  switchTab(memberId, 'plan');
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
