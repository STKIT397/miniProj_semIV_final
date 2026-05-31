// const express = require('express'); //import express -> helps to create server easily
// const app = express(); //create app(server)
// app.use(express.json());//Incoming data = JSON format, Without this → server can't read Python data
// /*
// Normal Function
// function add(a, b) { return a + b; }
// Works inside same program

// API : An API is an endpoint that allows different applications to communicate using HTTP requests and responses
// It allows another system (Python, frontend, etc.) to communicate with your server
// app.post("/status", ...)
// Works between different systems
// Python ↔ Node.js
// Frontend ↔ Backend
// App ↔ Server
// */
// //API to receive occupancy data ,this line creates an API.
// app.post('/status',(req, res)=>{ //'/status' = API route
// const {classroom,status} = req.body; //extract data from req body
// console.log(req.body);
// console.log("Received Data:");
// console.log("Classroom:", classroom);
// console.log("Status:", status);
// res.send("Data received successfully");
// });
// app.listen(4000, () => {
//     console.log("Server running on port 4000");
// });

const express = require("express");
const app = express();

app.use(express.json());

// API to receive data from Python
app.post("/status", (req, res) => {
    const data = req.body;

    console.log("📥 Received from AI:");
    console.log(data);

    res.send("✅ Data received");
});

app.listen(3000, () => {
    console.log("🚀 Server running on port 3000");
});