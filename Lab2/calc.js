//Sam Jackson
//100137493
//COMP 2068
//Lab 2
const url = require('url');
function urlCalc(url){
    var array = url.split('=');
    var int1 = parseInt(array[2]);
    var int2 = parseInt(array[3]);
    var result = 0;
    if(url.includes("add")){
        result = int1 + int2;
    }
    else if(url.includes("subtract")){
        result = int1 - int2;
    }
    else if(url.includes("multiply")){
        result = int1 * int2;
    }
    else if(url.includes("divide")){
        result = int1 / int2;
    }
    console.log(result);
    return result;
}
var link= "http://localhost:3000/lab2?method=add&x=16&y=4";
urlCalc(link);

var link2 = "http://localhost:3000/lab2?method=subtract&x=16&y=4";
urlCalc(link2);

var link3 = "http://localhost:3000/lab2?method=multiply&x=16&y=4";
urlCalc(link3);

var link4 = "http://localhost:3000/lab2?method=divide&x=16&y=4"
urlCalc(link4);

urlCalc(url);
