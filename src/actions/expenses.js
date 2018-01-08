import uuid from "uuid";
import database from "../firebase/firebase";
// Add Expense
export const addExpense=(expense)=>({ 
  type: "ADD_EXPENSE",
  expense
});

export const startAddExpense=(expenseData={})=>{
  return (dispatch)=>{
    const {
      description= "",
      note       ="",
      amount     =0,
      createdAt  =0,
    }=expenseData
    const expense={description,note,amount,createdAt};
    database.ref("expense").push(expense)
    .then((ref)=>{
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  };
};
 // Remove Expense
export const removeExpense=({id}={})=>({
  type: "REMOVE_EXPENSE",
  id
});
//  Update Expense
export const editExpense=(id,updates)=>({
  type: "EDIT_EXPENSE",
  id,
  updates,
 
})