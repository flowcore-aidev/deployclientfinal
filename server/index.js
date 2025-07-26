
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/status', (req, res) => {
  res.json({ system: 'LIDC is fully operational 🚀', frontend: true, backend: true });
});

app.post('/api/build', (req, res) => {
  const { command } = req.body;
  if (!command) return res.status(400).json({ status: 'Command is required' });

  // Simulate build logic
  res.json({ status: `✅ Command received: "${command}" — build started.` });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`LIDC backend running on port ${PORT}`);
});
