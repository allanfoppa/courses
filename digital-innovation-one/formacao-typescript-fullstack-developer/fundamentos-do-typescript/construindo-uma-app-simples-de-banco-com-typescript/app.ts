import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';
import { NewAccount } from './class/NewAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10);
peopleAccount.deposit(100);
peopleAccount.withdraw(50);
peopleAccount.getBalance();

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20);
companyAccount.deposit(200);
companyAccount.getLoan(500);
companyAccount.getBalance();

const newAccount: NewAccount = new NewAccount('New', 30);
newAccount.deposit(100);
newAccount.getBalance();
