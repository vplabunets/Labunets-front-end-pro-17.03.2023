//Task #1
const inputString1 = prompt("Please, enter first string ");
const inputString2 = prompt("Please, enter second string");
const inputString3 = prompt("Please, enter third string");

const finalString = inputString1 + " " + inputString2 + " " + inputString3;
alert(finalString);
console.log("finalString", finalString);

const string1 = "Ja";
const string2 = "va";
const string3 = "Script";

const finalString2 = string1 + string2 + string3;
console.log("finalString2", finalString2);

//Task #2

const inputNumber = 12345;
const modifiedNumber = inputNumber.toString().split("").join(" ");

console.log("modifiedNumber", modifiedNumber);
