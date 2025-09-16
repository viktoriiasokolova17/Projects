export class Sidebar {
  constructor(user, balance) {
    this.user = user;
    this.balance = balance;
  }

  render() {
    const balanceText = this.balance.toFixed(2); // ✅ Тепер balance є
    console.log('Balance:', balanceText);

    // приклад вставки в DOM
    document.querySelector('.balance-value').textContent = `$${balanceText}`;
  }
}
