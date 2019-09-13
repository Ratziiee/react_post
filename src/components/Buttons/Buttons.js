import React from 'react';

const button = (props) => {

    return <div >
                <button className="Button" onClick={() => props.onDeleteClickHandler(props.index)}>{props.children}</button>
            </div>
}

export default button;