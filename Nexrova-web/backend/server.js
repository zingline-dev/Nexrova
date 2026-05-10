const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

// Enable CORS for all origins (for development)
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL Pool Configuration
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// In-memory OTP store (Migrated from Python)
const otpStore = new Map();

// --- OTP ENDPOINTS ---

// Send OTP
app.post('/api/otp/send', (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  // Generate 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  
  // Store OTP with 5-minute expiry
  otpStore.set(email, {
    otp,
    expiresAt: Date.now() + 300000 // 5 minutes
  });

  // LOG TO TERMINAL AS REQUESTED
  console.log("\n" + "=".repeat(50));
  console.log(`🔑 [OTP SERVICE] OTP for ${email}: ${otp}`);
  console.log("=".repeat(50) + "\n");

  res.json({ message: 'OTP sent successfully to terminal', status: 'success' });
});

// Verify OTP
app.post('/api/otp/verify', (req, res) => {
  const { email, otp } = req.body;

  if (!otpStore.has(email)) {
    return res.status(400).json({ error: 'No OTP requested for this email' });
  }

  const storedData = otpStore.get(email);

  if (Date.now() > storedData.expiresAt) {
    otpStore.delete(email);
    return res.status(400).json({ error: 'OTP has expired' });
  }

  if (storedData.otp !== otp) {
    return res.status(400).json({ error: 'Invalid OTP' });
  }

  // Success! Clear the OTP
  otpStore.delete(email);

  res.json({ message: 'OTP verified successfully', status: 'success' });
});

// --- DATABASE TEST ENDPOINT ---
app.get('/api/db-status', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ status: 'connected', time: result.rows[0].now });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
});

// Start Server on 0.0.0.0
app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Nexrova Backend running on http://0.0.0.0:${port}`);
  console.log(`📡 Reachable from Laptop A at: http://${process.env.LOCAL_IP || '192.168.29.176'}:${port}`);
});
