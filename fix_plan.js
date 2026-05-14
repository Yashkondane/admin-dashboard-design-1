const fs = require('fs');
let code = fs.readFileSync('script.js', 'utf8');

// 1. Change the button on the plan tab to open the modal
code = code.replace(
  /<button class="btn-primary" onclick="showToast\('Manage Billing clicked', 'success'\)">\s*<span class="material-icons-round">payment<\/span> Manage Billing\s*<\/button>/g,
  `<button class="btn-primary" onclick="openEditModal('plan', \${m.id})">
            <span class="material-icons-round">settings</span> Manage Plans
          </button>`
);

// 2. Add the 'plan' modal logic inside openEditModal
const planModalLogic = `
  } else if (type === 'plan') {
    content.className = 'modal-content modal-wide';
    html = \`
      <div class="modal-header" style="border-bottom: 1px solid var(--border); padding-bottom: 16px; margin-bottom: 24px;">
        <div style="display:flex; align-items:center; gap:12px;">
          <div style="width:40px; height:40px; border-radius:10px; background:var(--blue-light); color:var(--blue); display:grid; place-items:center;">
            <span class="material-icons-round">assignment</span>
          </div>
          <h3 style="margin:0;">Manage Plans</h3>
        </div>
        <button class="modal-close" onclick="closeModal()"><span class="material-icons-round">close</span></button>
      </div>
      <div class="modal-body" style="padding: 0 32px 32px 32px;">
        <div style="display:grid; grid-template-columns: 200px 1fr; gap: 24px; align-items:center; margin-bottom: 16px;">
          <label style="font-size:0.9rem; font-weight:700; color:var(--text); margin:0;">Plan Name</label>
          <input class="modal-input" type="text" placeholder="Enter plan name" style="background:#fff; border:1px solid var(--border);" value="\${m.plan ? capitalize(m.plan) : ''}">
        </div>

        <div style="display:grid; grid-template-columns: 200px 1fr; gap: 24px; align-items:center; margin-bottom: 16px;">
          <label style="font-size:0.9rem; font-weight:700; color:var(--text); margin:0;">Plan Validity</label>
          <select class="modal-input" style="background:#fff; border:1px solid var(--border);">
            <option value="1">1 Month</option>
            <option value="3">3 Months</option>
            <option value="6">6 Months</option>
            <option value="12">1 Year</option>
          </select>
        </div>

        <div style="display:grid; grid-template-columns: 200px 1fr; gap: 24px; align-items:center; margin-bottom: 16px;">
          <label style="font-size:0.9rem; font-weight:700; color:var(--text); margin:0;">Plan Rate</label>
          <input class="modal-input" type="text" placeholder="Enter Plan Rate" style="background:#fff; border:1px solid var(--border);" value="99.00">
        </div>

        <div style="display:grid; grid-template-columns: 200px 1fr; gap: 24px; align-items:center; margin-bottom: 16px;">
          <label style="font-size:0.9rem; font-weight:700; color:var(--text); margin:0;">Daily Broadcast</label>
          <input class="modal-input" type="text" placeholder="Enter Daily Broadcast" style="background:#fff; border:1px solid var(--border);">
        </div>

        <div style="display:grid; grid-template-columns: 200px 1fr; gap: 24px; align-items:center; margin-bottom: 32px;">
          <label style="font-size:0.9rem; font-weight:700; color:var(--text); margin:0;">Daily Direct Email</label>
          <input class="modal-input" type="email" placeholder="Enter E-mail" style="background:#fff; border:1px solid var(--border);">
        </div>

        <!-- Checkboxes -->
        <div style="display:flex; flex-direction:column; gap:16px;">
          <div style="display:flex; align-items:center; gap: 24px;">
            <label style="width:200px; font-size:0.9rem; font-weight:700; color:var(--text); margin:0;">Send to all</label>
            <input type="checkbox" style="width:20px; height:20px; accent-color:var(--blue); border-radius:4px; border:1px solid #cbd5e1; cursor:pointer;" checked>
          </div>

          <div style="display:flex; align-items:center; gap: 24px;">
            <label style="width:200px; font-size:0.9rem; font-weight:700; color:var(--text); margin:0;">State</label>
            <input type="checkbox" style="width:20px; height:20px; accent-color:var(--blue); border-radius:4px; border:1px solid #cbd5e1; cursor:pointer;" checked>
          </div>

          <div style="display:flex; align-items:center; gap: 24px;">
            <label style="width:200px; font-size:0.9rem; font-weight:700; color:var(--text); margin:0;">City</label>
            <input type="checkbox" style="width:20px; height:20px; accent-color:var(--blue); border-radius:4px; border:1px solid #cbd5e1; cursor:pointer;" checked>
          </div>

          <div style="display:flex; flex-direction:column; margin-top:8px;">
            <div style="display:flex; align-items:center; gap: 24px;">
              <label style="width:200px; font-size:0.9rem; font-weight:700; color:var(--text); margin:0;">Add Contacts</label>
              <input type="checkbox" style="width:20px; height:20px; accent-color:var(--blue); border-radius:4px; border:1px solid #cbd5e1; cursor:pointer;" checked>
            </div>
            <div style="margin-left:224px; font-size:0.8rem; font-weight:600; color:var(--text-soft); margin-top:4px;">If enable, show "Add Contact" button to user in profile</div>
          </div>

          <div style="display:flex; flex-direction:column; margin-top:8px;">
            <div style="display:flex; align-items:center; gap: 24px;">
              <label style="width:200px; font-size:0.9rem; font-weight:700; color:var(--text); margin:0;">Phone</label>
              <input type="checkbox" style="width:20px; height:20px; accent-color:var(--blue); border-radius:4px; border:1px solid #cbd5e1; cursor:pointer;" checked>
            </div>
            <div style="margin-left:224px; font-size:0.8rem; font-weight:600; color:var(--text-soft); margin-top:4px;">If enable, User can see show/hide switch in his profile phone area.</div>
          </div>

          <div style="display:flex; flex-direction:column; margin-top:8px;">
            <div style="display:flex; align-items:center; gap: 24px;">
              <label style="width:200px; font-size:0.9rem; font-weight:700; color:var(--text); margin:0;">Address Button</label>
              <input type="checkbox" style="width:20px; height:20px; accent-color:var(--blue); border-radius:4px; border:1px solid #cbd5e1; cursor:pointer;" checked>
            </div>
            <div style="margin-left:224px; font-size:0.8rem; font-weight:600; color:var(--text-soft); margin-top:4px;">If enable, User can add more address</div>
          </div>
        </div>

      </div>
      <div class="modal-footer" style="padding:24px 32px; background:#f8fafc; border-top:1px solid var(--border); justify-content:flex-end; gap:12px;">
        <button class="btn-outline" style="background:#64748b; color:#fff; border:none;" onclick="closeModal()">Close</button>
        <button class="btn-primary" style="background:#4880FF; border-radius:6px; padding: 12px 24px; font-weight:700;" onclick="showToast('Plan Updated!', 'success'); closeModal();">Save</button>
      </div>
    \`;
  }
`;

// Insert the plan modal logic right before the end of the `if (type === ...)` chain in `openEditModal`
const targetPoint = "} else if (type === 'address') {";
if (code.indexOf(targetPoint) !== -1) {
  code = code.replace(targetPoint, planModalLogic + "\n  " + targetPoint);
  fs.writeFileSync('script.js', code);
  console.log("Successfully injected plan modal!");
} else {
  console.log("Could not find address block to inject plan modal.");
}
