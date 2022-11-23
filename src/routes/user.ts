import UserController from "../controllers/user"

const prefix = "users"

export default [
    {
        url: `${prefix}`,
        handler: UserController.getAll
    },
    {
        url: `${prefix}/:id`,
        handler: UserController.getOne
    },
]