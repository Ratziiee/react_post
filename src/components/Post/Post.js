import React, { Component } from 'react'
import Button from '../Buttons/Buttons'

class Post extends Component {

    constructor()
    {
        super();
        this.state = {
            posts : [
                "People are the most important thing. Business model and product will follow if you have the right people",
                'Don’t let others convince you that the idea is good when your gut tells you it’s bad.',
                "Don’t get distracted. Never tell yourself that you need to be the biggest brand in the whole world. Start by working on what you need at the present moment and then what you need to do tomorrow. So, set yourself manageable targets.",
                "If you can offer a free tier that provides a lot of value, it will naturally help your product to spread much more rapidly."
            ]
        }
    }

    onclickHandler = (index) => {
        this.state.posts.splice(index,1);
        this.setState({posts : this.state.posts})

    }

    addPostHandler = (data) => {
        this.setState((prevState)=>{
            return {posts : prevState.posts.push("")}
        })        
    }

    render() {
        let posts = null;
        if(this.state.posts.length > 0)
        {
            posts = this.state.posts.map((data,index) => {
                return <div className='PostBackground'>
                   <p>{data}</p>
                    <Button index = {index} clicked = {this.onclickHandler}>Delete</Button>
                </div>
            })
        }
        else
        {
             posts =  <p>No Post Available Please Add Some</p>
        }
        

        return (
            <div style={{marginTop : "80px"}}> 
                {posts}
            </div>
        )
    }
}

export default Post;
