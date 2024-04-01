import { useState } from "react";
import { updateAdminAPI } from "../Services/AdminAPIService";
import { Modal, Button } from 'react-bootstrap';
import { PerformanceReview } from "../Models/PerformanceReview";
import { Employee } from "../Models/Employee";
import { Roles } from "../Models/Roles";
import { Leaves } from "../Models/Leaves";

function UpdateAdmin() {
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
    const updatedEmployee: Employee = {
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
          const response = await updateAdminAPI(employeeID, updatedEmployee);

          if (response.ok) {
              console.log('Employee updated successfully.');
              window.location.reload();
          } else {
              console.error('Error updating employee:', response.statusText);
          }
      } catch (error) {
          console.error('Error:', error);
      }
  }
  return (
    <>
        <Button variant="primary" onClick={handleShow}>
            Update Employee
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Update Employee</Modal.Title>
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
                <label>
                Manager ID: <input
                  type="number"
                  placeholder="Enter Manager ID"
                  value={managerID}
                  onChange={(e) => setManagerID(parseInt(e.target.value))}
                  style={{ margin: '5px 0' }}
                  />
              </label>
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
                <Button variant="primary" onClick={handleUpdate}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    </>
);
  }

  
  export default UpdateAdmin;