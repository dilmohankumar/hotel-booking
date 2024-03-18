import User from "../models/User.js";
import bcrypt from "bcryptjs"

import jwt from "jsonwebtoken"; // Added import statement for jwt


export const register = async (req, res) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            photo: req.body.photo
        });

        await newUser.save()

        res.status(200).json({ success: true, message: "succesfully created" })

    } catch (err) {
        res.status(500).json({ success: false, message: "failed to created try again" })
    }

};

export const login = async (req, res) => {
    const email = req.body.email;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: "user not found" });
        }
        const checkCorrectPassword = await bcrypt.compare(req.body.password, user.password); 

        if (!checkCorrectPassword) {
            return res.status(401).json({ success: false, message: "incorrect password" });
        }

        const { password, role, ...rest } = user._doc;

        const token = jwt.sign({
            id: user._id, role: user.role
        }, process.env.JWT_SECRET_KEY, { expiresIn: "15d" });

        res.cookie("accessToken", token, {
            httpOnly: true,
            expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // Fixed token expiration
        }).status(200).json({
            token,
            success: true,
            message: "successfully login", // Fixed success message typo
            data: { ...rest },
            role,
        });

    } catch (err) {
        res.status(500).json({ success: false, message: "failed to login" });
    }
};
