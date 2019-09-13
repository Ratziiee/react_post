import React, { Component } from 'react'
import {BrowserRouter , Switch , Route} from 'react-router-dom';
import NavBar from '../Navigation/NavBar'
import Post from '../Post/Post';
import AddPost from '../AddPost/AddPost'


class Layout extends Component {
    render() {
        return (
            <div>
               
                <BrowserRouter>
                 <NavBar/>
                    <Switch>
                        <Route path="/" exact component = {Post}/>
                        <Route path='/addPost' component={AddPost}/>
                    </Switch>
                </BrowserRouter>
                
            </div>
        )
    }
}

export default Layout;