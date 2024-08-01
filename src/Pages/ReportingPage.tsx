import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import AverageRatingReport from "../Components/Reporting/AverageRatingReport";
import LowRatingEmployees from "../Components/Reporting/LowRatingReport";

import './ReportingPage.css';

export function ReportingPage() {
    const [activeReport, setActiveReport] = useState<string>("average"); 
    const [show, setShow] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const role = localStorage.getItem('role');
        if (role !== 'ADMIN') {
            setError('You do not have access to this page.');
            setShow(true); // Show the modal
        }
    }, []);

    const handleClose = () => {
        setShow(false);
        navigate('/welcome');
    };

    const handleReportChange = (reportType: string) => {
        setActiveReport(reportType);
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Access Denied</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {error}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {!show && (
                <div className="reporting-container">
                    <div className="reporting-links">
                        <button onClick={() => handleReportChange("average")}>Average Ratings</button>
                        <button onClick={() => handleReportChange("low")}>Low Rated Employees</button>
                    </div>
                    <div className="reporting-section">
                        {activeReport === "average" && <AverageRatingReport />}
                        {activeReport === "low" && <LowRatingEmployees />}
                    </div>
                </div>
            )}
        </>
    );
};