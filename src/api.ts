import { IDIoBank } from "./models/IDioBank"

const conta: IDIoBank = {
    id: '1',
    password: '123456',
    email: 'pedrinho_testes@gmail.com',
    name: 'Pedrinho Da Yamaha',
    balance: 25000.00,
}

export const api: Promise<IDIoBank> = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000);
})
