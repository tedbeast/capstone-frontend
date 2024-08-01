import React, { useState, useEffect, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dropdown, DropdownButton, Modal, Button } from 'react-bootstrap';
import UpdateAdmin from "../Components/UpdateAdmin";
import AddAdmin from "../Components/AddAdmin";
import AddManager from "../Components/AddManager";
import { EmployeeList } from "../Components/EmployeeList";
import DeleteEmployee from "../Components/DeleteEmployee";
import UpdateManager from '../Components/UpdateManager';

export function AdminPage() {
    const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
    const [showError, setShowError] = useState(false);
    const [showComponent, setShowComponent] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const role = localStorage.getItem('role');
        if (role !== 'ADMIN') {
            setError('You do not have access to this page.');
            setShowError(true); 
        }
    }, []);

    const handleCloseError = () => {
        setShowError(false);
        navigate('/welcome');
    };

    const handleCloseComponent = () => {
        setShowComponent(false);
    };

    const components: { [key: string]: ReactElement } = {
        'Add Manager': <AddManager />,
        'Add Employee': <AddAdmin />,
        'Update Employee': <UpdateAdmin />,
        'Assign Manager': <UpdateManager />,
        'Delete Employee': <DeleteEmployee />
    };

    return (
        <>
            <Modal show={showError} onHide={handleCloseError}>
                <Modal.Header closeButton>
                    <Modal.Title>Access Denied</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {error}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseError}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {!showError && (
                <>
                    <DropdownButton id="dropdown-basic-button" title={selectedComponent ? selectedComponent : "Choose an Option"}>
                        {Object.keys(components).map((key) => (
                            <Dropdown.Item key={key} onClick={() => { 
                                const role = localStorage.getItem('role');
                                if (role !== 'ADMIN') {
                                    setError('You do not have access to this page.');
                                    setShowError(true);
                                } else {
                                    setSelectedComponent(key); 
                                    setShowComponent(true);
                                }
                            }}>
                                {key}
                            </Dropdown.Item>
                        ))}
                    </DropdownButton>
                    <Modal show={showComponent} onHide={handleCloseComponent}>
                        <Modal.Header closeButton>
                            <Modal.Title>{selectedComponent}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {selectedComponent && components[selectedComponent]}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseComponent}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <h3>Please see list of all Employees below:</h3>      
                    <EmployeeList />
                </>
            )}
        </>
    );
};