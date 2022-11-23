import { respSuccess, respError } from "./http"
import Express from "express";

class HttpError extends Error {
	constructor(message: string, code: number) {
	  super(message);
	  this.name = String(code);
	}
}

const routeMiddleware = async (req: Express.Request, res: Express.Response, handler: any) => {
    try {
        return res.status(200).send(respSuccess(await handler(req)))
    } catch (e: any) {
        if(e instanceof HttpError)
            return res.status(parseInt(e.name)).send(respError(e.message))
        return res.status(500).send(respError(e.message))
    }
}

const raise = (message: string, code: number = 500) => {
    throw new HttpError(message, code)
}

export {
    routeMiddleware,
    raise
}