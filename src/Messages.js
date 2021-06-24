import React, { Component } from 'react'

class Messages extends Component{
    render(){
        return(
            <div>
                <h1>Send A Nice Message To Your MOM!</h1>
                <textarea placeholder="Enter your message"></textarea>
                <input type="submit" value="SEND IT"/>
            </div>
        )
    }
}
export default Messages;