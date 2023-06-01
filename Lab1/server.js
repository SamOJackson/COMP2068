//Lab2
//Sam Jackson
//100137493

const connect = require('connect');
const url = require('url');

function urlCalc(url){
    var array = url.split('=');
    var int1 = array[2];
    var int2 = array[3];
    var result;
    if(array[1].contains("add")){
        result = int1 + int2;
    }
    if(array[1].contains("subtract")){
        result = int1 - int2;
    }
    if(array[1].contains("multiply")){
        result = int1 * int2;
    }
    if(array[1].contains("divide")){
        result = int1 / int2;
    }
    console.log(result);
    return result;
}
var link= "http://localhost:3000/lab2?method=add&x=16&y=4"
urlCalc(link);