import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/movie/${movie.id}`);
    };

    return (
        <Card
            style={{
                width: '18rem',
                margin: '1rem',
                backgroundColor: 'black',
                color: 'white',
                cursor: 'pointer'
            }}
            onClick={handleClick}
        >
            <Card.Img variant="top" src={movie.coverImageUrl} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                    Жанр: {movie.genre}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default MovieCard;
