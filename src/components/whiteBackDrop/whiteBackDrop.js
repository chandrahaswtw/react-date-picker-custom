import React from 'react';
import classes from './whiteBackDrop.module.css';

const WhiteBackDrop = (props) => {
    
   const backdropClickEvent = () => {
        props.WhiteBackDropClick();
    }

    return (
        <div className={classes.WhiteBackDropStyle} onClick= {backdropClickEvent}></div>
    )
}

export default WhiteBackDrop;