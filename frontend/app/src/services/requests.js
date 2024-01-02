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
  const {data} = await instance.post('/user/register', { rid, name, setor, cargo, permissions })
  return data;
}

export async function updateUser(rid, name, setor, cargo, permissions) {
  const {data} = await instance.put(`/user/${rid}`, { rid, name, setor, cargo, permissions });
  return data;
}

export async function deleteUser(rid) {
  const {data} = await instance.delete(`/user/${rid}`)
  return data;
}

export async function getAllBags() {
  const {data} = await instance.get('/bags')
  return data
}

export async function getBagByNid(nid) {
  const {data} = await instance.get('/bag', {nid})
  return data
}

export async function registerBag(nid, location, state, operation, image_url) {
  const {data} = await instance.post('/bag/register', {nid, location, state, operation, image_url})
  return data
}