import React, { useEffect, useState } from "react";
import { PerformanceReview } from "../Models/PerformanceReview";
import { getAllPerformanceByManagerAPI } from "../services/GoalsAPIService";
import { Manager } from "../Models/Manager";
import { PerformanceReviewEntry } from "./SinglePerformanceByManager";

export function PerformanceReviewList(props: { managerIdProp: number }) {
  const [allPerformance, setAllPerformance] = useState<PerformanceReview[]>([]);

  useEffect(() => {
    getAllPerformanceByManagerAPI(props.managerIdProp)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setAllPerformance(json);
      });
  }, []);

  function logAllPerformance() {
    //call the function to get all performance reviews
    getAllPerformanceByManagerAPI(props.managerIdProp)
      //when promise returns, define what is the response
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setAllPerformance(json);
      });
  }

  return (
    <>
      <p>
        <button onClick={logAllPerformance}>Show List</button>
      </p>
      {allPerformance.map((performanceReview) => {
        return (
          <PerformanceReviewEntry
            key={performanceReview.performanceReviewID}
            data={performanceReview}
          ></PerformanceReviewEntry>
        );
      })}
    </>
  );
}
