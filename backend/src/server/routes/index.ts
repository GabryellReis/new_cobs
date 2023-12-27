import express from 'express'
import { userRoutes } from './userRoutes'
import { bagRoutes } from './bagRoutes'

const routes = express()


routes.use('/', userRoutes)
routes.use('/', bagRoutes)

export {routes}