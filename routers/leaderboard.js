// routers/leaderboard.js
import express from 'express';
import { getLeaderboard, createScore, updateScore, deleteScore } from '../controllers/leaderboard.js';

const router = express.Router();

router.get('/', getLeaderboard);
router.post('/', createScore);
router.put('/:id', updateScore); // Add PUT route for update
router.delete('/:id', deleteScore); // Add DELETE route for delete

export default router;