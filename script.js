// Data arrays
const menuItems = [
  {
    t: "Zucchini Chimichurri Bowl",
    k: ["GF", "V", "Wood-Fired"],
    price: "₹299",
    img: "https://cdn.shopify.com/s/files/1/1904/8475/files/Grilled_Zucchini_Chimichurri.jpg?v=1678507900",
  },
  {
    t: "Smoky Mango Salsa Pizza",
    k: ['12"', "Vegan Mozz"],
    price: "₹449",
    img: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg",
  },
  {
    t: "Crispy Tofu + Peas",
    k: ["Protein-Packed"],
    price: "₹259",
    img: "https://www.thissavoryvegan.com/wp-content/uploads/2024/02/Gochujang-Tofu-Snap-Peas-6.jpg",
  },
  {
    t: "Pink Beet Hummus",
    k: ["Shareable"],
    price: "₹199",
    img: "https://wavesinthekitchen.com/wp-content/uploads/2018/09/Roasted-Beet-Hummus-2-of-8-1.jpg",
  },
  {
    t: "Sun-Dried Tomato Pasta",
    k: ["House Pesto"],
    price: "₹329",
    img: "https://www.servingdumplings.com/wp-content/uploads/2020/10/eggplant-sun-dried-tomato-pasta_insta-6bdcbccc.jpg",
  },
  {
    t: "Corn & Feta Salad",
    k: ["Single-Serve"],
    price: "₹179",
    img: "https://drizzleanddip.com/wp-content/uploads/2025/01/7O9A6251.jpg",
  },
];

const blogPosts = [
  {
    t: "Liquid Gold: Herb Ghee",
    s: "How we finish pizzas & bowls for shine and depth.",
    img: "https://miro.medium.com/v2/resize:fit:1000/1*FsjIW13T_mMTlDDZEjMmRg.jpeg",
  },
  {
    t: "Dough Diaries: 72-hour Rise",
    s: "A simple process for cloud-soft crust.",
    img: "https://somuchfoodblog.com/wp-content/uploads/2018/05/72-hour-pizza7.jpg",
  },
  {
    t: "Our Pantry Essentials",
    s: "The jars, tins, and spices we can't live without.",
    img: "https://cdn.shopify.com/s/files/1/0581/8230/3937/files/1_81ede7fc-1c0a-4d32-baf2-2d5618120da2.png?v=1724915852",
  },
];

const collections = [
  "Zucchini Compilation",
  "Best of Tofu",
  "Single-Serve",
  "Maya's Faves",
  "Community Favorites",
  "All Recipes",
];

const features = [
  {
    title: "Smashed Brussels",
    subtitle: "with maple miso",
    images: ["https://www.thissavoryvegan.com/wp-content/uploads/2021/11/crispy-vegan-smashed-brussels-sprouts-3.jpg"],
  },
  {
    title: "Red Lentil Pink Pasta",
    subtitle: "extra chili crunch",
    images: ["https://healthmylifestyle.com/wp-content/uploads/2023/03/beet-pasta-recipe-9.jpg"],
  },
  {
    title: "High-Heat Cauliflower",
    subtitle: "scallion aioli",
    images: ["https://www.177milkstreet.com/assets/site/Recipes/_large/Roasted-Cauliflower-Tahini-Lemon-Vertical.jpg"],
  },
  {
    title: "Spinach Paneer Toast",
    subtitle: "herbaceous kick",
    images: ["https://www.cookshideout.com/wp-content/uploads/2017/06/Paneer-Sandwich4S.jpg"],
  },
];

const communityImages = [
  "https://i0.wp.com/olivesandlamb.com/wp-content/uploads/2024/05/Chicken-Parmesan-Pizza-10-4x5-1.jpg?resize=819%2C1024&ssl=1",
  "https://hips.hearstapps.com/hmg-prod/images/homemade-pizza-index-65b927319ae68.jpg?crop=0.502xw:1.00xh;0.00321xw,0&resize=1200:",
  "https://nypizzamansfieldma.com/wp-content/uploads/2024/04/pizza-restaurants-mansfield-ma-1.png",
  "https://originalhouseofpizza.com/wp-content/uploads/2024/05/3.jpg",
  "https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*",
  "https://st3.idealista.it/news/archivie/styles/amp_1200x675_16_9/public/2022-10/media/image/aurelien-lemasson-theobald-x00czbt4dfk-unsplash.jpg?VersionId=WC87TGR04fEsJ3LSiPmluKIPJoC6.XwP&itok=bLz9s9I8",
];

// Utility functions
function createElement(tag, className = '', content = '') {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (content) element.innerHTML = content;
  return element;
}

function createPill(text) {
  return `<span class="inline-flex items-center rounded-full border border-gray-400/20 bg-cream/70 px-3 py-1 text-xs font-medium tracking-wide text-forest shadow-sm">${text}</span>`;
}

function createCard(content, hover = true) {
  const hoverClass = hover ? 'card' : '';
  return `<div class="rounded-3xl border border-gray-400/30 bg-cream shadow-lg p-5 fade-in ${hoverClass}">${content}</div>`;
}

// Render functions
function renderMenuItems() {
  const grid = document.getElementById('menu-grid');
  menuItems.forEach(item => {
    const pills = item.k.map(k => createPill(k)).join('');
    const cardContent = `
      <div class="aspect-[4/3] rounded-2xl overflow-hidden border border-gray-400/30">
        <img src="${item.img}" alt="${item.t}" class="w-full h-full object-cover" loading="lazy">
      </div>
      <div class="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 class="font-display text-xl text-forest">${item.t}</h3>
          <div class="mt-2 flex flex-wrap gap-2">${pills}</div>
        </div>
        <span class="rounded-full bg-forest text-cream px-3 py-1 text-sm font-semibold shadow">${item.price}</span>
      </div>
    `;
    grid.innerHTML += createCard(cardContent);
  });
}

function renderCollections() {
  const grid = document.getElementById('collections-grid');
  collections.forEach((label, i) => {
    const delay = i * 50;
    grid.innerHTML += `
      <a href="#features" class="font-display text-3xl sm:text-5xl md:text-6xl text-forest hover:text-tomato transition-colors fade-in" style="animation-delay: ${delay}ms;">
        ${label}
      </a>
    `;
  });
}

function renderFeatures() {
  const grid = document.getElementById('features-grid');
  features.forEach(feature => {
    const cardContent = `
      <div class="aspect-[4/5] rounded-2xl overflow-hidden border border-gray-400/30">
        <div class="w-full h-full flex overflow-x-auto snap-x snap-mandatory">
          ${feature.images.map((src, idx) => `
            <img src="${src}" alt="${feature.title} ${idx + 1}" class="w-full h-full object-cover flex-shrink-0 snap-center" loading="lazy">
          `).join('')}
        </div>
      </div>
      <h3 class="mt-4 font-display text-xl text-forest">${feature.title}</h3>
      <p class="text-ink/70 text-sm">${feature.subtitle}</p>
      <div class="mt-4 flex items-center justify-between">
        <a class="text-forest/80 hover:text-tomato" href="#">View</a>
        <button class="rounded-full bg-tomato text-cream px-3 py-1 text-sm shadow">Save</button>
      </div>
    `;
    grid.innerHTML += createCard(cardContent);
  });
}

function renderCommunity() {
  const grid = document.getElementById('community-grid');
  communityImages.forEach((src, i) => {
    const cardContent = `
      <div class="aspect-square rounded-2xl overflow-hidden border border-gray-400/30">
        <img src="${src}" alt="Pizza Night ${i + 1}" class="w-full h-full object-cover" loading="lazy">
      </div>
    `;
    grid.innerHTML += createCard(cardContent);
  });
}

function renderBlogPosts() {
  const container = document.getElementById('blog-posts');
  blogPosts.forEach(post => {
    const cardContent = `
      <div class="aspect-[16/7] rounded-2xl overflow-hidden border border-gray-400/30">
        <img src="${post.img}" alt="${post.t}" class="w-full h-full object-cover" loading="lazy">
      </div>
      <h3 class="mt-4 font-display text-2xl text-forest">${post.t}</h3>
      <p class="text-ink/75">${post.s}</p>
      <div class="mt-4 flex items-center justify-between">
        <a href="#" class="text-forest/80 hover:text-tomato">Read more</a>
        ${createPill('5 min')}
      </div>
    `;
    container.innerHTML += createCard(cardContent);
  });
}

// Animation and scroll effects
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
  let ticking = false;

  function updateParallax() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.3;
    
    if (heroParallax && scrolled < window.innerHeight) {
      heroParallax.style.transform = `translateY(${rate}px)`;
    }
    
    ticking = false;
  }

  function requestParallaxUpdate() {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestParallaxUpdate);
}

// Form handling
function handleFormSubmission() {
  const form = document.querySelector('form[aria-label="Subscribe form"]');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value;
    if (email) {
      alert(`Thank you for subscribing with ${email}! We'll be in touch soon.`);
      form.reset();
    }
  });
}

// Smooth scroll for navigation links
function handleSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  renderMenuItems();
  renderCollections();
  renderFeatures();
  renderCommunity();
  renderBlogPosts();
  
  handleScrollAnimations();
  handleParallaxEffect();
  handleFormSubmission();
  handleSmoothScroll();

  // Add a small delay to trigger animations
  setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach(el => {
      el.classList.add('visible');
    });
  }, 100);
});

// Handle window resize for responsive adjustments
window.addEventListener('resize', function() {
  // Re-calculate any size-dependent animations if needed
});