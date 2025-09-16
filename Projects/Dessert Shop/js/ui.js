export default class UI {
  constructor(cart, products) {
    this.cart = cart;
    this.products = products;
    this.productsContainer = document.getElementById("products");
    this.cartContainer = document.getElementById("cart");
  }

  renderProducts() {
    this.productsContainer.innerHTML = "";
    this.products.forEach((product) => {
      const card = document.createElement("div");
      card.classList.add("product-card");
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image" />
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">$${product.price.toFixed(2)}</p>
        <button class="add-btn">Add to Cart</button>
      `;

      const btn = card.querySelector(".add-btn");
      btn.addEventListener("click", () => {
        this.cart.addItem(product);
        this.renderCart();
      });

      this.productsContainer.appendChild(card);
    });
  }

  renderCart() {
    const items = this.cart.getItems();
    const total = this.cart.getTotal().toFixed(2);
    const count = this.cart.getItemCount();

    this.cartContainer.innerHTML = `
    <h3>Your Cart (${count})</h3>
    <ul class="cart-items">
      ${items
        .map(
          (item) => `
        <li class="cart-item">
          <span>${item.name} (${item.quantity})</span>
          <div class="cart-controls">
            <button class="decrease-btn" data-id="${item.id}">−</button>
            <button class="increase-btn" data-id="${item.id}">+</button>
            <button class="remove-btn" data-id="${item.id}">🗑</button>
          </div>
        </li>
      `
        )
        .join("")}
    </ul>
    <p class="order-total">
      Order Total<br>
      <strong class="total-price-style">$${total}</strong>
    </p>

    <form id="order-form" class="order-form">
      <input type="text" id="customer-name" placeholder="Enter your name" required class="order-input" />
      <button type="submit" class="confirm-btn">Confirm Order</button>
    </form>

    <p class="note">Thank you for choosing us</p>
  `;

    this.cartContainer.querySelectorAll(".increase-btn").forEach((btn) =>
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        const product = this.products.find((p) => p.id == id);
        this.cart.addItem(product);
        this.renderCart();
      })
    );

    this.cartContainer.querySelectorAll(".decrease-btn").forEach((btn) =>
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        this.cart.decreaseItem(id);
        this.renderCart();
      })
    );

    this.cartContainer.querySelectorAll(".remove-btn").forEach((btn) =>
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        this.cart.removeItem(id);
        this.renderCart();
      })
    );

    const orderForm = this.cartContainer.querySelector("#order-form");
    orderForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nameInput = this.cartContainer.querySelector("#customer-name");
      const name = nameInput.value.trim();

      if (!name) {
        alert("Please enter your name to confirm the order.");
        return;
      }

      alert(`Thank you, ${name}! Your order for $${total} has been placed.`);
      this.cart.clearCart();
      this.renderCart();
    });
  }
}
