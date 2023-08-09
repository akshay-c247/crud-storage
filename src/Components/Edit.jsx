import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Edit = () => {
    const [id,setId]=useState("");
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const navi=useNavigate()

useEffect(()=>{
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"))

},[])
 
const handleUpdate = (e) =>{
    e.preventDefault()
    axios.put(`https://64d3363267b2662bf3dbd4be.mockapi.io/crud/${id}`,{name:name,email:email})
    .then(() =>{
         navi("/list")
    })
}



  return (
    <React.Fragment>
        <h3>Here you can update your details</h3>
      <form >  
                 <div className="mb-3">
                    <label for="exampleInputName" className="form-label">Name</label>
                    <input type="string" className="form-control" placeholder='enter your name' value={name} onChange={(e) => setName(e.target.value)}/>
                </div>


                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='enter your Email' value={email} onChange={(e) => setEmail(e.target.value)} />

                </div>

                <button type="submit" className="btn btn-primary" onClick={handleUpdate}>Updtae</button>
            </form>




    </React.Fragment>
  )
}

export default Edit;