const express = require('express');
const app = express();
const { sequelize, User, Post } = require('./models');
const PORT = 5000;

app.use(express.json());

app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Something went wrong.' });
  }
});

app.get('/users/:uuid', async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const user = await User.findOne({ where: { uuid }, include: 'posts' });
    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Something went wrong.' });
  }
});

app.delete('/users/:uuid', async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const user = await User.findOne({ where: { uuid } });
    await user.destroy();
    return res.json({ message: 'User deleted. ' });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Something went wrong.' });
  }
});

app.put('/users/:uuid', async (req, res) => {
  const uuid = req.params.uuid;
  const { name, email, role } = req.body;
  try {
    const user = await User.findOne({ where: { uuid } });
    if (name) user.name = name;
    if (email) user.email = email;
    if (role) user.role = role;

    await user.save();

    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Something went wrong.' });
  }
});

app.post('/users', async (req, res) => {
  const { name, email, role } = req.body;

  try {
    const user = await User.create({ name, email, role });
    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.findAll({ include: 'user' });
    return res.json(posts);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

app.post('/posts', async (req, res) => {
  const { userUuid, body } = req.body;
  try {
    const user = await User.findOne({ where: { uuid: userUuid } });
    const post = await Post.create({ body, userId: user.id });
    return res.json(post);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

app.listen(PORT, async () => {
  console.log(`Server up on http://localhost:${PORT}.`);
  await sequelize.authenticate();
  console.log('Database connected!');
});
