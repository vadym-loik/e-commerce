// dynamically set the year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// an array of product objects
const products = [
  {
    id: 1,
    image: "assets/nintendo-6932787_1280.jpg",
    title: "Nintendo - Game Boy",
    price: 150.0,
    description: "A classic gaming console.",
  },
  {
    id: 2,
    image: "assets/video-game-console-2202546_1280.jpg",
    title: "Sega Genesis",
    price: 120.0,
    description: "Retro gaming at its best.",
  },
  {
    id: 3,
    image: "assets/xbox-7986823_1280.jpg",
    title: "Xbox Series X",
    price: 479.99,
    description: "Power your dreams.",
  },
  {
    id: 4,
    image: "assets/nintendo-6932787_1280.jpg",
    title: "Nintendo - Game Boy",
    price: 150.0,
    description: "A classic gaming console.",
  },
  {
    id: 5,
    image: "assets/video-game-console-2202546_1280.jpg",
    title: "Sega Genesis",
    price: 120.0,
    description: "Retro gaming at its best.",
  },
  {
    id: 6,
    image: "assets/xbox-7986823_1280.jpg",
    title: "Xbox Series X",
    price: 479.99,
    description: "Power your dreams.",
  },
  {
    id: 7,
    image: "assets/nintendo-6932787_1280.jpg",
    title: "Nintendo - Game Boy",
    price: 150.0,
    description: "A classic gaming console.",
  },
  {
    id: 8,
    image: "assets/video-game-console-2202546_1280.jpg",
    title: "Sega Genesis",
    price: 120.0,
    description: "Retro gaming at its best.",
  },
  {
    id: 9,
    image: "assets/xbox-7986823_1280.jpg",
    title: "Xbox Series X",
    price: 479.99,
    description: "Power your dreams.",
  },
  {
    id: 10,
    image: "assets/nintendo-6932787_1280.jpg",
    title: "Nintendo - Game Boy",
    price: 150.0,
    description: "A classic gaming console.",
  },
  {
    id: 11,
    image: "assets/video-game-console-2202546_1280.jpg",
    title: "Sega Genesis",
    price: 120.0,
    description: "Retro gaming at its best.",
  },
  {
    id: 12,
    image: "assets/xbox-7986823_1280.jpg",
    title: "Xbox Series X",
    price: 479.99,
    description: "Power your dreams.",
  },
  {
    id: 13,
    image: "assets/nintendo-6932787_1280.jpg",
    title: "Nintendo - Game Boy",
    price: 150.0,
    description: "A classic gaming console.",
  },
  {
    id: 14,
    image: "assets/video-game-console-2202546_1280.jpg",
    title: "Sega Genesis",
    price: 120.0,
    description: "Retro gaming at its best.",
  },
  {
    id: 15,
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

// logic for add to cart functionality
let cart = [];
function addToCart(product) {
    cart.push(product);
    alert(`${product.title} has been added to your cart.`);
}

// Save and load cart from localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}
function loadCart() {
    const stored = localStorage.getItem('cart');
    cart = stored ? JSON.parse(stored) : [];
}

// Render cart items on cart.html
function renderCart() {
    loadCart();
    const cartList = document.getElementById('cart-list');
    if (!cartList) return;
    cartList.innerHTML = '';
    if (cart.length === 0) {
        cartList.innerHTML = '<li>Your cart is empty.</li>';
        document.getElementById('total-price').textContent = '0.00';
        return;
    }
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.title} - $${item.price}`;
        cartList.appendChild(li);
        total += item.price;
    });
    document.getElementById('total-price').textContent = total.toFixed(2);
}

// Add to cart and save to localStorage
function addToCart(product) {
    loadCart();
    cart.push(product);
    saveCart();
    alert(`${product.title} has been added to your cart.`);
}

// Attach event listeners for cart page
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();

    // Render products if on products page
    if (document.querySelector('.products')) {
        renderProducts();
        // Add event listeners to "Add to Cart" buttons
        document.querySelectorAll('.card button').forEach((btn, idx) => {
            btn.addEventListener('click', () => {
                addToCart(products[idx]);
                updateCartCount();
            });
        });
    }

    // Render cart if on cart page
    if (document.getElementById('cart-list')) {
        renderCart();
        // Clear cart button
        const clearBtn = document.getElementById('clear-cart');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                cart = [];
                saveCart();
                renderCart();
                updateCartCount();
            });
        }
    }
});

function updateCartCount() {
  loadCart();
  const count = cart.length;
  const badge = document.getElementById("cart-count");
  if (badge) {
    if (count > 0) {
      badge.textContent = count;
      badge.style.display = "inline-block";
    } else {
      badge.style.display = "none";
    }
  }
}
