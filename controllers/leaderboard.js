// controllers/leaderboard.js
import Leaderboard from '../models/leaderboard.js';
import { validateInput } from '../utils/helpers.js';

export const getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await Leaderboard.find().sort({ score: -1, date: 1 }); // Sort by score (descending) and date (ascending)
    res.json(leaderboard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createScore = async (req, res) => {
  const { username, score } = req.body;

  const validationError = validateInput({ username, score });
  if (validationError) {
    return res.status(400).json({ message: validationError });
  }

  const newScore = new Leaderboard({ username, score }); // Date will be automatically added
  try {
    const savedScore = await newScore.save();
    res.status(201).json(savedScore);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateScore = async (req, res) => {
  const { username, score } = req.body;

  const validationError = validateInput({ username, score });
  if (validationError) {
    return res.status(400).json({ message: validationError });
  }

  try {
    const updatedScore = await Leaderboard.findByIdAndUpdate(
      req.params.id,
      { username, score },
      { new: true }
    );
    if (!updatedScore) {
      return res.status(404).json({ message: 'Score not found' });
    }
    res.json(updatedScore);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

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