
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const authRoutes = require('./authorization/routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/', authRoutes);

app.get('/status', (req, res) => {
  res.status(200).json({
    status: 'Running',
    message: 'Etkinlix API çalışıyor.'
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
