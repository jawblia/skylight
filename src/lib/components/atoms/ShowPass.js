import React from 'react';
import { WiMoonAltWaxingCrescent2 } from 'react-icons/wi';
import { WiMoonAltWaningGibbous2 } from 'react-icons/wi'; 

const ShowPass = (props) => {
    
    return ( 
        <div className="showPass">
        {!props.show ? 
          <WiMoonAltWaxingCrescent2 className="icon" onClick={props.handleShowPass}/> 
          :   <WiMoonAltWaningGibbous2 className="icon" onClick={props.handleShowPass}/> }
          </div>
    );
}
 
export default ShowPass;