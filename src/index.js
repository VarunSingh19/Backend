// import mongoose from "mongoose";
// import DB_NAME from constants;
import connectDB from "./db/index.js";
// require('dotenv').config({ path: './env' })
import dotenv from 'dotenv';
import express from 'express'
const app = express()
dotenv.config({
    path: './env'
})
connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`server is listening at PORT :${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log("MONGO DB connection failed!!! ", err)
    })





















/*
import express from "express";
const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
        app.on("Error", (error) => {
            console.log("Error :", error)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`server is listening at PORT : ${process.env.PORT}`)
        })
    } catch (error) {
        console.log("Error :", error)
        throw error
    }
})()
import constants from "./constants";
*/