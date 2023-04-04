const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  // Add any additional fields as needed
});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;
