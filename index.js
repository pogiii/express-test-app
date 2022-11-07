const express = require("express");
const res = require("express/lib/response");

const app = express();

app.get("/", (req,res) => {
    res.send("hello world")
})

app.get("/path/mypath", (req,res) => {
    res.send("this is a path.")
})

app.get("/a/:num", (req,res) => {
    res.send(req.params.num);
})


app.post("/b/:num", (req,res) => {
    res.send(req.params.num);
})

app.listen(80, () => {
    console.log("server is running")
})