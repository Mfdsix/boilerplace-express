import UserRepository from "../repositories/user"
import Express from "express"

const getAll = (req: Express.Request) => {
    return UserRepository.getAll(req.query)
}

const getOne = (req: Express.Request) => {
    const {
        id
    } = req.params

    return UserRepository.getOne(id)
}

export default {
    getAll,
    getOne
}