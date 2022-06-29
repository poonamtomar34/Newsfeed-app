import React, { useState, useEffect } from 'react';
import axios from "axios";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts" 
});
const UseEffectFetchData = () => {
  const[users,setUsers]=useState([])
  useEffect(() => {
    const fetchPost = async () => {
       try {
          let response = await client.get('?_limit=10');
          setUsers(response.data);
       } catch (error) {
          console.log(error);
       }
    };
    fetchPost();
  }, []);
   const deletePost = async (id) => {
    await client.delete(`${id}`);
    setUsers(
       users.filter((user) => {
          return user.id !== id;
       })
    );
 };
  //here, we are using [] because we need render users only once, if we don't use [], then setUsers(users), will update the value, that will go to users in useState
  //then when getUsers will be called it,ll again be updated, and it will create an infinite loop and the browser will most probably crash.
  return (
        <> 
        <ul className='users'>
        {users.map((user)=>{
          const {id,title,body}=user
          return <li key={id}>
            <div>
                <img src={`${process.env.PUBLIC_URL}/images/victoria-secret-image${id}.jpg`} alt="" style={{width:"50px", height:'50px'}}/>
              <h4>
                {title}
              </h4>
              <p>{body}</p>
            </div>
            <div className="button">
                <div className="delete-btn" onClick={()=>deletePost(id)}>Delete</div>
             </div>
          </li>
        })}
         </ul>
        </>);
};
export default UseEffectFetchData;