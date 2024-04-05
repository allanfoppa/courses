import { DioAccount } from "./DioAccount";

export class NewAccount extends DioAccount {
  deposit = (amount: number): void => {
    if (this.validateStatus()) {
      this.balance += (amount + 10);
      console.log('Depósito com adicional de R$ 10,00 realizado com sucesso!');
    }
  };
}
