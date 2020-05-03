const usersRouter = require('express').Router();

const users = require('../data/users');

usersRouter.get('/users', (req, res) => {
  res.send(users);
});

usersRouter.get('/users/:id', (req, res) => {
  const { id } = req.params;

  if (!(users.some((item) => item['_id'] === id))) {
    res.send({ message: 'Нет пользователя с таким id' });
    return;
  }

  res.send(users.find((item) => item['_id'] === id));
});

module.exports = usersRouter;
