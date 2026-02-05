function getData(dataID){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data ",dataID);
            resolve("success");
        },2000);
    })      
}


async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);

    getData().then((res)=>{
        console.log(res);
    })
}

getAllData();