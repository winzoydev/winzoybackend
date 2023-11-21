require('dotenv').config();

const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hi Welcome To WinzoyGroup');
});
const routes = require('./routes/index');

const strat = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`PORT ${PORT}, Your app ran successfully `);
    });
  } catch (error) {
    console.log(error);
  }
};

app.use('/api', routes);

strat();
