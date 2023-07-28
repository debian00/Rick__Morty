const {login, createUser} = require("../controllers/login")
const { getCharById } = require("../controllers/getCharById")
const {postFav, deleteFav} = require("../controllers/handleFavorites")


const router = require("express").Router();

    router.get("/character/:id", (req, res)=>{
        getCharById(req, res);
    })
    router.get("/login", (req, res)=>{
        login(req, res);        
    })    
    router.post("/fav", (req, res)=>{
        postFav(req, res);        
    })    
    router.delete("/fav/:id", (req, res)=>{
        deleteFav(req, res);        
    })

    router.post("/create", async (req, res)=>{
        const {userToBeCreated} = req.body;   
            if(userToBeCreated.email){
                    try {
                        const creation = await createUser(userToBeCreated);
                        res.json({msg: "Created", data: creation})
                    } catch (error) {
                        res.send(error)
                    }


            }
        

    })  

    module.exports = router;