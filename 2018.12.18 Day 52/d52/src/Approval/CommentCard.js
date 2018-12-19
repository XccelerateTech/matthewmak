import React from 'react';
import faker from 'faker';

let CommentCard = (props) => {
    return (
        <div className='card col-2 m-2'>
            <img src={faker.image.avatar()} className='card-img-top comment' alt='random avatar'></img>
            <h3 className='card-title comment'>{faker.name.firstName()} {faker.name.lastName()}</h3>
            <div className='card-body comment'>
                <p className="card-text comment">{props.comment}</p>
            </div>
        </div>
    )
}

export default CommentCard;