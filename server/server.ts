
const express = require( 'express' )


express()
    .get('/', ( req:any, res: any) => res.send('Frane')) 
    .listen(3000, () => console.log('Server is running get')) 

express().post( "*" , (req: any, res: any) => {

    console.log( "POST" , req.body)

    res.send( "POST" )

}).listen( 4000 , () => console.log( "Server is running post" ))
