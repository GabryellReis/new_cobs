import instance from '../api/connection'


export async function getAllUsers() {
  const { data } = await instance.get('/users');
  return data
}

export async function getUserByRid(rid) {
  const { data } = await instance.post('/user', { rid });
  return data
}

export async function createUser(rid, name, setor, cargo, permissions) {
  const { data } = await instance.post('/user/register', { rid, name, setor, cargo, permissions })
  return data;
}

export async function updateUser(rid, name, setor, cargo, permissions) {
  const { data } = await instance.put(`/user/${rid}`, { rid, name, setor, cargo, permissions });
  return data;
}

export async function deleteUser(rid) {
  const { data } = await instance.delete(`/user/${rid}`)
  return data;
}

export async function getAllBags() {
  const { data } = await instance.get('/bags')
  return data
}

export async function getBagByNid(nid) {
  const { data } = await instance.get('/bag', { nid })
  return data
}

export async function registerBag(nid, location, state, operation, image_url) {
  const { data } = await instance.post('/bag/register', { nid, location, state, operation, image_url })
  return data
}

export async function getChats() {
  const { data } = await instance.get('/chats');
  return data;
}

export async function getChatById(id_chat) {
  const {data} = await instance.post('/chat', {id_chat})
  return data
}

export async function getAllChatsByRid(rid) {
  const { data } = await instance.get(`/chats/${rid}`);
  return data
}
export async function getAllSups() {
  const {data} = await instance.get('/users/sups');
  return data;
}

export async function getAllMessages() {
  const { data } = await instance.get('/messages');
  return data
}

export async function getMessageById(id) {
  const { data } = await instance.get(`/message/${id}`)
  return data
}

export async function getMessagesByChatId() {
  const {data} = await instance.get('/messages')
}

export async function sendNewMessage(content, chat, sender, receiver) {
  const {data} = await instance.post(`/message/${chat}/${sender}/${receiver}`, {content});
  return data;
}