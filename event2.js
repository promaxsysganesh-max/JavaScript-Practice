let btnMode=document.querySelector('button');

let currMode="light";

let body=document.querySelector("body");
btnMode.addEventListener("click", () => {
    /*if(currMode=="light")
    {
        currMode="dark";
        document.body.style.backgroundColor="black";
        
    }
    else{
        currMode="light";
        document.body.style.backgroundColor="white";
    }
    console.log(currMode);*/


    if(currMode=="light")
    {
        currMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currMode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);

});