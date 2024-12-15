import React from 'react';
import { useNavigate } from 'react-router-dom';

const FirstPage = () => {
    const navigate = useNavigate();

    const handleNavigation = (role) => {
        // Store the selected role in localStorage
        localStorage.setItem('role', role);

        if (role === "admin") {
            navigate("/Login");
        } else if (role === "user") {
            navigate("/SignUp");
        }
    };

    return (
        <div className="firstpage">
            <h1>SELECT YOUR ROLE FIRST</h1>
            <button
                onClick={() => handleNavigation("admin")}
                className="btn-home"
                type="button"
            >
                <h3>ADMIN</h3>
            </button>
            <button
                onClick={() => handleNavigation("user")}
                className="btn-home"
                type="button"
            >
                <h3>USER</h3>
            </button>
        </div>
    );
};

export default FirstPage;
