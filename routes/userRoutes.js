import express from 'express';
import { getUserProfile,updateUserProfile ,resetUserPassword,updateUserPassword, deleteUser } from '../controllers/userController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/profile',authMiddleware,getUserProfile)
router.put("/updateUser",authMiddleware, updateUserProfile);
router.post("/updatePassword",authMiddleware, updateUserPassword);
router.post("/resetPassword",authMiddleware, resetUserPassword);
router.delete("/deleteUser/:id",authMiddleware, deleteUser);



export default router;