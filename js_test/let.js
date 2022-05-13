let hello = "first hello";
// let hello = "second hello"; //재할당 불가능

if(true) {
    let hello = "second hello";
    console.log(hello); //second hello
}

console.log(hello); //first hello