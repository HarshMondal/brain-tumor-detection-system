import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header'; // Ensure this import is correct
import './Register.css'; // Ensure this is properly linked

function RegisterForm() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        bloodType: '',
        gender: '',
        address: '',
        nationality: '',
        age: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user.password !== user.confirmPassword) {
            setError('Passwords do not match!');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/register', user);
            navigate('/'); // Redirect to login on successful registration
        } catch (error) {
            setError('Registration failed: ' + (error.response.data.error || 'Please try again.'));
        }
    };

    return (
        <>
            <Header />
            <div className="register-container">
                <div className="register-card">
                    <form onSubmit={handleSubmit} className="register-form">
                        <h2 className="card-title">Register</h2>
                        {error && <div className="alert alert-danger">{error}</div>}
                        <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Name:</label>
                            <input type="text" className="form-control" name="name" value={user.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="email" className="form-control" name="email" value={user.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Phone Number:</label>
                            <input type="tel" className="form-control" name="phone" value={user.phone} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input type="password" className="form-control" name="password" value={user.password} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Confirm Password:</label>
                            <input type="password" className="form-control" name="confirmPassword" value={user.confirmPassword} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Blood Type:</label>
                            <select className="form-control" name="bloodType" value={user.bloodType} onChange={handleChange} required>
                                <option value="">Select</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Gender:</label>
                            <select className="form-control" name="gender" value={user.gender} onChange={handleChange} required>
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Address:</label>
                            <input type="text" className="form-control" name="address" value={user.address} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Nationality:</label>
                            <select className="form-control" name="nationality" value={user.nationality} onChange={handleChange} required>
                                <option value="">Select Nationality</option>
                                <option value="USA">United States</option>
                                <option value="Canada">Canada</option>
                                <option value="UK">United Kingdom</option>
                                <option value="India">India</option>
                                <option value="Australia">Australia</option>
                                <option value="China">China</option>
                                <option value="Russia">Russia</option>
                                <option value="France">France</option>
                                <option value="Germany">Germany</option>
                                <option value="Italy">Italy</option>
                                <option value="Spain">Spain</option>
                                <option value="Japan">Japan</option>
                                <option value="Mexico">Mexico</option>
                                <option value="Brazil">Brazil</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Colombia">Colombia</option>
                                <option value="Peru">Peru</option>
                                <option value="Venezuela">Venezuela</option>
                                <option value="Chile">Chile</option>
                                <option value="Ecuador">Ecuador</option>
                                <option value="Paraguay">Paraguay</option>
                                <option value="Bolivia">Bolivia</option>
                                <option value="Guyana">Guyana</option>
                                <option value="Suriname">Suriname</option>
                                <option value="Uruguay">Uruguay</option>
                                <option value="French Guiana">French Guiana</option>
                                <option value="Falkland Islands">Falkland Islands</option>
                                <option value="Guadeloupe">Guadeloupe</option>
                                <option value="Martinique">Martinique</option>

                            </select>
                        </div>
                        <div className="form-group">
                            <label>Age:</label>
                            <input type="number" className="form-control" name="age" value={user.age} onChange={handleChange} required />
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg" onClick = {handleSubmit} >Register</button>

                    </form>
                    </form>
                </div>
            </div>
        </>
    );
}

export default RegisterForm;
