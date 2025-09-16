class Account {
  constructor(initialBalance = 0) {
    this.balance = initialBalance;
    this.history = [];
  }

  deposit(amount) {
    this.balance += amount;
    this._log(`Deposit: +${amount} UAH`);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      this._log(`❌ Insufficient funds to withdraw ${amount} UAH`);
      return false;
    }
    this.balance -= amount;
    this._log(`Withdraw: -${amount} UAH`);
    return true;
  }

  getBalance() {
    return this.balance;
  }

  getHistory() {
    return this.history.slice(0, 5);
  }

  _log(message) {
    const timestamp = new Date().toLocaleTimeString();
    this.history.unshift(`[${timestamp}] ${message}`);
  }
}

class ATMApp {
  constructor() {
    this.account = new Account();
    this.$ = (id) => document.getElementById(id); // скорочення
    this.balanceEl = this.$("balance");
    this.amountInput = this.$("amount");
    this.historyEl = this.$("history");
    this.themeToggle = this.$("themeToggle");

    this._init();
  }

  _init() {
    this.$("depositBtn").addEventListener("click", () => this._handle("deposit"));
    this.$("withdrawBtn").addEventListener("click", () => this._handle("withdraw"));
    this.themeToggle.addEventListener("change", () => this._toggleTheme());

    this._loadTheme();
    this._updateUI();
  }

  _handle(type) {
    const amount = parseFloat(this.amountInput.value);
    if (amount > 0) {
      type === "deposit" ? this.account.deposit(amount) : this.account.withdraw(amount);
      this._updateUI();
    }
  }

  _updateUI() {
    this.balanceEl.textContent = `Balance: ${this.account.getBalance()} UAH`;
    this.historyEl.innerHTML = this.account.getHistory()
      .map(entry => `<li>${entry}</li>`)
      .join("");
    this.amountInput.value = "";
  }

  _toggleTheme() {
    const isDark = this.themeToggle.checked;
    document.body.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  _loadTheme() {
    const isDark = localStorage.getItem("theme") === "dark";
    document.body.classList.toggle("dark", isDark);
    this.themeToggle.checked = isDark;
  }
}

window.addEventListener("DOMContentLoaded", () => new ATMApp());
