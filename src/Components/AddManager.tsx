import { useState } from "react";
import {  addManagerAPI } from "../Services/AdminAPIService";
import { Roles } from "../Models/Roles";
import { Modal, Button } from 'react-bootstrap';
import { Employee } from "../Models/Employee";
import { PerformanceReview } from "../Models/PerformanceReview";
import { Leaves } from "../Models/Leaves";

function AddManager() {
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
  const [managerID, setManagerID] = useState<number | null>(null); // Set managerID
  const [performanceReview, setPerformanceReview] = useState<PerformanceReview[]>([]);
  const [leaves, setLeaves] = useState<Leaves[]>([]);
  const [role, setRole] = useState<Roles>(Roles.EMPLOYEE);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleAdd() {
    const addSiteUser: Employee = {
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
      const response = await addManagerAPI(addSiteUser);

      if (response.ok) {
        console.log('Employee added successfully.');
        window.location.reload();
      } else {
        console.error('Error adding employee:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  }
  
  return (
    <>
        <Button variant="primary" onClick={handleShow}>
            Add Manager
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Manager</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                <br></br>
                <label> 
                Employee Name: <input
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ margin: '5px 0' }}
                  />
              </label>
                <br></br>
                <label> 
                Password: <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ margin: '5px 0' }}
                  />
              </label>
                <br></br>
                <label> 
                Job Title: <input
                  type="text"
                  placeholder="Enter Job Title"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  style={{ margin: '5px 0' }}
                  />
              </label>
                <br></br>
                <label> 
                Phone Number: <input
                  type="text"
                  placeholder="Enter Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  style={{ margin: '5px 0' }}
                  />
              </label>
                <br></br>
                <label> 
                Email Address: <input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ margin: '5px 0' }}
                  />
              </label>
                <br></br>
                <label> 
                Address line 1: <input
                  type="text"
                  placeholder="Enter Address Line 1"
                  value={addressLine1}
                  onChange={(e) => setAddressLine1(e.target.value)}
                  style={{ margin: '5px 0' }}
                  />
              </label>
                <br></br>
                <label> 
                Address line 2: <input
                  type="text"
                  placeholder="Enter Address Line 2"
                  value={addressLine2}
                  onChange={(e) => setAddressLine2(e.target.value)}
                  style={{ margin: '5px 0' }}
                  />
              </label>
                <br></br>
                <label> 
                City: <input
                  type="text"
                  placeholder="Enter City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  style={{ margin: '5px 0' }}
                  />
              </label>
                <br></br>
                <label> 
                 State: <input
                  type="text"
                  placeholder="Enter State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  style={{ margin: '5px 0' }}
                  />
              </label>
                <br></br>
                <label> 
                Postal Code: <input
                  type="number"
                  placeholder="Enter Postal Code"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  style={{ margin: '5px 0' }}
                  />
              </label>
                <br></br>
                <label> 
                Birth Date: <input
                  type="date"
                  placeholder="Enter Birth Date"
                  value={birthDate.toISOString().substr(0, 10)}
                  onChange={(e) => setBirthDate(new Date(e.target.value))}
                  style={{ margin: '5px 0' }}
                  />
              </label>
                <br></br>
                <label> 
                Work Anniversary: <input
                  type="date"
                  placeholder="Enter Anniversary"
                  value={anniversary.toISOString().substr(0, 10)}
                  onChange={(e) => setAnniversary(new Date(e.target.value))}
                  style={{ margin: '5px 0' }}
                  />
              </label>
                <br></br>
                                <br></br>
                <label>
                  Employee Role:
                  <select
                      value={role}
                      onChange={(e) => setRole(e.target.value as Roles)}
                      style={{ margin: '5px 0' }}
                  >
                      <option value={Roles.EMPLOYEE}>{Roles.EMPLOYEE}</option>
                      <option value={Roles.MANAGER}>{Roles.MANAGER}</option>
                      <option value={Roles.ADMIN}>{Roles.ADMIN}</option>
                  </select>
              </label>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleAdd}>
                    Add User
                </Button>
            </Modal.Footer>
        </Modal>
    </>
);
  }

  
  export default AddManager;