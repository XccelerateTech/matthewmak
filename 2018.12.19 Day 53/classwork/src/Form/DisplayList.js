import React from 'react';
import UserCard from '../Usercard/UserCard';

const DisplayList = (props) => {
    console.log(props);
    const listItems = props.list.map(l => {
        return (
            <UserCard name={l.firstname + ' ' + l.lastname} occupation={l.occupation}></UserCard>
        )
    })

    return (
        <div id='DisplayList' className='m-2 p-2'>
            <h1 id='Title'>{props.listname} List</h1>
            <div id='CardList'>
                {listItems}
            </div>
        </div>
    )
}

export default DisplayList;