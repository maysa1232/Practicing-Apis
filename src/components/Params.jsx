import React from 'react';

const Params = props => {
    
    const style = {
        color : props.textColor,
        background: props.backgroundColor
    }
    
    
    return(
        <h2 style={style}> Word is: {props.word} </h2> 
    )
}

export default Params;