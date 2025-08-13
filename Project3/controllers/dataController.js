const User = require('../models/dataModel');

exports.getAll = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.getOne = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};

exports.create = async (req, res) => {
  const newUser = await User.create(req.body);
  res.status(201).json(newUser);
};

exports.update = async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updatedUser) return res.status(404).json({ message: 'User not found' });
  res.json(updatedUser);
};

exports.delete = async (req, res) => {
  const deletedUser = await User.findByIdAndDelete(req.params.id);
  if (!deletedUser) return res.status(404).json({ message: 'User not found' });
  res.json({ message: 'Deleted successfully' });
};