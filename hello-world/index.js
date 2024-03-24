const express= require("express");
const mysql = require("mysql2");
const app = express();

const connection = mysql.createPool({
    connectionLimit: 10,
    host: "mysql-service",
    user: "root",
    password: "password",
    database: "devopsakademi",
}); 

connection.getConnection((err, connection) => {
    if(err){
        console.log("Error connecting to database");
    } else {
        console.log("Connected to database");
    }
});

app.get("/", (req,res)=>{
    res.send("Hello World");
});

app.listen(3000, ()=>{
    console.log("Server is starting on port 3000");
});