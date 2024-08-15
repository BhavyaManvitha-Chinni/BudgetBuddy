import React, { useState, useEffect } from 'react';
import { database } from './firebase';
import { ref, onValue, set, push } from 'firebase/database';
import './ExpensesPage.css';

const ExpensesPage = () => {
    const [expenses, setExpenses] = useState([]);
    const [expenseName, setExpenseName] = useState('');
    const [expenseAmount, setExpenseAmount] = useState('');

    useEffect(() => {
        const expensesRef = ref(database, 'expenses');
        onValue(expensesRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const loadedExpenses = Object.values(data);
                setExpenses(loadedExpenses);
            }
        });
    }, []);

    const addExpense = (e) => {
        e.preventDefault();
        if (expenseName && expenseAmount) {
            const newExpense = { name: expenseName, amount: parseFloat(expenseAmount) };

            
            const expensesRef = ref(database, 'expenses');
            const newExpenseRef = push(expensesRef);
            set(newExpenseRef, newExpense);

            
            setExpenses([...expenses, newExpense]);

            
            setExpenseName('');
            setExpenseAmount('');
        }
    };

    return (
        <div className="expenses-page">
            <h2>Track Expenses</h2>
            <form onSubmit={addExpense}>
                <div>
                    <label>Expense Name: </label>
                    <input
                        type="text"
                        value={expenseName}
                        onChange={(e) => setExpenseName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Expense Amount: </label>
                    <input
                        type="number"
                        value={expenseAmount}
                        onChange={(e) => setExpenseAmount(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Expense</button>
            </form>
            <h3>Expenses List</h3>
            <ul>
                {expenses.map((expense, index) => (
                    <li key={index}>
                        {expense.name}: ₹{expense.amount.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExpensesPage;
