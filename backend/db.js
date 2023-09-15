const mongoose = require('mongoose');
require("dotenv").config();
const  {REACT_APP_MONGO_URI} = process.env

const connectToMongo = ()=>{
    mongoose.connect(`${REACT_APP_MONGO_URI}`, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;
