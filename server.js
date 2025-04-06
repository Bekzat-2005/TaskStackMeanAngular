const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let users = [{ id: 1, name: 'Алия' }];

app.get('/users', (req, res) => res.json(users));

app.post('/users', (req, res) => {
  const user = { id: users.length + 1, name: req.body.name };
  users.push(user);
  res.status(201).json(user);
});

app.listen(3000, () => console.log('Server: http://localhost:3000'));
