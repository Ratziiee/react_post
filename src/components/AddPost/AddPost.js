import React, { Component } from 'react';
import Button from '../Buttons/Buttons' ;


export default class AddPost extends Component {



    render() {

        // const counter = useSelector(state => state.counter);
        // const isLoggedIn = useSelector(state => state.isLoggedIn);
        
        return (
            <div className="AddPost">
                <div className="Container">
                    <textarea name="Text1" cols="100" rows="20"></textarea>
                    {/* <Button>Add Post</Button> */}
                </div>

                
            </div>
        )
    }
}
