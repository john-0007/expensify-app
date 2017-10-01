import uuid from "uuid";
// Add Expense
export const addExpense=({
  description = "",
  note        = "",
  amount      = 0,
  createdAt    = 0
})=>({ 
  type: "ADD_EXP",
  expense:{
    id: uuid(),
    description,
    note,
    amount,
    createdAt
}});
 // Remove Expense
export const removeExpense=({id}={})=>({
  type: "REMOVE_EXPENSE",
  id
});
//  Update Expense
export const editExpense=(id,update)=>({
  type: "EDIT_EXPENCE",
  id,
  update
})