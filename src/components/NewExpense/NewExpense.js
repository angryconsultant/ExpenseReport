import React, { useState } from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random.toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  const addNewExpenseClickHandler = () => {
    setShowExpenseForm(true);
  }

  const cancelAddNewExpenseClickHandler = () => {
    setShowExpenseForm(false);
  }

  return (
    <div className="new-expense">
      { !showExpenseForm && <button onClick={addNewExpenseClickHandler}>Add new Expense</button>}
      { showExpenseForm && <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelAddNewExpenseClickHandler} />}
      
    </div>
  );
};

export default NewExpense;
