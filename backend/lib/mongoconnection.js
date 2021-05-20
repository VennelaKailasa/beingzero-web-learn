const mongoose=require('mongoose');
const config=require('../config/config');

var connectionString=config.mongoConnectionString;

module.exports={
    connect:function(){
    mongoose.connect(connectionString,{useNewUrlParser:true,useUnifiedTopology:true});
    mongoose.connection.on('connected',function(){
    console.log("Database connected");
})
    }
}