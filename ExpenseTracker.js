document.addEventListener('DOMContentLoaded', function () {
    const balanceElement = document.getElementById('balance');
    const expenseListElement = document.getElementById('expense-list');
    const expenseFormElement = document.getElementById('expense-form');

    let balance = 0;
    let expenses = [];

    function updateBalance() {
        balanceElement.textContent = balance.toFixed(2);
    }

    function updateExpenseList() {
        expenseListElement.innerHTML = expenses.map(expense => `
            <div class="expense-item">
                <span>${expense.description}</span>
                <span>$${expense.amount.toFixed(2)}</span>
                <button onclick="removeExpense(${expenses.indexOf(expense)})">Remove</button>
            </div>
        `).join('');
    }

    function addExpense(description, amount) {
        expenses.push({ description, amount });
        balance += amount;
        updateBalance();
        updateExpenseList();
    }

    function removeExpense(index) {
        const removed = expenses.splice(index, 1)[0];
        balance -= removed.amount;
        updateBalance();
        updateExpenseList();
    }

    expenseFormElement.addEventListener('submit', function (event) {
        event.preventDefault();
        const description = document.getElementById('text').value.trim();
        const amount = parseFloat(document.getElementById('amount').value);
        if (description && amount) {
            addExpense(description, amount);
            expenseFormElement.reset();
        } else {
            alert('Please enter a valid description and amount.');
        }
    });

    updateBalance();
    updateExpenseList();
});
