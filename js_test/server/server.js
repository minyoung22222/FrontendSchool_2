const http = require("http"); //패키지

http.createServer((req, res) => { //요청, 응답
    // res.writeHead(200, {"Content-Type": "text/html"});
    // // 200 : 해당 응답이 정상적으로 되어따!
    // res.end("<p>Hello World~!!!</p>");

    if(req.url === "/"){
        res.writeHead(200);
        res.end("main url");
    }else if (req.url === "/upload") {
        res.writeHead(200);
        res.end("upload url");
    } else if (req.url === "/delete") {
        res.writeHead(200);
        res.end("delete url");
    } else {
        res.writeHead(404);
        res.end("Not found!!!");
    }
}).listen(3000, ()=>{ //서버 대기
    console.log("3000번 포트 서버 접속 완료~!!");
});