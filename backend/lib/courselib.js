const coursemodal=require('../modals/coursemodal.js');
module.exports.createcourse=function(courseobject,callback){
    var course=new coursemodal(courseobject);
    course.save()
    
}
var data={};

module.exports.getallcourses=function(courseobjarr){
    var query={};
    coursemodal.find(query,function(err,courseobjarr){
        if(err){
            console.log("Error Occured"+err);
        }
         else{
            // data=courseobjarr;
            //  console.log(courseobjarr);
            return courseobjarr;
          }
    })
  
};
module.exports.getcoursebyid=function(callback){
    coursemodal.findById(id,function(err,courseobject){
        if(err)
        console.log("Error Occured"+err);
        else console.log(JSON.stringify(courseobjarr));
    })
}
module.exports.update=function(callback){
    var updateobj;
    coursemodal.findByIdAndUpdate(id,updateobj,function(err,obj){
        if(err)console.log("Error Occured"+err);
        else console.log("Done updating");
    })
    module.exports.delete=function(id,callback){
        coursemodal.findByIdAndDelete(id,function(err,obj){
            if(err)
            console.log("Error Occured"+err);
            else console.log(JSON.stringify(courseobject));
        })
    }
}