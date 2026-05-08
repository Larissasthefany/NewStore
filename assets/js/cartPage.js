import { initCartNavigation } from "./cart.js";
console.log("cartPage carregou");
initCartNavigation();

export function loadCartFromStorage() {
  const data = localStorage.getItem("cart");

  if (!data) {
    return new Map();
  }

  const parsed = JSON.parse(data);

  return new Map(parsed);
}

const cart = loadCartFromStorage();

// let products = [];

// export function getCartProducts(products, cart) {
//   for (const products of product) {
//     cart.has(products.id);
//   }
// }

// fazer interação, puxar produtos e mostrar na tela
