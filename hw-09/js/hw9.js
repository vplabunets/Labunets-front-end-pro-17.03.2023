let numOrStr = prompt("input number or string");
console.log(numOrStr);

if (numOrStr) {
  numOrStr = numOrStr.trim();
  if (numOrStr.length > 0 && isNaN(+numOrStr)) {
    console.log(isNaN(+numOrStr));
    numOrStr = isNaN(+numOrStr);
  }
}

console.log(isNaN(+numOrStr));
switch (numOrStr) {
  case null:
    console.log("ви скасували");
    break;
  case "":
    console.log("Empty String");
    break;
  case true:
    console.log(" number is Ba_NaN");
    break;
  default:
    console.log("OK!");
}
