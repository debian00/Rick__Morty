const users = require("../utils/users");
const {User} = require("../DB_connection")


const login = (req, res) =>{
    const {email, password} = req.query;
    
const userFound = users.find((user)=> user.email === email && user.password === password)

   if(userFound) return res.status(200).json({access:true})
   return res.status(404).json({access:false})
};

async function createUser(obj){
        try {
            const  newUser = await User.create(obj);
            return newUser;
        } catch (error) {
            throw error;
        }
};

module.exports = { login, createUser };