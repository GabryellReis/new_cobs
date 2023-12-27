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
  const userCreated = await instance.post('/user/register', { rid, name, setor, cargo, permissions })
  return userCreated;
}

export async function updateUser(rid, name, setor, cargo, permissions) {
  const updatedUser = await instance.put(`/user/${rid}`, { rid, name, setor, cargo, permissions });
  return updatedUser;
}

export async function deleteUser(rid) {
  const deletedUser = await instance.delete(`/user/${rid}`)
  return deletedUser;
}

export async function getAllBags() {
  const allBags = await instance.get('/bags')
  return allBags
}

export async function getBagByNid(nid) {
  const bag = await instance.get('/bag', {nid})
  return bag
}

export async function registerBag(nid, location, state, operation, image_url) {
  const newBag = await instance.post('/bag/register', {nid, location, state, operation, image_url})
  return newBag
}