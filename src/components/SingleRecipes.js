import React,{useEffect,useState} from "react";
import RecipeItem from "./RecipeItem";
import Axios from "axios";
import { useParams } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {getPost} from "../container/redux/action/PostAction";
const SingleRecipes = (props) => {
  const dispatch = useDispatch();
  const recipes = useSelector((state)=>state.allposts.posts);

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  const post_id =useParams().id;
 
  const [title, settitle] = useState('');
  const [image, setimage] = useState('');
  const [id, setpostid] = useState('');
  const [description, setdescription] = useState('');
  
        useEffect(()=>{
          const fetchPostData  =async() =>{
          const {data}=await Axios.get(`http://127.0.0.1:8000/api/post/${post_id}/edit`);   
          
          setpostid(data.data.id)
          settitle(data.data.title)
          setdescription(data.data.description)
          setimage(data.data.image)
      }
      fetchPostData()
      //  axios.get()
      },[post_id])
  return (
    <div className="row"> 
        <div className="card col-md-6">
            <RecipeItem key={id} title={title} type='single_post' image={image} description={description} />
        </div>
    
        <div className="card col-md-6">
          {recipes === 'isloading'? <h2>loading ...</h2> :
          <div >
            {recipes.map(recipe => (
              recipe.id!==id?
                <RecipeItem key={recipe.id} id={recipe.id} type='single_post' title={recipe.title} image={recipe.image} description={recipe.description} />
              :''
            ))}
          
          </div>
          }
        </div>
    </div>
  );
};

export default SingleRecipes;
