const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

// const db = require("./models")

const PORT = 3001;


app.listen(3001, () => {
    console.log(`Server Running on port: ${PORT}`);
})