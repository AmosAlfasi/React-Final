import React from 'react';
import { Form } from 'react-bootstrap';
import './AddCost.css';

const AddCost = props => {

    return (
        <Form>
            <Form.Group>
                <Form.Control type="text" onChange={handleInputChange} placeholder="Enter user name" />
            </Form.Group>
        </Form>
    )
}

export default AddCost;