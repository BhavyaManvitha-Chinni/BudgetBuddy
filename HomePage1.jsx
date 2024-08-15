import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage-container">
            <header className="homepage-header">
                <h1>Welcome to Budget Buddy</h1>
            </header>
            <nav className="homepage-nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/expenses" className="nav-link">Track Expenses</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/budget" className="nav-link">Set Budget</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/savings" className="nav-link">Track Savings</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/investments" className="nav-link">Monitor Investments</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/goals" className="nav-link">Set Financial Goals</Link>
                    </li>
                    
                </ul>
            </nav>
        </div>
    );
};

export default HomePage;
