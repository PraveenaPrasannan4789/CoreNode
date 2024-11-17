//built in objects or functions part of javascript.
//can be use without importing any javascript module
console.log('ji');
console.clear();
console.log(__filename);
console.log(__dirname);
setInterval(  //this is a global function
    function(){ //function passed as an argument//callback fn
console.log('nodejs');
    },1000
)

setTimeout(function(){
console.log('jii');
},1000)

setTimeout(()=>{
    console.log('jii');
    },1000)

//clearing the setinterval 
   const x=  setInterval(  //this is a global function
        function(){ //function passed as an argument//callback fn
    console.log('nodejs');
        },4000
    )
    
    const  y= setTimeout(()=>{clearInterval(x)},5000);

    clearTimeout(y);