const express = require("express");

const app = express();

app.get("/", (req,res) => {
    res.send("Calculator");
});

app.get("/add/:num1/:num2", (req,res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    res.send(`Result: ${num1 + num2}`);
});

app.get("/subtract/:num1/:num2", (req,res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    if (num1 < num2) {
        res.send("Error: First number cannot be smaller than the second number for subtraction");
    } else {
        res.send(`Result: ${num1 - num2}`);
    }
});

app.get("/multiply/:num1/:num2", (req,res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    res.send(`Result: ${num1 * num2}`);
});

app.get("/divide/:num1/:num2", (req,res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    if (num2 === 0) {
        res.send("Error: Division by zero is not allowed");
    } else {
        res.send(`Result: ${num1 / num2}`);
    }
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});