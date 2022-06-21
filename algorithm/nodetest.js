let words = ["frodo", "front", "frost", "frozen", "frame", "kakao"]    
let queries = ["fro??", "????o", "fr???", "fro???", "pro?"]

let answer = []
console.log(answer);
for (rawQueries of queries){
    let q = rawQueries.replaceAll('?', '.')
    let 매칭카운트 = 0
    for (s of words){
        const 패턴 = new RegExp(q, 'g')
        let 패턴매칭여부 = 패턴.test(s)
        console.log(rawQueries, s, 패턴, 패턴.test(s), 패턴매칭여부, s.length, rawQueries.length); // 찍을 때 한번에 다 찍어보기
        if (패턴매칭여부 && s.length === rawQueries.length) {
            매칭카운트 += 1
        }
    }
    answer.push(매칭카운트)
    

}