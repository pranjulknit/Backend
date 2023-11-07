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


export default  userRouting;