import express from 'express';
import sum from './sum.js';
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.json({msg:'Hello, World!'});
});

app.get("/getSum/:a/:b", (req, res) => {
  const { a, b } = req.params;
  const sumResult = sum(parseFloat(a), parseFloat(b));
  res.json({ msg: sumResult });
});

app.listen(PORT, () => {
  console.log(`Server is running on Listen ${PORT}`);
});








