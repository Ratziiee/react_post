import React from 'react';
import {Link} from 'react-router-dom';


const navBarItems = (props) => {
    return(
        <ul>
            <li >
                {/* <a href=>{props.children}</a> */}
                <Link to={props.link}>{props.children}</Link>
            </li>
            
        </ul>
    )
}

export default navBarItems;