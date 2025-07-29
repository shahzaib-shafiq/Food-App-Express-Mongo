import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import {createResturant,getAllResturant,getResturantbyId,deleteResturantById} from '../controllers/resturantController.js';
const router = express.Router()

router.post('/create',authMiddleware,createResturant)
router.get('/allresturant',authMiddleware,getAllResturant)
router.get('/:id',authMiddleware,getResturantbyId)
router.delete('/:id',authMiddleware,deleteResturantById)

export default router;
