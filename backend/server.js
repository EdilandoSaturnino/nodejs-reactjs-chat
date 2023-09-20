const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conexão com MongoDB estabelecida'))
    .catch(err => console.log('Erro ao conectar ao MongoDB:', err));

app.use('/', routes);

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});
