import React, {Component} from 'react';

class Day01 extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    render() {
        let first = "nihao";
        return (
            <div>
                <div>{first}<br/></div>
            </div>
        );
    }
}

export default Day01;




