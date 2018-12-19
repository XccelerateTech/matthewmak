import React from 'react';
import faker from 'faker';

interface IMyProps {
    author: string;
    date: string;
    comment: string;
    children?: JSX.Element[] | JSX.Element;
}

const CommentCard : React.SFC<IMyProps> = (props) => {
    return (
        <div className='card'>
            <img src={faker.image.avatar()} className='card-img-top'></img>
            <h3 className='card-title'>{props.author} {faker.name.lastName()}</h3>
            <div className='card-body'>
                <p className="card-text">Today is {props.date}</p>
                <p className="card-text">{props.comment}</p>
            </div>
        </div>
    )
}

export default CommentCard;