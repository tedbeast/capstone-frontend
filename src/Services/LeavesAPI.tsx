import { json } from "react-router-dom";
import { Leaves } from "../Models/Leaves";


const apiBaseURL = "http://localhost:9004/";            // Base URL for the API

// Fetch all products from the API
export function getAllLeavesAPI() {
  return fetch(apiBaseURL + "leave", {
    method: "GET",
    mode: "cors",                                       // Enable cross-origin requests
  });
}

// Add a new leave via API
export async function postLeaveAPI(leave: Leaves) {
  
  console.log("post API: ", apiBaseURL + "leave");
  const response = await fetch(apiBaseURL + "leave", {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },      // Set request header for JSON data
    body: JSON.stringify(leave),                          // Convert leave object to JSON string
  });
   
  if (!response.ok) {                                   
    console.log("post error: ", response);                // Log server error details (for debugging)  

  try {
  const responseData = await response.json(); 
  console.log("post error resp: ", responseData);
  throw new Error("Failed to add a leave: " + responseData.Error); // Use error message from response
  } catch (error) {
    console.error("Error parsing response:", error);
    throw new Error("!" + error);                         // Rethrow the error to the calling code
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
  console.log("update api: ", `${apiBaseURL}leave/${leave.leaveId}`);
  const response =  await fetch(`${apiBaseURL}leave/${leave.leaveId}`, {
    method: "PUT",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(leave),
  });

  if (!response.ok) {
    console.log("put error: ", response);                     // Log the entire response for debugging

    try {
      const responseData = await response.json(); 
      console.log("put error resp: ", responseData);
      throw new Error("Failed to update leave: " + responseData.Error); // Use error message from response
      } catch (error) {
        console.error("Error parsing response:", error);
        throw new Error("!" + error);                         // Rethrow the error to the calling code
      }
    }
      const responseData = await response.json();
      console.log("put resp: ", responseData);
      return responseData;
    };

