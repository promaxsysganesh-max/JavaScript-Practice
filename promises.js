function getData(dataID,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data ",dataID);
            reject("error");
            resolve("success");
            
            if(getNextData){
            getNextData();
            }
        },10000);
    })
       
}

let promise=getData(100);