// ===== DATA =====
const fieldData = {
    category: [
        { id: 1, name: "Networking" },
        { id: 2, name: "Stainless Steel" },
        { id: 3, name: "Mobile" },
        { id: 4, name: "Components" },
        { id: 5, name: "Aluminium" },
        { id: 6, name: "Server" }
    ],
    subcategory: [
        { id: 1, name: "Motherboard", category: "PC" },
        { id: 2, name: "Screen", category: "PC" },
        { id: 3, name: "Hard drive", category: "PC" },
        { id: 4, name: "Hard drive 2.5\"", category: "Laptop" },
        { id: 5, name: "Battery", category: "Laptop" },
        { id: 6, name: "Memory", category: "Laptop" }
    ],
    stamp: [
        { id: 1, name: "verified", image: "https://cdn-icons-png.flaticon.com/512/7641/7641727.png" },
        { id: 2, name: "Insta Verified", image: "https://cdn-icons-png.flaticon.com/512/10629/10629607.png" }
    ],
    // Placeholders for other tabs
    condition: [{ id: 1, name: "New" }, { id: 2, name: "Used" }],
    'wtb-price': [],
    'wts-price': [],
    uom: [],
    designation: [],
    'inactive-status': [],
    'business-type': [],
    'address-title': [],
    'support-category': [],
    'invoice-setting': [
        { id: 1, startDate: "05/04/2021", endDate: "05/24/2021", prefix: "test", number: "7", suffix: "test" },
        { id: 2, startDate: "01/01/2021", endDate: "12/31/2021", prefix: "ISPL", number: "1001", suffix: "2021-22" },
        { id: 3, startDate: "04/01/2022", endDate: "03/30/2023", prefix: "ISPL", number: "1000", suffix: "2022-23" },
        { id: 4, startDate: "05/01/2023", endDate: "05/31/2023", prefix: "TK", number: "1", suffix: "2023-24" }
    ],
    'terms-condition': [
        { id: 1, date: "16-Apr-2026", category: "Privacy Policy", content: "Test By DhrumilTest By DhrumilTest By DhrumilTest By DhrumilTest By Dhrumil..." },
        { id: 2, date: "08-Aug-2021", category: "Terms & Condition", content: "testing" },
        { id: 3, date: "30-Aug-2021", category: "Privacy Policy", content: "Privacy policy" },
        { id: 4, date: "03-Aug-2021", category: "Privacy Policy", content: "dhrmil" }
    ]
};

let currentTab = 'category';
let currentPage = 1;
let rowsPerPage = 10;

const tabTitles = {
    category: "Product Category",
    subcategory: "Product Sub Category",
    condition: "Product Condition",
    'wtb-price': "WTB Price Settings",
    'wts-price': "WTS Price Settings",
    uom: "Unit of Measure",
    designation: "Designation Settings",
    'inactive-status': "Inactive Status Options",
    'business-type': "Business Type Settings",
    'address-title': "Address Title Options",
    'support-category': "Support Category Settings",
    stamp: "Product Stamp",
    'invoice-setting': "Invoice Configuration",
    'terms-condition': "Terms & Conditions"
};

// ===== RENDER TABLE =====
function renderFieldsTable() {
    const container = document.getElementById('fields-table-container');
    const footer = document.getElementById('fields-footer');
    if (!container || !footer) return;

    const allData = fieldData[currentTab] || [];
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const pageItems = allData.slice(start, end);
    
    let headersHtml = '';
    if (currentTab === 'invoice-setting') {
        headersHtml = `
            <th style="width: 20%;">Start Date</th>
            <th style="width: 20%;">End Date</th>
            <th style="width: 20%;">Prefix Detail</th>
            <th style="width: 15%;">Invoice Number</th>
            <th style="width: 15%;">Suffix Detail</th>
        `;
    } else if (currentTab === 'terms-condition') {
        headersHtml = `
            <th style="width: 10%;">Sr.No</th>
            <th style="width: 15%;">Date</th>
            <th style="width: 25%;">Category</th>
            <th>Content</th>
        `;
    } else {
        headersHtml = `
            <th style="width: 10%;">#</th>
            <th>${currentTab === 'stamp' ? 'Stamp Name' : 'Name'}</th>
            ${currentTab === 'subcategory' ? '<th style="width: 25%;">Category</th>' : ''}
            ${currentTab === 'stamp' ? '<th style="width: 25%;">Image</th>' : ''}
        `;
    }

    let tableHtml = `
        <div class="table-scroll-wrap">
            <table class="data-table">
                <thead>
                    <tr>
                        ${headersHtml}
                        <th style="width: 80px; text-align: right;">Action</th>
                    </tr>
                </thead>
                <tbody>
    `;

    if (allData.length === 0) {
        tableHtml += `
            <tr>
                <td colspan="6" style="padding: 64px 32px; text-align: center;">
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
                        <div style="width: 56px; height: 56px; background: #f8fafc; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 1px solid #f1f5f9;">
                            <span class="material-icons-round" style="font-size: 28px; color: #cbd5e1;">folder_off</span>
                        </div>
                        <div style="color: #94a3b8; font-size: 0.9rem; font-weight: 600;">No data found in ${tabTitles[currentTab]}</div>
                    </div>
                </td>
            </tr>
        `;
    } else {
        tableHtml += pageItems.map((item, index) => {
            let rowHtml = '';
            if (currentTab === 'invoice-setting') {
                rowHtml = `
                    <td style="color: #64748b;">${item.startDate}</td>
                    <td style="color: #64748b;">${item.endDate}</td>
                    <td style="color: #64748b;">${item.prefix}</td>
                    <td style="color: #64748b;">${item.number}</td>
                    <td style="color: #64748b;">${item.suffix}</td>
                `;
            } else if (currentTab === 'terms-condition') {
                rowHtml = `
                    <td style="font-weight: 700; color: #64748b;">${item.id}</td>
                    <td style="font-weight: 600; color: #475569;">${item.date}</td>
                    <td style="font-weight: 700; color: #1e293b;">${item.category}</td>
                    <td style="color: #334155; max-width: 400px; font-size: 0.82rem; line-height: 1.5;">${item.content}</td>
                `;
            } else {
                rowHtml = `
                    <td style="font-weight: 700; color: #64748b;">${String(start + index + 1).padStart(2, '0')}</td>
                    <td style="font-weight: 800; color: #1e293b;">${item.name}</td>
                    ${currentTab === 'subcategory' ? `<td style="font-weight: 600; color: #475569;">${item.category}</td>` : ''}
                    ${currentTab === 'stamp' ? `<td><img src="${item.image}" style="width: 32px; height: 32px; border-radius: 50%; border: 1px solid #e2e8f0;"></td>` : ''}
                `;
            }

            return `
                <tr>
                    ${rowHtml}
                    <td style="text-align: right;">
                        <button class="header-icon-btn" style="border: none; background: transparent; padding: 4px; cursor: pointer;">
                            <span class="material-icons-round" style="font-size: 18px; color: #94a3b8;">edit</span>
                        </button>
                    </td>
                </tr>
            `;
        }).join('');
    }

    tableHtml += `
                </tbody>
            </table>
        </div>
    `;

    container.innerHTML = tableHtml;
    renderFooter(allData.length);
}

function renderFooter(total) {
    const footer = document.getElementById('fields-footer');
    const totalPages = Math.ceil(total / rowsPerPage);
    const start = total === 0 ? 0 : (currentPage - 1) * rowsPerPage + 1;
    const end = Math.min(currentPage * rowsPerPage, total);

    footer.style.padding = "16px 32px";
    footer.innerHTML = `
        <div style="font-size: 0.85rem; color: #94a3b8; font-weight: 600;">
            Showing <span style="color: #1e293b;">${start}-${end}</span> of <span style="color: #1e293b;">${total}</span>
        </div>
        
        <div style="display: flex; align-items: center; gap: 8px;">
            <button onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''} style="background: none; border: none; cursor: pointer; color: #94a3b8; display: flex; align-items: center; opacity: ${currentPage === 1 ? '0.3' : '1'};">
                <span class="material-icons-round" style="font-size: 20px;">chevron_left</span>
            </button>
            <div style="display: flex; gap: 4px;">
                ${Array.from({ length: Math.max(1, totalPages) }, (_, i) => i + 1).map(p => `
                    <button onclick="changePage(${p})" style="width: 28px; height: 28px; border: none; border-radius: 6px; font-weight: 700; font-size: 0.85rem; cursor: pointer; transition: all 0.2s; ${p === currentPage ? 'background: #4880FF; color: #fff;' : 'background: transparent; color: #64748b;'}">${p}</button>
                `).join('')}
            </div>
            <button onclick="changePage(${currentPage + 1})" ${currentPage === totalPages || totalPages === 0 ? 'disabled' : ''} style="background: none; border: none; cursor: pointer; color: #94a3b8; display: flex; align-items: center; opacity: ${currentPage === totalPages || totalPages === 0 ? '0.3' : '1'};">
                <span class="material-icons-round" style="font-size: 20px;">chevron_right</span>
            </button>
        </div>

        <div style="display: flex; align-items: center; gap: 12px;">
            <span style="font-size: 0.75rem; font-weight: 800; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px;">View</span>
            <div style="position: relative;">
                <select onchange="rowsPerPage=parseInt(this.value); currentPage=1; renderFieldsTable();" style="appearance: none; border: 1px solid #e2e8f0; border-radius: 8px; padding: 6px 32px 6px 12px; font-size: 0.85rem; font-weight: 800; color: #1e293b; cursor: pointer; outline: none; background: #fff;">
                    <option value="10" ${rowsPerPage === 10 ? 'selected' : ''}>10</option>
                    <option value="20" ${rowsPerPage === 20 ? 'selected' : ''}>20</option>
                    <option value="50" ${rowsPerPage === 50 ? 'selected' : ''}>50</option>
                </select>
                <span class="material-icons-round" style="position: absolute; right: 8px; top: 50%; transform: translateY(-50%); font-size: 16px; color: #94a3b8; pointer-events: none;">expand_more</span>
            </div>
        </div>
    `;
}

function changePage(p) {
    const totalPages = Math.ceil((fieldData[currentTab] || []).length / rowsPerPage);
    if (p < 1 || p > totalPages) return;
    currentPage = p;
    renderFieldsTable();
}

// ===== TAB SWITCHING =====
function switchTab(tabId) {
    currentTab = tabId;
    
    // Update active class
    document.querySelectorAll('.tab-item').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(`'${tabId}'`)) {
            btn.classList.add('active');
        }
    });

    document.getElementById('tab-title').textContent = tabTitles[tabId];
    renderFieldsTable();
}

// ===== MODAL LOGIC =====
function openAddModal() {
    const modal = document.getElementById('modal-container');
    const content = document.getElementById('modal-content');
    
    let modalTitle = `Add ${tabTitles[currentTab].replace('Product ', '')}`;
    if (currentTab === 'stamp') modalTitle = "Product Stamp";

    let bodyHtml = '';

    if (currentTab === 'subcategory') {
        bodyHtml = `
            <div style="display: flex; flex-direction: column; gap: 20px; padding: 24px 32px;">
                <div style="display: grid; grid-template-columns: 120px 1fr; align-items: center; gap: 16px;">
                    <label class="modal-label" style="margin-bottom: 0;">Name</label>
                    <input type="text" class="modal-input" placeholder="Enter Subcategory Name">
                </div>
                <div style="display: grid; grid-template-columns: 120px 1fr; align-items: center; gap: 16px;">
                    <label class="modal-label" style="margin-bottom: 0;">Category</label>
                    <select class="modal-input">
                        <option>Choose any one</option>
                        <option>Mobile</option>
                        <option>PC</option>
                        <option>Laptop</option>
                    </select>
                </div>
            </div>
        `;
    } else if (currentTab === 'stamp') {
        bodyHtml = `
            <div style="display: flex; flex-direction: column; gap: 24px; padding: 24px 32px;">
                <div style="display: grid; grid-template-columns: 120px 1fr; align-items: center; gap: 16px;">
                    <label class="modal-label" style="margin-bottom: 0;">Name</label>
                    <input type="text" class="modal-input" placeholder="Enter Stamp Name">
                </div>
                <div style="display: grid; grid-template-columns: 120px 1fr; align-items: flex-start; gap: 16px;">
                    <div style="width: 48px; height: 48px; background: #f1f5f9; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #94a3b8;">
                        <span class="material-icons-round">person</span>
                    </div>
                    <div>
                        <input type="file" id="stamp-file" style="display: none;">
                        <button onclick="document.getElementById('stamp-file').click()" style="padding: 6px 12px; background: #fff; border: 1px solid #e2e8f0; border-radius: 4px; font-size: 0.75rem; font-weight: 700; color: #475569; cursor: pointer;">Choose File</button>
                        <span style="font-size: 0.75rem; color: #94a3b8; margin-left: 8px;">No file chosen</span>
                    </div>
                </div>
            </div>
        `;
    } else if (currentTab === 'invoice-setting') {
        bodyHtml = `
            <div style="display: flex; flex-direction: column; gap: 20px; padding: 24px 32px;">
                <div style="display: grid; grid-template-columns: 120px 1fr; align-items: center; gap: 16px;">
                    <label class="modal-label" style="margin-bottom: 0;">Start Date</label>
                    <input type="date" class="modal-input">
                </div>
                <div style="display: grid; grid-template-columns: 120px 1fr; align-items: center; gap: 16px;">
                    <label class="modal-label" style="margin-bottom: 0;">End Date</label>
                    <input type="date" class="modal-input">
                </div>
                <div style="display: grid; grid-template-columns: 120px 1fr; align-items: center; gap: 16px;">
                    <label class="modal-label" style="margin-bottom: 0;">Prefix Detail</label>
                    <input type="text" class="modal-input" placeholder="Enter Prefix Detail">
                </div>
                <div style="display: grid; grid-template-columns: 120px 1fr; align-items: center; gap: 16px;">
                    <label class="modal-label" style="margin-bottom: 0;">Invoice Number</label>
                    <input type="number" class="modal-input" placeholder="Enter Invoice Number">
                </div>
                <div style="display: grid; grid-template-columns: 120px 1fr; align-items: center; gap: 16px;">
                    <label class="modal-label" style="margin-bottom: 0;">Suffix Detail</label>
                    <input type="text" class="modal-input" placeholder="Enter Suffix Detail">
                </div>
            </div>
        `;
    } else if (currentTab === 'terms-condition') {
        bodyHtml = `
            <div style="display: flex; flex-direction: column; gap: 20px; padding: 24px 32px;">
                <div style="display: grid; grid-template-columns: 120px 1fr; align-items: center; gap: 16px;">
                    <label class="modal-label" style="margin-bottom: 0;">Date</label>
                    <input type="date" class="modal-input">
                </div>
                <div style="display: grid; grid-template-columns: 120px 1fr; align-items: center; gap: 16px;">
                    <label class="modal-label" style="margin-bottom: 0;">Subject</label>
                    <select class="modal-input">
                        <option>Choose any one</option>
                        <option>Privacy Policy</option>
                        <option>Terms & Condition</option>
                    </select>
                </div>
                <div style="display: grid; grid-template-columns: 120px 1fr; align-items: flex-start; gap: 16px;">
                    <label class="modal-label" style="margin-top: 8px;">Content</label>
                    <div style="border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
                        <div style="background: #f8fafc; padding: 8px; border-bottom: 1px solid #e2e8f0; display: flex; gap: 8px; flex-wrap: wrap;">
                            <button style="padding: 4px; background: none; border: none; cursor: pointer; color: #64748b;"><span class="material-icons-round" style="font-size: 18px;">format_bold</span></button>
                            <button style="padding: 4px; background: none; border: none; cursor: pointer; color: #64748b;"><span class="material-icons-round" style="font-size: 18px;">format_italic</span></button>
                            <button style="padding: 4px; background: none; border: none; cursor: pointer; color: #64748b;"><span class="material-icons-round" style="font-size: 18px;">format_underlined</span></button>
                            <button style="padding: 4px; background: none; border: none; cursor: pointer; color: #64748b;"><span class="material-icons-round" style="font-size: 18px;">strikethrough_s</span></button>
                            <div style="width: 1px; height: 18px; background: #e2e8f0; margin: 0 4px;"></div>
                            <button style="padding: 4px; background: none; border: none; cursor: pointer; color: #64748b;"><span class="material-icons-round" style="font-size: 18px;">format_list_bulleted</span></button>
                            <button style="padding: 4px; background: none; border: none; cursor: pointer; color: #64748b;"><span class="material-icons-round" style="font-size: 18px;">format_list_numbered</span></button>
                            <div style="width: 1px; height: 18px; background: #e2e8f0; margin: 0 4px;"></div>
                            <button style="padding: 4px; background: none; border: none; cursor: pointer; color: #64748b;"><span class="material-icons-round" style="font-size: 18px;">image</span></button>
                            <button style="padding: 4px; background: none; border: none; cursor: pointer; color: #64748b;"><span class="material-icons-round" style="font-size: 18px;">link</span></button>
                        </div>
                        <textarea class="modal-input" style="border: none; border-radius: 0; min-height: 200px; resize: vertical;" placeholder="Insert text here..."></textarea>
                    </div>
                </div>
            </div>
        `;
    } else {
        bodyHtml = `
            <div style="display: flex; flex-direction: column; gap: 20px; padding: 24px 32px;">
                <div style="display: grid; grid-template-columns: 120px 1fr; align-items: center; gap: 16px;">
                    <label class="modal-label" style="margin-bottom: 0;">Name</label>
                    <input type="text" class="modal-input" placeholder="Enter Name">
                </div>
            </div>
        `;
    }

    content.innerHTML = `
        <div class="modal-header" style="padding: 20px 32px; border-bottom: 1px solid #f1f5f9; display: flex; justify-content: space-between; align-items: center;">
            <h2 style="font-size: 1.1rem; font-weight: 700; color: #1e293b; font-family: 'Nunito Sans', sans-serif;">${modalTitle}</h2>
            <button onclick="closeModal()" style="background: none; border: none; cursor: pointer; color: #94a3b8; display: flex; align-items: center; justify-content: center;">
                <span class="material-icons-round" style="font-size: 24px;">close</span>
            </button>
        </div>
        ${bodyHtml}
        <div class="modal-footer" style="padding: 24px 32px; background: #fff; border-top: 1px solid #f1f5f9; display: flex; justify-content: flex-end; gap: 16px;">
            <button onclick="closeModal()" style="padding: 10px 32px; background: #e2e8f0; border: none; border-radius: 8px; color: #475569; font-weight: 700; font-size: 0.95rem; cursor: pointer; min-width: 100px;">Close</button>
            <button onclick="closeModal()" style="padding: 10px 32px; background: #4880FF; border: none; border-radius: 8px; color: #fff; font-weight: 700; font-size: 0.95rem; cursor: pointer; min-width: 100px; box-shadow: 0 4px 12px rgba(72, 128, 255, 0.25);">Save</button>
        </div>
    `;

    modal.classList.remove('hidden');
}

function closeModal() {
    document.getElementById('modal-container').classList.add('hidden');
}

// ===== INIT =====
renderFieldsTable();

document.addEventListener('DOMContentLoaded', () => {
    renderFieldsTable();
    // Repeated passes to ensure rendering after heavy script loads
    setTimeout(renderFieldsTable, 100);
    setTimeout(renderFieldsTable, 500);
    setTimeout(renderFieldsTable, 1000);
});
