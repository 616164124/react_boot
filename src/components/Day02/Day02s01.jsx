import React, { Component } from 'react'
import './Day02.css'
export default class Day02s01 extends Component {

    constructor(props){
        super(props);
        console.log(222222);
    }

    submit1(e) {
        console.log("11111");
        console.log(e);
    }
    onKeyDown(e){
    console.log(e.keyCode);
    }

    render() {
        return (
            <>
                <div id="image" />
                <button onClick={this.submit1} >按钮1</button>
                {/* 键盘按键触发 */}
                <input onKeyUp={this.onKeyDown}></input>
            </>)
    }
}
