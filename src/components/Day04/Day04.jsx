import React, { Component } from 'react'
import axios from 'axios'
import { Menu, Icon } from 'antd'

//axios官网 还有测试需要配合http://mock-api.com/ 来模拟  http://www.axios-js.com/zh-cn/docs
export default class Day04 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            province: "",
            name: "",
            id: ""
        }
    }
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentDidMount() {
        axios.get('http://mock-api.com/Ln4XNZnx.mock/test01')
            .then((res) => {
                var list1 = res.data.data[0];
                for (var key in list1) {
                    // console.log(list1[key]["name"]);
                    // console.log(list1[key]["province"]);
                    // console.log(list1[key]["id"]);
                }
                this.setState({
                    list: res.data.data
                })
            })
    }

    getMenuItems() {
     var list2 = this.state.list[0]
     for(var key in list2){
        var li =+<ul>list2[key]["name"],list2[key]["province"],list2[key]["id"]</ul> 
     }
     console.log(list2);
     return li
    }
    render() {
        return (
            <React.Fragment>
                <Menu mode="horizontal">
                    {this.getMenuItems()}
                </Menu>
            </React.Fragment>
        )
    }


}
