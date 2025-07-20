const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require('./routes/authRoutes');
const excelRoutes = require('./routes/excelUpload');

dotenv.config();

const app = express();

// Middlewares
const allowedOrigins = [
  'http://localhost:3000',
  'https://excel-analytics-seven.vercel.app'
];

app.use(cors({
  origin: [
  'http://localhost:3000',
  ],
  credentials: true
}));

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api', excelRoutes);


// Test Route
app.get("/", (req, res) => {
    res.send("API is runnig....");
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected!"))
  .catch(err => console.log("❌ Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});