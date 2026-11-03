import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Profissional = sequelize.define('Profissional', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  empresa: { type: DataTypes.STRING, allowNull: false },
  cargo: { type: DataTypes.STRING, allowNull: false },
  descricao: { type: DataTypes.TEXT }
});
export default Profissional;