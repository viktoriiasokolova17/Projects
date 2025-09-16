export class ProductService {
  static async loadProducts() {
    try {
      const res = await fetch("products.json");
      const products = await res.json();
      return products;
    } catch (error) {
      console.error("Error loading products:", error);
      return [];
    }
  }
}
