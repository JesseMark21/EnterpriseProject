import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import fs from 'fs';

const app = express();

// Get the current file path and directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Enable CORS for all routes
app.use(cors({
  origin: '*' // Allow requests from all origins
}));

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist')));

// Route handler for loading JSON data
const loadJsonData = () => {
  try {
    const jsonData = JSON.parse(fs.readFileSync('./src/data/restaurant.json', 'utf8'));
    return jsonData;
  } catch (error) {
    console.error("Error loading JSON data:", error);
    throw new Error('Failed to load JSON data');
  }
};

// API route handler for /api/data
app.get('/api/data', async (req, res) => {
  try {
    const jsonData = loadJsonData();
    res.json(jsonData);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Catch-all route for serving the Vue app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
