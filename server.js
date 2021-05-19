const express = require('express');
const app = express();

const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname+"/frontend"));
app.use(express.static(__dirname+"/backend"));

const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://vennela00:"+"ravi098"+"@cluster0.vkhlz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true});
mongoose.connection.on('connected',function(){
    console.log("Database connected");
})
var courses=require('./coursedb.js');
app.post("/sub",function(req,res){
    var x={"coursename":req.body.cinp};
    courses.createcourse(x);
    res.sendFile(__dirname+"/frontend/html/course.html");

})

app.get("/courses",function(req,res){
    res.sendFile(__dirname+"/frontend/html/courses.html");
})




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
app.get("/piechart",function(req,res){
	
	res.sendFile(__dirname+"/frontend/html/piechart.html");
	
})
app.get("/todo",function(req,res){
	
	res.sendFile(__dirname+"/frontend/html/todo.html");
	
})
app.get("/ls",function(req,res){
	
	res.sendFile(__dirname+"/frontend/html/ls.html");
	
})
//mongodb+srv://vennela00:<password>@cluster0.vkhlz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority






// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
