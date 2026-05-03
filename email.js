const templates = [
  {
    id: 1,
    name: "Welcome Email",
    subject: "Welcome to the Community!",
    body: "Hi [Name],\n\nWelcome aboard! We are thrilled to have you join our community.\n\nHere are a few quick links to get you started:\n- Setup your profile\n- View membership benefits\n\nIf you have any questions, feel free to reply to this email.\n\nBest regards,\nThe Team"
  },
  {
    id: 2,
    name: "Invoice Reminder",
    subject: "Reminder: Your Upcoming Invoice",
    body: "Hi [Name],\n\nThis is a friendly reminder that your invoice #[Invoice_ID] for the amount of [Amount] is due on [Date].\n\nYou can pay your invoice online through your dashboard.\n\nThank you for your business!\n\nBest regards,\nThe Billing Team"
  },
  {
    id: 3,
    name: "System Update",
    subject: "Important System Maintenance Notice",
    body: "Hello,\n\nWe will be performing scheduled maintenance on our platform on [Date] at [Time]. During this window, you may experience brief interruptions in service.\n\nWe appreciate your patience as we work to improve our systems.\n\nRegards,\nIT Support"
  },
  {
    id: 4,
    name: "Event Invitation",
    subject: "You're Invited: Upcoming Webinar",
    body: "Hi [Name],\n\nWe're hosting a special webinar on [Topic] and we'd love for you to join us!\n\nDate: [Date]\nTime: [Time]\n\nClick the link below to RSVP and secure your spot.\n\nHope to see you there!"
  }
];

function renderTemplates() {
  const container = document.getElementById('template-list');
  container.innerHTML = templates.map(t => `
    <div class="template-item" onclick="selectTemplate(${t.id})" style="padding: 16px; border-radius: 12px; border: 1px solid var(--border); margin-bottom: 12px; cursor: pointer; transition: all 0.2s; background: var(--white);">
      <div style="font-weight: 800; color: var(--blue); font-size: 0.95rem; margin-bottom: 4px;">${t.name}</div>
      <div style="font-size: 0.8rem; color: var(--text-mid); font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Subject: ${t.subject}</div>
    </div>
  `).join('');
  
  // Add some hover styles dynamically for ease
  const style = document.createElement('style');
  style.innerHTML = `
    .template-item:hover {
      border-color: var(--blue) !important;
      box-shadow: 0 2px 8px rgba(72, 128, 255, 0.15) !important;
      transform: translateY(-2px);
    }
    .editor-btn {
      width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; border-radius: 6px; border: none; background: transparent; cursor: pointer; color: var(--text-mid); transition: all 0.1s;
    }
    .editor-btn:hover {
      background: #e2e8f0; color: var(--blue);
    }
    .editor-btn .material-icons-round {
      font-size: 18px;
    }
  `;
  document.head.appendChild(style);
}

function selectTemplate(id) {
  const t = templates.find(x => x.id === id);
  if (!t) return;
  
  document.getElementById('email-subject').value = t.subject;
  document.getElementById('email-body').value = t.body;
  
  showToast('Template loaded', 'success');
}

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
