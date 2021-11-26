import { BankAccount } from "./bank-account";
import { TransactionSort } from "./transaction-sort.enum";

export interface Transaction{    
    account: BankAccount;
    amount: number;
    pdate: number;
    sort: TransactionSort.Outcoming      
}