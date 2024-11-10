import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Container, Row, Col, Accordion, Card, Spinner} from 'react-bootstrap';
import ReactPlayer from 'react-player';
import Button from "react-bootstrap/Button";
import "../ui/accordition.css"

const mockFullResponseMovieDto = {
    id: '1',
    title: 'Бладшот',
    description: 'This is a mock description of the movie. It provides a brief overview of the storyline.',
    genre: 'Drama',
    contentUrl: 'https://www.youtube.com/watch?v=DK5rpTF683A',
    coverImageUrl: 'https://m.media-amazon.com/images/M/MV5BNDFjMTI4ZTQtYzNlNS00YmJiLWEyYzYtYWFiYTZjOTI5MDM1XkEyXkFqcGc@._V1_QL75_UY562_CR35,0,380,562_.jpg 380w',
};

const mockMovieInformationDto = {
    director: 'Mock Director',
    rating: {
        aggregatedValue: 4.5,
        ratings: [
            { service: 'IMDB', rating: 4.6 },
            { service: 'Rotten Tomatoes', rating: 4.4 },
        ],
    },
    actorNames: ['Actor One', 'Actor Two', 'Actor Three'],
    awardTitles: ['Best Picture 2022', 'Audience Choice Award'],
};

const Movie = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [movieInfo, setMovieInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMockData = () => {
            setTimeout(() => {
                setMovie(mockFullResponseMovieDto);
                setMovieInfo(mockMovieInformationDto);
                setLoading(false);
            }, 1000);
        };

        fetchMockData();
    }, [id]);

    if (loading) return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Spinner animation="border" variant="light" />
        </div>
    );
    if (!movie || !movieInfo) return <div>Movie data not found.</div>;

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
                                <p><strong>Режисер:</strong> {movieInfo.director}</p>
                                <h4>Рейтинг</h4>
                                <p>Агрегированное значение: {movieInfo.rating.aggregatedValue}</p>
                                <ul>
                                    {movieInfo.rating.ratings.map((serviceRating, index) => (
                                        <li key={index} style={{ color: 'white' }}>
                                            {serviceRating.service}: {serviceRating.rating}
                                        </li>
                                    ))}
                                </ul>
                                <h4>Актеры</h4>
                                <ul>
                                    {movieInfo.actorNames.map((actor, index) => (
                                        <li key={index} style={{ color: 'white' }}>{actor}</li>
                                    ))}
                                </ul>
                                <h4>Награды</h4>
                                <ul>
                                    {movieInfo.awardTitles.map((award, index) => (
                                        <li key={index} style={{ color: 'white' }}>{award}</li>
                                    ))}
                                </ul>
                            </Accordion.Body>
                        </Card>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
};

export default Movie;

