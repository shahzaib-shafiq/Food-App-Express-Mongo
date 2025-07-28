import userModel from '../models/userModel.js';

const getUserProfile = async (req, res) => {
    try {
        const userId = req.user.userId; // Assuming userId is set in the request by authentication middleware
        console.log("User ID from request:", userId);
        const user = await userModel.findById({_id:userId}); // Exclude password from response
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        user.password = undefined; // Remove password from user object
        res.json({ success: true, user });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching user profile', error: error.message });
    }
}

export { getUserProfile};