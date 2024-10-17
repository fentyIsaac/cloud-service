import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import QandAPage from './pages/QandAPage';
import UserManagement from './components/UserManagement';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { UserProvider } from './UserContext';
import './App.css';
import './styles/styles.css';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const authenticated = localStorage.getItem('authenticated') === 'true';
        setIsAuthenticated(authenticated);
    }, []);

    return (
        <UserProvider>
            <Router>
                <nav className="navbar navbar-expand-sm navbar-light bg-light p-0">
                    <div className="container-fluid">
                        <Link className="navbar-brand p-1" to="/" style={{ fontSize: '2rem' }}>Cloud Service</Link>
                        <div className="collapse navbar-collapse justify-content=center" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink 
                                        className={({ isActive }) => `nav-link p-1  ${isActive ? 'active-link' : ''}`} 
                                        to="/" 
                                        style={{ fontSize: '2rem', color: 'black' }}>
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink 
                                        className={({ isActive }) => `nav-link  p-1 ${isActive ? 'active-link' : ''}`} 
                                        to="/contact" 
                                        style={{ fontSize: '2rem', color: 'black' }}>
                                        Contact
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink 
                                        className={({ isActive }) => `nav-link p-1 ${isActive ? 'active-link' : ''}`} 
                                        to="/qa" 
                                        style={{ fontSize: '2rem', color: 'black' }}>
                                        Q&A
                                    </NavLink>
                                </li>
                                {isAuthenticated ? (
                                    <li className="nav-item">
                                        <NavLink 
                                            className={({ isActive }) => `nav-link p-1 ${isActive ? 'active-link' : ''}`} 
                                            to="/usermanagement" 
                                            style={{ fontSize: '2rem', color: 'black' }}>
                                            User Management
                                        </NavLink>
                                    </li>
                                ) : (
                                    <>
                                        <li className="nav-item">
                                            <NavLink 
                                                className={({ isActive }) => `nav-link p-1 ${isActive ? 'active-link' : ''}`} 
                                                to="/login" 
                                                style={{ fontSize: '2rem', color: 'black' }}>
                                                Login
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink 
                                                className={({ isActive }) => `nav-link p-1 ${isActive ? 'active-link' : ''}`} 
                                                to="/signup" 
                                                style={{ fontSize: '2rem', color: 'black' }}>
                                                Sign Up
                                            </NavLink>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="container my-4">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/qa" element={<QandAPage />} />
                        <Route path="/usermanagement" element={isAuthenticated ? <UserManagement /> : <Navigate to="/login" />} />
                        <Route path="/login" element={<Login setAuthenticated={setIsAuthenticated} />} />
                        <Route path="/signup" element={<SignUp />} />
                    </Routes>
                </div>

                <footer className="footer text-center p-0" style={{ backgroundColor: 'white', color: 'white', fontSize: '1rem' }}>
                    <div className="container-fluid">
                        <span className="text-muted">© 2024 Cloud Service</span>
                    </div>
                </footer>
            </Router>
        </UserProvider>
    );
};

export default App;
