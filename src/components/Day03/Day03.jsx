import React, { Component } from 'react'

export default class Day03 extends Component {
    constructor(){
        super();
        this.setState={
            date: new Date(),
            name: "才"
        };
    }
   
    render() {
        return (
            <div>
                {this.setState.date.toLocaleTimeString()}
                {this.setState.name}
            </div>
        )
    }
}
