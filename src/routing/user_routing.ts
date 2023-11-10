import express, {response} from "express";

import bcrypt from "bcrypt";
import {validationResult} from "express-validator";
import {getDatabase} from "../data/mongodb_client";
import {Collection, ObjectId} from "mongodb";

const  userRouting = express.Router();

userRouting.post("/addNewUser",async(request:express.Request,response:express.Response)=>{
    let db =getDatabase();

    let userCollection = db.collection("users");
    let body = request.body;

   const data = await userCollection.insertOne(body);
console.log("data ",data);
   response.status(200).json({
       "response":data
   })
})


userRouting.get("/getUsers",async(request:express.Request,response:express.Response)=>{
    let db = getDatabase();
    let userCollection = db.collection("users");

    let data = await userCollection.find({}).toArray();

    response.status(200).json({
        "response":data,
    })
})


userRouting.get("/getProfile/:id",async(request:express.Request,response:express.Response)=>{

    let userId = request.params.userId;

    let db = getDatabase();
    let userCollection = db.collection("users");

    let data = await userCollection.find({"_id":new ObjectId(userId)}).toArray();

    response.status(200).json({
        "response":data,
    })
})


userRouting.put("/updateUser",async(request:express.Request,response:express.Response)=>{
    let db = getDatabase();
    let userCollection = db.collection("users");

    const body = request.body;

    const userObject = {
        name:body.name,
        following:body.following,
        followers:body.followers,
    }
    let data = await userCollection.updateOne({_id:new  ObjectId(body.userId)},{$set:userObject});

    response.status(200).json({
        "response":data,
    })
})


userRouting.delete("/deleteUser",async(request:express.Request,response:express.Response)=>{



    let db = getDatabase();
    let userCollection = db.collection("users");

    const userId = request.body.userId;

    let data = await userCollection.deleteOne({_id:new ObjectId(userId)});

    response.status(200).json({
        "response":data,
    })
})



export default  userRouting;