// Data for Menu Items
const menuItems = [
  {
    t: "Classic Margherita",
    k: ["Wood-Fired", "Vegetarian", "Classic"],
    price: "₹399",
    img: "./images/Margherita.jpg",
  },
  {
    t: "Pepperoni Feast",
    k: ["Wood-Fired", "Spicy", "Meat"],
    price: "₹549",
    img: "./images/Pepperoni.jpg",
  },
  {
    t: "Veggie Supreme",
    k: ["Plant-Based", '12"', "Hearty"],
    price: "₹489",
    img: "./images/veggie.jpg",
  },
  {
    t: "BBQ Chicken Pizza",
    k: ["Wood-Fired", "Smoky", "Chicken"],
    price: "₹579",
    img: "./images/BBQ-chiken.jpg",
  },
  {
    t: "Four Cheese Delight",
    k: ["Vegetarian", "Cheesy", '12"'],
    price: "₹529",
    img: "./images/four-chees.jpg",
  },
  {
    t: "Spicy Italian Sausage",
    k: ["Hot!", "Meat", "Wood-Fired"],
    price: "₹549",
    img: "./images/Italian-sausage.jpg",
  },
  {
    t: "Garlic Breadsticks",
    k: ["Shareable", "Starter", "Garlic"],
    price: "₹199",
    img: "./images/Garlic-Bread.jpg",
  },
  {
    t: "Caprese Salad",
    k: ["Fresh", "Vegetarian", "Salad"],
    price: "₹299",
    img: "./images/caprese-salad.jpg",
  },
  {
    t: "Classic Caesar Salad",
    k: ["Salad", "Chicken", "Starter"],
    price: "₹329",
    img: "./images/classic-salad.jpg",
  },
  {
    t: "Soda and Soft Drinks",
    k: ["Beverages", "Cold"],
    price: "₹99",
    img: "./images/drinks.jpg",
  },
  {
    t: "Tiramisu Dessert",
    k: ["Dessert", "Sweet", "Classic"],
    price: "₹249",
    img: "./images/desert.jpg",
  },
];

// Data for Gallery Images
const galleryImages = [
  "./images/gallary-1.jpg",
  "./images/gallary-2.jpg",
  "./images/gallary-3.jpg",
  "./images/gallary-4.jpg",
  "./images/gallary-5.jpg",
  "./images/gallary-6.jpg"
];

// ----- RENDER FUNCTIONS -----

function renderMenuItems() {
  const grid = document.getElementById('menu-grid');
  if (!grid) return;
  grid.innerHTML = '';
  menuItems.forEach(item => {
    const pills = item.k.map(k => `
      <span class="inline-flex items-center rounded-full border border-gray-300 bg-cream/80 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-forest shadow-sm mr-1 mb-1">
        ${k}
      </span>
    `).join('');

    const cardContent = `
      <div class="flex-shrink-0 w-56 rounded-xl border border-gray-300 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
        <div class="aspect-[4/3] overflow-hidden rounded-t-xl">
          <img src="${item.img}" alt="${item.t}" class="w-full h-full object-cover" loading="lazy" />
        </div>
        <div class="p-4 flex flex-col justify-between">
          <h3 class="font-display text-lg font-semibold text-forest mb-1 truncate" title="${item.t}">${item.t}</h3>
          <div class="flex flex-wrap mb-2">${pills}</div>
          <span class="self-start rounded-full bg-forest text-cream px-3 py-1 text-sm font-semibold shadow-md">
            ${item.price}
          </span>
        </div>
      </div>
    `;
    grid.insertAdjacentHTML('beforeend', cardContent);
  });
}

function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;
  grid.innerHTML = '';
  galleryImages.forEach((src, i) => {
    const card = document.createElement('div');
    card.className = "rounded-3xl border border-gray-400/30 bg-cream shadow-lg p-5 fade-in card cursor-pointer";
    card.setAttribute('data-src', src);
    card.innerHTML = `
      <div class="aspect-square rounded-2xl overflow-hidden border border-gray-400/30">
        <img src="${src}" alt="Pizzarea Gallery ${i + 1}" class="w-full h-full object-cover pointer-events-none" loading="lazy">
      </div>
    `;
    grid.appendChild(card);
  });
}

// ----- EVENT HANDLERS -----

function handleScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '-50px'
  });
  elements.forEach(el => observer.observe(el));
}

function handleParallaxEffect() {
  const heroParallax = document.querySelector('.hero-parallax');
  if (!heroParallax) return;
  let ticking = false;
  
  function updateParallax() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.3;
    if (scrolled < window.innerHeight) {
      heroParallax.style.transform = `translateY(${rate}px)`;
    }
    ticking = false;
  }
  
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  });
}

function handleReservationForm() {
  const reservationForm = document.getElementById('reservation-form');
  if (!reservationForm) return;
  
  const formResponse = document.getElementById('form-response');
  reservationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if (reservationForm.checkValidity()) {
      formResponse.textContent = 'Thank you for your reservation! We will contact you shortly.';
      formResponse.classList.remove('hidden');
      reservationForm.reset();
      setTimeout(() => {
        formResponse.classList.add('hidden');
      }, 5000);
    } else {
      reservationForm.reportValidity();
    }
  });
}

function handleSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        const headerOffset = 80; // height of the sticky nav bar
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });
}

// ----- MAIN EXECUTION -----

document.addEventListener('DOMContentLoaded', function() {
  // Render dynamic content
  renderMenuItems();
  renderGallery();

  // Initialize event handlers
  handleScrollAnimations();
  handleParallaxEffect();
  handleReservationForm();
  handleSmoothScroll();
});