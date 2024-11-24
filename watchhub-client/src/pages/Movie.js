import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Container, Row, Col, Accordion, Card, Spinner} from 'react-bootstrap';
import ReactPlayer from 'react-player';
import Button from "react-bootstrap/Button";
import "../ui/accordition.css"
import {fetchMovieInfo} from "../components/requests/fetchMovieInfo";
import {fetchMovie} from "../components/requests/fetchMovie";

const Movie = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [movieInfo, setMovieInfo] = useState(null);
    const [loadingMovie, setLoadingMovie] = useState(true);
    const [loadingMovieInfo, setLoadingMovieInfo] = useState(true);

    useEffect(() => {
        const loadMovie = async () => {
            try {
                const data = await fetchMovie(id);
                setMovie(data);
            } catch (error) {
                console.error('Failed to fetch movie:', error);
            } finally {
                setLoadingMovie(false);
            }
        };

        const loadMovieInfo = async () => {
            try {
                const data = await fetchMovieInfo(id);
                setMovieInfo(data);
            } catch (error) {
                console.error('Failed to fetch movie information:', error);
            } finally {
                setLoadingMovieInfo(false);
            }
        };

        loadMovie();
        loadMovieInfo();
    }, [id]);

    if (loadingMovie || loadingMovieInfo) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '77vh' }}>
                <Spinner animation="border" variant="light" />
            </div>
        );
    }

    if (!movie) return <div>Movie data not found.</div>;

    return (
        <Container>
            <Row className="my-4">
                <Col md={4}>
                    <img
                        src={movie.coverImageUrl}
                        alt={movie.title}
                        style={{ width: '100%', borderRadius: '8px' }}
                    />
                </Col>
                <Col md={8}>
                    <h1>{movie.title}</h1>
                    <p><strong>Жанр:</strong> {movie.genre}</p>
                    <p><strong>Описание:</strong> {movie.description}</p>
                    <ReactPlayer url={movie.contentUrl} controls width="100%" />
                    <Accordion defaultActiveKey="0" className="mt-4 custom-accordion">
                        <Card style={{ backgroundColor: 'black' }}>
                            <Accordion.Header>
                                <Button variant="link" style={{ textDecoration: 'none', color: 'white' }}>
                                    Дополнительная Информация
                                </Button>
                            </Accordion.Header>
                            <Accordion.Body style={{ color: 'white' }}>
                                <p><strong>Режисер:</strong> {movieInfo?.director || 'Не указано'}</p>
                                <h4>Рейтинг</h4>
                                <p>Агрегированное значение: {movieInfo?.rating?.aggregatedValue || 'Не доступно'}</p>
                                {movieInfo?.rating?.ratings && movieInfo.rating.ratings.length > 0 ? (
                                    <ul>
                                        {movieInfo.rating.ratings.map((serviceRating, index) => (
                                            <li key={index} style={{ color: 'white' }}>
                                                {serviceRating.service}: {serviceRating.rating}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p style={{ color: 'white' }}>Рейтинги не доступны</p>
                                )}
                                <h4>Актеры</h4>
                                {movieInfo?.actorNames?.length > 0 ? (
                                    <ul>
                                        {movieInfo.actorNames.map((actor, index) => (
                                            <li key={index} style={{ color: 'white' }}>{actor}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p style={{ color: 'white' }}>Актеры не указаны</p>
                                )}
                                <h4>Награды</h4>
                                <p>{movieInfo?.awards || 'Награды не указаны'}</p>
                            </Accordion.Body>
                        </Card>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
};

export default Movie;

