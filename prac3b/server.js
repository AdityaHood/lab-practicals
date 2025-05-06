const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes')

const app = express();
app.use(express.json());
app.use('/',userRoutes);
app.listen(3000,()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/wadpractical").then(()=>{
        console.log("Connected to MongoDB");
    }).catch((err)=>{
        console.log("Error connecting to MongoDB", err);
    });
    console.log("Server is running on port 3000");
})

