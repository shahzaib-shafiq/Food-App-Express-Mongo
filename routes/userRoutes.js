import express from 'express';
import { getUserProfile,updateUserProfile ,resetUserPassword,updateUserPassword } from '../controllers/userController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/profile',authMiddleware,getUserProfile)
router.put("/updateUser",authMiddleware, updateUserProfile);
router.post("/updatePassword",authMiddleware, updateUserPassword);
router.post("/resetPassword",authMiddleware, resetUserPassword);


export default router;