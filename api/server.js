const mongoose =require('mongoose')
const express = require('express')
var app =express();
const cors = require('cors')

app.use(express.json())
app.use(cors())

const routes = require('./routes/taskrouter')


mongoose.connect("mongodb://127.0.0.1:27017/database",
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{console.log("connected")})
    .catch((Error)=>{console.log(Error)})

app.use('/api', routes); 


app.listen(5000,()=>{
    console.log("port is 8000")
})