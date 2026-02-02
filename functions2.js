/*let arr=[90,70,75,98,82,90];

let topperArr=arr.filter((num)=>{
    if(num>=90)
    {
        return num;
    }
})

console.log(topperArr);*/


let size=Number(prompt("Enter the size of array:"));

let arr=[];
for(let i=0;i<size;i++)
{
    arr[i]=Number(prompt(`Enter no.${i+1} element`));
}

console.log(arr);

const sum=arr.reduce((prev,num)=>{
    return prev+=num;
})

console.log(`Sum of all elements: ${sum}`);

const mul=arr.reduce((prev,num)=>{
    return prev*=num;
})

console.log(`Multiplication of all elements: ${mul}`);