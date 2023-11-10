import express from 'express';
import {hostname} from "os";
import userRouting from "./routing/user_routing";
import {connectToDatabase} from "./data/mongodb_client";


const  app:express.Application = express();


app.use("/v1/user",userRouting);
const localhost:string = "localhost";
const portNumber:number = 5001;


app.listen(portNumber,localhost,async()=>{
    await  connectToDatabase();
    console.log(`${localhost}:${portNumber}/v1/user`);
    console.log("Welcome to expres ")
});