import './App.css';
import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Profile from './pages/Profile';
import Header from "./modules/Header";
import Sidebar from "./components/Sidebar";
import Preloader from "./components/Preloader";

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const handleAuthChange = (status) => {
        setIsAuthenticated(status);
    };

    const handleSidebarToggle = () => {
        console.log(`${isSidebarOpen}`);

        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <Router>
            {loading ? (
                <Preloader />
            ) : (
                <div>
                    <Header
                        isAuthenticated={isAuthenticated}
                        onAuthChange={handleAuthChange}
                        onSidebarToggle={handleSidebarToggle}
                    />
                    <Sidebar isOpen={isSidebarOpen} isAuthenticated={isAuthenticated} />
                    <div className={`content ${isSidebarOpen ? 'shifted' : ''}`}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/movies" element={<Movies />} />
                            <Route path="/profile" element={<Profile />} />
                        </Routes>
                    </div>
                </div>
            )}
        </Router>
    );
}

export default App;
