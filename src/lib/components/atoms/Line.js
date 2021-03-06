import React from 'react';
 
const Line = (props) => { 

    const getLine = (col) => {
        switch(col) {
            case 'menu': return 'var(--sand4)'
            case 'lightest': return 'var(--shadow)'
            default: return 'var(--body-lightest)';
        }
    } 

    return (
            <hr style={{background: getLine(props.col), width:props.width}} 
                className={props.className}
                data-id={props.id}>
            </hr>         
    );
}
 
export default Line;