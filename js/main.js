import { fetchProducts } from "./productServices.js";
import { createCards } from "./ui.js";
import { setupCartNavigation } from "./cart.js";

setupCartNavigation();

const root = document.getElementById("root");

if (root) {
  const products = await fetchProducts();

  const cart = new Map(JSON.parse(localStorage.getItem("cart")) || []);

  products.forEach((product) => {
    const cards = createCards(product, cart);
    root.appendChild(cards);
  });
}
