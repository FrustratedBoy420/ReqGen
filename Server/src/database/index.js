import mongoose from "mongoose";

const connectDB=async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ Connected ");
        
        
    } catch (error) {
        console.log("❌ Not Connected ",error);
        process.exit(1)
    }
}

export default connectDB;