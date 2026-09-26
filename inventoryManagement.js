//Product Inventory Management System//
const products = ["Laptop", "Phone", "Headphones", "Monitor"];

function logFirstProduct() {
    console.log(products[0]);
}
function addProduct(productName) {
    products.push(productName);
}

function updateProductName(index, newName) {
    if (index >= 0 && index < products.length) {
        products[index] = newName;
    }   

  }

  function removeLastProduct() {
    products.pop();
  }
  console.log(products);
  console.log(products.length);
  console.log(products[0]);
  console.log(products[products.length - 1]);

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
