import { useState } from "react";
import { assignManagerID, updateAdminAPI } from "../Services/AdminAPIService";
import { Modal, Button } from 'react-bootstrap';
import { PerformanceReview } from "../Models/PerformanceReview";
import { Employee } from "../Models/Employee";
import { Roles } from "../Models/Roles";
import { Leaves } from "../Models/Leaves";

function UpdateManager() {
  const [show, setShow] = useState(false);
  const [employeeID, setEmployeeID] = useState<number>(0);
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [jobTitle, setJobTitle] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [addressLine1, setAddressLine1] = useState<string>('');
  const [addressLine2, setAddressLine2] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [postalCode, setPostalCode] = useState<string>('');
  const [birthDate, setBirthDate] = useState<Date>(new Date());
  const [anniversary, setAnniversary] = useState<Date>(new Date());
  const [managerID, setManagerID] = useState<number>(0);
  const [performanceReview, setPerformanceReview] = useState<PerformanceReview[]>([]);
  const [leaves, setLeave] = useState<Leaves[]>([]);
  const [role, setRole] = useState<Roles>(Roles.EMPLOYEE);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleUpdate() {
    const updatedManager: Employee = {
      employeeID,
      password,
      name,
      jobTitle,
      phoneNumber,
      email,
      addressLine1,
      addressLine2,
      city,
      state,
      postalCode,
      birthDate,
      anniversary,
      manager: { managerID, employees: [] },
      performanceReview,
      leaves,
      role
    };

      try {
          const response = await assignManagerID(employeeID, updatedManager);

          if (response.ok) {
              console.log('Manager updated successfully.');
              window.location.reload();
          } else {
              console.error('Error updating manager:', response.statusText);
          }
      } catch (error) {
          console.error('Error:', error);
      }
  }
  return (
    <>
        <Button variant="primary" onClick={handleShow}>
            Update Manager
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Update Manager</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <label>  
                Enter Employee ID to be Updated: <input
                    type="number"
                    placeholder="Enter Employee ID"
                    value={employeeID}
                    onChange={(e) => setEmployeeID(parseInt(e.target.value))}
                    style={{ margin: '5px 0' }}
                    />
                </label>
                <br></br>
                
                
                <label>
                Manager ID: <input
                  type="number"
                  placeholder="Enter Manager ID"
                  //value={managerID}
                  onChange={(e) => setManagerID(parseInt(e.target.value))}
                  style={{ margin: '5px 0' }}
                  />
              </label>
                
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleUpdate}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    </>
);
  }

  
  export default UpdateManager;