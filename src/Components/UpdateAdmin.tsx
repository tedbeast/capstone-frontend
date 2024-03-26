import { useState } from "react";
import { updateAdminAPI } from "../Services/AdminAPIService";
import { Roles, SiteUser } from "../Models/SiteUser";

function UpdateProduct() {
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
        <div>
          <h1>Update Product</h1>
          <input
            type="number"
            placeholder="Enter Employee ID"
            value={employeeID}
            onChange={(e) => setEmployeeID(parseInt(e.target.value))}
          />
          <input
            type="text"
            placeholder="Enter Name"
            value={updatedName}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={updatedPassword}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Job Title"
            value={updatedJobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Phone Number"
            value={updatedPhoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter Email"
            value={updatedEmail}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Address Line 1"
            value={updatedAddressLine1}
            onChange={(e) => setAddressLine1(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Address Line 2"
            value={updatedAddressLine2}
            onChange={(e) => setAddressLine2(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter City"
            value={updatedCity}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter State"
            value={updatedState}
            onChange={(e) => setState(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter Postal Code"
            value={updatedPostalCode}
            onChange={(e) => setPostalCode(parseInt(e.target.value))}
          />
          <input
            type="date"
            placeholder="Enter Birth Date"
            value={updatedBirthDate.toISOString().substr(0, 10)}
            onChange={(e) => setBirthDate(new Date(e.target.value))}
          />
          <input
            type="date"
            placeholder="Enter Anniversary"
            value={updatedAnniversary.toISOString().substr(0, 10)}
            onChange={(e) => setAnniversary(new Date(e.target.value))}
          />
          <input
            type="number"
            placeholder="Enter Manager ID"
            value={updatedManagerID}
            onChange={(e) => setManagerID(parseInt(e.target.value))}
          />
          <select
            value={updatedRole}
            onChange={(e) => setRole(e.target.value as Roles)}
          >
            <option value={Roles.EMPLOYEE}>{Roles.EMPLOYEE}</option>
            <option value={Roles.MANAGER}>{Roles.MANAGER}</option>
            <option value={Roles.ADMIN}>{Roles.ADMIN}</option>
          </select>
          <button onClick={handleUpdate}>Update</button>
        </div>
      );
  }
  
  export default UpdateProduct;