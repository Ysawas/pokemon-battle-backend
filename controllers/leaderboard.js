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

// Update a score entry
export const updateScore = async (req, res) => {
  try {
    const updatedScore = await Leaderboard.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedScore) {
      return res.status(404).json({ message: 'Score not found' });
    }
    res.json(updatedScore);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a score entry
export const deleteScore = async (req, res) => {
  try {
    const deletedScore = await Leaderboard.findByIdAndDelete(req.params.id);
    if (!deletedScore) {
      return res.status(404).json({ message: 'Score not found' });
    }
    res.json({ message: 'Score deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};