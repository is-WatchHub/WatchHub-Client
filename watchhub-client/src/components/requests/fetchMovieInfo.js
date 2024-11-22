import config from "../../config";

export const fetchMovieInfo = async (id) => {
    try {
        const response = await fetch(`${config.serverUrl}/api/integrations/${id}`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'accept': '*/*',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch movie information');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching movie information:', error);
        throw error;
    }
};
