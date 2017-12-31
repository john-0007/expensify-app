import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import {addExpense} from "./actions/expenses";
import {setTextFilter} from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import 'react-dates/lib/css/_datepicker.css';
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store=configureStore();
// console.log(store.getState());
store.dispatch(addExpense({description: "water Bill",amount:4500,createdAt:10000}));
store.dispatch(addExpense({description: "gas Bill",createdAt:1000}));
store.dispatch(addExpense({description: "Rent",amount:14500,createdAt:12000}));
// store.dispatch(setTextFilter('bill'))
// const state=store.getState();
// const visibleExpenses=getVisibleExpenses(state.expenses,state.filters)
// console.log(visibleExpenses);

const Jsx=(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(Jsx,document.getElementById("app"))