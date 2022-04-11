import React, { useEffect } from "react";
import RecipeItem from "./RecipeItem";
import {Link} from 'react-router-dom';
import {useDispatch,useSelector} from "react-redux";
import { interceptor } from '../services/interceptor';
import {getPost} from "../container/redux/action/PostAction";

const Recipes = props => {  
  const dispatch = useDispatch();
  const recipes = useSelector((state)=>state.allposts.posts);
  
  useEffect(() => {
    interceptor();
    dispatch(getPost());
  }, [dispatch]);

  return (
    <>
      <div className="col-md-12">
      <Link to="/create/recipes" >Create Post</Link>
    </div>
    <hr />
    {recipes === 'isloading'? <h2>loading ...</h2> :
      <div className="card-columns">
        {recipes.map(recipe => (
          <RecipeItem key={recipe.id} id={recipe.id} type='all_post' title={recipe.title} image={recipe.image} description={recipe.description} />
        ))}
      
      </div>
   }
    </>
  );
};

export default Recipes;
