import React, {useState} from 'react';
import {Alert, Card} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        const savedAuthStatus = localStorage.getItem('isAuthenticated');

        if (savedAuthStatus === 'true') {
            navigate(`/movie/${movie.id}`);
        } else {
            setShowAlert(true);
        }
    };

    const handleCloseAlert = () => setShowAlert(false);

    return (
        <div>
            {showAlert && (
                <Alert
                    variant="warning"
                    onClose={handleCloseAlert}
                    dismissible
                    style={{
                        position: 'fixed',
                        top: '20px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 1050,
                        width: '80%',
                        maxWidth: '500px'
                    }}
                >
                    <Alert.Heading>Для просмотра необходимо авторизоваться</Alert.Heading>
                    <p>
                        Пожалуйста, войдите в систему, чтобы просматривать фильмы.
                    </p>
                </Alert>
            )}

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
        </div>
    );
};

export default MovieCard;
