import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const List = () => {

    const [data, setData] = useState([])


    function getdata() {
        axios.get("https://64d3363267b2662bf3dbd4be.mockapi.io/crud")
            .then((res) => {
                console.log(res.data);
                setData(res.data)
            });
    }
    function handledelete (id) {
        axios.delete(`https://64d3363267b2662bf3dbd4be.mockapi.io/crud/${id}`)
        .then(() =>{
            getdata();
        })
    }

    const setToLocalStorage = (id,name,email) =>{
        localStorage.setItem("id",id)
        localStorage.setItem("name",name) 
        localStorage.setItem("email",email)

    };
    useEffect(() => {
        getdata();
    }, [])

    return (
        <React.Fragment>
            <h3>Here you can Read the Users Data</h3>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                        <th scope="col"></th>

                    </tr>
                </thead>
                {
                    data.map((eachdata) => {
                        return (
                            <>

                                <tbody>
                                    <tr>
                                        <th scope="row">{eachdata.id}</th>
                                        <td>{eachdata.name}</td>
                                        <td>{eachdata.email}</td>
                                        <td>
                                        <Link to={"/edit"}><button className='btn-success' onClick={()=>setToLocalStorage(eachdata.id,eachdata.name,eachdata.email)}>Edit</button></Link>
                                        </td>
                                        <td><button className='btn-danger' onClick={() => handledelete(eachdata.id)}>Delete</button></td>
                                    </tr>

                                </tbody>
                            </>


                        )

                    })
                }
            </table>
        </React.Fragment>
    )
}

export default List;