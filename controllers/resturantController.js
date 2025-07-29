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
export { createResturant };