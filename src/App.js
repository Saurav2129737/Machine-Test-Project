import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login'; // Import the Login component
import Dashboard from './Dashboard'; // Import the Dashboard component

function App() {
    return (
        <Router>
            <Routes>
                {/* Define the route for the Login page */}
                <Route path="/" element={<Login />} />
                
                {/* Define the route for the Dashboard page */}
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
}

export default App;
