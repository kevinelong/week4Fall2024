// WHAT IS A VARIABLE:
// identifying label + a value
// e.g. quantity = 123

// What is a function?
// a block of code we can call one or more times; 
//  usually with a function name.

// A function is a value, that may or may not have an identifier(function name)

// ANONYMOUS FUNCTIONS

let a = 123;
let b = a;
let c = b;
console.log(c)

//traditional
function greet(firstName){
    return `howdy ${firstName}`;
}

console.log(greet("classmates"));

// functional programming (treat a function as a value)
let greet2 = (firstName) => `howdy ${firstName}`;

let hi = greet2;

console.log(hi("classmates"));


function bye(){
    console.log("Bye");
}
bye(); //invoke/call


//IIFE (immediatly invoked function expression)
(()=>console.log("Goodbye"))();

function bePoltite(who, callback){
    return callback(who);
}
console.log(bePoltite("classmates", greet  ));
console.log(bePoltite("classmates", greet2 ));
console.log(bePoltite("classmates", hi     ));
console.log(bePoltite("classmates", s => `night night ${s}`));
