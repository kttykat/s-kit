export const createId = (length: number = 55) => {
  let str = "";
  let chars = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890QWERTYUIOPASDFGHJKLZXCVBNM"
  for(let i = 0; i < length; i++) {
    str += chars[Math.floor(Math.random() * chars.length)]
  }
  return str
}