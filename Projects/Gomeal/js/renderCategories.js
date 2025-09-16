export function renderCategories(categories) {
  const catWrapper = document.querySelector(".category-wrapper");
  catWrapper.innerHTML = "";
  categories.forEach(cat => {
    catWrapper.innerHTML += `
      <div class="category-card">
        <img src="${cat.icon}" alt="${cat.name}">
        <span>${cat.name}</span>
      </div>
    `;
  });
}
