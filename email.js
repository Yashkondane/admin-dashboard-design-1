const categories = [
  { id: 1, name: 'Welcome Emails' },
  { id: 2, name: 'Billing Updates' },
  { id: 3, name: 'System Announcements' }
];

const templates = [
  {
    id: 1, catId: 1,
    name: "Welcome Email",
    subject: "Welcome to the Community!",
    body: "Hi [Name],\n\nWelcome aboard! We are thrilled to have you join our community.\n\nBest regards,\nThe Team"
  },
  {
    id: 2, catId: 2,
    name: "Invoice Reminder",
    subject: "Reminder: Your Upcoming Invoice",
    body: "Hi [Name],\n\nThis is a friendly reminder that your invoice #[Invoice_ID] for the amount of [Amount] is due on [Date].\n\nThank you for your business!"
  },
  {
    id: 3, catId: 3,
    name: "System Update",
    subject: "Important System Maintenance Notice",
    body: "Hello,\n\nWe will be performing scheduled maintenance on our platform on [Date] at [Time].\n\nRegards,\nIT Support"
  }
];

function init() {
  renderCategoryDropdown();
  renderTemplates();
}

function renderCategoryDropdown() {
  const sel = document.getElementById('category-select');
  if (!sel) return;
  sel.innerHTML = '<option value="all">All Categories</option>' + categories.map(c => `
    <option value="${c.id}">${c.name}</option>
  `).join('');
}

function loadTemplatesByCategory(catId) {
  renderTemplates(catId);
}

function renderTemplates(catId = 'all') {
  const container = document.getElementById('template-list');
  const filtered = catId === 'all' ? templates : templates.filter(t => t.catId == catId);
  
  container.innerHTML = filtered.map(t => `
    <div class="template-item" onclick="selectTemplate(${t.id})" style="padding: 16px; border-radius: 12px; border: 1px solid var(--border); margin-bottom: 12px; cursor: pointer; transition: all 0.2s; background: var(--white);">
      <div style="font-weight: 800; color: var(--blue); font-size: 0.95rem; margin-bottom: 4px;">${t.name}</div>
      <div style="font-size: 0.8rem; color: var(--text-mid); font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Subject: ${t.subject}</div>
    </div>
  `).join('');
  
  // Add some hover styles dynamically
  if (!document.getElementById('tpl-styles')) {
    const style = document.createElement('style');
    style.id = 'tpl-styles';
    style.innerHTML = `
      .template-item:hover {
        border-color: var(--blue) !important;
        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.1);
        transform: translateY(-2px);
      }
    `;
    document.head.appendChild(style);
  }
}

function selectTemplate(id) {
  const t = templates.find(x => x.id === id);
  if (!t) return;
  
  document.getElementById('email-subject').value = t.subject;
  document.getElementById('email-body').value = t.body;
  
  showToast('Template loaded', 'success');
}

// Call init on load
document.addEventListener('DOMContentLoaded', init);

function sendEmail() {
  const to = document.getElementById('email-to').value.trim();
  const subject = document.getElementById('email-subject').value.trim();
  const body = document.getElementById('email-body').value.trim();
  
  if (!to || !subject || !body) {
    showToast('Please fill out all fields before sending.', 'error');
    return;
  }
  
  // Simulate sending
  const btn = document.querySelector('button[onclick="sendEmail()"]');
  const originalHtml = btn.innerHTML;
  btn.innerHTML = '<span class="material-icons-round">hourglass_empty</span> Sending...';
  btn.style.opacity = '0.7';
  btn.disabled = true;
  
  setTimeout(() => {
    showToast('Email sent successfully!', 'success');
    btn.innerHTML = originalHtml;
    btn.style.opacity = '1';
    btn.disabled = false;
    
    // Clear form
    document.getElementById('email-to').value = '';
    document.getElementById('email-subject').value = '';
    document.getElementById('email-body').value = '';
  }, 1500);
}

function saveDraft() {
  showToast('Draft saved successfully.', 'success');
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
  renderTemplates();
});
