import React, { useState, useEffect } from 'react';
import { database } from './firebase';
import { ref, onValue, set } from 'firebase/database';
import './SavingsPage.css';

const SavingsPage = () => {
    const [savings, setSavings] = useState(0);

    useEffect(() => {
        const savingsRef = ref(database, 'savings');
        onValue(savingsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setSavings(data);
            }
        });
    }, []);

    const handleSavingsChange = (e) => {
        const newSavings = parseFloat(e.target.value);
        setSavings(newSavings);

        
        const savingsRef = ref(database, 'savings');
        set(savingsRef, newSavings);
    };

    return (
        <div>
            <h2>Track Savings</h2>
            <input
                type="number"
                value={savings}
                onChange={handleSavingsChange}
            />
            <p>Your savings are: ₹{savings}</p>
        </div>
    );
};

export default SavingsPage;
