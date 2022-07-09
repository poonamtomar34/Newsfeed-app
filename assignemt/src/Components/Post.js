import React, {useState} from "react";
import WordLimit from 'react-word-limit';
import Modal from 'react-modal';
export function Post(props) {
    const { id, title, body } = props.data;
    const isToggle=props.passToggle
    const onClickDelete=props.onClickDelete
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
    function closeModal() {
      setIsOpen(false);
    }
    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
    };
    return (<>
        <li onClick={openModal}>
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
  <Modal
  isOpen={modalIsOpen}
  style={customStyles}
>
  <iframe src="https://en.wikipedia.org/wiki/Wikipedia" className='iframeContainer' title="Iframe Example"></iframe>
  <p></p>
  <button onClick={closeModal}>close</button>
  </Modal>
  </>
    );
  }