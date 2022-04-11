import React from "react";
import {Link} from 'react-router-dom';
const RecipeItem = props => {
  const { id,title, image, type, description } = props;
  return (
      <div className="card py-3 mb-4 text-center" key={id}>
        <img src={`http://localhost:8000/images/${image}`} style={{height:"175px",width:"175px" }} className={` img-fluid mb-4 ${ type ==='all_post' ? 'w-50 rounded-circle' : 'w-100' } mx-auto `} alt="img not found"/>
          <div className="card-body">
            <h5 className="py-2">{title.toUpperCase()}</h5>
            <div className="list-group-item">{description.toUpperCase()}</div><br />
          </div>
        {type ==='all_post' ? <Link className="btn btn-info text-white" to={`view/${id}`}>Read More</Link>: ''}
      </div>
  );
};

export default RecipeItem;
