import express from 'express'
import { userRoutes } from './userRoutes'
import { bagRoutes } from './bagRoutes'
import {chatRoutes} from './chatRoutes'
import { messageRoutes } from './messageRoutes'

const routes = express()


routes.use('/', userRoutes)
// routes.use('/', bagRoutes)
// routes.use('/', chatRoutes)
// routes.use('/', messageRoutes)

export {routes}