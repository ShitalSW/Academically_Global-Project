import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.jpg';

const Navbar = () => {
    const [role, setRole] = useState(localStorage.getItem('role')); // Get role from localStorage
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();

    // This will update the role whenever it changes in localStorage
    useEffect(() => {
        const storedRole = localStorage.getItem('role');
        setRole(storedRole);
    }, []);

    const Logout = () => {
        localStorage.clear();
        navigate("/SignUp");
    };

    return (
        <div>
            <header className="header">
                <a href='/'>
                    <img className='logo' src={logo} alt="Logo" />
                </a>

                {auth ? (
                    <nav className='navbar'>
                        <a href='/Home'>All Courses</a>
                        <a href='/add'>Add</a>
                        <Link onClick={Logout} to="./SignUp">Logout({JSON.parse(auth).name})</Link>
                    </nav>
                ) : (
                    <nav className='navbar'>
                        <a href="/Home">Home</a>
                        <a href='/About'>About</a>

                        {/* Conditionally render the SignUp link based on the role */}
                        {role !== 'admin' && <Link to="/SignUp">SignUp</Link>}
                        <Link to="/login">Login</Link>
                    </nav>
                )}
            </header>
        </div>
    );
};

export default Navbar;
