import React from "react";
import Trybutton from "./Trybutton";


const Example = ({ fontSize, bgColor, barWidth, code }) => {
    return (
      <div className='example'>
        <div style={{ fontSize: fontSize }}>Example</div>
        <div className='firstcode'>
          <div style={{ backgroundColor: bgColor, width: barWidth, height: "100%" }}>
          </div>
          <div className='code'>
            <pre>{code}</pre> 
          </div>
          </div>
        <Trybutton code={code} />
      </div>
    );
  };


  export default Example;