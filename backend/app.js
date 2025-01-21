// backend/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const personalDetailsRoutes = require('./Routes/personaleDetailsRoutes');
const educationDetailsRoutes = require('./Routes/educationDetailsRoutes');

const app = express();
const PORT = 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({ origin: 'http://localhost:5174/' }));
app.use(bodyParser.json());

// Routes
app.use('/api/personalDetails', personalDetailsRoutes);
app.use('/api/educationDetails', educationDetailsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
