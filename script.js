// adding event listener to the footer to display the current year
document.getElementById("year").textContent = new Date().getFullYear();

// array of products 
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

// cart
let cart = [];

// localStorage functions
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
  const stored = localStorage.getItem("cart");
  cart = stored ? JSON.parse(stored) : [];
}

// render products on the page
function renderProducts() {
  const container = document.querySelector(".products");
  if (!container) return;
  container.innerHTML = products
    .map(
      (product) => `
        <div class="card">
            <img class="card-img" src="${product.image}" alt="${product.title}" style="width:100%">
            <h1>${product.title}</h1>
            <p class="price">${product.price}$</p>
            <p>${product.description}</p>
            <p><button data-id="${product.id}">Add to Cart</button></p>
        </div>
      `
    )
    .join("");
}

// add product to cart
function addToCart(product) {
  loadCart();
  cart.push(product);
  saveCart();
  alert(`${product.title} has been added to your cart.`);
  updateCartCount();
}

// delete one product from cart
function removeOneFromCart(productId) {
  loadCart();
  const index = cart.findIndex((item) => item.id === productId);
  if (index !== -1) {
    cart.splice(index, 1);
    saveCart();
    renderCart();
    updateCartCount();
  }
}

// reneder cart on the page
function renderCart() {
  loadCart();
  const cartList = document.getElementById("cart-list");
  if (!cartList) return;
  cartList.innerHTML = "";
  if (cart.length === 0) {
    cartList.innerHTML = "<li>Your cart is empty.</li>";
    document.getElementById("total-price").textContent = "0.00";
    return;
  }
  let total = 0;
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.title} - $${item.price}
      <img src="assets/cross.svg" data-id="${item.id}" class="cross-icon remove-btn" alt="Remove" />
    `;
    cartList.appendChild(li);
    total += item.price;
  });
  document.getElementById("total-price").textContent = total.toFixed(2);

  // delete buttons for each item
  document.querySelectorAll(".remove-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const id = Number(this.getAttribute("data-id"));
      removeOneFromCart(id);
    });
  });
}

// update cart count in the badge
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

// Initialize the cart and product rendering when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  loadCart();
  updateCartCount();

  // if there are products, render them and add event listeners to buttons
  if (document.querySelector(".products")) {
    renderProducts();
    document.querySelectorAll(".card button").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = Number(btn.getAttribute("data-id"));
        const product = products.find((p) => p.id === id);
        if (product) addToCart(product);
      });
    });
  }

  // if there is a cart list, render it and add event listeners to buttons
  if (document.getElementById("cart-list")) {
    renderCart();

    // button to clear the cart
    const clearBtn = document.getElementById("clear-cart");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        cart = [];
        saveCart();
        renderCart();
        updateCartCount();
      });
    }

    // button to proceed to checkout
    const checkoutBtn = document.getElementById("checkout");
    if (checkoutBtn) {
      checkoutBtn.addEventListener("click", function () {
        if (cart.length === 0) {
          alert("Your cart is empty.");
          return;
        }
        const orderNumber =
          "ORD-" + Math.floor(100000 + Math.random() * 900000);
        alert(
          `Thank you for your purchase!\nYour order number is: ${orderNumber}`
        );
        cart = [];
        saveCart();
        renderCart();
        updateCartCount();
      });
    }
  }
});
