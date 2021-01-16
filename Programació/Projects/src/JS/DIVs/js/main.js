/*
function myFunction(){
  let li =document.getElementById("li").value;
  let randomVar = parseInt(Math.random()*100);

  console.log(li)
  document.write("<div>");
  document.write("<ul>");
  for (let i = 0; i < randomVar; i++) {
    document.write(`<li>${li}</li>`);
    console.log(randomVar)
  }
  document.write("</ul>");
  document.write("</div>")
}
*/

function myFunction(){
  elements = [];
  let li =document.getElementById("li").value;
  let randomVar = parseInt(Math.random()*100);

  for (let i = 0; i < randomVar; i++) {
    elements.push(li)
  }

  document.write("<div>");
    document.write("<ul>");
      for (let i = 0; i <elements.length ; i++) {
      document.write(`<li>${li}</li>`);
      console.log(elements.length)
  }
    document.write("</ul>");
  document.write("</div>")
}

