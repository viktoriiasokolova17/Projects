export function renderSidebar(menuItems) {
  const sidebar = document.querySelector(".sidebar-menu");
  sidebar.innerHTML = "";
  menuItems.forEach(item => {
    sidebar.innerHTML += `
      <li>
        <img src="${item.icon}" alt="${item.title} icon" class="menu-icon">
        <span>${item.title}</span>
      </li>
    `;
  });
}
