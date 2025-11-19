const express = require('express');
const mongoose = require('mongoose');
const { boardRouter } = require('./routes/board');
require('dotenv').config();
const app = express();

app.use(express.json());
app.use("/boards",boardRouter)
async function main(){
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(3000);
    console.log("listening to the port 3000");
}

main();