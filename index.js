require('dotenv').config();
const express = require('express');
const cors = require('cors');
const route = require("./route");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());


// Test Route
app.get('/', (req, res) => {
  res.json({ message: 'Server is running successfully!' });
});

//route
app.use('/api', route);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});