import express from 'express';
import { getLeaderboard, createScore, updateScore, deleteScore } from '../controllers/leaderboard.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getLeaderboard);
router.post('/', auth, createScore);
router.put('/:id', auth, updateScore);
router.delete('/:id', auth, deleteScore);

export default router;