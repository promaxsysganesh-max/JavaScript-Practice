
let btn1=document.querySelector('#btn1');

btn1.onclick=()=>{
    console.log("Button was clicked");
}

let div=document.querySelector("div");
div.onmouseover=()=>{
    console.log("you are inside div");
}

let btn2=document.querySelector('#btn2');

btn2.ondblclick=()=>{
    console.log("Button was clicked 2x");
}
