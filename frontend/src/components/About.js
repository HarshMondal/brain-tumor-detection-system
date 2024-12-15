import React from 'react';
import Navbar from './Navbar'; // Assuming you have a Navbar component
import './About.css'; // Link to your CSS file for styling

function About() {
    return (
        <div>
            <Navbar />
            <div className="about-container">
                <h1>About the Project</h1>
                <p className="intro">
                    Welcome to the Brain Tumor Detection Project. This platform was developed by Harsh Mondal, a third-year BSc CS student at SK Somaiya Somaiya College. At 21 years old, I have embarked on a mission to harness the capabilities of artificial intelligence to tackle one of the most pressing medical challenges — brain tumor detection.
                </p>
                <p className="details">
                    This system allows users to upload images, which are then processed to detect the presence of brain tumors. Utilizing a robust model hosted on a Flask backend, the application analyzes the uploaded images to determine whether they indicate the presence of cancerous formations and, if so, identifies the type of tumor. All user data and diagnostic results are securely stored in a Firebase database, ensuring that the system is not only effective but also secure and user-friendly.
                </p>
            </div>
        </div>
    );
}

export default About;
