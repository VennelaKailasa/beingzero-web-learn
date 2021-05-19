const express = require('express');
const app = express();

const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname+"/frontend"));


const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://vennela00:"+"ravi098"+"@cluster0.vkhlz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true});
mongoose.connection.on('connected',function(){
    console.log("Database connected");
})
const table = require("./backend/models/coursemodel");


app.use(express.urlencoded({extended:true}));
app.use(express.json());

// app.get("/crud", function(req, res){
//   res.sendFile(__dirname+"/frontend/html/coursebackend.html");
// })
// app.get('/crud/get',function(req, res){
//      table.find()
//     .then((result) =>{
//         res.send(result);
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// })
// app.post('/crud/post',function(req,res){
//      var newUser= req.body;
//     const newTable = new table({
//         names : newUser.names,
//         articles : newUser.articles,
//         id : newUser.id
//     })
//     console.log(newTable);
//     newTable.save();
// })
// app.delete('/crud/del/:id', function(req, res){
//     var i=req.params.id
//     table.findByIdAndDelete(i, (err)=>{
//         if(err){
//             console.log('Error:'+err);
//         }
//         else{
//             console.log('Success');
//         }
//     })
// })

// app.put('/crud/put/:id', function(req, res){
//     var i=req.params.id

//     table.findById(i, function (err,Obj) {
//         if(err){
//             console.log('Error:' + err);
//         }
//         else{
//             table.findByIdAndUpdate(i, {articles: req.body.articles }, function(){})
//         };
//     });


// })
app.get("/", function(req, res){
    res.send("Welcome to Vennela's Basic Site");
})
// app.get("/home", function(req, res){
//     res.send("Welcome to home page");
// })
// app.get("/intro",function(req,res){
	
// 	res.sendFile(__dirname+"/frontend/html/htmlintro.html");
	
// })
// app.get("/resume",function(req,res){
	
// 	res.sendFile(__dirname+"/frontend/html/resume.html");
	
// })
// app.get("/search",function(req,res){
	
// 	res.sendFile(__dirname+"/frontend/html/gglsearchengine.html");
	
// })
// app.get("/color",function(req,res){
	
// 	res.sendFile(__dirname+"/frontend/html/color.html");
	
// })
// app.get("/login",function(req,res){
	
// 	res.sendFile(__dirname+"/frontend/html/login.html");
	
// })
// app.get("/piechart",function(req,res){
	
// 	res.sendFile(__dirname+"/frontend/html/piechart.html");
	
// })


//mongodb+srv://vennela00:<password>@cluster0.vkhlz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority






// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
