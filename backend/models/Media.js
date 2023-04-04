const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  tweet: { type: mongoose.Schema.Types.ObjectId, ref: 'Tweet', required: true },
  mediaType: { type: String, enum: ['image', 'video'], required: true },
  url: { type: String, required: true },
});

const Media = mongoose.model('Media', mediaSchema);

module.exports = Media;
