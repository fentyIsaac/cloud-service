import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import QandAPage from './pages/QandAPage';
import UserManagement from './components/UserManagement';// User Management component
import Login from './components/Login';
import SignUp from './components/SignUp';
import './App.css';

const App = () => {
    
    //useState varible tells the program we are not authenticated therefore cannot access the userManagement page.
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    //useEffect Hook. Tells the program in the event localStorage.getItem is authenticated AND strictly true. Then we setIsAuthenticated(authenticated). Now the local storage is authenticated. 
    useEffect(() => {
        const authenticated = localStorage.getItem('authenticated') === 'true';
        setIsAuthenticated(authenticated);
    }, []);

    return (
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
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/usermanagement">User Management</Link>
                                    </li>
                                </>
                            ) : (

                                //Here is an example of HTML code being used with react imports and fragments. 
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
                    <Route path="/usermanagement" element={<UserManagement />} />
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
    );
};

export default App;
