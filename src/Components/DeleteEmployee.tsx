import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { deleteAdminAPI } from '../Services/AdminAPIService';

function DeleteEmployee() {
  const [show, setShow] = useState(false);
  const [employeeID, setEmployeeID] = useState<number>(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleDelete() {
    try {
      const response = await deleteAdminAPI(employeeID);

      if (response.ok) {
        console.log('Employee deleted successfully.');
        window.location.reload();
      } else {
        console.error('Error deleting Employee:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Delete Employee
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label> 
            Employee ID: <input
              type="number"
              placeholder="Enter Employee ID"
              value={employeeID}
              onChange={(e) => setEmployeeID(parseInt(e.target.value))}
            />
          </label>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteEmployee;
