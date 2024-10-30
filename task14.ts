// Bank Account Manager:

// Define a BankAccount class with properties accountNumber, balance, and accountHolder.
// Use getters and setters for the balance to control deposits and withdrawals.
// Add an enum for account types like Checking, Savings, Business.
enum AccountType {
  Checking = "Checking",
  Savings = "Savings",
  Business = "Business",
}
class BankAccount {
  constructor(
    public accountNumber: number,
    private _balance: number,
    public accountHolder: string,
    public accountType: AccountType
  ) {}
  setBalance(amount: number): void {
    this._balance = amount;
  }
  getBalance(): number {
    return this._balance;
  }
}
const account1 = new BankAccount(
  123456789,
  1000,
  "John Doe",
  AccountType.Checking
);
console.log(account1);
// This line produces undefined because setBalance() is a void method that doesn't return anything
console.log(account1.getBalance()); // Move this before the setBalance to see initial balance
account1.setBalance(2000); // Remove console.log here since it returns void
console.log(account1);
