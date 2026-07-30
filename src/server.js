const express = require('express');
const { add, subtract, divide, power } = require('./math');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'ghactions-playground server' });
});

app.get('/add', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.json({ result: add(a, b) });
});

app.get('/subtract', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.json({ result: subtract(a, b) });
});

app.get('/divide', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  try {
    res.json({ result: divide(a, b) });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/power', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.json({ result: power(a, b) });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
