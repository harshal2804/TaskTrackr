import dotenv from "dotenv";
const environment = process.env.NODE_ENV;

try{
    if(environment=="development"){
        dotenv.config({ path: ".env.dev"});
    }
    else if(environment=="production"){
        dotenv.config({ path: ".env.prod"});
    }
    else if(environment=="test"){
        dotenv.config({ path: ".env.test"});
    }
    else{
        dotenv.config();
    }
} catch(err){
    console.log("Dotenv config error: ", err);
}