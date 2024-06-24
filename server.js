import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import jsonData from "./src/data/restaurant.json";

const app = express();

// Get the current file path and directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.get('/api/data', (req, res) => {
  console.log("API", jsonData);
  res.json(jsonData);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// const express = require('express');
// const cors = require('cors');
// const app = express();
// const port = process.env.PORT || 3000;

// app.use(cors());
// app.use(express.json());

// // Sample data
// const data = [
//   { id: 1, name: 'Item 1' },
//   { id: 2, name: 'Item 2' },
// ];

// app.get('/api/items', (req, res) => {
//   res.json(data);
// });

// app.get('/api/items/:id', (req, res) => {
//   const item = data.find(item => item.id === parseInt(req.params.id));
//   if (item) {
//     res.json(item);
//   } else {
//     res.status(404).json({ error: 'Item not found' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
