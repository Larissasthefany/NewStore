import { fetchProducts } from "./productServices.js";
import { createCards } from "./ui.js";
import { initCartNavigation, updateCartCount } from "./cart.js";

const root = document.getElementById("root");

const cart = new Map(JSON.parse(localStorage.getItem("cart")) || []);

initCartNavigation();

updateCartCount(cart);

if (root) {
  const products = await fetchProducts();

  products.forEach((product) => {
    const cards = createCards(product, cart);
    root.appendChild(cards);
  });
}
