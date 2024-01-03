import { Router } from 'express'
import { ChatController } from '../controller/chatController'

const chatRoutes = Router()
const controller = new ChatController()

chatRoutes.get('/chats', controller.getAllChats)
chatRoutes.get('/chats/:rid', controller.getAllChatsByRid)
chatRoutes.post('/chat', controller.getChatById)

chatRoutes.post('/chat/register', controller.newChatController)

chatRoutes.delete('/chat/delete/:id', controller.deleteChatById)


export { chatRoutes }