import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { Expense } from "../../types/types";

const AddExpenseForm = () => {
  // Exercise: Consume the AppContext here
  const {expenses, setExpenses} = useContext(AppContext);

  // Exercise: Create name and cost to state variables
  const [name, setName] = useState("")
  const [cost, setCost] = useState(0)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Exercise: Add add new expense to expenses context array
    const newExpense: Expense = {
      id: String(expenses.length),
      name: name,
      cost: cost,
    };
    // let newList: Expense[] = expenses;
    // newList.push(newExpense);
    // setExpenses(newList);
    // console.log(newList);
    setExpenses([...expenses, newExpense])
    console.log([...expenses, newExpense]);
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            required
            type="text"
            className="form-control"
            id="name"
            placeholder=""
            // value=""
            // HINT: onChange={}
            onChange={(e) => {
              setName(e.target.value)
            }}
          ></input>
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input
            required
            type="text"
            className="form-control"
            id="cost"
            placeholder={"0"}
            // value={0}
            // HINT: onChange={}
            onChange={(e) => {
              setCost(Number(e.target.value))
            }}
          ></input>
        </div>
        <div className="col-sm">
          <button type="submit" className="btn btn-primary mt-3">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
