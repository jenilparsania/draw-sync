const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

app.use(express.json());
async function main(){
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(3000);
    console.log("listening to the port 3000");
}

main();