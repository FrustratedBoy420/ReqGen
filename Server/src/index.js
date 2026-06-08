import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./database/index.js";

dotenv.config({
  path: "./.env",
});
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Only listen to port if not running on Vercel (serverless environment)
if (!process.env.VERCEL) {
  app.listen(port, () => {
    console.log(`We are listening http://localhost:${port}`);
  });
}

export default app;
