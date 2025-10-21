// packages
import dotenv from 'dotenv';
import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';


// utils
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config({ path: path.resolve('../.env') });

connectDB();

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.use('/api/users/', userRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/products', productRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});