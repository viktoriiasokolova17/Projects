const tours = {
    alps: {
        name: "Alps Tour",
        price: 1900
    },
    bahamas: {
        name: "Bahamas Tour",
        price: 2500
    },
    barcelona: {
        name: "Barcelona Tour",
        price: 2400
    },
    berlin: {
        name: "Berlin Tour",
        price: 2150
    },
    borabora: {
        name: "Bora Bora Tour",
        price: 1600
    },
    hawaii: {
        name: "Hawaii Tour",
        price: 2600
    },
    himalayas: {
        name: "Himalayas Tour",
        price: 2100
    },
    iceland: {
        name: "Iceland Tour",
        price: 2100
    },
    kyoto: {
        name: "Kyoto Tour",
        price: 1800
    },
    maldives: {
        name: "Maldives Tour",
        price: 2900
    },
    newyork: {
        name: "New York",
        price: 2700
    },
    paris: {
        name: "Paris Tour",
        price: 2500
    },
    rockymountains: {
        name: "Rocky Mountains Tour",
        price: 1600
    },
    rome: {
        name: "Rome Tour",
        price: 2050
    },
    sahara: {
        name: "Sahara Tour",
        price: 3000
    },
    santorini: {
        name: "Santorini Tour",
        price: 3000
    },
    sydney: {
        name: "Sydney Tour",
        price: 2450
    },
    tokyo: {
        name: "Tokyo Tour",
        price: 2100
    },
   
};



/* Modal book tour ************************************* */

const modal = document.getElementById("reservation-modal");
const closeModal = document.querySelector(".reservation-modal-close");
const modalTitle = document.querySelector(".reservation-h1");
const totalPriceElement = document.getElementById('total-price');
const reservationPeople = document.getElementById('reservation-people');

function openModal(tourKey) {
    const tour = tours[tourKey];
    if (tour) {
        modalTitle.textContent = `${tour.name} - $${tour.price}`;
        totalPriceElement.textContent = `Total Price: $${tour.price}`;
        modal.style.display = "block";
    }
}

document.querySelectorAll('.btn-book').forEach(button => {
    button.addEventListener('click', function() {
        const tourKey = this.getAttribute('data-tour');
        openModal(tourKey);
    });
});


closeModal.addEventListener("click", function() {
    modal.style.display = "none";
});


window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


function updateTotalPrice() {
    const numberOfPeople = parseInt(reservationPeople.value, 10);
    const tourPrice = parseFloat(modalTitle.textContent.split(' - $')[1]);
    const totalPrice = tourPrice * numberOfPeople;
    totalPriceElement.textContent = `Total Price: $${totalPrice}`;
}


reservationPeople.addEventListener('change', updateTotalPrice);

/* Form validation (Book tour) */
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reservation-form');
    
    form.addEventListener('submit', function(event) {
        let valid = true;

        const nameError = document.getElementById('name-error');
        const phoneError = document.getElementById('phone-error');
        const emailError = document.getElementById('email-error');

        nameError.textContent = '';
        phoneError.textContent = '';
        emailError.textContent = '';

        const fullName = form.querySelector('#reservation-full-name').value.trim();
        const phone = form.querySelector('#reservation-phone').value.trim();
        const email = form.querySelector('#reservation-email').value.trim();

        const namePattern = /^[A-Za-z\s\-]+$/;
        if (!namePattern.test(fullName)) {
            nameError.textContent = 'Full name can only contain letters, spaces, and hyphens';
            valid = false;
        }

        const phonePattern = /^[0-9\s\-\+\(\)]+$/;
        if (!phonePattern.test(phone)) {
            phoneError.textContent = 'Please enter a valid phone number';
            valid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            emailError.textContent = 'Please enter a valid email address';
            valid = false;
        }

        if (!valid) {
            event.preventDefault();
        }
    });
});
