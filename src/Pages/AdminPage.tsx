import React, { useState, ReactElement } from 'react';
import { Dropdown, DropdownButton, Modal, Button } from 'react-bootstrap'; // Assuming you're using react-bootstrap
import UpdateAdmin from "../Components/UpdateAdmin";
import AddAdmin from "../Components/AddAdmin";
import AddManager from "../Components/AddManager";
import { EmployeeList } from "../Components/EmployeeList";
import DeleteEmployee from "../Components/DeleteEmployee";
import UpdateManager from '../Components/UpdateManager';

export function AdminPage() {
    const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const components: { [key: string]: ReactElement } = {
        'Add Manager': <AddManager />,
        'Add Employee': <AddAdmin />,
        'Update Employee': <UpdateAdmin />,
        'Assign Manager': <UpdateManager />,
        'Delete Employee': <DeleteEmployee />
    };

    return (
        <>
            <DropdownButton id="dropdown-basic-button" title={selectedComponent ? selectedComponent : "Choose an Option"}>
            {Object.keys(components).map((key) => (
                <Dropdown.Item key={key} onClick={() => { setSelectedComponent(key); handleShow(); }}>
                    {key}
                </Dropdown.Item>
                ))}
            </DropdownButton>

            

            <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedComponent}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {selectedComponent && components[selectedComponent]}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                        Close
                        </Button>
                    </Modal.Footer>
                    </Modal>
              <h3>Please see list of all Employees below:</h3>      
            <EmployeeList />
        </>
    );
}
