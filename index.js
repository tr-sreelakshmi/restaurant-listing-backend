//  Import json-server
const jsonServer = require('json-server')

//Create a server 
const server = jsonServer.create()

// setup path for db.json file
const router= jsonServer.router('db.json')

//Return Middleware used by json server
const middleware= jsonServer.defaults()

//Setup port for server
const port = process.env.port || 3002


//Use middleware and router
server.use(middleware)
server.use(router)

//To Run the Server
server.listen(port,()=>{
    console.log('listening on port');

})