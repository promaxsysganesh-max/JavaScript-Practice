let userName=prompt("Enter your Name:");

userName=userName.replace(/\s+/g,"");
userName=userName.toLowerCase();

let output=`The generated username for user : @${userName}${userName.length} `;
console.log(output);