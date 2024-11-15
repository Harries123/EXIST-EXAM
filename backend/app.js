import express from 'express';
import userRoutes from './routes/userRoutes.js';
import './db/connection.js'; 

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());


app.use('/api/todos', userRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});