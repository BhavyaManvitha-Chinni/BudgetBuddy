import React, { useState, useEffect } from 'react';
import { ref, onValue, set } from 'firebase/database';
import { database } from './firebase';
import './BudgetPage.css';

const BudgetPage = () => {
    const [budget, setBudget] = useState(0);
    const [inputBudget, setInputBudget] = useState(0);

    useEffect(() => {
        const budgetRef = ref(database, 'budget');
        
        
        onValue(budgetRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setBudget(data);
            }
        });
    }, []);

    const handleBudgetChange = (e) => {
        setInputBudget(parseFloat(e.target.value));
    };

    const saveBudget = () => {
        const budgetRef = ref(database, 'budget');
        
        set(budgetRef, inputBudget)
            .then(() => {
                console.log("Budget updated successfully");
                setBudget(inputBudget); 
            })
            .catch((error) => console.error("Error updating budget:", error));
    };

    return (
        <div className="budget-page">
            <h2>Set Budget</h2>
            <form>
                <input
                    type="number"
                    value={inputBudget}
                    onChange={handleBudgetChange}
                    placeholder="Enter your budget"
                />
                <button type="button" onClick={saveBudget}>Set Budget</button>
            </form>
            <p>Your budget is: ₹{budget}</p>
        </div>
    );
};

export default BudgetPage;
