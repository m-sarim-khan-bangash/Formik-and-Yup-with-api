const productsArray = [
  {
    id: 1,
    title: "Coffee",
    price: 5.99,
  },
  {
    id: 2,
    title: "Sunglasses",
    price: 3.99,
  },
  {
    id: 3,
    title: "Camera",
    price: 25.99,
  },
];

function getProductsData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("Product not found for id: " + id);
    return undefined;
  }

  return productData;
}

export { productsArray, getProductsData };
