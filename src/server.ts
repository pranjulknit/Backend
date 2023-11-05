import http, {IncomingMessage, ServerResponse} from "http";
import * as url from "url";
import * as os from "os";
import * as fs from "fs";
import * as path from "path";
import {UserData} from "./user/user_data";
import App_routing from "./routing/app_routing";


const hostName:string = "localhost";
const portNumber:number = 3001;

let server = http.createServer((request:IncomingMessage, res:ServerResponse)=>{
      res.statusCode = 200;

      res.setHeader("content-type","text/html");
      // let _url = request.url;
      // let queryParams = url.parse(_url!).query;
      // let pathName = url.parse(_url!).pathname;
      //
      // let filterQuery = queryParams?.split("data=").pop()!.replaceAll("%20"," ");
      // let user = new UserData();

     
     App_routing.appRouting(request,res);
})

server.listen(portNumber,hostName,()=>{
      console.log("Hello my first server");


      console.log(`http://${hostName}:${portNumber}`);

})