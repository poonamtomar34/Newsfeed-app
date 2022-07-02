import React,{useState} from "react";

const Aside = (props) => {
  let childCounterValue = props.valueFromChild;
  console.log('props.valueFromChild', props.toggle1);
    const toggleFunc=()=>{
      props.callbackFunc(!childCounterValue)
      console.log('props',props);
      console.log('pouoj', props.callbackFunc(childCounterValue));
      return
    }
  return (
    <aside className="sidebar">
      <div className="sidetop">
        <div className="asidelogo">
          Logo
        </div>
        <label class="switch">
        <input type="checkbox" defaultChecked onClick={()=>toggleFunc()}/>
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