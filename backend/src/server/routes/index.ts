import express from 'express'
import { userRoutes } from './userRoutes'

const routes = express()


routes.use('/', userRoutes)

export {routes}