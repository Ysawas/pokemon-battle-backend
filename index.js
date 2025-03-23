import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './db/index.js';
import leaderboardRoutes from './routers/leaderboard.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/leaderboard', leaderboardRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});