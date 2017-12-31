import {addExpense,removeExpense,editExpense} from "../../actions/expenses";

test("should setup remove expense action object",()=>{
  const action= removeExpense({id:"123jn"});
 expect(action).toEqual({
   type: "REMOVE_EXPENSE",
   id: "123jn"
 });
});

test("should setup update expense action object",()=>{
    const acton=editExpense("av321",{description: "John is a greate developer"})
    expect(acton).toEqual({
      type: "EDIT_EXPENSE",
      id: "av321",
      updates:{
        description:"John is a greate developer"
      }
      
    });
});

test("should setup add expense object with provided value",()=>{
    const dataObj={
      description: "Reat",
      amount:200000,
      createdAt: 10000,
      note: "this is the last month rent"
    }
    const action=addExpense(dataObj)
    expect(action).toEqual({
      type:"ADD_EXPENSE",
      expense:{
        ...dataObj,
        id:expect.any(String)
      }
    });
});
test("should setup add expense object with default value",()=>{
  const action=addExpense()
  expect(action).toEqual({
    type:"ADD_EXPENSE",
    expense:{
      description: "",
      amount:0,
      createdAt: 0,
      note: "",
      id:expect.any(String)
    }
});
})