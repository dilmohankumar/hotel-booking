import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRouter from "./routes/auth.js";
import bookingRouter from "./routes/booking.js";
import reviewRouter from "./routes/reviews.js";
import tourRouter from "./routes/tour.js";
import userRouter from "./routes/users.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1); // Exit the process if MongoDB connection fails
    }
};

// // Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: `*`,
        origin: "http://localhost:3000",
        credentials: true
    })
);


// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//     res.header("Access-Control-Allow-Credentials", true);
//     next();
// });
// Routes


app.use("/api/v1/auth", authRouter);
app.use("/api/v1/tour", tourRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/reviews", reviewRouter);
app.use("/api/v1/booking", bookingRouter);

// Start the server
app.listen(port, async () => {
    try {
        await connect();
        console.log("Server listening on port", port);
    } catch (error) {
        console.error("Server failed to start:", error);
    }
});
