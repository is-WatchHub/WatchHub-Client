import React from "react";
import "./gallery.css";
import config from "../config";

const Gallery = () => {
    return (
        <div className="gallery">
            <figure className="gallery__item gallery__item--1">
                <img src={config.images[0]} className="gallery__img" alt="" />
            </figure>
            <figure className="gallery__item gallery__item--2">
                <img src={config.images[1]} className="gallery__img" alt="" />
            </figure>
            <figure className="gallery__item gallery__item--3">
                <img src={config.images[2]} className="gallery__img" alt="" />
            </figure>
            <figure className="gallery__item gallery__item--4">
                <img src={config.images[3]} className="gallery__img" alt="" />
            </figure>
            <figure className="gallery__item gallery__item--5">
                <img src={config.images[4]} className="gallery__img" alt="" />
            </figure>
            <figure className="gallery__item gallery__item--6">
                <img src={config.images[5]} className="gallery__img" alt="" />
            </figure>
        </div>
    );
};

export default Gallery;
