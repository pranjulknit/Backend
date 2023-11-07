import express from "express";

const post_Routing = express.Router();

post_Routing.get('/getpost/:id',(request:express.Request,response:express.Response)=>{
    let postId = request.params.id;

    console.log("postId"+postId);

    response.status(200).send(`<h1>${postId}</h1>`)
})


export default  post_Routing;