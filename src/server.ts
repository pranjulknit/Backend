import express from 'express';
import {hostname} from "os";
import userRouting from "./routing/user_routing";
import post_Routing from "./routing/post_routing";
import post_routing from "./routing/post_routing";

const  app:express.Application = express();

// routing with use of middilewares
app.use("/v1/user",userRouting);
app.use("/v1/post",post_routing);


const localhost:string = "localhost";
const portNumber:number = 5000;



app.listen(portNumber,localhost,()=>{
    console.log(`${localhost}:${portNumber}/v1/user`);
    console.log("Welcome to expres ")
});