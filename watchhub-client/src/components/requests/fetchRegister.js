import config from "../../config";

export const fetchRegister = async (userName, email, password) => {
    try {
        const response = await fetch(`${config.serverUrl}/api/auth/register`, {
            method: 'POST',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'UserName': userName,
                'Email': email,
                'Password': password
            })
        });

        if (!response.ok) {
            throw new Error('Ошибка при регистрации пользователя');
        }

        return await response.json();
    } catch (error) {
        console.error('Ошибка:', error);
        throw error;
    }
}