/*
let products = [
  {
    name: "Inception ticket",
    price: 4.90,
    isTaxReduced: true,
    isForeign: false
  }, {
    name: "PS6",
    price: 444.90,
    isTaxReduced: false,
    isForeign: false
  }, {
    name: "Chevrolet Molon",
    price: 444666.90,
    isTaxReduced: false,
    isForeign: false
  }
];

calcularIva = function (){

  let product = "";
  for (let i = 0; product === ""; i++) {
    product= products[i].isForeign ? products[i]:"";

  }
}
*/
let funkyCart = {
  cart:[],
  addProducts: function () {
    for (let i = 0; i < parseInt(Math.random() * 100); i++) {
      this.cart.push({name: `Producto ${i}`, precio: `${parseInt(Math.random() * 10)} euros`})

    }
    console.log(this.cart)
  }
}

let factura = funkyCart.addProducts()
console.log(factura)




