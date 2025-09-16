export class RecentOrders {
  constructor(orders) {
    this.orders = orders;
    this.container = document.querySelector('.recent-orders');
  }

  render() {
    if (!this.container) return;
    this.container.innerHTML = '';
    this.orders.forEach(o => {
      const card = document.createElement('div');
      card.className = 'order-card';
      card.innerHTML = `
        <img src="${o.image}" alt="${o.title}" class="order-image">
        <h3 class="order-title">${o.title}</h3>
        <p class="order-price"><span>$</span>${o.price.toFixed(2)}</p>
        <p class="order-meta">${o.distance} • ${o.time}</p>
      `;
      this.container.appendChild(card);
    });
  }
}
