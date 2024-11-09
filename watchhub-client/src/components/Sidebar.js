import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../ui/sidebar.css"

const Sidebar = ({ isOpen, isAuthenticated }) => {
    return (
        <div
            className="sidebar"
            style={{
                height: isOpen ? 'auto' : '0',
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
                visibility: isOpen ? 'visible' : 'hidden',
                transition: 'height 0.6s ease, opacity 0.6s ease, transform 0.6s ease',
            }}
        >
            <Nav justify variant="tabs" className="flex-row">
                <Nav.Item>
                    <Link to="/" className="custom-nav-link nav-link">Главная</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/movies" className="custom-nav-link nav-link">Фильмы</Link>
                </Nav.Item>
                {isAuthenticated && (
                    <Nav.Item>
                        <Link to="/profile" className="custom-nav-link nav-link">Профиль пользователя</Link>
                    </Nav.Item>
                )}
            </Nav>
        </div>
    );
};

export default Sidebar;
