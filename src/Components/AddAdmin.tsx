import { useState } from "react";
import { addAdminAPI, updateAdminAPI } from "../Services/AdminAPIService";
import { Roles } from "../Models/Roles";
import { Modal, Button } from 'react-bootstrap';

function AddAdmin() {
    const [show, setShow] = useState(false);
    const [employeeID, setEmployeeID] = useState<number>(0);
    const [addName, setName] = useState<string>('');
    const [addPassword, setPassword] = useState<string>('');
    const [addJobTitle, setJobTitle] = useState<string>(''); 
    const [addPhoneNumber, setPhoneNumber] = useState<string>('');
    const [addEmail, setEmail] = useState<string>('');
    const [addAddressLine1, setAddressLine1] = useState<string>('');
    const [addAddressLine2, setAddressLine2] = useState<string>('');
    const [addCity, setCity] = useState<string>('');
    const [addState, setState] = useState<string>('');
    const [addPostalCode , setPostalCode] = useState<number>(0);
    const [addBirthDate, setBirthDate] = useState<Date>(new Date());
    const [addAnniversary, setAnniversary] = useState<Date>(new Date());
    const [addManagerID, setManagerID] = useState<number>(0);
    const [addRole, setRole] = useState<Roles>(Roles.EMPLOYEE);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    async function handleAdd() {
      const addSiteUser: SiteUser = {
          employeeID: employeeID,
          name: addName,
          password: addPassword,
          jobTitle: addJobTitle,
          phoneNumber: addPhoneNumber,
          email: addEmail,
          addressLine1: addAddressLine1,
          addressLine2: addAddressLine2,
          city: addCity,
          state: addState,
          postalCode: addPostalCode,
          birthDate: addBirthDate,
          anniversary: addAnniversary,
          managerID: addManagerID,
          role: addRole
      };
  
      try {
        const response = await addAdminAPI(addSiteUser);
  
        if (response.ok) {
          console.log('Employee added successfully.');
          window.location.reload();
        } else {
          console.error('Error adding employee:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  
  return (
    <>
        <Button variant="primary" onClick={handleShow}>
            Add Employee
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Employee</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                <br></br>
                <label> 
                Employee Name: <input
                  type="text"
                  placeholder="Enter Name"
                  value={addName}
                  onChange={(e) => setName(e.target.value)}
                  style={{ margin: '5px 0' }}
                  />
              </label>
                <br></br>
                <label> 
                Password: <input
                  type="password"
                  placeholder="Enter Password"
                  value={addPassword}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ margin: '5px 0' }}
                  />
              </label>
                <br></br>
                <label> 
                Job Title: <input
                  type="text"
                  placeholder="Enter Job Title"
                  value={addJobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  style={{ margin: '5px 0' }}
                  />
              </label>
                <br></br>
                <label> 
                Phone Number: <input
                  type="text"
                  placeholder="Enter Phone Number"
                  value={addPhoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  style={{ margin: '5px 0' }}
                  />
              </label>
                <br></br>
                <label> 
                Email Address: <input
                  type="email"
                  placeholder="Enter Email"
                  value={addEmail}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ margin: '5px 0' }}
                  />
              </label>
                <br></br>
                <label> 
                Address line 1: <input
                  type="text"
                  placeholder="Enter Address Line 1"
                  value={addAddressLine1}
                  onChange={(e) => setAddressLine1(e.target.value)}
                  style={{ margin: '5px 0' }}
                  />
              </label>
                <br></br>
                <label> 
                Address line 2: <input
                  type="text"
                  placeholder="Enter Address Line 2"
                  value={addAddressLine2}
                  onChange={(e) => setAddressLine2(e.target.value)}
                  style={{ margin: '5px 0' }}
                  />
              </label>
                <br></br>
                <label> 
                City: <input
                  type="text"
                  placeholder="Enter City"
                  value={addCity}
                  onChange={(e) => setCity(e.target.value)}
                  style={{ margin: '5px 0' }}
                  />
              </label>
                <br></br>
                <label> 
                 State: <input
                  type="text"
                  placeholder="Enter State"
                  value={addState}
                  onChange={(e) => setState(e.target.value)}
                  style={{ margin: '5px 0' }}
                  />
              </label>
                <br></br>
                <label> 
                Postal Code: <input
                  type="number"
                  placeholder="Enter Postal Code"
                  value={addPostalCode}
                  onChange={(e) => setPostalCode(parseInt(e.target.value))}
                  style={{ margin: '5px 0' }}
                  />
              </label>
                <br></br>
                <label> 
                Birth Date: <input
                  type="date"
                  placeholder="Enter Birth Date"
                  value={addBirthDate.toISOString().substr(0, 10)}
                  onChange={(e) => setBirthDate(new Date(e.target.value))}
                  style={{ margin: '5px 0' }}
                  />
              </label>
                <br></br>
                <label> 
                Work Anniversary: <input
                  type="date"
                  placeholder="Enter Anniversary"
                  value={addAnniversary.toISOString().substr(0, 10)}
                  onChange={(e) => setAnniversary(new Date(e.target.value))}
                  style={{ margin: '5px 0' }}
                  />
              </label>
                <br></br>
                <label>
                Manager ID: <input
                  type="number"
                  placeholder="Enter Manager ID"
                  value={addManagerID}
                  onChange={(e) => setManagerID(parseInt(e.target.value))}
                  style={{ margin: '5px 0' }}
                  />
              </label>
                <br></br>
                <label>
                  Employee Role:
                  <select
                      value={addRole}
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

  
  export default AddAdmin;