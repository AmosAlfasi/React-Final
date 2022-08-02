
import React, { useState } from 'react';
import './App.css';
import UserItem from './components/UserItem';
import Card from 'react-bootstrap/Card';
import { Button, Modal } from 'react-bootstrap';
import Avatar from './image/avatar.svg';
import Search from './components/Search';
import UserInfo from './components/UserInfo';

const initUsers = [
  {
    key: 0,
    firstName: 'diana',
    lastName: 'krakovich',
    id: '0',
    birthday: '1/1/200',
    maritalSatus: 'married'
  },
  {
    key: 1,
    firstName: 'amos',
    lastName: 'alfasi',
    id: '1',
    birthday: '1/1/200',
    maritalSatus: 'married'
  },
  {
    key: 2,
    firstName: 'test',
    lastName: 'test',
    id: '2',
    birthday: '1/1/200',
    maritalSatus: 'married'
  },
  {
    key: 3,
    firstName: 'test',
    lastName: 'test',
    id: '3',
    birthday: '1/1/200',
    maritalSatus: 'married'
  },
  {
    key: 4,
    firstName: 'test',
    lastName: 'test',
    id: '4',
    birthday: '1/1/200',
    maritalSatus: 'married'
  },
  {
    key: 5,
    firstName: 'test',
    lastName: 'test',
    id: '5',
    birthday: '1/1/200',
    maritalSatus: 'married'
  },
  {
    key: 6,
    firstName: 'test',
    lastName: 'test',
    id: '6',
    birthday: '1/1/200',
    maritalSatus: 'married'
  },
  {
    key: 7,
    firstName: 'test',
    lastName: 'test',
    id: '7',
    birthday: '1/1/200',
    maritalSatus: 'married'
  },
  {
    key: 8,
    firstName: 'test',
    lastName: 'test',
    id: '8',
    birthday: '1/1/200',
    maritalSatus: 'married'
  },
  {
    key: 9,
    firstName: 'test',
    lastName: 'test',
    id: '9',
    birthday: '1/1/200',
    maritalSatus: 'married'
  },
  {
    key: 10,
    firstName: 'test',
    lastName: 'test',
    id: '10',
    birthday: '1/1/200',
    maritalSatus: 'married'
  },
  {
    key: 11,
    firstName: 'test',
    lastName: 'test',
    id: '11',
    birthday: '1/1/200',
    maritalSatus: 'married'
  },
  {
    key: 12,
    firstName: 'test',
    lastName: 'test',
    id: '12',
    birthday: '1/1/200',
    maritalSatus: 'married'
  },
  {
    key: 13,
    firstName: 'test',
    lastName: 'test',
    id: '13',
    birthday: '1/1/200',
    maritalSatus: 'married'
  },
  {
    key: 14,
    firstName: 'test',
    lastName: 'test',
    id: '14',
    birthday: '1/1/200',
    maritalSatus: 'married'
  },
  {
    key: 15,
    firstName: 'test',
    lastName: 'test',
    id: '15',
    birthday: '1/1/200',
    maritalSatus: 'married'
  },
  {
    key: 16,
    firstName: 'test',
    lastName: 'test',
    id: '16',
    birthday: '1/1/200',
    maritalSatus: 'married'
  },
  {
    key: 17,
    firstName: 'test',
    lastName: 'test',
    id: '17',
    birthday: '1/1/200',
    maritalSatus: 'married'
  },
  {
    key: 18,
    firstName: 'test',
    lastName: 'test',
    id: '18',
    birthday: '1/1/200',
    maritalSatus: 'married'
  },
  {
    key: 19,
    firstName: 'test',
    lastName: 'test',
    id: '19',
    birthday: '1/1/200',
    maritalSatus: 'married'
  },
  {
    key: 20,
    firstName: 'test',
    lastName: 'test',
    id: '20',
    birthday: '1/1/200',
    maritalSatus: 'married'
  },
  {
    key: 21,
    firstName: 'test20',
    lastName: 'test20',
    id: '21',
    birthday: '1/1/200',
    maritalSatus: 'married'
  }
];

function App() {
  const [showInfo, setShowInfo] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setusers] = useState(initUsers);
  const [filteredUsers, setFilteredUsers] = useState(initUsers);
  const [show, setShow] = useState(false);

  const showInfoHandler = (id) => {
    setShowInfo(!showInfo);
    setSelectedUser((prev) => {
      const temp = users.find(user => user.id === id);
      return temp;
    });
    setShow(true);
  }

  const deleteUser = id => {
    setFilteredUsers(prevUsers => {
      const updatedUsers = prevUsers.filter(user => user.id !== id)
      return updatedUsers
    })
    setusers(prevUsers => {
      const updatedUsers = prevUsers.filter(user => user.id !== id)
      return updatedUsers
    })
  }

  const onSearchChange = value => {
    setFilteredUsers(users.filter(user => user.firstName.includes(value) || user.lastName.includes(value)))
  }

  const onClosePopup = () => setShow(false);

  return (
    <div className='content' >
      <Search onSearchChange={onSearchChange}></Search>
      <div className='users'>
        {filteredUsers.map((user) =>
          <Card >
            <Card.Img variant="top" src={Avatar} />
            <Card.Body >
              <UserItem key={user.key} id={user.id} firstName={user.firstName} lastName={user.lastName} onShowInfo={showInfoHandler} />
              <Button variant="outline-primary" onClick={() => deleteUser(user.id)}>Delete User</Button>
            </Card.Body>
          </Card>
        )}
      </div>
      {show && (<UserInfo onClosePopup={onClosePopup} show={true}></UserInfo>)}
    </div >
  );
}

export default App;
