import User from "../models/User.js";

export const createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(200).json({
            success: true,
            message: "User successfully created",
            data: savedUser,
        });
    } catch (error) {
        console.error("Error creating User:", error);
        res.status(500).json({ success: false, message: "Failed to create User. Please try again." });
    }
};


export const updateUser = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true });

        res.status(200).json({
            success: true,
            message: "User updated",
            data: updatedUser,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "User failed to update",
        });
    }
};

export const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        await User.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "User deleted",
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "User failed to delete",
        });
    }
};

export const getSingleUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id);

        res.status(200).json({
            success: true,
            message: "Successful",
            data: user
        });

    } catch (error) {
        res.status(404).json({
            success: false,
            message: "Not found",
        });
    }
};
export const getAllUser = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({
            success: true,
            message: "Successful",
            data: users,
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "Not found",
        });
    }
};