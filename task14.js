"use strict";
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
    get balance() {
        return this._balance;
    }
    set balance(amount) {
        if (amount >= 0) {
            this._balance = amount;
        }
        else {
            throw new Error("Balance cannot be negative");
        }
    }
    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
            console.log(`Successfully deposited ${amount}. New balance: ${this._balance}`);
        }
        else {
            throw new Error("Deposit amount must be positive");
        }
    }
    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be positive");
        }
        if (amount > this._balance) {
            throw new Error("Insufficient balance");
        }
        this._balance -= amount;
        console.log(`Successfully withdrew ${amount}. New balance: ${this._balance}`);
    }
    getAccountInfo() {
        return `
      Account Holder: ${this.accountHolder}
      Account Number: ${this.accountNumber}
      Account Type: ${this.accountType}
      Current Balance: $${this._balance}
    `;
    }
}
const account1 = new BankAccount(123456789, 1000, "John Doe", AccountType.Checking);
try {
    account1.deposit(500);
    account1.withdraw(200);
    console.log(account1.getAccountInfo());
}
catch (error) {
    console.error(error);
}
