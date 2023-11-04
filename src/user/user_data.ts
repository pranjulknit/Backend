import * as fs from "fs";
import * as path from "path";




export class UserData{
    getAllUsers(callBack:(response:string| undefined)=>void):void{
        let userResponse:string;
         let dir = "../src"
        fs.readFile(path.join(__dirname,"users_response.json"),"utf-8",(err,result)=>{
            //console.log(`result + ${__dirname}`);
            userResponse = result;
            callBack((result));

        })


    }

    createUser(name:string){
        return "hello"+name;
    }
}