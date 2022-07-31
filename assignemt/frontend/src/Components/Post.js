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
        padding:'0px',
        border:'3px solid rgb(2, 2, 150)',
        borderRadius:'1rem 1rem'
      },
    };
    return (<>
        <li >
        <div onClick={openModal}>
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
        <button className={isToggle?'delete-btn':'buttonChange'} onClick={(e)=>{onClickDelete(e)}}>X</button>
  </div>
  </li>
  <Modal
  isOpen={modalIsOpen}
  style={customStyles}
>
  <div className="iframe-heading">
  <p className="iframe-para">Here's some news for you!</p>
  <button className="iframe-button" onClick={closeModal}>close</button>
  </div>
  <iframe src="https://en.wikipedia.org/wiki/Wikipedia" className='iframeContainer' title="Iframe Example"></iframe>
{
  Modal.setAppElement('body')
}
  </Modal>
  </>
    );
  }