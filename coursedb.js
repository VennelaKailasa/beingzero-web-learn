const mongoose=require('mongoose');
var courseSchema=new mongoose.Schema({
    coursename:String,
    isDelete:Boolean
});
var coursemodel=mongoose.model('coursesTable',courseSchema);
module.exports=coursemodel;

var list=[];
module.exports.createcourse=function(obj,callback){
    var course=new coursemodel(obj);
    list.push(course);
    course.save();
 }

// module.exports.getallcourses=function(courseobjarr){
//     coursemodal.find({},function(err,courseobjarr){
//         if(err){
//             console.log("Error Occured"+err);
//         }
//          else{

//            console.log("retreived"+courseobjarr);
//           }
//     })
// };

