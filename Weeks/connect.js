const connect = require('connect');

const app = connect();

app.listen(3000);
console.log("App is running on http://localhost:3000");

function helloWorld(req, res, next){
    res.setHeader('Content-Type','text-plain');
    res.write("Hello World");
    res.end();
}
function logger(req, res, next){
    console.log(req);
    next();
}
function goodbyeWorld(req, res, next){
    res.setHeader('Content-Type','text-plain');
    res.write("Goodbye World");
    res.end();
}
app.use(logger);
app.use("/hello", helloWorld);
app.use("/goodbye", goodbyeWorld);