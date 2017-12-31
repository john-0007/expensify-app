import moment from "moment";
import {setTextFilter, sortByAmount,sortByDate,setStartDate,setEndDate} from "../../actions/filters.js";

test("should generate set start date action object",()=>{
  const action=setStartDate(moment(0))
    expect(action).toEqual({
      type: "SET_START_DATE",
      startDate:moment(0)
    });
});
test("should generate set start end action object",()=>{
  const action=setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate:moment(0)
  });
});

test("should generate action object for sortby amount",()=>{
  expect(sortByAmount()).toEqual({
    type:"SORT_BY_AMOUNT"
  })
});
test("should generate action object for sortby date",()=>{
  expect(sortByDate()).toEqual({
    type:"SORT_BY_DATE"
  });
});

test("should generate set text filter object with text value",()=>{
  const text="john"
  const action=setTextFilter(text);
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text
  });
});

test("should generate set text filter object with default value",()=>{
  const action=setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  });
});
