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
const courselib=require('./backend/lib/courselib.js');
   var x=courselib.getallcourses();
    console.log(x);
app.get("/", function(req, res){
    // var x=[];
    // x=courselib.getallcourses();
    // console.log(x);
    // var content=document.getElementById("in").value;
    // console.log("content is"+content);
    res.sendFile(__dirname+"/frontend/html/courses.html");
})

app.post('/sub', function (req, res){
    var obj={"coursename":req.body.in}
    courselib.createcourse(obj,function(err,course){
        
    })
    //res.redirect('/')
    console.log("posted1 "+courselib.getallcourses());
    }
)
app.post('/posst',function(req,res){
    courselib.getallcourses();
    console.log("posted");
})
app.get("/by/:coursename",function(req,res){
    const cname=req.params.coursename;
    for(let i of x){
        if(i.coursename===cname){
            res.json(i);
            return;
        }
    }

});



const port=3000;
app.listen(port,(req,res)=>{
    console.log("port is running on 3000");
});