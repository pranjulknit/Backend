import {IncomingMessage, ServerResponse} from "http";
import os from "os";
import path from "path";
import fs from "fs";
import url from "url";
import {UserData} from "../user/user_data";
import {json} from "stream/consumers";



class  AppRouting{

      static  appRouting(request:IncomingMessage,response:ServerResponse){
          let _url = request.url;
         let queryParams = url.parse(_url!).query;
          let pathName = url.parse(_url!).pathname;

          let user  = new UserData();

          let method = request.method;


          if(pathName == "/users" && method == "GET"){
              let users;
              function callback(result : string|undefined){
                  users = result;
                  response.write(`<h2>${result}</h2>`);
                  response.end();
              }

              user.getAllUsers(callback);

              console.log(`server ${users}`)

          }
          else if(pathName == "/os" && method == "GET"){
              let osMap = {
                  osMem: os.totalmem(),
                  homedir: os.homedir(),
                  freeMem: os.freemem(),
                  sysName: os.hostname()
              }

              response.write(`<h2>${url.parse(_url!).pathname}</h2> <br/> <h2>${JSON.stringify(osMap)}</h2></br><h2>${_url}</h2> </br> <h2> query </h2>
            res.end();
      `);


          }
          else if (pathName == "/fs" && method == "GET"){
              //console.log(__dirname)
              fs.readFile(path.join(__dirname,"users_response.json"),"utf-8",(error,result)=>{
                  // console.log(error);
                  // console.log(result);
                  if(error){
                      response.end(`${error}`);
                  }

                  response.write(`<pre> ${result}</pre>`);
                  response.end();
              })



          }
          else if (pathName == "/createUser" && method == "POST"){

                console.log();
                let body = "";
                request.on('data',(chunk)=>{
                    body += chunk;
                })
                    .on('end',()=>{

                        let jsonResponse = JSON.parse(body);

                        console.log(body);

                        response.end(`<h1 style="color: green">${jsonResponse.name} created successfully</h1>`);
                    })
              let data = user.createUser("pranjul")

              response.end(`${data}`);
          }
          else  if("/login" && method == "POST"){
                 let body = "";

                request.on('data',(chunk)=>{
                    body += chunk;
                })
                    .on('end',()=>{
                        let jsonResponse = JSON.parse(body);

                        if(jsonResponse.email == "@gmai",jsonResponse.password == "123456"){
                            response.end("login successfully");
                        }
                        else{
                            response.end("Invalid credentials");
                        }
              })
          }
          else{
              response.write("path not found");
          }
      }
}


export default  AppRouting;