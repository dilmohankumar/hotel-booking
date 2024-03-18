import Tour from "../models/Tour.js";

export const createTour = async (req, res) => {
    try {
        const newTour = new Tour(req.body);
        const savedTour = await newTour.save();
        res.status(200).json({
            success: true,
            message: "Tour successfully created",
            data: savedTour,
        });
    } catch (error) {
        console.error("Error creating tour:", error);
        res.status(500).json({ success: false, message: "Failed to create tour. Please try again." });
    }
};


export const updateTour = async (req, res) => {
    const id = req.params.id
    try {
        const updateTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true });

        res.status(200).json({
            success: true,
            message: "Tour updated",
            data: updateTour,
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Tour failed updated",

        });
    }
};

export const deleteTour = async (req, res) => {
    const id = req.params.id;
    try {
        await Tour.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Tour deleted",
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Tour failed to delete",
        });
    }
};

export const getSingleTour = async (req, res) => {
    console.log(`fskdjhfkjsh`)
    const id = req.params.id;
    try {
        const tour = await Tour.findById(id).populate("reviews");

        res.status(200).json({
            success: true,
            message: "succesful",
            data: tour
        });

    } catch (err) {
        console.log(err)
        res.status(404).json({
            success: false,
            message: "not found",
        });
    }
};
export const getAllTour = async (req, res) => {

    const page = parseInt(req.query.page);


    try {
        const tours = await Tour.find({}).populate("reviews")
            .skip(page * 8).limit(8);
        res.status(200).json({
            success: true,
            count: tours.length,
            message: "successful",
            data: tours,
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "not found",
        });
    }
};

export const getTourBySearch = async (req, res) => {
    console.log(`working`,req.query)
    const city = new RegExp(req.query?.city, "i")
    const distance = parseInt(Number(req.query?.distance))
    const maxGroupSize = parseInt(Number(req.query?.maxGroupSize))
    console.log(distance)
    console.log(maxGroupSize)
    try {
        const tours = await Tour.find({ city, distance: { $gte: distance }, maxGroupSize: { $gte: maxGroupSize }, }).populate("reviews");

        res.status(200).json({
            success: true,

            message: "successful",
            data: tours,
        });
    }
    catch (err) {
        console.log(err)
        res.status(404).json({
            success: false,
            message: "not found",
        });
    }
}

// ----------
export const getFeaturedTour = async (req, res) => {




    try {
        const tours = await Tour.find({ featured: true }).populate("reviews")
            .limit(8);
        res.status(200).json({
            success: true,

            message: "successful",
            data: tours,
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "not found",
        });
    }
};

// -----------------------------
export const getTourCount = async (req, res) => {
    try {
        const tourCount = await Tour.estimatedDocumentCount();
        res.status(200).json({ success: true, data: tourCount });
    } catch (err) {
        res.status(500).json({ success: false, message: "failed to fetch" });
    }
};
