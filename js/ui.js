export function createCards(product, cart) {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = product.image;

  const title = document.createElement("h2");
  title.textContent = product.title;
  title.className = "title";

  const price = document.createElement("p");
  price.textContent = product.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const category = document.createElement("span");
  category.textContent = product.category;

  const btnAddProducts = document.createElement("button");
  btnAddProducts.textContent = "Adicionar ao carrinho";

  btnAddProducts.addEventListener("click", () => {
    const currentyQty = cart.get(product.title) || 0;
    cart.set(product.title, currentyQty + 1);

    console.log(`Carrinho: ${cart}`);

    localStorage.setItem("cart", JSON.stringify([...cart]));
  });

  card.append(img, title, price, category, btnAddProducts);

  return card;
}
