const express = require('express');
const cors = require('cors');
//const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(express.static('client'));

app.use(express.json());

app.use('/api/motordata', require('./motorsRoute'));
app.use('/api/getoptions', require('./motorsOptionsRoute'));

const PORT = process.env.PORT || '5000';

app.use(cors());
app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
