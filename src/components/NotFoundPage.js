import React from "react";
import {Link} from "react-router-dom";

const NotFoundPage=()=>(
  <div>
    !404 page not found
    <Link to="/">Go home page</Link>
  </div>
);

export default NotFoundPage;