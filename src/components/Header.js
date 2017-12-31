import React from "react";
import {NavLink} from "react-router-dom";

const Header=()=>(
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="isactive" exact={true}>home</NavLink> /
    <NavLink to="/create" activeClassName="isactive">Create</NavLink> /
    <NavLink to="/edit" activeClassName="isactive">edit</NavLink> /
    <NavLink to="/help" activeClassName="isactive">help</NavLink> 
  </header>
);

export default Header;