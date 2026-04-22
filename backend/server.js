require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const testRoutes = require('./routes/testRoutes');
const resultRoutes = require('./routes/result');
const adminRoutes = require('./routes/admin');

const app = express();

// ✅ CORS FIX (IMPORTANT)
const allowedOrigins = [
  'http://localhost:5173',
  'https://skill-assesment-five.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like Postman)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS not allowed'));
    }
  },
  credentials: true
}));

// Middleware
app.use(express.json());

// ✅ OPTIONAL: HEALTH CHECK ROUTE
app.get('/', (req, res) => {
  res.send('Backend is running 🚀');
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/skillassessment')
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.log('❌ MongoDB error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/test', testRoutes);
app.use('/api/result', resultRoutes);
app.use('/api/admin', adminRoutes);

// Server start
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});