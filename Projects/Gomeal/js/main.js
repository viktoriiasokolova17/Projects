import { loadData } from './fetchData.js';
import { initApp } from './appInit.js';
import { MenuList } from './left-menu.js';
import { RecentOrders } from './recentOrders.js';


loadData('data.json').then(data => {
  initApp(data);
  const menuList = new MenuList(data.menuItems);
  menuList.render();
});

const orders = new RecentOrders(data.recentOrders);
orders.render();
