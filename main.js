
var cli=require("cli-color");
var uc= require('uppercase')
console.log(cli.red('hello'));
console.log(uc('hello'));

//npm init     
//install package nodemon so need for running everytime by giving node index.js or node main.js
//npm install -g nodemon

//give command nodmeon main.js
//organisation
//clearing the setinterval 
const x=  setInterval(  //this is a global function
    function(){ //function passed as an argument//callback fn
console.log('nodejs');
    },1000
)

setTimeout(()=>{clearInterval(x)},5000)