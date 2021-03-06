import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group'; 
import './SlideX.css';

const Slide = (props) => {
    const nodeRef = useRef(null);

    return (  
        <CSSTransition in={props.in} 
            timeout={350} 
            nodeRef={nodeRef} 
            classNames="rollOutX" 
            unmountOnExit
            > 
            <div ref={nodeRef}>
                {props.children}
            </div>
        </CSSTransition>
    );
}
 
export default Slide;