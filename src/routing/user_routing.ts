import express from "express";



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

userRouting.post("/login",(request,response)=>{
    let body = request.body;


    let {email,password} = request.body;

    if(email == "@gmail" && password == "12345"){
        response.status(200).json({
            "status":response.statusCode,
            "data":body,
            "msg":"user login successfully"
        });
    }
    else{
        response.status(401).json({
            "status":response.statusCode,
            "data":body,
            "msg":"invalid email password"
        })
    }

    //response.status(200).json(body);

})
export default  userRouting;