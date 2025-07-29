import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import {createResturant} from '../controllers/resturantController.js';
const router = express.Router()

router.post('/create',authMiddleware,createResturant)


export default router;
