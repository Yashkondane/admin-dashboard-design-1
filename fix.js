const fs = require('fs');

let content = fs.readFileSync('e:\\admin dashboard\\script.js', 'utf8');

// Replace renderTable function
content = content.replace(/function renderTable\(\) \{[\s\S]*?updateSortIcons\(\);\s*\}/, `function renderTable() {
  const filtered = getFiltered();
  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const pageItems = filtered.slice(start, end);

  const tbodyEl = document.getElementById('members-tbody');
  if (!tbodyEl) return;

  if (filtered.length === 0) {
    tbodyEl.innerHTML = '<tr><td colspan="7" style="text-align:center;padding:60px;color:var(--text-soft);">No members found.</td></tr>';
    return;
  }

  tbodyEl.innerHTML = pageItems.map((m, i) => {
    const hasEmailCheck = m.status === 'active' || m.status === 'suspended' || m.id % 2 !== 0;
    const hasMobileCheck = m.status === 'active' || m.id % 3 !== 0;
    
    const emailIcon = hasEmailCheck ? 
      '<span class="material-icons-round" style="color: #10b981; font-size: 14px;">check_circle_outline</span>' : 
      '<span class="material-icons-round" style="color: #ef4444; font-size: 14px;">highlight_off</span>';
      
    const mobileIcon = hasMobileCheck ? 
      '<span class="material-icons-round" style="color: #10b981; font-size: 14px;">check_circle_outline</span>' : 
      '<span class="material-icons-round" style="color: #ef4444; font-size: 14px;">highlight_off</span>';

    let statusBg = '#f1f5f9'; let statusColor = '#64748b'; let statusText = m.status;
    if (m.status === 'active') { statusBg = '#dcfce7'; statusColor = '#16a34a'; statusText = 'Active'; }
    else if (m.status === 'suspended') { statusBg = '#ffedd5'; statusColor = '#ea580c'; statusText = 'Suspended'; }
    else if (m.status === 'pending') { statusBg = '#dbeafe'; statusColor = '#3b82f6'; statusText = 'Pending'; }
    else if (m.status === 'incomplete') { statusBg = '#f1f5f9'; statusColor = '#94a3b8'; statusText = 'Incomplete'; }
    else if (m.status === 'inactive' || m.status === 'expire') { statusBg = '#f1f5f9'; statusColor = '#94a3b8'; statusText = 'Inactive'; }

    return \`
    <tr style="animation-delay: \${i * 0.03}s">
      <td onclick="openProfile(\${m.id})" style="padding-left: 24px;">
        <div style="display: flex; align-items: center; gap: 14px;">
          <img class="member-avatar" src="\${m.photo}" alt="\${m.member}" onerror="this.src='https://ui-avatars.com/api/?name=\${encodeURIComponent(m.member)}&background=eef3ff&color=4880ff'" style="width: 36px; height: 36px; border-radius: 50%; object-fit: cover;">
          <div style="display: flex; flex-direction: column;">
            <span style="font-weight: 800; color: var(--text); font-size: 0.85rem;">\${m.member}</span>
            <span style="font-size: 0.75rem; color: var(--text-soft); font-weight: 600; margin-top:2px;">\${m.company}</span>
          </div>
        </div>
      </td>
      <td onclick="openProfile(\${m.id})">
        <span style="color: var(--text-mid); font-weight: 600; font-size: 0.82rem;">\${m.location}</span>
      </td>
      <td onclick="openProfile(\${m.id})">
        <div style="display:flex; align-items:center; gap:6px;">
          <span style="color: var(--text-mid); font-weight: 600; font-size:0.82rem;">\${m.email}</span>
          \${emailIcon}
        </div>
      </td>
      <td onclick="openProfile(\${m.id})">
        <div style="display:flex; align-items:center; gap:6px;">
          <span style="color: var(--text-mid); font-weight: 600; font-size:0.82rem;">\${m.mobile}</span>
          \${mobileIcon}
        </div>
      </td>
      <td onclick="openProfile(\${m.id})">
        <span style="color: var(--text-mid); font-weight: 600; font-size: 0.82rem;">\${m.plan === 'nil' ? 'Free' : capitalize(m.plan)}</span>
      </td>
      <td onclick="openProfile(\${m.id})">
        <div style="display:inline-flex; align-items:center; justify-content:center; padding:4px 10px; border-radius:6px; background:\${statusBg}; color:\${statusColor}; font-size:0.75rem; font-weight:700;">
          \${capitalize(statusText)}
        </div>
      </td>
      <td onclick="openProfile(\${m.id})" style="padding-right: 24px;">
        <span style="color: var(--text-mid); font-weight: 600; font-size: 0.82rem;">\${m.date}</span>
      </td>
    </tr>
    \`;
  }).join('');

  renderPagination(filtered.length);
  updateSortIcons();
}`);

fs.writeFileSync('e:\\admin dashboard\\script.js', content, 'utf8');
console.log('done');
