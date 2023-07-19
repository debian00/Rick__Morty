const app = require("../src/app");
const session = require("supertest");
const request = session(app);


describe ("test de RUTAS", () =>{
    describe('GET /rickandmorty/character/:id', ()=>{
        it("Responde con status: 200", async()=>{
           await request.get('/rickandmorty/character/1').expect(200);
        })    
    })
})