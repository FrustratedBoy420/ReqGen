    import express from "express";
    import cors from "cors";
    import generateideaplan from "./routes/auth.routes.js";
    import logger from "./utils/logger.js";
    import morgan from "morgan";
    import cookieParser from "cookie-parser";
    const app = express();

    const allowedOrigins = [
      "http://localhost:5173",
      "https://req-gen-83ef.vercel.app"
    ];

    app.use(cors({
      origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
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

    // Global Error Handler Middleware
    app.use((err, req, res, next) => {
      const statusCode = err.statuscode || err.statusCode || 500;
      res.status(statusCode).json({
        success: false,
        message: err.message || "Internal Server Error",
        errors: err.errors || []
      });
    });

    export default app;