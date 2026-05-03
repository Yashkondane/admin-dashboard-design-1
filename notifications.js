const notifications = [
  {
    id: 1,
    title: "Platform Maintenance Complete",
    message: "The scheduled maintenance is now complete. All systems are fully operational.",
    audience: "All Members",
    type: "success",
    date: "Today, 10:30 AM"
  },
  {
    id: 2,
    title: "New Feature: Custom Labels",
    message: "You can now create and manage custom plan labels directly from your dashboard!",
    audience: "Business & Enterprise Plans",
    type: "info",
    date: "Yesterday, 2:15 PM"
  },
  {
    id: 3,
    title: "Payment Processing Delay",
    message: "We are currently experiencing slight delays with our payment gateway partner. We are investigating.",
    audience: "All Members",
    type: "warning",
    date: "Oct 24, 2023"
  }
];

function renderFeed(data = notifications) {
  const container = document.getElementById('notification-feed');
  
  if (data.length === 0) {
    container.innerHTML = '<div style="text-align: center; padding: 40px; color: var(--text-soft); font-weight: 600;">No broadcasts found.</div>';
    return;
  }
  
  container.innerHTML = data.map(n => {
    let icon = 'notifications';
    let color = 'var(--blue)';
    let bg = '#eff6ff';
    
    if (n.type === 'success') { icon = 'check_circle'; color = '#10b981'; bg = '#ecfdf5'; }
    if (n.type === 'warning') { icon = 'warning'; color = '#f59e0b'; bg = '#fffbeb'; }
    
    return `
      <div style="display: flex; gap: 16px; padding: 20px; border: 1px solid var(--border); border-radius: 12px; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--blue)'" onmouseout="this.style.borderColor='var(--border)'">
        <div style="width: 48px; height: 48px; border-radius: 50%; background: ${bg}; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
          <span class="material-icons-round" style="color: ${color}; font-size: 24px;">${icon}</span>
        </div>
        <div style="flex: 1;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px;">
            <h3 style="margin: 0; font-size: 1.05rem; font-weight: 800; color: var(--text);">${n.title}</h3>
            <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-soft);">${n.date}</span>
          </div>
          <p style="margin: 0 0 12px 0; font-size: 0.95rem; color: var(--text-mid); line-height: 1.5;">${n.message}</p>
          <div style="display: inline-flex; align-items: center; gap: 6px; padding: 4px 10px; background: #f1f5f9; border-radius: 12px; font-size: 0.75rem; font-weight: 700; color: var(--text-mid);">
            <span class="material-icons-round" style="font-size: 14px;">groups</span> Sent to: ${n.audience}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function openCreateNotificationModal() {
  const modal = document.getElementById('modal-container');
  const content = document.getElementById('modal-content');
  
  content.innerHTML = `
    <div class="modal-header">
      <h3>Blast Notification</h3>
      <button class="modal-close" onclick="closeModal()"><span class="material-icons-round">close</span></button>
    </div>
    <div class="modal-body">
      <div class="modal-grid-1">
        <div>
          <label class="modal-label">Notification Title</label>
          <input class="modal-input" type="text" id="notif-title" placeholder="e.g. Server Maintenance Notice">
        </div>
        <div>
          <label class="modal-label">Message</label>
          <textarea class="modal-input" id="notif-message" style="height: 100px; resize: none; font-family: inherit;" placeholder="Keep it short and impactful..."></textarea>
        </div>
        <div>
          <label class="modal-label">Target Audience</label>
          <select class="modal-input" id="notif-audience">
            <option value="All Members">All Members</option>
            <option value="Starter Plan Users">Starter Plan Users</option>
            <option value="Business & Enterprise Plans">Business & Enterprise Plans</option>
            <option value="Inactive Members">Inactive Members</option>
          </select>
        </div>
        <div>
          <label class="modal-label">Type (Icon)</label>
          <select class="modal-input" id="notif-type">
            <option value="info">Info (Blue)</option>
            <option value="success">Success (Green)</option>
            <option value="warning">Warning (Yellow)</option>
          </select>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn-primary" onclick="sendNotification()"><span class="material-icons-round">campaign</span> Send Now</button>
    </div>
  `;
  
  modal.classList.remove('hidden');
}

function sendNotification() {
  const title = document.getElementById('notif-title').value.trim();
  const message = document.getElementById('notif-message').value.trim();
  const audience = document.getElementById('notif-audience').value;
  const type = document.getElementById('notif-type').value;
  
  if (!title || !message) {
    showToast('Title and message are required', 'error');
    return;
  }
  
  const now = new Date();
  let hours = now.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; 
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const timeString = `Today, ${hours}:${minutes} ${ampm}`;
  
  notifications.unshift({
    id: Date.now(),
    title, message, audience, type, date: timeString
  });
  
  closeModal();
  renderFeed();
  showToast('Notification broadcasted successfully!', 'success');
}

function closeModal() {
  document.getElementById('modal-container').classList.add('hidden');
  document.getElementById('modal-content').innerHTML = '';
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  
  let icon = 'check_circle';
  let color = '#10b981';
  if (type === 'error') {
    icon = 'error';
    color = '#ef4444';
  } else if (type === 'warning') {
    icon = 'warning';
    color = '#f59e0b';
  }

  toast.innerHTML = `
    <span class="material-icons-round" style="color: ${color}; font-size: 20px;">${icon}</span>
    <span style="font-size: 0.9rem; font-weight: 600; color: var(--text);">${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function toggleNavGroup(btn) {
  const group = btn.closest('.nav-group');
  const sub = group.querySelector('.nav-sub');
  const isOpen = group.classList.contains('open');

  document.querySelectorAll('.nav-group.open').forEach(g => {
    if (g !== group) {
      g.classList.remove('open');
      g.querySelector('.nav-sub').style.height = '0px';
    }
  });

  if (isOpen) {
    group.classList.remove('open');
    sub.style.height = '0px';
  } else {
    group.classList.add('open');
    sub.style.height = sub.scrollHeight + 'px';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderFeed();
  
  const searchInput = document.getElementById('top-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      const filtered = notifications.filter(n => 
        n.title.toLowerCase().includes(term) || n.message.toLowerCase().includes(term)
      );
      renderFeed(filtered);
    });
  }
});
