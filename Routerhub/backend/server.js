// server.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/auth', authRoutes);

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
