const express = require('express');

const app = express();

app.get("/", function(req, res){
    res.send("Welcome to Vennela's Basic Site");
})
app.get("/home", function(req, res){
    res.send("Welcome to home page");
})
app.get("/resume",function(req,res){
	console.log("resume page opened");
	res.sendfile(__dirname+"/resume.html");
	
})


// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
