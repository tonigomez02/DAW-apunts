/*const iterator = 3

let arrData = []

for (let i = 0; i < iterator; i++) {
  if (i%2 === 0){
    arrData.push({id:i , name : `item ${i}`});
  }
}

let myValue = 0;
while (myValue<iterator){
  arrData.push({id:myValue , name : `itemwhile ${myValue}`});
  myValue++
}*/

/*
function yuhu(){
  arrData = [];
  for (let i = 0; i < parseInt(Math.random() * 100); i++) {
    arrData.push({name: `Pepito ${i}`})
  }
  return arrData
}

let aux = yuhu();
console.log(aux);
*/

/*
let personaX = {
  name: "Anthony Strong",
  age: 46,
  height: 120,
  partyTimeByCovid: 0,
  setHeight : function (newHeight){
    this.height = newHeight
  },
  goBreakDancing: function (){
    this.partyTimeByCovid++;
    if (this.partyTimeByCovid >90){
      this.age++
    }
  }
}
personaX.setHeight(180);
personaX.height = 190;
*/

/*
let myCart = [
  {name: "Honolulu", type:"flight", price:1300}
  {name: "Honolulu", type:"flight", price:1300}
  {name: "Honolulu", type:"flight", price:1300}
];

function doCheckOut(){
  let totalValue = 0
  for (let i = 0; i < myCart.length; i++) {
    totalValue += myCart[i];
  }
  doPayment(totalValue);
}

*/

/*let funkyCart = {
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

document.write(factura)*/
let arrData = []
let aux = 7
let nameBase = "buenas"
function getUsers(aux){
  if (typeof aux === "number"){
    console.log(`Es un numero`)
    for (let i = 0; i <aux ; i++) {
      arrData.push({name: "Pepe" , testimonio: nameBase})
    }
  }else{
    let n = parseInt(Math.random() * 100)
    console.log(n)
  }
}
getUsers(nameBase, aux)
console.log(arrData)
