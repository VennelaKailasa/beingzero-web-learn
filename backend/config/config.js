module.exports={
    mongoConnectionString:process.env.MONGO_CONNECTION_STRING || 'mongodb+srv://vennela00:ravi098@cluster0.vkhlz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    webPort:process.env.PORT||3000
}