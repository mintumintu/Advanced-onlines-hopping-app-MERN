const express = require('express');
const app = express();
require('dotenv').config();


//using all the middlewares
app.use(express.json());

app.listen(process.env.PORT,()=>{
    console.log("Server Started");
})