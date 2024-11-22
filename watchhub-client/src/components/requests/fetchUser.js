import config from "../../config";

export const fetchUser = async (username) => {
    try {
        const response = await fetch(`${config.serverUrl}/api/users?name=${username}`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Accept': '*/*',
            },
        });

        if (!response.ok) {
            throw new Error('Ошибка при получении данных пользователя');
        }

        return await response.json();
    } catch (error) {
        console.error('Ошибка:', error);
        throw error;
    }
}