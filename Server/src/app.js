import express from "express";
import cors from "cors";
import generateideaplan from "./routes/auth.routes.js";
import logger from "./utils/logger.js";
import morgan from "morgan";
import cookieParser from "cookie-parser";
const app = express();

// middleware
app.use(cors({
  origin: "https://req-gen-chi.vercel.app/",
  credentials: true,
}));
app.use(express.json());

const morganFormat = ":method :url :status :response-time ms";

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);
// test route

app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("Hello World");
});

// main route
app.use("/api", generateideaplan);

export default app;