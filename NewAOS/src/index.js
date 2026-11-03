import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { sequelize } from '.models/index.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.end('Servidor express rodando com sucesso! O babel está funcionado?');
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

console.log('Configuração base rodando com sucesso! O babel está funcionado!');

sequelize.sync({ alter: true }).then(() => {

    console.log('Banco de dados sincronizado com sucesso no NeonDB!');

    app.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT}!`));

}).catch((error) => {
    console.error('Erro ao sincronizar o banco de dados:', error);
});