require('dotenv').config(); // Load .env file

const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/users', userRoutes);
app.use('/auth', authRoutes);

// Database Sync & Server Start
sequelize.sync().then(() => {
  console.log("✅ DB connected.");

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error("❌ DB connection failed:", err.message);
});
