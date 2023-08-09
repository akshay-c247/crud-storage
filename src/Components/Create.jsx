import React, {useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Create.css'
import { Link } from 'react-router-dom';

const Create = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate=useNavigate();
    const header={"Access-Control-Allow-Origin":"*"};
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("clicked")
        axios.post("https://64d3363267b2662bf3dbd4be.mockapi.io/crud",{name:name,email:email,header})
        .then(() =>{
            navigate('/list')
           });
      

    }
    
       

    return (
        <React.Fragment >
            <h2>Here you can Add Users</h2>
            <div className='text-right'>
             <Link to="/list">
            <button className='btn btn-primary'>List</button>
            </Link>
            </div>
            <form >  
                 <div className="mb-3">
                    <label for="exampleInputName" className="form-label">Name</label>
                    <input type="string" className="form-control" placeholder='enter your name' onChange={(e) => setName(e.target.value)} />
                </div>


                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='enter your Email' onChange={(e) => setEmail(e.target.value)} />

                </div>

                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>

        </React.Fragment>
    )
}

export default Create;