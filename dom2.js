let btn=document.createElement("button");
btn.innerText="click me";
btn.style.backgroundColor="red";
btn.style.color="white";

let bdy=document.querySelector("body");
bdy.prepend(btn);

let para=document.querySelector('p');
//para.setAttribute("class","newClass");

para.classList.add("newClass");