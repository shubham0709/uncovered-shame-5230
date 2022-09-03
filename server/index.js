const express = require("express");
const cors = require('cors');
require("dotenv").config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT;
const { connection } = require("./connection");
const { dataModel } = require("./models/data.model");


const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}

app.enable('trust proxy');
app.use(cors(corsOptions));


app.get("/getdata", async (req, res) => {
    const data = await dataModel.find();
    res.send(data);
})

app.get("/", (req, res) => {
    res.send("home page");
})

app.listen(PORT, async () => {
    try {
        await connection;
        console.log("database connected");
    } catch {
        console.log("database connection error");
    }
    console.log("server starte on PORT : " + PORT);
});