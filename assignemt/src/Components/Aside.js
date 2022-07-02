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
        <div className="asidelogo">
          Logo
        </div>
        <label class="switch">
        <input type="checkbox" defaultChecked onClick={()=>{toggleFunc();props.callbackFunc(toggle1)}}/>
        <span class="slider"></span>
        </label>
        <div>
          <div
            className="dashbord"
          />hey Readers
          Feedback
          <div/>
        </div>
      </div>
    </aside>
  );
};

export default Aside;