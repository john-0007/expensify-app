import React from "react";
import {BrowserRouter, Route ,Switch} from "react-router-dom";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import AddEditPage from "../components/AddEditPage";
import AddHelpPage from "../components/AddHelpPage";
import Header from "../components/Header";
import NotFoundPage from "../components/NotFoundPage";

const AppRouter=()=>(
<BrowserRouter>
  <div>
    <Header />
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true}/>
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={AddEditPage} />
      <Route path="/help" component={AddHelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
</BrowserRouter>
);

export default AppRouter;