// • Create a server using http module

const http=require('http')
const server=http.createServer((req,res)=>{
    res.end('server created successfully')
})
server.listen(2400,()=>{
    console.log('http://localhost:2400')
})