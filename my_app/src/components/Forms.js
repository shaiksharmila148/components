import React, { Component } from 'react'

class Forms extends Component {

constructor(props) {
    super(props)

    this.state = {
         username: '',
         comments: ''
    }
}


    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    render() {
        return (
            <forms>
                <div>
                    <label>username</label>
                    <input type='text' value ={this.state.username} onChange = {this.handleUsernameChange} />
                </div>
                <div>
                    <label>comments</label>
                    <textarea value = {this.state.comments }></textarea>
                </div>
            </forms>
        )
    }
}

export default Forms