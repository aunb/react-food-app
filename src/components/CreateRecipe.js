import React,{useState} from "react";
import {useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';
const CreateRecipe = props => {
  const locationHistory = useHistory(); 
  const [title, settitle] = useState('');
  const [description, setdescription] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
 
 

  const postformSubmit = async (event) => { 
    const postData = new FormData()
    postData.append("title",title)
    postData.append("description",description)
    postData.append("image",selectedImage) 
    console.log("selectedImage",selectedImage);  
    event.preventDefault();
    const res=await axios({method: "post",
    url: "http://localhost:8000/api/post",
    data: postData,
    headers: { "Content-Type": "multipart/form-data" }});

    console.log("responce",res);  

    locationHistory.push('/'); 
  };


  return (
    <>
    <form method='post' onSubmit={(e) => postformSubmit(e)}>
          <div className="row">
              
              <div className="form-group col-md-12">
                <Link to="/" className="btn btn-link">View post</Link><br />
                <label htmlFor="exampleInputEmail1">Title</label>
                <input type="text" className="form-control" onChange={(e) => settitle(e.target.value)} value={title} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Title here" />
              </div>
              <div className="form-group col-md-12">
                <label htmlFor="exampleInputPassword1">Image</label>
                <input type="file" className="form-control" onChange={(event) => {setSelectedImage(event.target.files[0]);}} id="exampleInputPassword1" placeholder="image" />
              </div>
              <div className="form-group col-md-12">
                <label htmlFor="exampleInputPassword1">Description</label>
                <textarea className="form-control" onChange={(e) => setdescription(e.target.value)} value={description} id="exampleInputPassword1" placeholder="Enter Description here" ></textarea>
              </div>
              <div className="form-group col-md-12 float-right">
                <button type="submit" className="btn btn-primary float-right">Submit</button>
              </div>
          </div> 
      </form>
    </>
  );
};

export default CreateRecipe;
