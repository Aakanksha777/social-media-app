import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017" , {useNewUrlParser : true})

const conn = mongoose.connection


conn.on('open', () => {
    console.log('connected to mongoDB')
});