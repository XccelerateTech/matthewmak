import React from 'react';
import CommentCard from '../CommentCard';

const DisplayList = (props) => {
    const listItems = props.list.map(l => {
        return (
            <CommentCard comment={l.comment}></CommentCard>
        )
    })

    return (
        <div id='DisplayList'>
            <h1 id='Title'>{props.listname} List</h1>
            <div id='CardList'>
                {listItems}
            </div>
        </div>
    )
}

export default DisplayList;