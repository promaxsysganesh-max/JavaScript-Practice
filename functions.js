/*function noOfVowels(str){
    let count=0;
    let vowels=['a','e','i','o','u'];
    for(let s of str){
        if(vowels.includes(s)){
            count++;
        }
    }
    return count;
}

let str=prompt("Enter any word");
let count=noOfVowels(str);
console.log(count);*/

let noOfVowels=(str)=>{
    let count1=0;
    let vowels1=['a','e','i','o','u'];
    for(let s of str){
        if(vowels1.includes(s)){
            count1++;
        }
    }
    return count1;
}

let str1=prompt("Enter any word");
let count1=noOfVowels(str1);
console.log(count1);