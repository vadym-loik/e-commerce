console.log("Script is working!!!");

// dynamically set the year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// an array of product objects
const products = [
  {
    image: "assets/nintendo-6932787_1280.jpg",
    title: "Nintendo - Game Boy",
    price: 150.0,
    description: "A classic gaming console.",
  },
  {
    image: "assets/video-game-console-2202546_1280.jpg",
    title: "Sega Genesis",
    price: 120.0,
    description: "Retro gaming at its best.",
  },
  {
    image: "assets/xbox-7986823_1280.jpg",
    title: "Xbox Series X",
    price: 479.99,
    description: "Power your dreams.",
  },
  {
    image: "assets/nintendo-6932787_1280.jpg",
    title: "Nintendo - Game Boy",
    price: 150.0,
    description: "A classic gaming console.",
  },
  {
    image: "assets/video-game-console-2202546_1280.jpg",
    title: "Sega Genesis",
    price: 120.0,
    description: "Retro gaming at its best.",
  },
  {
    image: "assets/xbox-7986823_1280.jpg",
    title: "Xbox Series X",
    price: 479.99,
    description: "Power your dreams.",
  },
  {
    image: "assets/nintendo-6932787_1280.jpg",
    title: "Nintendo - Game Boy",
    price: 150.0,
    description: "A classic gaming console.",
  },
  {
    image: "assets/video-game-console-2202546_1280.jpg",
    title: "Sega Genesis",
    price: 120.0,
    description: "Retro gaming at its best.",
  },
  {
    image: "assets/xbox-7986823_1280.jpg",
    title: "Xbox Series X",
    price: 479.99,
    description: "Power your dreams.",
  },
  {
    image: "assets/nintendo-6932787_1280.jpg",
    title: "Nintendo - Game Boy",
    price: 150.0,
    description: "A classic gaming console.",
  },
  {
    image: "assets/video-game-console-2202546_1280.jpg",
    title: "Sega Genesis",
    price: 120.0,
    description: "Retro gaming at its best.",
  },
  {
    image: "assets/xbox-7986823_1280.jpg",
    title: "Xbox Series X",
    price: 479.99,
    description: "Power your dreams.",
  },
  {
    image: "assets/nintendo-6932787_1280.jpg",
    title: "Nintendo - Game Boy",
    price: 150.0,
    description: "A classic gaming console.",
  },
  {
    image: "assets/video-game-console-2202546_1280.jpg",
    title: "Sega Genesis",
    price: 120.0,
    description: "Retro gaming at its best.",
  },
  {
    image: "assets/xbox-7986823_1280.jpg",
    title: "Xbox Series X",
    price: 479.99,
    description: "Power your dreams.",
  },
];

// function for rendering products
function renderProducts() {
    const container = document.querySelector('.products');
    if (!container) return;
    container.innerHTML = products.map(product => `
        <div class="card">
            <img class="card-img" src="${product.image}" alt="${product.title}" style="width:100%">
            <h1>${product.title}</h1>
            <p class="price">${product.price}$</p>
            <p>${product.description}</p>
            <p><button>Add to Cart</button></p>
        </div>
    `).join('');
}

// function called when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', renderProducts);