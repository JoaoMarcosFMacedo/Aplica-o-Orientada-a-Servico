import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Projetos = sequelize.define('Projetos', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  titulo: { type: DataTypes.STRING, allowNull: false },
  descricao: { type: DataTypes.TEXT },
  link: { type: DataTypes.STRING }
});
export default Projetos;