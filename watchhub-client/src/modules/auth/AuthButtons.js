import React from 'react';
import AuthButton from "../../components/auth/AuthButton";

const AuthButtons = ({ isAuthenticated, onAuthChange }) => {
    const handleAuthAction = () => {
        const newAuthStatus = !isAuthenticated;
        onAuthChange(newAuthStatus);

        if (newAuthStatus) {
            console.log("Redirecting to sign in...");
        } else {
            console.log("Signing out...");
        }
    };

    return (
        <div>
            <div>
                <AuthButton isAuthenticated={isAuthenticated} onClick={handleAuthAction} />
            </div>
        </div>
    );
};

export default AuthButtons;
