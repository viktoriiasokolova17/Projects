export default class Cart {
  constructor() {
    this.items = [];
  }

  addItem(product) {
    const existing = this.items.find((item) => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  getItemCount() {
    return this.items.reduce((count, item) => count + item.quantity, 0);
  }

  getItems() {
    return this.items;
  }
  decreaseItem(id) {
    const item = this.items.find((i) => i.id == id);
    if (item) {
      item.quantity--;
      if (item.quantity <= 0) {
        this.removeItem(id);
      }
    }
  }

  removeItem(id) {
    this.items = this.items.filter((item) => item.id != id);
  }

  clearCart() {
    this.items = [];
  }
}
