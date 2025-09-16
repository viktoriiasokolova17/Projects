import { Sidebar } from "./sidebar.js";
import { CategoryList } from "./categories.js";
import { ProductCards } from "./productCards.js";
import { RecentOrders } from "./recentOrders.js";


export function initApp(data) {
  new Sidebar(data.user, data.balance).render();
  new CategoryList(data.categories).render();
  new ProductCards(data.popularDishes).render();
  new RecentOrders(data.recentOrders).render();
}
