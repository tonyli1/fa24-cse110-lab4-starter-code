import React, { useContext, useState } from "react";
import { Expense } from "../../types/types";
import { AppContext } from "../../context/AppContext";

const ExpenseItem = (currentExpense: Expense) => {
  // Exercise: Consume the AppContext here
  const {expenses, setExpenses} = useContext(AppContext);

  const handleDeleteExpense = (currentExpense: Expense) => {
    // Exercise: Remove expense from expenses context array
    let newList: Expense[] = [];
    const currId = Number(currentExpense.id);
    for (let i = 0; i < expenses.length; i++) {
      if (i != currId) {
        const thisExpense: Expense = {
          id: String(i<currId ? i : i-1),
          name: expenses[i].name,
          cost: expenses[i].cost,
        };
        newList.push(thisExpense);
      }
    }
    setExpenses(newList);
    console.log(newList);
  };

  return (
    <li key={Number(currentExpense.id)} className="list-group-item d-flex justify-content-between align-items-center">
      <div>{currentExpense.name}</div>
      <div>${currentExpense.cost}</div>
      <div>
        <button onClick={() => handleDeleteExpense(currentExpense)}>x</button>
      </div>
    </li>
  );
};

export default ExpenseItem;
