import express from "express";

import bcrypt from "bcrypt";
import {body,validationResult} from "express-validator";

const  userRouting = express.Router();


userRouting.get('/',(reqeust:express.Request,response:express.Response)=>{
    response.status(200);
    response.send("<h1>Welcome</h1>");
});


userRouting.post('/create',(reqeust:express.Request,response:express.Response)=>{
    response.status(200);
    response.send("<h1>Welcome</h1>");
});

userRouting.put('/update',(reqeust:express.Request,response:express.Response)=>{
    response.status(200);
    response.send("<h1>Welcome</h1>");
})

userRouting.delete('/delete',(reqeust:express.Request,response:express.Response)=>{
    response.status(200);
    response.send("<h1>Welcome</h1>");
})

userRouting.post("/createNewUser",[body('email').not().isEmpty().isEmail().withMessage("email reuired"),body('name').not().isEmpty(),],async(request:express.Request,response:express.Response)=>{
    let body = request.body;


    let {email,password,name} = request.body;
    let error = validationResult(request);

    if(!error.isEmpty()){
        response.status(400).json({
            "status":response.statusCode,
            "data":body
        });
    }
    else{
        let salt = await bcrypt.genSalt();
        let hashPassword = await bcrypt.hash(password,salt);

        response.status(200).json({
            "status":response.statusCode,
            "data":{
                "email":"@gmail",
                "password":"12345",
                "name":"Pranjul"
            },
            "hashPassword":hashPassword
        });
    }


    // if(email == "@gmail" && password == "12345"){
    //     response.status(200).json({
    //         "status":response.statusCode,
    //         "data":body,
    //         "msg":"user login successfully"
    //     });
    // }
    // else{
    //     response.status(401).json({
    //         "status":response.statusCode,
    //         "data":body,
    //         "msg":"invalid email password"
    //     })
    // }




    //response.status(200).json(body);

})
export default  userRouting;