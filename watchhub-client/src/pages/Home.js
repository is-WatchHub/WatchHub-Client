import React from 'react';
import "../ui/background.css"
import Description from "../components/Description";
import MovieGrid from "../ui/Gallery";
import CustomCarousel from "../ui/CustomCarousel";

const Home = () => {
    return (
        <div className="background">
            <Description></Description>

            <MovieGrid></MovieGrid>

            <CustomCarousel></CustomCarousel>
        </div>
    );
}

export default Home;