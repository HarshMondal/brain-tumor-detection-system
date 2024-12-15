import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar'; 
import { useNavigate,useLocation } from 'react-router-dom';
import './Homepage.css'

function HomePage() {
    const navigate = useNavigate();
    const location = useLocation();
    const [file, setFile] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [prediction, setPrediction] = useState('');
    const user = JSON.parse(localStorage.getItem('user'));

    const handleImageChange = (e) => {
        setFile(e.target.files[0]);
        setImageUrl(URL.createObjectURL(e.target.files[0]));
    };

    useEffect(() => {
        console.log('Received state from login:', location.state);
    },[location, navigate]);
    const handlePredict = async () => {
        if (!file) {
            alert('Please upload an image first.');
            return;
        }
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await axios.post('http://localhost:5000/predict', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setPrediction(response.data.result);
        } catch (error) {
            console.error('Error during prediction:', error);
            setPrediction('Failed to predict. Try again.');
        }
    };

    const handleCreateReport = () => {
        navigate('/report', { state: { user: location.state.userData, prediction, imageUrl } });
    };

    

    return (
        <div>
            <Navbar />
            <div className="container mt-5">
                <h1 className="text-center mt-5 display-4">Brain Tumor Detector</h1>
    <div className="card text-center">
        <div className="card-body">
            <h5 className="card-title">Upload and Predict</h5>
            <input type="file" className="form-control-file mb-2" accept="image/*" onChange={handleImageChange} />
            <button className="btn btn-primary" onClick={handlePredict}>Predict</button>
        </div>
    </div>
    {imageUrl && (
        <div className="card">
            <h5 className="card-header">Uploaded Image</h5>
            <div className="card-body">
                <img src={imageUrl} alt="Uploaded" className="img-fluid" />
            </div>
        </div>
    )}
    {prediction && (
        <>
            <div className="card">
                <h5 className="card-header">Prediction Result</h5>
                <div className="card-body">
                    <p className="card-text">{prediction}</p>
                </div>
            </div>
            <button className="btn btn-secondary"onClick={handleCreateReport}>Create Report</button>
        </>
    )}
</div>

        </div>
    );
}

export default HomePage;
