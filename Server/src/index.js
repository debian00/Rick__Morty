const express = require("express");
const server = require("./app");
const {conn} = require("./DB_connection");
const PORT = 3001;




// server.listen(PORT, async () => {  
//     await conn.sync({force:true}) //
//     console.log("SERVER NOMINAL.")
//     console.log("DB SYNC NOMINAL.")

// })
//base de datos luego servidor
conn.sync({force:false}).then(value =>{
server.listen(PORT, ()=>{
    console.log("ALL SYSTEMS NOMINAL")
})
}).catch(err => console.error(err))