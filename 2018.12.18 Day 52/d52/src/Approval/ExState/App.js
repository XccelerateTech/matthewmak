import React, {Component} from 'react';
import DisplayList from './DisplayList';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'Superman',
            list: [
                {id:1, comment:'I love milk'},
                {id:2, comment:'I love coffee'},
                {id:3, comment:'I love tea'},
                {id:4, comment:'I love nothing'}
            ]
        }
    }

    render () {
        return (
            <div>
                <DisplayList listname={this.state.name} list={this.state.list}></DisplayList>
            </div>
        )
    }
}

export default App;