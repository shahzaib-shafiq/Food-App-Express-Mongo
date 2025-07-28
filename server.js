import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import colors from 'colors';
import testRoutes from './routes/testRoutes.js';
import connectDb from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
dotenv.config(); // Ensure environment variables are loaded
connectDb(); // Connect to MongoDB
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/test', testRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user',userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`.cyan.bold);
});
