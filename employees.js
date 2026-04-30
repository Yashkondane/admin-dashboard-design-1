const employees = [
  { id: 1, name: "Leslie Alexander", role: "Sales Representative", phone: "(406) 555-0120", email: "leslie@example.com", status: "Active", statusClass: "active", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 2, name: "Cameron Williamson", role: "Account Manager", phone: "(505) 555-0125", email: "willia@example.com", status: "On Duty", statusClass: "suspended", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 3, name: "Wade Warren", role: "Business Analyst", phone: "(219) 555-0115", email: "warren@example.com", status: "Working", statusClass: "suspended", avatar: "https://randomuser.me/api/portraits/men/45.jpg" },
  { id: 4, name: "Savannah Nguyen", role: "Marketing Coordinator", phone: "(319) 555-0118", email: "savan@example.com", status: "On Delivery", statusClass: "inactive", avatar: "https://randomuser.me/api/portraits/women/68.jpg" },
  { id: 5, name: "Esther Howard", role: "Operations Manager", phone: "(319) 555-0115", email: "esther@example.com", status: "Leading", statusClass: "enterprise", avatar: "https://randomuser.me/api/portraits/women/22.jpg" },
  { id: 6, name: "Bessie Cooper", role: "Supply Chain Coordinator", phone: "(307) 555-0133", email: "bessie@example.com", status: "Team Player", statusClass: "business", avatar: "https://randomuser.me/api/portraits/women/47.jpg" },
  { id: 7, name: "Wade Warren", role: "Training and Development", phone: "(406) 555-0120", email: "warren@example.com", status: "Top Performer", statusClass: "starter", avatar: "https://randomuser.me/api/portraits/men/62.jpg" },
  { id: 8, name: "Ralph Edwards", role: "Finance Manager", phone: "(201) 555-0124", email: "ralph@example.com", status: "Project Star", statusClass: "business", avatar: "https://randomuser.me/api/portraits/men/84.jpg" },
  { id: 9, name: "Leslie Alexander", role: "Product Manager", phone: "(205) 555-0100", email: "leslie@example.com", status: "Best Contributor", statusClass: "starter", avatar: "https://randomuser.me/api/portraits/women/91.jpg" },
];

function renderGrid() {
  const grid = document.getElementById('employee-grid');
  grid.innerHTML = employees.map(e => `
    <div class="employee-card">
      <button class="employee-more"><span class="material-icons-round">more_vert</span></button>
      <div class="employee-card-header">
        <img src="${e.avatar}" alt="${e.name}" class="employee-avatar">
        <div class="employee-info">
          <div class="employee-name">${e.name}</div>
          <div class="employee-role">${e.role}</div>
        </div>
      </div>
      <div class="employee-contact">
        <div class="contact-row">
          <span class="material-icons-round">call</span> ${e.phone}
        </div>
        <div class="contact-row">
          <span class="material-icons-round">mail_outline</span> ${e.email}
        </div>
      </div>
      <div class="employee-card-footer">
        <span class="employee-badge ${e.statusClass}">${e.status}</span>
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderGrid();
  
  document.querySelectorAll('.nav-item:not(.nav-toggle):not(.logout-item)').forEach(item => {
    item.addEventListener('click', () => {
      // Allow standard link navigation for Employees/Members
    });
  });
});
