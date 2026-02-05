let para = document.querySelector("#para");
let btn=document.querySelector("#btn");


let URL = "https://api.api-ninjas.com/v1/facts";
let API_KEY = "QjHTNJp0hd6ZaPPP5g7rqtz0C9ESFQYeyIlWf8h9";



async function getData() {
    try {
        let response = await fetch(URL, {
            method: "GET",
            headers: {
                "X-Api-Key": API_KEY
            }
        });

        console.log(response);

        let data = await response.json();
        console.log(data);
        para.innerText="";
        para.innerText = data[0].fact;

    } catch (error) {
        console.log("Error:", error);
    }
}

btn.addEventListener("click",getData);
