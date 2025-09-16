export function renderPopularDishes(dishes) {
  const dishWrapper = document.querySelector(".popular-dishes");
  dishWrapper.innerHTML = "";
  dishes.forEach(dish => {
    dishWrapper.innerHTML += `
      <div class="dish-card">
        <span class="discount">${dish.discount} Off</span>
        <img src="${dish.image}" alt="${dish.title}">
        <h4>${dish.title}</h4>
        <p>Rating: ${dish.rating}</p>
        <p>Price: $${dish.price.toFixed(2)}</p>
        <button class="add-btn">+</button>
      </div>
    `;
  });
}
