import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            const mockUserData = {
                username: 'john_doe',
                email: 'john.doe@example.com',
                role: 'user'
            };
            setUserData(mockUserData);
            setLoading(false);
        }, 2000);
    }, []);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '77vh' }}>
                <Spinner animation="border" variant="light" />
            </div>
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
                                    <strong>Имя пользователя:</strong> {userData.username}
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

