export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (amount: number): void => {
    if (this.validateStatus()) {
      this.balance += amount;
      console.log('Depósito realizado com sucesso!');
    }
  };

  withdraw = (amount: number): void => {
    if (this.validateStatus() && this.balance >= amount) {
      this.balance -= amount;
      console.log('Saque realizado com sucesso!');
    } else {
      console.log('Saldo insuficiente ou conta inválida para saque.');
    }
  };

  getBalance = (): void => {
    console.log(`Saldo atual: ${this.balance}`);
  };

  validateStatus = (): boolean => {
    if (this.status) {
      return true;
    }
    throw new Error('Conta inválida');
  };
}
