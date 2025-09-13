let name = "Vencha"; // Global Scope

function greet() {
  console.log("Hello " + name); // Accessible here
}

greet(); // Output: Hello Vencha
console.log(name); // Output: Vencha 
//function scope
function sayHi() {
  let message = "Hi there!";
  console.log(message); // Accessible
}

sayHi();
// console.log(message); // ❌ Error: message is not defined
//block scope
{
  let blockVar = "I am inside a block";
  console.log(blockVar); // Works here
}

// console.log(blockVar); // ❌ Error: blockVar is not defined
//lexical scope
function outer() {
  let outerVar = "I'm outside!";

  function inner() {
    console.log(outerVar); // ✅ Accessible due to lexical scope
  }

  inner();
}

outer(); // Output: I'm outside!
