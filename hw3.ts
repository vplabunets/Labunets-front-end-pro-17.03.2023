// Task #1
const inputString1: any = prompt("Please, enter first string ");
const inputString2: any = prompt("Please, enter second string");
const inputString3: any = prompt("Please, enter third string");

const finalString: string =
  inputString1 + " " + inputString2 + " " + inputString3;
alert(finalString);
console.log("finalString", finalString);

let string1: string = "Ja";
let string2: string = "va";
let string3: string = "Script";

const finalString2: string = string1 + string2 + string3;
console.log("finalString2", finalString2);

//Task #2

const inputNumber: number = 222555333000;
let modifiedNumber: number = Number(
  inputNumber.toString().split("").sort().join(" ")
);

console.log("modifiedNumber", modifiedNumber);
