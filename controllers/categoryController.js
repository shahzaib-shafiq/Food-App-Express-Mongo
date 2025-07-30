import categoryModel from '../models/categoryModel.js';
const createCateogry = async (req, res) => {
    try {
        console.log("Creating category with data:", req.body);
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

export { createCateogry };