// Write your code here
let products=["Laptop", "Phone", "Headphones", "Monitor"]
function logFirstProduct(){
 products;
 console.log(products[0])
}

function updateProductName(i, name){
   for(let num of products){
    if(products.indexOf(num)==i){
      products[i] = name
    }
   }
   return products
}
function addProduct(ProductName){
  products.push(ProductName)
  return products
}
function removeLastProduct(){
products.pop()
return products
}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
