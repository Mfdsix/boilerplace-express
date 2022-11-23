import User from "../models/user"

export default {
	getAll: async({
		search = null,
		limit = 9,
		page = 1
	}) => {
		const currLimit = (limit > 10) ? 10 : limit
		const currPage = (page - 1) * limit

		const count = await User.count()

		const datas = await User.findAll({
			limit: currLimit,
			offset: currPage,
			order: [
				['created_at', 'asc']
			],
			raw: true,
			nest: true
		})

		return {
			datas,
			meta: {
				search,
				count,
				page,
				limit,
			}
		}
	},
	getOne: async (id) => {
		return User.findOne({
			where: {
				id
			},
			raw: true
		})
	}
}
