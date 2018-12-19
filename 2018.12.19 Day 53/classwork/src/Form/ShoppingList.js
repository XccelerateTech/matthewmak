import React from 'react';
import DisplayList from './DisplayList';
import AddItem from './AddItem';

class ShoppingLIst extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name:"Matt's",
            list:[
                { id:1, item:'milk'}
            ]
        }
    }

    deleteItem = (id) => {
        const list = this.state.list.filter( item => {
            return item.id !== id;
        })
        this.setState(
            {list}
        )
    }

    addItem = (item) => {
        item.id = Math.random();
        const list = [...this.state.list,item]
        this.setState({
            list:list
        })
    }

    render () {
        return (
            <div>
                <DisplayList listname={this.state.name} list={this.state.list} deleteItem={this.deleteItem}></DisplayList>
                <AddItem addItem={this.addItem}></AddItem>
            </div>
        )
    }
}

export default ShoppingLIst;