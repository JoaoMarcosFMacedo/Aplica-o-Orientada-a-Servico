import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
    process.env.DATABASE_URL || `postgresql://neondb_owner:npg_clqw3XYUkO8r@ep-super-hat-bbfu12z3-pooler.c-15.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require`, {

        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
);

export default sequelize;