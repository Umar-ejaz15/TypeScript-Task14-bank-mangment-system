"use strict";
// Bank Account Manager:
// Define a BankAccount class with properties accountNumber, balance, and accountHolder.
// Use getters and setters for the balance to control deposits and withdrawals.
// Add an enum for account types like Checking, Savings, Business.
var AccountType;
(function (AccountType) {
    AccountType["Checking"] = "Checking";
    AccountType["Savings"] = "Savings";
    AccountType["Business"] = "Business";
})(AccountType || (AccountType = {}));
class BankAccount {
    constructor(accountNumber, _balance, accountHolder, accountType) {
        this.accountNumber = accountNumber;
        this._balance = _balance;
        this.accountHolder = accountHolder;
        this.accountType = accountType;
    }
    setBalance(amount) {
        this._balance = amount;
    }
    getBalance() {
        return this._balance;
    }
}
const account1 = new BankAccount(123456789, 1000, "John Doe", AccountType.Checking);
console.log(account1);
// This line produces undefined because setBalance() is a void method that doesn't return anything
console.log(account1.getBalance()); // Move this before the setBalance to see initial balance
account1.setBalance(2000); // Remove console.log here since it returns void
console.log(account1);
