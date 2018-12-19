import React from 'react';

class AddUserCard extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            item:{}
        }
    }

    handleChange = (e) => {
        let newItem = this.state.item;
        if (e.target.name === 'firstname') {
            newItem.firstname = e.target.value;
        } else if (e.target.name === 'lastname') {
            newItem.lastname = e.target.value;
        } else if (e.target.name === 'occupation') {
            newItem.occupation = e.target.value
        }
        this.setState(newItem);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUserCard(this.state.item)
        this.setState({
            item:{}
        })
    }

    render () {
        return (
            <form id='AddUserCard' onSubmit={this.handleSubmit}>
                <label>First Name</label>
                <input type='text' name='firstname' value={this.state.firstname} onChange={this.handleChange}></input>
                <label>Last Name</label>
                <input type='text' name='lastname' value={this.state.lastname} onChange={this.handleChange}></input>
                <label>Occupation</label>
                <input type='text' name='occupation' value={this.state.occupation} onChange={this.handleChange}></input>
                <input type='submit' value='Submit'></input>
            </form>
        )
    }
}

export default AddUserCard;