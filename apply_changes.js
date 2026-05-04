const fs = require('fs');
let code = fs.readFileSync('script.js', 'utf8');

// 1. Condense global profile headers and stats row
code = code.replace(
  /<div class="profile-header-name" style="font-size: 2rem; font-weight: 900; color: var\(--text\); letter-spacing: -0\.8px;">\$\{m\.company\}<\/div>/g,
  `<div class="profile-header-name" style="font-size: 1.5rem; font-weight: 900; color: var(--text); letter-spacing: -0.5px;">\${m.company}</div>`
);

code = code.replace(
  /<div class="profile-header-card">\s*<div class="profile-header-top">/g,
  `<div class="profile-header-card" style="padding: 16px 24px; margin-bottom: 16px;">
      <div class="profile-header-top">`
);

code = code.replace(
  /<div class="profile-stats-row">/g,
  `<div class="profile-stats-row" style="margin-top: 12px; padding-top: 12px; display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px;">`
);


// 2. Redesign Stamp Tab
const stampTabOld = `
    return \`
      <!-- Top Row: Stats & Action -->
      <div style="display: flex; gap: 20px; margin-bottom: 24px; align-items: stretch;">
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; flex: 1;">
          <div class="content-card" style="margin-bottom:0; padding:20px; display:flex; align-items:center; gap:20px; border:1px solid var(--border);">
            <div style="width:52px; height:52px; border-radius:12px; background:var(--blue-light); color:var(--blue); display:grid; place-items:center; flex-shrink:0;">
              <span class="material-icons-round" style="font-size:26px;">verified</span>
            </div>
            <div>
              <div style="font-size:0.7rem; color:var(--text-soft); font-weight:800; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:4px;">Stamps Applied</div>
              <div style="font-size:1.6rem; font-weight:900; color:var(--text); line-height:1;">\${stamps.length}</div>
            </div>
          </div>
          <div class="content-card" style="margin-bottom:0; padding:20px; display:flex; align-items:center; gap:20px; border:1px solid var(--border);">
            <div style="width:52px; height:52px; border-radius:12px; background:#f0fdf4; color:#16a34a; display:grid; place-items:center; flex-shrink:0;">
              <span class="material-icons-round" style="font-size:26px;">calendar_today</span>
            </div>
            <div>
              <div style="font-size:0.7rem; color:var(--text-soft); font-weight:800; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:4px;">Last Verified</div>
              <div style="font-size:1.1rem; font-weight:900; color:var(--text);">\${stamps.length ? stamps[0].date.split(' ')[0] : 'Never'}</div>
            </div>
          </div>
        </div>
        <div class="content-card" style="margin-bottom:0; padding:20px; display:flex; align-items:center; justify-content:center; border:1.5px dashed var(--blue); background:var(--blue-light); width:240px; border-radius:16px;">
           <button class="btn-primary" onclick="openStampModal(\${m.id})" style="width:100%; height:100%; padding: 0; font-size: 0.95rem; background:var(--blue); font-weight:900; box-shadow:0 6px 16px rgba(59,130,246,0.25); display:flex; align-items:center; justify-content:center; gap:8px;">
            <span class="material-icons-round" style="font-size:20px;">add_circle</span> Add Stamp
          </button>
        </div>
      </div>

      <!-- Compact Badge Display -->
      <div class="content-card" style="margin-bottom:24px; padding:24px;">
        <div style="display:flex; align-items:center; gap:12px; margin-bottom:20px;">
          <div style="width:8px; height:20px; background:var(--blue); border-radius:4px;"></div>
          <h3 style="margin:0; font-size:1.1rem; font-weight:900; color:var(--text);">Current Verification Status</h3>
        </div>
        <div style="display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; padding: 20px; background: #f8fafc; border-radius: 20px; border: 1px dashed var(--border);">
          \${badgeConfig.map(b => {
            const isActive = stamps.some(s => s.badges && s.badges.includes(b.key));
            return \`
              <div title="\${b.label}: \${isActive ? 'Verified' : 'Pending'}" style="width:50px; height:50px; border-radius:50%; background:\${isActive ? b.bg : '#fff'}; color:\${isActive ? b.color : '#cbd5e1'}; display:grid; place-items:center; border:2.5px solid \${isActive ? b.color : 'var(--border)'}; transition: all 0.3s; position:relative; box-shadow:\${isActive ? '0 4px 12px '+b.color+'20' : 'none'};">
                <span class="material-icons-round" style="font-size:24px;">\${b.icon}</span>
                \${isActive ? \`
                  <div style="position:absolute; bottom:-4px; right:-4px; width:20px; height:20px; border-radius:50%; background:#16a34a; color:#fff; display:grid; place-items:center; border:2px solid #fff; box-shadow:0 2px 4px rgba(0,0,0,0.1);">
                    <span class="material-icons-round" style="font-size:12px;">check</span>
                  </div>
                \` : ''}
              </div>
            \`;
          }).join('')}
        </div>
      </div>`;

const stampTabNew = `
    return \`
      <!-- Condensed Top Row: Stats, Badges & Action -->
      <div style="display: flex; gap: 16px; margin-bottom: 16px; align-items: stretch;">
        <div class="content-card" style="margin-bottom:0; padding:16px; display:flex; align-items:center; gap:16px; border:1px solid var(--border); flex: 1;">
          <div style="width:40px; height:40px; border-radius:10px; background:var(--blue-light); color:var(--blue); display:grid; place-items:center; flex-shrink:0;">
            <span class="material-icons-round" style="font-size:20px;">verified</span>
          </div>
          <div>
            <div style="font-size:0.65rem; color:var(--text-soft); font-weight:800; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:2px;">Stamps Applied</div>
            <div style="font-size:1.3rem; font-weight:900; color:var(--text); line-height:1;">\${stamps.length}</div>
          </div>
        </div>

        <div class="content-card" style="margin-bottom:0; padding:16px; display:flex; align-items:center; gap:16px; border:1px solid var(--border); flex: 1;">
          <div style="width:40px; height:40px; border-radius:10px; background:#f0fdf4; color:#16a34a; display:grid; place-items:center; flex-shrink:0;">
            <span class="material-icons-round" style="font-size:20px;">calendar_today</span>
          </div>
          <div>
            <div style="font-size:0.65rem; color:var(--text-soft); font-weight:800; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:2px;">Last Verified</div>
            <div style="font-size:1rem; font-weight:900; color:var(--text);">\${stamps.length ? stamps[0].date.split(' ')[0] : 'Never'}</div>
          </div>
        </div>

        <div class="content-card" style="margin-bottom:0; padding:16px; display:flex; flex-direction:column; justify-content:center; align-items:center; gap:8px; border:1px solid var(--border); flex: 1.5; background: #f8fafc;">
          <div style="font-size:0.65rem; color:var(--text-soft); font-weight:800; text-transform:uppercase; letter-spacing:0.5px;">Current Status</div>
          <div style="display: flex; gap: 8px;">
            \${badgeConfig.map(b => {
              const isActive = stamps.some(s => s.badges && s.badges.includes(b.key));
              return \`
                <div title="\${b.label}: \${isActive ? 'Verified' : 'Pending'}" style="width:32px; height:32px; border-radius:50%; background:\${isActive ? b.bg : '#fff'}; color:\${isActive ? b.color : '#cbd5e1'}; display:grid; place-items:center; border:2px solid \${isActive ? b.color : 'var(--border)'}; position:relative; box-shadow:\${isActive ? '0 2px 8px '+b.color+'20' : 'none'};">
                  <span class="material-icons-round" style="font-size:16px;">\${b.icon}</span>
                  \${isActive ? \`
                    <div style="position:absolute; bottom:-2px; right:-2px; width:12px; height:12px; border-radius:50%; background:#16a34a; color:#fff; display:grid; place-items:center; border:1px solid #fff;">
                      <span class="material-icons-round" style="font-size:8px;">check</span>
                    </div>
                  \` : ''}
                </div>
              \`;
            }).join('')}
          </div>
        </div>

        <div class="content-card" style="margin-bottom:0; padding:12px; display:flex; align-items:center; justify-content:center; border:1.5px dashed var(--blue); background:var(--blue-light); width:180px; border-radius:12px;">
           <button class="btn-primary" onclick="openStampModal(\${m.id})" style="width:100%; height:100%; padding: 0; font-size: 0.9rem; background:var(--blue); font-weight:900; box-shadow:0 4px 12px rgba(59,130,246,0.25); display:flex; align-items:center; justify-content:center; gap:6px;">
            <span class="material-icons-round" style="font-size:18px;">add_circle</span> Add Stamp
          </button>
        </div>
      </div>`;

if(code.includes(stampTabOld)) {
  code = code.replace(stampTabOld, stampTabNew);
} else {
  console.error("stampTabOld not found! Check string matching.");
}

// Condense history table padding
code = code.replace(/<th style="padding: 20px 24px;/g, '<th style="padding: 12px 16px;');
code = code.replace(/<td style="padding: 18px 24px;/g, '<td style="padding: 12px 16px;');

fs.writeFileSync('script.js', code);
console.log('Profile redesign applied.');
