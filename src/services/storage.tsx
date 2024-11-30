import { IDIoBank } from "../models/IDioBank";

const dioBank = {
  login: false,
};

export const getAllLocalStorage = (): string | null => {
  return localStorage.getItem("diobank");
};

export const createLocalStorage = (dioBank: IDIoBank): void => {
  localStorage.setItem("diobank", JSON.stringify(dioBank));
};

export const changeLocalStorage = (dioBank: IDIoBank): void => {
  localStorage.setItem("diobank", JSON.stringify(dioBank));
};

export const clearLocalStorage = (): void => {
  localStorage.clear();
};
