// give a name to a step - like TOC or book outline
//PURE ORGANIZATION
function begin() {
    console.log("IN THE BEGINNING...");
}
function middle(){
    console.log("INTO THE HEART OF CODING...")
}
function end(){
    console.log("WRAPPING IT UP. Fini.")
}
//invoke or call
begin()
middle()
end()

///////////////////////////////////////////////
function greet(who, age){
    console.log(`Howdy ${who}!!!`); // MODERN
    //    console.log("Howdy " + who + "!!!"); //CLASSIC CONCATENATION
    if(age >= 40){
        console.log("Gosh you are old!!!");
    }else{
        console.log("All the time in the world.")
    }
}
greet("Kevin", 57)
greet("Class", 30)

console.log(new Date(0));