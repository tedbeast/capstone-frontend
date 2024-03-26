import { useState } from "react";
import { updateAdminAPI } from "../Services/AdminAPIService";
import { Roles, SiteUser } from "../Models/SiteUser";
import { Modal, Button } from 'react-bootstrap';

function UpdateAdmin() {
    const [show, setShow] = useState(false);
    const [employeeID, setEmployeeID] = useState<number>(0);
    const [updatedName, setName] = useState<string>('');
    const [updatedPassword, setPassword] = useState<string>('');
    const [updatedJobTitle, setJobTitle] = useState<string>(''); 
    const [updatedPhoneNumber, setPhoneNumber] = useState<string>('');
    const [updatedEmail, setEmail] = useState<string>('');
    const [updatedAddressLine1, setAddressLine1] = useState<string>('');
    const [updatedAddressLine2, setAddressLine2] = useState<string>('');
    const [updatedCity, setCity] = useState<string>('');
    const [updatedState, setState] = useState<string>('');
    const [updatedPostalCode , setPostalCode] = useState<number>(0);
    const [updatedBirthDate, setBirthDate] = useState<Date>(new Date());
    const [updatedAnniversary, setAnniversary] = useState<Date>(new Date());
    const [updatedManagerID, setManagerID] = useState<number>(0);
    const [updatedRole, setRole] = useState<Roles>(Roles.EMPLOYEE);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
        
       
    async function handleUpdate() {
      const updatedSiteUser: SiteUser = {
          employeeID: employeeID,
          name: updatedName,
          password: updatedPassword,
          jobTitle: updatedJobTitle,
          phoneNumber: updatedPhoneNumber,
          email: updatedEmail,
          addressLine1: updatedAddressLine1,
          addressLine2: updatedAddressLine2,
          city: updatedCity,
          state: updatedState,
          postalCode: updatedPostalCode,
          birthDate: updatedBirthDate,
          anniversary: updatedAnniversary,
          managerID: updatedManagerID,
          role: updatedRole
      };
  
      try {
        const response = await updateAdminAPI(employeeID, updatedSiteUser);
  
        if (response.ok) {
          console.log('Product updated successfully.');
          window.location.reload();
        } else {
          console.error('Error updating product:', response.statusText);
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
                  value={updatedName}
                  onChange={(e) => setName(e.target.value)}
                  style={{ margin: '5px 0' }}
                  />
              </label>
                <br></br>
                <label> 
                Password: <input
                  type="password"
                  placeholder="Enter Password"
                  value={updatedPassword}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ margin: '5px 0' }}
                  />
              </label>
                <br></br>
                <label> 
                Job Title: <input
                  type="text"
                  placeholder="Enter Job Title"
                  value={updatedJobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  style={{ margin: '5px 0' }}
                  />
              </label>
                <br></br>
                <label> 
                Phone Number: <input
                  type="text"
                  placeholder="Enter Phone Number"
                  value={updatedPhoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  style={{ margin: '5px 0' }}
                  />
              </label>
                <br></br>
                <label> 
                Email Address: <input
                  type="email"
                  placeholder="Enter Email"
                  value={updatedEmail}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ margin: '5px 0' }}
                  />
              </label>
                <br></br>
                <label> 
                Address line 1: <input
                  type="text"
                  placeholder="Enter Address Line 1"
                  value={updatedAddressLine1}
                  onChange={(e) => setAddressLine1(e.target.value)}
                  style={{ margin: '5px 0' }}
                  />
              </label>
                <br></br>
                <label> 
                Address line 2: <input
                  type="text"
                  placeholder="Enter Address Line 2"
                  value={updatedAddressLine2}
                  onChange={(e) => setAddressLine2(e.target.value)}
                  style={{ margin: '5px 0' }}
                  />
              </label>
                <br></br>
                <label> 
                City: <input
                  type="text"
                  placeholder="Enter City"
                  value={updatedCity}
                  onChange={(e) => setCity(e.target.value)}
                  style={{ margin: '5px 0' }}
                  />
              </label>
                <br></br>
                <label> 
                 State: <input
                  type="text"
                  placeholder="Enter State"
                  value={updatedState}
                  onChange={(e) => setState(e.target.value)}
                  style={{ margin: '5px 0' }}
                  />
              </label>
                <br></br>
                <label> 
                Postal Code: <input
                  type="number"
                  placeholder="Enter Postal Code"
                  value={updatedPostalCode}
                  onChange={(e) => setPostalCode(parseInt(e.target.value))}
                  style={{ margin: '5px 0' }}
                  />
              </label>
                <br></br>
                <label> 
                Birth Date: <input
                  type="date"
                  placeholder="Enter Birth Date"
                  value={updatedBirthDate.toISOString().substr(0, 10)}
                  onChange={(e) => setBirthDate(new Date(e.target.value))}
                  style={{ margin: '5px 0' }}
                  />
              </label>
                <br></br>
                <label> 
                Work Anniversary: <input
                  type="date"
                  placeholder="Enter Anniversary"
                  value={updatedAnniversary.toISOString().substr(0, 10)}
                  onChange={(e) => setAnniversary(new Date(e.target.value))}
                  style={{ margin: '5px 0' }}
                  />
              </label>
                <br></br>
                <label>
                Manager ID: <input
                  type="number"
                  placeholder="Enter Manager ID"
                  value={updatedManagerID}
                  onChange={(e) => setManagerID(parseInt(e.target.value))}
                  style={{ margin: '5px 0' }}
                  />
              </label>
                <br></br>
                <label>
                  Employee Role:
                  <select
                      value={updatedRole}
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