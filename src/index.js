// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import ConnectDB from "./db/index.js";
import { configDotenv } from "dotenv";
dotenv.config({path:'./env'})
ConnectDB()









// import mongoose from "mongoose"
// import { DB_NAME } from "./constants";
// import  express, { application }  from "express";
// ;(async ()=>{
//     try {
//        await  mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//        application.on("error",(error)=>{console.log("ERR",error);throw error})
//     } catch (error) {
//         console.error("ERROR",error)
//         throw err}
//         app.listen(process.env.PORT,()=>{console.log(`App listening on PORT ${procee.env.PORT}`)})
// })()