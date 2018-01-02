import React from "react"; 
import ExpenseList from "./ExpensesList";
import ExpenseListFilter from "./ExpenseListFilter";
import ExpensesSummary from "./ExpensesSummary";


const ExpenseDashboardPage=()=>(
  <div>
    <ExpensesSummary />
    <ExpenseListFilter />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;