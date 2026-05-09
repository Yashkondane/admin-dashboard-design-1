// ===== DATA =====
const broadcasts = [
    {
        id: 1,
        date: "02-05-2026",
        time: "04:04:28 AM",
        title: "WTS Mobile Iphone | Qty : 5 Pcs | Price",
        sentBy: "Jayesh Jain",
        recipient: "SendToAll",
        status: "Live"
    },
    {
        id: 2,
        date: "01-05-2026",
        time: "06:34:49 PM",
        title: "WTS Laptop Laptop | Qty : 10 Pcs | Call",
        sentBy: "Jayesh Jain",
        recipient: "SendToAll",
        status: "Live"
    },
    {
        id: 3,
        date: "30-04-2026",
        time: "05:20:35 AM",
        title: "WTS Laptop Laptop | Qty : 15 Pcs | Call",
        sentBy: "Jayesh Jain",
        recipient: "SendToAll",
        status: "Live"
    }
];

// ===== STATE =====
let currentPage = 1;
let rowsPerPage = 10;

// ===== RENDER TABLE =====
function renderBroadcastTable() {
    const container = document.getElementById('broadcast-table-container');
    const footer = document.getElementById('broadcast-footer');
    if (!container || !footer) return;

    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const pageItems = broadcasts.slice(start, end);

    let tableHtml = `
        <div class="table-scroll-wrap">
            <table class="data-table">
                <thead>
                    <tr>
                        <th style="width: 15%;">Date & Time</th>
                        <th style="width: 40%;">Message Detail</th>
                        <th style="width: 15%;">Recipient</th>
                        <th style="width: 15%;">Status</th>
                        <th style="width: 15%; text-align: right;">Actions</th>
                    </tr>
                </thead>
                <tbody>
    `;

    if (pageItems.length === 0) {
        tableHtml += `
            <tr>
                <td colspan="5" style="padding: 64px 32px; text-align: center;">
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
        tableHtml += pageItems.map(b => `
            <tr style="cursor: default;">
                <td>
                    <div style="display: flex; flex-direction: column;">
                        <span style="font-weight: 800; color: #1e293b; font-size: 0.9rem;">${b.date}</span>
                        <span style="font-size: 0.75rem; color: #94a3b8; font-weight: 600;">${b.time}</span>
                    </div>
                </td>
                <td>
                    <div style="display: flex; flex-direction: column;">
                        <span style="font-weight: 800; color: #1e293b; font-size: 0.9rem;">${b.title}</span>
                        <span style="font-size: 0.75rem; color: #94a3b8; font-weight: 600;">Sent by ${b.sentBy}</span>
                    </div>
                </td>
                <td>
                    <span style="background: #f1f5f9; color: #475569; padding: 4px 12px; border-radius: 6px; font-size: 0.75rem; font-weight: 800; border: 1px solid #e2e8f0;">${b.recipient}</span>
                </td>
                <td>
                    <span style="display: inline-flex; align-items: center; gap: 6px; background: #ecfdf5; color: #059669; padding: 4px 12px; border-radius: 6px; font-size: 0.75rem; font-weight: 800; border: 1px solid #10b981;">
                        <span style="width: 6px; height: 6px; background: #10b981; border-radius: 50%;"></span>
                        ${b.status}
                    </span>
                </td>
                <td style="text-align: right;">
                    <button class="header-icon-btn" onclick="openBroadcastModal(${b.id})">
                        <span class="material-icons-round" style="font-size: 20px;">visibility</span>
                    </button>
                </td>
            </tr>
        `).join('');
    }

    tableHtml += `
                </tbody>
            </table>
        </div>
    `;

    container.innerHTML = tableHtml;
    renderFooter(broadcasts.length);
}

function renderFooter(total) {
    const footer = document.getElementById('broadcast-footer');
    if (!footer) return;
    const totalPages = Math.ceil(total / rowsPerPage);
    const start = total === 0 ? 0 : (currentPage - 1) * rowsPerPage + 1;
    const end = Math.min(currentPage * rowsPerPage, total);

    footer.innerHTML = `
        <div style="font-size: 0.85rem; color: #94a3b8; font-weight: 600;">
            Showing <span style="color: #1e293b;">${start}-${end}</span> of <span style="color: #1e293b;">${total}</span>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
            <div style="display: flex; align-items: center; gap: 8px;">
                <button onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''} style="background: none; border: none; cursor: pointer; color: #94a3b8; display: flex; align-items: center; opacity: ${currentPage === 1 ? '0.3' : '1'};">
                    <span class="material-icons-round">chevron_left</span>
                </button>
                <div style="display: flex; gap: 4px;">
                    ${Array.from({ length: Math.max(1, totalPages) }, (_, i) => i + 1).map(p => `
                        <button onclick="changePage(${p})" style="width: 32px; height: 32px; border: none; border-radius: 8px; font-weight: 700; cursor: pointer; transition: all 0.2s; ${p === currentPage ? 'background: #4880FF; color: #fff; box-shadow: 0 4px 10px rgba(72, 128, 255, 0.3);' : 'background: transparent; color: #64748b;'}">${p}</button>
                    `).join('')}
                </div>
                <button onclick="changePage(${currentPage + 1})" ${currentPage === totalPages || totalPages === 0 ? 'disabled' : ''} style="background: none; border: none; cursor: pointer; color: #94a3b8; display: flex; align-items: center; opacity: ${currentPage === totalPages || totalPages === 0 ? '0.3' : '1'};">
                    <span class="material-icons-round">chevron_right</span>
                </button>
            </div>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 0.75rem; font-weight: 800; color: #94a3b8; text-transform: uppercase;">View</span>
            <select onchange="rowsPerPage=parseInt(this.value); currentPage=1; renderBroadcastTable();" style="border: 1px solid #e2e8f0; border-radius: 6px; padding: 4px 8px; font-size: 0.85rem; font-weight: 700; color: #1e293b; cursor: pointer; outline: none; background: #fff;">
                <option value="10" ${rowsPerPage === 10 ? 'selected' : ''}>10 / page</option>
                <option value="20" ${rowsPerPage === 20 ? 'selected' : ''}>20 / page</option>
                <option value="50" ${rowsPerPage === 50 ? 'selected' : ''}>50 / page</option>
            </select>
        </div>
    `;
}

function changePage(p) {
    const totalPages = Math.ceil(broadcasts.length / rowsPerPage);
    if (p < 1 || p > totalPages) return;
    currentPage = p;
    renderBroadcastTable();
}

// ===== MODAL LOGIC =====
function openBroadcastModal(id = null) {
    const modal = document.getElementById('modal-container');
    const content = document.getElementById('modal-content');
    if (!modal || !content) return;
    
    const isEdit = id !== null;
    const data = isEdit ? broadcasts.find(b => b.id === id) : null;

    content.innerHTML = `
        <div class="modal-header" style="display: flex; justify-content: space-between; align-items: center; padding: 20px 32px; border-bottom: 1px solid #f1f5f9;">
            <div style="display: flex; align-items: center; gap: 12px;">
                <h2 style="font-size: 1.25rem; font-weight: 900; color: #1e293b;">Broadcast Details</h2>
                <span class="material-icons-round" style="color: #16a34a; font-size: 20px; cursor: pointer;">edit</span>
            </div>
            <button onclick="closeModal()" style="background: none; border: none; cursor: pointer; color: #94a3b8;">
                <span class="material-icons-round">close</span>
            </button>
        </div>
        <div class="modal-body" style="padding: 24px 32px; display: flex; flex-direction: column; gap: 20px;">
            <div class="modal-grid-2">
                <div>
                    <label class="modal-label">Broadcast Type</label>
                    <select class="modal-input">
                        <option>Want to buy</option>
                        <option>Want to sell</option>
                    </select>
                </div>
                <div>
                    <label class="modal-label">Product Condition</label>
                    <select class="modal-input">
                        <option>New</option>
                        <option>Used</option>
                    </select>
                </div>
            </div>

            <div class="modal-grid-2">
                <div>
                    <label class="modal-label">Main Category</label>
                    <select class="modal-input">
                        <option>Laptop</option>
                        <option>Mobile</option>
                    </select>
                </div>
                <div>
                    <label class="modal-label">Sub Category</label>
                    <select class="modal-input">
                        <option>Laptop</option>
                        <option>iPhone</option>
                    </select>
                </div>
            </div>

            <div>
                <label class="modal-label">Message</label>
                <textarea class="modal-input" style="min-height: 80px; resize: vertical;" placeholder="Enter message details...">${data ? data.title : ''}</textarea>
            </div>

            <div class="modal-grid-2">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                    <div>
                        <label class="modal-label">Quantity</label>
                        <input type="number" class="modal-input" value="2">
                    </div>
                    <div>
                        <label class="modal-label">&nbsp;</label>
                        <select class="modal-input">
                            <option>Pcs</option>
                            <option>Units</option>
                        </select>
                    </div>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                    <div>
                        <label class="modal-label">Price Option</label>
                        <select class="modal-input">
                            <option>Quote</option>
                            <option>Fixed</option>
                        </select>
                    </div>
                    <div>
                        <label class="modal-label">&nbsp;</label>
                        <input type="text" class="modal-input" value="0">
                    </div>
                </div>
            </div>

            <div class="modal-grid-2">
                <div>
                    <label class="modal-label">Sending Option</label>
                    <select class="modal-input">
                        <option>Send to all</option>
                        <option>Selected groups</option>
                    </select>
                </div>
                <div>
                    <label class="modal-label">&nbsp;</label>
                    <select class="modal-input">
                        <option>Choose any one</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="modal-footer" style="padding: 24px 32px; background: #fff; border-top: 1px solid #f1f5f9; display: flex; justify-content: flex-end; gap: 12px;">
            <button onclick="closeModal()" style="padding: 10px 24px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; color: #475569; font-weight: 700; font-size: 0.9rem; cursor: pointer;">Approve</button>
            <button onclick="closeModal()" style="padding: 10px 24px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; color: #475569; font-weight: 700; font-size: 0.9rem; cursor: pointer;">Reject</button>
            <button onclick="closeModal()" style="padding: 10px 24px; background: #4f46e5; border: none; border-radius: 8px; color: #fff; font-weight: 700; font-size: 0.9rem; cursor: pointer; box-shadow: 0 4px 12px rgba(79, 70, 229, 0.2);">Update</button>
            <button onclick="closeModal()" style="padding: 10px 24px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; color: #475569; font-weight: 700; font-size: 0.9rem; cursor: pointer;">Hide</button>
            <button onclick="closeModal()" style="padding: 10px 24px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; color: #475569; font-weight: 700; font-size: 0.9rem; cursor: pointer;">Close</button>
        </div>
    `;

    modal.classList.remove('hidden');
}

function closeModal() {
    const modal = document.getElementById('modal-container');
    if (modal) modal.classList.add('hidden');
}

// ===== INIT =====
renderBroadcastTable();

document.addEventListener('DOMContentLoaded', () => {
    renderBroadcastTable();
    // Repeated passes to ensure rendering after heavy script loads
    setTimeout(renderBroadcastTable, 100);
    setTimeout(renderBroadcastTable, 500);
    setTimeout(renderBroadcastTable, 1000);
});
