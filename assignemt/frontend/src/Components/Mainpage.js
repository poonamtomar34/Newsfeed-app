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
         console.log('user.id        ' ,user.id, 'id  ',id)
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
        {/* {users.map((user)=>{
          const {id,title,body}=user
          return <><li key={id}>
            <div>
                <img src={(id%6===0)?`${process.env.PUBLIC_URL}/images/victoria-secret-image${6}.jpg`:`${process.env.PUBLIC_URL}/images/victoria-secret-image${id%6}.jpg`} alt=""/>
                <div className="news-content">
                <h4> 
              <WordLimit limit={isToggle?35:10}>
              {title}
              </WordLimit>
              </h4>
              <p><WordLimit limit={isToggle?65:25}>
              {body}
              </WordLimit></p>
                </div>
            </div>
            <div className="button">
                <button className={isToggle?'delete-btn':'buttonChange'} onClick={()=>deletePost(id)}>X</button>
          </div>
          </li>
          
          </>
        })} */}
         </div>
        </>);
};
export default UseEffectFetchData;