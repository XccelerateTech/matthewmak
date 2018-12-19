import React from 'react';

class AddItem extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            item:null
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state);
        this.setState({
            item:''
        })
    }

    handleChange = (e) => {
        this.setState({
            item:e.target.value
        })
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' value={this.state.item} onChange={this.handleChange}></input>
                <input type='submit' value='Submit'></input>
            </form>
        )
    }
}

export default AddItem;