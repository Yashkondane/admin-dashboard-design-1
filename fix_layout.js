const fs = require('fs');
let content = fs.readFileSync('e:\\admin dashboard\\script.js', 'utf8');

// 1. Update Profile Header Buttons
content = content.replace(
  /<span class="status-badge \$\{m\.status\}">\$\{capitalize\(m\.status\)\}<\/span>[\s\S]*?<button class="btn-outline" style="border-color:#fecaca; color:#ef4444; padding:6px 16px; font-size:0.85rem;"/,
  `\`
                  <div style="display:inline-flex; align-items:center; justify-content:center; padding:4px 12px; border-radius:6px; background:\${m.status === 'active' ? '#dcfce7' : (['suspended'].includes(m.status) ? '#ffedd5' : (m.status === 'pending' ? '#dbeafe' : '#f1f5f9'))}; color:\${m.status === 'active' ? '#16a34a' : (['suspended'].includes(m.status) ? '#ea580c' : (m.status === 'pending' ? '#3b82f6' : '#64748b'))}; font-size:0.8rem; font-weight:800;">
                    \${capitalize(m.status)}
                  </div>
                \`;
                })()}
              </div>
            </div>
            <button class="btn-outline" style="border-color:#fecaca; color:#ef4444; padding:6px 12px; font-size:0.8rem; height: 32px; display:inline-flex; align-items:center; gap:6px;"`
);

// We need a more robust way to replace the badges grid in the Add Stamp modal.
// The code around line 1733:
// <div style="display:flex; flex-direction:column; gap:10px;">
//   \${badgeConfig.map(b => \`
//     <label class="badge-select-item" style="display:flex; align-items:center; gap:14px; padding:12px 16px; border:1px solid var(--border); border-radius:12px; cursor:pointer; transition:all 0.2s;">
//       <input type="checkbox" id="badge-\${b.key}" value="\${b.key}" style="width:18px; height:18px; accent-color:var(--blue); cursor:pointer;">
//       <div style="width:36px; height:36px; border-radius:50%; background:\${b.bg}; color:\${b.color}; display:grid; place-items:center; flex-shrink:0;">
//         <span class="material-icons-round" style="font-size:20px;">\${b.icon}</span>
//       </div>
//       <div>
//         <div style="font-size:0.85rem; font-weight:800; color:var(--text);">\${b.label}</div>
//         <div style="font-size:0.75rem; color:var(--text-soft); font-weight:600;">\${b.desc}</div>
//       </div>
//     </label>
//   \`).join('')}
// </div>

content = content.replace(
  /<div style="display:flex; flex-direction:column; gap:10px;">\s*\$\{badgeConfig\.map\(b => `\s*<label class="badge-select-item" style="display:flex; align-items:center; gap:14px; padding:12px 16px;/g,
  `<div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
              \${badgeConfig.map(b => \`
                <label class="badge-select-item" style="display:flex; align-items:center; gap:10px; padding:8px 12px;`
);

content = content.replace(
  /<div style="width:36px; height:36px; border-radius:50%; background:\$\{b\.bg\}; color:\$\{b\.color\}; display:grid; place-items:center; flex-shrink:0;">\s*<span class="material-icons-round" style="font-size:20px;">\$\{b\.icon\}<\/span>\s*<\/div>/g,
  `<div style="width:30px; height:30px; border-radius:50%; background:\${b.bg}; color:\${b.color}; display:grid; place-items:center; flex-shrink:0;">
                    <span class="material-icons-round" style="font-size:16px;">\${b.icon}</span>
                  </div>`
);

content = content.replace(
  /<div style="font-size:0\.85rem; font-weight:800; color:var\(--text\);">\$\{b\.label\}<\/div>\s*<div style="font-size:0\.75rem; color:var\(--text-soft\); font-weight:600;">\$\{b\.desc\}<\/div>/g,
  `<div style="font-size:0.8rem; font-weight:800; color:var(--text); line-height:1.2;">\${b.label}</div>
                    <div style="font-size:0.7rem; color:var(--text-soft); font-weight:600; line-height:1.2;">\${b.desc}</div>`
);

fs.writeFileSync('e:\\admin dashboard\\script.js', content, 'utf8');
console.log('done');
