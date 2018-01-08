import React from "react";
import {Link} from "react-router-dom";

const Header=()=>(
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/">
            <h1>Expensify</h1>
        </Link> 
      </div>
    </div>
  </header>
);

export default Header;

// <NavLink to="/create" activeClassName="isactive">Create</NavLink> /
// <NavLink to="/edit" activeClassName="isactive">edit</NavLink> /
// <NavLink to="/help" activeClassName="isactive">help</NavLink> 