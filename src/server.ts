import express from 'express';

import userRouting from "./routing/user_routing";
import {connectToDatabase} from "./data/mongodb_client";


const  app:express.Application = express();

app.use(express.json())

app.use("/v1/user",userRouting);
const localhost:string = "localhost";
const portNumber:number = 5000;


app.listen(portNumber,localhost,async () =>{

    await connectToDatabase()
    console.log(`http://${localhost}:${portNumber}/v1/user/`)
    console.log("Welcome To mongo Server")

})