import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import QandAPage from './pages/QandAPage';
import UserManagement from './components/UserManagement'; // User Management component
import Login from './components/Login';
import SignUp from './components/SignUp';
import OurProcess from './components/OurProcess'; // Import OurProcess component
import { UserProvider } from './UserContext'; // Import UserProvider
import './App.css';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const authenticated = localStorage.getItem('authenticated') === 'true';
        setIsAuthenticated(authenticated);
    }, []);

    return (
        <UserProvider> {/* Wrap the application with UserProvider */}
            <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                    <div className="container">
                        <Link className="navbar-brand" to="/">Cloud Service</Link>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/qa">Q&A</Link>
                                </li>
                                {isAuthenticated ? (
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/usermanagement">User Management</Link>
                                    </li>
                                ) : (
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/login">Login</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/signup">Sign Up</Link>
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

                <footer className="footer text-center mt-auto">
                    <div className="container">
                        <span className="text-muted">© 2024 Cloud Service</span>
                    </div>
                </footer>
            </Router>
        </UserProvider>
    );
};

export default App;
