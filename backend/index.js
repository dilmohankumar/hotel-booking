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

// Define CORS options
const corsOptions = {
    origin:`https://hotel-booking-fllu6jwiu-dilmohans-projects.vercel.app`,
    credentials: true // Set to true if you're using cookies or authorization headers
};

// Connect to MongoDB
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

// Middleware
app.use(express.json());
app.use(cors(corsOptions)); // Apply CORS middleware
app.use(cookieParser());

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
