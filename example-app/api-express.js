const express = require("express");

const app = express();
// routes
app.get("/", (req,res) => {
    res.send("Hello World!");
});

app.get("/about", (req,res) => {
    res.send("About Page");
});

app.get("/api/:name", (req,res) => {
    res.send(`Hello, ${req.params.name}`)
});

app.get("/api/number/:number", (req,res) => {
    const number = req.params.number;
    res.send(`Your number, ${number}`);
});

app.get("/api/number/:number1/:number2", (req,res) => {
    const number1 = parseInt(req.params.number1);
    const number2 = parseInt(req.params.number2);
    // const sum = number1 + number2;
   // res.send(`Your number, ${sum}`);
    res.send(`Your number, ${number1 + number2}`);
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});