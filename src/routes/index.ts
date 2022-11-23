import { respSuccess, respError } from '../helpers/http'
import { routeMiddleware } from "../helpers/common"
import { Express } from 'express'

import UserRoutes from "./user"

interface RouteContent {
    method?: "GET" | "POST" | "PUT" | "DELETE"
    url: string
    handler: any
}

const allRoutes: Array<RouteContent> = [
    ...UserRoutes
]

export default (app: Express) => {
    const prefix = "/api/v1"
    
    app.get(prefix, (req, res) => {
        res.send(respSuccess(null, "Welcome API"))
    })
    
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
            )
            next()
        })
        
        allRoutes.forEach((content: RouteContent) => {
            if(content.method == 'GET')
            app.get(`${prefix}${content.url}`, (req, res) => routeMiddleware(req, res, content.handler))
            if(content.method == 'POST')
            app.post(`${prefix}${content.url}`, (req, res) => routeMiddleware(req, res, content.handler))
            if(content.method == 'PUT')
            app.post(`${prefix}${content.url}`, (req, res) => routeMiddleware(req, res, content.handler))
            if(content.method == 'DELETE')
            app.post(`${prefix}${content.url}`, (req, res) => routeMiddleware(req, res, content.handler))
        })
        
        //not found handler
        app.use((_req, res) => {
            res.status(404).send(respError("Not Found!"))
        })
    }