import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import {addTransactionApi, getTransactionAPi} from "./../server/controllers/transaction.js";
import path from 'path';

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000

const connectMongoDB = async ()=>{
    const conn = await mongoose.connect(process.env.MONGODB_URL)
    if(conn){
    console.log("mongoDB is connected")
    }
}
connectMongoDB();

app.post('/api/v1/transactions',addTransactionApi)

app.get('/api/v1/transactions',getTransactionAPi)

const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
  });
}

app.listen(PORT, (req,res)=>{
    console.log(`server is runnig on ${PORT}`)
})

