export class CategoryList {
  constructor(categories) {
    this.categories = categories;
    this.container = document.querySelector('.category-list');
  }

  render() {
    if (!this.container) return;
    this.container.innerHTML = '';
    this.categories.forEach(cat => {
      const div = document.createElement('div');
      div.className = 'category';
      div.innerHTML = cat.icon.endsWith('.svg')
        ? `<img src="${cat.icon}" alt="${cat.name}" /> ${cat.name}`
        : `<span>${cat.icon}</span> ${cat.name}`;
      this.container.appendChild(div);
    });
  }
}
