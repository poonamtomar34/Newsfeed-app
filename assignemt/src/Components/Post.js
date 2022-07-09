import React from "react";
import WordLimit from 'react-word-limit';
export function Post(props) {
    const { id, title, body } = props.data;
    const isToggle=props.passToggle
    const onClickDelete=props.onClickDelete
    return (
        
        <li>
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
    {/* onClick={()=>deletePost(id)} */}
    <div className="button">
        <button className={isToggle?'delete-btn':'buttonChange'} onClick={onClickDelete}>X</button>
  </div>
  </li>
  
    );
  }