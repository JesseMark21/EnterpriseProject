import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Get the current file path and directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Use dynamic import for JSON
const loadJsonData = async () => {
  const jsonData = await import("./src/data/restaurant.json", { assert: { type: "json" } });
  return jsonData.default;
};

app.get('/api/data', async (req, res) => {
  try {
    const jsonData = await loadJsonData();
    console.log("API", jsonData);
    res.json(jsonData);
  } catch (error) {
    console.error("Error loading JSON data:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});