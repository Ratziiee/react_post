import React from 'react';
import BlogLogo from '../../assets/Images/logo.png'

const logo = (props) => {
    return <div >
        <a href='/'>
            <img className="Logo" src={BlogLogo} alt="My Logo"></img>
        </a>
    </div>
}

export default logo;