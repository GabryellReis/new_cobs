import instance from '../api/connection'


export async function getAllUsers() {
  const { data } = await instance.get('/users');
  return data
}

export async function getUserByRid(rid) {
  const {data} = await instance.post('/user', { rid });
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


export async function getAllClients() {
  const {data} = await instance.get('/clients')
  return data
}