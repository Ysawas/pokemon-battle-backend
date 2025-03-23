// routers/leaderboard.js
import express from 'express';
import { getLeaderboard, createScore } from '../controllers/leaderboard.js';

const router = express.Router();

router.get('/', getLeaderboard);
router.post('/', createScore);

export default router;