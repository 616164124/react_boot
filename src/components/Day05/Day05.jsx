import React, { Component } from 'react'
import Day05s01 from './Day05s01'
export default class Day05 extends Component {

    constructor() {
        super()
        this.state = {
            sum: 0,
            list:""
        }
    }
    handleclick = () => {
        this.setState(
            {
                sum: this.state.sum + 1
            })
    }
    handleclickOne=(e)=>{
        console.log("===============>"+e)
    }
    render() {
        return (
            <div>
                <button onClick={this.handleclick}>按钮1</button>
                <h5>{this.state.sum}</h5>
                <button onClick= {()=>{this.handleclickOne("8889879")}}>按钮2</button>
                <Day05s01/>
            </div>
        )
    }
}
