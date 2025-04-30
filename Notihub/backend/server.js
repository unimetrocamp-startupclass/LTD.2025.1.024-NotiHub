const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('API funcionando!');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

const { login, callback } = require('./routes/googleAuth');
app.get('/login', login);
app.get('/oauth2callback', callback);