import React from "react";
import {Link} from 'react-router-dom';
const Header = props => {
  const { search, onInputChange, onSearchClick} = props;
  return (
    <div className="jumbotron">
     
        <Link to="/"> <i className="material-icons brand-icon">fastfood</i></Link> <h3>Food Recipe</h3>
  
      <div className="input-group w-50 mx-auto">
        <input
          type="text"
          className="form-control"
          placeholder="Search Your Recipe..."
          value={search}
          onChange={onInputChange}
        />
        <div className="input-group-append">
          <button className="btn btn-dark" onClick={onSearchClick}>
            Recipe
          </button>
          <Link className="btn btn-dark" to="/users">
            User
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
