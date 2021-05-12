const express = require('express');

const app = express();
app.use(express.static(__dirname+"/frontend"));
app.get("/", function(req, res){
    res.send("Welcome to Vennela's Basic Site");
})
app.get("/home", function(req, res){
    res.send("Welcome to home page");
})
app.get("/intro",function(req,res){
	
	res.sendFile(__dirname+"/frontend/html/htmlintro.html");
	
})
app.get("/resume",function(req,res){
	
	res.sendFile(__dirname+"/frontend/html/resume.html");
	
})
app.get("/search",function(req,res){
	
	res.sendFile(__dirname+"/frontend/html/gglsearchengine.html");
	
})
app.get("/color",function(req,res){
	
	res.sendFile(__dirname+"/frontend/html/color.html");
	
})
app.get("/login",function(req,res){
	
	res.sendFile(__dirname+"/frontend/html/login.html");
	
})
app.get("/register",function(req,res){
	
	res.sendFile(__dirname+"/frontend/html/register.html");
	
})
app.get("/piechart",function(req,res){
	
	res.sendFile(__dirname+"/frontend/html/piechart.html");
	
})
app.get("/todo",function(req,res){
	
	res.sendFile(__dirname+"/frontend/html/todo.html");
	
})
app.get("/ls",function(req,res){
	
	res.sendFile(__dirname+"/frontend/html/ls.html");
	
})





// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
