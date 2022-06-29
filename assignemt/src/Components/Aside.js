import React,{useState} from "react";

const Aside = () => {
    const [toggle, setToggle]=useState(false)
  return (
    <aside className="sidebar">
      <div className="sidetop">
        <div className="asidelogo">
          Logo
        </div>
        <label class="switch">
        <input type="checkbox" defaultChecked/>
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