function promiseThenCatch(){
    return new Promise((resolve,reject)=>{
            console.log("Promise created");

        resolve("success");
        //reject("failed");
    })
}

let promise=promiseThenCatch();
promise.then((res)=>
{
    console.log("promise resolved",res);
})

promise.catch((err)=>{
    console.log("Error occured",err);
})