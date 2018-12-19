import React, {Component} from 'react';

class Question extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:null
        }
    }

    handleClick = () => {
        let answer = prompt('Your answer?')
        this.setState({ value: answer })
    }

    render(){
        return (
            <div className='card col-3 p-2 m-2'>
                <h4>{this.props.question}</h4>
                <p>Your answer: {this.state.value}</p>
                <button className='btn btn-primary m-2' onClick={this.handleClick}>Answer</button>
            </div>
        )
    }

    
}

export default Question;