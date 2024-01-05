import { Request, Response } from 'express';
import { MessageService } from '../service/messageService';

const service = new MessageService();

export class MessageController {
	async getAllMessages(req: Request, res: Response) {
		try {
			const result = await service.getAllMessages();
			return res.status(200).json(result)
		} catch (error) {
			return res.status(500).json(error)
		}
	}

	async getMessageById(req: Request, res: Response) {
		try {
			const { id } = req.body
			const result = await service.getMessageById(id);
			return res.status(200).json(result)
		} catch (error) {
			return res.status(500).json(error)
		}
	}

	async getMessagesByRid(req: Request, res: Response) {
		try {
			const { rid } = req.params
			const result = await service.getMessageByRid(rid)
			return res.status(200).json(result)
		} catch (error) {
			return res.status(500).json(error)
		}
	}

	async getMessagesByChatId(req: Request, res: Response) {
		try {
			const { id_chat } = req.body
			const result = await service.getMessagesByChatId(id_chat)
			return res.status(200).json(result)
		} catch (error) {
			return res.status(500).json(error)
		}
	}

	async sendNewMessage(req: Request, res: Response) {
		try {
			const { content } = req.body;
			const { chat, sender, receiver } = req.params;
			const result = await service.sendNewMessage(chat, content, sender, receiver);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(500).json(error)
		}
	}

	async updateMessage(req: Request, res: Response) {
		try {
			const { content } = req.body
			const { id_chat, id_message } = req.params
			const result = await service.updateMessage(id_message, content, id_chat)
			return res.status(200).json(result)
		} catch (error) {
			return res.status(500).json(error)
		}
	}

	async autUpdateMessage(req: Request, res: Response) {
		try {
			const { id_chat, id_message } = req.params;
			const { state } = req.body
			const result = await service.autUpdateMessage(id_chat, id_message, state);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(500).json(error)
		}
	}

	async deleteMessage(req: Request, res: Response) {
		try {
			const { id_message } = req.params;
			const result = await service.deleteMessage(id_message);
			return res.status(200).json(result)
		} catch (error) {
			return res.status(500).json(error)
		}
	}
}