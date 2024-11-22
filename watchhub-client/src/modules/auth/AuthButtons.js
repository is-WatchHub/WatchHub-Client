import React from 'react';
import AuthButton from "../../components/auth/AuthButton";
import {fetchLogout} from "../../components/requests/fetchLogout";

const AuthButtons = ({ isAuthenticated, onAuthChange, onShowAuthModal }) => {
    const handleAuthAction = async () => {
        const newAuthStatus = !isAuthenticated;

        if (newAuthStatus) {
            onShowAuthModal(true);
            console.log("Redirecting to sign in...");
        } else {
            onAuthChange(newAuthStatus);
            localStorage.setItem('username', null);
            await fetchLogout();
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
