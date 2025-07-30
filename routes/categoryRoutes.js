import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import {createCateogry} from '../controllers/categoryController.js';
const router = express.Router()

router.post('/create',authMiddleware,createCateogry)

export default router;
