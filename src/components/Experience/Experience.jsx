import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>1000+</div>
        <span  style={{color: darkMode?'white':''}}>Coding Problems Solved At</span>
        <span>GeeksForGeeks</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>400+</div>
        <span  style={{color: darkMode?'white':''}}>Coding Problems Solved At</span>
        <span>LeetCode</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>400+</div>
        <span  style={{color: darkMode?'white':''}}>Coding Problems Solved At</span>
        <span>Interview Bit</span>
      </div>
    </div>
  );
};

export default Experience;
