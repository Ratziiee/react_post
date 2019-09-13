import React, { Component } from 'react'
import NavBarItems from './NavBarItems/NavBarItems'
import Logo from '../Logo/Logo'

class NavBar extends Component {
    render() {
        return (
            <header className="Toolbar">
                <Logo/>
                <ul className="NavBarItems">
                    <NavBarItems link="/">Home</NavBarItems>
                    <NavBarItems link="/addPost">Add Post</NavBarItems>
                </ul>
            </header>
        )
    }
}

export default NavBar;