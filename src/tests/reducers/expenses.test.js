import expenseReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state",()=>{
  const state=expenseReducer(undefined,{type:"@@INIT"})
  expect(state).toEqual([]);
});

test("should remove expense by id",()=>{
  const action={
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  }
  const state=expenseReducer(expenses,action);
  expect(state).toEqual([expenses[0],expenses[2]]);
});

test("should not remove expense if id will not found",()=>{
  const action={
    type: "REMOVE_EXPENSE",
    id: "12e"
  }
  const state=expenseReducer(expenses,action);
  expect(state).toEqual(expenses);
});

test("should add an expense",()=>{
  const expense={
    id: 4,
    description: "loan payment",
    amount: 200000,
    note: "",
    createdAt: 20000
  }
  const action={
    type: "ADD_EXPENSE",
    expense
  }
  const state=expenseReducer(expenses,action);
  expect(state).toEqual([...expenses,expense]);
});

test("should edit an expense",()=>{
  const amount= 60000
  const action={
    type: "EDIT_EXPENSE",
    id: expenses[2].id,
    updates:{
      amount
    }
  }
  const state=expenseReducer(expenses,action);
  expect(state[2].amount).toBe(amount);
});

test("should not edit an expense if expense not found",()=>{
  const amount= 50000
  const action={
    type: "EDIT_EXPENSE",
    id: '-1',
    updates:{
      amount
    }
  }
  const state=expenseReducer(expenses,action);
  expect(state).toEqual(expenses);
});