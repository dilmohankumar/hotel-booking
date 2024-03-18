import express from "express";

import { verifyUser, verifyAdmin } from "../utils/verifyToken.js"; // Added verifyAdmin import
import { createBooking, getAllBooking, getBooking } from "../controllers/bookingControllers.js"; // Added getBooking import
const router = express.Router();

router.post("/", verifyUser, createBooking);
router.get("/:id", verifyUser, getBooking); // Changed route to use dynamic parameter ":id"

router.get("/", verifyAdmin, getAllBooking); // Changed route to use GET method for getAllBooking

export default router;
