const http = require("http")
const host = 'localhost'
const port = 3000

const server = http.createServer((req , res)=> {
    res.writeHead(403 ,{ 'Content-Type':'text/plain'})
    res.end('<h1>Hello, World!</h1>')
})

server.listen(port , host , ()=>{
    console.log("server running at port 3000")
})


