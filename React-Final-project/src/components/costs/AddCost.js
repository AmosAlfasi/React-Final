import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./AddCost.scss";

const AddCost = (props) => {
	console.log("amos hamelech");
	const [show, setShow] = useState(props.show);
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [cost, setCost] = useState("");
	const [month, setMonth] = useState("");
	const [year, setYear] = useState("");

	const generateNumbersArray = (start, end) => {
		const temp = [];
		for (let i = start; i <= end; i++) {
			temp.push(i);
		}
		return temp;
	};

	const months = generateNumbersArray(1, 12);
	const years = generateNumbersArray(1970, 2022);

	const handleClose = (e) => {
		setShow(false);
		props.onClosePopup(false);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		setShow(false);
		props.onClosePopup({
			status: false,
			userCosts: {
				id: props.selectedUser.id,
				costs: { name, description, cost, month, year },
			},
		});
	};

	return (
		<Modal show={show} onHide={handleClose}>
			<div className="add-cost">
				<div className="title">{`Add cost to user ${props.selectedUser.id}`}</div>
				<Form>
					<Form.Group className="form-group">
						<Form.Label>Name:</Form.Label>
						<Form.Control
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="form-group">
						<Form.Label>Description:</Form.Label>
						<Form.Control
							type="text"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="form-group">
						<Form.Label>Cost:</Form.Label>
						<Form.Control
							type="text"
							value={cost}
							onChange={(e) => setCost(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="form-group">
						<Form.Label>Month:</Form.Label>
						<Form.Select onChange={(e) => setMonth(e.target.value)}>
							{months.map((d) => (
								<option value={d}>{d}</option>
							))}
						</Form.Select>
					</Form.Group>
					<Form.Group className="form-group">
						<Form.Label>Year:</Form.Label>
						<Form.Select onChange={(e) => setYear(e.target.value)}>
							{years.map((d) => (
								<option value={d}>{d}</option>
							))}
						</Form.Select>
					</Form.Group>
					<Button className="submit" type="submit" onClick={submitHandler}>
						Submit
					</Button>
				</Form>
			</div>
		</Modal>
	);
};

export default AddCost;
