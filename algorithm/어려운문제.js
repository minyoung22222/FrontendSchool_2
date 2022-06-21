//////////////////////section - 1//////////////////////////
// 카카오 2020년 공채문제 4번
https://programmers.co.kr/learn/courses/30/lessons/60060


words : ["frodo", "front", "frost", "frozen", "frame", "kakao"]
queries : ["fro??", "????o", "fr???", "fro???", "pro?"]
result : [3, 2, 4, 1, 0]

"fro??"
["frodo", "front", "frost", "frozen", "frame", "kakao"] -> 3

"????o"
["frodo", "front", "frost", "frozen", "frame", "kakao"] -> 2

"fr???"
["frodo", "front", "frost", "frozen", "frame", "kakao"] -> 4

'frodo'.match(/fro../g)
'frodod'.match(/fro../g)
'aafrodod'.match(/fro../g)
'aafroddddod'.match(/fro../g)
'aafaraoddddod'.match(/fro../g)

const 패턴 = new RegExp('fro..', 'g')
패턴.test('frodo')

const 패턴 = new RegExp('fro..', 'g')
패턴.test('frodod')

const 패턴 = new RegExp('fro..', 'g')
패턴.test('aafaraoddddod')

//////////////////////section - 2//////////////////////////

let words = ["frodo", "front", "frost", "frozen", "frame", "kakao"]
let queries = ["fro??", "????o", "fr???", "fro???", "pro?"]

let q = queries[3].replaceAll('?','.')
q

const 패턴 = new RegExp(q, 'g')
console.log(패턴.test(word[0]))
console.log(패턴.test(word[1]))
console.log(패턴.test(word[2]))
console.log(패턴.test(word[3])) // frozen만 true입니다.
console.log(패턴.test(word[4]))
console.log(패턴.test(word[5]))
console.log(패턴.test(word[6]))

패턴.test('afrozena') // 길이 체크를 해야 한다는 것을 캐치!


//////////////////////section - 3//////////////////////////

let words = ["frodo", "front", "frost", "frozen", "frame", "kakao"]
let queries = ["fro??", "????o", "fr???", "fro???", "pro?"]

let q = queries[3].replaceAll('?','.')
const 패턴 = new RegExp(q, 'g')
let answer = []

for(s of words) {
    console.log(패턴.test(s))
}

///// - //////

let words = ["frodo", "front", "frost", "frozen", "frame", "kakao"]    
let queries = ["fro??", "????o", "fr???", "fro???", "pro?"]

let answer = []

for (rawQueries of queries){
    let q = rawQueries.replaceAll('?', '.')
    const 패턴 = new RegExp(q, 'g')
    let 매칭카운트 = 0
    for (s of words){
        let 패턴매칭여부 = 패턴.test(s)
        console.log(rawQueries, s, 패턴, 패턴매칭여부, s.length, rawQueries.length); // 찍을 때 한번에 다 찍어보기
        if (패턴매칭여부 && s.length === rawQueries.length) {
            매칭카운트 += 1
        }
    }
    answer.push(매칭카운트)
}

///// - //////

let words = ["frodo", "front", "frost", "frozen", "frame", "kakao"]    
let queries = ["fro??", "????o", "fr???", "fro???", "pro?"]

let answer = []

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

//////////////////////section - 4//////////////////////////

// 런타임 애러 -> 우리는 '실패 (0.03ms, 30.1MB)'가 뜨거나 '성공 (0.03ms, 30.1MB)'이 떠야 합니다.
let words = ["frodo", "front", "frost", "frozen", "frame", "kakao"]    
let queries = ["fro??", "????o", "fr???", "fro???", "pro?"]

function solution(words, queries) {
    let answer = [];

    for (rawQueries of queries){
        let q = rawQueries.replaceAll('?', '.')
        let 매칭카운트 = 0
        for (s of words){
            const 패턴 = new RegExp(q, 'g')
            let 패턴매칭여부 = 패턴.test(s)
            if (패턴매칭여부 && s.length === rawQueries.length) {
                매칭카운트 += 1
            }
        }
        answer.push(매칭카운트)
    }
    return answer;
}

// error
function solution(words, queries){
    for (var i = 0; i < queries.length; i++) {
        var rawQueries = queries[i];
        var q = rawQueries.replaceAll('?', '.');
        var count = 0;
    }
    var answer = [3, 2, 4, 1, 0];
    return answer;
}


// 정상 작동
function solution(words, queries){
    for (var i = 0; i < queries.length; i++) {
        var rawQueries = queries[i];
    }
    var answer = [3, 2, 4, 1, 0];
    return answer;
}

// replaceAll이 문제구나!
function solution(words, queries){
    for (var i = 0; i < queries.length; i++) {
        var rawQueries = queries[i];
        var q = rawQueries.replace(/\?/g, '.');
        var count = 0;
    }
    var answer = [3, 2, 4, 1, 0];
    return answer;

}

//////////////////////section - 6//////////////////////////
// 4번이니까, 난이도가 4/5니까, 정규표현식으로 풀리지 않을 것이다.
// 링크드 리스트, '트라이 알고리즘'을 사용해야겠다!

패턴 : 'fro..'
'frodo'
{'f' : 다음object} count : 1
{'r' : 다음object} count : 1
{'o' : 다음object} count : 1 // 여기까지만 보면 됩니다.
{'d' : 다음object} count : 1
{'o' : 다음object} count : 1

{
    value : 'f'
    count : 1
    {
        value : 'r'
        count : 1
        {
            value : 'o'
            count : 1
            {
                value : 'd'
                count : 1
                {
                    value : 'o'
                    count : 1
                }
            }
        }
    }
}


패턴 : 'fro..'
'frodo'
{'f' : 다음object} count : 1
{'r' : 다음object} count : 1
{'o' : 다음object} count : 1 // 여기까지만 보면 됩니다.
{'d' : 다음object} count : 1, {'n' : 다음object} count : 1
{'o' : 다음object} count : 1, {'t' : 다음object} count : 1

/[{'f':2}, {'r':2}, {'o':2}, {'d':1, 'n':1}, {'o':1, 't':1}]

function solution(words) {
    let 트라이 = []
    for(let i=0; i<10; i++) {
        let insertArray=[]
        for(let)
    }
    return answer
}

solution(['frodo', 'front'])