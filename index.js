//import json server

const jsonserver =require('json-server')

//create server

const mediaPlayer = jsonserver.create()

//create middleware to convert the jason format

const middleware = jsonserver.defaults()

//import db.json file
const router = jsonserver.router("db.json")

//set port for the server
const PORT = 4000 || process.env.PORT

//server use middleware
mediaPlayer.use(middleware)//middleware ne server nod use cheyyan 
mediaPlayer.use(router)
//listen

mediaPlayer.listen(PORT,()=>{
    console.log(`server running succesfully at port number ${PORT}`);
    
})