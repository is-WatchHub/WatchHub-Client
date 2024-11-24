import config from "../../config";

export const fetchLogin = async (userName, password) => {
    try {
        const response = await fetch(`${config.serverUrl}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                'userName': userName,
                'password': password,
                'rememberMe': true
            })
        });

        if (!response.ok) {
            throw new Error('Ошибка при входе пользователя');
        }

        return await response.json();
    } catch (error) {
        console.error('Ошибка:', error);
        throw error;
    }
}