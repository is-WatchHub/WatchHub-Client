import React from 'react';
import AuthButtons from "./auth/AuthButtons";
import "../ui/header.css";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Header = ({ isAuthenticated, onAuthChange, onSidebarToggle }) => {
    return (
        <header className="header">
            <div className="logo-container">
                <Image src="../logo.png" rounded className="custom-logo" />
            </div>

            <div className="title-container">
                <h1 className="title">WatchHub</h1>
            </div>

            <div className="auth-buttons">
                <AuthButtons isAuthenticated={isAuthenticated} onAuthChange={onAuthChange} />
                <Button variant="outline-light" onClick={onSidebarToggle}>
                    Меню
                </Button>
            </div>
        </header>
    );
}

export default Header;
