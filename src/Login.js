import React, { useState } from 'react';
import axios from 'axios'; // For making API requests
import { useNavigate } from 'react-router-dom'; // For navigation after login

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simple validation check
        if (!userName || !password) {
            alert("Please enter both username and password");
            return;
        }

        try {
            // Make the login request to the backend API
            const response = await axios.post('http://localhost:5000/api/login', { userName, password });

            // Store the token in localStorage if login is successful
            localStorage.setItem('token', response.data.token);
            
            // Redirect to the dashboard
            navigate('/dashboard');
        } catch (error) {
            alert('Invalid login details');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="User Name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" style={{ marginTop: '10px' }}>Login</button>
            </form>
        </div>
    );
};

export default Login;
