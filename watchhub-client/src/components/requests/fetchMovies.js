import config from "../../config";

export const fetchMovies = async () => {
    try {
        const response = await fetch(`${config.serverUrl}/api/movies`, {
            method: 'GET',
            headers: {
                'Accept': '*/*'
            },
        });

        if (!response.ok) {
            throw new Error('Ошибка при получении фильмов');
        }

        return await response.json();
    } catch (error) {
        console.error('Ошибка:', error);
        throw error;
    }
};
