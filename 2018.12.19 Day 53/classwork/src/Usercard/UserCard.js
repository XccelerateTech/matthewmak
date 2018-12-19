import React from 'react';
import faker from 'faker';

class UserCard extends React.Component {

    render () {
        return (
            <div id='UserCard' className='card p-2 m-2 col-6'>
                <img src={faker.image.avatar()} alt='Profile' className='card-image'></img>
                <div className='m-2 p-2'>
                    <h2 className='card-title'>Name: {this.props.name}</h2>
                    <p className='card-text'>Occupation: {this.props.occupation}</p>
                </div>
            </div>
        )
    }
}

export default UserCard;