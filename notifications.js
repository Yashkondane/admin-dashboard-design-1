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

var currentFilter = 'all';

const typeConfig = {
  success: { icon: 'check_circle', color: '#10b981', bg: '#ecfdf5', label: 'Success' },
  info:    { icon: 'info',         color: '#2563eb', bg: '#eff6ff', label: 'Info' },
  warning: { icon: 'warning',      color: '#f59e0b', bg: '#fffbeb', label: 'Warning' }
};

function renderTable(data = notifications) {
  const tbody = document.getElementById('notifications-tbody');
  if (!tbody) return;

  if (data.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" style="text-align: center; padding: 40px; color: var(--text-soft); font-weight: 600;">No broadcasts found.</td></tr>';
    return;
  }

  tbody.innerHTML = data.map(n => {
    const cfg = typeConfig[n.type] || typeConfig.info;
    return `
      <tr>
        <td>
          <div style="width: 36px; height: 36px; border-radius: 50%; background: ${cfg.bg}; display: flex; align-items: center; justify-content: center;">
            <span class="material-icons-round" style="color: ${cfg.color}; font-size: 18px;">${cfg.icon}</span>
          </div>
        </td>
        <td>
          <span style="font-weight: 800; color: var(--text); font-size: 0.9rem;">${n.title}</span>
        </td>
        <td style="max-width: 300px;">
          <span style="font-weight: 600; color: var(--text-mid); font-size: 0.85rem; white-space: normal; line-height: 1.4;">${n.message}</span>
        </td>
        <td>
          <span class="bubble-tag">${n.audience}</span>
        </td>
        <td style="font-weight: 600; color: var(--text-soft); font-size: 0.85rem;">${n.date}</td>
      </tr>
    `;
  }).join('');
}

function setNotifFilter(filterType) {
  currentFilter = filterType;
  document.querySelectorAll('.tab-item').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.filter === filterType) btn.classList.add('active');
  });
  applyFilters();
}

function applyFilters() {
  const searchTerm = (document.getElementById('top-search-input')?.value || '').toLowerCase();
  let filtered = notifications.filter(n => {
    const matchesSearch = n.title.toLowerCase().includes(searchTerm) || n.message.toLowerCase().includes(searchTerm);
    const matchesFilter = currentFilter === 'all' || n.type === currentFilter;
    return matchesSearch && matchesFilter;
  });
  renderTable(filtered);
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
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>
          <label class="modal-label">Notification Title</label>
          <input class="modal-input" type="text" id="notif-title" placeholder="e.g. Server Maintenance Notice">
        </div>
        <div>
          <label class="modal-label">Message</label>
          <textarea class="modal-input" id="notif-message" style="height: 90px; resize: none;" placeholder="Keep it short and impactful..."></textarea>
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
          <label class="modal-label">Type</label>
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
  if (!title || !message) { showToast('Title and message are required', 'error'); return; }
  const now = new Date();
  let hours = now.getHours(); const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  const minutes = now.getMinutes().toString().padStart(2, '0');
  notifications.unshift({ id: Date.now(), title, message, audience, type, date: `Today, ${hours}:${minutes} ${ampm}` });
  closeModal(); applyFilters();
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
  const icons = { success: 'check_circle', error: 'error', warning: 'warning', info: 'info' };
  const colors = { success: '#10b981', error: '#ef4444', warning: '#f59e0b', info: 'var(--blue)' };
  toast.innerHTML = `
    <span class="material-icons-round" style="color: ${colors[type]}; font-size: 20px;">${icons[type]}</span>
    <span style="font-size: 0.9rem; font-weight: 600; color: var(--text);">${message}</span>
  `;
  container.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 300); }, 3000);
}

function toggleNavGroup(btn) {
  const group = btn.closest('.nav-group');
  const sub = group.querySelector('.nav-sub');
  const isOpen = group.classList.contains('open');
  document.querySelectorAll('.nav-group.open').forEach(g => {
    if (g !== group) { g.classList.remove('open'); g.querySelector('.nav-sub').style.height = '0px'; }
  });
  if (isOpen) { group.classList.remove('open'); sub.style.height = '0px'; }
  else { group.classList.add('open'); sub.style.height = sub.scrollHeight + 'px'; }
}

document.addEventListener('DOMContentLoaded', () => {
  renderTable();
  const searchInput = document.getElementById('top-search-input');
  if (searchInput) searchInput.addEventListener('input', applyFilters);
});
