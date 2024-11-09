import React from 'react';
import {Image, Carousel} from "react-bootstrap";
import "./carousel.css"
import config from "../config";

const CustomCarousel = () => {
    return (
        <div className="carousel-container">
            <h2 className="carousel-header">Приятного просмотра!</h2>
            <div className="carousel-wrapper">
                <div className="qr-code-container">
                    <Image src="../WatchHubQR.png" rounded />
                </div>
                <div className="carousel-section">
                    <Carousel data-bs-theme="dark">
                        <Carousel.Item>
                            <video
                                className="d-block w-100 carousel-image"
                                src={config.trailers[0]}
                                autoPlay
                                loop
                                muted
                                playsInline
                            ></video>
                        </Carousel.Item>

                        <Carousel.Item>
                            <video
                                className="d-block w-100 carousel-image"
                                src={config.trailers[1]}
                                autoPlay
                                loop
                                muted
                                playsInline
                            ></video>
                        </Carousel.Item>

                        <Carousel.Item>
                            <video
                                className="d-block w-100 carousel-image"
                                src={config.trailers[2]}
                                autoPlay
                                loop
                                muted
                                playsInline
                            ></video>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default CustomCarousel;
