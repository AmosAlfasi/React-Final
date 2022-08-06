import React, { useState } from "react";
import "./UserInfo.css";
import { Modal } from "react-bootstrap";

const UserInfo = (props) => {
	const [show, setShow] = useState(props.show);

	const handleClose = (e) => {
		setShow(false);
		props.onClosePopup(false);
	};

	return (
		<Modal show={show} onHide={handleClose}>
			<div>{props.id}</div>
			<div>{props.name}</div>
			<div>{props.birthday}</div>
			<div>{props.maritalSatus}</div>
		</Modal>
	);
};

export default UserInfo;
