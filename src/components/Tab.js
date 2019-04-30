import React from 'react';
import './rightMenu.css';

const tab = (props) => {
    return (
        <span>
            <button className="tabMenuItem" onClick={props.click}>{props.title}</button>
            <div className="tabContent">
                {props.content}
            </div>
        </span>
    );
};

export default tab;