const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
        const connect = await mongoose.connect('mongodb://localhost:27017',{
            useNewUrlParser: true,
            useUnifiedTopology :true
        });
        console.log("DataBase Connected ", connect.connection.host)

    }catch(error){
        console.log(error.message);
        process.exit(1);
    }

}

module.exports = connectDB;