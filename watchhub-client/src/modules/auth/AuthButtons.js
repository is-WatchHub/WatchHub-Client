import React from 'react';
import AuthButton from "../../components/auth/AuthButton";

const AuthButtons = ({ isAuthenticated, onAuthChange, onShowAuthModal }) => {
    const handleAuthAction = () => {
        const newAuthStatus = !isAuthenticated;

        if (newAuthStatus) {
            onShowAuthModal(true);
            console.log("Redirecting to sign in...");
        } else {
            onAuthChange(newAuthStatus);
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
