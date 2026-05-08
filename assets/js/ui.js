import { updateCartCount } from "./cart.js";

export function createCards(product, cart) {
  const card = document.createElement("div");
  card.className = "card";

  const article = document.createElement("article");
  article.className = "article";

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.title;

  const title = document.createElement("h2");
  title.className = "title";
  title.textContent = product.title;

  const link = document.createElement("a");
  link.href = `/produto.html?id=${product.id}`;
  link.setAttribute("aria-label", `Ver detalhes de ${product.title}`);

  link.append(img, title);

  const price = document.createElement("p");
  price.textContent = product.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const category = document.createElement("p");
  category.textContent = `Categoria: ${product.category}`;

  const btnAddProducts = document.createElement("button");
  btnAddProducts.textContent = "Adicionar ao carrinho";
  btnAddProducts.setAttribute(
    "aria-label",
    `Adicionar ${product.title} ao carrinho`,
  );

  btnAddProducts.addEventListener("click", () => {
    const currentQty = cart.get(product.id) || 0;
    cart.set(product.id, currentQty + 1);

    console.log(`Carrinho: ${cart}`);

    localStorage.setItem("cart", JSON.stringify([...cart]));

    btnAddProducts.classList.add("added");
    btnAddProducts.textContent = "Adicionado!";

    setTimeout(() => {
      btnAddProducts.classList.remove("added");
      btnAddProducts.innerHTML = `<i class="fa-solid fa-cart-plus"></i> Adicionar`;
    }, 1200);

     updateCartCount(cart)
  });

  article.append(link, price, category, btnAddProducts);
  card.append(article);

  return card;
}
