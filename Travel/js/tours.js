/*Tours ******************************************************/
document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.like-btn');
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const tourCards = document.querySelectorAll('.tour-card');
  
    likeButtons.forEach(button => {
      const icon = button.querySelector('.material-icons');
      const tourId = button.closest('.tour-card').getAttribute('data-id');
      
      if (favorites.includes(tourId)) {
        icon.textContent = 'favorite';
        button.classList.add('active');
      }
  
      button.addEventListener('click', () => {
        if (favorites.includes(tourId)) {
          favorites = favorites.filter(id => id !== tourId);
          icon.textContent = 'favorite_border';
          button.classList.remove('active');
        } else {
          favorites.push(tourId); 
          icon.textContent = 'favorite';
          button.classList.add('active');
        }
        localStorage.setItem('favorites', JSON.stringify(favorites)); 
      });
    });
  
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
  
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active'); 
  
        tourCards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  });
  