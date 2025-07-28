import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Assuming Bearer token format
    if (!token) {
        return res.status(401).json({ success: false, message: 'Access denied, no token provided' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach user info to request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        return res.status(400).json({ success: false, message: 'Invalid token', error: error.message });
    }
}

export default authMiddleware;