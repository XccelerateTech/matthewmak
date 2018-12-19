import React, {Component} from 'react';

class Counter extends Component {
    constructor (props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    handleClick = () => {
        let count = this.state.count + 1;
        this.setState( {
            count: count
        })
    }

    render () {
        return (
            <div>
                <button onClick={this.handleClick} className='btn btn-primary m-2'>{this.state.count}</button>
            </div>
        )
    }
}

export default Counter;