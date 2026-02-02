let h2=document.querySelector('h2');
h2.innerText+=" from Apna College Student";

console.log(h2);

let box=document.querySelectorAll('.box');

for(let i=0;i<box.length;i++){
    box[i].innerText=prompt(`Enter name of child ${i+1}`);
}

console.log(box);
