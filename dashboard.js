// ===== DASHBOARD DATA =====
// Upcoming / pending broadcasts that need admin action
window.pendingBroadcasts = [

    {
        id: "BR-10420",
        date: "11-May-2026",
        time: "08:15:22 PM",
        broadcaster: "Ravi Kumar",
        company: "Kumar Electronics",
        title: "Want to buy",
        condition: "New",
        mainCategory: "Electronics",
        subCategory: "Laptops",
        message: "Looking for Dell Latitude 5540 laptops in bulk | Qty: 50 Pcs | Budget: ₹45,000 each",
        quantity: "50",
        unit: "Pcs",
        price: "₹45,000",
        sendingOption: "SendToAll",
        audience: "All Members",
        status: "Pending",
        submittedAt: "12 mins ago"
    },
    {
        id: "BR-10419",
        date: "11-May-2026",
        time: "07:45:10 PM",
        broadcaster: "Priya Mehta",
        company: "Mehta Traders",
        title: "Want to sell",
        condition: "New",
        mainCategory: "Accessories",
        subCategory: "Cables",
        message: "WTS USB-C to HDMI cables, 2m length, 4K 60Hz support | Qty: 1000 Pcs",
        quantity: "1000",
        unit: "Pcs",
        price: "Quote",
        sendingOption: "Send to group",
        audience: "Cable suppliers",
        status: "Pending",
        submittedAt: "42 mins ago"
    },
    {
        id: "BR-10418",
        date: "11-May-2026",
        time: "06:30:55 PM",
        broadcaster: "Amit Shah",
        company: "Shah Wholesale",
        title: "Want to buy",
        condition: "Used",
        mainCategory: "Mobile",
        subCategory: "Samsung",
        message: "WTB Samsung Galaxy S24 Ultra, used in good condition | Qty: 25 Pcs | Call for price",
        quantity: "25",
        unit: "Pcs",
        price: "Call",
        sendingOption: "SendToAll",
        audience: "All Members",
        status: "Pending",
        submittedAt: "2 hours ago"
    },
    {
        id: "BR-10417",
        date: "11-May-2026",
        time: "04:12:33 PM",
        broadcaster: "Sneha Reddy",
        company: "Reddy Wholesale",
        title: "Want to sell",
        condition: "New",
        mainCategory: "Accessories",
        subCategory: "Chargers",
        message: "WTS Type-C 65W GaN chargers, compact design | Qty: 500 Pcs",
        quantity: "500",
        unit: "Pcs",
        price: "₹800",
        sendingOption: "Send to group",
        audience: "Charger dealers",
        status: "Pending",
        submittedAt: "4 hours ago"
    },
    {
        id: "BR-10416",
        date: "11-May-2026",
        time: "02:05:18 PM",
        broadcaster: "Deepak Jain",
        company: "Speedtech Systems",
        title: "Want to buy",
        condition: "New",
        mainCategory: "Electronics",
        subCategory: "Monitors",
        message: "Looking for 27\" 4K IPS monitors for office setup | Qty: 100 Pcs | Budget: ₹18,000",
        quantity: "100",
        unit: "Pcs",
        price: "₹18,000",
        sendingOption: "SendToAll",
        audience: "All Members",
        status: "Pending",
        submittedAt: "6 hours ago"
    }
];

// ===== STATE =====
let dashBroadcastPage = 1;
let dashBroadcastRowsPerPage = 10;

// ===== RENDER TABLE =====
function renderDashBroadcastTable() {
    const container = document.getElementById('dash-broadcast-table-container');
    if (!container) return;

    const total = (window.pendingBroadcasts || []).length;
    const start = (dashBroadcastPage - 1) * dashBroadcastRowsPerPage;
    const end = start + dashBroadcastRowsPerPage;
    const pageItems = (window.pendingBroadcasts || []).slice(start, end);


    // Update pending count badge
    const countEl = document.getElementById('pending-broadcast-count');
    if (countEl) countEl.textContent = `${total} pending`;

    let tableHtml = `
        <div class="table-scroll-wrap">
            <table class="data-table">
                <thead>
                    <tr>
                        <th style="width: 55px; text-align: center; background: #f8fafc; color: #94a3b8; font-size: 0.7rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em;">S.No</th>
                        <th style="width: 145px; text-align: left; background: #f8fafc; color: #94a3b8; font-size: 0.7rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em;">Date & Time</th>
                        <th style="width: 130px; text-align: left; background: #f8fafc; color: #94a3b8; font-size: 0.7rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em;">Broadcaster</th>
                        <th style="width: 160px; text-align: left; background: #f8fafc; color: #94a3b8; font-size: 0.7rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em;">Company Name</th>
                        <th style="min-width: 240px; text-align: left; background: #f8fafc; color: #94a3b8; font-size: 0.7rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em;">Broadcast Message</th>
                        <th style="width: 110px; text-align: left; background: #f8fafc; color: #94a3b8; font-size: 0.7rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em;">Send to</th>
                        <th style="width: 240px; text-align: center; background: #f8fafc; color: #94a3b8; font-size: 0.7rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em;">Actions</th>
                    </tr>
                </thead>
                <tbody>
    `;

    if (pageItems.length === 0) {
        tableHtml += `
            <tr>
                <td colspan="7" style="padding: 0;">
                    <div class="dash-empty-state">
                        <div class="dash-empty-icon">
                            <span class="material-icons-round">check_circle</span>
                        </div>
                        <div class="dash-empty-text">All caught up! No pending broadcasts.</div>
                    </div>
                </td>
            </tr>
        `;
    } else {
        tableHtml += pageItems.map((b, index) => {
            const sno = start + index + 1;
            const sendLabel = b.sendingOption === 'SendToAll'
                ? 'Send To All'
                : b.sendingOption.replace(/([A-Z])/g, ' $1').trim();

            return `
                <tr style="height: 68px;">
                    <td style="text-align: center;"><span style="color: #475569; font-weight: 700; font-size: 0.82rem;">${String(sno).padStart(2, '0')}</span></td>
                    <td>
                        <div style="display: flex; flex-direction: column; gap: 2px;">
                            <span style="font-weight: 700; color: #475569; font-size: 0.85rem; line-height: 1.2;">${b.date}</span>
                            <span style="font-size: 0.7rem; color: #94a3b8; font-weight: 600; letter-spacing: 0.01em;">${b.time}</span>
                        </div>
                    </td>
                    <td><span style="font-weight: 600; color: #475569; font-size: 0.85rem;">${b.broadcaster}</span></td>
                    <td><span style="font-weight: 600; color: #1e293b; font-size: 0.85rem;">${b.company}</span></td>
                    <td style="max-width: 360px; cursor: pointer;" onclick="window.openBroadcastHistoryModal(null, '${b.id}', false, { canEdit: false })">
                        <span style="font-weight: 600; color: #334155; font-size: 0.85rem; line-height: 1.5; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${b.message}</span>
                    </td>
                    <td><span style="font-weight: 600; color: #64748b; font-size: 0.82rem;">${sendLabel}</span></td>
                    <td>
                        <div class="dash-action-group">
                            <button class="dash-action-btn dash-action-btn--approve" onclick="window.handleBroadcastAction('Approve', null, '${b.id}')" title="Approve">
                                <span class="material-icons-round">check</span>Approve
                            </button>
                            <button class="dash-action-btn dash-action-btn--reject" onclick="window.handleBroadcastAction('Suspend', null, '${b.id}')" title="Reject">
                                <span class="material-icons-round">close</span>Reject
                            </button>
                            <button class="dash-action-btn dash-action-btn--hide" onclick="window.handleBroadcastAction('Hide', null, '${b.id}')" title="Hide">
                                <span class="material-icons-round">visibility_off</span>Hide
                            </button>
                        </div>
                    </td>

                </tr>
            `;
        }).join('');
    }

    tableHtml += `</tbody></table></div>`;
    container.innerHTML = tableHtml;
    renderDashFooter(total);
}

// ===== FOOTER =====
function renderDashFooter(total) {
    const footer = document.getElementById('dash-broadcast-footer');
    if (!footer) return;
    const totalPages = Math.ceil(total / dashBroadcastRowsPerPage);
    const start = total === 0 ? 0 : (dashBroadcastPage - 1) * dashBroadcastRowsPerPage + 1;
    const end = Math.min(dashBroadcastPage * dashBroadcastRowsPerPage, total);

    footer.innerHTML = `
        <div style="font-size: 0.82rem; color: #94a3b8; font-weight: 600;">
            Showing <span style="color: #64748b; font-weight: 700;">${start}-${end}</span> of <span style="color: #64748b; font-weight: 700;">${total}</span> pending
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
            <button onclick="changeDashPage(${dashBroadcastPage - 1})" ${dashBroadcastPage === 1 ? 'disabled' : ''} class="pagination-btn"><span class="material-icons-round">chevron_left</span></button>
            <div style="display: flex; gap: 4px;">
                ${Array.from({ length: Math.max(1, totalPages) }, (_, i) => i + 1).map(p => `
                    <button onclick="changeDashPage(${p})" class="pagination-num ${p === dashBroadcastPage ? 'active' : ''}">${p}</button>
                `).join('')}
            </div>
            <button onclick="changeDashPage(${dashBroadcastPage + 1})" ${dashBroadcastPage === totalPages || totalPages === 0 ? 'disabled' : ''} class="pagination-btn"><span class="material-icons-round">chevron_right</span></button>
        </div>
        <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 0.75rem; color: #94a3b8; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em;">Rows</span>
            <select onchange="dashBroadcastRowsPerPage=parseInt(this.value); dashBroadcastPage=1; renderDashBroadcastTable();" class="rows-select" style="height: 32px; font-size: 0.78rem;">
                <option value="10" ${dashBroadcastRowsPerPage === 10 ? 'selected' : ''}>10 / page</option>
                <option value="20" ${dashBroadcastRowsPerPage === 20 ? 'selected' : ''}>20 / page</option>
            </select>
        </div>
    `;
}

function changeDashPage(p) {
    const totalPages = Math.ceil((window.pendingBroadcasts || []).length / dashBroadcastRowsPerPage);
    if (p < 1 || p > totalPages) return;
    dashBroadcastPage = p;
    renderDashBroadcastTable();
}


// Modal logic moved to script.js


// ===== SET DATE =====
function setDashboardDate() {
    const el = document.getElementById('dashboard-date');
    if (!el) return;
    // For now keeping it as the range seen in design
    // el.textContent = "14 May 2026 - 13 Jun 2026";
}

function setupSidebarToggles() {
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

window.toggleNavGroup = function(btn) {
    const group = btn.closest('.nav-group');
    const sub = group.querySelector('.nav-sub');
    const isOpen = group.classList.contains('open');
    
    document.querySelectorAll('.nav-group.open').forEach(g => {
        if (g !== group) {
            g.classList.remove('open');
            if (g.querySelector('.nav-sub')) g.querySelector('.nav-sub').style.height = '0px';
        }
    });

    if (isOpen) {
        group.classList.remove('open');
        if (sub) sub.style.height = '0px';
    } else {
        group.classList.add('open');
        if (sub) sub.style.height = sub.scrollHeight + 'px';
    }
};

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    setDashboardDate();
    renderDashBroadcastTable();
    setupSidebarToggles();
});

