import { Sequelize } from 'sequelize'
import config from '../configs/db'

const sequelize = new Sequelize(config.database, config.username, config.password, {
    dialect: "postgres"
})

export default sequelize