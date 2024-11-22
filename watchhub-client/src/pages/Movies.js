import React, {useEffect, useState} from 'react';
import {Alert, Col, Container, Row, Spinner} from "react-bootstrap";
import MovieCard from "../components/MovieCard";
import {fetchMovies} from "../components/requests/fetchMovies";


const Movies = ({ isAuthenticated }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const data = await fetchMovies();
                setMovies(data);
            } catch (error) {
                console.error('Ошибка:', error);
                setError('Не удалось загрузить список фильмов. Попробуйте позже.');
            } finally {
                setLoading(false);
            }
        };

        getMovies();
    }, []);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '77vh' }}>
                <Spinner animation="border" variant="light" />
            </div>
        );
    }

    if (error) {
        return (
            <Container className="d-flex justify-content-center align-items-center" style={{ height: '77vh' }}>
                <Alert variant="danger" className="text-center">
                    {error}
                </Alert>
            </Container>
        );
    }

    if (movies.length === 0) {
        return (
            <Container className="d-flex justify-content-center align-items-center" style={{ height: '77vh' }}>
                <Alert variant="warning" className="text-center">
                    Фильмы не найдены.
                </Alert>
            </Container>
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