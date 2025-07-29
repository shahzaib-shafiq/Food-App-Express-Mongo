import resturantModel from '../models/resturantModel.js'
const createResturant = async (req, res) => {
    try {
        const { title, imageUrl, foods, time, pickup, delivery, isopen, logoUrl, rating, ratingCount, code, coords } = req.body;
        if (!title) {
            return res.status(400).send({
                success: false,
                message: "Title required",
            });
        }
        const newResturant = await resturantModel.create({
            title,
            imageUrl,
            foods,
            time,
            pickup,
            delivery,
            isopen,
            logoUrl,
            rating,
            ratingCount,
            code,
            coords
        });
        await newResturant.save();
        res.status(201).send({
            success: true,
            message: "Resturant Created Successfully",
            newResturant,
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "eror in Creating Resturant",
            error,
        });
    }
}
const getAllResturant = async (req, res) => {
    try {
        const resturants = await resturantModel.find({});
        res.status(201).send({
            success: true,
            message: "All Registered Resturants Fetched ",
            resturants,
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "error in Fetching Resturant",
            error,
        });
    }
}
const getResturantbyId = async (req, res) => {
    try {
        if (!req.params.id) {
            return res.status(400).send({
                success: false,
                message: "Resturant ID is required",
            });
        }
        const resturants = await resturantModel.findOne({_id: req.params.id});
        res.status(201).send({
            success: true,
            message: "Resturant Fetched Successfully",
            resturants,
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in Fetching Resturant",
            error,
        });
    }
}
const deleteResturantById = async (req, res) => {
    try {
        if (!req.params.id) {
            return res.status(400).send({
                success: false,
                message: "Resturant ID is required",
            });
        }
        const resturants = await resturantModel.findOneAndDelete({_id: req.params.id});
        res.status(201).send({
            success: true,
            message: "Resturant Delted Successfully",
            resturants,
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in Deleting Resturant",
            error,
        });
    }
}

export { createResturant,getAllResturant,getResturantbyId,deleteResturantById };