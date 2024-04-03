import { json } from "react-router-dom";
import { Leaves } from "../Models/Leaves";

const apiBaseURL = "http://localhost:9004/"; // Base URL for the API

// Fetch all products from the API
export function getAllLeaveAPI() {
  return fetch(apiBaseURL + "leave", {
    method: "GET",
    mode: "cors", // Enable cross-origin requests
  });
}

// Add a new leave via API
// http://localhost:8080/employee/2/leave
export async function postLeaveAPI(leave: Leaves, employeeID: number) {
  console.log("post API: ", apiBaseURL + "leave");
  //const response = await fetch(apiBaseURL + `employee/${employeeID}/leave`, {
    const response = await fetch(apiBaseURL + "leave", {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" }, // Set request header for JSON data
    body: JSON.stringify(leave), // Convert leave object to JSON string
  });

  if (!response.ok) {
    console.log("post error: ", response); // Log server error details (for debugging)

    try {
      const responseData = await response.json();
      console.log("post error resp: ", responseData);
      throw new Error("Failed to add a leave: " + responseData.Error); // Use error message from response
    } catch (error) {
      console.error("Error parsing response:", error);
      throw new Error("!" + error); // Rethrow the error to the calling code
    }
  }
  const responseData = await response.json();
  console.log("post resp: ", responseData);
  return responseData;
}

// Delete a leave via API
export const deleteLeaveAPI = async (leaveId: any) => {
  return await fetch(`${apiBaseURL}leave/${leaveId}`, {
    method: "DELETE",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
  });
};

// Update an existing leave via API
export const updateLeaveAPI = async (leave: Leaves) => {
  console.log("update api: ", `${apiBaseURL}leave/${leave.Id}`);
  const response = await fetch(`${apiBaseURL}leave/${leave.Id}`, {
    method: "PUT",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(leave),
  });

  if (!response.ok) {
    console.log("put error: ", response); // Log the entire response for debugging

    try {
      const responseData = await response.json();
      console.log("put error resp: ", responseData);
      throw new Error("Failed to update leave: " + responseData.Error); // Use error message from response
    } catch (error) {
      console.error("Error parsing response:", error);
      throw new Error("!" + error); // Rethrow the error to the calling code
    }
  }
  const responseData = await response.json();
  console.log("put resp: ", responseData);
  return responseData;
};

export const getAllLeavesByEmployeeId = async (employeeId: number) => {
  try {
    const response = await fetch(`${apiBaseURL}employee/${employeeId}/leave`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const leaves: Leaves[] = await response.json();

    // Assuming each leave record has startDate and endDate properties
    return leaves.map((leave) => {
      return {
        ...leave,
        // Parse the ISO date strings to Date objects or formatted strings
        startDate: leave.startDate ? new Date(leave.startDate) : null,
        endDate: leave.endDate ? new Date(leave.endDate) : null,
      };
    });
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw new Error(`Unable to retrieve leaves: ${error}`);
  }
};

export const acceptLeave = async (leaveId: number) => {
  try {
    const response = await fetch(`${apiBaseURL}leave/${leaveId}/accept`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        // Include other headers as needed, like authorization tokens
      },
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error accepting leave:", error);
    throw error;
  }
};

// Function to reject a leave
export const rejectLeave = async (leaveId: number) => {
  try {
    const response = await fetch(`${apiBaseURL}leave/${leaveId}/reject`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error rejecting leave:", error);
    throw error;
  }
};

export const getAllLeavesByManagerId = async (employeeId: number) => {
  try {
    const response = await fetch(`${apiBaseURL}manager/${employeeId}/leaves`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const leaves: Leaves[] = await response.json();

    // Assuming each leave record has startDate and endDate properties
    return leaves.map((leave) => {
      return {
        ...leave,
        startDate: leave.startDate ? new Date(leave.startDate) : null,
        endDate: leave.endDate ? new Date(leave.endDate) : null,
      };
    });
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw new Error(`Unable to retrieve leaves: ${error}`);
  }
};
