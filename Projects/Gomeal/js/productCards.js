export class ProductCards {
  constructor(products) {
    this.products = products;
    this.container = document.querySelector(".product-cards");
  }

  render() {
    if (!this.container) return;
    this.container.innerHTML = "";
    this.products.forEach((p) => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
      <img src="${p.image}" alt="${p.title}" class="product-image">
      <h3 class="product-title">${p.title}</h3>
      <div class="rating">${"★".repeat(p.rating)}</div>
      <p class="product-price"><span>$</span>${p.price.toFixed(2)}</p>
      <button class="add-button">+</button>
    `;

      this.container.appendChild(card);
    });
  }
}
