const mongoose = require('mongoose');

const relationshipSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  follows: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const Relationship = mongoose.model('Relationship', relationshipSchema);

module.exports = Relationship;
