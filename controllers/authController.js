import userModel from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const registerUser = async (req, res) => {
    // Logic for registering a user
    try {
        const { userName, email, password, phone, address } = req.body;
        if (!userName || !email || !password || !phone || !address) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'User already exists' });
        }

        // Hashing Password
        // const saltRounds = 10;
        // const hashedPassword=bcrypt.hash(password, saltRounds)
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await userModel.create({ userName, email, password: hashedPassword, phone, address });
        const savedUser = await user.save();
        res.status(201).json({ message: 'User registered successfully', user: savedUser });

    } catch (error) {
        res.status(500).json({ success: false, message: 'Error registering user', error: error.message });
    }
};
    
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'Email and password are required' });
        }
        const user = await userModel.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        else {
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ success: false, message: 'Invalid credentials' });
            }
            const accessToken = jwt.sign(
                { userId: user._id },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );

            const refreshToken = jwt.sign(
                { userId: user._id },
                process.env.JWT_REFRESH_SECRET, 
                { expiresIn: '7d' }
            );

            // You can store the refreshToken in DB if needed or send it as an HttpOnly cookie
            res.json({
                success: true,
                message: 'User logged in successfully',
                user,
                accessToken,
                refreshToken,
            });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Error in login user', error: error.message });

    }
    // Logic for registering a user

};

export { registerUser, loginUser };
