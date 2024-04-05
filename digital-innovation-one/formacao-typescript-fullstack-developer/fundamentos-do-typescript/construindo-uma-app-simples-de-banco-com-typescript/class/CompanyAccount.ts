import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  getLoan = (amount: number): void => {
    if (this.validateStatus()) {
      this.balance += amount;
      console.log('Empréstimo realizado com sucesso!');
    } else {
      console.log('Conta inválida para empréstimo.');
    }
  };
}
