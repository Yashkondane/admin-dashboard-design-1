// ===== PLAN MODAL SYSTEM =====
// All plan-related modal workflows

// Invoice section builder (reusable)
function buildInvoiceSection(planName) {
  const planData = (typeof plans !== 'undefined' ? plans : []).find(p => p.name === planName) || {};
  const isFree = planData.price === 0 || planName === '' || planName === 'TK FREE' || planName === 'TK-LITE';

  if (isFree) {
    return `<div class="plan-invoice-free-notice">
      <span class="material-icons-round">info</span>
      This plan does not require invoice generation.
    </div>`;
  }

  return `<div class="plan-invoice-section">
    <div class="plan-invoice-toggle-row">
      <div class="plan-invoice-toggle-label">
        <span class="material-icons-round">receipt_long</span> Generate Invoice?
      </div>
      <label class="toggle-switch">
        <input type="checkbox" id="pm-gen-invoice" checked onchange="toggleInvoiceType()">
        <span class="toggle-slider"></span>
      </label>
    </div>
    <div id="pm-invoice-type-wrap">
      <div class="plan-field-label" style="margin-bottom:8px;">Invoice Type</div>
      <div style="display:flex;gap:10px;">
        <div class="invoice-type-option selected" onclick="selectInvoiceType(this,'final')">
          <span class="option-label">Final Invoice</span>
          <span class="option-desc">Real payable invoice</span>
        </div>
        <div class="invoice-type-option" onclick="selectInvoiceType(this,'proforma')">
          <span class="option-label">Proforma Invoice</span>
          <span class="option-desc">Preliminary non-payable invoice</span>
        </div>
      </div>
      <input type="hidden" id="pm-invoice-type" value="final">
    </div>
  </div>`;
}

function toggleInvoiceType() {
  const wrap = document.getElementById('pm-invoice-type-wrap');
  const chk = document.getElementById('pm-gen-invoice');
  if (wrap) wrap.style.display = chk && chk.checked ? 'block' : 'none';
}

function selectInvoiceType(el, type) {
  el.parentElement.querySelectorAll('.invoice-type-option').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
  const hidden = document.getElementById('pm-invoice-type');
  if (hidden) hidden.value = type;
}

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
window.switchTimelineView = function(view, btn) {
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
window.openManagePlanModal = function(memberId) {
  const m = members.find(x => x.id === memberId);
  if (!m) return;

  const modalContainer = document.getElementById('modal-container');
  const modalContent = document.getElementById('modal-content');
  modalContent.className = 'modal-content plan-modal';
  modalContent.style.maxWidth = '680px';

  const isSuspended = m.status === 'suspended';

  // Action options
  const actions = [
    { key: 'assign', icon: 'add_task', name: 'Assign Plan', desc: 'Assign a new plan' },
    { key: 'extend', icon: 'more_time', name: 'Extend Plan', desc: 'Add more time' },
    { key: 'upgrade', icon: 'upgrade', name: 'Upgrade Plan', desc: 'Change to higher tier' },
    isSuspended
      ? { key: 'reactivate', icon: 'verified_user', name: 'Reactivate', desc: 'Restore access' }
      : { key: 'suspend', icon: 'block', name: 'Suspend', desc: 'Restrict access' }
  ];

  modalContent.innerHTML = `
    <div class="modal-header">
      <div class="modal-header-left">
        <div class="plan-modal-icon" style="background:#eff6ff;color:var(--blue);">
          <span class="material-icons-round">tune</span>
        </div>
        <div>
          <h3 class="plan-modal-title">Manage Plan</h3>
          <p class="plan-modal-subtitle">${m.member} · ${m.company}</p>
        </div>
      </div>
      <button class="modal-close" onclick="closeModal()"><span class="material-icons-round">close</span></button>
    </div>
    <div class="modal-body">
      <div class="plan-field-group">
        <div class="plan-field-label">Choose Action</div>
        <div class="pm-action-selector">
          ${actions.map(a => `
            <div class="pm-action-option" data-action="${a.key}" onclick="selectManageAction(this, ${memberId}, '${a.key}')">
              <div class="pm-action-icon"><span class="material-icons-round">${a.icon}</span></div>
              <div class="pm-action-text">
                <span class="pm-action-name">${a.name}</span>
                <span class="pm-action-desc">${a.desc}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      <div id="pm-dynamic-form-area"></div>
    </div>
    <div class="modal-footer" id="pm-footer" style="display:none;">
      <div class="modal-footer-hint" id="pm-footer-hint"></div>
      <div class="modal-footer-actions" id="pm-footer-actions"></div>
    </div>
  `;

  modalContainer.classList.remove('hidden');
};

// ===== SELECT ACTION INSIDE UNIFIED MODAL =====
window.selectManageAction = function(el, memberId, action) {
  const m = members.find(x => x.id === memberId);
  if (!m) return;

  // Highlight selected
  el.closest('.pm-action-selector').querySelectorAll('.pm-action-option').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');

  const formArea = document.getElementById('pm-dynamic-form-area');
  const footer = document.getElementById('pm-footer');
  const footerHint = document.getElementById('pm-footer-hint');
  const footerActions = document.getElementById('pm-footer-actions');
  if (!formArea) return;

  const todayISO = new Date().toISOString().split('T')[0];
  const po = getPlanOptions();
  const actualPlan = (m.assignedPlans || []).find(p => !['Suspended','Reactivated'].includes(p.name)) || {};
  const activePlanExpiry = actualPlan.date ? actualPlan.date.split(' to ')[1] : 'N/A';

  let formHtml = '';
  let hintText = '';
  let btnHtml = '';

  if (action === 'assign') {
    formHtml = `
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
      <div class="expiry-preview" id="assign-duration-preview" style="display:none;">
        <div class="expiry-preview-item"><div class="ep-label">Duration</div><div class="ep-value" id="ad-duration">-</div></div>
        <div class="expiry-preview-item new-expiry"><div class="ep-label">Active Period</div><div class="ep-value" id="ad-period">-</div></div>
      </div>
      <div class="plan-modal-divider"></div>
      <div id="pm-invoice-section">${buildInvoiceSection('')}</div>`;
    hintText = '<span class="material-icons-round">tips_and_updates</span> Initiates a new billing cycle.';
    btnHtml = `<button class="plan-btn-cancel" onclick="closeModal()">Cancel</button>
      <button class="plan-btn-submit" onclick="submitPlanAction(${m.id},'assign')">Assign Plan <span class="material-icons-round">arrow_forward</span></button>`;

  } else if (action === 'extend') {
    const presets = [1,2,3,7,15,30];
    formHtml = `
      <div class="plan-field-group">
        <div class="plan-field-label">Extension Duration</div>
        <div class="extension-chips" id="ext-chips">
          ${presets.map(d => `<button class="extension-chip${d===30?' active':''}" data-days="${d}" onclick="selectExtChip(this,${d})">${d} Day${d>1?'s':''}</button>`).join('')}
          <button class="extension-chip" data-days="custom" onclick="selectExtChip(this,'custom')">Custom</button>
        </div>
        <div id="ext-custom-wrap" style="display:none;" class="extension-custom-group">
          <div class="plan-field-group"><div class="plan-field-label" style="font-size:0.68rem;">Amount</div>
            <input type="number" class="plan-field-input" id="pm-ext-custom-val" value="45" min="1" oninput="updateExpiryPreview()"></div>
          <div class="plan-field-group"><div class="plan-field-label" style="font-size:0.68rem;">Unit</div>
            ${selWrap('pm-ext-custom-unit', '<option value="days">Days</option><option value="months">Months</option>')}</div>
        </div>
      </div>
      <input type="hidden" id="pm-ext-days" value="30">
      <div class="expiry-preview" id="expiry-preview">
        <div class="expiry-preview-item"><div class="ep-label">Current Expiry</div><div class="ep-value" id="ep-current">${activePlanExpiry}</div></div>
        <div class="expiry-preview-item new-expiry"><div class="ep-label">New Expiry</div><div class="ep-value" id="ep-new">${calcNewExpiry(activePlanExpiry, 30)}</div></div>
      </div>
      <div class="plan-modal-divider"></div>
      <div id="pm-invoice-section">${buildInvoiceSection(actualPlan.name || '')}</div>`;
    hintText = '<span class="material-icons-round">tips_and_updates</span> Adds more time to the current subscription.';
    btnHtml = `<button class="plan-btn-cancel" onclick="closeModal()">Cancel</button>
      <button class="plan-btn-submit" onclick="submitPlanAction(${m.id},'extend')">Apply Extension <span class="material-icons-round">arrow_forward</span></button>`;

  } else if (action === 'upgrade') {
    formHtml = `
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
          <div class="proration-option selected" onclick="selectProration(this,'yes')"><div class="proration-radio"></div><span class="proration-option-text">Yes, prorate</span></div>
          <div class="proration-option" onclick="selectProration(this,'no')"><div class="proration-radio"></div><span class="proration-option-text">No proration</span></div>
        </div>
        <input type="hidden" id="pm-proration" value="yes">
      </div>
      <div class="plan-modal-divider"></div>
      <div id="pm-invoice-section">${buildInvoiceSection('')}</div>`;
    hintText = '<span class="material-icons-round">tips_and_updates</span> Proration logic will be applied.';
    btnHtml = `<button class="plan-btn-cancel" onclick="closeModal()">Cancel</button>
      <button class="plan-btn-submit" onclick="submitPlanAction(${m.id},'upgrade')">Upgrade Plan <span class="material-icons-round">arrow_forward</span></button>`;

  } else if (action === 'suspend') {
    formHtml = `
      <div class="suspend-warning-banner">
        <span class="material-icons-round">warning</span>
        <div class="suspend-warning-text">
          <h4>This action will restrict member access</h4>
          <p>All active plan features will be suspended until reactivation.</p>
        </div>
      </div>
      <div class="plan-field-group">
        <div class="plan-field-label">Reason <span class="required">*</span></div>
        <input type="text" class="plan-field-input" id="pm-suspend-reason" placeholder="e.g. Non-payment, violation of terms...">
      </div>`;
    hintText = '<span class="material-icons-round">info</span> No invoice for suspensions.';
    btnHtml = `<button class="plan-btn-cancel" onclick="closeModal()">Cancel</button>
      <button class="plan-btn-submit danger" onclick="confirmSuspend(${m.id})">Suspend <span class="material-icons-round">block</span></button>`;

  } else if (action === 'reactivate') {
    formHtml = `
      <div class="reactivate-success-banner">
        <span class="material-icons-round">check_circle</span>
        <div>
          <div style="font-weight:800;color:#166534;font-size:0.88rem;margin-bottom:4px;">Restore full member access</div>
          <div style="font-size:0.78rem;font-weight:600;color:#16a34a;line-height:1.4;">All member privileges will be immediately restored.</div>
        </div>
      </div>
      <div class="plan-field-group">
        <div class="plan-field-label">Reactivation Note</div>
        <textarea class="plan-field-textarea" id="pm-reactivate-note" placeholder="e.g. Payment verified, issue resolved..."></textarea>
      </div>`;
    hintText = '<span class="material-icons-round">tips_and_updates</span> Restores all privileges immediately.';
    btnHtml = `<button class="plan-btn-cancel" onclick="closeModal()">Cancel</button>
      <button class="plan-btn-submit success" onclick="submitPlanAction(${m.id},'reactivate')">Reactivate <span class="material-icons-round">verified_user</span></button>`;
  }

  formArea.innerHTML = `<div class="pm-dynamic-form">${formHtml}</div>`;
  footer.style.display = 'flex';
  footerHint.innerHTML = hintText;
  footerActions.innerHTML = btnHtml;

  // Wire up listeners for assign/upgrade
  if (action === 'assign' || action === 'upgrade') {
    const sel = document.getElementById('pm-plan-select');
    if (sel) sel.addEventListener('change', () => {
      const invWrap = document.getElementById('pm-invoice-section');
      if (invWrap) invWrap.innerHTML = buildInvoiceSection(sel.value);
      if (action === 'assign') autoSetEndDate();
    });
    if (action === 'assign') setTimeout(autoSetEndDate, 50);
  }
};

// ===== ASSIGN NEW PLAN MODAL =====
function buildAssignModal(m, todayISO, po) {
  return `
    <div class="modal-header">
      <div class="modal-header-left">
        <div class="plan-modal-icon" style="background:#eff6ff;color:var(--blue);">
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
  const presets = [1,2,3,7,15,30];
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
          ${presets.map(d => `<button class="extension-chip${d===30?' active':''}" data-days="${d}" onclick="selectExtChip(this,${d})">${d} Day${d>1?'s':''}</button>`).join('')}
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
        <div class="plan-modal-icon" style="background:#fef2f2;color:#ef4444;">
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
        <div class="plan-modal-icon" style="background:#f0fdf4;color:#16a34a;">
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
function calcNewExpiry(currentStr, days) {
  try {
    const parts = currentStr.match(/(\d+)-(\w+)-(\d+)/);
    if (!parts) return 'N/A';
    const d = new Date(`${parts[2]} ${parts[1]}, ${parts[3]}`);
    if (isNaN(d)) return 'N/A';
    d.setDate(d.getDate() + days);
    return d.toLocaleDateString('en-GB', {day:'2-digit',month:'short',year:'numeric'}).replace(/ /g,'-');
  } catch(e) { return 'N/A'; }
}

window.selectExtChip = function(el, val) {
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

window.updateExpiryPreview = function() {
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

window.selectProration = function(el, val) {
  el.parentElement.querySelectorAll('.proration-option').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
  const hidden = document.getElementById('pm-proration');
  if (hidden) hidden.value = val;
};

window.updateAssignDuration = function() {
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
  
  const fmtDate = (d) => d.toLocaleDateString('en-GB', {day:'2-digit',month:'short',year:'numeric'}).replace(/ /g,'-');
  
  if (preview) {
    preview.style.display = 'flex';
    document.getElementById('ad-duration').textContent = diffDays + ' Days';
    document.getElementById('ad-period').textContent = fmtDate(start) + ' to ' + fmtDate(end);
  }
};

window.autoSetEndDate = function() {
  const sel = document.getElementById('pm-plan-select');
  const startVal = document.getElementById('pm-start-date')?.value;
  if (!sel || !startVal) return;
  
  const planData = (typeof plans !== 'undefined' ? plans : []).find(p => p.name === sel.value) || {};
  let days = 30;
  if (planData.validity) {
    days = { monthly:30, quarterly:90, halfyearly:180, yearly:365, '15days':15 }[planData.validity] || 30;
  }
  
  const start = new Date(startVal);
  start.setDate(start.getDate() + days);
  
  const endEl = document.getElementById('pm-end-date');
  if (endEl) {
    endEl.value = start.toISOString().split('T')[0];
    updateAssignDuration();
  }
};


// ===== CONFIRMATION DIALOG =====
window.confirmSuspend = function(memberId) {
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
window.submitPlanAction = function(memberId, action) {
  const m = members.find(x => x.id === memberId);
  if (!m) return;
  if (!m.assignedPlans) m.assignedPlans = [];

  const fmtDate = (d) => d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  const today = new Date();
  const newSr = m.assignedPlans.length > 0 ? Math.max(...m.assignedPlans.map(p => p.sr)) + 1 : 1;
  const invNo = 'ISPL/' + (1000 + newSr) + '/' + today.getFullYear() + '-' + String(today.getFullYear() + 1).slice(-2);
  const timestamp = today.toLocaleDateString('en-IN', {day:'2-digit',month:'short',year:'numeric'}) + ' ' + today.toLocaleTimeString('en-IN', {hour:'2-digit',minute:'2-digit'});

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
      const days = planData.validity ? ({ monthly:30, quarterly:90, halfyearly:180, yearly:365, '15days':15 }[planData.validity] || 30) : 30;
      endDate = new Date(startDate); endDate.setDate(endDate.getDate() + days);
    }
    
    const planData = (typeof plans !== 'undefined' ? plans : []).find(p => p.name === planName) || {};
    const isFree = planData.price === 0;
    const assignedInvNo = shouldGenerate && !isFree ? invNo : '';
    const assignedStatus = isFree ? 'N/A' : (shouldGenerate ? 'UnPaid' : 'N/A');
    const remarkText = action === 'upgrade' ? `Upgraded from ${(m.assignedPlans.find(p=>!['Suspended','Reactivated'].includes(p.name))||{}).name||'None'} to ${planName}` : 'Plan assigned by Admin';

    m.plan = planName.toLowerCase().replace('tk-', '');
    if (m.status === 'suspended') m.status = 'active';
    m.assignedPlans.unshift({ sr: newSr, name: planName, date: fmtDate(startDate) + ' to ' + fmtDate(endDate), remark: remarkText, invoice: assignedInvNo, status: assignedStatus, invoiceType: shouldGenerate && !isFree ? (invType === 'proforma' ? 'Proforma' : 'Final') : '', type: action, admin: 'Admin User', timestamp });
    closeModal();
    showToast(planName + ' ' + (action === 'upgrade' ? 'upgraded' : 'assigned') + ' successfully!', 'success');

  } else if (action === 'extend') {
    const extDays = parseInt(document.getElementById('pm-ext-days')?.value) || 30;
    const actualPlan = m.assignedPlans.find(p => !['Suspended','Reactivated'].includes(p.name)) || {};
    if (!actualPlan.name) { showToast('No active plan to extend', 'error'); return; }
    const planData = (typeof plans !== 'undefined' ? plans : []).find(p => p.name === actualPlan.name) || {};
    const isFree = planData.price === 0;
    const extEnd = new Date(today); extEnd.setDate(extEnd.getDate() + extDays);
    const assignedInvNo = shouldGenerate && !isFree ? invNo : '';
    const assignedStatus = isFree ? 'N/A' : (shouldGenerate ? 'UnPaid' : 'N/A');

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
