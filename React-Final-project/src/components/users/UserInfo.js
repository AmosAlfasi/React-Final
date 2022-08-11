import React, { useState } from "react";
import "./UserInfo.scss";
import { Modal } from "react-bootstrap";

const UserInfo = (props) => {
	const [show, setShow] = useState(props.show);

	const handleClose = (e) => {
		setShow(false);
		props.onClosePopup(false);
	};

	const details = Object.keys(props.selectedUser).map((key) => (
		<div>
			{key} : {props.selectedUser[key]}
		</div>
	));

	return (
		<Modal show={show} onHide={handleClose}>
			{details}
		</Modal>
	);
};

export default UserInfo;
