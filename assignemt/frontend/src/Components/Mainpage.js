import React, { useState, useEffect } from 'react';
import axios from "axios";
import Aside from './Aside';
import Pagination from './Pagination';
import { Post } from './Post';


const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts" 
});
const UseEffectFetchData = (props) => {
   let [isToggle,setIsToggle]=useState('')
   const[users,setUsers]=useState([])
   const callback = (valueFromChild) => setIsToggle(valueFromChild);
   console.log(isToggle);
  useEffect(() => {
    const fetchPost = async () => {
       try {
          let response = await client.get('?_limit=36');
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
         console.log('user.id' ,user.id, 'id  ',id)
          return user.id !== id;
       })
    );
 };
 
  //here, we are using [] because we need render users only once, if we don't use [], then setUsers(users), will update the value, that will go to users in useState
  //then when getUsers will be called it,ll again be updated, and it will create an infinite loop and the browser will most probably crash.
  return (
        <>
        <Aside callbackFunc={callback}></Aside>
        
        <div className="dataContainer">
        {users.length > 0 ? (
        
          <Pagination
          onClickDelete={(id)=>deletePost(id)}
          passToggle={isToggle}
            data={users}
            RenderComponent={Post}
            title="Posts"
            pageLimit={3}
            dataLimit={6}
          />
      ) : (
       <h1>Loading......</h1>
      )}
        
         </div>
        </>);
};
export default UseEffectFetchData;