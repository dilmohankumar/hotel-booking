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
const corsOption = {
    origin: 'https://hotel-booking-6uqnc4xix-dilmohans-projects.vercel.app', // Update with your frontend URL
    credentials: false
};

// Rest of your code remains the same...


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
           
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
    }
};


app.use(express.json());
app.use(cors(corsOption));
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/tour", tourRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/reviews", reviewRouter);
app.use("/api/v1/booking", bookingRouter);




app.listen(port, async () => {
    try {
        await connect();
        console.log("Server listening on port", port);
    } catch (error) {
        console.error("Server failed to start:", error);
    }
});
