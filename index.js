// index.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './db/index.js';
import leaderboardRoutes from './routers/leaderboard.js';
import errorHandler from './middleware/error.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/leaderboard', leaderboardRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5700;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});