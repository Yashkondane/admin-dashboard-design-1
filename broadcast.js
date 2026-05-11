// ===== DATA =====
const broadcasts = [
    {
        id: "BR-10418",
        date: "08-May-2026",
        time: "05:59:46 PM",
        broadcaster: "Sneha Reddy",
        company: "Reddy Wholesale",
        title: "Want to buy",
        condition: "New",
        mainCategory: "Accessories",
        subCategory: "Chargers",
        message: "Looking for Type-C 65W chargers in bulk | Qty: 500 Pcs",
        quantity: "500",
        unit: "Pcs",
        price: "Quote",
        sendingOption: "Send to group",
        audience: "Charger suppliers",
        status: "Approved",
        submittedAt: "28 mins ago"
    },
    {
        id: "BR-10417",
        date: "08-May-2026",
        time: "05:55:49 PM",
        broadcaster: "Tattva Jain",
        company: "Tattva Infosys",
        title: "Want to sell",
        condition: "New",
        mainCategory: "Electronics",
        subCategory: "Laptops",
        message: "WTB Laptop Laptop | Qty: 1 Pcs | Quote",
        quantity: "1",
        unit: "Pcs",
        price: "Quote",
        sendingOption: "SendToAll",
        audience: "All Members",
        status: "Approved",
        submittedAt: "45 mins ago"
    },
    {
        id: "BR-10416",
        date: "08-May-2026",
        time: "02:34:58 PM",
        broadcaster: "Jayesh Jain",
        company: "Speedtech Systems",
        title: "Want to sell",
        condition: "Used",
        mainCategory: "Mobile",
        subCategory: "iPhone",
        message: "WTS Mobile iPhone | Qty: 1 Pcs | Call",
        quantity: "1",
        unit: "Pcs",
        price: "Call",
        sendingOption: "SendToAll",
        audience: "All Members",
        status: "Rejected",
        submittedAt: "3 hours ago"
    }
];

// ===== STATE =====
let broadcastPage = 1;
let broadcastRowsPerPage = 10;
let isBroadcastEditing = false;
let activeBroadcastId = null;
let currentBroadcastFilter = 'Approved';

// Helper for custom select
function safeRenderSelect(id, options, value, onchange) {
    if (window.renderCustomSelect) {
        return window.renderCustomSelect(id, options, value, onchange);
    }
    // Fallback to standard select if custom not loaded
    return `
        <select class="edit-select" id="${id}" onchange="this.dataset.value=this.value">
            ${options.map(opt => `<option value="${opt.value}" ${opt.value === value ? 'selected' : ''}>${opt.label}</option>`).join('')}
        </select>
    `;
}

// ===== RENDER TABLE =====
function renderBroadcastTable() {
    const container = document.getElementById('broadcast-table-container');
    if (!container) return;

    let filteredBroadcasts = broadcasts;
    if (currentBroadcastFilter !== 'all') {
        filteredBroadcasts = broadcasts.filter(b => b.status.toLowerCase() === currentBroadcastFilter.toLowerCase());
    }

    const total = filteredBroadcasts.length;
    const start = (broadcastPage - 1) * broadcastRowsPerPage;
    const end = start + broadcastRowsPerPage;
    const pageItems = filteredBroadcasts.slice(start, end);

    let tableHtml = `
        <div class="table-scroll-wrap">
            <table class="data-table">
                <thead>
                    <tr>
                        <th style="width: 60px; text-align: center; font-weight: 600; color: #64748b; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.03em;">S.No</th>
                        <th style="width: 150px; text-align: left; font-weight: 600; color: #64748b; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.03em;">Date & Time</th>
                        <th style="width: 140px; text-align: left; font-weight: 600; color: #64748b; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.03em;">Broadcaster</th>
                        <th style="width: 180px; text-align: left; font-weight: 600; color: #64748b; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.03em;">Company Name</th>
                        <th style="min-width: 250px; text-align: left; font-weight: 600; color: #64748b; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.03em;">Broadcast Message</th>
                        <th style="width: 130px; text-align: left; font-weight: 600; color: #64748b; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.03em;">Send to</th>
                        <th style="width: 120px; text-align: center; font-weight: 600; color: #64748b; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.03em;">Status</th>
                    </tr>
                </thead>
                <tbody>
    `;

    if (pageItems.length === 0) {
        tableHtml += `
            <tr>
                <td colspan="7" style="padding: 64px 32px; text-align: center;">
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
                        <div style="width: 56px; height: 56px; background: #f8fafc; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 1px solid #f1f5f9;">
                            <span class="material-icons-round" style="font-size: 28px; color: #cbd5e1;">campaign</span>
                        </div>
                        <div style="color: #94a3b8; font-size: 0.9rem; font-weight: 600;">No broadcasts found</div>
                    </div>
                </td>
            </tr>
        `;
    } else {
        tableHtml += pageItems.map((b, index) => {
            let statusClass = 'live';
            if (b.status === 'Approved') statusClass = 'live';
            if (b.status === 'Rejected') statusClass = 'rejected';
            if (b.status === 'Hidden') statusClass = 'hidden';

            const sno = (total - (start + index));

            return `
                <tr onclick="openBroadcastModal('${b.id}')" style="cursor: pointer; height: 68px;">
                    <td style="text-align: center;"><span style="color: #475569; font-weight: 700; font-size: 0.82rem;">${String(sno).padStart(2, '0')}</span></td>
                    <td>
                        <div style="display: flex; flex-direction: column; gap: 2px;">
                            <span style="font-weight: 700; color: #475569; font-size: 0.85rem; line-height: 1.2;">${b.date}</span>
                            <span style="font-size: 0.7rem; color: #94a3b8; font-weight: 600; letter-spacing: 0.01em;">${b.time}</span>
                        </div>
                    </td>
                    <td><span style="font-weight: 600; color: #475569; font-size: 0.85rem;">${b.broadcaster}</span></td>
                    <td><span style="font-weight: 600; color: #1e293b; font-size: 0.85rem;">${b.company}</span></td>
                    <td style="max-width: 400px;">
                        <span style="font-weight: 600; color: #334155; font-size: 0.85rem; line-height: 1.5; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${b.message}</span>
                    </td>
                    <td><span style="font-weight: 600; color: #64748b; font-size: 0.82rem;">${b.sendingOption === 'SendToAll' ? 'Send To All' : b.sendingOption.replace(/([A-Z])/g, ' $1').trim()}</span></td>
                    <td style="text-align: center;">
                        <span class="status-pill ${statusClass}" style="padding: 5px 12px; min-width: 85px; justify-content: center; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.02em;">
                            <span class="status-dot" style="width: 5px; height: 5px;"></span>
                            ${b.status}
                        </span>
                    </td>
                </tr>
            `;
        }).join('');
    }

    tableHtml += `</tbody></table></div>`;
    container.innerHTML = tableHtml;
    renderFooter(total);
}

function renderFooter(total) {
    const footer = document.getElementById('broadcast-footer');
    if (!footer) return;
    const totalPages = Math.ceil(total / broadcastRowsPerPage);
    const start = total === 0 ? 0 : (broadcastPage - 1) * broadcastRowsPerPage + 1;
    const end = Math.min(broadcastPage * broadcastRowsPerPage, total);

    footer.innerHTML = `
        <div style="font-size: 0.82rem; color: #94a3b8; font-weight: 600;">
            Showing <span style="color: #64748b; font-weight: 700;">${start}-${end}</span> of <span style="color: #64748b; font-weight: 700;">${total}</span> broadcasts
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
            <button onclick="changePage(${broadcastPage - 1})" ${broadcastPage === 1 ? 'disabled' : ''} class="pagination-btn"><span class="material-icons-round">chevron_left</span></button>
            <div style="display: flex; gap: 4px;">
                ${Array.from({ length: Math.max(1, totalPages) }, (_, i) => i + 1).map(p => `
                    <button onclick="changePage(${p})" class="pagination-num ${p === broadcastPage ? 'active' : ''}">${p}</button>
                `).join('')}
            </div>
            <button onclick="changePage(${broadcastPage + 1})" ${broadcastPage === totalPages || totalPages === 0 ? 'disabled' : ''} class="pagination-btn"><span class="material-icons-round">chevron_right</span></button>
        </div>
        <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 0.75rem; color: #94a3b8; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em;">Rows</span>
            <select onchange="broadcastRowsPerPage=parseInt(this.value); broadcastPage=1; renderBroadcastTable();" class="rows-select" style="height: 32px; font-size: 0.78rem;">
                <option value="10" ${broadcastRowsPerPage === 10 ? 'selected' : ''}>10 / page</option>
                <option value="20" ${broadcastRowsPerPage === 20 ? 'selected' : ''}>20 / page</option>
            </select>
        </div>
    `;
}

function changePage(p) {
    let filteredBroadcasts = broadcasts;
    if (currentBroadcastFilter !== 'all') {
        filteredBroadcasts = broadcasts.filter(b => b.status.toLowerCase() === currentBroadcastFilter.toLowerCase());
    }
    const totalPages = Math.ceil(filteredBroadcasts.length / broadcastRowsPerPage);
    if (p < 1 || p > totalPages) return;
    broadcastPage = p;
    renderBroadcastTable();
}

function setBroadcastFilter(filter) {
    currentBroadcastFilter = filter;
    broadcastPage = 1;
    
    // Update active tab styles
    const tabs = document.querySelectorAll('.tabs-container .tab-item');
    tabs.forEach(tab => {
        if (tab.getAttribute('data-filter') === filter.toLowerCase() || (filter === 'all' && tab.getAttribute('data-filter') === 'all')) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    renderBroadcastTable();
}

// ===== MODAL LOGIC =====
function openBroadcastModal(id, editing = false) {
    const modal = document.getElementById('modal-container');
    const content = document.getElementById('modal-content');
    if (!modal || !content) return;
    
    isBroadcastEditing = editing;
    activeBroadcastId = id;
    const data = broadcasts.find(b => b.id === id);
    if (!data) return;

    if (isBroadcastEditing) {
        renderEditMode(content, data);
    } else {
        renderViewMode(content, data);
    }

    modal.classList.remove('hidden');
}

function renderViewMode(content, data) {
    content.innerHTML = `
        <div class="modal-header-modern" style="padding: 20px 24px; border-bottom: 1px solid #f1f5f9;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <div>
                    <h2 style="font-family:'Outfit',sans-serif; font-size: 1.25rem; font-weight: 800; color: #1e293b; margin:0;">Broadcast Details</h2>
                    <div class="modal-header-meta">
                        <span>${data.id}</span>
                        <span class="dot">•</span>
                        <span class="material-icons-round user-icon" style="color: #2563eb;">person</span>
                        <span>${data.broadcaster} · ${data.company}</span>
                    </div>
                </div>
                <div style="display: flex; align-items: center; gap: 16px;">
                    <button onclick="openBroadcastModal('${data.id}', true)" style="display:flex; align-items:center; gap:8px; background:none; border:none; color:#2563eb; font-weight:800; font-size:0.95rem; cursor:pointer; transition: opacity 0.2s;" onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'">
                        <span class="material-icons-round" style="font-size:20px;">edit</span> Edit
                    </button>
                    <button onclick="closeModal()" style="background:none; border:none; color:#94a3b8; cursor:pointer;"><span class="material-icons-round">close</span></button>
                </div>
            </div>
        </div>

        <div class="details-grid-modern">
            <div class="detail-box">
                <span class="detail-label">Broadcast Type</span>
                <span class="detail-value">${data.title}</span>
            </div>
            <div class="detail-box">
                <span class="detail-label">Product Condition</span>
                <span class="detail-value">${data.condition}</span>
            </div>
            <div class="detail-box">
                <span class="detail-label">Main Category</span>
                <span class="detail-value">${data.mainCategory}</span>
            </div>
            <div class="detail-box">
                <span class="detail-label">Sub Category</span>
                <span class="detail-value">${data.subCategory}</span>
            </div>
            <div class="detail-box" style="grid-column: span 2;">
                <span class="detail-label">Message</span>
                <div class="message-preview">${data.message}</div>
            </div>
            <div class="detail-box">
                <span class="detail-label">Quantity</span>
                <span class="detail-value">${data.quantity} <span style="color:#94a3b8; font-weight:600;">${data.unit}</span></span>
            </div>
            <div class="detail-box">
                <span class="detail-label">Price</span>
                <span class="detail-value" style="color:#94a3b8;">${data.price}</span>
            </div>
            <div class="detail-box">
                <span class="detail-label">Sending Option</span>
                <span class="detail-value">${data.sendingOption}</span>
            </div>
            <div class="detail-box">
                <span class="detail-label">Audience</span>
                <span class="detail-value">${data.audience}</span>
            </div>
        </div>

        <div style="padding: 0 24px 24px 24px; font-size:0.8rem; color:#94a3b8; font-weight:600;">
            Submitted ${data.submittedAt}
        </div>

        <div class="modal-footer" style="padding: 20px 24px; border-top: 1px solid #f1f5f9; display: flex; justify-content: space-between; align-items: center; background: #fff; border-radius: 0 0 20px 20px;">
            <button onclick="closeModal()" style="display:flex; align-items:center; gap:8px; background:none; border:none; color:#64748b; font-weight:700; font-size:0.95rem; cursor:pointer;">
                Cancel
            </button>
            <div style="display: flex; gap: 12px;">
                <button class="btn-decision-hide" onclick="openDecisionModal('hide', '${data.id}')" style="padding: 10px 20px; border: 1px solid #FB923C; border-radius: 10px; background: #FFF7ED; color: #A34E0C; font-weight: 800; font-size: 0.9rem; cursor: pointer; transition: all 0.2s;">
                    Hide
                </button>
                <button class="btn-decision-reject" onclick="openDecisionModal('reject', '${data.id}')" style="padding: 10px 20px; border: 1px solid #EF4444; border-radius: 10px; background: #FEE2E2; color: #B91C1C; font-weight: 800; font-size: 0.9rem; cursor: pointer; transition: all 0.2s;">
                    Reject
                </button>
                <button class="btn-decision-approve" onclick="handleBroadcastAction('approve')" style="padding: 10px 24px; border: 1px solid #22C55E; border-radius: 10px; background: #E8F5EC; color: #15803D; font-weight: 800; font-size: 0.9rem; cursor: pointer; transition: all 0.2s;">
                    Approve
                </button>
            </div>
        </div>
    `;
}

function renderEditMode(content, data) {
    content.innerHTML = `
        <div class="modal-header-modern" style="padding: 20px 24px; border-bottom: 1px solid #f1f5f9;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <div>
                    <div style="display:flex; align-items:center; gap:12px;">
                        <h2 style="font-family:'Outfit',sans-serif; font-size: 1.25rem; font-weight: 800; color: #1e293b; margin:0;">Broadcast Details</h2>
                        <div class="editing-badge" style="background: #eff6ff; color: #2563eb; padding: 4px 10px; border-radius: 6px; font-size: 0.72rem; font-weight: 800; display: flex; align-items: center; gap: 4px; border: 1px solid #dbeafe;">
                            <span class="material-icons-round" style="font-size:14px;">edit</span> EDITING
                        </div>
                    </div>
                    <div class="modal-header-meta">
                        <span>${data.id}</span>
                        <span class="dot">•</span>
                        <span class="material-icons-round user-icon" style="color: #2563eb;">person</span>
                        <span>${data.broadcaster} · ${data.company}</span>
                    </div>
                </div>
                <button onclick="closeModal()" style="background:none; border:none; color:#94a3b8; cursor:pointer;"><span class="material-icons-round">close</span></button>
            </div>
        </div>

        <div class="details-grid-modern">
            <div class="detail-box">
                <span class="detail-label">Broadcast Type</span>
                ${safeRenderSelect('edit-broadcast-type', [
                    {label: 'Want to buy', value: 'Want to buy'},
                    {label: 'Want to sell', value: 'Want to sell'}
                ], data.title, (val) => {})}
            </div>
            <div class="detail-box">
                <span class="detail-label">Product Condition</span>
                ${safeRenderSelect('edit-condition', [
                    {label: 'New', value: 'New'},
                    {label: 'Used', value: 'Used'}
                ], data.condition, (val) => {})}
            </div>
            <div class="detail-box">
                <span class="detail-label">Main Category</span>
                ${safeRenderSelect('edit-main-cat', [
                    {label: 'Accessories', value: 'Accessories'},
                    {label: 'Electronics', value: 'Electronics'}
                ], data.mainCategory, (val) => {})}
            </div>
            <div class="detail-box">
                <span class="detail-label">Sub Category</span>
                ${safeRenderSelect('edit-sub-cat', [
                    {label: 'Chargers', value: 'Chargers'},
                    {label: 'Laptops', value: 'Laptops'}
                ], data.subCategory, (val) => {})}
            </div>
            <div class="detail-box" style="grid-column: span 2;">
                <span class="detail-label">Message</span>
                <textarea class="edit-input" style="height: 100px; resize: none; font-family:inherit;">${data.message}</textarea>
            </div>
            <div class="detail-box">
                <span class="detail-label">Quantity</span>
                <div style="display:flex; gap:12px;">
                    <input type="text" class="edit-input" value="${data.quantity}" style="flex:1;">
                    <div style="flex:1;">
                        ${safeRenderSelect('edit-unit', [
                            {label: 'Pcs', value: 'Pcs'},
                            {label: 'Kg', value: 'Kg'}
                        ], data.unit, (val) => {})}
                    </div>
                </div>
            </div>
            <div class="detail-box">
                <span class="detail-label">Price Option</span>
                <div style="display:flex; gap:12px;">
                    <div style="flex:1;">
                        ${safeRenderSelect('edit-price-opt', [
                            {label: 'Quote', value: 'Quote'},
                            {label: 'Fixed', value: 'Fixed'}
                        ], data.price, (val) => {})}
                    </div>
                    <input type="text" class="edit-input" value="0" style="flex:1;">
                </div>
            </div>
            <div class="detail-box">
                <span class="detail-label">Sending Option</span>
                ${safeRenderSelect('edit-send-opt', [
                    {label: data.sendingOption, value: data.sendingOption},
                    {label: 'Send to All', value: 'Send to All'}
                ], data.sendingOption, (val) => {})}
            </div>
            <div class="detail-box">
                <span class="detail-label">Audience</span>
                <input type="text" class="edit-input" value="${data.audience}">
            </div>
        </div>

        <div class="modal-footer" style="padding: 20px 24px; border-top: 1px solid #f1f5f9; display: flex; justify-content: space-between; align-items: center; background: #fff; border-radius: 0 0 20px 20px;">
            <button onclick="openBroadcastModal('${data.id}', false)" style="display:flex; align-items:center; gap:8px; background:none; border:none; color:#64748b; font-weight:700; font-size:0.95rem; cursor:pointer;">
                <span class="material-icons-round" style="font-size:20px;">close</span> Cancel
            </button>
            <button class="btn-primary" onclick="handleBroadcastAction('save')" style="display:flex; align-items:center; gap:8px; padding: 10px 24px; border: none; border-radius: 10px; background: #2563eb; color: #fff; font-weight: 700; cursor: pointer; box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);">
                <span class="material-icons-round" style="font-size:20px;">save</span> Save Changes
            </button>
        </div>
    `;
}

// ===== DECISION MODALS =====
function openDecisionModal(type, id) {
    const overlay = document.createElement('div');
    overlay.className = 'decision-modal-overlay';
    overlay.id = 'decision-modal';
    
    const title = type === 'hide' ? 'Hide broadcast' : 'Reject broadcast';
    const btnText = type === 'hide' ? 'Confirm Hide' : 'Confirm Reject';
    const icon = type === 'hide' ? 'info_outline' : 'error_outline';
    const iconColor = type === 'hide' ? '#f59e0b' : '#ef4444';

    overlay.innerHTML = `
        <div class="decision-modal-content">
            <button onclick="closeDecisionModal()" style="position:absolute; top:24px; right:24px; background:none; border:none; color:#94a3b8; cursor:pointer;"><span class="material-icons-round">close</span></button>
            <div style="display:flex; align-items:center; gap:16px; margin-bottom:16px;">
                <div style="width:40px; height:40px; border-radius:10px; background:${iconColor}15; color:${iconColor}; display:grid; place-items:center;">
                    <span class="material-icons-round">${icon}</span>
                </div>
                <h3 style="font-family:'Outfit',sans-serif; font-size:1.35rem; font-weight:800; color:#1e293b; margin:0;">${title}</h3>
            </div>
            <p style="font-size:1rem; color:#64748b; line-height:1.5; margin-bottom:24px;">Add a remark for the user (optional). They will see this in their notifications.</p>
            
            <div style="display:flex; flex-direction:column; gap:8px; margin-bottom:32px;">
                <label style="font-size:0.9rem; font-weight:800; color:#1e293b;">Remark <span style="color:#94a3b8; font-weight:600;">(optional)</span></label>
                <textarea id="decision-remark" class="edit-input" style="height:120px; resize:none; font-family:inherit; border:1px solid #e2e8f0;" placeholder="e.g. Hidden temporarily for review"></textarea>
            </div>

            <div style="display:flex; justify-content:flex-end; align-items:center; gap:16px;">
                <button onclick="closeDecisionModal()" style="background:none; border:none; color:#64748b; font-weight:700; font-size:1rem; cursor:pointer;">Cancel</button>
                <button class="btn-confirm-dark" onclick="submitDecision('${type}', '${id}')" style="background:#2563eb; color:#fff; padding:12px 24px; border-radius:10px; border:none; font-weight:800; cursor:pointer; box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);">${btnText}</button>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);
}

function closeDecisionModal() {
    const modal = document.getElementById('decision-modal');
    if (modal) modal.remove();
}

function submitDecision(type, id) {
    const remark = document.getElementById('decision-remark').value;
    alert(`Broadcast ${id} - ${type.toUpperCase()}ED successfully.\nRemark: ${remark || 'None'}`);
    closeDecisionModal();
    closeModal();
}

function handleBroadcastAction(action) {
    const msg = action === 'save' ? 'SAVED' : action.toUpperCase() + 'ED';
    alert(`Broadcast ${activeBroadcastId} - ${msg} successfully.`);
    closeModal();
}

function closeModal() {
    const modal = document.getElementById('modal-container');
    if (modal) modal.classList.add('hidden');
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    renderBroadcastTable();
});
