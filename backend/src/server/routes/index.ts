import express from 'express'
import { clientRoutes } from './clientRoutes'
import { occurrencesRoutes } from './occurrenceRoutes'
import { userRoutes } from './userRoutes'

const routes = express()


routes.use('/', clientRoutes)
routes.use('/', occurrencesRoutes)
routes.use('/', userRoutes)



export {routes}