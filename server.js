const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app=express();

const PORT=process.env.PORT;

app.get("/",async(req,res)=>{
console.log("Server is up!");
});

app.listen(PORT, "0.0.0.0", () =>
console.log(`Server is running successfully on PORT ${PORT}`)
);