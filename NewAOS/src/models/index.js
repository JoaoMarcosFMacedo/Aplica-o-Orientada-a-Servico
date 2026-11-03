import sequelize from '../config/database.js';
import User from './User.js';
import Academico from './Academico.js';
import Profissional from './Profissional.js';
import Projetos from './Projetos.js';

// Configuração das relações 1:N
User.hasMany(Academico, { foreignKey: 'userId', onDelete: 'CASCADE' });
Academico.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Profissional, { foreignKey: 'userId', onDelete: 'CASCADE' });
Profissional.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Projetos, { foreignKey: 'userId', onDelete: 'CASCADE' });
Projetos.belongsTo(User, { foreignKey: 'userId' });

export { sequelize, User, Academico, Profissional, Projetos };