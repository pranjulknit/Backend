import http, {IncomingMessage, ServerResponse} from "http";
import * as url from "url";
import * as os from "os";
import * as fs from "fs";
import * as path from "path";
import {UserData} from "./user/user_data";


const hostName:string = "localhost";
const portNumber:number = 3001;

let server = http.createServer((request:IncomingMessage, res:ServerResponse)=>{
      res.statusCode = 200;

      res.setHeader("content-type","text/html");
      let _url = request.url;
      let queryParams = url.parse(_url!).query;
      let pathName = url.parse(_url!).pathname;
      
      let filterQuery = queryParams?.split("data=").pop()!.replaceAll("%20"," ");
      let user = new UserData();
      if(pathName == "/users"){
            let users;
            function callback(result : string|undefined){
                  users = result;
                  res.write(`<h2>${result}</h2>`);
                  res.end();
            }

            user.getAllUsers(callback);

            console.log(`server ${users}`)
            
      }else if(pathName == "/data"){
            // data // logic

           

            res.write(`<h2>data</h2>`);

      }
      else if(pathName == "/os"){
            let osMap = {
                  osMem: os.totalmem(),
                  homedir: os.homedir(),
                  freeMem: os.freemem(),
                  sysName: os.hostname()
            }

            res.write(`<h2>${url.parse(_url!).pathname}</h2> <br/> <h2>${JSON.stringify(osMap)}</h2></br><h2>${_url}</h2> </br> <h2> query :${filterQuery}</h2>
            res.end();
      `);


      }
      else if (pathName == "/fs"){
            //console.log(__dirname)
            fs.readFile(path.join(__dirname,"users_response.json"),"utf-8",(error,result)=>{
                  // console.log(error);
                  // console.log(result);
                  if(error){
                        res.end(`${error}`);
                  }

                  res.write(`<pre> ${result}</pre>`);
                  res.end();
            })



      }
      else if (pathName == "/createUser"){


            let data = user.createUser("pranjul")

            res.end(`${data}`);
      }
     else{
         res.write("path not found");
         }
     
    //  res.end();
})

server.listen(portNumber,hostName,()=>{
      console.log("Hello my first server");


      console.log(`http://${hostName}:${portNumber}`);

})