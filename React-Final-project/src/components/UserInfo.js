import React, { useState } from 'react';
import './UserInfo.css';
import { Modal } from 'react-bootstrap';

const UserInfo = props => {
    const [show, setShow] = useState(props.show);

    const handleClose = (e) => {
        setShow(false);
        props.onClosePopup(false);
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <div>hellow</div>
        </Modal>
    )
}

export default UserInfo;