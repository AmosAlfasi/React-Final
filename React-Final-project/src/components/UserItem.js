import React from 'react';
import './UserItem.css';

const UserItem = props => {
    const handleClick = (e) => {
        e.preventDefault();
        props.onShowInfo(props.id);
    }

    return (
        <div onClick={handleClick} className='user'>
            <span > {props.firstName}  {props.lastName} </span>

        </div>
    )
}

export default UserItem;