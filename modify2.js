const fs = require('fs');

let script = fs.readFileSync('script.js', 'utf8');

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
console.log('Fixed banner replacement.');
