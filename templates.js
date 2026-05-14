// Mock Data
let categories = [
    { id: 1, name: 'Welcome Emails', type: 'email', count: 2, status: 'Active' },
    { id: 2, name: 'Billing Updates', type: 'email', count: 1, status: 'Active' },
    { id: 3, name: 'Service Alerts', type: 'notification', count: 2, status: 'Active' },
    { id: 4, name: 'Marketing', type: 'email', count: 0, status: 'Active' }
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
            <div style="display: flex; justify-content: space-between; align-items: flex-start; width: 100%;">
                <div style="display: flex; flex-direction: column; gap: 2px;">
                    <span class="cat-name">${cat.name}</span>
                    <span style="font-size: 0.68rem; font-weight: 800; color: ${cat.status === 'Active' ? '#10b981' : '#94a3b8'}; text-transform: uppercase; letter-spacing: 0.02em;">
                        ${cat.status || 'Active'}
                    </span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px;">
                    <span class="cat-count">${cat.count}</span>
                    <button class="header-icon-btn" style="width: 24px; height: 24px; background: transparent; border: none;" onclick="event.stopPropagation(); openEditCategoryModal(${cat.id})">
                        <span class="material-icons-round" style="font-size: 16px;">edit</span>
                    </button>
                </div>
            </div>
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
    const badge = document.getElementById('tpl-count-badge');
    
    if (!selectedCatId) {
        if (createBtn) createBtn.style.display = 'none';
        if (badge) badge.style.display = 'none';
        container.innerHTML = `
            <div class="empty-state">
              <div class="empty-icon-wrap">
                <span class="material-icons-round" style="font-size: 32px;">folder_open</span>
              </div>
              <p style="font-weight: 800; font-size: 1.15rem; color: #1e293b; margin: 0;">No Category Selected</p>
              <p style="font-size: 0.9rem; margin-top: 8px; color: #64748b; font-weight: 600; line-height: 1.5;">Choose a category from the left sidebar to<br>view and manage its message templates.</p>
            </div>
        `;
        return;
    }

    const filtered = templates.filter(t => t.catId === selectedCatId);
    
    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
              <div class="empty-icon-wrap" style="background: #fff; border: 1px dashed #e2e8f0;">
                <span class="material-icons-round" style="font-size: 32px; color: #cbd5e1;">post_add</span>
              </div>
              <p style="font-weight: 800; font-size: 1.15rem; color: #1e293b; margin: 0;">No Templates Found</p>
              <p style="font-size: 0.9rem; margin-top: 8px; color: #64748b; font-weight: 600;">Get started by creating your first template for this category.</p>
              <button class="btn-primary" onclick="openTemplateModal()" style="margin-top: 24px; padding: 10px 24px; border-radius: 10px;">
                <span class="material-icons-round">add</span> Add New Template
              </button>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <div style="background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
            <table style="width: 100%; border-collapse: collapse; text-align: left;">
                <thead style="background: #f8fafc; border-bottom: 1px solid #e2e8f0;">
                    <tr>
                        <th style="padding: 16px 24px; font-size: 0.75rem; font-weight: 800; color: #64748b; text-transform: uppercase; width: 60px; text-align: center;">S.No</th>
                        <th style="padding: 16px 24px; font-size: 0.75rem; font-weight: 800; color: #64748b; text-transform: uppercase;">Template Name</th>
                        <th style="padding: 16px 24px; font-size: 0.75rem; font-weight: 800; color: #64748b; text-transform: uppercase;">Subject</th>
                        <th style="padding: 16px 24px; font-size: 0.75rem; font-weight: 800; color: #64748b; text-transform: uppercase; width: 120px;">Type</th>
                        <th style="padding: 16px 24px; font-size: 0.75rem; font-weight: 800; color: #64748b; text-transform: uppercase; width: 80px; text-align: center;">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${filtered.map((t, i) => `
                        <tr style="border-bottom: 1px solid #f1f5f9; transition: background 0.2s;" onmouseover="this.style.background='#f8fafc'" onmouseout="this.style.background='transparent'">
                            <td style="padding: 16px 24px; text-align: center;"><span style="font-weight: 700; color: #475569; font-size: 0.85rem;">${String(i + 1).padStart(2, '0')}</span></td>
                            <td style="padding: 16px 24px;">
                                <div style="font-weight: 700; color: #1e293b; font-size: 0.9rem;">${t.name}</div>
                            </td>
                            <td style="padding: 16px 24px;">
                                <div style="color: #64748b; font-size: 0.85rem; font-weight: 500; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${t.subject || '—'}</div>
                            </td>
                            <td style="padding: 16px 24px;">
                                <span style="display: inline-flex; padding: 4px 10px; border-radius: 6px; font-size: 0.7rem; font-weight: 800; text-transform: uppercase; background: ${t.type === 'email' ? '#eff6ff' : '#f3f4f6'}; color: ${t.type === 'email' ? '#4880FF' : '#64748b'};">
                                    ${t.type}
                                </span>
                            </td>
                            <td style="padding: 16px 24px; text-align: center;">
                                <div class="action-menu-wrap" style="position: relative; display: inline-block;">
                                    <button class="header-icon-btn" onclick="event.stopPropagation(); const m = this.nextElementSibling; document.querySelectorAll('.action-menu-dropdown').forEach(d => d !== m && (d.style.display='none')); m.style.display = m.style.display === 'flex' ? 'none' : 'flex';" style="width: 32px; height: 32px; background: #fff; border: 1px solid #e2e8f0; border-radius: 8px; cursor: pointer;">
                                        <span class="material-icons-round" style="font-size: 18px; color: #64748b;">more_vert</span>
                                    </button>
                                    <div class="action-menu-dropdown" style="display: none; position: absolute; right: 0; top: 100%; background: #fff; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); z-index: 100; padding: 4px; min-width: 130px; flex-direction: column; gap: 2px;">
                                        <button style="display: flex; align-items: center; gap: 8px; padding: 8px 12px; background: none; border: none; width: 100%; text-align: left; cursor: pointer; border-radius: 4px; font-size: 0.8rem; font-weight: 700; color: #475569;" onmouseover="this.style.background='#f1f5f9'" onmouseout="this.style.background='transparent'" onclick="openTemplateModal(${t.id})">
                                            <span class="material-icons-round" style="font-size: 16px; color: #4880FF;">edit</span> Edit
                                        </button>
                                        <button style="display: flex; align-items: center; gap: 8px; padding: 8px 12px; background: none; border: none; width: 100%; text-align: left; cursor: pointer; border-radius: 4px; font-size: 0.8rem; font-weight: 700; color: #ef4444;" onmouseover="this.style.background='#fef2f2'" onmouseout="this.style.background='transparent'" onclick="deleteTemplate(${t.id})">
                                            <span class="material-icons-round" style="font-size: 16px;">delete</span> Delete
                                        </button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
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

function openEditCategoryModal(id) {
    const cat = categories.find(c => c.id === id);
    if (!cat) return;

    const modal = document.getElementById('modal-container');
    const content = document.getElementById('modal-content');
    
    content.innerHTML = `
        <div style="padding: 32px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                <h2 style="font-size: 1.25rem; font-weight: 900; color: #1e293b;">Edit Category</h2>
                <span class="material-icons-round" style="cursor: pointer; color: #94a3b8;" onclick="closeModal()">close</span>
            </div>
            <div style="margin-bottom: 20px;">
                <label style="display: block; font-size: 0.75rem; font-weight: 800; color: #94a3b8; text-transform: uppercase; margin-bottom: 8px;">Category Name</label>
                <input type="text" id="edit-cat-name" value="${cat.name}" style="width: 100%; padding: 12px 16px; border: 1.5px solid #e2e8f0; border-radius: 10px; font-weight: 600; outline: none;">
            </div>
            <div style="margin-bottom: 24px;">
                <label style="display: block; font-size: 0.75rem; font-weight: 800; color: #94a3b8; text-transform: uppercase; margin-bottom: 12px;">Category Status</label>
                <div style="display: flex; gap: 24px;">
                    <label style="display: flex; align-items: center; gap: 8px; font-size: 0.9rem; font-weight: 700; color: #475569; cursor: pointer;">
                        <input type="radio" name="cat-status" value="Active" ${cat.status === 'Active' ? 'checked' : ''} style="width: 18px; height: 18px; accent-color: #4880FF;"> Active
                    </label>
                    <label style="display: flex; align-items: center; gap: 8px; font-size: 0.9rem; font-weight: 700; color: #475569; cursor: pointer;">
                        <input type="radio" name="cat-status" value="Inactive" ${cat.status === 'Inactive' ? 'checked' : ''} style="width: 18px; height: 18px; accent-color: #4880FF;"> Inactive
                    </label>
                </div>
            </div>
            <div style="display: flex; justify-content: flex-end; gap: 12px;">
                <button class="btn-outline" onclick="closeModal()">Cancel</button>
                <button class="btn-primary" onclick="saveCategory(${id})">Save Changes</button>
            </div>
        </div>
    `;
    modal.classList.remove('hidden');
}

function saveCategory(id = null) {
    const nameInput = id ? document.getElementById('edit-cat-name') : document.getElementById('new-cat-name');
    const name = nameInput.value;
    
    if (!name) return showToast('Please enter a name', 'error');
    
    if (id) {
        const cat = categories.find(c => c.id === id);
        const status = document.querySelector('input[name="cat-status"]:checked').value;
        cat.name = name;
        cat.status = status;
        showToast('Category updated successfully', 'success');
    } else {
        const type = currentType;
        const newId = categories.length + 1;
        categories.push({ id: newId, name, type, count: 0, status: 'Active' });
        showToast('Category created successfully', 'success');
    }
    
    closeModal();
    renderCategories();
    if (id === selectedCatId) {
        const label = document.getElementById('selected-cat-label');
        if (label) label.textContent = name;
    }
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
            const mainContent = document.querySelector('.main-content');
            if (mainContent) mainContent.classList.toggle('expanded');
        };
    }
    
    const sidebarToggle = document.getElementById('sidebar-toggle');
    if (sidebarToggle) {
        sidebarToggle.onclick = () => {
            const sidebar = document.getElementById('sidebar');
            const icon = document.getElementById('sidebar-toggle-icon');
            const mainContent = document.querySelector('.main-content');
            
            sidebar.classList.toggle('collapsed');
            if (mainContent) mainContent.classList.toggle('expanded');
            
            if (icon) {
                icon.textContent = sidebar.classList.contains('collapsed') ? 'chevron_right' : 'chevron_left';
            }
        };
    }
}

document.addEventListener('DOMContentLoaded', init);

document.addEventListener('click', (e) => {
    if (!e.target.closest('.action-menu-wrap')) {
        document.querySelectorAll('.action-menu-dropdown').forEach(d => d.style.display = 'none');
    }
});
