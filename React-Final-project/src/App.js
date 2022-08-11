import React, { useState } from "react";
import "./App.scss";
import UserItem from "./components/users/UserItem";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import Avatar from "./image/avatar.svg";
import Search from "./components/filters/Search";
import UserInfo from "./components/users/UserInfo";
import AddUser from "./components/users/AddUser";

const initUsers = [
	{
		key: 0,
		firstName: "diana",
		lastName: "krakovich",
		id: "0",
		birthday: "1/1/200",
		maritalSatus: "married",
	},
	{
		key: 1,
		firstName: "amos",
		lastName: "alfasi",
		id: "1",
		birthday: "1/1/200",
		maritalSatus: "married",
	},
	{
		key: 2,
		firstName: "Itay",
		lastName: "Amini",
		id: "2",
		birthday: "1/1/200",
		maritalSatus: "Open for ",
	},
	{
		key: 3,
		firstName: "amos",
		lastName: "test",
		id: "3",
		birthday: "1/1/200",
		maritalSatus: "married",
	},
	{
		key: 4,
		firstName: "shmuel",
		lastName: "zibi",
		id: "4",
		birthday: "1/1/200",
		maritalSatus: "married",
	},
];

function App() {
	const [showInfo, setShowInfo] = useState(false);
	const [selectedUser, setSelectedUser] = useState(null);
	const [users, setUsers] = useState(initUsers);
	const [filteredUsers, setFilteredUsers] = useState(initUsers);
	const [show, setShow] = useState(false);
	const [showAddUser, setShowAddUser] = useState(false);

	const showInfoHandler = (id) => {
		setShowInfo(!showInfo);
		setSelectedUser((prev) => {
			const temp = users.find((user) => user.id === id);
			return temp;
		});
		setShow(true);
	};

	const showAddUserHandler = () => {
		setShowAddUser(!showAddUser);
	}

	const deleteUser = (id) => {
		setFilteredUsers((prevUsers) => {
			const updatedUsers = prevUsers.filter((user) => user.id !== id);
			return updatedUsers;
		});
		setUsers((prevUsers) => {
			const updatedUsers = prevUsers.filter((user) => user.id !== id);
			return updatedUsers;
		});
	};


	const onSearchChange = (value) => {
		setFilteredUsers(
			users.filter(
				(user) => {
					const temp = `${user.firstName}${user.lastName}`;
					const valTemp = value.slice(" ").toLowerCase();
					console.log(`temp:${temp}`);
					console.log(`valTemp:${valTemp}`);
					console.log(temp.toLowerCase().includes(valTemp));
					return temp
						.toLowerCase()
						.includes(value.replace(/\s/g, "").toLowerCase());
				}
			)
		);
	};

	const onClosePopup = () => setShow(false);

	const onCloseAddUserPopup = (params) => {
		setShowAddUser(false)
		if (params.newUser) {
			setUsers(prevValue => {
				return [...prevValue, params.newUser]
			})
			setFilteredUsers(prevValue => {
				return [...prevValue, params.newUser]
			})
		}
	};

	return (
		<div className="content">
			<div className="header">
				<Search onSearchChange={onSearchChange}></Search>
				<Button variant="primary" onClick={() => setShowAddUser(!showAddUser)}>Add User</Button>
				{showAddUser && (
					<AddUser
						onClosePopup={onCloseAddUserPopup}
						show={true}
					></AddUser>
				)}
			</div>
			<div className="users">
				{filteredUsers.map((user) => (
					<Card>
						<Card.Img variant="top" src={Avatar} />
						<Card.Body>
							<UserItem
								key={user.key}
								id={user.id}
								firstName={user.firstName}
								lastName={user.lastName}
								onShowInfo={showInfoHandler}
							/>
							<Button
								variant="outline-primary"
								onClick={() => console.log(user.id)}
							>
								Add Cost
							</Button>

							<Button
								variant="outline-primary"
								onClick={() => deleteUser(user.id)}
							>
								Delete User
							</Button>
						</Card.Body>
					</Card>
				))}
			</div>
			{show && (
				<UserInfo
					onClosePopup={onClosePopup}
					show={true}
					selectedUser={selectedUser}
				></UserInfo>
			)}
		</div>
	);
}

export default App;
