import React from 'react';
import { Spinner } from 'react-bootstrap';
import '../ui/preloader.css';

function Preloader() {
    return (
        <div className="preloader">
            <Spinner animation="border" variant="primary" />
        </div>
    );
}

export default Preloader;