import { UserController } from "./UserController";
import { UserService } from '../services/UserService'
import { Request } from 'express'
import { makeMockResponse } from "../__mocks__/mockResponse.mock";

describe('UserController', () => {
    const mockUserService: Partial<UserService> = {
        createUser: jest.fn(),
        getAllUsers: jest.fn(),
        deleteUser: jest.fn(),
    }

    const userController = new UserController(mockUserService as UserService);

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('Deve adicionar um novo usuário', () => {
        const mockRequest = {
            body: {
                name: 'Nath',
                email: 'nath@test.com'
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({ message: 'Usuário criado' })
    })

    it('Deve retornar erro se o nome não for informado', () => {
        const mockRequest = {
            body: {
                email: 'nath@test.com'
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({ message: 'Bad request! Name obrigatório' })
    })

    it('Deve retornar erro se o email não for informado', () => {
        const mockRequest = {
            body: {
              name: 'Nath'
            }
        } as Request;
        const mockResponse = makeMockResponse();
        userController.createUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(400);
        expect(mockResponse.state.json).toMatchObject({ message: 'Bad request! Email obrigatório' });
    })

    it('Chama getAllUsers', () => {
        const mockRequest = {} as Request;
        const mockResponse = makeMockResponse();

        userController.getAllUsers(mockRequest, mockResponse);
        expect(mockUserService.getAllUsers).toHaveBeenCalled();
    })

    it('Deve deletar usuário e retornar mensagem de sucesso', () => {
        const mockRequest = {
          body: {
            name: 'nath',
          },
        } as Request;
        const mockResponse = makeMockResponse();

        const userController = new UserController(mockUserService as UserService);
        userController.deleteUser(mockRequest, mockResponse);

        expect(mockResponse.state.status).toBe(200);
        expect(mockResponse.state.json).toEqual({
          message: `Usuário ${mockRequest.body.name} deletado.`,
        });
        expect(mockUserService.deleteUser).toHaveBeenCalledWith(mockRequest.body.name);
      });

      it('Deve retornar erro ao deletar usuário', () => {
        const mockRequest = {
          body: {
            name: 'Jane Doe',
          },
        } as Request;
        const mockResponse = makeMockResponse();

        const userController = new UserController(mockUserService as UserService);
        userController.deleteUser(mockRequest, mockResponse);

        expect(mockResponse.state.status).toBe(400);
        expect(mockResponse.state.json).toEqual({ message: 'Erro ao deletar usuário.' });
        expect(mockUserService.deleteUser).toHaveBeenCalledWith(mockRequest.body.name);
      });
})
