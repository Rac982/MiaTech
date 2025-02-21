const user = {
    name: "Mario",
    age: 20,
  };
  
  // if (user.age >= 18) {
  //   console.log("User not of age");
  // } else {
  //   console.log("User of age");
  // }
  
  // const color = "white";
  
  // if (color === "red") {
  //   console.log("Object is red");
  // } else if (color === "green") {
  //   console.log("Object is green");
  // } else if (color === "white") {
  //   console.log("Object is white");
  // } else {
  //   console.log("Object has no color");
  // }
  
  // if ((user.age >= 18 && user.age < 65 )|| user.age >= 75){
  
  // }
  
  //DICHIARAZIONE ESPLICITA
  
  // function sum(a, b) {
  //   return a + b;
  // }
  // function sub(a, b) {
  //   return a - b;
  // }
  // function mult(a, b) {
  //   return a * b;
  // }
  // function div(a, b) {
  //   return a / b;
  // }
  
  // function calculator(a, operation, b) {
  //   if (operation == "+") {
  //     return sum(a, b);
  //   } else if (operation == "-") {
  //     return sub(a, b);
  //   } else if (operation == "*") {
  //     return mult(a, b);
  //   } else if (operation == "/") {
  //     return div(a, b);
  //   } else {
  //     throw new Error("Operation not supported");
  //   }
  // }
  
  // const result = calculator("5", "*", 2);
  
  // console.log(result);
  
  // ARROW FUNCTION
  
  const toUpper = (str) => {
    if (typeof str !== "string") {
      throw new Error("Not a string");
    }
    return str.toUpperCase();
  };
  
  const text = toUpper("10");
  
  console.log(text);