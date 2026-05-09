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
    document.getElementById('selected-cat-label').textContent = cat ? cat.name : 'Select a category';
    renderCategories();
    renderTemplates();
}

function renderTemplates() {
    const container = document.getElementById('templates-container');
    if (!selectedCatId) {
        container.innerHTML = `
            <div class="empty-state">
              <span class="material-icons-round" style="font-size: 48px; opacity: 0.2; margin-bottom: 16px;">folder_open</span>
              <p style="font-weight: 700; font-size: 1.1rem; color: #1e293b;">No Category Selected</p>
              <p style="font-size: 0.85rem; margin-top: 4px;">Choose a category from the left to view templates.</p>
            </div>
        `;
        return;
    }

    const filtered = templates.filter(t => t.catId === selectedCatId);
    
    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
              <p style="font-weight: 700; font-size: 1.1rem; color: #1e293b;">No Templates Found</p>
              <p style="font-size: 0.85rem; margin-top: 4px;">Start by creating a new template for this category.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(t => `
        <div class="template-card">
            <div class="template-info">
                <span class="template-title">${t.name}</span>
                <div class="template-meta">
                    <span>${t.type === 'email' ? 'Subject: ' + t.subject : 'Type: Notification'}</span>
                    <span style="color: ${t.status === 'Active' ? '#10b981' : '#f43f5e'}; font-weight: 800;">${t.status}</span>
                </div>
            </div>
            <div class="template-actions">
                <button class="action-btn" onclick="openTemplateModal(${t.id})" title="Edit"><span class="material-icons-round" style="font-size: 18px;">edit</span></button>
                <button class="action-btn" onclick="deleteTemplate(${t.id})" title="Delete"><span class="material-icons-round" style="font-size: 18px;">delete_outline</span></button>
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
            <div style="margin-bottom: 24px;">
                <label style="display: block; font-size: 0.75rem; font-weight: 800; color: #94a3b8; text-transform: uppercase; margin-bottom: 8px;">Type</label>
                <select id="new-cat-type" style="width: 100%; padding: 12px 16px; border: 1.5px solid #e2e8f0; border-radius: 10px; font-weight: 600; outline: none;">
                    <option value="email">Email</option>
                    <option value="notification">Notification</option>
                </select>
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
    const type = document.getElementById('new-cat-type').value;
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
