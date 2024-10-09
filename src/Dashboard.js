import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const userName = localStorage.getItem('token') ? 'Hukum Gupta' : 'Guest';
    const navigate = useNavigate();

    const handleLogout = () => {
        // Remove the token from local storage
        localStorage.removeItem('token');
        // Redirect back to the login page
        navigate('/');
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Welcome to the Admin Panel</h2>
            <p>User: {userName}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;
