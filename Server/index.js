//Importar el modulo http core

const http = require("http")
const data = require("./src/utils/data")






http.createServer((request, response)=>{

response.setHeader("Acess-Control-Allow-Origin", "*")
console.log(request.url)
if(request.url.includes("/rickandmorty/character")){
    console.log(request.url.split("/"));
    const id = request.url.split("/").at(-1)
    const character = data.find((element)=> element.id ===Number(id));
    console.log(character);

    return
        response.writeHead(200,{"Content-type": "application/json"}).end(JSON.stringify(character))
        console.log(character)
    

}



}).listen(3001,() => {
    console.log("ALL SERVER SYSTEMS NOMINAL & LISTENING" )

})