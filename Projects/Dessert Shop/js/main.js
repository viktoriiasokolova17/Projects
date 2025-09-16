import { ProductService } from "./productService.js";
import Cart from "./cart.js";
import UI from "./ui.js";

async function init() {
  const products = await ProductService.loadProducts();
  const cart = new Cart();
  const ui = new UI(cart, products);
  ui.renderProducts();
  ui.renderCart();
}

init();
