import React from 'react';
import './rightMenu.css';

const tab = (props) => {
    let tabContent = null;
    if (props.click === 'true') {
        tabContent = (
            <div className="tabContent">
                {props.content}
            </div>
        );
    }

    return (
        <span>
            <button type='button' className="tabMenuItem" onClick={props.click}>{props.title}</button>
            {tabContent}
        </span>
    );
};

export default tab;