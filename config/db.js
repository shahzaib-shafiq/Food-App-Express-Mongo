import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB connected successfully ${mongoose.connection.host}`.green.bold);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`.red.bold);
  }
};


export default connectDb;