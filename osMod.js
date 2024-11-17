//os mod provides functions that use to retrieve info from the os.
var os = require('os');

//os details

console.log(os.type());
console.log(os.arch());
console.log(os.platform());
console.log(os.release());
console.log(os.uptime());
console.log(os.userInfo());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.cpus());//internet,speed details
console.log(os.networkInterfaces()); //wifi details