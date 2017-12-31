import React from "react"; 
import ExpenseList from "./ExpensesList";
import ExpenseListFilter from "./ExpenseListFilter";


const ExpenseDashboardPage=()=>(
  <div>
    <p>This is from my dashborad component</p>
    <ExpenseListFilter />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;