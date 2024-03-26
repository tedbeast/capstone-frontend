import { SiteUser } from "../Models/SiteUser";

const apiBaseURL = "http://localhost:9004/"

export function updateAdminAPI(employeeID: number, data: SiteUser) {
    return fetch(apiBaseURL + `product/${employeeID}`, {
      method: "PUT",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  }