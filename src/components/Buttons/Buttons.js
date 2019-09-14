import React from 'react';

const button = (props) => {

    return <div >
                <button className="Button" onClick={() => props.clicked(props.index)}>{props.children}</button>
            </div>
}

export default button;