import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import {fetchUser} from "../components/requests/fetchUser";

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const username = localStorage.getItem('username');
        setLoading(true);
        fetchUser(username)
            .then((data) => {
                setUserData(data);
            })
            .catch((err) => {
                setError(true);
                console.error(err);
            })
            .finally(() => {
                setLoading(false);
            });
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
            <Container fluid className="d-flex justify-content-center align-items-center" style={{ height: '77vh' }}>
                <Row>
                    <Col>
                        <div className="text-center text-danger">{'Ошибка при загрузке данных пользователя'}</div>
                    </Col>
                </Row>
            </Container>
        );
    }

    return (
        <Container fluid className="d-flex justify-content-center align-items-center" style={{ height: '77vh' }}>
            <Row className="justify-content-center w-100">
                <Col md={6} className="d-flex justify-content-center">
                    <Card className="shadow-lg w-100" style={{ backgroundColor: 'black', color: 'white' }}>
                        <Card.Body>
                            <Card.Title className="text-center">Профиль</Card.Title>
                            <Row>
                                <Col md={12} className="mb-3">
                                    <strong>Имя пользователя:</strong> {userData.userName}
                                </Col>
                                <Col md={12} className="mb-3">
                                    <strong>Почта:</strong> {userData.email}
                                </Col>
                                <Col md={12} className="mb-3">
                                    <strong>Роль:</strong> {userData.role}
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Profile;