// Event Loop phases, Call Stack, Callback Queue, Microtask Queue, Blocking vs Non-Blocking I/O, libuv
const fs = require("fs")
console.log("firsting")
setTimeout(() => {console.log("first set timout") , 0})

setImmediate(() => {console.log("first set immediate phase ke baad ")})   // this is not urgent , jo task horaha uska full phase ke baad ye execute hoga 
process.nextTick(() => console.log("first set next tick "))   // this is very urgent , jo task horaha uske baad hi we should exceucye this

fs.readFile("kuch.txt" , ()=> {
    setTimeout(() => console.log("2nd timemoit inside vala"))
    console.log("padha hai vo file hoaya")
})

console.log("lasting ")
