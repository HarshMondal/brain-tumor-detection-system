import React, { useState } from 'react';
import Navbar from './Navbar';
import './Report.css'; // Ensure your CSS handles print media correctly
import { useLocation } from 'react-router-dom';

const Report = () => {
    const location = useLocation();
    const { user, prediction, imageUrl } = location.state;
    const [isPrinting, setIsPrinting] = useState(false);

    const handlePrint = () => {
        setIsPrinting(true); // Set the printing state to true to hide navbar
        window.print(); // Triggers the browser's print functionality
        setIsPrinting(false); // Reset the printing state after print dialog closes
    };

    return (
        <div>
            {!isPrinting && <Navbar />} 
            <div className="report-container">
                <header className="report-header">
                    <h1>Medical Diagnosis Report</h1>
                    <div className="report-date">
                        <strong>Date:</strong> {new Date().toLocaleDateString()}
                    </div>
                </header>
                <section className="report-content">
                    <h2>Patient Information:</h2>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Age:</strong> {user.age}</p>
                    <p><strong>Gender:</strong> {user.gender}</p>
                    <p><strong>Blood Type:</strong> {user.bloodType}</p>
                    <p><strong>Address:</strong> {user.address}</p>
                    <p><strong>Nationality:</strong> {user.nationality}</p>
                    <p><strong>Phone Number:</strong> {user.phone}</p>
                    <p><strong>Type of Cancer Predicted:</strong> {prediction}</p>
                    <p><strong>Authorized Doctor:</strong> ___________________</p>
                    <p><strong>Name of Hospital:</strong> ___________________</p>
                    <div className="report-signatures">
                        <div><strong>Signature of Patient:</strong> ___________________</div>
                        <div><strong>Hospital Stamp:</strong> ___________________</div>
                    </div>
                    <img src={imageUrl} alt="Scan" className="report-image"/>
                </section>
                <footer className="report-footer">
                    <p>This is a computer-generated report and does not need a signature.</p>
                </footer>
                <button className="btn btn-primary" onClick={handlePrint}>Print Report</button>
            </div>
        </div>
    );
};

export default Report;
