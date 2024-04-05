
export interface ILogin {
    userName: string
}

export const login = ({
    userName
}: ILogin): void => {
    alert(`Bem vindo(a) ${userName}!`)
}
