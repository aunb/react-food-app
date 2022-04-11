import React, { useEffect } from "react";
import {Link} from 'react-router-dom';
import {useDispatch,useSelector} from "react-redux";
import {getUser} from "../container/redux/action/userAction";
const User = props => {
  const dispatch = useDispatch();
  const getusers = useSelector((state)=>state.allusers.getusers);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  return (
    <>
      <div className="col-md-12">
      <Link to="/create/recipes" >Create Post</Link> 
    </div>
    <hr />

      <table className="table ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Full Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            { 
              getusers === 'isloading' || getusers === undefined ? 'laoding ...' :
              getusers.map((val, index) =>
                <tr key={index}>
                  <th scope="row">{val.id}</th>
                  <td>{val.fullname}</td>
                  <td>{val.email}</td>
                  <td>{val.phone}</td>
                </tr> 
            ) }
          </tbody>
      </table>
 
    </>
  );
};

export default User;
