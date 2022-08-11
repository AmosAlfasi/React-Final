<<<<<<< HEAD:React-Final-project/src/components/users/UserItem.js
import React from 'react';
import './UserItem.scss';

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

=======
import React from 'react';
import './UserItem.scss';

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

>>>>>>> e58f741687887f4fd31fd6fc34734c6426b1803e:React-Final-project/src/components/UserItem.js
export default UserItem;