import express from 'express';
import {hostname} from "os";


const  app:express.Application = express();

const localhost:string = "localhost";
const portNumber:number = 5000;



app.get('/',(reqeust:express.Request,response:express.Response)=>{
    response.status(200);
     response.send("<h1>Welcome</h1>");
});


app.post('/create',(reqeust:express.Request,response:express.Response)=>{
    response.status(200);
    response.send("<h1>Welcome</h1>");
});

app.put('/update',(reqeust:express.Request,response:express.Response)=>{
    response.status(200);
    response.send("<h1>Welcome</h1>");
})

app.delete('/delete',(reqeust:express.Request,response:express.Response)=>{
    response.status(200);
    response.send("<h1>Welcome</h1>");
})
app.listen(portNumber,localhost,()=>{
    console.log("Welcome to expres ")
});