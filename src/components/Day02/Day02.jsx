import React, { Component } from 'react'
import './Day02.css';
import Day02s01 from '../Day02/Day02s01'
//引入css 必须写全path 
export default class Day02 extends Component {
    render() {
        return (
            <div>
                <div id="css01" > hello</div>
                <Day02s01/>
            </div>
        )
    }
}


