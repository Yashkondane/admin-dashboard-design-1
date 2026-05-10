// Mock Data
let categories = [
    { id: 1, name: 'Welcome Emails', type: 'email', count: 2 },
    { id: 2, name: 'Billing Updates', type: 'email', count: 1 },
    { id: 3, name: 'Service Alerts', type: 'notification', count: 2 },
    { id: 4, name: 'Marketing', type: 'email', count: 0 }
];

let templates = [
    { id: 1, catId: 1, name: 'Welcome New Member', subject: 'Welcome to our platform!', type: 'email', status: 'Active' },
    { id: 2, catId: 1, name: 'Welcome Back', subject: 'Great to see you again!', type: 'email', status: 'Active' },
    { id: 3, catId: 2, name: 'Invoice Generated', subject: 'Your latest invoice is ready', type: 'email', status: 'Active' },
    { id: 4, catId: 3, name: 'Login Alert', subject: '', type: 'notification', status: 'Active' },
    { id: 5, catId: 3, name: 'Password Changed', subject: '', type: 'notification', status: 'Active' }
];

let currentType = 'email';
let selectedCatId = null;

function init() {
    renderCategories();
    renderTemplates();
    setupEventListeners();
}

function switchType(type) {
    currentType = type;
    selectedCatId = null;
    
    document.getElementById('tab-email').classList.toggle('active', type === 'email');
    document.getElementById('tab-notification').classList.toggle('active', type === 'notification');
    
    renderCategories();
    renderTemplates();
}

function renderCategories() {
    const container = document.getElementById('categories-container');
    const filtered = categories.filter(c => c.type === currentType);
    
    if (filtered.length === 0) {
        container.innerHTML = `<div style="padding: 40px; text-align: center; color: #94a3b8; font-size: 0.85rem;">No categories found</div>`;
        return;
    }

    container.innerHTML = filtered.map(cat => `
        <div class="category-item ${selectedCatId === cat.id ? 'active' : ''}" onclick="selectCategory(${cat.id})">
            <span class="cat-name">${cat.name}</span>
            <span class="cat-count">${cat.count}</span>
        </div>
    `).join('');
}

function selectCategory(id) {
    selectedCatId = id;
    const cat = categories.find(c => c.id === id);
    const label = document.getElementById('selected-cat-label');
    const badge = document.getElementById('tpl-count-badge');
    const createBtn = document.getElementById('create-tpl-btn');

    if (cat) {
        label.textContent = cat.name;
        badge.textContent = `${cat.count} Templates`;
        badge.style.display = 'inline-block';
        createBtn.style.display = 'flex';
    } else {
        label.textContent = 'Select a category';
        badge.style.display = 'none';
        createBtn.style.display = 'none';
    }

    renderCategories();
    renderTemplates();
}

function renderTemplates() {
    const container = document.getElementById('templates-container');
    const createBtn = document.getElementById('create-tpl-btn');
    
    if (!selectedCatId) {
        if (createBtn) createBtn.style.display = 'none';
        container.innerHTML = `
            <div class="empty-state">
              <div class="empty-icon-wrap">
                <span class="material-icons-round" style="font-size: 32px;">folder_open</span>
              </div>
              <p style="font-weight: 800; font-size: 1.1rem; color: #1e293b;">No Category Selected</p>
              <p style="font-size: 0.88rem; margin-top: 6px; color: #64748b; font-weight: 600;">Choose a category from the left to manage its templates.</p>
            </div>
        `;
        return;
    }

    const filtered = templates.filter(t => t.catId === selectedCatId);
    
    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
              <div class="empty-icon-wrap" style="background: #fff; border: 1px dashed #e2e8f0;">
                <span class="material-icons-round" style="font-size: 32px;">post_add</span>
              </div>
              <p style="font-weight: 800; font-size: 1.1rem; color: #1e293b;">No Templates Yet</p>
              <p style="font-size: 0.88rem; margin-top: 6px; color: #64748b; font-weight: 600;">This category is empty. Start by creating your first template.</p>
              <button class="ws-action-btn ws-btn-primary" onclick="openTemplateModal()" style="margin-top: 24px;">
                <span class="material-icons-round">add</span> Create Template
              </button>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(t => `
        <div class="template-card">
            <div class="template-info">
                <span class="template-title">${t.name}</span>
                <div class="template-meta">
                    <span class="status-dot ${t.status === 'Active' ? 'active' : ''}"></span>
                    <span>${t.type === 'email' ? 'Subject: ' + t.subject : 'System Notification'}</span>
                    <span style="color: #cbd5e1; font-weight: 300;">|</span>
                    <span style="color: ${t.status === 'Active' ? '#10b981' : '#f43f5e'}; font-weight: 800; font-size: 0.7rem; text-transform: uppercase;">${t.status}</span>
                </div>
            </div>
            <div class="template-actions">
                <button class="action-btn-sm" onclick="openTemplateModal(${t.id})" title="Edit"><span class="material-icons-round" style="font-size: 18px;">edit</span></button>
                <button class="action-btn-sm" onclick="deleteTemplate(${t.id})" title="Delete"><span class="material-icons-round" style="font-size: 18px;">delete_outline</span></button>
            </div>
        </div>
    `).join('');
}

function openCategoryModal() {
    const modal = document.getElementById('modal-container');
    const content = document.getElementById('modal-content');
    
    content.innerHTML = `
        <div style="padding: 32px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                <h2 style="font-size: 1.25rem; font-weight: 900; color: #1e293b;">Create New Category</h2>
                <span class="material-icons-round" style="cursor: pointer; color: #94a3b8;" onclick="closeModal()">close</span>
            </div>
            <div style="margin-bottom: 24px;">
                <label style="display: block; font-size: 0.75rem; font-weight: 800; color: #94a3b8; text-transform: uppercase; margin-bottom: 8px;">Category Name</label>
                <input type="text" id="new-cat-name" placeholder="e.g. Welcome Series" style="width: 100%; padding: 12px 16px; border: 1.5px solid #e2e8f0; border-radius: 10px; font-weight: 600; outline: none;">
            </div>
            <div style="display: flex; justify-content: flex-end; gap: 12px;">
                <button class="btn-outline" onclick="closeModal()">Cancel</button>
                <button class="btn-primary" onclick="saveCategory()">Save Category</button>
            </div>
        </div>
    `;
    modal.classList.remove('hidden');
}

function saveCategory() {
    const name = document.getElementById('new-cat-name').value;
    const type = currentType; // Inherit from current active tab
    if (!name) return showToast('Please enter a name', 'error');
    
    const id = categories.length + 1;
    categories.push({ id, name, type, count: 0 });
    showToast('Category created successfully', 'success');
    closeModal();
    renderCategories();
}

function openTemplateModal(id = null) {
    if (!selectedCatId && !id) return showToast('Please select a category first', 'warning');
    
    const t = id ? templates.find(x => x.id === id) : null;
    const cat = categories.find(c => c.id === (t ? t.catId : selectedCatId));
    
    const modal = document.getElementById('modal-container');
    const content = document.getElementById('modal-content');
    content.style.maxWidth = '900px';
    
    content.innerHTML = `
        <div style="padding: 32px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                <h2 style="font-size: 1.25rem; font-weight: 900; color: #1e293b;">${id ? 'Edit' : 'Create'} ${cat.type === 'email' ? 'Email' : 'Notification'} Template</h2>
                <span class="material-icons-round" style="cursor: pointer; color: #94a3b8;" onclick="closeModal()">close</span>
            </div>
            <div style="margin-bottom: 20px;">
                <label style="display: block; font-size: 0.75rem; font-weight: 800; color: #94a3b8; text-transform: uppercase; margin-bottom: 8px;">Template Name</label>
                <input type="text" id="tpl-name" value="${t ? t.name : ''}" placeholder="e.g. Welcome Email v1" style="width: 100%; padding: 12px 16px; border: 1.5px solid #e2e8f0; border-radius: 10px; font-weight: 600; outline: none;">
            </div>
            ${cat.type === 'email' ? `
            <div style="margin-bottom: 20px;">
                <label style="display: block; font-size: 0.75rem; font-weight: 800; color: #94a3b8; text-transform: uppercase; margin-bottom: 8px;">Email Subject</label>
                <input type="text" id="tpl-subject" value="${t ? t.subject : ''}" placeholder="Enter subject line..." style="width: 100%; padding: 12px 16px; border: 1.5px solid #e2e8f0; border-radius: 10px; font-weight: 600; outline: none;">
            </div>
            ` : ''}
            <div style="margin-bottom: 24px;">
                <label style="display: block; font-size: 0.75rem; font-weight: 800; color: #94a3b8; text-transform: uppercase; margin-bottom: 8px;">Email Editor</label>
                ${getRichTextEditorHTML("Write your message here... Use {name}, {company} etc for placeholders.")}
            </div>
            <div style="display: flex; justify-content: flex-end; gap: 12px;">
                <button class="btn-outline" onclick="closeModal()">Cancel</button>
                <button class="btn-primary" onclick="saveTemplate(${id})">Save Template</button>
            </div>
        </div>
    `;
    
    initRichTextEditor('.email-editor-container');
    if (t && t.body) {
        document.querySelector('.editor-content').innerHTML = t.body;
    }

    modal.classList.remove('hidden');
}

function saveTemplate(id) {
    const name = document.getElementById('tpl-name').value;
    const subject = document.getElementById('tpl-subject')?.value || '';
    const body = document.querySelector('.editor-content').innerHTML;
    if (!name) return showToast('Please enter a template name', 'error');
    
    if (id) {
        let t = templates.find(x => x.id === id);
        t.name = name; t.subject = subject; t.body = body;
    } else {
        templates.push({ id: templates.length + 1, catId: selectedCatId, name, subject, body, type: currentType, status: 'Active' });
        let cat = categories.find(c => c.id === selectedCatId);
        if (cat) cat.count++;
    }
    
    showToast('Template saved successfully', 'success');
    closeModal();
    renderTemplates();
    renderCategories();
}

function deleteTemplate(id) {
    if (confirm('Are you sure you want to delete this template?')) {
        const tIndex = templates.findIndex(x => x.id === id);
        if (tIndex > -1) {
            const t = templates[tIndex];
            const cat = categories.find(c => c.id === t.catId);
            if (cat) cat.count = Math.max(0, cat.count - 1);
            templates.splice(tIndex, 1);
            showToast('Template deleted', 'info');
            renderTemplates();
            renderCategories();
            
            // Update badge if still in same category
            if (selectedCatId === t.catId) {
                const badge = document.getElementById('tpl-count-badge');
                if (badge && cat) badge.textContent = `${cat.count} Templates`;
            }
        }
    }
}

function closeModal() {
    document.getElementById('modal-container').classList.add('hidden');
}

function showToast(msg, type) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span class="material-icons-round">${type === 'success' ? 'check_circle' : (type === 'error' ? 'error' : 'info')}</span> ${msg}`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function toggleNavGroup(btn) {
    const group = btn.parentElement;
    const sub = group.querySelector('.nav-sub');
    const chevron = btn.querySelector('.nav-chevron');
    const isOpen = group.classList.contains('open');
    
    if (isOpen) {
        sub.style.height = '0px';
        group.classList.remove('open');
    } else {
        sub.style.height = sub.scrollHeight + 'px';
        group.classList.add('open');
    }
}

function setupEventListeners() {
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) {
        menuToggle.onclick = () => {
            document.getElementById('sidebar').classList.toggle('collapsed');
        };
    }
    
    const sidebarToggle = document.getElementById('sidebar-toggle');
    if (sidebarToggle) {
        sidebarToggle.onclick = () => {
            const sidebar = document.getElementById('sidebar');
            const icon = document.getElementById('sidebar-toggle-icon');
            sidebar.classList.toggle('collapsed');
            icon.textContent = sidebar.classList.contains('collapsed') ? 'chevron_right' : 'chevron_left';
        };
    }
}

document.addEventListener('DOMContentLoaded', init);
