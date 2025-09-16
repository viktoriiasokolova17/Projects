export class MenuList {
  constructor(menuItems) {
    this.menuItems = menuItems;
    this.container = document.querySelector('.menu-list');
  }

  render() {
    if (!this.container) return;
    this.container.innerHTML = '';
    this.menuItems.forEach((item, index) => {
      const div = document.createElement('div');
      div.className = 'menu-item';
      if (index === 0) div.classList.add('active'); // 👈 Активний перший
      div.innerHTML = item.icon.endsWith('.svg')
        ? `<img src="${item.icon}" alt="${item.title}" class="menu-icon" /> <span>${item.title}</span>`
        : `<span class="menu-icon">${item.icon}</span> <span>${item.title}</span>`;
      this.container.appendChild(div);
    });
  }
}
