import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import ExpensesPage from './ExpensesPage1.jsx';
import BudgetPage from './BudgetPage.jsx';
import SavingsPage from './SavingsPage.jsx';
import InvestmentsPage from './InvestmentsPage.jsx';
import GoalsPage from './GoalsPage.jsx';
import Login from './login.jsx';
import SignUp from './signUp.jsx';
import HomePage1 from './HomePage1.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/1" element={<HomePage1 />} />
        <Route path="/expenses" element={<ExpensesPage />} />
        <Route path="/budget" element={<BudgetPage />} />
        <Route path="/savings" element={<SavingsPage />} />
        <Route path="/investments" element={<InvestmentsPage />} />
        <Route path="/goals" element={<GoalsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
