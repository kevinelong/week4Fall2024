//OUTTER SCOPE
eilish = "billie" //global scope variable - accesible ANYWHERE

function classRoom(){//start block
    //INNER SCOPE
    let firstName = "Kevin" // block scope - explicit created here 
    // and exists only here
    
    console.log(firstName + " is a nerd")
    console.log(firstName + " likes to listen to " + eilish)
}//end block

console.log(eilish + " has infectious beats.")

classRoom();

//firstName does not exist in the global scopy
// console.log(firstName + " is our teacher.") //firstName is not defined!



//global
//local
//function/block scope {{nesting like russian doll}}
let output = 0;
function add(a,b){
    let output = a + b
    return output;
}
function mult(a,b){
    let output = a * b
    return output;
}

console.log(add(6,7))
console.log(mult(6,7))

console.log(output); //what would we expect
