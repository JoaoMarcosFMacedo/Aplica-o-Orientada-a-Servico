import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Academico = sequelize.define('Academico', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  instituicao: { type: DataTypes.STRING, allowNull: false },
  curso: { type: DataTypes.STRING, allowNull: false },
  anoInicio: { type: DataTypes.INTEGER },
  anoFim: { type: DataTypes.INTEGER }
});
export default Academico;