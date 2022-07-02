import React,{useState} from "react";

const Aside = (props) => {
  console.log(props);
  const [toggle1, setToggle1] = useState(false);
    const toggleFunc=()=>{
      setToggle1(!toggle1)
    }
  return (
    <aside className="sidebar">
      <div className="sidetop">
        <div className="sidetop-img">
        <img src={`${process.env.PUBLIC_URL}/images/victoria-secret-image1.jpg`} alt=""/>
        <div className="asidelogo">
          <h4>Hi reader</h4>
          <p>Here's your news!!</p>
        </div>
        </div>
        <div className="sidetop sidetoggle">
          <h4>Visit Toggle</h4>
        <label class="switch">
        <input type="checkbox" defaultChecked onClick={()=>{toggleFunc();props.callbackFunc(toggle1)}}/>
        <span class="slider"></span>
        </label>
        </div>
        <div>
          <div
            className="dashbord"
          />
          <h4>Have a Feedback?</h4>
          <button className="feedback-btn">We are Listening</button>
          <div/>
        </div>
      </div>
    </aside>
  );
};

export default Aside;