import express, {response} from "express";

import bcrypt from "bcrypt";
import {body,validationResult} from "express-validator";
import {getDatabase} from "../data/mongodb_client";

const  userRouting = express.Router();

userRouting.post("/addNewUser",async(request:express.Request,response:express.Response)=>{
    let db =getDatabase();

    let userCollection = db.collection("users");
    let body = request.body;

   const data = await userCollection.insertOne(body);

   response.status(200).json({
       "response":data
   })
})


export default  userRouting;