import express from 'express'
import { clientRoutes } from './clientRoutes'

const routes = express()


routes.use('/', clientRoutes)


export {routes}