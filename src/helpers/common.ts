const { respSuccess, respError } = require("./http")

class HttpError extends Error {
	constructor(message, code) {
	  super(message);
	  this.name = code;
	}
}

const routeMiddleware = async (req, res, handler) => {
    try {
        return res.status(200).send(respSuccess(await handler(req)))
    } catch (e) {
        if(e instanceof HttpError)
            return res.status(e.name).send(respError(e.message))
        return res.status(500).send(respError(e.message))
    }
}

const raise = (message, code = 500) => {
    throw new HttpError(message, code)
}

export default {
    routeMiddleware,
    raise
}