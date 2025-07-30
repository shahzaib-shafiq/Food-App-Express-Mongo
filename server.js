import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import colors from 'colors';
import testRoutes from './routes/testRoutes.js';
import connectDb from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import resturantRoutes from './routes/resturantRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js';
// import bodyParser from 'body-parser';
const app = express();
app.use(express.json());

dotenv.config(); 
connectDb();
const port = 3000;
app.use(cors());
app.use(morgan('dev'));
// app.use(bodyParser.json());

app.use('/api/v1/test', testRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user',userRoutes);
app.use('/api/v1/resturant',resturantRoutes);
app.use('/api/v1/category',categoryRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`.cyan.bold);
});
