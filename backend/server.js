import express from 'express';
dotenv.config();
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoute from './routes/productRoute.js';

const port = process.env.PORT || 5000;
connectDB();  //Connect to MOngoDb
const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use('/api/products', productRoute); 
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});