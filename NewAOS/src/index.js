import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { sequelize } from './models/index.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(userRoutes);
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Servidor Express do Currículo a correr e ligado à base de dados!');
});

const PORT = process.env.PORT || 3000;

// Sincronizar os modelos recriados com o NeonDB
sequelize.sync({ alter: true }).then(() => {
    console.log('Base de dados sincronizada com sucesso no NeonDB!');
    app.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT}!`));
}).catch((error) => {
    console.error('Erro ao sincronizar a base de dados:', error);
});