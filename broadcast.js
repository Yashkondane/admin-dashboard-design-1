// ===== DATA =====
window.broadcasts = [
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

// ===== RENDER TABLE =====
window.renderBroadcastTable = function() {
    const container = document.getElementById('broadcast-table-container');
    if (!container) return;

    let filteredBroadcasts = window.broadcasts || [];
    if (currentBroadcastFilter !== 'all') {
        filteredBroadcasts = (window.broadcasts || []).filter(b => b.status.toLowerCase() === currentBroadcastFilter.toLowerCase());
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
                            <span class="material-icons-round" style="font-size: 28px; color: #94a3b8;">campaign</span>
                        </div>
                        <div style="color: #94a3b8; font-size: 0.9rem; font-weight: 600;">No broadcasts found</div>
                    </div>
                </td>
            </tr>
        `;
    } else {
        tableHtml += pageItems.map((b, index) => {
            let statusClass = 'live';
            if (b.status === 'Approved' || b.status === 'Live') statusClass = 'live';
            if (b.status === 'Rejected') statusClass = 'rejected';
            if (b.status === 'Hidden') statusClass = 'hidden';
            if (b.status === 'Suspended') statusClass = 'rejected'; // Reusing rejected color (red) for suspended


            const sno = (total - (start + index));

            return `
                <tr onclick="window.openBroadcastHistoryModal(null, '${b.id}')" style="cursor: pointer; height: 68px;">
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
                        <span class="status-badge" style="min-width: 100px; padding: 6px 16px; font-size: 0.82rem; font-weight: 700; background: ${b.status === 'Approved' || b.status === 'Live' ? '#E8F5EC' : (b.status === 'Rejected' || b.status === 'Suspended' ? '#FEE2E2' : '#F3F4F6')}; color: ${b.status === 'Approved' || b.status === 'Live' ? '#15803D' : (b.status === 'Rejected' || b.status === 'Suspended' ? '#B91C1C' : '#4B5563')}; border: 1px solid ${b.status === 'Approved' || b.status === 'Live' ? '#22C55E' : (b.status === 'Rejected' || b.status === 'Suspended' ? '#EF4444' : '#D1D5DB')}; border-radius: 6px; display: inline-flex; align-items: center; justify-content: center; gap: 6px; text-transform: capitalize;">
                            <span style="width: 6px; height: 6px; border-radius: 50%; background: ${b.status === 'Approved' || b.status === 'Live' ? '#15803D' : (b.status === 'Rejected' || b.status === 'Suspended' ? '#B91C1C' : '#4B5563')};"></span>
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

window.changePage = function(p) {
    let filteredBroadcasts = window.broadcasts || [];
    if (currentBroadcastFilter !== 'all') {
        filteredBroadcasts = (window.broadcasts || []).filter(b => b.status.toLowerCase() === currentBroadcastFilter.toLowerCase());
    }
    const totalPages = Math.ceil(filteredBroadcasts.length / broadcastRowsPerPage);
    if (p < 1 || p > totalPages) return;
    broadcastPage = p;
    window.renderBroadcastTable();
}

window.setBroadcastFilter = function(filter) {
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

    window.renderBroadcastTable();
}

// ===== INIT =====
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

document.addEventListener('DOMContentLoaded', () => {
    window.renderBroadcastTable();
    setupSidebarToggles();
});
