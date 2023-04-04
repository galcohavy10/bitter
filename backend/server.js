const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const authRoutes = require('./routes/auth');
const tweetsRoutes = require('./routes/tweets');
const usersRoutes = require('./routes/users');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use('/api/auth', authRoutes);
app.use('/api/tweets', tweetsRoutes);
app.use('/api/users', usersRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
