import {
	Model, DataTypes
} from 'sequelize'
import sequelize from "./index"

class User extends Model {
	declare id: number
	declare name: string
	declare email: string
}
	
User.init({
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
	},
	name: DataTypes.STRING,
	email: DataTypes.STRING,
}, {
	sequelize,
	modelName: 'User',
	tableName: 'users',
	createdAt: false,
	updatedAt: false
})

export default User