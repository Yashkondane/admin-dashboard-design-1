const fs = require('fs');

// 1. Fix equal distances in labels.html
let labels = fs.readFileSync('labels.html', 'utf8');
labels = labels.replace(
  '<th style="width: 150px; padding-left: 24px;">Preview</th>\n              <th>Label Name</th>\n              <th>Color Code</th>\n              <th>Status</th>\n              <th style="text-align: right; padding-right: 24px;">Action</th>',
  '<th style="width: 20%; padding-left: 24px;">Preview</th>\n              <th style="width: 20%;">Label Name</th>\n              <th style="width: 20%;">Color Code</th>\n              <th style="width: 20%;">Status</th>\n              <th style="width: 20%; text-align: right; padding-right: 24px;">Action</th>'
);
fs.writeFileSync('labels.html', labels);

// 2. Fix equal distances in invoice.html
let invoice = fs.readFileSync('invoice.html', 'utf8');
invoice = invoice.replace(
  '<th style="padding-left: 24px;">Invoice ID</th>\n              <th>Client / Member</th>\n              <th>Date Issued</th>\n              <th>Amount</th>\n              <th>Status</th>\n              <th style="text-align: right; padding-right: 24px;">Action</th>',
  '<th style="width: 16.6%; padding-left: 24px;">Invoice ID</th>\n              <th style="width: 16.6%;">Client / Member</th>\n              <th style="width: 16.6%;">Date Issued</th>\n              <th style="width: 16.6%;">Amount</th>\n              <th style="width: 16.6%;">Status</th>\n              <th style="width: 16.6%; text-align: right; padding-right: 24px;">Action</th>'
);
fs.writeFileSync('invoice.html', invoice);

// 3. Fix equal distances in settings-fields.html
let fields = fs.readFileSync('settings-fields.html', 'utf8');
fields = fields.replace(
  '<th style="padding-left: 24px; width: 40px;"></th>\n              <th>Field Name</th>\n              <th>Input Type</th>\n              <th>Status</th>\n              <th>Visibility</th>\n              <th style="text-align: right; padding-right: 32px;">Actions</th>',
  '<th style="padding-left: 24px; width: 40px;"></th>\n              <th style="width: 20%;">Field Name</th>\n              <th style="width: 20%;">Input Type</th>\n              <th style="width: 20%;">Status</th>\n              <th style="width: 20%;">Visibility</th>\n              <th style="width: 20%; text-align: right; padding-right: 24px;">Actions</th>'
);
fs.writeFileSync('settings-fields.html', fields);

// 4. Implement email accordion in script.js
let script = fs.readFileSync('script.js', 'utf8');
// History item 1
script = script.replace(
  /<div style="padding:16px 20px; border-bottom:1px solid var\(--border\);">\s*<div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px;">\s*<div style="font-size:0\.88rem;font-weight:800;color:var\(--text\);">Your plan is about to expire<\/div>\s*<div style="font-size:0\.75rem;color:var\(--text-soft\);font-weight:700;white-space:nowrap;margin-left:12px;">23 Apr 2026, 18:19<\/div>\s*<\/div>\s*<div style="font-size:0\.78rem;color:var\(--blue\);font-weight:700;margin-bottom:6px;display:flex;align-items:center;gap:4px;"><span class="material-icons-round" style="font-size:13px;">person<\/span>by admin@example\.com<\/div>\s*<div style="font-size:0\.82rem;color:var\(--text-mid\);font-weight:600;line-height:1\.6;">This is a reminder that your current plan is expiring soon\. Please renew to continue accessing all features\.<br>— Team Admin<\/div>\s*<\/div>/g,
  `<div style="padding:16px 20px; border-bottom:1px solid var(--border);">
                <div style="cursor:pointer; display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;" onclick="const b=this.nextElementSibling.nextElementSibling; b.style.display=b.style.display==='none'?'block':'none'; const i=this.querySelector('.material-icons-round'); i.textContent=i.textContent==='expand_more'?'expand_less':'expand_more';">
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span class="material-icons-round" style="font-size:18px; color:var(--text-soft); transition:0.2s;">expand_more</span>
                    <div style="font-size:0.88rem;font-weight:800;color:var(--text);">Your plan is about to expire</div>
                  </div>
                  <div style="font-size:0.75rem;color:var(--text-soft);font-weight:700;white-space:nowrap;margin-left:12px;">23 Apr 2026, 18:19</div>
                </div>
                <div style="font-size:0.78rem;color:var(--blue);font-weight:700;margin-bottom:6px;display:flex;align-items:center;gap:4px; padding-left:26px;"><span class="material-icons-round" style="font-size:13px;">person</span>by admin@example.com</div>
                <div style="font-size:0.82rem;color:var(--text-mid);font-weight:600;line-height:1.6; display:none; padding-left:26px; padding-top:8px; border-top:1px dashed var(--border); margin-top:8px;">This is a reminder that your current plan is expiring soon. Please renew to continue accessing all features.<br>— Team Admin</div>
              </div>`
);

// History item 2
script = script.replace(
  /<div style="padding:16px 20px; border-bottom:1px solid var\(--border\);">\s*<div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px;">\s*<div style="font-size:0\.88rem;font-weight:800;color:var\(--text\);">Welcome to the Platform<\/div>\s*<div style="font-size:0\.75rem;color:var\(--text-soft\);font-weight:700;white-space:nowrap;margin-left:12px;">24 Nov 2025, 09:00<\/div>\s*<\/div>\s*<div style="font-size:0\.78rem;color:var\(--blue\);font-weight:700;margin-bottom:6px;display:flex;align-items:center;gap:4px;"><span class="material-icons-round" style="font-size:13px;">person<\/span>by admin@example\.com<\/div>\s*<div style="font-size:0\.82rem;color:var\(--text-mid\);font-weight:600;line-height:1\.6;">Welcome! Your account is now active and ready to use\.<br>— Team Admin<\/div>\s*<\/div>/g,
  `<div style="padding:16px 20px; border-bottom:1px solid var(--border);">
                <div style="cursor:pointer; display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;" onclick="const b=this.nextElementSibling.nextElementSibling; b.style.display=b.style.display==='none'?'block':'none'; const i=this.querySelector('.material-icons-round'); i.textContent=i.textContent==='expand_more'?'expand_less':'expand_more';">
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span class="material-icons-round" style="font-size:18px; color:var(--text-soft); transition:0.2s;">expand_more</span>
                    <div style="font-size:0.88rem;font-weight:800;color:var(--text);">Welcome to the Platform</div>
                  </div>
                  <div style="font-size:0.75rem;color:var(--text-soft);font-weight:700;white-space:nowrap;margin-left:12px;">24 Nov 2025, 09:00</div>
                </div>
                <div style="font-size:0.78rem;color:var(--blue);font-weight:700;margin-bottom:6px;display:flex;align-items:center;gap:4px; padding-left:26px;"><span class="material-icons-round" style="font-size:13px;">person</span>by admin@example.com</div>
                <div style="font-size:0.82rem;color:var(--text-mid);font-weight:600;line-height:1.6; display:none; padding-left:26px; padding-top:8px; border-top:1px dashed var(--border); margin-top:8px;">Welcome! Your account is now active and ready to use.<br>— Team Admin</div>
              </div>`
);

// History item 3
script = script.replace(
  /<div style="padding:16px 20px;">\s*<div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px;">\s*<div style="font-size:0\.88rem;font-weight:800;color:var\(--text\);">Your monthly invoice is ready<\/div>\s*<div style="font-size:0\.75rem;color:var\(--text-soft\);font-weight:700;white-space:nowrap;margin-left:12px;">12 Jul 2026, 14:00<\/div>\s*<\/div>\s*<div style="font-size:0\.78rem;color:var\(--blue\);font-weight:700;margin-bottom:6px;display:flex;align-items:center;gap:4px;"><span class="material-icons-round" style="font-size:13px;">person<\/span>by admin@example\.com<\/div>\s*<div style="font-size:0\.82rem;color:var\(--text-mid\);font-weight:600;line-height:1\.6;">Invoice for Jul 2026 has been generated\. Please review and make payment\.<br>— Team Admin<\/div>\s*<\/div>/g,
  `<div style="padding:16px 20px;">
                <div style="cursor:pointer; display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;" onclick="const b=this.nextElementSibling.nextElementSibling; b.style.display=b.style.display==='none'?'block':'none'; const i=this.querySelector('.material-icons-round'); i.textContent=i.textContent==='expand_more'?'expand_less':'expand_more';">
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span class="material-icons-round" style="font-size:18px; color:var(--text-soft); transition:0.2s;">expand_more</span>
                    <div style="font-size:0.88rem;font-weight:800;color:var(--text);">Your monthly invoice is ready</div>
                  </div>
                  <div style="font-size:0.75rem;color:var(--text-soft);font-weight:700;white-space:nowrap;margin-left:12px;">12 Jul 2026, 14:00</div>
                </div>
                <div style="font-size:0.78rem;color:var(--blue);font-weight:700;margin-bottom:6px;display:flex;align-items:center;gap:4px; padding-left:26px;"><span class="material-icons-round" style="font-size:13px;">person</span>by admin@example.com</div>
                <div style="font-size:0.82rem;color:var(--text-mid);font-weight:600;line-height:1.6; display:none; padding-left:26px; padding-top:8px; border-top:1px dashed var(--border); margin-top:8px;">Invoice for Jul 2026 has been generated. Please review and make payment.<br>— Team Admin</div>
              </div>`
);

const bannerRegex = /<div style="margin-top:24px; border-radius:16px; background: linear-gradient\(135deg, #1e3a5f 0%, #2563eb 100%\); padding:28px 32px; display:flex; justify-content:space-between; align-items:center; position:relative; overflow:hidden;">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;

script = script.replace(
  bannerRegex,
  `<div style="margin-top:24px; border: 1px solid var(--border); border-radius:16px; background: #fff; padding:28px 32px; display:flex; justify-content:space-between; align-items:center;">
          <div>
            <div style="display:flex; align-items:center; gap:12px; margin-bottom:12px;">
              <span style="font-size:0.75rem;font-weight:800;color:var(--text-soft);text-transform:uppercase;letter-spacing:1px;background:#f1f5f9;padding:4px 10px;border-radius:100px;">Active Plan</span>
              <span style="display:inline-flex;align-items:center;gap:6px;background:#f0fdf4;padding:4px 10px;border-radius:100px;">
                <span style="width:6px;height:6px;border-radius:50%;background:#16a34a;display:inline-block;"></span>
                <span style="font-size:0.75rem;font-weight:800;color:#16a34a;">Auto-renew ON</span>
              </span>
            </div>
            <div style="font-size:2.2rem;font-weight:900;color:var(--text);line-height:1;margin-bottom:8px;">\${capitalize(m.plan)} Plan</div>
            <div style="font-size:0.9rem;font-weight:600;color:var(--text-mid);">Renews automatically on Aug 15, 2026</div>
          </div>
          <div style="text-align:right;">
            <div style="font-size:2.8rem;font-weight:900;color:var(--blue);line-height:1;">$99<span style="font-size:1.1rem;color:var(--text-mid);font-weight:700;">/mo</span></div>
          </div>
        </div>`
);

fs.writeFileSync('script.js', script);
console.log('Modifications complete');
