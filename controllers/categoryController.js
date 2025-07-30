import categoryModel from '../models/categoryModel.js';
const createCateogry = async (req, res) => {
    try {
        const { title, imageUrl } = req.body;
        if (!title) {
            return res.status(400).json({
                success: false,
                message: "Title is required",
            });
        }
         const newCategory = await categoryModel.create({title,imageUrl})
        // Save the new category to the database
          await newCategory.save();
        res.status(201).json({
            success: true,
            message: "Category created successfully",
            category: newCategory,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating category",
            error: error.message,
        });
    }
};

const getAllCateogry = async (req, res) => {
    try {
        const categories = await categoryModel.find({});
        res.status(200).json({
            success: true,
            message: "All Categories Fetched Successfully",
            categories,
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error Fetching category",
            error: error.message,
        });
    }
};
const updateCateogry = async (req, res) => {
    try {
        const { title, imageUrl } = req.body;
         if (!req.params.id) {
            return res.status(400).send({
                success: false,
                message: "Category ID is required",
            });
        }
        const categories = await categoryModel.findById({_id: req.params.id});
        if (!categories) {
            return res.status(404).send({
                success: false,
                message: "Category not found",
            });
        }

        categories.title=title;
        categories.imageUrl=imageUrl;
        await categories.save();
        res.status(200).json({
            success: true,
            message: "Category Updated Successfully",
            categories,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error Fetching category",
            error: error.message,
        });
    }
};
const deleteCateogry = async (req, res) => {
    try {
          if (!req.params.id) {
            return res.status(400).send({
                success: false,
                message: "Category ID is required",
            });
        }
        const categories = await categoryModel.findOneAndDelete({_id: req.params.id});
        res.status(200).json({
            success: true,
            message: "Category Deleted Successfully",
            categories,
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error Deleting Category",
            error: error.message,
        });
    }
};

const getCateogryById = async (req, res) => {
    try {
         if (!req.params.id) {
            return res.status(400).send({
                success: false,
                message: "Category ID is required",
            });
        }
        const category = await categoryModel.findOne({_id: req.params.id});
        res.status(200).json({
            success: true,
            message: "Category Fetched Successfully",
            category,
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error Fetching category",
            error: error.message,
        });
    }
};

export { createCateogry,getAllCateogry,updateCateogry,deleteCateogry,getCateogryById };