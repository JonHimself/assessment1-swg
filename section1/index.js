const random5 = () => {
  let num1 = Math.trunc(1 + Math.random() * 4);
  let num2 = Math.trunc(Math.random() * 4);
  return num1 + num2;
};
console.log(random5());

const reverseMe = (str) => {
  if (typeof str !== "string") {
    return console.log("please enter a string");
  }
  let strToReverse = str;
  return strToReverse.split("").reverse().join("");
};

const initialString = "hello";
console.log(reverseMe(initialString));
console.log(reverseMe(888));
