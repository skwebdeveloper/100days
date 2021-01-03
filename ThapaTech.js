const express = require("express");
const path = require("path");
const app = express();

// Using HTML TEMPLATE 
const staticPath = path.join(__dirname, "./public");
app.use(express.static(staticPath));






app.get("/", (req, res) => {
    res.send("Hye 😁");
});

app.get("/about", (req, res) => {
    res.send("About 😁");
});

app.get("/contact", (req, res) => {
    res.send("Contact 😁");
});

app.get("/temp", (req, res) => {
    res.send("Temp 😁");
});



app.listen(8000, () => {
    console.log("Running");
});