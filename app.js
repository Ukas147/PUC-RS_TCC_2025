import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => res.send('Projeto ukas-nodejs-docker rodando com ES Modules, dotenv e nodemon!'));

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));