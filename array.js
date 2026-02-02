let prices=[250,645,300,900,50];

for(let i=0;i<prices.length;i++)
{
    prices[i]=prices[i]-(prices[i]*0.1);
}

console.log(prices);

let companies=["Bloomber","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies);

companies.shift();
console.log(companies);

companies.splice(1,1,"Ola");
console.log(companies);

companies.push("Amazon");
console.log(companies);