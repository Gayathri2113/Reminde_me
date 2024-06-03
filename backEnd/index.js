const express = require("express");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.get('/', (req,res) => {
    res.status(200).send("Server is up..! Now you can code");
});


app.listen(port,() => {
    console.log(`Server is running on ${port}`);
});