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

data.map(function(x) {
    return x.중간고사점수
});

data.map(function(x) {
    return [x.이름, x.중간고사점수]
});

let data2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let newData = data2.map(function(a) {
   return a.map(function(n) {return n * 2});
});