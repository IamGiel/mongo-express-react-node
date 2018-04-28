//Express Starter refresher
//https://www.youtube.com/watch?v=eB9Fq9I5ocs&t=237s

const express = require('express');//#1
const bodyParser = require('body-parser');//#2
const mongoose = require('mongoose');

const app = express();//#3
app.get('/', (req, res)=>{
  res.send("🌎 is 👀 👍, nice work!!!");
})

const port = 3200;
app.listen(port, ()=>{
  console.log(`🌎 can 👀 through port ${port}`)
})

