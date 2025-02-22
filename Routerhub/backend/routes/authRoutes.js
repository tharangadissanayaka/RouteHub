// backend/routes/authRoutes.js
import express from 'express';
import db from '../config.js';

const router = express.Router();

// Register User
router.post('/register', (req, res) => {
  const { name, mobile, email, password } = req.body;

  // Check for empty fields
  if (!name || !mobile || !email || !password) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  // Insert user into database
  const query = 'INSERT INTO users (name, mobile, email, password) VALUES (?, ?, ?, ?)';
  db.query(query, [name, mobile, email, password], (err, result) => {
    if (err) {
      console.error('Error:', err);
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(400).json({ success: false, message: 'Email already exists' });
      }
      return res.status(500).json({ success: false, message: 'Database error' });
    }
    res.json({ success: true, message: 'User registered successfully' });
  });
});

export default router;

