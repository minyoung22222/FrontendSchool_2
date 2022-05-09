let data = [{
    반 : 1, 
    번 : 1, 
    이름 : "호준", 
    중간고사점수 : 55
}, {
    반 : 1, 
    번 : 2, 
    이름 : "길동", 
    중간고사점수 : 60
}, {
    반 : 1, 
    번 : 3, 
    이름 : "영희", 
    중간고사점수 : 30
}, {
    반 : 1, 
    번 : 4, 
    이름 : "철수", 
    중간고사점수 : 20
}, {
    반 : 1, 
    번 : 5, 
    이름 : "규리", 
    중간고사점수 : 100
}]

let sum=0;
let arr=[];
for(let i=0; i<data.length; i++) {
    arr.push(data[i]['중간고사점수']);
}

for(let i=0; i<arr.length; i++) {
    sum += arr[i];
}

let avg = sum/(arr.length);

let arr2=[];
for(let i=0; i<arr.length; i++) {
    arr2.push(arr[i]-avg);
}

let arr3=[];
for(let i=0; i<arr2.length; i++) {
    arr3.push(Math.abs(arr2[i])*Math.abs(arr2[i]));
}

let bs=0;
for(let i=0; i<arr3.length; i++){
    bs+=arr3[i];
}
let bs2 = bs/arr3.length;

Math.sqrt(bs2);

console.log(bs2);