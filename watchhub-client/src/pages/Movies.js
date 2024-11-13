import React, {useEffect, useState} from 'react';
import {Col, Container, Row, Spinner} from "react-bootstrap";
import MovieCard from "../components/MovieCard";


const Movies = ({ isAuthenticated }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchMovies = async () => {
        try {
            const response = await fetch('https://watchhub-jjji.onrender.com/api/movies', {
                method: 'GET',
                headers: {
                    'Accept': '*/*'
                },
            });

            if (!response.ok) {
                throw new Error('Ошибка при получении фильмов');
            }

            const data = await response.json();
            setMovies(data);
        } catch (error) {
            console.error('Ошибка:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '77vh' }}>
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