const express = require('express');
const app = express();
const mongoose=require('mongoose');

const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const config=require('./backend/config/config');
const mongoconnection=require('./backend/lib/mongoconnection');

app.use(express.static(__dirname+"/frontend"));

// const connectionString=config.mongoConnectionString;
// // mongoose.connect("mongodb+srv://vennela00:"+"ravi098"+"@cluster0.vkhlz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true});
// // mongoose.connection.on('connected',function(){
// //     console.log("Database connected");
// // })
// mongoose.connect(connectionString,{useNewUrlParser:true,useUnifiedTopology:true});
// mongoose.connection.on('connected',function(){
//     console.log("Database connected");
// })

mongoconnection.connect();
const table = require("./backend/models/coursemodel");


app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/crud", function(req, res){
  res.sendFile(__dirname+"/frontend/html/coursebackend.html");
})
app.get('/crud/get',function(req, res){
     table.find()
    .then((result) =>{
        res.send(result);
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })
})
app.post('/crud/post',function(req,res){
     var newUser= req.body;
    const newTable = new table({
        names : newUser.names,
        articles : newUser.articles,
        id : newUser.id
    })
    console.log(newTable);
    newTable.save();
})
app.delete('/crud/del/:id', function(req, res){
    var i=req.params.id
    table.findByIdAndDelete(i, (err)=>{
        if(err){
            console.log('Error:'+err);
        }
        else{
            console.log('Success');
        }
    })
})

app.put('/crud/put/:id', function(req, res){
    var i=req.params.id

    table.findById(i, function (err,Obj) {
        if(err){
            console.log('Error:' + err);
        }
        else{
            table.findByIdAndUpdate(i, {articles: req.body.articles }, function(){})
        };
    });


})
app.get("/accenture",function(req,res){
    res.sendFile(__dirname+"/frontend/html/accenture.html");
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
app.get("/signin",function(req,res){
	
	res.sendFile(__dirname+"/frontend/html/signin.html");
	
})
app.get("/register",function(req,res){
	
	res.sendFile(__dirname+"/frontend/html/register.html");
	
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
app.get("/tambola",function(req,res){

    res.sendFile(__dirname+"/frontend/html/tambola.html")
})


//mongodb+srv://vennela00:<password>@cluster0.vkhlz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

app.listen(config.webPort, function(){
    console.log("Server Starting running on http://localhost:"+config.webPort);
})
