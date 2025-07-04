import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert
    const userName = "Allan Foppa"

    it('Deve exibir um alert com boas vindas', () => {
        login({ userName })
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo(a) ${userName}!`)
    })
})
