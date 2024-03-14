// ? 1. Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance().

class BankAccount {
    constructor(balance, owner) {
      this.balance = balance;
      this.owner = owner;
    }
  
    deposit(amount) {
      this.balance = this.balance + amount;
    }
  
    withdraw(amount) {
      this.balance = this.balance - amount;
    }
  
    displayBalance() {
      console.log(`Owner: ${this.owner} , Balance: ${this.balance}`);
    }
  }
  
  const person1 = new BankAccount(10000, "sumit");
  
  person1.displayBalance();
  person1.deposit(10000);
  person1.displayBalance();
  person1.withdraw(3000);
  person1.displayBalance();