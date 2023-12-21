import { instance } from "../api/connection";

export async function getAllUsers() {
  try {
    const data = await instance.get("/user");
    return data;
  } catch (error) {
    return {message: error}
  }
}


export async function getUserByRid() {
  try {
    const data = await instance.get("/user", {rid});
    return data;
  } catch (error) {
    return {message: error}
  }
}