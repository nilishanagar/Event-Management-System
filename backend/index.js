require('dotenv').config();  // Load environment variables

const express = require("express");
const mongoose = require("mongoose");
const eventRoute = require("./controller/eventRoute");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();

const PORT = process.env.PORT || 4000;

// CORS Configuration
const corsOptions = {
    origin: process.env.NODE_ENV === 'production' ? 'https://your-frontend-app.netlify.app' : 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true, // Allow cookies (sessions) to be sent with the request
};

app.use(cors(corsOptions));


// Connect to MongoDB
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URI);
var db = mongoose.connection;

db.on("open", () => console.log("Connected to DB"));
db.on("error", () => console.log("Error occurred"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Welcome to the backend!");
});

// API Routes
app.use('/eventRoute', eventRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
