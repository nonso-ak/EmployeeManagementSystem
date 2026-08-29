import mongoose from "mongoose";

const connectDB = async () => {
    try{
        mongoose.connection.on('connected', ()=> console.log
        ("Databse connected"))
        await mongoose.connect(process.env.MONGODBD_URI)
    } catch (error) {
        console.error("Databse connection failed:", error.message)
    }

}

export default connectDB;