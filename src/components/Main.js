import React from 'react';
// import Header from "../components/Header";
// import {searchPost} from "../container/redux/action/PostAction";
// import {useDispatch,useSelector} from "react-redux";
function Main(props) {
    // const dispatch = useDispatch();
    // const [search, setSerach] = useState("");
    //   const onInputChange = e => {
    //     setSerach(e.target.value);
    //   };
      // const onSearchClick = () => {
      //   dispatch(searchPost(postdata));
      // };
    //   const postdata = {
    //     search: search,
    //  };
    //  const backtohome = () => {
    //     setSerach('');
    // };
      
    return (
        <>
          {/* <Header
                search={search}
                onInputChange={onInputChange}
                onSearchClick={onSearchClick}
                backtohome={backtohome}
            /> */}
            <div className="container mt-4" >   
                <div >{props.children}</div>
            </div>
        </>
           
    );
}

export default Main;

