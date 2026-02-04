
let btn1=document.querySelector('#btn1');

btn1.onclick=(e)=>{
    console.log("Button was clicked");
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY);
}

let div=document.querySelector("div");
div.onmouseover=()=>{
    console.log("you are inside div");
}

let btn2=document.querySelector('#btn2');

btn2.ondblclick=()=>{
    console.log("Button was clicked 2x");
}

