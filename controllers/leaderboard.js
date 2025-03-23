// controllers/leaderboard.js
import Leaderboard from '../models/leaderboard.js';

// Get all leaderboard scores
export const getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await Leaderboard.find().sort({ score: -1 });
    res.json(leaderboard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new score entry
export const createScore = async (req, res) => {
  const { username, score } = req.body;
  const newScore = new Leaderboard({ username, score });
  try {
    const savedScore = await newScore.save();
    res.status(201).json(savedScore);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};