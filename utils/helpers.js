// utils/helpers.js
export const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

export const validateInput = (data) => {
  if (!data.username || data.username.trim() === '') {
    return 'Username is required';
  }
  if (typeof data.score !== 'number' || data.score < 0) {
    return 'Score must be a non-negative number';
  }
  if (data.date && !(data.date instanceof Date)) {
    return 'Date must be a valid Date object';
  }
  return null;
};