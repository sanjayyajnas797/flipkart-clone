require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { connect } = require('./db');
const route = require('./router');

const app = express();
app.use(express.json());
const port = process.env.PORT || 4000;

app.use(cors());


connect(); // connect to PostgreSQL

app.use(route);

app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
