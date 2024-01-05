import { Router } from 'express'
import {MessageController} from '../controller/messageController'
import { MessageService } from '../service/messageService'

const messageRoutes = Router()
const controller = new MessageController()

messageRoutes.get('/messages', controller.getAllMessages)
messageRoutes.get('/messages/:rid', controller.getMessagesByRid)
messageRoutes.get('/message/:id', controller.getMessageById)

messageRoutes.post('/messages/', controller.getMessagesByChatId)
messageRoutes.post('/message/:chat/:sender/:receiver', controller.sendNewMessage)
messageRoutes.put('/message/update/:id_chat/:id_message', controller.updateMessage)

messageRoutes.delete('/message/delete/:id_message', controller.deleteMessage)


export { messageRoutes }