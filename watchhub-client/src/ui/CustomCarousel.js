import React from 'react';
import {Image} from "react-bootstrap";
import "./carousel.css"

const CustomCarousel = () => {
    return (
        <div className="carousel-container">
            <h2 className="carousel-header">Приятного просмотра!</h2>
                <div className="qr-code-container">
                    <Image src="../WatchHubQR.png" rounded />
            </div>
        </div>
    );
};

export default CustomCarousel;
