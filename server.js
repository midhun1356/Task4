const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./db");


const app = express();


app.use(cors());

app.use(bodyParser.json());

app.use(express.static("public"));



// Register User

app.post("/register",(req,res)=>{


const {name,email,password}=req.body;


db.query(

"INSERT INTO users(name,email,password) VALUES(?,?,?)",

[name,email,password],


(err,result)=>{


if(err){

res.send({
message:"Email already exists"
});

}

else{

res.send({
message:"Registration Successful"
});

}


});


});




// Login


app.post("/login",(req,res)=>{


const {email,password}=req.body;



db.query(

"SELECT * FROM users WHERE email=? AND password=?",

[email,password],


(err,result)=>{


if(result.length>0){

res.send({

message:"Login Successful"

});

}

else{

res.send({

message:"Invalid Login"

});

}


});


});






// Get Blog Posts


app.get("/posts",(req,res)=>{


db.query(

"SELECT * FROM posts ORDER BY id DESC",

(err,result)=>{


res.json(result);


});


});







// Create Post


app.post("/create-post",(req,res)=>{


const {title,content}=req.body;



db.query(

"INSERT INTO posts(title,content) VALUES(?,?)",

[title,content],


(err,result)=>{


res.send({

message:"Post Created"

});


});


});





app.listen(3000,()=>{


console.log("Server running at 3000");


});
