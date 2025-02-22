// backend/config.js
// config.js
import mysql from 'mysql2';



// Create DB connection
const db = mysql.createConnection({
  host: 'localhost',    // XAMPP MySQL host
  user: 'root',         // Default username
  password: '',         // Default password (blank)
  database: 'routrehub_db' // Database name you created
});

// Connect to DB
db.connect((err) => {
  if (err) {
    console.error('DB connection failed:', err);
    return;
  }
  console.log('Connected to MySQL DB');
});

export default db;
