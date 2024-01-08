import express from 'express'
import { clientRoutes } from './clientRoutes'
import { occurrencesRoutes } from './occurrenceRoutes'

const routes = express()


routes.use('/', clientRoutes)
routes.use('/', occurrencesRoutes)


export {routes}