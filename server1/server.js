const express = require('express');
const app = express();

app.get('/' , (req,res)=>{
    res.send("hello world")
})

app.get('/about' , (req,res)=>{
    res.send("About page");
})

app.listen(3000 , ()=>{
    console.log("The server is running on port 3000");
})
