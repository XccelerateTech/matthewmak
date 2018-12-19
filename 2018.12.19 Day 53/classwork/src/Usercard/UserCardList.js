import React from 'react';
import DisplayList from '../Form/DisplayList';
import AddUserCard from './AddUserCard';

class UserCardList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            list:[
                {id:1,firstname:'Matt',lastname:'hew',occupation:'Software Eng'}
            ]
        }
    }

    deleteUserCard = () => {

    }

    addUserCard = (item) => {
        item.id = this.state.list.reduce((acc,num) => {
            if (acc.id > num.id) {
                return acc
            } else {
                return num
            }
        }).id + 1
        const list = [...this.state.list,item]
        this.setState({list:list})
    }

    render () {
        return (
            <div>
                <AddUserCard addUserCard = {this.addUserCard}></AddUserCard>
                <DisplayList listname='UserCard' list={this.state.list}></DisplayList>
            </div>
        )
    }
}

export default UserCardList;