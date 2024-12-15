import React from 'react';
import Navbar from './Navbar'; // Assuming you have a Navbar component
import './Contact.css'; // Link to your CSS file for styling

function Contact() {
    return (
        <div>
            <Navbar />
            <div className="container contact-container">
                <h1 className="text-center my-4">Contact Us</h1>
                <div className="row">
                    <div className="col-md-6">
                        <h3>Contact Information</h3>
                        <p><strong>Email:</strong> harsh.mondal@somaiya.edu</p>
                        <p><strong>Phone:</strong> +123 456 7890</p>
                        <p><strong>Address:</strong> 1234 Road St., City, India</p>
                    </div>
                    <div className="col-md-6">
                        <h3>Follow Us</h3>
                        <p>Connect with us on our social media channels:</p>
                        <ul className="social-icons">
                            <li><a href="#" className="social-icon"> <i className="fa fa-facebook"></i></a></li>
                            <li><a href="#" className="social-icon"> <i className="fa fa-twitter"></i></a></li>
                            <li><a href="#" className="social-icon"> <i className="fa fa-instagram"></i></a></li>
                            <li><a href="#" className="social-icon"> <i className="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
