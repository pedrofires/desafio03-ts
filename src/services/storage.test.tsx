import {
  changeLocalStorage,
  createLocalStorage,
  getAllLocalStorage,
} from "./storage";

const dioBank = {
  id: "1",
  password: "123456",
  email: "nath@dio.bank",
  name: "Nathaly Souza",
  balance: 2000.0,
};

describe("storage", () => {
  const mockSetItem = jest.spyOn(Storage.prototype, "setItem");
  it("Deve retornar o objeto no localStorage com a chave diobank", () => {
    const mockGetItem = jest.spyOn(Storage.prototype, "getItem");
    getAllLocalStorage();
    expect(mockGetItem).toHaveBeenCalledWith("diobank");
  });

  it("Deve criar o objeto no localStorage", () => {
    createLocalStorage(dioBank);
    expect(mockSetItem).toHaveBeenCalledWith(
      "diobank",
      JSON.stringify(dioBank)
    );
  });

  it("Deve alterar o valor do objeto no localStorage", () => {
    changeLocalStorage(dioBank);
    expect(mockSetItem).toHaveBeenCalledWith(
      "diobank",
      JSON.stringify(dioBank)
    );
  });
});
