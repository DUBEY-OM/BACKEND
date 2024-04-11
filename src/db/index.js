import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
;const ConnectDB=async ()=>{
        try {
           const ConnectionInstance=await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            console.log(`\n MongoDB Connected !! DB_HOST:${ConnectionInstance,connection.host}`)
        } catch (error) {
            console.error("MONGO_DB CONNECTION FAILED",error);
            process.exit(1)}
            app.listen(process.env.PORT,()=>{console.log(`App listening on PORT ${procee.env.PORT}`)})
        }
        export default ConnectDB