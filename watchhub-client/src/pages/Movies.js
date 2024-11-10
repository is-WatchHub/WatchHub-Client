import React, {useEffect, useState} from 'react';
import {Col, Container, Row, Spinner} from "react-bootstrap";
import MovieCard from "../components/MovieCard";

const mockMovies = [
    {
        id: 1,
        title: 'Бладшот',
        genre: 'Action',
        coverImageUrl: 'https://m.media-amazon.com/images/M/MV5BNDFjMTI4ZTQtYzNlNS00YmJiLWEyYzYtYWFiYTZjOTI5MDM1XkEyXkFqcGc@._V1_QL75_UY562_CR35,0,380,562_.jpg 380w'
    },
    {
        id: 2,
        title: 'Солнцестояние',
        genre: 'Drama',
        coverImageUrl: 'https://m.media-amazon.com/images/M/MV5BMzQxNzQzOTQwM15BMl5BanBnXkFtZTgwMDQ2NTcwODM@._V1_QL75_UX380_CR0,0,380,562_.jpg 380w'
    },
    {
        id: 3,
        title: 'Человек-паук: Вдали от дома',
        genre: 'Action',
        coverImageUrl: 'https://m.media-amazon.com/images/M/MV5BOWM5YWNhMDUtMzA0OC00MjY5LTk2ODMtNThiOGI3MDVhYWUwXkEyXkFqcGc@._V1_QL75_UY562_CR7,0,380,562_.jpg 380w'
    },
    {
        id: 4,
        title: 'Ирландец',
        genre: 'Crime',
        coverImageUrl: 'https://m.media-amazon.com/images/M/MV5BY2QzNTAwZWMtY2ExMi00MDMyLWI3OTgtMTY2NTY0MDIwYmYxXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg 380w'
    },
    {
        id: 5,
        title: 'Капитан Марвел',
        genre: 'Action',
        coverImageUrl: 'https://m.media-amazon.com/images/M/MV5BZDI1NGU2ODAtNzBiNy00MWY5LWIyMGEtZjUxZjUwZmZiNjBlXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg 380w'
    }
];

const Movies = ({ isAuthenticated }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setMovies(mockMovies);
            setLoading(false);
        }, 2000);
    }, []);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <Spinner animation="border" variant="light" />
            </div>
        );
    }

    return (
        <Container>
            <Row className="justify-content-center">
                {movies.map(movie => (
                    <Col key={movie.id} className="d-flex justify-content-center">
                        <MovieCard movie={movie} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Movies;