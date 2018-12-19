import React from 'react';

class Clock extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            date: new Date().toLocaleTimeString()
        }
    }

    render () {
        return (
            <div id='clock' className='card p-2 m-2'>
                <p>{this.state.date}</p>
            </div>
        )
    }

    tick () {
        this.setState({date: new Date().toLocaleTimeString()})
    }

    componentDidMount () {
        this.timerID = setInterval(
            ()=> this.tick(),
            1000
        )
    }

    componentWillUnmount () {
        clearInterval(this.timerID);
    }
}

export default Clock;