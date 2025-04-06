const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Временная база данных
let users = [
  { id: 1, name: 'Алия' },
  { id: 2, name: 'Данияр' }
];

// Получить список пользователей
app.get('/users', (req, res) => {
  res.json(users);
});

// Добавить нового пользователя
app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
