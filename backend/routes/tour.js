import express from "express";
import { createTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, getTourCount, updateTour } from "../controllers/tourControllers.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
router.get("/BySearch", getTourBySearch);

router.get("/getFeaturedTour", getFeaturedTour);

router.get("/getTourCount", getTourCount);
router.get("/", getAllTour);
router.post("/", verifyAdmin, createTour);
router.get("/:id", getSingleTour);
router.put("/:id", verifyAdmin, updateTour);

router.delete("/:id", verifyAdmin, deleteTour);






export default router;

