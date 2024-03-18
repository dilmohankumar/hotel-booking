import Review from '../models/Review.js';
import Tour from '../models/Tour.js';
export const createReview = async (req, res) => {

    const tourId = req.params.tourId;
    console.log(`hgjhgj`,tourId)
    console.log(req.body)
    const newReview = new Review({ ...req.body });

    try {
        const savedReview = await newReview.save();
        console.log(savedReview)
        await Tour.findByIdAndUpdate(tourId, {
            $push: { reviews: savedReview._id },
        });
        res
            .status(200)
            .json({ success: true, message: 'Review submitted', data: savedReview });

    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'Failed to submit' });
    }
};