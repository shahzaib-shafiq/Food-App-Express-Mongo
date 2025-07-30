import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import {createCateogry,getAllCateogry,deleteCateogry,updateCateogry,getCateogryById} from '../controllers/categoryController.js';
const router = express.Router()

router.post('/create',authMiddleware,createCateogry)
router.get('/all',authMiddleware,getAllCateogry)
router.get('/:id',authMiddleware,getCateogryById)
router.patch('/update/:id',authMiddleware,updateCateogry)
router.delete('/delete/:id',authMiddleware,deleteCateogry)

export default router;
