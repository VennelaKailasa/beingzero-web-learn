const express = require('express');

const app = express();
app.use(express.static(__dirname+"/frontend"));
app.get("/", function(req, res){
    res.send("Welcome to Vennela's Basic Site");
})
app.get("/home", function(req, res){
    res.send("Welcome to home page");
})
app.get("/resume",function(req,res){
	
	res.sendfile(__dirname+"/frontend/html/resume.html");
	
})


// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
