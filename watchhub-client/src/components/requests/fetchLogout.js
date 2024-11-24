import config from "../../config";

export const fetchLogout = async () => {
    try {
        const response = await fetch(`${config.serverUrl}/api/auth/logout`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': '*/*',
            }
        });

        if (!response.ok) {
            throw new Error('Ошибка при выходе пользователя');
        }

        return await response.json();
    } catch (error) {
        console.error('Ошибка:', error);
    }
}