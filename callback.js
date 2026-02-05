function sum(a,b){
    console.log(a+b);
}

function Calculator(a,b,sumCallback){
    sumCallback(a,b);
}

Calculator(1,2,sum);
