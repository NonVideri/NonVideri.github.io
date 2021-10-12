const express = require('express');
const app = express();
const { sequelize, User } = require('./models');
const PORT = 5000;

app.use(express.json());

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

app.listen(PORT, async () => {
  console.log(`Server up on http://localhost:${PORT}.`);
  await sequelize.sync({ force: true });
  console.log('Database synced.');
});
