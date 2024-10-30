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

  get balance(): number {
    return this._balance;
  }

  set balance(amount: number) {
    if (amount >= 0) {
      this._balance = amount;
    } else {
      throw new Error("Balance cannot be negative");
    }
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this._balance += amount;
      console.log(
        `Successfully deposited ${amount}. New balance: ${this._balance}`
      );
    } else {
      throw new Error("Deposit amount must be positive");
    }
  }

  withdraw(amount: number): void {
    if (amount <= 0) {
      throw new Error("Withdrawal amount must be positive");
    }
    if (amount > this._balance) {
      throw new Error("Insufficient balance");
    }
    this._balance -= amount;
    console.log(
      `Successfully withdrew ${amount}. New balance: ${this._balance}`
    );
  }

  getAccountInfo(): string {
    return `
      Account Holder: ${this.accountHolder}
      Account Number: ${this.accountNumber}
      Account Type: ${this.accountType}
      Current Balance: $${this._balance}
    `;
  }
}

const account1 = new BankAccount(
  123456789,
  1000,
  "John Doe",
  AccountType.Checking
);

try {
  account1.deposit(500);
  account1.withdraw(200);
  console.log(account1.getAccountInfo());
} catch (error) {
  console.error(error);
}
