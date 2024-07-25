const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:5173',
  };
  
  app.use(cors(corsOptions));
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'api.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read the file' });
      return;
    }
    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData || 'loda kuch nhi aa raha' );
    } catch (parseErr) {
      res.status(500).json({ error: 'Failed to parse JSON' });
    }
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
