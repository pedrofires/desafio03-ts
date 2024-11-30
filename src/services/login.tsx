import { api } from "../api";
import { IDIoBank } from "../models/IDioBank";
import { changeLocalStorage } from "./storage";

export const login = async (
  email: string,
  password: string
): Promise<IDIoBank | boolean> => {
  const data: IDIoBank = await api;

  if (email !== data.email) {
    return false;
  }
  if (password !== data.password) {
    return false;
  }

  changeLocalStorage(data);
  return true;
};
