var hello = "hello";
var hello = "hello hello hello hello"

function sayHello() {
    var hello = "hello hello";
    console.log(hello); //hello hello
}

if(true) {
    var hello = "hello hello hello";
}

sayHello();
console.log(hello); 