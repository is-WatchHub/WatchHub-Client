import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const AuthButton = ({ isAuthenticated, onClick }) => {
    return (
        <Button
            variant={isAuthenticated ? "outline-danger" : "outline-success"}
            onClick={onClick}
            size="lg"
        >
            {isAuthenticated ? "Выйти" : "Войти"}
        </Button>
    );
};

export default AuthButton;
