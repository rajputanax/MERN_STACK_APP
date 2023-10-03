
const express = require('express');
const app = express();
const connectDB = require('./config/db') 
require('dotenv').config('.env');
app.use(express.json())
const PORT = process.env.PORT || 3030;





const start = async ()=>{
    await connectDB();
   try{
       app.listen(PORT,()=>{
            console.log(`Server is listening on port ${PORT}`)    
        });
   } catch(error){
    console.error(`internal server ${error}`)
   }
}
           