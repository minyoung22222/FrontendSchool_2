const hello = "first hello";
// hello = "second hello"; //한번 정의 한 후 선언 불가

if(true) {
    const hello = "second hello";
    console.log(hello); //second hello
}

console.log(hello); //first hello