

http.createServer((req, res) =>{
    console.log(req.method, req.url);
    let path = req.url;
    res.writeHead(200, {'Content-Type': 'text/html'});
    if(path == "/hello"){
        //show hello world
        res.write("Hello World");
    }
    else if(path == "goodbye"){
        res.write("Goodbye World");
    }
    else{
        res.write("Not Found");
    }
    res.end();
}).listen(3000);
console.log("App running on http://localhost:3000");
