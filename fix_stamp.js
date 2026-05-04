const fs = require('fs');
let code = fs.readFileSync('script.js', 'utf8');

const oldTopRow = `      <!-- Top Row: Stats & Action -->
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
      </div>`;

const newTopRow = `      <!-- Condensed Top Row: Stats, Badges & Action -->
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

const oldCompactBadge = `      <!-- Compact Badge Display -->
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

if(code.indexOf(oldTopRow) !== -1) {
    code = code.replace(oldTopRow, newTopRow);
    code = code.replace(oldCompactBadge, ''); // remove the extra badge display
    console.log("Successfully replaced Stamp UI!");
} else {
    console.log("oldTopRow not found");
}

fs.writeFileSync('script.js', code);
