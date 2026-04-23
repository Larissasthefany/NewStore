export function setupCartNavigation() {
  const btn = document.getElementById("btn");
  const cartIcon = document.getElementById("cart");

  if (btn) {
    btn.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  if (cartIcon) {
    cartIcon.addEventListener("click", () => {
      window.location.href = "cart.html";
    });
  }
}

