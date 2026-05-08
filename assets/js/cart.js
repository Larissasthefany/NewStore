export function initCartNavigation() {
  const btn = document.getElementById("btn");
  const cartIcon = document.getElementById("cart");

  if (btn) {
    btn.onclick = () => {
      window.location.assign("index.html");
    };
  }

  if (cartIcon) {
    cartIcon.onclick = () => {
      window.location.assign("cart.html");
    };
  }
}

export function updateCartCount(cart) {
  const cartCount = document.getElementById("cart-count");

  if (!cartCount) return;

  let total = 0;

  for (const [, quantity] of cart) {
    total += quantity;
  }

  cartCount.textContent = total;
}
