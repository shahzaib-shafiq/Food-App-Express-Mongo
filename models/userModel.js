import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: Array,
    },
    phone: {
        type: String,
        required: true,

    },
    userType: {
        type: String,
        required: true,
        default: 'client',
        enum: ['client', 'admin', 'vendor', 'driver']

    }, profile: {
        type: String,
        default: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_960_720.png',
    },
    answer: {
        type: String,
        required: [true, "Asnwer is required"],
    },

}, { timestamps: true })
const UserModel = mongoose.model('User', userSchema);

export default UserModel;