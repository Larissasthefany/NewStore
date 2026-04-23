const BASE_URL = "https://fakestoreapi.com/products";

export async function fetchProducts() {
  try {
    const resp = await fetch(BASE_URL);

    if (!resp.ok) {
      throw new Error(`HTTP error! ${resp.status}`);
    }

    const data = await resp.json();
    return data;
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
    return [];
  }
}
