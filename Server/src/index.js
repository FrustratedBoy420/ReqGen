import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./database/index.js";

dotenv.config({
  path: "./.env",
});
const port = process.env.PORT;

connectDB()
  .then(
    app.listen(port, () => {
    console.log(`We are listening http://localhost:${port}`);
  })).catch((err)=>{
      console.log("❌ Error in Connectivity",err);
      process.exit(1); 
  })

