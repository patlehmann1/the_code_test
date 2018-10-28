const express = require('express');
const app     = express();
const port    = 3001;

const paymentData = require('./paymentData');

app.get('/data', (_, res) => res.json(paymentData));

app.listen(port, () => console.log(`Listening on port ${port}`));