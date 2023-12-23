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
  const userCreated = await instance.post('/user/create', { rid, name, setor, cargo, permissions })
  return userCreated;
}

export async function updateUser(rid, name, setor, cargo, permissions) {
  const updatedUser = await instance.put(`/user/update${rid}`, { rid, name, setor, cargo, permissions });
  return updatedUser;
}

export async function deleteUser(rid) {
  const deletedUser = await instance.delete(`/user/delete/${rid}`)
  return deletedUser;
} 