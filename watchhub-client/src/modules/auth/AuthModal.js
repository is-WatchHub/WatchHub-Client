import React, { useState } from 'react';
import { Modal, Form, Button, Alert } from 'react-bootstrap';

const AuthModal = ({ show, onHide, onAuthSuccess }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '', login: '' });
    const [validated, setValidated] = useState(false);
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        e.preventDefault();
        e.stopPropagation();

        if (form.checkValidity() === false) {
            setValidated(true);
            return;
        }

        setMessage('');
        const { email, password, login } = formData;

        setTimeout(() => {
            if (isLogin) {
                if (login === 'test11' && password === 'Test123!') {
                    setMessage('Успешный вход!');
                    onAuthSuccess();
                } else {
                    setMessage('Неверный email или пароль.');
                }
            } else {
                if (email === 'existing@example.com') {
                    setMessage('Пользователь с таким email уже существует.');
                } else if (password.length < 6) {
                    setMessage('Пароль слишком короткий.');
                } else if (!/^[a-zA-Z0-9_]{4,20}$/.test(login)) {
                    setMessage('Неверный формат логина.');
                } else {
                    setMessage('Регистрация успешна!');
                    onAuthSuccess();
                }
            }
        }, 1000);
    };

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton style={{ backgroundColor: 'orange' }}>
                <Modal.Title style={{ backgroundColor: 'orange' }}>{isLogin ? 'Вход' : 'Регистрация'}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: 'orange' }}>
                {message && <Alert variant="success">{message}</Alert>}
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    {isLogin && (
                        <Form.Group className="mb-3" controlId="formLogin">
                            <Form.Label>Логин</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Введите логин"
                                name="login"
                                value={formData.login}
                                onChange={handleInputChange}
                                required
                                minLength={4}
                                maxLength={20}
                                pattern="^[a-zA-Z0-9_]{4,20}$"
                            />
                            <Form.Control.Feedback type="invalid">
                                Логин должен быть длиной от 4 до 20 символов и может содержать буквы, цифры и подчеркивания.
                            </Form.Control.Feedback>
                        </Form.Group>
                    )}

                    {!isLogin && (
                        <>
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Почта</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Введите почту"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Пожалуйста, введите действительный email.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formLogin">
                                <Form.Label>Логин</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Введите логин"
                                    name="login"
                                    value={formData.login}
                                    onChange={handleInputChange}
                                    required
                                    minLength={4}
                                    maxLength={20}
                                    pattern="^[a-zA-Z0-9_]{4,20}$"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Логин должен быть длиной от 4 до 20 символов и может содержать буквы, цифры и подчеркивания.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </>
                    )}

                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Пароль"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                            minLength={6}
                            maxLength={64}
                            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{6,64}$"
                        />
                        <Form.Control.Feedback type="invalid">
                            Пароль должен быть длиной от 6 до 64 символов и содержать хотя бы одну заглавную букву, одну строчную букву и одну цифру или специальный символ.
                        </Form.Control.Feedback>
                    </Form.Group>

                    {!isLogin && (
                        <Form.Group className="mb-3" controlId="formConfirmPassword">
                            <Form.Label>Подтверждение пароля</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Подтвердите пароль"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                required
                                isInvalid={formData.password !== formData.confirmPassword}
                            />
                            <Form.Control.Feedback type="invalid">
                                Пароли не совпадают.
                            </Form.Control.Feedback>
                        </Form.Group>
                    )}

                    <Button variant="success" type="submit">
                        {isLogin ? 'Войти' : 'Зарегистрироваться'}
                    </Button>
                </Form>
                <Button
                    variant="outline-success"
                    onClick={() => {
                        setIsLogin(!isLogin);
                        setMessage('');
                        setValidated(false);
                    }}
                    className="mt-3"
                >
                    {isLogin ? 'Перейти к регистрации' : 'Перейти ко входу'}
                </Button>
            </Modal.Body>
        </Modal>
    );
};

export default AuthModal;
