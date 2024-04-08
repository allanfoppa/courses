import { api } from "../api"

export const login = async (
  email: string,
  userPassword: string
): Promise<boolean> => {
  const data: any = await api

  if (email !== data.email || userPassword !== data.password) {
    return false
  }

  return true
}
