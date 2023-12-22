import jwt from 'jsonwebtoken';

const private_key = process.env.secret || 'secret key'
export async function generateToken(rid: string) {
  const token = jwt.sign({ rid }, private_key, { expiresIn: '36000000' });
  console.log(token);
  return token;
} 