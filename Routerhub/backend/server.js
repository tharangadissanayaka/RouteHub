import express from 'express';
import mysql from 'mysql'; // Use mysql2 if you want promises
import morgan from 'morgan';
import createError from 'http-errors';
import cors from 'cors';

const app = express();

app.use(morgan('dev'));
app.use(cors());

// Create a connection pool for the database
const db = mysql.createPool({
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: '', // Replace with your MySQL password
    database: 'test2', // Database name
});

// Endpoint to fetch package table data
app.get('/pack', (req, res, next) => {
    const query = 'SELECT * FROM package'; // SQL query to fetch all rows
    db.query(query, (err, results) => {
        if (err) {
            console.error('Database query error:', err);
            return next(createError(500, 'Internal Server Error'));
        }
        res.json(results); // Send the query results as JSON
    });
});

app.get('/pack', (req, res, next) => {
    const query = 'SELECT * FROM package'; // SQL query to fetch all rows
    db.query(query, (err, results) => {
        if (err) {
            console.error('Database query error:', err);
            return next(createError(500, 'Internal Server Error'));
        }
        res.json(results); // Send the query results as JSON
    });
});

app.get('/pack/:id', (req, res, next) => {
    const { id } = req.params; // Extract the 'id' from the request parameters
    const query = 'SELECT * FROM package WHERE package_id = ?'; // SQL query with a placeholder

    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Database query error:', err);
            return next(createError(500, 'Internal Server Error'));
        }
        if (results.length === 0) {
            return next(createError(404, 'Package not found')); // Handle case where no package is found
        }
        res.json(results[0]); // Send the first result as JSON
    });
});

// Default route
app.get('/', (req, res) => {
    res.send('hello');
});

// Error handler middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message || 'Internal Server Error',
        },
    });
});

// Start the server
app.listen(5001, () => {
    console.log('Server is running on port 5001');
});
