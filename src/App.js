import React, { useState} from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Recipes from "./components/Recipes";
import CreateRecipe from "./components/CreateRecipe";
import SingleRecipes from "./components/SingleRecipes";
import User from "./components/User";
import {paginationPost} from "./container/redux/action/PostAction";
import {useDispatch,useSelector} from "react-redux";
import {searchPost} from "./container/redux/action/PostAction";
import {getPost} from "./container/redux/action/PostAction";
import {BrowserRouter as Router, Switch ,Route} from "react-router-dom";
function App() {
  const dispatch = useDispatch();

  
  const [search, setSerach] = useState("");
  const postdata = {
    search: search,
 };
  const onInputChange = e => {
      setSerach(e.target.value);
      dispatch(searchPost(postdata));
    };
  
 const onPagination = (e) => {
  const postdata={
    page_id:e.currentTarget.id,
    search:search,
  }
 dispatch(paginationPost(postdata));
}
 const onSearchClick = () => {
  dispatch(searchPost(postdata));
};
const backtohome = () => {
  setSerach('');
  dispatch(getPost());
};

 
  const countpost = useSelector((state)=>state.allposts.count);

  const array_count=countpost;
  const pages=array_count/2;
  const list = []
  for (var i = 1; i <= pages; i++) {
       list.push(<span key={i}><span style={{fontSize:"30px" }} id={i} onClick={onPagination}><button style={{background:"red",paddingRight:"12px",color:"white" }} type="button">&nbsp;{i}</button></span></span>)
    }
  return (
    <Router>        
    <div className="App">
    <Header
                search={search}
                onInputChange={onInputChange}
                onSearchClick={onSearchClick}
                backtohome={backtohome}
            />
      <div className="container">
        
        <Switch>
          <Route path="/create/recipes" exact  >
                <CreateRecipe />
          </Route>
          <Main>
              <Switch>
                <Route path="/" exact  >
                  <Recipes onPagination={onPagination} list={list}/>
                </Route>
                <Route path="/users" exact  >
                  <User />
                </Route>
                <Route path="/view/:id" exact  >
                  <SingleRecipes/>
                </Route>
              </Switch>
          </Main>      
        </Switch>

      </div>
    </div>
    </Router>
  );
}

export default App;
