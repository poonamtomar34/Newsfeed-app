import React, { useState, useEffect } from 'react';
import axios from "axios";
import Aside from './Aside';
import WordLimit from 'react-word-limit';

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts" 
});
const UseEffectFetchData = (props) => {
   const [toggle1, setToggle1] = useState(false);
   const[users,setUsers]=useState([])
   const callback = valueFromChild => setToggle1(valueFromChild);
  useEffect(() => {
    const fetchPost = async () => {
       try {
          let response = await client.get('?_limit=15');
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
        <Aside callbackFunc={callback} toggle1Value={toggle1}></Aside>
        <ul className='users'>
        {users.map((user)=>{
          const {id,title,body}=user
          return <><li key={id}>
            <div>
                <img src={`${process.env.PUBLIC_URL}/images/victoria-secret-image${id}.jpg`} alt="" style={{width:"50px", height:'50px'}}/>
                <div className="news-content">
                <h4> 
              <WordLimit limit={35}>
              {title}
              </WordLimit>
              </h4>
              <p><WordLimit limit={85}>
              {body}
              </WordLimit></p>
                </div>
            </div>
          </li>
          <div className="button">
                <button className="delete-btn" onClick={()=>deletePost(id)}>X</button>
          </div>
          </>
        })}
         </ul>
        </>);
};
export default UseEffectFetchData;