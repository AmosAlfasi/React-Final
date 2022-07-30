import React from 'react';
import './UserItem.css';

const UserItem = props => {
    const handleClick = (e) => {
        e.preventDefault();
        console.log(props.firstName);
        console.log(props.lastName);
        console.log(props.id);
        // props.onShowInfo(props.id, props.userName, props.userItem);
    }

    return (
        <div onClick={handleClick} className='user'>
            <span > {props.firstName}  {props.lastName} </span>
        </div>
    )
}

export default UserItem;