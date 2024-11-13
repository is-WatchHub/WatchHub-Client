import './App.css';
import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Profile from './pages/Profile';
import Header from "./modules/Header";
import Sidebar from "./components/Sidebar";
import Preloader from "./components/Preloader";
import AuthModal from "./modules/auth/AuthModal";
import Movie from "./pages/Movie";

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        const savedAuthStatus = localStorage.getItem('isAuthenticated');
        return savedAuthStatus === 'true';
    });
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [showAuthModal, setShowAuthModal] = useState(false);

    useEffect(() => {
        window.onerror = function (message, source, lineno, colno, error) {
            console.error(`Error occurred: ${message} at ${source}:${lineno}:${colno}`);
            alert('Произошла ошибка. Попробуйте перезагрузить страницу.');
            return true;
        };

        window.addEventListener('unhandledrejection', function (event) {
            console.error(`Unhandled promise rejection: ${event.reason}`);
            alert('Произошла ошибка при обработке запроса.');
        });

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const handleAuthChange = (status) => {
        setIsAuthenticated(status);
        setShowAuthModal(false);
        localStorage.setItem('isAuthenticated', status);
    };

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleShowAuthModal = () => {
        setShowAuthModal(true);
    }

    return (
        <Router>
            {loading ? (
                <Preloader />
            ) : (
                <div>
                    <Header
                        isAuthenticated={isAuthenticated}
                        onAuthChange={handleAuthChange}
                        onShowAuthModal={handleShowAuthModal}
                        onSidebarToggle={handleSidebarToggle}
                    />
                    <Sidebar isOpen={isSidebarOpen} isAuthenticated={isAuthenticated} />
                    <div className={`content ${isSidebarOpen ? 'shifted' : ''}`}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/movies" element={<Movies />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/movie/:id" element={<Movie />} />
                        </Routes>
                    </div>
                    <AuthModal
                        show={showAuthModal}
                        onHide={() => setShowAuthModal(false)}
                        onAuthSuccess={() => handleAuthChange(true)}
                    />
                </div>
            )}
        </Router>
    );
}

export default App;
