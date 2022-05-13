// function sayHello() {
//     return new Promise((resolve, reject) => {
//         const hello = "Hello Hello";
//         resolve(hello);
//     })
// }

// sayHello().then((resolvedData) => {
//     console.log(resolvedData);
// })

function sayHello() {
    return new Promise((resolve, reject) => { //비동기
        // reject(new Error());
        resolve("hello!!!");
    })
}

async function test() {
    const hello1 = await sayHello();
    console.log(hello1);
}

test();

// sayHello()
//     .then((resolvedData) => {
//         console.log(resolvedData);
//         return resolvedData;
//     }) .then((resolvedData) => {
//         console.log(resolvedData);
//         return resolvedData;
//     }) .then((resolvedData) => {
//         console.log(resolvedData);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

