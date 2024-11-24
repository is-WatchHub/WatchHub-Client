import config from "../../config";

export const fetchMovie = async (id) => {
    try {
        const cookieValue = document.cookie;
        console.log(cookieValue)
        const response = await fetch(`${config.serverUrl}/api/movies/${id}`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch movie data');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching movie:', error);
        throw error;
    }
};
