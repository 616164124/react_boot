import React, { Component } from 'react'

export default class Day05s01 extends Component {

handle=(e)=>{
    console.log("====>"+e);
}

    render() {
        return (
            <div>
                <button onClick={()=>{this.handle("hello")}}>按钮day05s01</button>
            </div>
        )
    }
}
