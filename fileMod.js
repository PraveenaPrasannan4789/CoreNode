var fs= require('fs');

//readfile
fs.readFile('./txt.txt','utf-8',function(err,data){  //without utf we will get binary file 
    if(err){
        console.error(err)
    }
    console.log(data);
})

//createfile
fs.writeFile('new.txt','this is new file yes',(err)=>{
    if(err){
        console.error(err)
    }
    console.log('file created');
})

fs.appendFile('new.txt','this is new file yes',(err)=>{//concat or create new if not found
    if(err){
        console.error(err)
    }
    console.log('file created');
})

fs.rename('./new.txt','./test.txt',(err)=>{
    if(err){
        console.error(err)
    }
    console.log('file renamed');
})

fs.unlink('./test.txt',(err)=>{
    if(err){
        console.log(err)
    }
    console.log('deleted')
})